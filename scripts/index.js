var form = document.querySelector("form");
var productArr = JSON.parse(localStorage.getItem("products")) || [];
form.addEventListener("submit", addData);
function addData(event){
    event.preventDefault();
    var type = form.type.value;
    var desc = form.desc.value;
    var price = form.price.value;
    var image = form.image.value;
    var obj = new setData(type,desc,price,image);
    productArr.push(obj)
    console.log(productArr)
    localStorage.setItem("products", JSON.stringify(productArr))
}

function setData(b,d,p,i){
    this.type = b;
    this.desc = d;
    this.price = p;
    this.image = i;
}