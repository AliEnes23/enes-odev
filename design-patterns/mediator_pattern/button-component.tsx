import React from "react";
import { mediator } from "./mediator";

interface ButtonComponentProps {
  label: string;
  message: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ label, message }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded m-2"
      onClick={() => mediator.notify(message)}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
