import { DragEvent, useState } from "react";

import Provider from "./contexts/OptionsContext";
import OptionsTypeContainer from "./options/OptionsTypeContainer";
import { Option } from "./interfaces/option";
import Options from "./options/Options";
import { OptionType } from "./enums/OptionType";

const initialOptions: Option[] = [
  { id: "1", value: "Option 1" },
  { id: "2", value: "Option 2" },
  { id: "3", value: "Option 3" },
  { id: "4", value: "Option 4" },
];

export default function DNDContainer() {
  const [options, setOptions] = useState<{ [key: string]: Option[] }>({
    [OptionType.AVAILABLE]: initialOptions,
    [OptionType.SELECTED]: [],
  });

  const [draggedOption, setDraggedOption] = useState<{
    id: string;
    type: OptionType;
  }>({ id: initialOptions[0].id, type: OptionType.AVAILABLE });

  const [target, setTarget] = useState<OptionType>(OptionType.AVAILABLE);

  function handleDragStart(event: DragEvent) {
    // ex: available-1
    const idFromElem = (event.target as HTMLLIElement).id;

    const id = idFromElem.split("-")[1];
    const type = idFromElem.split("-")[0] as OptionType;

    const idx = String(options[type].findIndex((opt) => opt.id === id));

    setDraggedOption({ id: idx, type });
  }

  function handleDragEnter(event: DragEvent) {
    event.stopPropagation();

    let enterType = (event.target as HTMLDivElement).id as OptionType;

    setTarget(enterType);
  }

  function handleDragEnd(event: DragEvent) {
    moveOption(draggedOption.type);

    function moveOption(origin: OptionType) {
      if (!Object.values(OptionType).includes(target)) {
        return;
      }

      if (origin === target) {
        return;
      }

      let originOptionsCopy = [...options[draggedOption.type]];

      let removed = originOptionsCopy.splice(Number(draggedOption.id), 1);

      let targetOptionsCopy = [...options[target], ...removed];

      setOptions({
        [draggedOption.type]: originOptionsCopy,
        [target]: targetOptionsCopy,
      });
    }
  }

  return (
    <div className="flex justify-center gap-4">
      <Provider value={{ handleDragStart, handleDragEnter, handleDragEnd }}>
        <OptionsTypeContainer type={OptionType.AVAILABLE}>
          {(type: OptionType) => (
            <>
              <h2 className="mb-4">Available Options</h2>
              <Options options={options[type]} type={type} />
            </>
          )}
        </OptionsTypeContainer>

        <OptionsTypeContainer type={OptionType.SELECTED}>
          {(type: OptionType) => (
            <>
              <h2 className="mb-4">Selected Options</h2>
              <Options options={options[type]} type={type} />
            </>
          )}
        </OptionsTypeContainer>
      </Provider>
    </div>
  );
}
