const categories = document.querySelector("#categories");

const elItems = categories.querySelectorAll(".item");
console.log(`Number of categories: ${elItems.length}`);

elItems.forEach((elm) =>{
    const title = elm.querySelector("h2").textContent 
    console.log(`Category: ${title}`);

    const newElem = elm.querySelectorAll("li").length    
    console.log(`Elements: ${newElem}`);
})