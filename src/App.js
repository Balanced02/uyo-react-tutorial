import { useState } from "react";
import "./App.css";
import { addTwo } from "./components/addTwo";
import { printProps } from "./components/printProps";
import { withUser } from "./components/withUser";

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

const WrappedButton = printProps(CounterButton)
const AddTwoWrapped = addTwo(CounterButton)

const UserItem = ({ user, loading }) => {
  return loading ? <p>Loading...</p> : <div>
    <h3>Name: {user.name}</h3>
    <h3>Age: {user.age}</h3>
  </div>
}

const WrappedUser = withUser(UserItem)

function App() {
  
  return (
    <div className="container">
      <WrappedButton increment={2} color="green" title="Counter" />
      <AddTwoWrapped increment={10} color="green" title="Counter" />
      <WrappedUser />
    </div>
  );
}


export default App;
