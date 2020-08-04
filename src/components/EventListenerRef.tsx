import React from "react";

const EventListenenerRef: React.FunctionComponent = () => {
  const [valueRef, _setValueRef] = React.useState(42);
  let refValue = React.useRef(valueRef);
  const setValue = (data: number) => {
    refValue.current = data;
    _setValueRef(data);
  };

  React.useEffect(() => {
    let el = document.getElementById("buttonRef");
    if (el) {
      el.addEventListener("click", function () {
        setValue(refValue.current + 1);
      });
    }
  }, []);

  React.useEffect(() => {
    console.log("Update valueRef");
  }, [valueRef]);

  return (
    <div>
      <h3>Valeur : {valueRef}</h3>
      <button id="buttonRef">Add</button>
    </div>
  );
};

export default EventListenenerRef;
