function getRandomProfile(){  
    const allAnimals=[dogs,cats,birds,rabbits];

    // making an array to hold the arrays of all the different animals

    // making another profiles which will hold the random profiles which will be selected
    const selectedProfiles=[];

    // looping through each array of different animal present in allAnimal
    for(const paticularAnimal of allAnimals){

        // Math.random returns a floating point number 0(inclusive) and 1 (exclusive)
        // multiplying it with length of the array will give a random index(float) of the array
        // rounding of the floating index
        const randomIndex = Math.floor(Math.random()*paticularAnimal.length);

        // storing the profile in a variable
        const selectedProfile=paticularAnimal[randomIndex];

        // appending that profile to the array
        selectedProfiles.push(selectedProfile);

    }
    return selectedProfiles;
};

    const container = document.querySelector(".container");
    const randomAnimalProfiles = getRandomProfile();
    // console.log(randomAnimalProfiles);

    function displayProfiles(randomAnimalProfiles) {
        // Clear the container content before adding new profiles
        container.innerHTML = '';
      
        randomAnimalProfiles.forEach((animal,index) => {
          console.log(`Index: ${index}, Animal:`, animal);
          // Create a new box element for each profile
          const box = document.createElement('div');
          box.className = 'box';
          box.style.backgroundColor=animal.background;
      
          // Create a detail box element
          const detailBox = document.createElement('div');
          detailBox.className = 'detail-box';
      
          // Create elements for name, breed, and age (assuming properties exist)
          const name = document.createElement('h2');
          name.className = 'name';
          name.textContent = animal.name;
      
          const breed = document.createElement('p');
          breed.className = 'breed';
          breed.textContent = `Breed: ${animal.breed}`;
      
          const age = document.createElement('p');
          age.className = 'age';
          age.textContent = `Age: ${animal.age}`;
      
          // Append name, breed, and age to the detail box
          detailBox.appendChild(name);
          detailBox.appendChild(breed);
          detailBox.appendChild(age);
      
          // Create an image container and image element
          const slideImg = document.createElement('div');
          slideImg.className = 'slide-img';
      
          const img = document.createElement('img');
          img.src = animal.image;
          img.alt = animal.name;
      
          // Append the image to the image container
          slideImg.appendChild(img);
      
          // Append the detail box and image container to the box element
          box.appendChild(detailBox);
          box.appendChild(slideImg);
          

          box.addEventListener('click', () => {
            detailProfile(animal);
          });

          // Append the box element to the container
          container.appendChild(box);
        });
      };


      function detailProfile(animal){    
        container.className = 'profile-outer-box';
        container.innerHTML = '';
    
        const profileBox = document.createElement('div');
        profileBox.className = 'profile-box';
    
        const profileBoxLeft = document.createElement('div');
        profileBoxLeft.className = 'profile-box-left';
    
        const profileBoxLeftContent = document.createElement('div');
        profileBoxLeftContent.className = 'profile-box-left-content';
    
        const profileBoxLeftContentName = document.createElement('div');
        profileBoxLeftContentName.className = 'profile-box-left-name';
        profileBoxLeftContentName.innerHTML = `<p>${animal.name}</p>`;
    
        const profileBoxLeftContentBreed = document.createElement('div');
        profileBoxLeftContentBreed.className = 'profile-box-left-breed';
        profileBoxLeftContentBreed.innerHTML = `<p>${animal.breed}</p>`;
    
        const profileBoxLeftContentAge = document.createElement('div');
        profileBoxLeftContentAge.className = 'profile-box-left-age';
        profileBoxLeftContentAge.innerHTML = `<p>${animal.age}</p>`;
    
        const profileBoxLeftContentAbout = document.createElement('div');
        profileBoxLeftContentAbout.className = 'profile-box-left-about';
        profileBoxLeftContentAbout.innerHTML = `<p>${animal.about}</p>`;
    
        const profileBoxLeftContentButton = document.createElement('div');
        profileBoxLeftContentButton.className = 'profile-box-left-button';
        profileBoxLeftContentButton.innerHTML = `<a href="/adoptionform/adoptionform.html"><button>Start Adoption</button></a>`;
    
        profileBoxLeftContent.appendChild(profileBoxLeftContentName);
        profileBoxLeftContent.appendChild(profileBoxLeftContentBreed);
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
        Box1Button0.innerHTML = `${animal.features[0]}`;
    
        const Box1Button1 = document.createElement('button');
        Box1Button1.className = 'buttons';
        Box1Button1.innerHTML = `${animal.features[1]}`;
    
        const Box1Button2 = document.createElement('button');
        Box1Button2.className = 'buttons';
        Box1Button2.innerHTML = `${animal.features[2]}`;
    
        const Box1Button3 = document.createElement('button');
        Box1Button3.className = 'buttons';
        Box1Button3.innerHTML = `${animal.features[3]}`;
    
        profileBoxRightBox1.appendChild(Box1Button0);
        profileBoxRightBox1.appendChild(Box1Button1);
        profileBoxRightBox1.appendChild(Box1Button2);
        profileBoxRightBox1.appendChild(Box1Button3);
    
        const profileBoxRightBox2 = document.createElement('div');
        profileBoxRightBox2.className = 'profile-box-right-box2';
        const img = document.createElement('img');
        img.src = animal.image;
        img.alt = animal.name;
    
        profileBoxRightBox2.appendChild(img);
    
        const profileBoxRightBox3 = document.createElement('div');
        profileBoxRightBox3.className = 'profile-box-right-box3';
    
        const Box3Button4 = document.createElement('button');
        Box3Button4.className = 'buttons';
        Box3Button4.innerHTML = `${animal.features[4]}`;
    
        const Box3Button5 = document.createElement('button');
        Box3Button5.className = 'buttons';
        Box3Button5.innerHTML = `${animal.features[5]}`;
    
        const Box3Button6 = document.createElement('button');
        Box3Button6.className = 'buttons';
        Box3Button6.innerHTML = `${animal.features[6]}`;
    
        const Box3Button7 = document.createElement('button');
        Box3Button7.className = 'buttons';
        Box3Button7.innerHTML = `${animal.features[7]}`;
    
        profileBoxRightBox3.appendChild(Box3Button4);
        profileBoxRightBox3.appendChild(Box3Button5);
        profileBoxRightBox3.appendChild(Box3Button6);
        profileBoxRightBox3.appendChild(Box3Button7);
    
        profileBoxRight.appendChild(profileBoxRightBox1);
        profileBoxRight.appendChild(profileBoxRightBox2);
        profileBoxRight.appendChild(profileBoxRightBox3);
    
        profileBox.appendChild(profileBoxLeft);
        profileBox.appendChild(profileBoxRight);
    
        
        container.appendChild(profileBox);

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

function randomProducts(n) {
  return items.sort(() =>
      Math.random() - 0.5).slice(0, n);
}

const productsArray = randomProducts(4);

const container1= document.querySelector('#container1');
function displayitems(productsArray) {
  container1.innerHTML = '';

  productsArray.forEach(item => {
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

      container1.appendChild(box);
  });
}

function detailedProfile(index){
  // console.log(index-1);
  // console.log(dogs[index-1]);
  const selectedProfile=dogs[index-1];
  console.log(selectedProfile);
  console.log(selectedProfile.name);
  console.log(selectedProfile.features[0]);

  container.className='profile-outer-box';
  container.innerHTML='';
  header.remove();

  const profileBox = document.createElement('div');
  profileBox.className='profile-box';

  const profileBoxLeft= document.createElement('div');
  profileBoxLeft.className='profile-box-left';

  const profileBoxLeftContent= document.createElement('div');
  profileBoxLeftContent.className='profile-box-left-content';

  const profileBoxLeftContentName= document.createElement('div');
  profileBoxLeftContentName.className='profile-box-left-name';
  profileBoxLeftContentName.innerHTML=`<p>${selectedProfile.name}</p>`;

  const profileBoxLeftContentBreed= document.createElement('div');
  profileBoxLeftContentBreed.className='profile-box-left-breed';
  profileBoxLeftContentBreed.innerHTML=`<p>${selectedProfile.breed}</p>`;

  const profileBoxLeftContentAge= document.createElement('div');
  profileBoxLeftContentAge.className='profile-box-left-age';
  profileBoxLeftContentAge.innerHTML=`<p>${selectedProfile.age}</p>`;
  
  const profileBoxLeftContentAbout= document.createElement('div');
  profileBoxLeftContentAbout.className='profile-box-left-about';
  profileBoxLeftContentAbout.innerHTML=`<p>${selectedProfile.about}</p>`;

  const profileBoxLeftContentButton= document.createElement('div');
  profileBoxLeftContentButton.className='profile-box-left-button';
  profileBoxLeftContentButton.innerHTML=`<a href="/adoptionform/adoptionform.html"><button>Start Adoption</button></a>`;

  profileBoxLeftContent.appendChild(profileBoxLeftContentName);
  profileBoxLeftContent.appendChild(profileBoxLeftContentBreed);
  profileBoxLeftContent.appendChild(profileBoxLeftContentAge);
  profileBoxLeftContent.appendChild(profileBoxLeftContentAbout);
  profileBoxLeftContent.appendChild(profileBoxLeftContentButton);

  profileBoxLeft.appendChild(profileBoxLeftContent);

  const profileBoxRight=document.createElement('div');
  profileBoxRight.className='profile-box-right';

  const profileBoxRightBox1=document.createElement('div');
  profileBoxRightBox1.className='profile-box-right-box1';
  
  const Box1Button0 = document.createElement('button');
  Box1Button0.className='buttons';
  Box1Button0.innerHTML=`${selectedProfile.features[0]}`;
  
  const Box1Button1 = document.createElement('button');
  Box1Button1.className='buttons';
  Box1Button1.innerHTML=`${selectedProfile.features[1]}`;
  
  const Box1Button2 = document.createElement('button');
  Box1Button2.className='buttons';
  Box1Button2.innerHTML=`${selectedProfile.features[2]}`;
  
  const Box1Button3 = document.createElement('button');
  Box1Button3.className='buttons';
  Box1Button3.innerHTML=`${selectedProfile.features[3]}`;

  profileBoxRightBox1.appendChild(Box1Button0);
  profileBoxRightBox1.appendChild(Box1Button1);
  profileBoxRightBox1.appendChild(Box1Button2);
  profileBoxRightBox1.appendChild(Box1Button3);

  const profileBoxRightBox2 = document.createElement('div');
  profileBoxRightBox2.className='profile-box-right-box2';
  const img = document.createElement('img');
  img.src=selectedProfile.image;
  img.alt=selectedProfile.name;

  profileBoxRightBox2.appendChild(img);


  const profileBoxRightBox3 = document.createElement('div');
  profileBoxRightBox3.className='profile-box-right-box3';

  const Box3Button4 = document.createElement('button');
  Box3Button4.className='buttons';
  Box3Button4.innerHTML=`${selectedProfile.features[4]}`;
  
  const Box3Button5 = document.createElement('button');
  Box3Button5.className='buttons';
  Box3Button5.innerHTML=`${selectedProfile.features[5]}`;
  
  const Box3Button6 = document.createElement('button');
  Box3Button6.className='buttons';
  Box3Button6.innerHTML=`${selectedProfile.features[6]}`;
  
  const Box3Button7 = document.createElement('button');
  Box3Button7.className='buttons';
  Box3Button7.innerHTML=`${selectedProfile.features[7]}`;

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
  otherProfile.className='other-profile';
  otherProfile.style.backgroundColor='#eae9e9';

  const otherProfileHeading = document.createElement('div');
  otherProfileHeading.className='other-profiles-heading';
  otherProfileHeading.innerHTML=`<h1>You may also like :</h1>`;

  const otherProfileContainer = document.createElement('div');
  // otherProfileContainer.className='container';
  otherProfileContainer.className='container';
  const dogsArray = randomDogs(4);
  dogsArray.forEach(dog => {
      const box = document.createElement('div');
      box.className='box';
      box.style.backgroundColor=dog.background;

      const detailBox=document.createElement('div');
      detailBox.className='detail-box';

      const name=document.createElement('a');
      name.className='name';
      name.innerHTML=`<h2>${dog.name}<\h2>`;

      const breed=document.createElement('a');
      breed.className='breed'
      breed.innerHTML=` ${dog.breed}`;

      const age=document.createElement('a');
      age.className='age';
      age.innerHTML=`${dog.age}`;

      detailBox.appendChild(name);
      detailBox.appendChild(breed);
      detailBox.appendChild(age);

      const slideImg = document.createElement('div');
      slideImg.className='slide-img';

      const img = document.createElement('img');
      img.src=dog.image;
      img.alt=dog.name;

      slideImg.appendChild(img);

      box.appendChild(detailBox);
      box.appendChild(slideImg);

      box.addEventListener('click', () => {
          const clickedIndex = dogsArray.indexOf(dog) + 1
          detailedProfile(clickedIndex); 
      });

      otherProfileContainer.appendChild(box);
  });
  otherProfile.appendChild(otherProfileHeading);
  otherProfile.appendChild(otherProfileContainer);



  const pupEssentials = document.createElement('div');
  pupEssentials.className='pup-essentials';
  pupEssentials.style.backgroundColor='#eae9e9';

  const pupEssentialsHeading = document.createElement('div');
  pupEssentialsHeading.className='pup-essentials-heading';
  pupEssentialsHeading.innerHTML=`<h1>Spoil Your New Pup :</h1>`;

  const pupEssentialsContainer =document.createElement('div');
  pupEssentialsContainer.className='container';
  const productsArray = randomProducts(4);
  productsArray.forEach(item => {
      const box = document.createElement('div');
      box.className='box';
      box.style.backgroundColor=item.background;

      const detailBox=document.createElement('div');
      detailBox.className='detail-box';

      const title=document.createElement('a');
      title.className='name';
      title.innerHTML=`<h2>${item.title}<\h2>`;

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

      pupEssentialsContainer.appendChild(box);
  });

  pupEssentials.appendChild(pupEssentialsHeading);
  pupEssentials.appendChild(pupEssentialsContainer);


  container.appendChild(profileBox);
  container.appendChild(otherProfile);
  container.appendChild(pupEssentials);


}



displayProfiles(randomAnimalProfiles);
displayitems(productsArray);