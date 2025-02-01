import H1 from "./components/heading3";
import Card from "./components/card";
import Button from "./components/button";
import "./all.css";
function App() {
  return (
    <>
      <div className="container">
        <H1 heading={"The modern landing  page  for react developer"} />
        <Card para={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat itaque quam ab  consequatur quisquam sae "} />
        <Card para={" sequi fugit adipisci doloribus? Nobis sequi quo impedit! Omnis  perspiciatis sit beatae."}/>
        <Button />

      </div>
      <div className="maindev">
        <div className="body">
          <H1 heading={"Trusted by over 8000+ customer"} />
        </div>
        <div className="pra">
        <Card  para={"lorem shah Lorem ipsum dolor, sit amet consectetur adipisci doloribus? Nobis sequi quo impedit! adipisicing elit. Fugiat itaque quam ab "} />
        </div>
      </div>
      <div className="data">
        <div className="f1">
          <H1 heading={"#5000k+"}/>
        </div>
        <div className="f2">
          <H1 heading={"10+"}/>
        </div>
        <div className="f3">
          <H1 heading={"150+"}/>
        </div>
        <div className="f4">
          <H1 heading={"10+"}/>
        </div>
      </div>
    </>
  );
}
export default App;
