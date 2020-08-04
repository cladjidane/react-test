import React from "react";

const EventListenenerFail: React.FunctionComponent = () => {
  const [valueFail, setValueFail] = React.useState(42);

  React.useEffect(() => {
    let el = document.getElementById("buttonFail");
    if (el) {
      el.addEventListener("click", function () {
        setValueFail(valueFail + 1);
      });
    }
  }, []);

  React.useEffect(() => {
    console.log("Update state");
  }, [valueFail]);

  return (
    <div>
      <h3>Valeur : {valueFail}</h3>
      <button id="buttonFail">Add</button>
    </div>
  );
};

export default EventListenenerFail;
