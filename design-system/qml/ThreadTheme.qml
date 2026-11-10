pragma Singleton
import QtQuick

QtObject {
    property bool dark: false
    readonly property color canvas: dark ? "#111628" : "#F5F6FB"
    readonly property color surface: dark ? "#1B2237" : "#FFFFFF"
    readonly property color surfaceMuted: dark ? "#222A40" : "#F7F8FC"
    readonly property color surfaceAccent: dark ? "#302B58" : "#F0EFFF"
    readonly property color textPrimary: dark ? "#F3F5FF" : "#18223A"
    readonly property color textSecondary: dark ? "#BBC5DF" : "#596681"
    readonly property color textTertiary: dark ? "#AAB6D1" : "#616E88"
    readonly property color border: dark ? "#343E56" : "#E1E5F0"
    readonly property color borderStrong: dark ? "#536078" : "#C8D0DE"
    readonly property color accent: dark ? "#ABA5FF" : "#5449D8"
    readonly property color accentHover: dark ? "#C5C0FF" : "#4035C0"
    readonly property color accentPressed: dark ? "#8E83F6" : "#3026A1"
    readonly property color accentOn: dark ? "#111628" : "#FFFFFF"
    readonly property color success: dark ? "#80D9B8" : "#086C55"
    readonly property color successBg: dark ? "#173D35" : "#EAF8F2"
    readonly property color warning: dark ? "#F3CD7B" : "#965400"
    readonly property color warningBg: dark ? "#493616" : "#FFF4DD"
    readonly property color danger: dark ? "#FF9DA8" : "#AA263C"
    readonly property color dangerBg: dark ? "#4C2531" : "#FFF0F2"
    readonly property color info: dark ? "#9DC0FF" : "#315B9E"
    readonly property color infoBg: dark ? "#223752" : "#ECF3FF"
    readonly property int headerPx: 64
    readonly property int navRailPx: 76
    readonly property int explorerPx: 280
    readonly property int inspectorPx: 306
    readonly property int radiusMd: 8
}
