// let elTemp = document.querySelector('#temp').content;
let elAddBtn = document.querySelectorAll('.food-btn');
let elList = document.querySelector('.main__list2');

let itemArr = [];

let li = document.querySelectorAll('.main-item');
let itemArr2 = [{...li}];

function createElement(obj) {

   for (i in obj) {
      
      let img = obj[i].querySelector('.food-img').src;
      let name = obj[i].querySelector('.food-name');
      let price = obj[i].querySelector('.food-price');

      let itemHtml = `<li class="main-item relative-p row">
      <img class="food__img" src="${img}" alt="img">
      <div class="food1 relative-p">
         <span class="food__name">${name.textContent}</span>
         <span class="food__price">${price.textContent}</span>
      </div>
      </li>`;
      
      elList.innerHTML = itemHtml + elList.innerHTML;

      let subtotal = document.querySelector('subtotal__txt');
      let tax = document.querySelector('subtotal__tax');
      let total = document.querySelector('subtotal__tot');

      subtotal = price.textContent;

      console.log(price.textContent, subtotal);
   }
}

elAddBtn.forEach((item) => {
   item.addEventListener('click', (e) => {
      itemArr.push(e.target.parentElement.parentElement);
      createElement(itemArr);
      itemArr = [];
   })
})

// for (let i of foods) {
//    let foodTemp = elTemp.cloneNode(true);
//    foodTemp.querySelector('.food__img').src = i.img;
//    foodTemp.querySelector('.food__name').textContent = i.name;
//    foodTemp.querySelector('.food__price').textContent = i.price;
   
//    elFragment.appendChild(foodTemp);
// }

// elList.appendChild(elFragment);