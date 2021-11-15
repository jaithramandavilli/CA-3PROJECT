let carts=document.querySelectorAll('.cart');
let products=[
    {  
        name:'Crispy Burger',
        tag:'burger',
        price:120,
        incart:0

    },
    {  
        name:'Veg.FriedRice',
        tag:'fried',
        price:210,
        incart:0

    },
    {  
        name:'Veg. Noodles',
        tag:'nood1',
        price:100,
        incart:0

    },
    {  
        name:'Butter Naan',
        tag:'naaan',
        price:60,
        incart:0

    },
    {
        name:'Butter Panner Dosa',
        tag:'plain',
        price:110,
        incart:0
    },
    {
        name:'South-IndianThali',
        tag:'thali2',
        price:200,
        incart:0
    },
    {
        name:'Tomato Soup(.HOT',
        tag:'tm',
        price:120,
        incart:0
    },
    {  
        name:'Mushroom Pizza',
        tag:'p12',
        price:270,
        incart:0

    },
    {  
        name:'Hexa Egg Biryani',
        tag:'egbb',
        price:220,
        incart:0

    },
    {  
        name:'Devil Chicken Pizza',
        tag:'Devil_Chicken',
        price:300,
        incart:0

    },
    {  
        name:'Prawns Manchuria',
        tag:'prr',
        price:310,
        incart:0

    },
    {
        name:'Amazing Apollo fish',
        tag:'fish',
        price:280,
        incart:0
    },
    {
        name:'Chicken Lollipops',
        tag:'kfcpic',
        price:290,
        incart:0
    },
    {
        name:'Mutton Biryani',
        tag:'mbir',
        price:300,
        incart:0
    },
    {
        name:'Chicken Biryani',
        tag:'cbbir',
        price:250,
        incart:0
    },
    {
        name:'CHicker Burger',
        tag:'cburger',
        price:150,
        incart:0
    },
    {  
        name:'Lagoon mockatil',
        tag:'mock',
        price:100,
        incart:0

    },
    {  
        name:'Cool Coco Cola',
        tag:'coco',
        price:80,
        incart:0

    },
    {  
        name:'Lemon Cocktail',
        tag:'lem',
        price:120,
        incart:0

    },
    {  
        name:'refreshing sprite',
        tag:'sprite',
        price:45,
        incart:0

    },
    {
        name:'coneicecream',
        tag:'cones',
        price:50,
        incart:0
    },
    {
        name:'chocoicecream',
        tag:'choco',
        price:170,
        incart:0
    },
    {
        name:'creamstone',
        tag:'straw',
        price:150,
        incart:0
    },
    {
        name:'kitkat',
        tag:'bar',
        price:70,
        incart:0
    }

];

for (let i=0; i<carts.length;i++)
{
    carts[i].addEventListener('click',()=>{
       cartnumbers(products[i]);
       totalCost(products[i])
    })
}

function onloadcartnumbers(){
    let productnumbers=localStorage.getItem('cartnumbers');
    if(productnumbers)
    {
        document.querySelector('.cartbtn span').textContent=productnumbers;
    }
}
function cartnumbers(product){
    let productnumbers=localStorage.getItem('cartnumbers');
    productnumbers=parseInt(productnumbers);
    if(productnumbers)
    {
        localStorage.setItem('cartnumbers',productnumbers+1);
        document.querySelector('.cartbtn span').textContent= productnumbers + 1;
    }
    else{
    localStorage.setItem('cartnumbers',1);
    document.querySelector('.cartbtn span').textContent=1;
    }

    setitems(product);
}

function setitems(product){
    let cartitems=localStorage.getItem('productsincart');
    cartitems=JSON.parse(cartitems);
    if(cartitems != null){
        if(cartitems[product.tag]==undefined){
            cartitems={
                ...cartitems,
                [product.tag]:product
            }
        }
        cartitems[product.tag].incart+=1;
    }else{
    product.incart=1;
    cartitems={
        [product.tag]:product
    }
     }
    localStorage.setItem("productsincart",JSON.stringify(cartitems));
}

function totalCost(product){
    console.log('the productprice is',product.price);
  let cartcost=localStorage.getItem('totalCost');
  console.log("My cartcost is",cartcost);

  console.log(typeof cartcost);
  if(cartcost != null)
  {
      cartcost=parseInt(cartcost);
      localStorage.setItem("totalCost",cartcost + product.price);

  }else{
     localStorage.setItem("totalCost",product.price);
  }
}

function displaycart(){
   let cartitems=localStorage.getItem("productsincart");
   cartitems=JSON.parse(cartitems);
   let cartcost=localStorage.getItem('totalCost');
   let productcontainer=document.querySelector(".products");
   
   if(cartitems && productcontainer){
       productcontainer.innerHTML='';
       Object.values(cartitems).map(item=>{
          productcontainer.innerHTML += `
          
          <div class="product">
        
              <img src="${item.tag}.jpg">
              <span>${item.name}</span>
          </div>
          <div class="amt">&#8377 ${item.price}.00</div>
          <div class="thequantity">
  
          <span>${item.incart}</span>
   
          </div>
          <div class="total">
          &#8377 ${item.incart * item.price}.00
          </div>
         
           `;
       });
     

      productcontainer.innerHTML +=`
       <div class="baskettotalcontainer">
       <span class="baskettotaltitle">Basket Total Price :</span><span class="baskettotal">&#8377 ${cartcost}.00</span>
       </div>
       `;
      
   }
}

function Delete(e){
    let removeitem=document.getElementsByClassName('delbtn');
    let productnumbers=localStorage.getItem('cartnumbers');
 
if(removeitem.name == products.name){
   
       console.log(removeitem.name)
}
   console.log(removeitem);
}

onloadcartnumbers();
displaycart();
