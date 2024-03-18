// document.addEventListener("DOMContentLoaded", function () {


const sortPrice = document.querySelector(".sort-price");
const sortRecommended = document.querySelector(".sort-recommended");
const searchBar = document.querySelector(".search-bar input");
const searchButton = document.querySelector("#search-button");
const container = document.querySelector(".container");

    function displayitems(itemsToShow) {
        container.innerHTML = '';
    
        itemsToShow.forEach(item => {
            const box = document.createElement('div');
            box.className='box';
            box.style.backgroundColor=item.background;
    
            const detailBox=document.createElement('div');
            detailBox.className='detail-box';

            const title=document.createElement('a');
            title.className='name';
            title.innerHTML=`<h3>${item.title}<\h3>`;
    
            const price=document.createElement('a');
            price.className='price';
            price.innerHTML=`<p>₹${item.price}<\p>`;
    

            
            detailBox.appendChild(title);
            detailBox.appendChild(price);

    
            const slideImg = document.createElement('div');
            slideImg.className='slide-img';
    
            const img = document.createElement('img');
            img.src=item.image;
            img.alt=item.title;
            img.alt=item.price;
    
            slideImg.appendChild(img);
    
            box.appendChild(detailBox);
            box.appendChild(slideImg);
    
            container.appendChild(box);
        });
    }

    function sortByReco(){
        // reloading the page again
        return window.location.reload(true);
    };

    function sortProductsByPrice(){
        return items.sort((item1,item2) => {
    
            // parseInt is taking a string a returning its integer value
            const price1=parseInt(item1.price);
            const price2=parseInt(item2.price);
    
            return price1-price2;
        });
    };
    
    sortPrice.addEventListener('click',function(){
        const sortedPrice = sortProductsByPrice();
        document.querySelector(".dropbtn-text").innerText = "Sort By : Price";
        displayitems(sortedPrice);
    });
    
    sortRecommended.addEventListener('click',function(){
        const sortedByReco= sortByReco();
        document.querySelector(".dropbtn-text").innerText = "Sort By : Recommended";
        displayitems(sortedByReco);
    });

    
    displayitems(items);
    // });