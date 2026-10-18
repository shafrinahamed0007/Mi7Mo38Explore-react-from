import { useState } from "react";

const ControlledFiled = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handlePasswordOnChange = (e) => {
    // console.log(e.target.value)
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("Password must me 6 character or more");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <h2>Controlled Field</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id=""
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
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledFiled;
