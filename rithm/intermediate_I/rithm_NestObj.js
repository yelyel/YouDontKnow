var schools = {
    georgiaInstituteOfTechnology: {
        address: "North Ave NW, Atlanta, GA 30332",
        phoneNumber: "(404) 894-2000",
        dateEstablished: "October 13, 1885"
    }
};
console.log(schools["georgiaInstituteOfTechnology"]["address"]);

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// meine erste Variante nicht funktionierend
// function displayCities() {
//   for (var i = 0; i < instructorData[instrName].additionalData.moreDetails.citiesLivedIn.length; i++) {
//     console.log(instructorData[instrName].additionalData.moreDetails.citiesLivedIn[i]);
//   }
//}


function displayCities() {
  var cities = instructorData.additionalData.moreDetails.citiesLivedIn;
  for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
  }
}
displayCities();

//  Meine Ver funktionierend
// function displayHometownData() {
//   console.log(instructorData.additionalData.moreDetails.hometown.city);
//   console.log(instructorData.additionalData.moreDetails.hometown.state);
// }
function displayHometownData() {
  var home = instructorData.additionalData.moreDetails.hometown;
  for (key in home) {
    console.log(instructorData.additionalData.moreDetails.hometown[key]);
  }

}
console.log("  ");
console.log("====== displayHometownData();  ======= ");
console.log(" ");
displayHometownData();

function addDetail(key, value) {
  var objectDets = instructorData.additionalData.moreDetails;
  objectDets[key] = value;
  return objectDets;
}
console.log("   ");
console.log("?? wieso wird bei mir der ganze Datensatz ausgegeben und nicht bloss die moreDetails ????????????????? ");
console.log("   ");
// function addDetail(key,value){
//     var detailsObject = instructorData.additionalData.moreDetails;
//     detailsObject[key] = value;
//     return detailsObject;
// }

console.log("  ");
console.log("====== addDetail(key,value);  ======= ");
console.log(" ");

addDetail("isHilarious", true);
addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
console.log(instructorData.additionalData.moreDetails["isHilarious"]);
console.log(" ");
console.log("   ====== instructorData ========= ");
console.log(" ");
console.log(instructorData);

function removeDetail(detailKey) {
  delete instructorData.additionalData.moreDetails[detailKey];
  console.log(instructorData.additionalData.moreDetails);
}
console.log(" ");
removeDetail('citiesLivedIn');
console.log(" ");
removeDetail('hometown');
console.log(" ");
removeDetail('favoriteBasketballTeam');
console.log(" ");
