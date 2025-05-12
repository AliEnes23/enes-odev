import React from "react";
import ButtonComponent from "./button-component";
import DisplayComponent from "./display-component";

const MediatorExample: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Mediator Pattern Örneği</h2>
      <div className="flex gap-2">
        <ButtonComponent label="Selam" message="Selam gönderildi!" />
        <ButtonComponent label="Uyarı" message="Bir uyarı yapıldı!" />
        <ButtonComponent label="Teşekkür" message="Teşekkür edildi!" />
      </div>
      <DisplayComponent />
    </div>
  );
};

export default MediatorExample;
