const CACHE_NAME="hlai-suria-v1";


const FILES=[

"./",
"./index.html",
"./manifest.json",

"./images/logo.jpeg",
"./images/icon-192.png",
"./images/icon-512.png"

];



self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>{

return cache.addAll(FILES);

})

);

});




self.addEventListener(
"activate",
event=>{

event.waitUntil(

caches.keys()
.then(keys=>{

return Promise.all(

keys.map(key=>{

if(key!==CACHE_NAME){

return caches.delete(key);

}

})

)

})

);

});





self.addEventListener(
"fetch",
event=>{


event.respondWith(

caches.match(event.request)
.then(response=>{


return response || fetch(event.request);


})

);


});