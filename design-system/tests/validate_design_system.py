from pathlib import Path
import xml.etree.ElementTree as ET
import json

root = Path(__file__).resolve().parents[1]
issues = []
for svg in root.rglob("*.svg"):
    try:
        element = ET.parse(svg).getroot()
        if not element.attrib.get("viewBox"):
            issues.append(("SVG missing viewBox", str(svg)))
    except Exception as error:
        issues.append(("Invalid SVG", str(svg), str(error)))
for source in root.rglob("*.json"):
    try:
        json.loads(source.read_text(encoding="utf-8"))
    except Exception as error:
        issues.append(("Invalid JSON", str(source), str(error)))
icons = [p for p in (root / "assets/icons").glob("*.svg") if p.stem != "sprite"]
if len(icons) != 59:
    issues.append(("Unexpected icon count", len(icons)))

tokens = json.loads((root/"tokens/thread.tokens.json").read_text(encoding="utf-8"))["semantic"]
stylesheet = (root/"tokens/thread.css").read_text(encoding="utf-8")
for role in tokens["light"]:
    if "--thread-" + role + ":" not in stylesheet:
        issues.append(("Missing CSS token", role))
    if role not in tokens["dark"]:
        issues.append(("Missing dark token", role))

def luminance(hex_color):
    rgb = [int(hex_color[i:i+2], 16)/255 for i in (1,3,5)]
    values = [value/12.92 if value <= 0.04045 else ((value+0.055)/1.055)**2.4 for value in rgb]
    return .2126*values[0]+.7152*values[1]+.0722*values[2]
def contrast(a,b):
    x,y=sorted([luminance(a),luminance(b)],reverse=True)
    return (x+.05)/(y+.05)
pairs=[("text-primary","surface"),("text-secondary","surface"),("text-tertiary","surface"),("accent","surface"),("success","success-bg"),("warning","warning-bg"),("danger","danger-bg"),("info","info-bg"),("accent-on","accent")]
for theme in ("light","dark"):
    palette=tokens[theme]
    for fg,bg in pairs:
        ratio=contrast(palette[fg],palette[bg])
        print(theme,fg,bg,round(ratio,2))
        if ratio < 4.5:
            issues.append(("WCAG AA contrast",theme,fg,bg,round(ratio,2)))
print("Found",len(icons),"source icons; issues:",issues)
if issues:
    raise SystemExit(1)
