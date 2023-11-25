import { useContext } from "react";
import { NavigationContext } from "../store/navigation.context";

const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error("Must be used with NavigationContext");
  }

  return context;
};

export default useNavigation;
