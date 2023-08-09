import {overPageElement} from "./overPageElement";


let iconProfile = document.querySelectorAll('.products__button')
if(iconProfile){
    iconProfile.forEach(v=>v.addEventListener('click',e=>overPageElement(e,'basket-from')))
}