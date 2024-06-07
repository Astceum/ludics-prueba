import { Link } from 'react-router-dom'
import '../css/home.css'

function Home() {
  return (
    <>
    <aside id="left">

            
        <div class="container-home">
            <div class="line">
                <h2 class="line-h2 ">|</h2>
                <h2 class="line-h222 redLudics">|</h2>
                <h2 class="line-h22 redAndMore">|</h2>
            </div> 
    
            <div class="menu-home">
                
                    <a onclick="toggleService()"><Link to="/"><h1 id="miElemento1" class="menu btn-menu">SERVICIOS</h1></Link></a>
                    <a onclick="toggleLudics()"><Link to="/ludics"><h1 id="miElemento2" class="menu btn-menu">LUDICS</h1></Link></a>
                    <a onclick="toggleAndMore()"><Link to="/and-more"><h1 id="miElemento3" class="menu btn-menu"><span class="space">Y</span>MÁS</h1></Link></a>
                   
            </div>
        </div>
    </aside>
    <div id="video-estrellas-container">
      <video id="video-estrellas" src="https://res.cloudinary.com/di5yg1rzm/video/upload/v1717449915/home-local/fondo-estrellado_2_fntjdr.mp4" type="video/mp4" loop autoPlay muted playsInline></video>
    </div>
    </>
  )
}

export default Home
