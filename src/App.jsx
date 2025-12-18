import './App.css'
import Navbar from './navbar.jsx'
import Course from './course.jsx'
import Footer from './footer.jsx'
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.jpeg";
function App() {
  return (
    //if multiple components are there use fragment
    <>
      <Course name="HTML FULL COURSE" price="$200" image={html} ratings="4.5" show={true}/>
      <Course name="CSS FULL COURSE" price="$150" image={css} ratings="5.0" show={true}/>
      <Course name="JS FULL COURSE" price="$300" image={js} ratings="4.9" show={true}/>
      <Footer />
    </>
  )
}

export default App
