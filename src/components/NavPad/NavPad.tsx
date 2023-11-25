import "./NavPad.scss";

export default function NavPad() {
  return (
    <div className="navpad-container">
      <div className="">
        <button onClick={() => console.log(`Arrow Up`)}>Arrow Up</button>
      </div>
      <button onClick={() => console.log(`Arrow Left`)}>Arrow Left</button>
      <button onClick={() => console.log(`Arrow Right`)}>Arrow Right</button>
      <div className="div">
        <button onClick={() => console.log(`Arrow Down`)}>Arrow Down</button>
      </div>
    </div>
  );
}
