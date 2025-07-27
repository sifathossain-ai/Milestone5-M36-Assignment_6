const loadCategory = () => {
    fetch('')
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategory(data.categories))
        .catch(error => console.log('Error is: ', error))
};

const displayCategory = (dataID) => {
    const categoryDiv = document.getElementById('category');
    for (const data of dataID) {
        // console.log(data.category)

        const buttons = document.createElement('button');
        buttons.innerHTML = `
            <button class = "btn border px-6 py-5 md:px-16 md:py-7 lg:px-20 lg:py-9 font-bold">
            ${data.category}
            </button>
        `
        categoryDiv.append(buttons);
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

const displayProducts = (productID) => {

    const petProducts = document.getElementById('pet-products')

    for (const product of productID) {
        console.log(product.image);
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
                        <h3>Breed: ${product.price}</h3>
                    </div>
                </div>
                <hr>
                <div class = "flex justify-between mt-3 gap-2">
                    <button class="btn btn-outline border px-4 text-primaryColor font-bold border-primaryColor border-opacity-10"><i class="fa-solid fa-thumbs-up"></i></button>
                    <button class="btn btn-outline border px-4 text-primaryColor font-bold border-primaryColor border-opacity-10">Adopt</button>
                    <button class="btn btn-outline border px-4 text-primaryColor font-bold border-primaryColor border-opacity-10">Details</button>
                </div>
            </div>
        `
        petProducts.append(div);
    }

}

loadProducts();