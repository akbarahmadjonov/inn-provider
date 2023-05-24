import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [inn, setInn] = useState("");

  const handleInput = (event) => {
    const valueOfInput = event.target.value.slice(0, 7);
    setInn(valueOfInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const dataOfInn = {
    inn: inn,
  };

  fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataOfInn),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  return (
    <div className="App">
      <h1>Hello world</h1>

      <div className="wrapper d-flex justify-content-center">
        <div className="functionInner w-25">
          <input
            onChange={handleInput}
            value={inn}
            type="number"
            placeholder="Введите свой ИНН"
            autoFocus
            maxLength={7}
          />
        </div>
        <div className="postsInner w-25">
          <form onSubmit={handleSubmit} action="">
            <p>
              Узнайте свой ИНН или ПИНФЛ{" "}
              <strong>
                <mark>{inn}</mark>
              </strong>
              . Данная услуга позволяет определить, состоит ли гражданин на
              учете в качестве налогоплательщика в органах государственной ...
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
