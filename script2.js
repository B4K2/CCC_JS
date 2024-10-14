const image = [
    {src : 'https://images.ctfassets.net/x7j9qwvpvr5s/43adRuY33iuCayAyMy3wTw/5545b174f876fc95ffcfff3d643c4d23/Ducati-MY25-Panigale-V4-overview-carousel-hero-link-1600x650-01.jpg' , text : 'Panigale V4' },
    {src : 'https://www.mariomanzomoto.it/wp-content/uploads/2024/10/Ducati-MY25-Multistrada-V4-overview-carousel-hero-link-1600x650-06.jpg', text : 'Multistrade V4'}
];

let currentindex = 0;

const curimage = document.querySelector('.bikeimage');
const curtext = document.querySelector('.info');

document.querySelector(".prev_btn").addEventListener("click",function(event){
    currentindex = currentindex - 1 % image.length;
    curimage.src = image[currentindex].src;
    curtext.textContent = image[currentindex].text;
});

document.querySelector(".next_btn").addEventListener("click",function(event){
    currentindex = currentindex + 1 % image.length;
    curimage.src = image[currentindex].src;
    curtext.textContent = image[currentindex].text;
});