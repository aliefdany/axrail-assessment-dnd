import { createContext } from "react";
import { Option } from "../interfaces/option";

interface OptionsContext {
  selected: Option[];
  available: Option[];
}

const initialOptions: Option[] = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
  { id: "4", value: "Option 4" },
];

const optionsContext = createContext<OptionsContext>({
  available: initialOptions,
  selected: [],
});

const { Provider } = optionsContext;

export default Provider;
