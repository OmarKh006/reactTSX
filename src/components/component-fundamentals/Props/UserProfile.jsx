import Avatar from "./Avatar";

// Component demonstrating props forwarding
export default function UserProfile(props) {
  return (
    <div className="user-profile">
      <Avatar {...props} />
      <h3>{props.username}</h3>
    </div>
  );
}
