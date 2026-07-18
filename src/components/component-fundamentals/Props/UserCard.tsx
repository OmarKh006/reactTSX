import UserProfile from "./UserProfile";

interface UserData {
  role: string;
  level?: number;
}

interface UserCardProps {
  username: string;
  email?: string;
  isAdmin?: boolean;
  data?: UserData;
  hobbies?: string[];
}

export default function UserCard({
  username,
  email = "no email provided",
  isAdmin = false,
  data = { role: "user" },
  hobbies = [],
}: UserCardProps) {
  return (
    <div className="user-card">
      <UserProfile username={username} size={60} />
      <div className="user-info">
        <p>Email: {email}</p>
        <p>Role: {data.role}</p>
        {hobbies.length > 0 && <p>Hobbies: {hobbies.join(", ")}</p>}
        {isAdmin && <span className="badge">Admin</span>}
      </div>
    </div>
  );
}
