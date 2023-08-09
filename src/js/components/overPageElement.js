import {addClassForEffect,classNames} from "./constans.js";

 function overPageElement(e,id){
    let form = document.querySelector("#"+id)
     form.children[0].addEventListener('click',e=>{
         form.classList.remove(classNames.overPage+addClassForEffect.active)
         e.preventDefault()
     })
    if(form){
        form.classList.toggle(classNames.overPage+addClassForEffect.active)
        console.log('.'+classNames.overPage+'__close')
    }

     e.preventDefault()
}
export {overPageElement}




