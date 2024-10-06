
const Social_icons = 
[
    {
        name:'LinkedIn',
        htmlEl:'<i class="fa-brands fa-linkedin"></i>',
    },
    {
        name:'Facebook',
        htmlEl:'<i class="fa-brands fa-facebook"></i>',
    },
    {
        name:'Instagrame',
        htmlEl:'<i class="fa-brands fa-instagram"></i>',
    },
    {
        name:'whatsapp',
        htmlEl:'<i class="fa-brands fa-whatsapp"></i>',
    }
];

window.addEventListener('resize',()=>{
const body_width = window.innerWidth; 
if(body_width <= 600){
    let social_alts = document.querySelectorAll('nav .social-alt a');
    social_alts.forEach(el =>{
        let elAlt = el.innerHTML;
        // console.log(elAlt);
        Social_icons.forEach(tag =>{
            if(elAlt == tag.name)
            {
                console.log('yes ');
                el.innerHTML = tag.htmlEl;
                // document.querySelectorAll('.slash').forEach(item => item.classList.add('d-none'));
            }
        });
    });
}else{console.log('the width didnt match !!');}
});