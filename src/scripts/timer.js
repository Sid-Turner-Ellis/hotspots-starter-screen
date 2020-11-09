function setTimer(seconds){
  const bar = document.querySelector('.timer__value')
  bar.style.transition = `width ${seconds}s linear`
  bar.style.width = '100%'
}

setTimer(60)


// function setTimer(seconds){
//   let secondsPassed = 0;
//   const bar = document.querySelector('.timer__value')

  
//   function timer(){
//     bar.style.width = `${secondsPassed / seconds * 100}%`
//     secondsPassed += 1/10
//     return Math.floor(secondsPassed) > seconds ?  true : setTimeout(timer,100)
//   }
//   timer()
// }