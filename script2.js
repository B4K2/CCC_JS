const image = [
    {src : 'https://images.ctfassets.net/x7j9qwvpvr5s/43adRuY33iuCayAyMy3wTw/5545b174f876fc95ffcfff3d643c4d23/Ducati-MY25-Panigale-V4-overview-carousel-hero-link-1600x650-01.jpg' , text : 'Panigale V4' },
    {src : 'https://www.mariomanzomoto.it/wp-content/uploads/2024/10/Ducati-MY25-Multistrada-V4-overview-carousel-hero-link-1600x650-06.jpg', text : 'Multistrade V4'},
    {src : 'https://i.postimg.cc/1Rq5p25N/3371-1.jpg' , text : 'Panigale V4S'}
];

let currentindex = 0;
let autoSlide;

const curimage = document.querySelector('.bikeimage');
const curtext = document.querySelector('.info');

function updateImage() {
    curimage.src = image[currentindex].src;
    curtext.textContent = image[currentindex].text;
}

function startAutoSlide() {
    autoSlide = setInterval(() => {
        currentindex = (currentindex + 1) % image.length; 
        updateImage(); 
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

document.querySelector(".prev_btn").addEventListener("click",function(event){
    stopAutoSlide();
    currentindex = (currentindex - 1 + image.length) % image.length;
    updateImage();
    startAutoSlide();
});

document.querySelector(".next_btn").addEventListener("click",function(event){
    stopAutoSlide();
    currentindex = (currentindex + 1) % image.length;
    updateImage();
    startAutoSlide();
});

curimage.addEventListener("mouseenter",stopAutoSlide);
curimage.addEventListener("mouseleave",startAutoSlide);

document.querySelector(".bike_img1").addEventListener("mouseenter",function(event){
    document.querySelector(".bike_img1").src = "https://images.ctfassets.net/rjyti9b6lmvy/4YRjiKBil7AsqKcKkrzlyA/49eec56fcd4c4d1a7b659a63f02ef8c4/1panigale-v2.png";
});
document.querySelector(".bike_img1").addEventListener("mouseleave",function(event){
    document.querySelector(".bike_img1").src = "https://images.ctfassets.net/rjyti9b6lmvy/571I8ug1tnCFWUGM2TjNB6/7601b020d4c56a87d92d834bce8d0524/2panigale-v2.png";
});

document.querySelector(".bike_img2").addEventListener("mouseenter",function(event){
    document.querySelector(".bike_img2").src = "https://images.ctfassets.net/rjyti9b6lmvy/4cCfUnYum6JWz4CpqvBH4Z/2298b8009adb8d0e3bfa9f70e7af8166/1Sf-v4s.png";
});
document.querySelector(".bike_img2").addEventListener("mouseleave",function(event){
    document.querySelector(".bike_img2").src = "https://images.ctfassets.net/rjyti9b6lmvy/4o2FxMljQeaowZMzl09Lic/46c07433e592462953b054f07933248f/2SF-v4s-red.png";
});

document.querySelector(".bike_img3").addEventListener("mouseenter",function(event){
    document.querySelector(".bike_img3").src = "https://images.ctfassets.net/rjyti9b6lmvy/3AAhVJzUkM0EBq9rGmeKHZ/02ac557ecca0f8ea94983901f6c4a0ee/1SF-v2.png";
});
document.querySelector(".bike_img3").addEventListener("mouseleave",function(event){
    document.querySelector(".bike_img3").src = "https://images.ctfassets.net/rjyti9b6lmvy/4LcAYjli8LOPaoWAY7DIjT/2883f13456e5ea0191296d9ceb8ba09a/2SF-v2.png";
});
document.querySelector(".bike_img4").addEventListener("mouseenter",function(event){
    document.querySelector(".bike_img4").src = "https://images.ctfassets.net/x7j9qwvpvr5s/3mJ8uq7cvD1yAbusQfvruM/e0ab42ff7238483ee7c425f36a87dab9/MY24-Multistrada-V4-Rally-Model-Blocks-3-4-630x390.png";
});
document.querySelector(".bike_img4").addEventListener("mouseleave",function(event){
    document.querySelector(".bike_img4").src = "https://images.ctfassets.net/x7j9qwvpvr5s/Og3RwLG7uLAN6lDHo5OxQ/6d14798e070edbdb21deac1dbccecb6c/MY23-Multistrada-V4-Rally-Radar-Gr-Model-Blocks-630x390.png";
});
document.querySelector(".bike_img5").addEventListener("mouseenter",function(event){
    document.querySelector(".bike_img5").src = "https://images.ctfassets.net/rjyti9b6lmvy/74ICrNPrgjt6vmtYahWylZ/4d70ae499ca364b1e5990d11d96c7a90/1SCR-icon.png";
});
document.querySelector(".bike_img5").addEventListener("mouseleave",function(event){
    document.querySelector(".bike_img5").src = "https://images.ctfassets.net/rjyti9b6lmvy/6lu3XTIM1xnXLeKTbYc8HU/e2e1a0da1ef344ebc62f3fd5fabf5c21/2SCR-icon.png";
});

const stars = document.querySelectorAll(".stars i");
let currentRating = -1;  

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        if (currentRating === index1) {
            stars.forEach((star) => star.classList.remove("active"));
            currentRating = -1; 
        } else {
            stars.forEach((star, index2) => {
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });
            currentRating = index1; 
        }
    });
});
