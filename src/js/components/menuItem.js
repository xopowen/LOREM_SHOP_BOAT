import {addClassForEffect,classNames} from "./constans";


document.querySelectorAll('.'+classNames.classMenuItem).forEach((v,)=>{

    v.addEventListener('mouseover',(e) => {
        v.classList.add(`${classNames.classMenuItem}${addClassForEffect.active}`)
        e.preventDefault()
    })
    v.addEventListener('mouseout',(e) => {
        v.classList.remove(`${classNames.classMenuItem}${addClassForEffect.active}`)
        e.preventDefault()
    })
})