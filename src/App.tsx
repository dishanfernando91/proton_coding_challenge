import { Table, NavPad } from "src/components";
import { NavigationProvider } from "./store/navigation.context";

import "./App.css";

function App() {
  return (
    <NavigationProvider>
      <Table />
      <NavPad />
    </NavigationProvider>
  );
}

export default App;
