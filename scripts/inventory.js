// first get data from local storage
var productArr = JSON.parse(localStorage.getItem("products")) || [];
displayProduct(productArr);
document.querySelector("#all_products");
function displayProduct(productArr){
    document.querySelector("#all_products").innerHTML = "";
    productArr.forEach(function(el,index){
        var box = document.createElement("div")
        var image  = document.createElement("img")
        image.src = el.image;
        var type  = document.createElement("p")
        type.innerText = el.type;
        var price  = document.createElement("p")
        price.innerText = el.price;
        var desc  = document.createElement("p")
        desc.innerText = el.desc;
        var remove = document.createElement("button");
        remove.innerText = "Remove"
        remove.addEventListener("click",function(){
            Delete(index)
        })
        box.append(image,type,price,desc,remove)
        document.querySelector("#all_products").append(box)
    })
}

function Delete(index){
    productArr.splice(index,1);
    localStorage.setItem("data",JSON.stringify(productArr));
    console.log(productArr)
    displayProduct(productArr);
}