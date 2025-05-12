import React from "react";
import UserCard from "./user-card";

const users = [
  { name: "Ali", role: "admin" },
  { name: "Ayşe", role: "user" },
  { name: "Mehmet", role: "user" },
  { name: "Enes", role: "admin" },
];

const FlyweightExample: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Flyweight Pattern Örneği</h2>
      {users.map((user, idx) => (
        <UserCard key={idx} name={user.name} role={user.role as "admin" | "user"} />
      ))}
    </div>
  );
};

export default FlyweightExample;
