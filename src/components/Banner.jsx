import instagram from '../assets/svg/Instagram.svg'
import tikTok from '../assets/svg/tik-tok.svg'
import youtube from '../assets/svg/youtube.svg'
import '../css/banner.css';

function Banner() {

    return (
        <div class="banner">
        <a onclick="toggleLogo()">
            <svg id="logoLudics" class="logo-ludics" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 1364.08 229.79">
                <g>
                  <rect x="285.52" width="12.42" height="229.79"/>
                  <g>
                    <path d="m154.39,147.93l36.16-14.76c-.92-2.29-1.94-4.39-3.05-6.29-3.59-6.84-8.28-11.5-14.09-13.97-7.02-2.98-15.03-2.53-22.05.34-8.12,3.32-20.24,5.75-28.33,2.24-.71-.31-.04.03-.71-.31l-14.74,33.91c4.73,1.69,5.71,1.64,9.7,2.49,7.58,9.7,6.25,28.15-9.33,34.48-10.27,3.11-16.88,5.86-16.57,7.15.47,2.06,18.16-.32,39.51-5.31,21.35-5,38.26-10.71,37.79-12.77-.28-1.24-6.87-.86-16.74.73-16.73.59-24.06-9.22-23.44-23.07,9.39.58,16.52-1.03,25.9-4.86Z"/>
                    <path d="m69.84,118.36c4.71,11.67,16.64,25.9,28.41,32.05l15.22-35.26c-3.69-3.26-6.74-7.29-8.71-12.17l-13.11-32.46c-2.96-7.33-8.15-12.58-15.55-15.72-7.4-3.14-25.33-.7-30.21,4.18l-.02.02s.02,0,0,0l23.97,59.35Z"/>
                    <path d="m220.57,67.27c-10.42-23.4-28.63-42.75-51.28-54.49l-1.44-.75-5.06,11.66,1.24.65c19.86,10.45,35.84,27.53,44.99,48.1,10.92,24.53,11.7,51.83,2.18,76.89-9.51,25.06-28.18,44.88-52.55,55.8-6.56,2.93-13.39,5.15-20.3,6.6-17.48,3.68-36.75,2.25-54.26-4.01l-1.33-.48-4.83,11.73,1.28.47c12.7,4.63,26.24,6.98,39.58,6.98,7.52,0,14.98-.75,22.18-2.26,7.84-1.65,15.53-4.16,22.85-7.44,27.46-12.3,48.49-34.62,59.21-62.85,10.72-28.23,9.85-58.98-2.45-86.6Z"/>
                    <path d="m70.22,205.94c-.78-.34-1.5-.64-2.41-1.11-20.5-10.38-36.96-27.72-46.36-48.83-10.92-24.52-11.7-51.83-2.18-76.9,9.52-25.06,28.18-44.87,52.56-55.79,6.52-2.92,13.35-5.14,20.3-6.61,20.19-4.24,40.66-2.27,59.2,5.7l1.38.59,5.07-11.62-1.4-.6C135.41,1.74,112.29-.51,89.52,4.28c-7.82,1.64-15.51,4.14-22.87,7.44C39.19,24.02,18.17,46.34,7.45,74.57c-10.71,28.23-9.85,58.99,2.45,86.61,10.58,23.76,29.13,43.3,52.23,54.99,1.13.57,2.03.96,3.02,1.39.43.19.88.38,1.38.61l1.4.63,5.05-11.64-1.36-.61c-.51-.23-.96-.42-1.39-.61Z"/>
                  </g>
                </g>
                <g id="logo-L">
                  <polygon points="402.63 33.48 377.31 125.95 435.09 125.95 460.37 33.48 402.63 33.48"/>
                  <polygon points="387.94 132.49 368.08 205.02 504.52 205.02 517.84 156.62 439.14 156.62 445.73 132.49 387.94 132.49"/>
                </g>
                <g id="logo-U">
                  <g>
                    <path d="m651.08,33.48l-24.92,90.98c-.15.53-.3.98-.45,1.49h58.68l25.41-92.47h-58.72Z"/>
                    <path d="m515.87,117.93c-.71,2.66-1.29,5.34-1.8,8.03h58.56c.28-1.44.59-2.9.98-4.4l24.18-88.07h-58.72l-23.19,84.44Z"/>
                  </g>
                  <path d="m525.18,132.49c-.75,5.09-1.16,10.12-1.16,14.93,0,38.23,26.15,60.98,74.75,60.98,27.39,0,52.06-6.3,68.35-22.27,12.09-11.85,20.97-28.31,27.14-50.81l.78-2.84h-58.85c-3.07,9.24-6.19,14.56-10.52,18.81-4.69,4.59-11.35,7.02-18.51,7.02-15.3,0-23.69-7.26-23.69-21.29,0-1.41.13-2.95.31-4.53h-58.61Z"/>
                </g>
                <g id="logo-D">
                  <path d="m872.15,125.95c1.57-6.82,2.47-13.85,2.47-21.09,0-20.57-5.92-37.02-18.75-49.6-13.08-12.82-34.05-21.77-67.61-21.77h-61.19l-25.32,92.47h57.75l11.74-43.11h9.62c13.82,0,22.46,3.14,27.88,8.46,4.44,4.36,7.15,10.41,7.15,19.6,0,4.99-1.22,10.2-3.24,15.04h59.5Z"/>
                  <path d="m712.38,132.49l-19.86,72.52h75.01c39.97,0,69.82-10.89,90.55-31.21,12.1-11.86,20.42-25.92,24.8-41.31h-60.48c-1.95,3.54-4.34,6.76-7,9.37-8.88,8.71-23.93,13.79-41.45,13.79h-10.12l6.31-23.16h-57.75Z"/>
                </g>
                <g id="logo-I">
                  <polygon points="886.28 125.95 944.02 125.95 969.34 33.48 911.61 33.48 886.28 125.95"/>
                  <polygon points="954.66 132.49 896.92 132.49 877.06 205.02 934.79 205.02 954.66 132.49"/>
                </g>
                <g id="logo-C">
                  <path d="m1062.61,80.67c13.08,0,23.19,6.77,26.89,20.56l51.57-22.02c-7.15-30-33.55-49.36-70.81-49.36-71.19,0-107.44,51.23-110.54,96.1h60.25c.55-22.83,17.16-45.29,42.63-45.29Z"/>
                  <path d="m971.31,134.36c0,45.49,33.56,74.28,81.91,74.28,36.76,0,61.93-14.77,79.2-37.02l-39.97-30.97c-9.38,11.38-20.24,17.67-33.56,17.67-14.39,0-25.72-9.22-27.01-25.82h-60.53c-.01.62-.05,1.25-.05,1.87Z"/>
                </g>
                <g id="logo-S">
                  <g>
                    <path d="m1236.54,96.88c-23.93-8.71-27.64-9.68-27.64-14.76s5.18-6.78,12.58-6.78c18.26,0,36.77,8.47,49.84,18.88l33.06-38.71c-18.75-15.73-46.14-25.41-76.98-25.41-47.12,0-77.72,26.62-77.72,59.28,0,17.19,7.17,27.82,22.16,36.58h108.1c-7.29-13.3-22.68-21.56-43.41-29.08Z"/>
                    <path d="m1208.65,139.2c25.16,9.2,28.37,10.89,28.37,16.21,0,4.84-5.18,7.5-12.58,7.5-18.26,0-38.5-7.74-58.23-23.95l-33.06,38.71c20.97,18.63,50.83,30.73,85.12,30.73,49.59,0,78.21-26.62,78.21-60.74,0-5.69-.96-10.68-2.68-15.17h-101.67c4.9,2.28,10.4,4.49,16.53,6.71Z"/>
                  </g>
                  <polygon points="1348.78 205.02 1364.08 149.37 1306.84 149.37 1291.54 205.02 1348.78 205.02"/>
                </g>
              </svg>
        </a>
        <div class="social-media">
            <a href="https://www.instagram.com/ludicschile/" target="_blank"><img loading="lazy" class="logo-ig" src={instagram} alt=""/></a>
            <a href="https://www.tiktok.com/@ludicschile" target="_blank"><img loading="lazy" class="logo-tt" src={tikTok} alt=""/></a>
            <a href="https://www.youtube.com/@ludics6688" target="_blank"><img loading="lazy" class="logo-yt" src={youtube} alt=""/></a>
        </div>
      </div>
    )
}

export default Banner;