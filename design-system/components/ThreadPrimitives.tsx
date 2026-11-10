/** THREAD v1 — typed reference components for design-to-code handoff.
 * Proposed design-system components, NOT yet adopted by app/src.
 * Run the live application from app/; integrate these primitives incrementally.
 */
import * as React from 'react';
import '../tokens/thread.css';
import './thread-primitives.css';

type Variant = 'primary' | 'secondary' | 'quiet' | 'danger';
type Size = 'compact' | 'default' | 'large';
type Status = 'healthy' | 'watch' | 'at-risk' | 'info' | 'unavailable';
const classes = (...names: (string | undefined | false)[]) => names.filter(Boolean).join(' ');

export interface ThreadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant; size?: Size; loading?: boolean; leading?: React.ReactNode;
}
export function ThreadButton({variant='secondary',size='default',loading=false,leading,disabled,children,className,...rest}:ThreadButtonProps) {
  return <button {...rest} type={rest.type || 'button'} className={classes('thread-button','thread-button--'+variant,'thread-button--'+size,className)} disabled={disabled||loading} aria-busy={loading}>
    {leading && <span className="thread-button__icon" aria-hidden="true">{leading}</span>}
    <span>{loading ? 'Working…' : children}</span>
  </button>;
}

export function ThreadBadge({status,children}:{status:Status;children:React.ReactNode}) {
  return <span className={classes('thread-badge','thread-badge--'+status)}><span className="thread-badge__dot" aria-hidden="true" />{children}</span>;
}

export interface ThreadFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label:string; hint?:string; error?:string;
}
export function ThreadField({label,hint,error,id,required,...rest}:ThreadFieldProps) {
  const fallback=React.useId(); const inputId=id||'thread-field-'+fallback;
  const hintId=hint?inputId+'-hint':undefined;
  const errorId=error?inputId+'-error':undefined;
  return <div className="thread-field">
    <label htmlFor={inputId}>{label}{required&&<span aria-hidden="true"> *</span>}</label>
    <input {...rest} id={inputId} required={required} aria-invalid={!!error} aria-describedby={[hintId,errorId].filter(Boolean).join(' ')||undefined}/>
    {hint&&<p className="thread-field__hint" id={hintId}>{hint}</p>}
    {error&&<p className="thread-field__error" id={errorId} role="alert">{error}</p>}
  </div>;
}

export function ThreadPanel({title,kicker,actions,children}:{title:string;kicker?:string;actions?:React.ReactNode;children:React.ReactNode}) {
  return <section className="thread-panel" aria-label={title}>
    <div className="thread-panel__heading"><div>{kicker&&<span className="thread-panel__kicker">{kicker}</span>}<h2>{title}</h2></div>{actions}</div>
    <div className="thread-panel__content">{children}</div>
  </section>;
}

export function ThreadMetric({label,value,unit,detail,trend='neutral'}:{label:string;value:string|number;unit?:string;detail?:string;trend?:'neutral'|'good'|'bad'}) {
  return <div className="thread-metric">
    <span className="thread-metric__label">{label}</span>
    <strong className={classes('thread-metric__value','thread-metric__value--'+trend)}>{value}{unit&&<small> {unit}</small>}</strong>
    {detail&&<span className="thread-metric__detail">{detail}</span>}
  </div>;
}

export interface ThreadProductRowProps {
  name:string;sku:string;stock:string;status:Status;selected:boolean;onSelect:()=>void;leading?:React.ReactNode;
}
export function ThreadProductRow({name,sku,stock,status,selected,onSelect,leading}:ThreadProductRowProps) {
  const labels:Record<Status,string>={healthy:'Healthy',watch:'Watch','at-risk':'At risk',info:'Info',unavailable:'Unavailable'};
  return <button type="button" className={classes('thread-product-row',selected&&'is-selected')} aria-pressed={selected} onClick={onSelect}>
    <span className="thread-product-row__avatar" aria-hidden="true">{leading||'◈'}</span>
    <span className="thread-product-row__copy"><strong>{name}</strong><span>{sku}</span><span>{stock}</span></span>
    <ThreadBadge status={status}>{labels[status]}</ThreadBadge>
  </button>;
}

export function ThreadTabs({items,selected,onSelect,label='View'}:{items:{id:string;label:string}[];selected:string;onSelect:(id:string)=>void;label?:string}) {
  const refs=React.useRef<Record<string,HTMLButtonElement|null>>({});
  const onKeyDown=(event:React.KeyboardEvent<HTMLDivElement>)=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key)||items.length===0)return;
    event.preventDefault(); const index=Math.max(0,items.findIndex(x=>x.id===selected));
    const next=event.key==='Home'?0:event.key==='End'?items.length-1:(index+(event.key==='ArrowRight'?1:-1)+items.length)%items.length;
    onSelect(items[next].id); refs.current[items[next].id]?.focus();
  };
  return <div className="thread-tabs" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
    {items.map(item=><button key={item.id} ref={el=>{refs.current[item.id]=el;}} role="tab" type="button" tabIndex={item.id===selected?0:-1} aria-selected={item.id===selected} onClick={()=>onSelect(item.id)}>{item.label}</button>)}
  </div>;
}
