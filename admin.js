let products =
JSON.parse(
localStorage.getItem("products")
)
||
[];





function displayProducts(){


let table =
document.getElementById(
"productTable"
);


table.innerHTML="";



products.forEach((p,index)=>{


table.innerHTML += `


<tr>


<td>

<img src="${p.image}">

</td>



<td>

<input 
value="${p.name}"
onchange="editName(${index},this.value)"
>

</td>




<td>

RM

<input 
type="number"
value="${p.price}"
onchange="editPrice(${index},this.value)"
>

</td>




<td>

<input 
type="number"
value="${p.stock}"
onchange="editStock(${index},this.value)"
>

</td>



<td>


<button
class="delete"
onclick="deleteProduct(${index})">

🗑

</button>


</td>


</tr>


`;


});


}




function addProduct(){


let product={


name:
document.getElementById("name").value,


price:
Number(
document.getElementById("price").value
),


stock:
Number(
document.getElementById("stock").value
),


image:
document.getElementById("image").value,


category:
document.getElementById("category").value



};



products.push(product);


save();


alert(
"Produk berjaya ditambah"
);


}




function editName(i,value){

products[i].name=value;

save();

}



function editPrice(i,value){

products[i].price=
Number(value);

save();

}



function editStock(i,value){

products[i].stock=
Number(value);

save();

}




function deleteProduct(i){


if(confirm(
"Padam produk ini?"
)){


products.splice(i,1);

save();


}


}



function save(){

localStorage.setItem(
"products",
JSON.stringify(products)
);


displayProducts();

}



displayProducts();