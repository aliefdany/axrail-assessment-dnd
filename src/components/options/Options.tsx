import { ReactNode } from "react";
import { Option } from "../interfaces/option";
import OptionItem from "./OptionItem";

interface OptionsContainerProp {
  children?: ReactNode;
  options: Option[];
}

export default function Options({ options }: OptionsContainerProp) {
  return (
    <ul className="space-y-1">
      {options.map(({ id, value }) => (
        <OptionItem key={id} id={id} value={value} />
      ))}
    </ul>
  );
}
