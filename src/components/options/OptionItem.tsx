import { useContext } from "react";
import { Option } from "../interfaces/option";
import { optionsContext } from "../contexts/OptionsContext";

export default function OptionItem({ id, value }: Option) {
  const { handleDragStart, handleDragEnd } = useContext(optionsContext);

  return (
    <li
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      id={id}
      className="border-2 rounded-md p-2 cursor-pointer shadow-sm hover:bg-neutral-200"
    >
      <p>{value}</p>
    </li>
  );
}
