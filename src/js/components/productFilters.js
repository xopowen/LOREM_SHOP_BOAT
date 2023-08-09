import {addClassForEffect,classNames} from "./constans";

const productsFilters = document.querySelectorAll(`.${classNames.productFilters}`);

function set_Class_only_one( element, class_Name ){
    let elem_with_class = document.querySelector('.'+class_Name);
    elem_with_class.classList.remove(class_Name);
    element.classList.add(class_Name);
}

productsFilters.forEach(v=>v.addEventListener('click',e=>{
    set_Class_only_one( v, classNames.productFilters+addClassForEffect.active);
    let body = document.querySelector(`[data-filter=${v.id}]`)
    set_Class_only_one( body, classNames.productsBody+addClassForEffect.active );
    e.preventDefault()
}))

// for ( let i = 0; i <= products__filters.childElementCount; i++ ){
//     if( products__filters.children[i] ){
//         products__filters.children[i].addEventListener('click', (element) => {
//             set_Class_only_one( element.target, 'products__filter_active' );
//             let get_data = document.querySelectorAll('#'+products__filters.children[i].id)[1];
//             if(get_data){
//                 products__body_active.innerHTML = get_data.innerHTML;
//             }
//             else
//             {
//                 products__body_active.innerHTML = '';
//             }
//         });
//     }
// }
