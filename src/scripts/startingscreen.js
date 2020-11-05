import { gsap } from "gsap";


window.onload = () => {
  loadingFinished('Are ya ready?','Yes')
}

const tl = new gsap.timeline({defaults:{duration: .5}})


function loadingFinished(message,response){
  // DOM elements involved
  const readyLogo = document.querySelector('.logo')
  const readyMessage = document.querySelector('.ready__text')
  const readyResponse = document.querySelector('.ready__button')
  readyLogo.textContent = 'hotspots'
  readyMessage.textContent = message
  readyResponse.textContent = response

  // setting up the animation
  tl.from(readyLogo,{opacity:0,y:-100})
  tl.from(readyMessage,{opacity:0,y: 100})
  tl.from(readyResponse,{opacity:0,y: -50})

  readyResponse.addEventListener('click',()=>{
    readyUpComplete()
  })
}

function readyUpComplete(){
  tl.reverse()
}
