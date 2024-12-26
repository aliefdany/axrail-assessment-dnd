import { ReactNode } from "react";

export default function OptionsTypeContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="w-72 aspect-square border-2 rounded p-2">{children}</div>
  );
}
