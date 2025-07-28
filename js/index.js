const loadCategory = () => {
    fetch('')
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(error => console.log('Error is: ', error))
};

// Remove Active Class

const removeActiveClass = () => {
    const removeClass = document.getElementsByClassName('category-btn');
    // console.log(removeClass);
    for (const btn of removeClass){
        btn.classList.remove('active');
    }
}

const LoadCategoryID = (id) => {
    // alert(id);
    // console.log(id);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then(res => res.json())
    .then(data => {
        removeActiveClass();
        const activeBtn = document.getElementById(`btn-${id}`)
        activeBtn.classList.add('active');
        displayProducts(data.data)
    })
    .catch(error => console.log("Error is: ", error))
}

/*     {
      "id": 1,
      "category": "Cat",
      "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
    },
 */

const displayCategory = (dataID) => {
    const categoryDiv = document.getElementById('category');
    for (const data of dataID) {
        // console.log(data.category)

        const divBtn = document.createElement('div');
        divBtn.innerHTML = `
            <button id = "btn-${data.category}" onclick = "LoadCategoryID('${data.category}')" class = "btn border px-6 py-5 md:px-16 md:py-7 lg:px-20 lg:py-9 font-bold category-btn">
            ${data.category}
            </button>
        `
        categoryDiv.append(divBtn);
    }
}

loadCategory();


// Load All Products

async function loadProducts() {
    try {
        const products = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
        const data = await products.json();
        displayProducts(data.pets)
    }
    catch (error) {
        console.log('Error is: ', error);
    }
}

// Pet Details 
const petDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then(res => res.json())
    .then(data => showPetDetails(data));
    // console.log(id);
}

//Show Pet Details
const showPetDetails = (getData) => {
    console.log(getData);
    const detailsContainer = document.getElementById('model-content');
    detailsContainer.innerHTML = `
        <img class="w-full md:h-[320px] object-cover rounded-md mb-6" src = ${getData.petData.image}/>
        <div class="mb-3">
            <h2 class ="text-lg font-bold mb-1">${getData.petData.pet_name}</h2>
            <div class = "flex items-center gap-1">
                <div><i class="fa-solid fa-list w-5 h-5"></i></div>
                <h3>Breed: ${getData.petData.breed}</h3>
            </div>
            <div class = "flex items-center gap-1">
                <div><i class="fa-solid fa-cake-candles w-5 h-5"></i></div>
                <h3>Birth: ${getData.petData.date_of_birth}</h3>
            </div>
            <div class = "flex items-center gap-1">
                <div><i class="fa-solid fa-mercury w-5 h-5"></i></div>
                <h3>Gender: ${getData.petData.gender}</h3>
            </div>
            <div class = "flex items-center gap-1">
                <div><i class="fa-solid fa-dollar-sign w-5 h-5"></i></div>
                <h3>Price: ${getData.petData.price}</h3>
            </div>
        </div>
        <hr>
        <div class = "mt-3">
            <h2 class = "font-bold mb-1">Details Information</h2>
            <p>${getData.petData.pet_details}</p>
        </div>
    `
    document.getElementById('showModalData').click();
}

const displayProducts = (productID) => {
    // console.log(productID);
    const petProducts = document.getElementById('pet-products')
    petProducts.innerHTML = "";

    if(productID.length == 0){
        petProducts.classList.remove('grid');
        petProducts.innerHTML = `
            <div class="hero bg-base-200 py-16 rounded-md">
                 <div class="hero-content flex-col text-center">
                    <div class = "mb-4">
                        <img src = "images/error.webp"/>
                        </div>
                    <div class = "">
                        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">No Information Available</h1>
                        <p class="py-6">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a.
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
    else{
        petProducts.classList.add('grid');
    }

    for (const product of productID) {
        // console.log(product.petId);
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card border rounded-md px-2 py-2 md:px-4 md:py-4">
                <figure class="mb-4 md:mb-6">
                    <img src=${product.image} alt="Shoes"
                        class="rounded-md h-full w-full object-cover"/>
                </figure>
                <div class="mb-2">
                    <h2 class ="text-lg font-bold mb-1">${product.pet_name}</h2>
                    <div class = "flex items-center gap-1">
                        <div><i class="fa-solid fa-list w-5 h-5"></i></div>
                        <h3>Breed: ${product.breed}</h3>
                    </div>
                    <div class = "flex items-center gap-1">
                        <div><i class="fa-solid fa-cake-candles w-5 h-5"></i></div>
                        <h3>Birth: ${product.date_of_birth}</h3>
                    </div>
                    <div class = "flex items-center gap-1">
                        <div><i class="fa-solid fa-mercury w-5 h-5"></i></div>
                        <h3>Gender: ${product.gender}</h3>
                    </div>
                    <div class = "flex items-center gap-1">
                        <div><i class="fa-solid fa-dollar-sign w-5 h-5"></i></div>
                        <h3>Price: ${product.price}</h3>
                    </div>
                </div>
                <hr>
                <div class = "flex justify-between mt-3 gap-2">
                    <button class="btn btn-outline border px-4 text-primaryColor font-bold border-primaryColor border-opacity-10"><i class="fa-solid fa-thumbs-up"></i></button>

                    <button class="btn btn-outline border px-3 text-primaryColor font-bold border-primaryColor border-opacity-10">Adopt</button>

                    <button id="details-btn" onclick = "petDetails(${product.petId})" class="btn btn-outline border px-3 text-primaryColor font-bold border-primaryColor border-opacity-10">Details</button>
                </div>
            </div>
        `
        petProducts.append(div);
    }

}

loadProducts();