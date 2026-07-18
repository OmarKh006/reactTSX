export interface AvatarProps {
  className: string;
  size: number;
  username: string;
}

export default function Avatar({ className, size, username }: AvatarProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor: "#ddd",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {username[0].toUpperCase()}
    </div>
  );
}
