export default function UserStatus({ isOnline }) {
  return (
    <div className="status">
      {isOnline ? <span className="status-online">● Online</span> : <span className="status-offline">● Offline</span>}
    </div>
  );
}
