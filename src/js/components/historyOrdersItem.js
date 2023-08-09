import {addClassForEffect,classNames} from "./constans";

let historyOrdersItems = document.querySelectorAll("."+classNames.historyOrdersItem)

if(historyOrdersItems){
    historyOrdersItems.forEach(v=>{
        v.addEventListener('click',e=>{
            if(e.target !== v.querySelector('.history-orders__button')){
                v.classList.toggle(classNames.historyOrdersItem+addClassForEffect.active)
            }
            e.preventDefault()
        })
    })
}