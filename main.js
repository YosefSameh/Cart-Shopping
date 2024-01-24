// step 1

let sideMenu = document .getElementById("side-menu")
let slider = document .getElementById("slider")
let item = document .getElementById("item")
let imgSlider = document .getElementById("img-slider")
let prev = document.getElementById("prev")
let next = document.getElementById("next")


// step 2

// let arrSlider = ["/img/samsung-1.jpg","/img/samsung-2.jpg","/img/samsung-3.jpg","/img/samsung-4.jpg"]
// let index = 0

// let imgInSlider = (idx)=>{
//     index = idx
//     imgSlider.src = arrSlider[index]
// }
// next.onclick = ()=>{
//     index++
//     if (index >= arrSlider.length) {
//         index = 0
//     }
//     imgInSlider(index)
// }
// prev.onclick = ()=>{
//     index--
//     if (index < 0 ) {
//         index = arrSlider.length-1 
//     }
//     imgInSlider(index)
// }



// step 1 
let divProducts = document.getElementById("products")
let faCartShopping = document.getElementById("fa-solid")
let listItem =document.getElementById("list-item")
let btnClose =document.getElementById("btn-close")
let spanCart = document.getElementById("span-cart")
let Totel = document.getElementById("Totel")


// step 2 
faCartShopping.onclick = ()=>{
    
        
        listItem.classList.toggle("toggle")
}

btnClose.onclick = () => {
    listItem.classList.remove("toggle")
}


// step 3
let products = [
    {
    id:1,
    titel:"samsung s23 ultra",
    img:"img/samsung-1.jpg",
    price:5000
},
    {
        id:2,
        titel:"samsung s22 ultra",
        img:"/img/samsung-2.jpg",
        price:7000
    },
    {
        id:3,
        titel:"samsung s21 ultra",
        img:"img/samsung-3.jpg",
        price:8000
    },
    {
        id:4,
        titel:"samsung s20 ultra",
        img:"img/samsung-4.jpg",
        price:5000
    },
    {
        id:5,
        titel:"samsung s20 ",
        img:"img/samsung-2.jpg",
        price:3000
    },
    {
        id:6,
        titel:"samsung s21",
        img:"img/samsung-3.jpg",
        price:2000
    }
]
// step 4
let listCards = []

let initApp = ()=>{
    products.forEach((value,key)=>{
        let newdiv1 = document.createElement("div")
        newdiv1.classList.add("d-flex","flex-column","align-items-center","bg-white","col-4","new-Div")
        newdiv1.innerHTML = `
        
        <img src="${value.img}" alt="">
        <p>${value.titel}</p>
        <p>${value.price}$</p>
        <button class="w-75 btn-add mb-4" onclick="addproduct(${key})">Add To Cart</button>
        
        `
        divProducts.appendChild(newdiv1)
    })
    
}

let addproduct = (key)=>{
    if (listCards[key]== null) {
        listCards[key] = JSON.parse(JSON.stringify(products[key]))
        listCards[key].quantity = 1
    }
    reloadCard()
    
}


let reloadCard = ()=>{
    listItem.innerHTML = ""
    let count = 0
    let totelPrice = 0
    listCards.forEach((value,key)=>{
        totelPrice = totelPrice + value.price
        count = count + value.quantity
        if (value != null) {
            let newDiv = document.createElement("div")
            newDiv.classList.add("d-flex","justify-content-between","align-items-center","my-3","mx-4")
            newDiv.innerHTML = `
            
            <img src="${value.img}" alt="">
            <p>${value.titel}</p>
            <p>${value.price}$</p>
            <button onclick="Delet(${key})">Delet</button>
            <button class="btn-menth" onclick="change(${key},${value.quantity - 1})">-</button>
            <p>${value.quantity}</p>
            <button class="btn-plus" onclick="change(${key},${value.quantity + 1})">+</button>
            `
            listItem.appendChild(newDiv)
        }
        
    })
    
    Totel.innerText = totelPrice
    spanCart.innerText = count 
}
let change = (key, quantity)=>{
    if (quantity == 0) {
        delete listCards[key]
        
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard()
}
let Delet = (key)=>{
    delete listCards[key]
    reloadCard()
    
}

initApp()




























































































































































































// let title = document.getElementById("title")
// let price = document.getElementById("price")
// let img = document.getElementById("img")
// let api = new XMLHttpRequest()
// api.open("GET","https://jsonplaceholder.typicode.com/photos")
// api.send()


// api.onreadystatechange = function yosef () {
//     let apistring = JSON.parse(this.responseText)

    
//     for (let i = 0; i < 2500; i++) {

//         title.innerHTML = apistring[i].title
//         price.innerHTML = ` $${apistring[i].id}`
//         img.src = apistring[i].url
//     }
    
// }
// yosef ()
//=======================================



// let arr  = [{
//     id:0,
//     titel:"samsung s23 ",
//     price:30000,
//     url:"https://th.bing.com/th/id/OIP.Isfhd6xu4AaF96qspmEUowAAAA?rs=1&pid=ImgDetMain"
// },
// {
//     id:1,
//     titel:"samsung s20 ultra",
//     price:50000,
//     url:"https://th.bing.com/th/id/OIP.Isfhd6xu4AaF96qspmEUowAAAA?rs=1&pid=ImgDetMain"
// },
// {
//     id:2,
//     titel:"samsung s21 ultra",
//     price:70000,
//     url:"https://th.bing.com/th/id/OIP.Isfhd6xu4AaF96qspmEUowAAAA?rs=1&pid=ImgDetMain"
// },
// {
//     id:3,
//     titel:"samsung s22 ultra",
//     price:80000,
//     url:"https://th.bing.com/th/id/OIP.Isfhd6xu4AaF96qspmEUowAAAA?rs=1&pid=ImgDetMain"
// }
// ]



// let product = document.getElementById("product")
// let cartItem = document.getElementById("cart-item")
// let bages = document.getElementById("bages")

// let yosef = ()=>{

//     product.innerHTML = arr.map((item,id)=>{
//         console.log();
//         return`
        
//             <div class="">
//                 <div class="img">
//                 <img src=${item.url} >

//                 </div>
//                 <h5>${item.titel}</h5>
//             <h6>${item.price}</h6>
//             <button class="btn" onclick="add(${id})"> Add To Cart </button>
//             </div>
//         `
//     }).join("")

// }
// yosef()


// let arrinlogel = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")):[]
    
// let add = (id)=>{
//     let choceprodect = arr.find((item) => item.id === id )
//     // console.log(choceprodect.titel);
//     arrinlogel = [...arrinlogel ,  choceprodect]
//     localStorage.setItem("product",JSON.stringify(arrinlogel))
//     cartItem.innerHTML += 
//     `
//     <div class="">
//     <img src=${choceprodect.url} alt="">
//     <h5 id="titel-cart">${choceprodect.titel}</h5>
//     <h6>${choceprodect.price}</h6>
//     <button id="delet" onclick="remove(${item.id})">Delet</button>
// </div>
//     `
//     let titelcart  = document.querySelectorAll(".cart-item h5")

//     bages.innerHTML = titelcart.length
// }


// let remove = (id)=>{


// }





























