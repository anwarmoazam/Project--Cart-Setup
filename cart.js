let list = document.querySelector(".item-container");

const cartItems = [
	{
		id: 1,
		name: 'Samsung Galaxy S8',
        price: 399.99,
		img: './images/item-1.jpg',
	},
    {
		id: 2,
		name: 'google pixel',
        price: 499.99,
		img: './images/item-1.jpeg',
	},
	{
		id: 3,
		name: 'Xiaomi Redmi Note 2',
        price: 699.99,
		img: './images/item-1.jpeg',
	},
	{
		id: 4,
		name: 'Samsung Galaxy S7',
        price: 599.99,
		img: './images/item-1.jpeg',
	}
];

let initialCount = 0;
let item = document.querySelector(".item-container")

renderItem();



function renderItem(item){
    item.innerHTML = `<div><article class="cart-item"><img src="${item.img}" alt="Samsung Galaxy S8"/><div><h4>${item.name}</h4><h4 class="item-price">${item.price}</h4><button class="remove-btn">remove</button></div><div><button class="amount-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path></svg></button><p class="amount">1</p><button class="amount-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></button></div></article></div>`;
}

function filterItems(category) {
	for (let item of list.children) {
		if (category !== 'all' && item.dataset.category !== category) {
			item.classList.add('hide');
		} else {
			item.classList.remove('hide');
		}
	}
}

(function render() {
	let products = '';
	for (let item of cartItems) {
		products += renderProduct(item);
		categories.push(item.category);
	}
	list.innerHTML = products;
	categories = [...new Set(categories)];
	renderCategories();
})();