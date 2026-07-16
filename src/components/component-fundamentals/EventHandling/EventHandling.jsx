import AlertButton from "./AlertButton";
import Button from "./Button";
import ToolbarButton from "./ToolbarButton";

export default function EventHandling() {
  const clickHandler = () => {
    alert("Button clicked");
  };

  return (
    <div className="demo">
      <h1>Event Handling</h1>

      <section>
        <h2>Basic Event Handlers</h2>
        <div className="button-group">
          <Button label="Named function" onClick={clickHandler} />
          <Button label="Inline Arrow" onClick={() => alert("Inline clicked!")} />
        </div>
      </section>

      <section>
        <h2>Event Handlers with Props</h2>
        <div className="button-group">
          <AlertButton message="Playing movie">Play Movie</AlertButton>
          <AlertButton message="Uploading image">Upload Image</AlertButton>
        </div>
      </section>

      <section>
        <h2>Event Propagation</h2>
        <div className="toolbar" onClick={() => alert("Toolbar clicked!")}>
          <ToolbarButton onClick={() => alert("Save clicked!")}>Save</ToolbarButton>
          <ToolbarButton onClick={() => alert("Delete clicked!")}>Delete</ToolbarButton>
        </div>
      </section>
    </div>
  );
}
