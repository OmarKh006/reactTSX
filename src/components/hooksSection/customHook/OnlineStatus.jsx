import useOnlineStatus from "../../../hooks/useOnlineStatus";

export default function OnlineStatus() {
  const isOnline = useOnlineStatus();

  return (
    <div className="status-indicator">
      <span className={isOnline ? "status-online" : "status-offline"}>{isOnline ? "✅ Online" : "❌ Offline"}</span>
    </div>
  );
}
