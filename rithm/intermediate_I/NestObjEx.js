var nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
        primeNumbers: [2,3,5,7,11],
        fibonnaci: [1,1,2,3,5,8,13]
    },
    addSnack: function(snack){
        this.snacks.push(snack);
        return this;
    }
  }
}

for (var i = 0; i < nestedData["innerData"].numberData.primeNumbers.length; i++) {
  console.log(nestedData.innerData.numberData.primeNumbers[i]);
}

console.log("  ");

for (var i = 0; i < nestedData["innerData"].numberData.fibonnaci.length; i++) {
  console.log(nestedData.innerData.numberData.fibonnaci[i]);
}

console.log("  ");

console.log(nestedData["innerData"].order[1]);

console.log("  ");

console.log(nestedData.innerData.addSnack("chocolate"));

console.log("  ");
console.log("     ================   2. Teil    ");
console.log("  ");

var nestedObject = {
  speakers: [{name:"Elie"},{name:"Tim"},{name:"Matt"}],
  data: {
    continents: {
      europe: {
        countries: {
          switzerland: {
            capital: "Bern",
            population: 8000000
          }
        }
      }
    },
    languages: {
      spanish: {
          hello: "Hola"
      },
      french: {
          hello: "Bonjour"
      }
    }
  }
}

function addSpeaker(speaker) {
  nestedObject.speakers.push({name:speaker});
  console.log(nestedObject.speakers[nestedObject.speakers.length - 1]);
}
addSpeaker("Yel");

console.log("  ");
function addLanguage(lang, key, halo) {
  nestedObject.data.languages[lang] = {
    key: halo
  };
  console.log(nestedObject.data.languages);
}
addLanguage("english", "hello", "good day");

console.log("  ");
function addCountry(country, cap, pop) {
  var countryToAdd = {
    capital : cap,
    population : pop
  }
  nestedObject.data.continents.europe.countries[country] = countryToAdd;
  console.log(nestedObject.data.continents.europe.countries);
}
addCountry("Transsilvanien", "Murnau", 5);

console.log("  ");
