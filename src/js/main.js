document.querySelector('.start').addEventListener('click',()=>{
    if(!document.querySelector('.start').getAttribute('style')){
        document.querySelector('.start')
            .setAttribute('style',"overflow: hidden");
    }else{
        document.querySelector('.start').removeAttribute('style')
    }
});



