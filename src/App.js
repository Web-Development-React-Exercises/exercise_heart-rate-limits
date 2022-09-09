import './App.css';
import { useState } from "react";

function App() {
  const [age, setAge] = useState();
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const lower = (200 - age) * 0.65;
    const upper = (200 - age) * 0.85;
    setLowerLimit(Math.trunc(lower));
    setUpperLimit(Math.trunc(upper));
  }

  return (
    <div>
      <h3>Heart Rate Limits</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Age</label>
          <input type="text" placeholder="Age here" onChange={e => setAge(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="">Heart Rate Limits</label>
          <output>{lowerLimit}-{upperLimit}</output>
        </div>
        <button onClick={handleSubmit}>Calculate</button>
      </form>
    </div>
  );
}

export default App;
