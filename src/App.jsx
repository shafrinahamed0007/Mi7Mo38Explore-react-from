import "./App.css";
import ControlledFiled from "./components/ControlledField/ControlledFiled";
import FormAction from "./components/FormAction/FormAction";
import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <br />
      <FormAction />
      <br />
      <ControlledFiled />
    </>
  );
}

export default App;
