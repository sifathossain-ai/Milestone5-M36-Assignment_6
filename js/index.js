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
            <div class="card bg-base-100 shadow-sm">
                <figure class="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Card Title</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        `
        petProducts.append(div);
    }

}

loadProducts();