import { useState } from "react";
import "./App.css";

const CounterButton = ({ increment, color, title }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h3>{title}</h3>
      <p style={{ color }} >Current count: {counter}</p>
      <button onClick={() => setCounter(counter + increment)}>Increase count</button>
    </div>
  );
};

const commonProps = {
  increment: 1,
  color: 'black',
  title: 'Common Title'
}

/**
 * 
 * JSX Code => React.createElement('CounterButton', {
 * ...commonProps
 * title,
 * })
 * 
 */

function Props() {
  return <div className="container">
    <CounterButton title="Counter" {...commonProps} />
    <CounterButton {...commonProps} title="Counter 2" />
    <CounterButton {...commonProps} title="Counter 3" />
  </div>;
}

export default Props;
