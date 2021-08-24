let list = document.querySelector(".item-container");
// let initialCount = 1;

const cartItems = [
	{
		id: 1,
		name: 'Samsung Galaxy S8',
        price: 399.99,
		img: './images/item-1.jpeg',
		qty: 1
	},
    {
		id: 2,
		name: 'google pixel',
        price: 499.99,
		img: './images/item-2.jpeg',
		qty: 1
	},
	{
		id: 3,
		name: 'Xiaomi Redmi Note 2',
        price: 699.99,
		img: './images/item-3.jpeg',
		qty: 1
	},
	{
		id: 4,
		name: 'Samsung Galaxy S7',
        price: 599.99,
		img: './images/item-4.jpeg',
		qty: 1
	}
];


function renderItem(item){
    return`<div><article class="cart-item"><img src="${item.img}" alt="Samsung Galaxy S8"/><div><h4>${item.name}</h4><h4 class="item-price">${item.price}</h4><button class="remove-btn">remove</button></div><div><button onclick="increaseItem(this)" class="amount-btn">+</button><p class="amount">${item.qty}</p><button onclick="decreaseItem(this)" class="amount-btn">-</button></div></article></div>`;
}

(function render() {
	let products = '';
	for (let item of cartItems) {
		products += renderItem(item);
		// categories.push(item.category);
	}
	list.innerHTML = products;
})();

function increaseItem(e){
	let qty = document.querySelector(".amount");
	qty.innerHTML++
	console.log(qty.innerHTML);
}

function decreaseItem(e){
	console.log("Decrease")
}