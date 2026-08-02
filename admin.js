let defaultProducts = [

{

barcode:"955100000001",
name:"Beras 10kg",
price:35,
stock:100,
category:"runcit",
image:"./images/jati10kg.jpeg"

},

{
  barcode:"955100000002",
name:"Beras 5kg",
price:18,
  stock:100,
category:"runcit",
image:"./images/jati5kg.jpeg"
},

{
  barcode:"955100000003",
name:"Susu Tin Gold Coin",
price:4.50,
  stock:100,
category:"minuman",
image:"./images/susutingoldcoin.jpeg"
},

{
  barcode:"955100000004",
name:"Minuman Tin",
price:2.00,
  stock:100,
category:"minuman",
image:"./images/minumantin.jpeg"
},

{
  barcode:"955100000005",
name:"Sabun Mandi",
price:8.00,
stock:100,
category:"penjagaan",
image:"./images/sabunmandi.jpeg"
},


{
  barcode:"955100000006",
name:"Sabun Basuh Baju",
price:8.00,
stock:100,
category:"penjagaan",
image:"./images/sabunbasuh.jpeg"
},


    
{
  barcode:"955100000007",
name:"Syampu",
price:12.00,
stock:100,
category:"penjagaan",
image:"./images/shampoo.jpeg"
},

{
  barcode:"955100000008",
name:"Beras Borong 10kg (5 Unit)",
price:170,
stock:100,
category:"borong-product",
image:"./images/jati10kg.jpeg"
},

{
  barcode:"955100000009",
name:"Minuman Tin 24 Kotak",
price:45,
stock:100,
category:"borong-product",
image:"./images/minumantin.jpeg"
},

{
  barcode:"955100000010",
name:"Susu Tin Borong 48 Unit",
price:180,
stock:100,
category:"borong-product",
image:"./images/susutingoldcoin.jpeg"
},

{
  barcode:"955100000011",
name:"Sabun Basuh Borong",
price:90,
stock:100,
category:"borong-product",
image:"./images/sabunbasuh.jpeg"
},

{
  barcode:"955100000012",
name:"Telur Ayam Gred AA",
price:90,
stock:100,
category:"runcit",
image:"./images/gredAA.jpeg"
},

 {
   barcode:"955100000013",
name:"Telur Ayam Gred A",
price:90,
stock:100,
category:"runcit",
image:"./images/gredA.jpeg"
},

{
  barcode:"955100000014",
name:"Telur Ayam Gred B",
price:90,
stock:100,
category:"runcit",
image:"./images/gredB.jpeg"
},


{
  barcode:"955100000015",
name:"Telur Ayam Gred C",
price:90,
stock:100,
category:"runcit",
image:"./images/gredC.jpeg"
},

 {
   barcode:"955100000016",
name:"Telur Ayam Gred D",
price:90,
stock:100,
category:"runcit",
image:"./images/gredD.jpeg"
}

  
];



let products =
JSON.parse(localStorage.getItem("products")) || null;


if(!products){

products = defaultProducts;


localStorage.setItem(
"products",
JSON.stringify(products)
);




  


}else{


products = products.map(p=>({

barcode:p.barcode || "",

name:p.name || "",

price:Number(p.price)||0,

stock:Number(p.stock)||0,

category:p.category || "runcit",

image:p.image || "./images/default.jpg"


}));



localStorage.setItem(
"products",
JSON.stringify(products)
);


}





function refreshProducts(){


products =
JSON.parse(
localStorage.getItem("products")
)
|| [];


displayProducts();



alert(
"✅ Data produk telah dikemaskini"
);


}








function displayProducts(){

let table=document.getElementById("productTable");

if(!table){
console.log("Table tidak jumpa");
return;
}


table.innerHTML="";
products.forEach((p,index)=>{

table.innerHTML+=`

<tr>

<td>
<img src="${p.image}">
</td>

<td>

<input

value="${p.barcode || ""}"

onchange="editBarcode(${index},this.value)">

</td>

<td>

<input

value="${p.name}"

onchange="editName(${index},this.value)">

</td>



<td>

RM

<input

type="number"

value="${p.price}"

onchange="editPrice(${index},this.value)">

</td>



<td>

<select onchange="editCategory(${index},this.value)">

<option value="runcit" ${p.category=="runcit"?"selected":""}>
🛒 Runcit
</option>

<option value="minuman" ${p.category=="minuman"?"selected":""}>
🥤 Minuman
</option>

<option value="penjagaan" ${p.category=="penjagaan"?"selected":""}>
🧴 Penjagaan
</option>

<option value="pencuci" ${p.category=="pencuci"?"selected":""}>
🧼 Pencuci
</option>

<option value="sejukbeku" ${p.category=="sejukbeku"?"selected":""}>
❄️ Sejuk Beku
</option>

<option value="pembungkus" ${p.category=="pembungkus"?"selected":""}>
📦 Pembungkus
</option>

<option value="borong-product" ${p.category=="borong-product"?"selected":""}>
🏪 Borong
</option>

</select>

</td>



<td>

<input

type="number"

value="${p.stock}"

onchange="editStock(${index},this.value)">

</td>

<td>

<button
class="refresh-btn"
onclick="refreshProducts()">

💾

</button>



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






products.push({

barcode:document.getElementById("barcode").value,

name:document.getElementById("name").value,

price:Number(document.getElementById("price").value),

stock:Number(document.getElementById("stock").value),

category:document.getElementById("category").value,

image:
document.getElementById("image").value || "./images/default.jpg"

});



save();


alert(
"Produk berjaya ditambah"
);



document.getElementById("name").value="";
document.getElementById("barcode").value="";
document.getElementById("price").value="";
document.getElementById("stock").value="";
document.getElementById("image").value="";














  


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




function editBarcode(i,value){

products[i].barcode=value;

save();

}





function saveItem(index){

localStorage.setItem(
"products",
JSON.stringify(products)
);


alert(
"✅ Produk berjaya disimpan"
);


();

}

function editCategory(i,value){

products[i].category=value;

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




