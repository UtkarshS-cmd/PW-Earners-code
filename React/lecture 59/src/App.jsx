import NewFooter, {Footer as FooterUpdate} from "./components/Footer";
import Navbar2 from "../components/navbar";

function App() { {/*App(First Letter Capital(PascalCase)) - Functional component*/}
// Reason for capital -> first letter capital -> Component else tag hai --->Example: Navbar Component jo bnaya
// small kiya -> Render ni hoga and error aayega 
// Error: The tag <navbar> is unrecognized in this browser.
console.log(3);
//  If you meant to render a React component, start its name with an uppercase letter.
  return (
    <>
    <div>
      <Navbar2/>
      {/* <Navbar></Navbar> use krna-> */}
      {/* <Navbar/> Child component App -> ye fir parent component hai ->use karna */}
      <h1>Hi</h1> {/*return ke andar - return UI that react should display*/}
      <Footer/>
      <Footer2/>
    </div>
    </>
  )
}
// Rendering a component -> <App/>
// Parent component -> Renders the child component
// Child component ->
export default App; 
