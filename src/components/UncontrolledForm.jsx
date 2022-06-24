import { createRef } from "react";

export const UncontrolledForm = () => {
  const nameRef = createRef()
  const colorRef = createRef()
  const ageRef = createRef()

  const submitForm = e => {
    e.preventDefault();
    console.log(nameRef.current.value)
    console.log(colorRef.current.value)
    console.log(ageRef.current.value)
    if (ageRef.current.value < 18) {
      console.log('You cannot register here')
    }
  }

  return (
    <form onSubmit={submitForm} >
      <h3>Uncontrolled</h3>
      <input name="Name" placeholder="Full Name" ref={nameRef} />
      <input name="color" placeholder="Hair Color" ref={colorRef} />
      <input name="age" placeholder="Age" ref={ageRef} />
      <button type="submit" >Submit</button>
    </form>
  );
};
