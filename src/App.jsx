import H3 from "./components/heading3"
import Card from "./components/card"
import Button  from "./components/button"
import img1 from "./assets/12.png";
import img2 from "./assets/14.png"
import ImageComp from "./components/images/image";
import img3 from "./assets/12.png"
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

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
  <ImageComp  bgImg1={img1} width={"30%"} height={"100px"}/>
  <ImageComp bgImg1={img2 } />
   <ImageComp bgImg1={img3}/>
  
</>
  )
}
export default App