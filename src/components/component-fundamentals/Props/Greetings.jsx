// Simple component that receives props
// export default function Greetings(props): JSX.Element {
export default function Greetings(props) {
  return (
    <div>
      <h3>Hello {props.name}</h3>
      <p>You are {props.age} years old</p>
    </div>
  );
}
