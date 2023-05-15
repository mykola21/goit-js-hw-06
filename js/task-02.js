const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const liEl = document.querySelector("ul#ingredients");

const ingradientArr = ingredients.map(el => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;
  return itemEl;

})

liEl.append(...ingradientArr)

console.log(liEl)
