onLoadCart();
var rs =  document.getElementsByClassName('rs')[0];
var number =  document.getElementsByClassName('number')[0];
var amount =  document.getElementsByClassName('amount')[0];
function onLoadCart(){
    var number = localStorage.getItem('cartNumber');
    if(number){
        document.getElementsByClassName('clearallbtn')[0].style.display="block";
        document.getElementsByClassName('finalprice')[0].style.display="block";
        document.getElementsByClassName('another')[0].style.display="none";
    document.getElementsByClassName('circle')[0].innerHTML=number;
    var incart= localStorage.getItem('incart');
    incart = JSON.parse(incart);
    Object.values(incart).map(item => {
    //    var para = document.createElement('img');
    //    para.src='close-circle-outline.png';
    //    para.width='30';
    //    para.height='30';
    //    para.setAttribute('id', 'image');
    //    para.addEventListener('click',function(){
    //        var incart = localStorage.getItem('incart');
    //         alert(item.name);
    //     //    window.localStorage.removeItem(incart);
    //    });
    //    document.getElementsByClassName('del')[0].appendChild(para);
        para = document.createElement('li');
       item.name = item.name.split('<br>').join('');
       item.name = item.name.split('&nbsp;').join('');
       item.name = item.name.split('&emsp;').join('');
       para.innerHTML=item.name;
       document.getElementsByClassName('name')[0].appendChild(para);
       var para = document.createElement('br');
       document.getElementsByClassName('name')[0].appendChild(para);
       var para = document.createElement('li');
       item.price = item.price.split('&emsp;').join(''); 
       para.innerHTML=item.price;
       document.getElementsByClassName('rs')[0].appendChild(para);
       var para = document.createElement('br');
       document.getElementsByClassName('rs')[0].appendChild(para);
       var para = document.createElement('li');
       para.innerHTML=item.value;
       document.getElementsByClassName('number')[0].appendChild(para);
       var para = document.createElement('br');
       document.getElementsByClassName('number')[0].appendChild(para);
       var para = document.createElement('li');
       var oneitemrs = item.price.replace('₹',''); 
       oneitemrs =oneitemrs.split(',').join('');
       oneitemrs = parseInt(oneitemrs);
       var value = parseInt(item.value);
       para.innerHTML=(oneitemrs)*(value);
       document.getElementsByClassName('amount')[0].appendChild(para);
       var para = document.createElement('br');
       document.getElementsByClassName('amount')[0].appendChild(para);
    });
    var totalprice = localStorage.getItem('totalprice');
    totalprice = parseInt(totalprice);
    document.getElementsByClassName('total1')[0].innerHTML=totalprice;
}
else{
    document.getElementsByClassName('clearallbtn')[0].style.display="none";
    document.getElementsByClassName('finalprice')[0].style.display="none";
    document.getElementsByClassName('another')[0].style.display="block";
}
}

var z = document.getElementsByClassName('delimage');
for(var i=0;i<z.length;i++)
{
    z[i].addEventListener('click',function(){
    });
}

function allClear(){
    window.localStorage.clear();
    location.reload();
}