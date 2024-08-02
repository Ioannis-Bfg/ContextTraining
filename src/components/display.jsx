import { DisplayContext } from "../context/displayContext";
import { useContext } from "react";

export default function Display() {
  const { displayValue } = useContext(DisplayContext);
  return (
    <div className="bg-[#f3e7d0] rounded-lg flex-1 text-zinc-700 font-bold text-6xl flex justify-end items-center px-4 py-4 overflow-x-auto">
      {displayValue}
    </div>
  );
}
