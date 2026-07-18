import { JSX } from "react/jsx-runtime";

interface GreetingProps {
  name: string;
  age: number;
}

export default function Greetings(props: GreetingProps): JSX.Element {
  return (
    <div>
      <h3>Hello {props.name}</h3>
      <p>You are {props.age} years old</p>
    </div>
  );
}
