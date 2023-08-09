/* let slaiderOurWorc = new Swiper(".sliderOne",{
   pagination:{
       el: ".ourWorc__pagination",
       clickable: true,
   },
//указыаем склолько слайдов показывать
    slidesPerView:window.screen.width >=770?3:1 ,
   // slidesPerView:window.screen.width <= 770 && window.screen.width > 375 ?2:1 ,
//если сладов меньше нужного убирает отрибуты слдера
    watchOverflow:true,
//размер отступа между слайдми
    spaceBetween:30,
    slidesPerColumn:window.screen.width <= 770 && window.screen.width > 375 ? 2:1,

    /* адаптив под разные экраны
    breakpoints:{
    //если больше 320
    320:{
        slidesPerView:1,
        slidesPerColumn:1,
    }
    //по соотношению сторон
    "@0.75":{}
    }

});*/
import {addClassForEffect,classNames} from "./constans";

const burger = document.body.querySelector(".burger");
const burgerShowButton = document.body.querySelector('#burger-turn-on')
const burgerHiddenButthon = document.body.querySelector('#burger-turn-off')


burgerShowButton.onclick=(e) => {
    burger.classList.toggle("burger"+addClassForEffect.active)
    e.preventDefault()
};
burgerHiddenButthon.onclick = burgerShowButton.onclick

    // times.addEventListener('click',()=>{
    //     menu.querySelector('.menu-burger__menu').classList.remove('menu-burger__menu_active');
    //     menu__fons.classList.remove('menu-burger__fons_active');
    // });
    //
    // let menu_left = menu.querySelector('.menu-left');
    // let menu_right = menu.querySelector('.menu-right');
    //
    // for( let i = 0; i < menu_left.children.length; i++ ){
    //     menu_left.children[i].addEventListener('mouseover' , () => {
    //         menu_right.children[0].innerHTML = '' ;
    //
    //         let item_left = menu_left.children[i];
    //         let Clone_item_left = item_left.cloneNode(true);
    //
    //         for ( let l = item_left.children.length-1; l != -1; l--){
    //             menu_right.children[0].appendChild( Clone_item_left.children[l] );
    //         }
    //     });
    // }




