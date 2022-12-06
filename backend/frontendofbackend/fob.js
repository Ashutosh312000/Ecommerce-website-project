const addProductBtn=document.getElementById('addProductBtn');
const homeSection=document.getElementById('homeSection');
const addProductSection=document.createElement('section');
addProductSection.style.display="none";
const storeSection=document.createElement('section');
storeSection.style.display="none";
const homeBtn=document.getElementById('homeBtn');
const storeBtn=document.getElementById('storeBtn');
const ordersBtn=document.getElementById('ordersBtn');
const cartBtn=document.getElementById('cartBtn');
const body=document.getElementById('body')
var addProductBtnFlag=true;
var storeBtnFlag=true;


homeBtn.addEventListener('click' ,()=>{
    homeSection.style.display="block";
    addProductSection.style.display="none";
    storeSection.style.display="none";
})

storeBtn.addEventListener('click' ,()=>{
    homeSection.style.display="none";
    addProductSection.style.display="none";
    storeSection.style.display="flex";

    if(storeBtnFlag){
        storeSection.className="grid"
        body.appendChild(storeSection);

        const article=document.createElement('article');
        article.className="card product-item";
        storeSection.appendChild(article);

        const articleheader=document.createElement('header');
        articleheader.className="card__header";
        article.appendChild(articleheader);

        const cardimage=document.createElement('div')
        cardimage.className="card__image";
        article.appendChild(cardimage);

        const img=document.createElement('img');
        img.setAttribute('src','');
        img.setAttribute('alt','');
        cardimage.appendChild(img);

        const cardcontent=document.createElement('div')
        cardcontent.className="card__content";
        article.appendChild(cardcontent);

        const cardcontenth2=document.createElement('h2');
        cardcontenth2.className="product__price";
        cardcontent.appendChild(cardcontenth2);
        cardcontenth2.textContent="$"; //yhan per price dalo

        const cardcontentp=document.createElement('p');
        cardcontentp.className="product__description";
        cardcontent.appendChild(cardcontentp);
        cardcontentp.textContent="" //yhan per description ayega    


        const cardactions=document.createElement('div')
        cardactions.className="card__actions";
        article.appendChild(cardactions);









        storeBtnFlag=false;
    }
    
})


addProductBtn.addEventListener('click' ,()=>{
    homeSection.style.display="none";
    addProductSection.style.display="flex";
    storeSection.style.display="none";
    
    if(addProductBtnFlag){
    addProductSection.className="addProductSection";
    body.appendChild(addProductSection);

    const form=document.createElement('form');
    addProductSection.appendChild(form);
    // form.setAttribute('onlick',formsubmitfunction());

    const formControl1=document.createElement('div')
    formControl1.className="form-control";
    form.appendChild(formControl1);

    const titleLabel=document.createElement('label');
    titleLabel.setAttribute('for','title');
    titleLabel.textContent="Title";
    formControl1.appendChild(titleLabel);

    const title=document.createElement('input');
    title.id="title";
    title.setAttribute('type','text');
    title.setAttribute('name','title');
    formControl1.appendChild(title);


    const formControl2=document.createElement('div')
    formControl2.className="form-control";
    form.appendChild(formControl2);

    const imageUrlLabel=document.createElement('label');
    imageUrlLabel.setAttribute('for','imageUrl');
    imageUrlLabel.textContent="Image Url";
    formControl2.appendChild(imageUrlLabel);

    const imageUrl=document.createElement('input');
    imageUrl.id="imageUrl";
    imageUrl.setAttribute('type','text');
    imageUrl.setAttribute('name','imageUrl');
    formControl2.appendChild(imageUrl);

    const formControl3=document.createElement('div')
    formControl3.className="form-control";
    form.appendChild(formControl3);

    const priceLabel=document.createElement('label');
    priceLabel.setAttribute('for','price');
    priceLabel.textContent="Price";
    formControl3.appendChild(priceLabel);

    const price=document.createElement('input');
    price.id="price";
    price.setAttribute('type','text');
    price.setAttribute('name','price');
    formControl3.appendChild(price);


    const formControl4=document.createElement('div')
    formControl4.className="form-control";
    form.appendChild(formControl4);

    const descriptionLabel=document.createElement('label');
    descriptionLabel.setAttribute('for','description');
    descriptionLabel.textContent="Description";
    formControl4.appendChild(descriptionLabel);
    
    const description=document.createElement('input');
    description.id="description";
    description.setAttribute('type','text');
    description.setAttribute('name','Description');
    formControl4.appendChild(description);

    const formSubmitBtn=document.createElement('button');
    formSubmitBtn.className="formSubmitBtn";
    formSubmitBtn.setAttribute('type','submit');
    formSubmitBtn.textContent="Add Product";
    form.appendChild(formSubmitBtn);
    

    addProductBtnFlag=false;


    var formsubmitfunction=()=>{
        console.log(123);
    }
        




    }

})


