import Header from "./components/Header"
import MainInfo from "./components/MainInfo"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"
import ScrollButton from "./components/ScrollButton"


function App() {

  const [scrollY, setScrollY] = useState(0)

  useEffect(() =>{

    function handleScroll(){
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }

  },[])
  

  return (
    <main className="m-0">

        <Header/>
        <MainInfo/>
        <Testimonials/>
        <Footer/>
        {
          scrollY > 400 && <ScrollButton/>
        }
      
    </main>
  )
}

export default App
