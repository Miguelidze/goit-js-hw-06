const categories = document.querySelectorAll(".item");
console.log('Number of categories:', categories.length);

const categoriesTitle = [];
categories.forEach(el => {
    categories.push('Category: ${document.querySelector('.item h2').textContent}')
});