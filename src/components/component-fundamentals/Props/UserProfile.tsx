import Avatar, { AvatarProps } from "./Avatar";

// Component demonstrating props forwarding
export default function UserProfile(props: AvatarProps) {
  return (
    <div className="user-profile">
      <Avatar {...props} />
      <h3>{props.username}</h3>
    </div>
  );
}
