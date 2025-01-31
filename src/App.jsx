import H3 from "./components/heading3"
import Card from "./components/card"
import Button  from "./components/button"
import img1 from "./assets/12.png";
import ImageComp from "./components/images/image";

function App() {
  return (
    <>

    <H3 heading= {"person 1"}/>
    <Card/>
    <H3 heading= {"person 2"}/>
    <Card/>
    <H3 heading= {"person 3"}/>
  <Card/>
  <Button />
  <ImageComp bgImg1={img1} style={{border: "1px solid red"}} />
  
</>
  )
}
export default App