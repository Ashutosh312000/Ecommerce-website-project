const music=document.getElementById('music');
// const merch_content=document.getElementById('merch');
const total_price=document.getElementById('totalprice');
const cart=document.getElementById('cart');
const closebtn=document.getElementsByClassName('cancel');
const cart_holder=document.getElementsByClassName('cart-holder');
const cart_number=document.getElementById('cart-number');

music.addEventListener('click',addtocart);
closebtn[0].addEventListener('click',()=>{
    cart.style.display='none'
})
// merch.addEventListener('click',addtocart);
// closebtn[0].addEventListener('click',()=>{
//     cart.style.display='none'
// })

cart_holder[0].addEventListener('click',()=>{
    cart.style.display='inline-block'
})

function addtocart(e){
    if(e.target.classList.contains('shop-item-button')){
       const albumname=e.target.parentElement.parentElement.children[0].outerText;
       const price=e.target.parentElement.children[1].outerText;
       const img=e.target.parentElement.parentElement.children[1].firstElementChild.src;

       const intprice=parseFloat(price); 
       const totalprice=document.getElementById('totalprice');
       const initialprice=parseFloat(totalprice.outerText);
       const actualprice=(intprice+initialprice).toFixed(2);
       totalprice.textContent=`${actualprice}`;

       const notification=document.getElementById('notification');
       notification.style.display="inline-block";
       notification.innerHTML=`<span style="color:red;">Your Product: ${albumname} is added to the cart</span>`;

       setTimeout(()=>{
        notification.style.display="none"
       },2500)

       const cart_items=document.getElementsByClassName('cartitems')[0];
       let newdiv=document.createElement('div');
       newdiv.classList.add('cart-row')
       cart_items.appendChild(newdiv);

       let cart_item=document.createElement('span');
       cart_item.classList.add('cart-item')
       newdiv.appendChild(cart_item);

       let cart_img=document.createElement('img');
       cart_img.setAttribute('src',`${img}`);
       cart_img.className="cart-img";
       let cart_albumname=document.createElement('span');
       cart_albumname.className="cart-albumname"
       cart_albumname.textContent=albumname;

       cart_item.appendChild(cart_img);
       cart_item.appendChild(cart_albumname);
       
       cart_number.textContent=`${parseInt(cart_number.textContent)+1}`;
       


       let cart_price=document.createElement('span');
       cart_price.classList.add('cart-price')
       newdiv.appendChild(cart_price);
       let cart_productprice=document.createElement('span');
       cart_productprice.className="cart-productprice"
       cart_productprice.textContent=price;
       cart_price.appendChild(cart_productprice);


        let cart_quantity=document.createElement('span');
       cart_quantity.classList.add('cart-quantity')
       newdiv.appendChild(cart_quantity);

       let input_quantity=document.createElement('input');  
       input_quantity.className="input-quantity";
       input_quantity.setAttribute('type','text');
       input_quantity.setAttribute('value','1');

       let remove_btn=document.createElement('button');
       remove_btn.className="remove-btn";
       remove_btn.textContent='REMOVE';

       cart_quantity.appendChild(input_quantity);
       cart_quantity.appendChild(remove_btn);


       remove_btn.addEventListener('click',(e)=>{
           let remove_price=parseFloat(e.target.parentElement.previousElementSibling.firstElementChild.textContent);
           let old_price=parseFloat(total_price.textContent);
           new_price=parseInt(old_price-remove_price).toFixed(2);
           total_price.textContent=`${new_price}`;
           cart_number.textContent=`${parseInt(cart_number.textContent)-1}`;
            e.target.parentElement.parentElement.remove();

       })

       
}
}


const music_content=document.getElementById('music-content');


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:4000/products')
    .then((response)=>{
        for (var i = 0; i < response.data.length; i++) {
            let myobj = response.data[i];
            makeproduct(myobj);
        }
    })
});


var makeproduct=(myobj)=>{

    //we are making div for each album
    let divalbum=document.createElement('div');
    divalbum.id=`${myobj.title}`;

    //we are making title of the products
    let h3=document.createElement('h3');
    h3.textContent=`${myobj.title}`;

    //we are making image-container
    let image_container=document.createElement('div');
    image_container.className='image-container';

    //we are inserting the image
    let img=document.createElement('img');
    img.setAttribute('src',`${myobj.imageUrl}`);
    img.className='prod-images';

 

    //we are making prod-details
    let divdetails=document.createElement('div');
    divdetails.className="prod-details";
    
    let doller=document.createElement('span');
    doller.textContent='$';
    divdetails.appendChild(doller);

    let price=document.createElement('span');
    price.textContent=`${myobj.price}`;
    price.className="price"
    divdetails.appendChild(price);

    let shop_item_button=document.createElement('button');
    shop_item_button.setAttribute('type','button');
    shop_item_button.className="shop-item-button";
    shop_item_button.textContent='ADD TO CART';
    divdetails.appendChild(shop_item_button);


    //we are adding them into each other
    music_content.appendChild(divalbum);
    divalbum.appendChild(h3);
    divalbum.appendChild(image_container);
    image_container.appendChild(img);

    divalbum.appendChild(divdetails);

}

