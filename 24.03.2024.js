let countX = 0;
function right(){
    if(countX<100){
        countX+=25;
        document.getElementById("slider").style.transform = "translateX(-"+countX+"%)";
    }
}

function left(){
    if(countX>0){
        countX-=25;
        document.getElementById("slider").style.transform = "translateX(-"+countX+"%)";
    }
}

let catalog=[
    {
        img:"ton13.webp",
        imgleft:"ton12.webp",
        imgright:"ton11.webp",
        text:"Тональный крем Influence",
        text1:"Цена со скидкой",
        cost:13.34
    },
    {
        img:"parf14.webp",
        text:"Парфюм Paris",
        text1:"Цена со скидкой",
        cost:128.99

    },
    {
        img:"shampoo1.webp",
        text:"Шампунь твердый",
        text1:"Цена со скидкой",
        cost:36.59

    },
    {
        img:"spf10.webp",
        text:"Spf frudia",
        text1:"Цена со скидкой",
        cost:39.99

    },
    {
        img:"milo1.webp",
        text:"Мыло Paris",
        text1:"Цена со скидкой",
        cost:15.66

    },
    {
        img:"parf1.webp",
        text:"Парфюм off white ",
        text1:"Цена со скидкой",
        cost:68.99

    },
    {
        img:"mask1.webp",
        text:"Тушь для ресниц Artvisage ",
        text1:"Цена со скидкой",
        cost:19.99

    },
    {
        img:"p1.webp",
        text:"Парфюм Neydo",
        text1:"Цена со скидкой",
        cost:179.99

    },
    {
        img:"pom1.webp",
        text:"Помада для губ Klio",
        text1:"Цена со скидкой",
        cost:73.66
  },
  {
    img:"mosk1.webp",
    text:"Парфюм Mashino toy2",
    text1:"Цена со скидкой",
    cost:173.70
},
{
    img:"shy1.webp",
    text:"Мусс для губ",
    text1:"Цена со скидкой",
    cost:83.59
},
{
    img:"tonv1.webp",
    text:"Тональный крем vivienne sabo",
    text1:"Цена со скидкой",
    cost:19.99
},
{
    img:"ma1.webp",
    text:"Маска для лица For me",
    text1:"Цена со скидкой",
    cost:4.24
},
{
    img:"dar1.webp",
    text:"Пенка для душа Darling",
    text1:"Цена со скидкой",
    cost:37.99
},{
    img:"pus1.webp",
    text:"Пиллинг скатка Pussy",
    text1:"Цена со скидкой",
    cost:29.99
},{
    img:"par1.webp",
    text:"Парфюм Banana Repablic",
    text1:"Цена со скидкой",
    cost:238.99
}
]

let countblock=0;

let img = document.getElementsByClassName("img");
let text = document.getElementsByClassName("text");
let text1 = document.getElementsByClassName("text1");
let cost = document.getElementsByClassName("cost");

function shownew(){
    for(let i=0; i<4; i++){
    img[i].src = catalog[i+countblock].img;
    text[i].innerHTML= catalog[i+countblock].text;
    text1[i].innerHTML= catalog[i+countblock].text1;
    cost[i].innerHTML= catalog[i+countblock].cost;
}
}

shownew()

let buttonnew = document.getElementsByClassName("buttonnew");
for (let index = 0; index < buttonnew.length; index++) {
    buttonnew[index].addEventListener("click", movenew)
    
}

function right1(){
    countblock = 4;
    setTimeout(shownew, 100)
    
}
function left1(){
    countblock = 0;
    setTimeout(shownew, 100)
}


let img1 = document.getElementsByClassName("img1");
let text2 = document.getElementsByClassName("text2");
let text3 = document.getElementsByClassName("text3");
let cost1 = document.getElementsByClassName("cost1");

let buttons2 = document.getElementsByClassName("buttons2");
for (let index = 0; index < buttons2.length; index++) {
    buttons2[index].addEventListener("click", showxit)
    
}
let countblock2=8;
function right2(){
    countblock2 = 12;
    setTimeout(showxit, 100)
    
}
function left2(){
    countblock2 = 8;
    setTimeout(showxit, 100)
}


function showxit(){
    for(let i=0; i<4; i++){
    img1[i].src = catalog[i+countblock2].img;
    text2[i].innerHTML= catalog[i+countblock2].text;
    text3[i].innerHTML= catalog[i+countblock2].text1;
    cost1[i].innerHTML= catalog[i+countblock2].cost;
    }
}
showxit()










/*let card = document.getElementsByClassName("card");
for(let i=0; i<card.length; i++){
    card[i].addEventListener("mouseover", showIm);
    card[i].addEventListener("mouseout", function(){
        card[i].style.background = "url("+catalog[i].img+")";
    });
    card[i].style.background = "url("+catalog[i].img+")";
}

function showIm(event){
    if(event.target.nodeName == "DIV"){
        event.target.parentElement.style.background = "url("+event.target.firstElementChild.src+")";
        
    }
}*/