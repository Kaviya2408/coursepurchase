import './App.css'
import Footer from './footer.jsx'
import Courselist from './Courselist.jsx';
function App() {
  return (
    //if multiple components are there use fragment
    <>
      <Courselist />
      <Footer />
    </>
  )
}

export default App
