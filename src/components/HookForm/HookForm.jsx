import useInputField from "../../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", name, email, password);
  };
  return (
    <div>
      <h2>Custom Hook Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="your name"
          defaultValue={name}
          onChange={nameOnChange}
        />
        <br />
        <input
          type="email"
          onChange={emailOnChange}
          defaultValue={email}
          placeholder="email address"
        />
        <br />
        <input type="password" onChange={passwordOnChange} defaultValue={password} placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
