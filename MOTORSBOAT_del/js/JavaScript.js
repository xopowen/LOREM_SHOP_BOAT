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
const menu = document.body.querySelector(".menu-burger");
const menu__fons = document.body.querySelector('.menu-burger__fons');
const products__filters = document.querySelector('.products__filters');
const products__body_active = document.querySelector('.products__body_active');
function set_Class_only_one( element, class_Name ){
    let elem_with_class = document.querySelector('.'+class_Name);
    elem_with_class.classList.remove(class_Name);
    element.classList.add(class_Name);
}


if(menu != NaN){

    let times = menu.querySelector('.fa-times');
    let bars = menu.querySelector('.fa-bars');

    bars.addEventListener('click',() => {
        menu.querySelector('.menu-burger__menu').classList.add( 'menu-burger__menu_active' );
        menu__fons.classList.add('menu-burger__fons_active');
    });

    times.addEventListener('click',()=>{
        menu.querySelector('.menu-burger__menu').classList.remove('menu-burger__menu_active');
        menu__fons.classList.remove('menu-burger__fons_active');
    });

    let menu_left = menu.querySelector('.menu-left');
    let menu_right = menu.querySelector('.menu-right');

    for( let i = 0; i < menu_left.children.length; i++ ){
        menu_left.children[i].addEventListener('mouseover' , () => {
            menu_right.children[0].innerHTML = '' ;

            let item_left = menu_left.children[i];
            let Clone_item_left = item_left.cloneNode(true);

            for ( let l = item_left.children.length-1; l != -1; l--){
                menu_right.children[0].appendChild( Clone_item_left.children[l] );
            }
        });
    }

}
if(products__filters){
   for ( let i = 0; i <= products__filters.childElementCount; i++ ){
       if( products__filters.children[i] ){
           products__filters.children[i].addEventListener('click', (element) => {
           set_Class_only_one( element.target, 'products__filter_active' );
           let get_data = document.querySelectorAll('#'+products__filters.children[i].id)[1];
           if(get_data){
                products__body_active.innerHTML = get_data.innerHTML;
           }
           else
           {
               products__body_active.innerHTML = '';
           }
       });
           }
   }
}


