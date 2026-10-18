import { useState } from "react";

const ControlledFiled = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    console.log(name, email, password);
    setPassword(e.target.value);
    if (password.length < 6) {
      setError("Password must me 6 character or more");
    } else {
      setError("");
    }
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const hanldeNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Controlled Field</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={name}
          name="name"
          placeholder="your full name"
          onChange={hanldeNameChange}
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          defaultValue={email}
          placeholder="your email address"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          placeholder="your password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledFiled;
