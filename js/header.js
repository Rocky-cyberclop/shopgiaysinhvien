//Tran Anh Hao B2014653
//11/5
// Add some scroll animation
window.addEventListener('scroll', function(){
    var header = document.getElementsByTagName('header');
    
    if(this.window.scrollY>0){
        if(header[0].classList.contains('container')){
            header[0].classList.replace('container', 'sticky');
        }
        else{
            header[0].classList.add('sticky');
        }
        
    }
    else{
        if(window.innerWidth<860){
            header[0].classList.remove('sticky');
        }
        else{
            header[0].classList.replace('sticky', 'container');
        }
        
    }
});


var nav = document.getElementsByTagName('nav');
var a_nav = document.getElementsByClassName('nav__item__link');
var header  = document.getElementsByTagName('header');
var search_input = document.getElementsByClassName('search__input');
search_input[0].style.width = '140px'
if(window.innerWidth<860){
    nav[0].children[3].classList.replace('display--flex', 'display--block');
    header[0].classList.remove('container');
    for(var i=0; i<a_nav.length; i++){
        a_nav[i].classList.add('text--center');
    }
}
else{
    nav[0].children[3].classList.replace('display--block', 'display--flex');
    header[0].classList.add('container');
    for(var i=0; i<a_nav.length; i++){
        a_nav[i].classList.remove('text--center');
    }
}


// Some func that i make to do private job
function count(str){
    var count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]==' '||str[i]=='\n')count++
    }
    console.log(count+1)
}


window.addEventListener('load', ()=>{
    if(window.localStorage.length!==0){
        var quantity = document.querySelector('#quantity');
        quantity.classList.add('quantity');
        quantity.textContent = window.localStorage.length;
    }
});