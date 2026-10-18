import { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault;
    console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
  };
  return (
    <div>
      <h2>UnControlled Field</h2>
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="your email address"
        />
        <br />
        <input
          ref={passRef}
          type="password"
          name="password"
          placeholder="your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
