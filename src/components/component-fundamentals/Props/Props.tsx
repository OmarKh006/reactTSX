import Greetings from "./Greetings";
import UserCard from "./UserCard";
import UserProfile from "./UserProfile";

export default function Props() {
  return (
    <div className="props-demo">
      <section>
        <h2>Basic Props Example</h2>
        <Greetings name="Mohamed" age={25} />
        <Greetings name="Ahmed" age={30} />
      </section>

      <section>
        <h2>Props with Different Data Types</h2>
        <UserCard
          username="admin1"
          email="admin@example.com"
          isAdmin={true}
          data={{ role: "admin", level: 1 }}
          hobbies={["coding", "reading"]}
        />

        <UserCard
          username="user1"
          // Using default props for email, isAdmin, data, and hobbies
        />
      </section>

      <section>
        <h2>Props Forwarding Example</h2>
        <UserProfile username="Mohamed" size={80} className="premium-user" />
      </section>
    </div>
  );
}
