const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const makeIngredients = document.querySelector('#ingredients')
const elements = ingredients.map(option => {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent = option;
  
  return ingredientsEl;
});

console.log(elements);
makeIngredients.append(...elements);