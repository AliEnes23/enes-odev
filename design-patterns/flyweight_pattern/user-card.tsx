import React from "react";
import { styleFactory } from "./flyweight-factory";

interface UserCardProps {
  name: string;
  role: "admin" | "user";
}

const UserCard: React.FC<UserCardProps> = ({ name, role }) => {
  const sharedStyle = styleFactory.getStyle(role);

  return (
    <div style={{ ...sharedStyle, padding: "12px", margin: "8px", borderRadius: "8px" }}>
      <strong>{name}</strong> ({role})
    </div>
  );
};

export default UserCard;
