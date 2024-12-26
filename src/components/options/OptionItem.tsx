import { Option } from "../interfaces/option";

export default function OptionItem({ id, value }: Option) {
  return (
    <li draggable id={id} className="border-2 rounded p-2 cursor-pointer">
      <p>{value}</p>
    </li>
  );
}
