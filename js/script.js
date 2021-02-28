const sign_up=document.getElementById('open');

const modal_container=document.getElementById('modal');

const close_btn=document.getElementById('close');

const body=document.getElementById('body');

const toggle_btn=document.getElementById('toggle');












// event listener to sign up button

sign_up.addEventListener('click',()=>{
    modal_container.classList.add('sign_up_pop_up');
})

close_btn.addEventListener('click',()=>{
    modal_container.classList.remove('sign_up_pop_up');
})

// body.addEventListener('click')
document.addEventListener('click',function(e){
    if(e.target.classList.contains('modal-container')){
        modal_container.classList.remove('sign_up_pop_up');
    }
})

// navbar toggling
toggle_btn.addEventListener('click',()=>{
    body.classList.toggle('show-nav');
})