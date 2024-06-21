let countX = 0;
let tovarsincart;
if(localStorage.getItem("cart")){
    tovarsincart = JSON.parse(localStorage.getItem("cart"));
    //тут заполнить корзину
}
else{
    tovarsincart = [];
}
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

let promocodes = [
    {
        code: "MAISONFRANCISKURKDJIAN",
        persent:15
    },
    {
        code: "FIRST",
        persent:20
    },
    {
        code: "HAPPYBIRTHDAY",
        persent:25
    },
    {
        code: "ITeen Academy",
        persent:50
    }
]
let summa = document.getElementById("summa");
let skidka = document.getElementById("skidka");
let itog = document.getElementById("itog");

function entryPromo(){
    for(let i=0; i<promocodes.length; i++){
        if(document.getElementById("prcode").value == promocodes[i].code){
            skidka.innerHTML = (Number(summa.innerHTML)*promocodes[i].persent/100).toFixed(2);
            itog.innerHTML = (Number(summa.innerHTML)-Number(skidka.innerHTML)).toFixed(2);
        }
    }
}



 function sent(){
    for(let i=0; i<3; i++){
        console.log(promocod[i])
        if(document.getElementById('name').value == promocod[i]){

        }
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
        imgleft:"parf12.webp",
        imgright:"parf13.webp",
        text:"Парфюм Paris",
        text1:"Цена со скидкой",
        cost:128.99

    },
    {
        img:"shampoo1.webp",
        imgleft:"shampoo3.webp",
        imgright:"shampoo4.webp",
        text:"Шампунь твердый",
        text1:"Цена со скидкой",
        cost:36.59

    },
    {
        img:"spf10.webp",
        imgleft:"spf11.webp",
        imgright:"spf7.webp",
        text:"Spf frudia",
        text1:"Цена со скидкой",
        cost:39.99

    },
    {
        img:"milo1.webp",
        imgleft:"milo2.webp",
        imgright:"milo3.webp",
        text:"Мыло Paris",
        text1:"Цена со скидкой",
        cost:15.66

    },
    {
        img:"parf1.webp",
        imgleft:"parf2.webp",
        imgright:"parf3.webp",
        text:"Парфюм off white ",
        text1:"Цена со скидкой",
        cost:68.99

    },
    {
        img:"mask1.webp",
        imgleft:"mask2.webp",
        imgright:"mask3.webp",
        text:"Тушь для ресниц Artvisage ",
        text1:"Цена со скидкой",
        cost:19.99

    },
    {
        img:"p1.webp",
        imgleft:"p2.webp",
        imgright:"p3.webp",
        text:"Парфюм Neydo",
        text1:"Цена со скидкой",
        cost:179.99

    },
    {
        img:"pom1.webp",
        imgleft:"pom2.webp",
        imgright:"pom3.webp",
        text:"Помада для губ Klio",
        text1:"Цена со скидкой",
        cost:73.66
  },
  {
    img:"mosk1.webp",
    imgleft:"mosk2.webp",
    imgright:"mosk3.webp",
    text:"Парфюм Mashino toy2",
    text1:"Цена со скидкой",
    cost:173.70
},
{
    img:"shy1.webp",
    imgleft:"shy2.webp",
    imgright:"shy3.webp",
    text:"Мусс для губ",
    text1:"Цена со скидкой",
    cost:83.59
},
{
    img:"tonv1.webp",
    imgleft:"tonv2.webp",
    imgright:"tonv3.webp",
    text:"Тональный крем vivienne sabo",
    text1:"Цена со скидкой",
    cost:19.99
},
{
    img:"ma1.webp",
    imgleft:"ma2.webp",
    imgright:"ma3.webp",
    text:"Маска для лица For me",
    text1:"Цена со скидкой",
    cost:4.24
},
{
    img:"dar1.webp",
    imgleft:"dar2.webp",
    imgright:"dar3.webp",
    text:"Пенка для душа Darling",
    text1:"Цена со скидкой",
    cost:37.99
},{
    img:"pus1.webp",
    imgleft:"pus2.webp",
    imgright:"pus3.webp",
    text:"Пиллинг скатка Pussy",
    text1:"Цена со скидкой",
    cost:29.99
},{
    img:"par1.webp",
    imgleft:"par2.webp",
    imgright:"par3.webp",
    text:"Парфюм Banana Repablic",
    text1:"Цена со скидкой",
    cost:238.99
}
]

let catalogDiv  = document.getElementById("catalogg");
for(let i=0; i<catalog.length; i++){
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("card");
    catalogDiv.appendChild(cartDiv);

    let imgTag1 = document.createElement("img");
    imgTag1.src = catalog[i].img;
    imgTag1.classList.add('imgTag')
    cartDiv.appendChild(imgTag1);

    let ptag = document.createElement("p");
    ptag.innerHTML = catalog[i].text;
    ptag.classList.add('ptag')
    cartDiv.appendChild(ptag);
    let pptag = document.createElement("p");
    pptag.innerHTML = catalog[i].text1;
    cartDiv.appendChild(pptag);
    let costtag = document.createElement("p");
    costtag.classList.add('costtag')
    costtag.innerHTML = catalog[i].cost;
    cartDiv.appendChild(costtag);
    let buttondiv = document.createElement("div");
    buttondiv.innerHTML = "купить";
    buttondiv.classList.add("buttondi");
    cartDiv.appendChild(buttondiv)
    buttondiv.addEventListener("click", buy)
}
function buy (event){
    let struct = {
        img:"",
        text:"",
        count:0,
        cost:0
    }
    let parentcardclick = event.target.parentNode;
    if(event.target.nodeName == "DIV"){
        struct.img = parentcardclick.querySelector( ".imgTag").src;
        struct.count = 1;
        struct.cost = parentcardclick.querySelector( ".costtag").textContent;
        struct.text = parentcardclick.querySelector( ".ptag").textContent;
        if(tovarsincart.length !=0){
            let foundTovar = tovarsincart.find(x=> x.text=== struct.text)
            if(foundTovar != undefined){
               foundTovar.count++;
            }
            else{
               tovarsincart.push(struct);
            }
         }
         else{
           tovarsincart.push(struct);
    }
    console.log(tovarsincart)
    }
    
}
function showbasket(){
    document.getElementById("basket").style.width="30%";
    document.getElementById('cart1').innerHTML = "";

    let summa = 0
    for(let i =0; i<tovarsincart.length; i++){
        let newDiv = document.createElement('div');
        newDiv.classList.add("grid1");
        document.getElementById("cart1").appendChild(newDiv);
        let img = document.createElement("img");
        img.src= tovarsincart[i].img;
        img.classList.add("img11")
        newDiv.appendChild(img);

        let newDiv1 =  document.createElement('div');
        newDiv1.classList.add("textt");
        document.getElementById("cart1").appendChild(newDiv1);

        let text = document.createElement("p");
        text.innerHTML = tovarsincart[i].text;
        text.classList.add("texttt");
        newDiv1.appendChild(text);

        let newDiv2 =  document.createElement('div');
        newDiv2.classList.add("grid3");
        document.getElementById("cart1").appendChild(newDiv2);

        let newDiv3 = document.createElement('div');
        newDiv3.classList.add("newdiv3");
        document.getElementsByClassName("grid3")[i].appendChild(newDiv3);

        let button = document.createElement("button");
        button.innerHTML = "-";
        button.classList.add("rad");
        newDiv3.appendChild(button)

        let span = document.createElement("span");
        span.classList.add("count");
        span.innerHTML = "1";
        newDiv3.appendChild(span)

        let button1 = document.createElement("button");
        button1.innerHTML = "+";
        button1.classList.add("rad");
        button1.classList.add("plus");
        newDiv3.appendChild(button1)

        let button2 = document.createElement("button");
        button2.innerHTML = "x";
        button2.classList.add("rad");
        newDiv3.appendChild(button2);

        let div4 = document.createElement('div');
        div4.classList.add("pcostjs");
        document.getElementsByClassName("grid3")[i].appendChild(div4);

        let pcost = document.createElement("span");
        pcost.innerHTML = tovarsincart[i].cost;
        pcost.classList.add("pcost");
        div4.appendChild(pcost)

        plus = document.getElementsByClassName('plus')
        for(let i=0; i<plus.left; i++){
            plus[i].addEventListener("click", pluss)
        }

        summa =  summa + Number(tovarsincart[i].cost);
        document.getElementById('summa').innerHTML = summa.toFixed(2)
        
    }
    localStorage.setItem("cart1", JSON.stringify(tovarsincart));
}

function pluss(event){

}
function closebasket(){
    document.getElementById("basket").style.width="0px"
}

let imgTag = document.getElementsByClassName("imgTag");
for(let i=0; i<imgTag.length; i++){
    imgTag[i].addEventListener("mouseover",  function(){
        imgTag[i].src = catalog[i].imgleft;
    });
    imgTag[i].addEventListener("mouseout", function(){
        imgTag[i].src= catalog[i].img;
    });
    imgTag[i].src = catalog[i].img;
}