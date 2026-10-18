import "./App.css";
import ControlledFiled from "./components/ControlledField/ControlledFiled";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      <SimpleForm></SimpleForm>
      <br />
      <FormAction />
      <br />
      <ControlledFiled />
      <br />
      <UnControlledField />
      <br />
      <HookForm />
    </>
  );
}

export default App;
