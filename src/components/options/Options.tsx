import { ReactNode } from "react";
import { Option } from "../interfaces/option";
import OptionItem from "./OptionItem";
import { OptionType } from "../enums/OptionType";

interface OptionsContainerProp {
  children?: ReactNode;
  options: Option[];
  type: OptionType;
}

export default function Options({ options, type }: OptionsContainerProp) {
  return (
    <ul className="space-y-1">
      {options.map(({ id, value }) => (
        <OptionItem key={id} id={`${type}-${id}`} value={value} />
      ))}
    </ul>
  );
}
