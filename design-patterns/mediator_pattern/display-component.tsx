import React, { useEffect, useState } from "react";
import { mediator } from "./mediator";

const DisplayComponent: React.FC = () => {
  const [message, setMessage] = useState("Henüz mesaj yok");

  useEffect(() => {
    mediator.subscribe(setMessage);
    return () => mediator.unsubscribe(setMessage);
  }, []);

  return (
    <div className="border p-4 mt-4 rounded bg-gray-100 text-center">
      <strong>Mesaj:</strong> {message}
    </div>
  );
};

export default DisplayComponent;
