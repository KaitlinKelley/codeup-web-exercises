"use strict";

mapboxgl.accessToken = mapboxToken;

var mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 10, // starting zoom
    dragPan: true,
    doubleClickZoom: true,
    touchZoomRotate: true
}


var map = new mapboxgl.Map(mapOptions);

var restaurantArray = [
    {
        name: "Supper",
        address: "136 E Grayson St, San Antonio, TX, 78215",
        priceRange: "$$$",
        about: "Contemporary all-day option offering elevated farm-to-table American plates in bright surrounds.",
        bestDish: "Country Fried and Smoked Quail with Mashed Potatoes and Pickled Corn Relish"
    },
    {
        name: "Clementine",
        address: "2195 NW Military Hwy, San Antonio, TX 78213",
        priceRange: "$$",
        about: "Globally-inspired, seasonal menu served in a bright, stylish interior decorated with food art.",
        bestDish: "1/2 Heritage Breed Chicken ‘Under a Brick’, with chamomile brine, front garden chimichurri."
    },
    {
        name: "The Esquire Tavern",
        address: "155 E Commerce St, San Antonio, TX 78205",
        priceRange: "$$",
        about: "Inspired drinks & pub grub in vintage digs with a patio & the longest wooden bartop in Texas.",
        bestDish: "Chalupitas: Bell & Evans chicken, chipotle refritos, sour cream, chimichurri, white cheddar, and salsa verde.",
    }]


restaurantArray.forEach(function(restaurant){
    geocode(restaurant.address, mapboxToken).then(function(coordinates){
        var restHTML = "<h4>" + restaurant.name + "</h4>" + "<br>" + restaurant.address + "<br>" + restaurant.about + "<br>" + "Best Dish: " + restaurant.bestDish;
        console.log(coordinates);
        var popup = new mapboxgl.Popup({offset: 25})
            .setLngLat(coordinates)
            .setHTML(restHTML)
            .addTo(map);
        new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    })
})


//THIS DOESN'T WORK YET===================
function zoomChange(){
    var currentZoom = mapOptions.zoom;
    var newZoom = document.getElementsByTagName("option").value
    currentZoom = newZoom;
}

document.getElementById('zoom-5').addEventListener('click', zoomChange);
document.getElementById('zoom-10').addEventListener('click', zoomChange);
document.getElementById('zoom-15').addEventListener('click', zoomChange);
//===========================================================

//
// geocode("136 E Grayson St, San Antonio, TX, 78215", mapboxToken).then(function(supperCoord){
//     console.log(supperCoord);
//     new mapboxgl.Marker()
//         .setLngLat(supperCoord)
//         .addTo(map);
//     map.on("click", function(){
//         new mapboxgl.Popup({offset: 25})
//             .setLngLat(supperCoord)
//             .setHTML("<h5>Supper</h5>")
//             .addTo(map);
//     })
//
// })
//
// geocode("2195 NW Military Hwy, San Antonio, TX 78213", mapboxToken).then(function(clemCoord){
//     console.log(clemCoord);
//     new mapboxgl.Marker()
//         .setLngLat(clemCoord)
//         .addTo(map);
//     map.on("click", function(){
//         new mapboxgl.Popup({offset: 25})
//             .setLngLat(clemCoord)
//             .setHTML("<h5>Clementine</h5>")
//             .addTo(map);
//     })
// })
//
// geocode("155 E Commerce St, San Antonio, TX 78205", mapboxToken).then(function(esquireCoord){
//     console.log(esquireCoord);
//     new mapboxgl.Marker()
//         .setLngLat(esquireCoord)
//         .addTo(map);
//     map.on("click", function(){
//         new mapboxgl.Popup({offset: 25})
//             .setLngLat(esquireCoord)
//             .setHTML("<h5>The Esquire Tavern</h5>")
//             .addTo(map);
//     })
//
// })
