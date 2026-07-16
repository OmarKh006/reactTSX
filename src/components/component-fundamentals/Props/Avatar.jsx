// Component showing props destructuring and default values
// const Avatar = ({ className, size, username }) => {
export default function Avatar({ className, size, username }) {
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
