import React from "react";

const EventListenenerVar: React.FunctionComponent = () => {
  const [valueVar, _setValueVar] = React.useState(42);
  let val = valueVar;
  const setValue = (data: number) => {
    val = data;
    _setValueVar(data);
  };

  React.useEffect(() => {
    let el = document.getElementById("buttonVar");
    if (el) {
      el.addEventListener("click", function () {
        setValue(val + 1);
      });
    }
  }, []);

  React.useEffect(() => {
    console.log("Update valueVar");
  }, [valueVar]);

  return (
    <div>
      <h3>Valeur : {valueVar}</h3>
      <button id="buttonVar">Add</button>
    </div>
  );
};

export default EventListenenerVar;
