import Banner from './components/Banner.jsx'
import CustomCursor from './components/CustomCursor.jsx';
import Home from './components/Home.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <Banner />
      <Home />
      
      <div id="video-estrellas-container">
                <video id="video-estrellas" src="https://res.cloudinary.com/di5yg1rzm/video/upload/v1717449915/home-local/fondo-estrellado_2_fntjdr.mp4" type="video/mp4" loop autoPlay muted playsInline></video>
      </div>
      <CustomCursor />
    </>
  )
}

export default App
