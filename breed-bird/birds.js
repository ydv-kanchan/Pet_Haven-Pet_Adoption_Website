console.log(birds);

const container = document.querySelector(".container");
const header = document.querySelector(".header");
const sortName = document.querySelector(".sort-name");
const sortAge = document.querySelector(".sort-age");
const sortRecommended = document.querySelector(".sort-recommended");
const searchBar = document.querySelector(".search-bar input");
const searchButton = document.querySelector("#search-button");

function filterBirdsBySpecies(searchTerm) {
    const filteredBirds = birds.filter(
        bird => bird.breed.toLowerCase().includes(searchTerm.toLowerCase()));

    return filteredBirds;
}

function sortByReco() {
    return window.location.reload(true);
}

function sortBirdsByName() {
    return birds.sort((bird1, bird2) => bird1.name.toLowerCase().localeCompare(bird2.name.toLowerCase()));
}

function sortBirdsByAge() {
    return birds.sort((bird1, bird2) => {
        const age1 = parseInt(bird1.age);
        const age2 = parseInt(bird2.age);

        return age1 - age2;
    });
}

function displayBirds(birdsToShow) {
    container.innerHTML = '';

    birdsToShow.forEach(bird => {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = bird.background;

        const detailBox = document.createElement('div');
        detailBox.className = 'detail-box';

        const name = document.createElement('a');
        name.className = 'name';
        name.innerHTML = `<h2>${bird.name}</h2>`;

        const breed = document.createElement('a');
        breed.className = 'breed'
        breed.innerHTML = ` ${bird.breed}`;

        const age = document.createElement('a');
        age.className = 'age';
        age.innerHTML = `${bird.age}`;

        detailBox.appendChild(name);
        detailBox.appendChild(breed);
        detailBox.appendChild(age);

        const slideImg = document.createElement('div');
        slideImg.className = 'slide-img';

        const img = document.createElement('img');
        img.src = bird.image;
        img.alt = bird.name;

        slideImg.appendChild(img);

        box.appendChild(detailBox);
        box.appendChild(slideImg);

        box.addEventListener('click',function(){
            const index = bird.id;
            detailedProfile(index);
        });

        container.appendChild(box);
    });
}

sortName.addEventListener('click', function () {
    const sortedBirdsNames = sortBirdsByName();
    document.querySelector(".dropbtn-text").innerText = "Sort By : Name";
    displayBirds(sortedBirdsNames);
});

sortAge.addEventListener('click', function () {
    const sortedBirdsAge = sortBirdsByAge();
    document.querySelector(".dropbtn-text").innerText = "Sort By : Age";
    displayBirds(sortedBirdsAge);
});

sortRecommended.addEventListener('click', function () {
    const sortedBirdsReco = sortByReco();
    document.querySelector(".dropbtn-text").innerText = "Sort By : Recommended";
    displayBirds(sortedBirdsReco);
});

searchButton.addEventListener('click', function () {
    const searchTerm = searchBar.value;
    const filterBirdsSpecies = filterBirdsBySpecies(searchTerm);
    displayBirds(filterBirdsSpecies);
});


function detailedProfile(index) {
    const selectedProfile = birds[index - 1];
    console.log(selectedProfile);
    console.log(selectedProfile.name);
    console.log(selectedProfile.features[0]);

    container.className = 'profile-outer-box';
    container.innerHTML = '';
    header.remove();

    const profileBox = document.createElement('div');
    profileBox.className = 'profile-box';

    const profileBoxLeft = document.createElement('div');
    profileBoxLeft.className = 'profile-box-left';

    const profileBoxLeftContent = document.createElement('div');
    profileBoxLeftContent.className = 'profile-box-left-content';

    const profileBoxLeftContentName = document.createElement('div');
    profileBoxLeftContentName.className = 'profile-box-left-name';
    profileBoxLeftContentName.innerHTML = `<p>${selectedProfile.name}</p>`;

    const profileBoxLeftContentSpecies = document.createElement('div');
    profileBoxLeftContentSpecies.className = 'profile-box-left-breed';
    profileBoxLeftContentSpecies.innerHTML = `<p>${selectedProfile.breed}</p>`;

    const profileBoxLeftContentAge = document.createElement('div');
    profileBoxLeftContentAge.className = 'profile-box-left-age';
    profileBoxLeftContentAge.innerHTML = `<p>${selectedProfile.age}</p>`;

    const profileBoxLeftContentAbout = document.createElement('div');
    profileBoxLeftContentAbout.className = 'profile-box-left-about';
    profileBoxLeftContentAbout.innerHTML = `<p>${selectedProfile.about}</p>`;

    const profileBoxLeftContentButton = document.createElement('div');
    profileBoxLeftContentButton.className = 'profile-box-left-button';
    profileBoxLeftContentButton.innerHTML = `<a href="/adoptionform/adoptionform.html"><button>Start Adoption</button></a>`;

    profileBoxLeftContent.appendChild(profileBoxLeftContentName);
    profileBoxLeftContent.appendChild(profileBoxLeftContentSpecies);
    profileBoxLeftContent.appendChild(profileBoxLeftContentAge);
    profileBoxLeftContent.appendChild(profileBoxLeftContentAbout);
    profileBoxLeftContent.appendChild(profileBoxLeftContentButton);

    profileBoxLeft.appendChild(profileBoxLeftContent);

    const profileBoxRight = document.createElement('div');
    profileBoxRight.className = 'profile-box-right';

    const profileBoxRightBox1 = document.createElement('div');
    profileBoxRightBox1.className = 'profile-box-right-box1';

    const Box1Button0 = document.createElement('button');
    Box1Button0.className = 'buttons';
    Box1Button0.innerHTML = `${selectedProfile.features[0]}`;

    const Box1Button1 = document.createElement('button');
    Box1Button1.className = 'buttons';
    Box1Button1.innerHTML = `${selectedProfile.features[1]}`;

    const Box1Button2 = document.createElement('button');
    Box1Button2.className = 'buttons';
    Box1Button2.innerHTML = `${selectedProfile.features[2]}`;

    const Box1Button3 = document.createElement('button');
    Box1Button3.className = 'buttons';
    Box1Button3.innerHTML = `${selectedProfile.features[3]}`;

    profileBoxRightBox1.appendChild(Box1Button0);
    profileBoxRightBox1.appendChild(Box1Button1);
    profileBoxRightBox1.appendChild(Box1Button2);
    profileBoxRightBox1.appendChild(Box1Button3);

    const profileBoxRightBox2 = document.createElement('div');
    profileBoxRightBox2.className = 'profile-box-right-box2';
    const img = document.createElement('img');
    img.src = selectedProfile.image;
    img.alt = selectedProfile.name;

    profileBoxRightBox2.appendChild(img);

    const profileBoxRightBox3 = document.createElement('div');
    profileBoxRightBox3.className = 'profile-box-right-box3';

    const Box3Button4 = document.createElement('button');
    Box3Button4.className = 'buttons';
    Box3Button4.innerHTML = `${selectedProfile.features[4]}`;

    const Box3Button5 = document.createElement('button');
    Box3Button5.className = 'buttons';
    Box3Button5.innerHTML = `${selectedProfile.features[5]}`;

    const Box3Button6 = document.createElement('button');
    Box3Button6.className = 'buttons';
    Box3Button6.innerHTML = `${selectedProfile.features[6]}`;

    const Box3Button7 = document.createElement('button');
    Box3Button7.className = 'buttons';
    Box3Button7.innerHTML = `${selectedProfile.features[7]}`;

    profileBoxRightBox3.appendChild(Box3Button4);
    profileBoxRightBox3.appendChild(Box3Button5);
    profileBoxRightBox3.appendChild(Box3Button6);
    profileBoxRightBox3.appendChild(Box3Button7);

    profileBoxRight.appendChild(profileBoxRightBox1);
    profileBoxRight.appendChild(profileBoxRightBox2);
    profileBoxRight.appendChild(profileBoxRightBox3);

    profileBox.appendChild(profileBoxLeft);
    profileBox.appendChild(profileBoxRight);

    const otherProfile = document.createElement('div');
    otherProfile.className = 'other-profile';
    otherProfile.style.backgroundColor = '#eae9e9';

    const otherProfileHeading = document.createElement('div');
    otherProfileHeading.className = 'other-profiles-heading';
    otherProfileHeading.innerHTML = `<h1>You may also like :</h1>`;

    const otherProfileContainer = document.createElement('div');
    otherProfileContainer.className = 'container';
    const birdsArray = randomBirds(4);
    birdsArray.forEach(bird => {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = bird.background;

        const detailBox = document.createElement('div');
        detailBox.className = 'detail-box';

        const name = document.createElement('a');
        name.className = 'name';
        name.innerHTML = `<h2>${bird.name}</h2>`;

        const species = document.createElement('a');
        species.className = 'species'
        species.innerHTML = ` ${bird.breed}`;

        const age = document.createElement('a');
        age.className = 'age';
        age.innerHTML = `${bird.age}`;

        detailBox.appendChild(name);
        detailBox.appendChild(species);
        detailBox.appendChild(age);

        const slideImg = document.createElement('div');
        slideImg.className = 'slide-img';

        const img = document.createElement('img');
        img.src = bird.image;
        img.alt = bird.name;

        slideImg.appendChild(img);

        box.appendChild(detailBox);
        box.appendChild(slideImg);

        box.addEventListener('click', () => {
            const clickedIndex = birdsArray.indexOf(bird) + 1
            detailedProfile(clickedIndex); 
        });

        otherProfileContainer.appendChild(box);
    });

    
    otherProfile.appendChild(otherProfileHeading);
    otherProfile.appendChild(otherProfileContainer);

    const pupEssentials = document.createElement('div');
    pupEssentials.className = 'pup-essentials';
    pupEssentials.style.backgroundColor = '#eae9e9';

    const pupEssentialsHeading = document.createElement('div');
    pupEssentialsHeading.className = 'pup-essentials-heading';
    pupEssentialsHeading.innerHTML = `<h1>Spoil Your New Pup :</h1>`;

    const pupEssentialsContainer = document.createElement('div');
    pupEssentialsContainer.className = 'container';
    const productsArray = randomProducts(4);
    productsArray.forEach(item => {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = item.background;

        const detailBox = document.createElement('div');
        detailBox.className = 'detail-box';

        const title = document.createElement('a');
        title.className = 'name';
        title.innerHTML = `<h2>${item.title}</h2>`;

        const price = document.createElement('a');
        price.className = 'price';
        price.innerHTML = `<p>₹${item.price}</p>`;

        detailBox.appendChild(title);
        detailBox.appendChild(price);

        const slideImg = document.createElement('div');
        slideImg.className = 'slide-img';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;
        img.alt = item.price;

        slideImg.appendChild(img);

        box.appendChild(detailBox);
        box.appendChild(slideImg);

        pupEssentialsContainer.appendChild(box);
    });

    pupEssentials.appendChild(pupEssentialsHeading);
    pupEssentials.appendChild(pupEssentialsContainer);

    container.appendChild(profileBox);
    container.appendChild(otherProfile);
    container.appendChild(pupEssentials);
}

function randomBirds(n) {
    return birds.sort(() =>
        Math.random() - 0.5).slice(0, n);
}

function randomProducts(n) {
    return items.sort(() =>
        Math.random() - 0.5).slice(0, n);
}

function goToAnimalPage(){
    const userInput = document.querySelector('.search-bar1').value.toLowerCase();
  
    if(userInput.includes("dog")){
      window.location.href = "/breed-dog/dogs.html";
    }
  
    else if(userInput.includes("cat")){
      window.location.href = "/breed-cat/cats.html";
    }
  
    else if(userInput.includes("bird")){
      window.location.href = "/breed-bird/birds.html";
    }
  
    else if(userInput.includes("rabbit")){
      window.location.href = "/breed-rabbit/rabbits.html";
    }
  }

const searchIcon=document.querySelector('.serach-icon');

searchIcon.addEventListener('click',function(){
    goToAnimalPage();
    })

displayBirds(birds);
