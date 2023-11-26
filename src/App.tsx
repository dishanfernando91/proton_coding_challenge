import { Table, NavPad } from "./components";
import { NavigationProvider } from "./store/navigation.context";

import "./App.css";

function App() {
  return (
    <NavigationProvider>
      <div className="body">
        <Table />
        <NavPad />
      </div>
    </NavigationProvider>
  );
}

export default App;
