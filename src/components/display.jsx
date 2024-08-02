import { DisplayContext } from "../context/displayContext";
import { useContext } from "react";

export default function Display() {
  const { displayValue } = useContext(DisplayContext);
  return (
    <div className="bg-red-500 rounded-lg flex-1 text-white font-bold text-6xl flex justify-end items-end px-4 py-4 overflow-x-auto">
      {displayValue}
    </div>
  );
}
