import Navbar from "./sections/header/navbar";
import Hero from "./sections/header/hero.jsx";
import ItTerminlar from "./sections/It_ter/ItTerminlar.jsx";
import Footer from "./sections/footer/Footer.jsx";

export default function App() {
  return (
    <div>
      <div className="wrapper">
          <div className="md:h-lvh" style={{overflowX:"initial !important"}}>
            <section  className="sm:rounded-full overflow-x-hidden fixed w-full top-0 z-50 ">
              <Navbar />
            </section>
            <section id="home" >
              <Hero/> 
            </section>
            <section id="about" className=" bg-[#253237]">
              <ItTerminlar/>
            </section>
            <footer id="footer" className="bg-[#000000]">
              <Footer/>
            </footer>
        </div>
      </div>
    </div>
  )
}