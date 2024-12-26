import { createContext, DragEvent } from "react";

interface OptionsContext {
  handleDragStart?: (e: DragEvent) => void;
  handleDragEnter?: (e: DragEvent) => void;
  handleDragEnd?: (e: DragEvent) => void;
}

const optionsContext = createContext<OptionsContext>({});

const { Provider } = optionsContext;

export default Provider;

export { optionsContext };
