const box = document.querySelector(".main-box")
const show = document.querySelector(".loginshow")
const fixedShow = document.querySelector("#fixedlogshow")

fixedShow.addEventListener("click" , () => {
  box.classList.toggle("active")
})
show.addEventListener("click" , () => {
  box.classList.toggle("active")
})

const side = document.querySelector(".side")
const hide = document.querySelector(".hideside")
const hidden = document.querySelector(".laptophidden")

hidden.addEventListener("click" , () =>{
  side.classList.add("sidebar")
})

hide.addEventListener("click" , () =>{
  side.classList.remove("sidebar")
})

const withoutLogin = document.querySelector(".without-log")
withoutLogin.addEventListener("click" , () => {
  box.classList.toggle("active")
})


let eventListenerAttached = false


function handleTouch(event){
  const format = event.currentTarget
const iconName = format.querySelectorAll(".icon-name")
const bgColor = format.querySelectorAll(".bg-color")
const icons = format.querySelectorAll(".icon-group i")

      format.style.width = "9.938em"
      format.style.transition = "all .7s ease"
      format.style.justifyContent = "space-around"
      
    iconName.forEach(iconname =>{
       iconname.style.width =  "fit-content"
      iconname.style.transition = "all .7s ease"   
    })
    icons.forEach(iconss =>{
       iconss.style.color = "#fff"
    })
    bgColor.forEach(bgClr =>{
       bgClr.style.color = "#fff"
      bgClr.style.transition = "all .7s ease"
      bgClr.style.clipPath = "circle(160% at 10% 60%)"
    })

    setTimeout(()=>{
            format.style.width = ""
      format.style.transition = ""
      format.style.justifyContent = ""
      
    iconName.forEach(iconname =>{
       iconname.style.width =  ""
      iconname.style.transition = ""   
    })
    icons.forEach(iconss =>{
       iconss.style.color = ""
    })
    bgColor.forEach(bgClr =>{
       bgClr.style.color = ""
      bgClr.style.transition = ""
      bgClr.style.clipPath = ""
    })

    },2000) 
    
}
function handleResize(){
  const iconGroup = document.querySelectorAll(".icon-group")
  const widWidth = window.innerWidth

  if(widWidth >= 300 && widWidth <= 800){
    if(!eventListenerAttached){
      iconGroup.forEach(group =>{
      group.addEventListener("pointerdown",handleTouch)

      })
      eventListenerAttached = true
    }
  }
    else{
      if(eventListenerAttached){
        iconGroup.forEach(group =>{
        group.removeEventListener("pointerdown" , handleTouch)
        })
        eventListenerAttached = false
      }
    }
}
handleResize()

window.addEventListener("resize" , handleResize)

//  calculating the percentage of completion

const inpt = document.querySelectorAll(".inpts")
const circl = document.querySelectorAll(".firstcircle")
const numb = document.querySelectorAll(".numb")
let val = 0;


  inpt.forEach((el, index) => {
  el.addEventListener("input", () => {
    const userip = Math.abs(parseFloat(el.value));
    const circumf = 2 * Math.PI * 70;
    const round = circl[index];
    const numd = numb[index];

    if (isNaN(userip) || userip < 0 || userip > 100) {
      round.style.strokeDasharray = circumf;
      round.style.strokeDashoffset = circumf;
      numd.textContent = "0%";
    } else {
      let calc = userip / 100;
      let val = circumf * calc;
      let offset = circumf - val;
      round.style.strokeDashoffset = offset;
      round.style.strokeDasharray = `${val} ${offset}`;
      numd.textContent = userip + "%";
    }
  });
});





















// calculating the animation of crousal
const lev = document.querySelector(".leftchevron")
const rev = document.querySelector(".rightchevron")
const allimg = document.querySelector(".imgcr")
let offset = 0
    rev.addEventListener("click",() =>{
     offset -= 340
        allimg.style.transform = `translateX(${offset}px)` 
})
lev.addEventListener("click",() =>{
  offset += 340
    allimg.style.transform = `translateX(${offset}px)`
})





