import React from "react";

interface UserCardProps {
  name: string;
}

export const AdminCard: React.FC<UserCardProps> = ({ name }) => (
  <div className="bg-red-100 text-red-800 border border-red-400 p-4 rounded">
    👑 <strong>Admin:</strong> {name}
  </div>
);

export const ModeratorCard: React.FC<UserCardProps> = ({ name }) => (
  <div className="bg-yellow-100 text-yellow-800 border border-yellow-400 p-4 rounded">
    🛡️ <strong>Moderatör:</strong> {name}
  </div>
);

export const GuestCard: React.FC<UserCardProps> = ({ name }) => (
  <div className="bg-gray-100 text-gray-800 border border-gray-400 p-4 rounded">
    👤 <strong>Ziyaretçi:</strong> {name}
  </div>
);

export function UserCardFactory(role: string): React.FC<UserCardProps> {
  switch (role) {
    case "admin":
      return AdminCard;
    case "moderator":
      return ModeratorCard;
    default:
      return GuestCard;
  }
}
