const loadCategory = () => {
    fetch('')
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.categories))
    .catch(error => console.log('Error is: ', error))
};

const displayCategory = (dataID) => {
    const categoryDiv = document.getElementById('category');
    for(const data of dataID){
        console.log(data.category)

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