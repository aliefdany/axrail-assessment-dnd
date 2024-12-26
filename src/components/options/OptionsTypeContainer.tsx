import { DragEvent, ReactNode, useContext } from "react";
import { OptionType } from "../enums/OptionType";
import { optionsContext } from "../contexts/OptionsContext";

export default function OptionsTypeContainer({
  children,
  type,
}: {
  type: OptionType;
  children: (type: OptionType) => ReactNode;
}) {
  const { handleDragEnter } = useContext(optionsContext);

  return (
    <div
      id={type}
      onDragEnter={handleDragEnter}
      className="w-72 aspect-square border-2 rounded p-2"
    >
      {children(type)}
    </div>
  );
}
