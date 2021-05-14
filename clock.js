const clock=document.querySelector('.clock')

const tick=()=>{

    const now=new Date();
    const hour=now.getHours();
    const minutes=now.getMinutes();
    const seconds=now.getSeconds();
    
    const html=`
                <span>${hour}</span> :
                <span>${minutes}</span> :
                <span>${seconds}</span> 
                `;
    clock.innerHTML=html


}

setInterval(tick, 1000)

//count down for new Year January 1 2022
const count= new Date("January 1,2022 00:00:00").getTime();
const x=setInterval(()=>{
    let now=new Date().getTime();
    let duration=count-now;
  
   

    let days= Math.floor(duration/(1000*60*60*24));
    let hours=Math.floor((duration%(1000*60*60*24))/(1000*60*60));
    let minutes=Math.floor((duration%(1000*60*60))/(1000*60));
    let seconds=Math.floor((duration%(1000*60))/(1000));


    document.querySelector('#days').innerHTML=days;
    document.querySelector('#hours').innerHTML=hours;
    document.querySelector('#minutes').innerHTML=minutes;
    document.querySelector('#seconds').innerHTML=seconds;


},1000);