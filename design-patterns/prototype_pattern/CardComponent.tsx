import React from "react";

type Props = {
  title: string;
  description: string;
  color: string;
};

const CardComponent: React.FC<Props> = ({ title, description, color }) => {
  return (
    <div className={`p-4 rounded shadow text-white`} style={{ backgroundColor: color }}>
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm mt-2">{description}</p>
    </div>
  );
};

export default CardComponent;
