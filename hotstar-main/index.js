let movies = [
    {
        name: "falcon and the winter soldier",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi quisquam consequatur harum natus architecto delectus tempora dignissimos impedit, labore saepe?",
        image: "images/slider 2.PNG"
    },
    {
        name: "Wanda Vision",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi quisquam consequatur harum natus architecto delectus tempora dignissimos impedit, labore saepe?",
        image: "images/slider 3.PNG"
    },
    {
        name: "Raya and the last Dragon",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi quisquam consequatur harum natus architecto delectus tempora dignissimos impedit, labore saepe?",
        image: "images/slider 4.PNG"
    },
    {
        name: "Luca",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi quisquam consequatur harum natus architecto delectus tempora dignissimos impedit, labore saepe?",
        image: "images/slider 5.PNG"
    },
    {
        name: "Loki",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Animi quisquam consequatur harum natus architecto delectus tempora dignissimos impedit, labore saepe?",
        image: "images/slider 1.PNG"
    },
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; ///crack the currnt slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }


    //create dom elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    // attachng all the lelements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up the images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting elements class names
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (slide.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}
setInterval(() => {
    createSlide();

}, 3000);