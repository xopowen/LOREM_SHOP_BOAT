import {overPageElement} from "./overPageElement";


let iconProfile = document.querySelector('#profile-icon')
if(iconProfile){
    iconProfile.addEventListener('click',e=>overPageElement(e,'login-form'))
}
