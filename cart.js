let list = document.querySelector(".item-container");
let grossAmount = document.querySelectorAll(".cart-total");
// let qty = document.querySelector(".amount");
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
		name: 'Google pixel',
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
	}
	list.innerHTML = products;
})();

function increaseItem(e){
	let qty = document.querySelector(".amount");
	let amount = document.querySelectorAll(".item-price");
	for(let item of cartItems){
		item.qty++;
		cartItems.qty = item.qty;
		qty.innerHTML = cartItems.qty;
	}
	showTotal();
}

function decreaseItem(e){
	let qty = document.querySelector(".amount");
	for(let item of cartItems){
		if(item.qty>1){
			item.qty--;
			cartItems.qty = item.qty;
			qty.innerHTML = cartItems.qty;
		} else{
			let last = document.querySelector(".cart-item")
			last.parentNode.innerHTML = '';
		}
	}
}

function showTotal(){
	let sum = 0;
	for(let item of cartItems){
		sum += cartItems.qty * cartItems.price;
		console.log(sum);
	}
	grossAmount[0].children[0].childNodes[1].innerHTML = sum;
}