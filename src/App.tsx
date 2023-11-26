import { Table, NavPad } from "./components";
import { RobotControlProvider } from "./store/robotControl/robotControl.context";

import "./App.css";

function App() {
  return (
    <RobotControlProvider>
      <div className="body">
        <Table />
        <NavPad />
      </div>
    </RobotControlProvider>
  );
}

export default App;
