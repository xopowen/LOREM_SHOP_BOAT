document.querySelector('#button-up').addEventListener('click',(e)=>{
    console.log('click')
    window.scrollTo({
        top:0,left:0, behavior:"smooth"
    });
    e.preventDefault()
})