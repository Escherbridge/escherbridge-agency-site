export function RecursiveField() {
  return <div className="recursive-field" aria-hidden="true">
    <div className="bridge-field">
      <span className="bridge-bank bank-left" /><span className="bridge-bank bank-right" />
      <span className="bridge-deck deck-near" /><span className="bridge-deck deck-far" />
      <span className="bridge-pier pier-one" /><span className="bridge-pier pier-two" />
      <span className="bridge-node node-one" /><span className="bridge-node node-two" /><span className="bridge-node node-three" />
    </div>
    <div className="orbit-label orbit-one">VISION / 01</div><div className="orbit-label orbit-two">CODE / 02</div>
  </div>;
}
