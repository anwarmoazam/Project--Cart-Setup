let list = document.querySelector('.item-container');
let grossAmountDOM = document.querySelector('.cart-total');
let grossQtyDOM = document.querySelector('.total-amount');
let footerDOM = document.querySelector("footer");

let cartItems = [
	{
		id: 1,
		name: 'Samsung Galaxy S8',
		price: 399.99,
		img: './images/item-1.jpeg',
		qty: 1,
	},
	{
		id: 2,
		name: 'Google pixel',
		price: 499.99,
		img: './images/item-2.jpeg',
		qty: 1,
	},
	{
		id: 3,
		name: 'Xiaomi Redmi Note 2',
		price: 699.99,
		img: './images/item-3.jpeg',
		qty: 1,
	},
	{
		id: 4,
		name: 'Samsung Galaxy S7',
		price: 599.99,
		img: './images/item-4.jpeg',
		qty: 1,
	},
];

function renderItem(item) {
	return `<div><article class="cart-item"><img src="${item.img}" alt="${item.name}"/><div><h4>${item.name}</h4><h4 class="item-price">${item.price}</h4><button onclick="removeItem(${item.id})" class="remove-btn">remove</button></div><div><button onclick="increaseItem(${item.id})" class="amount-btn">+</button><p class="amount">${item.qty}</p><button onclick="decreaseItem(${item.id})" class="amount-btn">-</button></div></article></div>`;
}

function render() {
	let products = '';
	let grossQty = 0;
	let grossAmount = 0;
	for (let item of cartItems) {
		if (item.qty > 0) {
			products += renderItem(item);
			grossQty += item.qty;
			grossAmount += item.price * item.qty;
		}
	}
	list.innerHTML = products;
	grossAmountDOM.innerText = grossAmount.toFixed(2);
	grossQtyDOM.innerText = grossQty;
	if(grossQty===0){
		footerDOM.remove();
	}
	return;
}

function increaseItem(id) {
	for (let item of cartItems) {
		if (item.id === id) {
			item.qty++;
			break;
		}
	}
	render();
}

function decreaseItem(id) {
	for (let item of cartItems) {
		if (item.id === id) {
			if (item.qty > 0) {
				item.qty--;
				break;
			}
		}
	}
	render();
}

function removeItem(id) {
	for (let item of cartItems) {
		if (item.id === id) {
			item.qty = 0;
			break;
		}
	}
	render();
}

function clearCart() {
	cartItems = [];
	render();
}

render();