import React from "react";

function Widget({ widget, onRemove }) {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      {widget.graphImg?<img src={widget.graphImg} alt="graph"/>:<img src="https://community.esri.com/t5/image/serverpage/image-id/41766iE76B54EB8627BC13/image-size/medium?v=v2&px=400" alt="graph"/>}
      <p>{widget.content}</p>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default Widget;
