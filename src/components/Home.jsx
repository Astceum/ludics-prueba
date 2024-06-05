import React from 'react'
import '../css/home.css'

function Home() {
  return (
    <aside id="left">

            
        <div class="container-home">
            <div class="line">
                <h2 class="line-h2 ">|</h2>
                <h2 class="line-h222 redLudics">|</h2>
                <h2 class="line-h22 redAndMore">|</h2>
            </div> 
    
            <div class="menu-home">
                
                    <a onclick="toggleService()"><h1 id="miElemento1" class="menu btn-menu">SERVICIOS</h1></a>
                    <a onclick="toggleLudics()"><h1 id="miElemento2" class="menu btn-menu">LUDICS</h1></a>
                    <a onclick="toggleAndMore()"><h1 id="miElemento3" class="menu btn-menu"><span class="space">Y</span>MÁS</h1></a>
                   
            </div>
        </div>
    </aside>
  )
}

export default Home
