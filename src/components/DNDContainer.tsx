import { useState } from "react";

import OptionsTypeContainer from "./options/OptionsTypeContainer";
import { Option } from "./interfaces/option";
import Options from "./options/Options";

const initialOptions: Option[] = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
  { id: "4", value: "Option 4" },
];

export default function DNDContainer() {
  const [available, setAvailable] = useState<Option[]>(initialOptions);
  const [selected, setSelected] = useState<Option[]>([]);

  return (
    <div className="flex justify-center gap-4">
      <OptionsTypeContainer>
        <h2 className="mb-4">Available Options</h2>

        <Options options={available} />
      </OptionsTypeContainer>

      <OptionsTypeContainer>
        <h2 className="mb-4">Selected Options</h2>

        <Options options={selected} />
      </OptionsTypeContainer>
    </div>
  );
}
