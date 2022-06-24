export const ControlledForm = ({ onChange, formValues, onSubmit }) => {

  return (
    <form onSubmit={onSubmit}>
      <h3>Controlled</h3>
      <input
        name="name"
        placeholder="Full Name"
        onChange={onChange}
        value={formValues.name}
      />
      <input
        name="color"
        placeholder="Hair Color"
        onChange={onChange}
        value={formValues.color}
      />
      <input
        name="age"
        placeholder="Age"
        onChange={onChange}
        value={formValues.age}
      />
      <button type="submit" disabled={Number(formValues.age) < 18} >Submit</button>
    </form>
  );
};
