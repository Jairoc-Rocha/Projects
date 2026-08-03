export default function OnlineOffline({ isOnline = true }) {
  const className = isOnline ? "bg-green-300" : "bg-red-500";

  return (
    <span className={`${className} p-1`}>
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}
