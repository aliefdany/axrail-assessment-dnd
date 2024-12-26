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

  const [dragged, setDragged] = useState<{
    idx: string;
    type: OptionType;
  }>({ idx: initialOptions[0].id, type: OptionType.AVAILABLE });

  const [target, setTarget] = useState<OptionType>(OptionType.AVAILABLE);

  function handleDragStart(event: DragEvent) {
    // ex: available-1
    const idFromElem = (event.target as HTMLLIElement).id;

    const id = idFromElem.split("-")[1];
    const type = idFromElem.split("-")[0] as OptionType;

    const idx = String(options[type].findIndex((opt) => opt.id === id));

    setDragged({ idx, type });
  }

  function handleDragEnter(event: DragEvent) {
    event.stopPropagation();

    let enterType = (event.target as HTMLDivElement).id.split(
      "-"
    )[0] as OptionType;

    if (Object.values(OptionType).includes(enterType)) {
      setTarget(enterType);
    }
  }

  function handleDragEnd(event: DragEvent) {
    moveOption(dragged.type);

    function moveOption(origin: OptionType) {
      if (!Object.values(OptionType).includes(target)) {
        return;
      }

      if (origin === target) {
        return;
      }

      let originOptionsCopy = [...options[dragged.type]];

      let removed = originOptionsCopy.splice(Number(dragged.idx), 1);

      let targetOptionsCopy = [...options[target], ...removed];

      setOptions({
        [dragged.type]: originOptionsCopy,
        [target]: targetOptionsCopy,
      });
    }
  }

  return (
    <div className="flex justify-center items-start gap-4">
      <Provider value={{ handleDragStart, handleDragEnter, handleDragEnd }}>
        <OptionsTypeContainer type={OptionType.AVAILABLE}>
          {(type: OptionType) => (
            <>
              <h2 className="mb-4 text-xl font-semibold">Available Options</h2>
              <Options options={options[type]} type={type} />
            </>
          )}
        </OptionsTypeContainer>

        <OptionsTypeContainer type={OptionType.SELECTED}>
          {(type: OptionType) => (
            <>
              <h2 className="mb-4 text-xl font-semibold">Selected Options</h2>
              <Options options={options[type]} type={type} />
            </>
          )}
        </OptionsTypeContainer>
      </Provider>
    </div>
  );
}
