

const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

/* Color markers based on star rating */
var geojsonMarkerOptions_one_star = {
radius: 6,
fillColor: "#7A0012",
color: "#7A0012",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};


var geojsonMarkerOptions_two_star = {
radius: 6,
fillColor: "#A04000",
color: "#A04000",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};

var geojsonMarkerOptions_three_star = {
radius: 6,
fillColor: "#CB9F00",
color: "#CB9F00",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};

var geojsonMarkerOptions_four_star = {
radius: 6,
fillColor: "#9D7C03",
color: "#9D7C03",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};

var geojsonMarkerOptions_five_star = {
radius: 6,
fillColor: "#303D00",
color: "#303D00",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};





var one_star_features = {
"type": "FeatureCollection",
"name": "one_star_facilities",
"features": [
{ "type": "Feature", "properties": { "CCN": "145235", "Provider": "LAKEFRONT NURSING & REHAB CTR", "Address": "7618 NORTH SHERIDAN ROAD", "ZIP": 60626, "Rating": 1.0, "Penalties": 1, "Latitude": 42.0198, "Longitude": -87.666, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.666, 42.0198 ] } },
{ "type": "Feature", "properties": { "CCN": "145244", "Provider": "APERION CARE LAKESHORE", "Address": "7200 NORTH SHERIDAN ROAD", "ZIP": 60626, "Rating": 1.0, "Penalties": 4, "Latitude": 42.0128, "Longitude": -87.663, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.663, 42.0128 ] } },
{ "type": "Feature", "properties": { "CCN": "145337", "Provider": "RYZE ON THE AVENUE", "Address": "3400 SOUTH INDIANA", "ZIP": 60616, "Rating": 1.0, "Penalties": 16, "Latitude": 41.8329, "Longitude": -87.622, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.622, 41.8329 ] } },
{ "type": "Feature", "properties": { "CCN": "145415", "Provider": "IRVING PARK LIVING & REHAB CTR", "Address": "4340 NORTH KEYSTONE", "ZIP": 60641, "Rating": 1.0, "Penalties": 4, "Latitude": 41.9601, "Longitude": -87.729, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.729, 41.9601 ] } },
{ "type": "Feature", "properties": { "CCN": "145429", "Provider": "WENTWORTH REHAB & HCC", "Address": "201 WEST 69TH STREET", "ZIP": 60621, "Rating": 1.0, "Penalties": 3, "Latitude": 41.7691, "Longitude": -87.63, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.63, 41.7691 ] } },
{ "type": "Feature", "properties": { "CCN": "145450", "Provider": "ALDEN LAKELAND REHAB & HCC", "Address": "820 WEST LAWRENCE", "ZIP": 60640, "Rating": 1.0, "Penalties": 3, "Latitude": 41.9692, "Longitude": -87.65, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.65, 41.9692 ] } },
{ "type": "Feature", "properties": { "CCN": "145479", "Provider": "ATRIUM HEALTH CARE CENTER", "Address": "1425 WEST ESTES AVENUE", "ZIP": 60626, "Rating": 1.0, "Penalties": 3, "Latitude": 42.0115, "Longitude": -87.667, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.667, 42.0115 ] } },
{ "type": "Feature", "properties": { "CCN": "145482", "Provider": "SHERIDAN VILLAGE NRSG & RHB", "Address": "5838 NORTH SHERIDAN ROAD", "ZIP": 60660, "Rating": 1.0, "Penalties": 4, "Latitude": 41.9884, "Longitude": -87.655, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.655, 41.9884 ] } },
{ "type": "Feature", "properties": { "CCN": "145484", "Provider": "ELEVATE CARE CHICAGO NORTH", "Address": "2451 WEST TOUHY AVENUE", "ZIP": 60645, "Rating": 1.0, "Penalties": 8, "Latitude": 42.0123, "Longitude": -87.691, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.691, 42.0123 ] } },
{ "type": "Feature", "properties": { "CCN": "145549", "Provider": "BELHAVEN NURSING & REHAB CENTER", "Address": "11401 SOUTH OAKLEY AVENUE", "ZIP": 60643, "Rating": 1.0, "Penalties": 21, "Latitude": 41.6861, "Longitude": -87.679, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.679, 41.6861 ] } },
{ "type": "Feature", "properties": { "CCN": "145625", "Provider": "CALIFORNIA TERRACE", "Address": "2829 SOUTH CALIFORNIA BLVD", "ZIP": 60608, "Rating": 1.0, "Penalties": 13, "Latitude": 41.8409, "Longitude": -87.694, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.694, 41.8409 ] } },
{ "type": "Feature", "properties": { "CCN": "145632", "Provider": "WARREN BARR SOUTH LOOP", "Address": "1725 SOUTH WABASH", "ZIP": 60616, "Rating": 1.0, "Penalties": 11, "Latitude": 41.8587, "Longitude": -87.626, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.626, 41.8587 ] } },
{ "type": "Feature", "properties": { "CCN": "145654", "Provider": "LAKEVIEW  REHAB & NURSING CENTER", "Address": "735 WEST DIVERSEY", "ZIP": 60614, "Rating": 1.0, "Penalties": 12, "Latitude": 41.9327, "Longitude": -87.648, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.648, 41.9327 ] } },
{ "type": "Feature", "properties": { "CCN": "145661", "Provider": "RYZE WEST", "Address": "5130 WEST JACKSON BOULEVARD", "ZIP": 60644, "Rating": 1.0, "Penalties": 12, "Latitude": 41.8767, "Longitude": -87.754, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.754, 41.8767 ] } },
{ "type": "Feature", "properties": { "CCN": "145730", "Provider": "CONTINENTAL NURSING & REHAB CENTER", "Address": "5336 NORTH WESTERN AVENUE", "ZIP": 60625, "Rating": 1.0, "Penalties": 48, "Latitude": 41.9781, "Longitude": -87.689, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.689, 41.9781 ] } },
{ "type": "Feature", "properties": { "CCN": "145764", "Provider": "MORGAN PARK HEALTHCARE", "Address": "10935 SOUTH HALSTED STREET", "ZIP": 60628, "Rating": 1.0, "Penalties": 7, "Latitude": 41.6954, "Longitude": -87.642, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.642, 41.6954 ] } },
{ "type": "Feature", "properties": { "CCN": "145765", "Provider": "PARK VIEW REHAB CENTER", "Address": "5888 NORTH RIDGE", "ZIP": 60660, "Rating": 1.0, "Penalties": 5, "Latitude": 41.9889, "Longitude": -87.669, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.669, 41.9889 ] } },
{ "type": "Feature", "properties": { "CCN": "145776", "Provider": "BEACON CARE AND REHABILITATION", "Address": "4538 NORTH BEACON", "ZIP": 60640, "Rating": 1.0, "Penalties": 20, "Latitude": 41.9642, "Longitude": -87.664, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.664, 41.9642 ] } },
{ "type": "Feature", "properties": { "CCN": "145792", "Provider": "PAVILION OF LOGAN SQUARE, THE", "Address": "2242 NORTH KEDZIE", "ZIP": 60647, "Rating": 1.0, "Penalties": 3, "Latitude": 41.9226, "Longitude": -87.707, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.707, 41.9226 ] } },
{ "type": "Feature", "properties": { "CCN": "145806", "Provider": "WARREN PARK HEALTH & LIVING CTR", "Address": "6700 NORTH DAMEN AVENUE", "ZIP": 60645, "Rating": 1.0, "Penalties": 4, "Latitude": 42.0028, "Longitude": -87.68, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.68, 42.0028 ] } },
{ "type": "Feature", "properties": { "CCN": "145828", "Provider": "KENWOOD VLGE NRSG AND RHB CTR", "Address": "4505 SOUTH DREXEL", "ZIP": 60653, "Rating": 1.0, "Penalties": 7, "Latitude": 41.8132, "Longitude": -87.604, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.604, 41.8132 ] } },
{ "type": "Feature", "properties": { "CCN": "145829", "Provider": "KENSINGTON PLACE NRSG & REHAB", "Address": "3405 SOUTH MICHIGAN AVENUE", "ZIP": 60616, "Rating": 1.0, "Penalties": 3, "Latitude": 41.8328, "Longitude": -87.623, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.623, 41.8328 ] } },
{ "type": "Feature", "properties": { "CCN": "145834", "Provider": "AUSTIN OASIS, THE", "Address": "901 SOUTH AUSTIN BLVD", "ZIP": 60644, "Rating": 1.0, "Penalties": 15, "Latitude": 41.8704, "Longitude": -87.774, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.774, 41.8704 ] } },
{ "type": "Feature", "properties": { "CCN": "145838", "Provider": "PETERSON PARK HEALTH CARE CTR", "Address": "6141 NORTH PULASKI ROAD", "ZIP": 60646, "Rating": 1.0, "Penalties": 4, "Latitude": 41.9926, "Longitude": -87.729, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.729, 41.9926 ] } },
{ "type": "Feature", "properties": { "CCN": "145844", "Provider": "PEARL OF MONTCLARE, THE", "Address": "2833 NORTH NORDICA AVENUE", "ZIP": 60634, "Rating": 1.0, "Penalties": 3, "Latitude": 41.9317, "Longitude": -87.803, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.803, 41.9317 ] } },
{ "type": "Feature", "properties": { "CCN": "145864", "Provider": "BRIA OF FOREST EDGE", "Address": "8001 SOUTH WESTERN AVENUE", "ZIP": 60620, "Rating": 1.0, "Penalties": 5, "Latitude": 41.7483, "Longitude": -87.683, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.683, 41.7483 ] } },
{ "type": "Feature", "properties": { "CCN": "145867", "Provider": "ALTA REHAB AT FAIRMONT", "Address": "5061 NORTH PULASKI ROAD", "ZIP": 60630, "Rating": 1.0, "Penalties": 4, "Latitude": 41.9736, "Longitude": -87.728, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.728, 41.9736 ] } },
{ "type": "Feature", "properties": { "CCN": "145881", "Provider": "UPTOWN CARE AND REHABILITATION", "Address": "4920 NORTH KENMORE", "ZIP": 60640, "Rating": 1.0, "Penalties": 7, "Latitude": 41.9719, "Longitude": -87.656, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.656, 41.9719 ] } },
{ "type": "Feature", "properties": { "CCN": "145885", "Provider": "MAYFIELD CARE AND REHAB", "Address": "5905 WEST WASHINGTON", "ZIP": 60644, "Rating": 1.0, "Penalties": 12, "Latitude": 41.8821, "Longitude": -87.772, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.772, 41.8821 ] } },
{ "type": "Feature", "properties": { "CCN": "145914", "Provider": "SOUTHPOINT NURSING & REHAB CENTER", "Address": "1010 WEST 95TH STREET", "ZIP": 60643, "Rating": 1.0, "Penalties": 11, "Latitude": 41.7214, "Longitude": -87.648, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.648, 41.7214 ] } },
{ "type": "Feature", "properties": { "CCN": "145938", "Provider": "PARKSHORE ESTATES NURSING & REHAB", "Address": "6125 SOUTH KENWOOD", "ZIP": 60637, "Rating": 1.0, "Penalties": 10, "Latitude": 41.7838, "Longitude": -87.593, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.593, 41.7838 ] } },
{ "type": "Feature", "properties": { "CCN": "145939", "Provider": "PAVILION OF SOUTH SHORE", "Address": "7750 SOUTH SHORE DRIVE", "ZIP": 60649, "Rating": 1.0, "Penalties": 2, "Latitude": 41.7938, "Longitude": -87.58, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.58, 41.7938 ] } },
{ "type": "Feature", "properties": { "CCN": "145970", "Provider": "ELEVATE CARE WINDSOR PARK", "Address": "2649 EAST 75TH ST", "ZIP": 60649, "Rating": 1.0, "Penalties": 4, "Latitude": 41.7593, "Longitude": -87.56, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.56, 41.7593 ] } },
{ "type": "Feature", "properties": { "CCN": "145977", "Provider": "SOUTH SHORE REHABILITATION", "Address": "2425 EAST 71ST STREET", "ZIP": 60649, "Rating": 1.0, "Penalties": 5, "Latitude": 41.7663, "Longitude": -87.566, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.566, 41.7663 ] } },
{ "type": "Feature", "properties": { "CCN": "145983", "Provider": "ALIYA ON 87TH", "Address": "2940 WEST 87TH STREET", "ZIP": 60652, "Rating": 1.0, "Penalties": 4, "Latitude": 41.7353, "Longitude": -87.696, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.696, 41.7353 ] } },
{ "type": "Feature", "properties": { "CCN": "145995", "Provider": "ARCHER HEIGHTS HEALTHCARE", "Address": "4437 SOUTH CICERO", "ZIP": 60632, "Rating": 1.0, "Penalties": 4, "Latitude": 41.7952, "Longitude": -87.743, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.743, 41.7952 ] } },
{ "type": "Feature", "properties": { "CCN": "146001", "Provider": "APERION CARE INTERNATIONAL", "Address": "4815 SOUTH WESTERN AVE", "ZIP": 60609, "Rating": 1.0, "Penalties": 6, "Latitude": 41.8063, "Longitude": -87.684, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.684, 41.8063 ] } },
{ "type": "Feature", "properties": { "CCN": "146018", "Provider": "LITTLE VILLAGE NRSG & RHB CTR", "Address": "2320 SOUTH LAWNDALE", "ZIP": 60623, "Rating": 1.0, "Penalties": 3, "Latitude": 41.8494, "Longitude": -87.717, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.717, 41.8494 ] } },
{ "type": "Feature", "properties": { "CCN": "146062", "Provider": "CENTER HOME HISPANIC ELDERLY", "Address": "1401 NORTH CALIFORNIA", "ZIP": 60622, "Rating": 1.0, "Penalties": 7, "Latitude": 41.9066, "Longitude": -87.697, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.697, 41.9066 ] } },
{ "type": "Feature", "properties": { "CCN": "146164", "Provider": "COMMUNITY CARE NURSING CENTER", "Address": "4314 SOUTH WABASH AVENUE", "ZIP": 60653, "Rating": 1.0, "Penalties": 10, "Latitude": 41.8163, "Longitude": -87.625, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.625, 41.8163 ] } },
{ "type": "Feature", "properties": { "CCN": "146167", "Provider": "FOSTER HEALTH & REHAB CENTER", "Address": "2840 WEST FOSTER AVENUE", "ZIP": 60625, "Rating": 1.0, "Penalties": 4, "Latitude": 41.9758, "Longitude": -87.7, "one_star": "true", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.7, 41.9758 ] } }
]
};



// const one_star_facilities = L.geoJSON(one_star_features);


const one_star_facilities = L.geoJSON(one_star_features, {
pointToLayer: function (feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions_one_star)},

onEachFeature: (feature, layer) => {
layer.on('click', (e) => {
    displayInfo(feature.properties);
});

}

});



// const one_star_facilities = L.geoJSON(one_star_features, {
//     style: function(feature) {
//         switch (feature.properties.one_star) {
//             case 'true': return {color: "#FF0000"};
//         }
//     }
// });

var two_star_features = {
"type": "FeatureCollection",
"name": "two_star_facilities",
"features": [
{ "type": "Feature", "properties": { "CCN": "145343", "Provider": "AMBASSADOR NURSING & REHAB CENTER", "Address": "4900 NORTH BERNARD", "ZIP": 60625, "Rating": 2.0, "Penalties": 4, "Latitude": 41.9702, "Longitude": -87.715, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.715, 41.9702 ] } },
{ "type": "Feature", "properties": { "CCN": "145510", "Provider": "AVANTARA LINCOLN PARK", "Address": "1366 WEST FULLERTON AVENUE", "ZIP": 60614, "Rating": 2.0, "Penalties": 2, "Latitude": 41.9252, "Longitude": -87.663, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.663, 41.9252 ] } },
{ "type": "Feature", "properties": { "CCN": "145648", "Provider": "CENTRAL NURSING HOME", "Address": "2450 NORTH CENTRAL AVENUE", "ZIP": 60639, "Rating": 2.0, "Penalties": 0, "Latitude": 41.925, "Longitude": -87.766, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.766, 41.925 ] } },
{ "type": "Feature", "properties": { "CCN": "145670", "Provider": "CHALET LIVING & REHAB", "Address": "7350 NORTH SHERIDAN ROAD", "ZIP": 60626, "Rating": 2.0, "Penalties": 2, "Latitude": 42.0153, "Longitude": -87.665, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.665, 42.0153 ] } },
{ "type": "Feature", "properties": { "CCN": "145679", "Provider": "CARLTON AT THE LAKE, THE", "Address": "725 WEST MONTROSE AVENUE", "ZIP": 60613, "Rating": 2.0, "Penalties": 5, "Latitude": 41.9619, "Longitude": -87.647, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.647, 41.9619 ] } },
{ "type": "Feature", "properties": { "CCN": "145688", "Provider": "PRINCETON REHAB & HCC", "Address": "255 WEST 69TH STREET", "ZIP": 60621, "Rating": 2.0, "Penalties": 3, "Latitude": 41.7691, "Longitude": -87.631, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.631, 41.7691 ] } },
{ "type": "Feature", "properties": { "CCN": "145748", "Provider": "MONTGOMERY PLACE", "Address": "5550 SOUTH SHORE DRIVE", "ZIP": 60637, "Rating": 2.0, "Penalties": 7, "Latitude": 41.7938, "Longitude": -87.58, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.58, 41.7938 ] } },
{ "type": "Feature", "properties": { "CCN": "145767", "Provider": "PAUL HOUSE & HEALTH CR CTR", "Address": "3800 NORTH CALIFORNIA AVENUE", "ZIP": 60618, "Rating": 2.0, "Penalties": 2, "Latitude": 41.9503, "Longitude": -87.698, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.698, 41.9503 ] } },
{ "type": "Feature", "properties": { "CCN": "145775", "Provider": "HARMONY HEALTHCARE & REHAB CTR", "Address": "3919 WEST FOSTER AVENUE", "ZIP": 60625, "Rating": 2.0, "Penalties": 4, "Latitude": 41.9756, "Longitude": -87.726, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.726, 41.9756 ] } },
{ "type": "Feature", "properties": { "CCN": "145832", "Provider": "RYZE AT THE RIDGE", "Address": "6450 NORTH RIDGE BLVD", "ZIP": 60626, "Rating": 2.0, "Penalties": 13, "Latitude": 41.9989, "Longitude": -87.677, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.677, 41.9989 ] } },
{ "type": "Feature", "properties": { "CCN": "145875", "Provider": "WARREN BARR LINCOLN PARK", "Address": "2732 NORTH HAMPDEN COURT", "ZIP": 60614, "Rating": 2.0, "Penalties": 1, "Latitude": 41.9315, "Longitude": -87.642, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.642, 41.9315 ] } },
{ "type": "Feature", "properties": { "CCN": "146149", "Provider": "WESTWOOD VLGE NRSG AND RHB CTR", "Address": "2444 WEST TOUHY AVENUE", "ZIP": 60645, "Rating": 2.0, "Penalties": 0, "Latitude": 42.0122, "Longitude": -87.692, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.692, 42.0122 ] } },
{ "type": "Feature", "properties": { "CCN": "146161", "Provider": "SOUTHVIEW MANOR", "Address": "3311 S. MICHIGAN AVE.", "ZIP": 60616, "Rating": 2.0, "Penalties": 18, "Latitude": 41.8345, "Longitude": -87.623, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.623, 41.8345 ] } },
{ "type": "Feature", "properties": { "CCN": "146169", "Provider": "FARGO HEALTH CARE CENTER", "Address": "1512 WEST FARGO", "ZIP": 60626, "Rating": 2.0, "Penalties": 1, "Latitude": 42.0171, "Longitude": -87.668, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.668, 42.0171 ] } },
{ "type": "Feature", "properties": { "CCN": "146191", "Provider": "MADO HEALTHCARE - UPTOWN", "Address": "4621 NORTH RACINE AVENUE", "ZIP": 60640, "Rating": 2.0, "Penalties": 2, "Latitude": 41.9657, "Longitude": -87.66, "one_star": "false", "two_star": "true", "three_star": "false", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.66, 41.9657 ] } }
]
}


// const two_star_facilities = L.geoJSON(two_star_features);


const two_star_facilities = L.geoJSON(two_star_features, {
pointToLayer: function (feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions_two_star)},

onEachFeature: (feature, layer) => {
layer.on('click', (e) => {
    displayInfo(feature.properties);
});

}

});


var three_star_features = {
"type": "FeatureCollection",
"name": "three_star_facilities",
"features": [
{ "type": "Feature", "properties": { "CCN": "145126", "Provider": "ALDEN LINCOLN REHAB & H C CTR", "Address": "504 WEST WELLINGTON AVENUE", "ZIP": 60657, "Rating": 3.0, "Penalties": 2, "Latitude": 41.9366, "Longitude": -87.642, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.642, 41.9366 ] } },
{ "type": "Feature", "properties": { "CCN": "145336", "Provider": "WARREN BARR GOLD COAST", "Address": "66 WEST OAK STREET", "ZIP": 60610, "Rating": 3.0, "Penalties": 7, "Latitude": 41.9006, "Longitude": -87.631, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.631, 41.9006 ] } },
{ "type": "Feature", "properties": { "CCN": "145507", "Provider": "CLARK MANOR", "Address": "7433 NORTH CLARK STREET", "ZIP": 60626, "Rating": 3.0, "Penalties": 3, "Latitude": 42.0166, "Longitude": -87.675, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.675, 42.0166 ] } },
{ "type": "Feature", "properties": { "CCN": "145532", "Provider": "BIRCHWOOD PLAZA", "Address": "1426 WEST BIRCHWOOD", "ZIP": 60626, "Rating": 3.0, "Penalties": 0, "Latitude": 42.0182, "Longitude": -87.667, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.667, 42.0182 ] } },
{ "type": "Feature", "properties": { "CCN": "145659", "Provider": "WATERFORD CARE CENTER, THE", "Address": "7445 NORTH SHERIDAN ROAD", "ZIP": 60626, "Rating": 3.0, "Penalties": 0, "Latitude": 42.0173, "Longitude": -87.665, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.665, 42.0173 ] } },
{ "type": "Feature", "properties": { "CCN": "145796", "Provider": "BALMORAL HOME", "Address": "2055 WEST BALMORAL AVENUE", "ZIP": 60625, "Rating": 3.0, "Penalties": 1, "Latitude": 41.9796, "Longitude": -87.681, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.681, 41.9796 ] } },
{ "type": "Feature", "properties": { "CCN": "145888", "Provider": "ALDEN ESTATES OF NORTHMOOR", "Address": "5831 NORTH NORTHWEST HIGHWAY", "ZIP": 60631, "Rating": 3.0, "Penalties": 2, "Latitude": 41.9872, "Longitude": -87.79, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.79, 41.9872 ] } },
{ "type": "Feature", "properties": { "CCN": "145904", "Provider": "SMITH VILLAGE", "Address": "2320 WEST 113TH PLACE", "ZIP": 60643, "Rating": 3.0, "Penalties": 7, "Latitude": 41.6871, "Longitude": -87.679, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.679, 41.6871 ] } },
{ "type": "Feature", "properties": { "CCN": "146198", "Provider": "ALL AMERICAN VLGE NRSG & RHB", "Address": "5448 NORTH BROADWAY STREET", "ZIP": 60640, "Rating": 3.0, "Penalties": 0, "Latitude": 41.9809, "Longitude": -87.66, "one_star": "false", "two_star": "false", "three_star": "true", "four_star": "false", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.66, 41.9809 ] } }
]
}


// const three_star_facilities = L.geoJSON(three_star_features);

const three_star_facilities = L.geoJSON(three_star_features, {
pointToLayer: function (feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions_three_star)},

onEachFeature: (feature, layer) => {
layer.on('click', (e) => {
    displayInfo(feature.properties);
});

}

});

var four_star_features = {
"type": "FeatureCollection",
"name": "four_star_facilities",
"features": [
{ "type": "Feature", "properties": { "CCN": "145285", "Provider": "BUCKINGHAM PAVILION", "Address": "2625 WEST TOUHY AVENUE", "ZIP": 60645, "Rating": 4.0, "Penalties": 3, "Latitude": 42.0122, "Longitude": -87.696, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "true", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.696, 42.0122 ] } },
{ "type": "Feature", "properties": { "CCN": "145591", "Provider": "APERION CARE WESLEY", "Address": "1415 WEST FOSTER AVENUE", "ZIP": 60640, "Rating": 4.0, "Penalties": 3, "Latitude": 41.9762, "Longitude": -87.666, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "true", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.666, 41.9762 ] } },
{ "type": "Feature", "properties": { "CCN": "145634", "Provider": "ASTORIA PLACE LIVING & REHAB", "Address": "6300 NORTH CALIFORNIA AVENUE", "ZIP": 60659, "Rating": 4.0, "Penalties": 0, "Latitude": 41.9958, "Longitude": -87.7, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "true", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.7, 41.9958 ] } },
{ "type": "Feature", "properties": { "CCN": "145960", "Provider": "ASCENSION RESURRECTION LIFE", "Address": "7370 WEST TALCOTT AVENUE", "ZIP": 60631, "Rating": 4.0, "Penalties": 0, "Latitude": 41.9879, "Longitude": -87.811, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "true", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.811, 41.9879 ] } },
{ "type": "Feature", "properties": { "CCN": "145974", "Provider": "NORWOOD CROSSING", "Address": "6016 NORTH NINA AVENUE", "ZIP": 60631, "Rating": 4.0, "Penalties": 3, "Latitude": 41.9904, "Longitude": -87.8, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "true", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.8, 41.9904 ] } },
{ "type": "Feature", "properties": { "CCN": "14E169", "Provider": "WINSTON MANOR CNV & NURSING", "Address": "2155 WEST PIERCE", "ZIP": 60622, "Rating": 4.0, "Penalties": 0, "Latitude": 41.9093, "Longitude": -87.682, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "true", "five_star": "false" }, "geometry": { "type": "Point", "coordinates": [ -87.682, 41.9093 ] } }
]
}


const four_star_facilities = L.geoJSON(four_star_features, {
pointToLayer: function (feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions_four_star)},

onEachFeature: (feature, layer) => {
layer.on('click', (e) => {
    displayInfo(feature.properties);
});

}

});

var five_star_features = {
"type": "FeatureCollection",
"name": "five_star_facilities",
"features": [
{ "type": "Feature", "properties": { "CCN": "145548", "Provider": "COMMUNITY FIRST MEDICAL CENTER", "Address": "5645 WEST ADDISON STREET", "ZIP": 60634, "Rating": 5.0, "Penalties": 1, "Latitude": 41.9459, "Longitude": -87.768, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.768, 41.9459 ] } },
{ "type": "Feature", "properties": { "CCN": "145637", "Provider": "ST JOSEPH VILLAGE OF CHICAGO", "Address": "4021 WEST BELMONT", "ZIP": 60641, "Rating": 5.0, "Penalties": 1, "Latitude": 41.9391, "Longitude": -87.728, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.728, 41.9391 ] } },
{ "type": "Feature", "properties": { "CCN": "146009", "Provider": "SELFHELP HOME OF CHICAGO", "Address": "908 WEST ARGYLE STREET", "ZIP": 60640, "Rating": 5.0, "Penalties": 0, "Latitude": 41.9733, "Longitude": -87.653, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.653, 41.9733 ] } },
{ "type": "Feature", "properties": { "CCN": "146141", "Provider": "TERRACES AT THE CLARE", "Address": "55 EAST PEARSON", "ZIP": 60611, "Rating": 5.0, "Penalties": 0, "Latitude": 41.8975, "Longitude": -87.627, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.627, 41.8975 ] } },
{ "type": "Feature", "properties": { "CCN": "146165", "Provider": "ADMIRAL AT THE LAKE, THE", "Address": "933 WEST FOSTER AVENUE", "ZIP": 60640, "Rating": 5.0, "Penalties": 0, "Latitude": 41.9764, "Longitude": -87.654, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.654, 41.9764 ] } },
{ "type": "Feature", "properties": { "CCN": "146174", "Provider": "MERCY CIRCLE", "Address": "3659 WEST 99TH STREET", "ZIP": 60655, "Rating": 5.0, "Penalties": 1, "Latitude": 41.7133, "Longitude": -87.714, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.714, 41.7133 ] } },
{ "type": "Feature", "properties": { "CCN": "146185", "Provider": "LITTLE SISTERS OF THE POOR", "Address": "2325 NORTH LAKEWOOD AVENUE", "ZIP": 60614, "Rating": 5.0, "Penalties": 0, "Latitude": 41.9238, "Longitude": -87.661, "one_star": "false", "two_star": "false", "three_star": "false", "four_star": "false", "five_star": "true" }, "geometry": { "type": "Point", "coordinates": [ -87.661, 41.9238 ] } }
]
}


const five_star_facilities = L.geoJSON(five_star_features, {
pointToLayer: function (feature, latlng) {
return L.circleMarker(latlng, geojsonMarkerOptions_five_star)},

onEachFeature: (feature, layer) => {
layer.on('click', (e) => {
    displayInfo(feature.properties);
});

}

});


// const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
// });

/* add layers to map, center on Chicago*/ 
const map = L.map('map', {
center: [41.85, -87.64],
zoom: 11,
layers: [osm, one_star_facilities, two_star_facilities, three_star_facilities, four_star_facilities, five_star_facilities]
});


const baseLayers = {
'OpenStreetMap': osm,
// 'OpenStreetMap.HOT': osmHOT
};

const overlays = {
'1 Star Facilities': one_star_facilities,
'2 Star Facilities': two_star_facilities, 
'3 Star Facilities': three_star_facilities, 
'4 Star Facilities': four_star_facilities, 
'5 Star Facilities': five_star_facilities, 
};


const layerControl = L.control.layers(baseLayers, overlays).addTo(map);

// Function to update the information box
function displayInfo(properties) {
// Use D3.js to update the content of the information box
    d3.select('#info-content')
    .html(`
        <facility_name_text>${properties.Provider}</facility_name_text><br>
        <facility_info_text>${properties.Address}</facility_info_text><br><br>

        <facility_info_numbers>${properties.Penalties}</facility_info_numbers> 
        <facility_info_text>Penalties </facility_info_text><br>    
        
        <facility_info_numbers>${properties.Rating}</facility_info_numbers> 
        <facility_info_text>Star Rating </facility_info_text>   

        `);
    
}


