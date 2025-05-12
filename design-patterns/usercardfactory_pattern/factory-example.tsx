import React from "react";
import { UserCardFactory } from "./user-card-factory";

const users = [
  { name: "Enes", role: "admin" },
  { name: "Ayşe", role: "moderator" },
  { name: "Fatma", role: "guest" },
  { name: "Mehmet", role: "moderator" },
];

const FactoryExample: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Factory Pattern Örneği</h2>
      <div className="space-y-4">
        {users.map((user, i) => {
          const Card = UserCardFactory(user.role);
          return <Card key={i} name={user.name} />;
        })}
      </div>
    </div>
  );
};

export default FactoryExample;
