var index=0;
slideshow();
function slideshow(){
    var x = document.getElementsByClassName("bgimage");
    for(var i=0;i<x.length;i++)
    {
        x[i].style.display="none";
    }
    x[index].style.display="block";
    index++;
    if(index==x.length)
    {
        index=0;
    }
    setTimeout(slideshow,4000);
}
// for phone image slide

var index1=0;
var x1=document.getElementsByClassName("leftbtn");
var x11 = document.getElementsByClassName("rightbtn");
x1[0].style.display = "none";
function imageSlide(x2)
{
    index1=index1+x2;
    if(index1>0)
    {
        x1[0].style.display="block";
    }
    else{
        x1[0].style.display = "none";
    }
    if(index1==2)
    {
        x11[0].style.display="none";
    }
    else{
        x11[0].style.display="block";
    }
    var x4=1500*index1;
     document.getElementsByClassName("mobile")[0].style.marginLeft=("-"+x4+"px");
}

// for laptop image slide
var lindex1=0;
var y1=document.getElementsByClassName("leftbtn1");
var y11 = document.getElementsByClassName("rightbtn1");
y1[0].style.display = "none";
function limageSlide(y2)
{
    lindex1=lindex1+y2;
    if(lindex1>0)
    {
        y1[0].style.display="block";
    }
    else{
        y1[0].style.display = "none";
    }
    if(lindex1==3)
    {
        y11[0].style.display="none";
    }
    else{
        y11[0].style.display="block";
    }
    var y4=510*lindex1;
     document.getElementsByClassName("laptop")[0].style.marginLeft=("-"+y4+"px");
}

// for cart
onLoadCart();
function Item(name,price,value)
{
    this.name = name;
    this.price = price;
    this.value = value;
}

function onLoadCart(){
    var number = localStorage.getItem('cartNumber');
    if(number){
        document.getElementsByClassName('circle')[0].innerHTML=number;
    }   
}


var cart = document.getElementsByClassName('add-cart');
var x= document.querySelectorAll('.mobile');
var y = document.querySelectorAll('.laptop');
   function problem(t){
    name = x[t].getElementsByTagName('h3')[0].innerHTML;
    var price = x[t].getElementsByTagName('h2')[0].innerHTML;
    var value =0;
    var product = new Item(name,price,value);
    cartNumber(product);
    totalCost(product);
    }
    function problemlaptop(t){
        name = y[t].getElementsByTagName('h3')[0].innerHTML;
        name = name.split('&emsp;').join('');
        var price = y[t].getElementsByTagName('h2')[0].innerHTML;
        var value =0;
        var product = new Item(name,price,value);
        cartNumber(product);
        totalCost(product);
        }

function cartNumber(product){
    var productNumber = localStorage.getItem('cartNumber');
    productNumber = parseInt(productNumber);
    if(productNumber){
        localStorage.setItem('cartNumber',productNumber+1);
        document.getElementsByClassName('circle')[0].innerHTML=productNumber+1;
    }
    else{
        localStorage.setItem('cartNumber','1');
        document.getElementsByClassName('circle')[0].innerHTML=1;
    }
    arrangeItem(product);
}

function arrangeItem(product)
{
    var cartItem = localStorage.getItem('incart');
    cartItem = JSON.parse(cartItem);
    if(cartItem==null){
       product.value = 1;
       cartItem={
           [product.name]:product
       }
    }
    else{
        if(cartItem[product.name]==undefined){
            cartItem={
            ...cartItem,
            [product.name]:product
            }
        }
        cartItem[product.name].value +=1; 
    }
    localStorage.setItem('incart',JSON.stringify(cartItem));
}

function totalCost(product){
    product.price = product.price.split(',').join('');
    product.price = product.price.replace("₹","");
    var cartCost  = localStorage.getItem('totalprice');
    if(cartCost!=null){
        cartCost = parseInt(cartCost);
        product.price = parseInt(product.price);
        localStorage.setItem('totalprice',(cartCost + product.price));
    }
    else{
        localStorage.setItem('totalprice',product.price);
    }
}
