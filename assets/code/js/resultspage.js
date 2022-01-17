// VARIABLES
let map;

var city_names = [
  "Aberdeen",
  "Abilene",
  "Akron",
  "Albany",
  "Albuquerque",
  "Alexandria",
  "Allentown",
  "Amarillo",
  "Anaheim",
  "Anchorage",
  "Ann Arbor",
  "Antioch",
  "Apple Valley",
  "Appleton",
  "Arlington",
  "Arvada",
  "Asheville",
  "Atlanta",
  "Atlantic City",
  "Augusta",
  "Aurora",
  "Austin",
  "Bakersfield",
  "Baltimore",
  "Barnstable",
  "Baton Rouge",
  "Beaumont",
  "Bel Air",
  "Bellevue",
  "Berkeley",
  "Bethlehem",
  "Billings",
  "Birmingham",
  "Bloomington",
  "Boise",
  "Boise City",
  "Bonita Springs",
  "Boston",
  "Boulder",
  "Bradenton",
  "Bremerton",
  "Bridgeport",
  "Brighton",
  "Brownsville",
  "Bryan",
  "Buffalo",
  "Burbank",
  "Burlington",
  "Cambridge",
  "Canton",
  "Cape Coral",
  "Carrollton",
  "Cary",
  "Cathedral City",
  "Cedar Rapids",
  "Champaign",
  "Chandler",
  "Charleston",
  "Charlotte",
  "Chattanooga",
  "Chesapeake",
  "Chicago",
  "Chula Vista",
  "Cincinnati",
  "Clarke County",
  "Clarksville",
  "Clearwater",
  "Cleveland",
  "College Station",
  "Colorado Springs",
  "Columbia",
  "Columbus",
  "Concord",
  "Coral Springs",
  "Corona",
  "Coamo",
  "Corpus Christi",
  "Costa Mesa",
  "Dallas",
  "Daly City",
  "Danbury",
  "Davenport",
  "Davidson County",
  "Dayton",
  "Daytona Beach",
  "Deltona",
  "Denton",
  "Denver",
  "Des Moines",
  "Detroit",
  "Downey",
  "Duluth",
  "Durham",
  "El Monte",
  "El Paso",
  "Elizabeth",
  "Elk Grove",
  "Elkhart",
  "Erie",
  "Escondido",
  "Eugene",
  "Evansville",
  "Fairfield",
  "Fargo",
  "Fayetteville",
  "Fitchburg",
  "Flint",
  "Fontana",
  "Fort Collins",
  "Fort Lauderdale",
  "Fort Smith",
  "Fort Walton Beach",
  "Fort Wayne",
  "Fort Worth",
  "Frederick",
  "Fremont",
  "Fresno",
  "Fullerton",
  "Gainesville",
  "Garden Grove",
  "Garland",
  "Gastonia",
  "Gilbert",
  "Glendale",
  "Grand Prairie",
  "Grand Rapids",
  "Grayslake",
  "Green Bay",
  "GreenBay",
  "Greensboro",
  "Greenville",
  "Gulfport-Biloxi",
  "Hagerstown",
  "Hampton",
  "Harlingen",
  "Harrisburg",
  "Hartford",
  "Havre de Grace",
  "Hayward",
  "Hemet",
  "Henderson",
  "Hesperia",
  "Hialeah",
  "Hickory",
  "High Point",
  "Hollywood",
  "Honolulu",
  "Houma",
  "Houston",
  "Howell",
  "Huntington",
  "Huntington Beach",
  "Huntsville",
  "Independence",
  "Indianapolis",
  "Inglewood",
  "Irvine",
  "Irving",
  "Jackson",
  "Jacksonville",
  "Jefferson",
  "Jersey City",
  "Johnson City",
  "Joliet",
  "Kailua",
  "Kalamazoo",
  "Kaneohe",
  "Kansas City",
  "Kennewick",
  "Kenosha",
  "Killeen",
  "Kissimmee",
  "Knoxville",
  "Lacey",
  "Lafayette",
  "Lake Charles",
  "Lakeland",
  "Lakewood",
  "Lancaster",
  "Lansing",
  "Laredo",
  "Las Cruces",
  "Las Vegas",
  "Layton",
  "Leominster",
  "Lewisville",
  "Lexington",
  "Lincoln",
  "Little Rock",
  "Long Beach",
  "Lorain",
  "Los Angeles",
  "Louisville",
  "Lowell",
  "Lubbock",
  "Macon",
  "Madison",
  "Manchester",
  "Marina",
  "Marysville",
  "McAllen",
  "McHenry",
  "Medford",
  "Melbourne",
  "Memphis",
  "Merced",
  "Mesa",
  "Mesquite",
  "Miami",
  "Milwaukee",
  "Minneapolis",
  "Miramar",
  "Mission Viejo",
  "Mobile",
  "Modesto",
  "Monroe",
  "Monterey",
  "Montgomery",
  "Moreno Valley",
  "Murfreesboro",
  "Murrieta",
  "Muskegon",
  "Myrtle Beach",
  "Naperville",
  "Naples",
  "Nashua",
  "Nashville",
  "New Bedford",
  "New Haven",
  "New London",
  "New Orleans",
  "New York",
  "New York City",
  "Newark",
  "Newburgh",
  "Newport News",
  "Norfolk",
  "Normal",
  "Norman",
  "North Charleston",
  "North Las Vegas",
  "North Port",
  "Norwalk",
  "Norwich",
  "Oakland",
  "Ocala",
  "Oceanside",
  "Odessa",
  "Ogden",
  "Oklahoma City",
  "Olathe",
  "Olympia",
  "Omaha",
  "Ontario",
  "Orange",
  "Orem",
  "Orlando",
  "Overland Park",
  "Oxnard",
  "Palm Bay",
  "Palm Springs",
  "Palmdale",
  "Panama City",
  "Pasadena",
  "Paterson",
  "Pembroke Pines",
  "Pensacola",
  "Peoria",
  "Philadelphia",
  "Phoenix",
  "Pittsburgh",
  "Plano",
  "Pomona",
  "Pompano Beach",
  "Port Arthur",
  "Port Orange",
  "Port Saint Lucie",
  "Port St. Lucie",
  "Portland",
  "Portsmouth",
  "Poughkeepsie",
  "Providence",
  "Provo",
  "Pueblo",
  "Punta Gorda",
  "Racine",
  "Raleigh",
  "Rancho Cucamonga",
  "Reading",
  "Redding",
  "Reno",
  "Richland",
  "Richmond",
  "Richmond County",
  "Riverside",
  "Roanoke",
  "Rochester",
  "Rockford",
  "Roseville",
  "Round Lake Beach",
  "Sacramento",
  "Saginaw",
  "Saint Louis",
  "Saint Paul",
  "Saint Petersburg",
  "Salem",
  "Salinas",
  "Salt Lake City",
  "San Antonio",
  "San Bernardino",
  "San Buenaventura",
  "San Diego",
  "San Francisco",
  "San Jose",
  "Santa Ana",
  "Santa Barbara",
  "Santa Clara",
  "Santa Clarita",
  "Santa Cruz",
  "Santa Maria",
  "Santa Rosa",
  "Sarasota",
  "Savannah",
  "Scottsdale",
  "Scranton",
  "Seaside",
  "Seattle",
  "Sebastian",
  "Shreveport",
  "Simi Valley",
  "Sioux City",
  "Sioux Falls",
  "South Bend",
  "South Lyon",
  "Spartanburg",
  "Spokane",
  "Springdale",
  "Springfield",
  "St. Louis",
  "St. Paul",
  "St. Petersburg",
  "Stamford",
  "Sterling Heights",
  "Stockton",
  "Sunnyvale",
  "Syracuse",
  "Tacoma",
  "Tallahassee",
  "Tampa",
  "Temecula",
  "Tempe",
  "Thornton",
  "Thousand Oaks",
  "Toledo",
  "Topeka",
  "Torrance",
  "Trenton",
  "Tucson",
  "Tulsa",
  "Tuscaloosa",
  "Tyler",
  "Utica",
  "Vallejo",
  "Vancouver",
  "Vero Beach",
  "Victorville",
  "Virginia Beach",
  "Visalia",
  "Waco",
  "Warren",
  "Washington",
  "Waterbury",
  "West Covina",
  "West Valley City",
  "Westminster",
  "Wichita",
  "Wilmington",
  "Winston",
  "Winter Haven",
  "Worcester",
  "Yakima",
  "Yonkers",
  "York",
  "Youngstown",
];

var alexGMkey = "AIzaSyB5qaBxYy_INh2PTR1MqPiBOoO__2WRXYs";
var alexYelpkey =
  "U7X8vxnT2SfBqSh9v5o_Ub2WMO3ZPseF5Y2y7mJEHdAO6zh4qBpPAqtq5VuzfYZHbUfD4CxKqmH5x8RqXOVS715K7_u5RRI-ODietUafwxpezU6TzNXsDPYQRwXiYXYx";

// FUNCTIONS
getCityName("Orlando");

function getCityName(city) {
  let rando = city_names[Math.floor(Math.random() * city_names.length - 1)];
  console.log(rando);

  fetch(
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      rando +
      "&key=" +
      alexGMkey,
    {
      method: "GET",
      datatype: "jsonp",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((city) => {
      console.log(city);

      let lat = city.results[0].geometry.location.lat;
      let long = city.results[0].geometry.location.lng;

      // console.log (
      //     `Lat is ${lat}
      //     Long is ${long}`
      // );

      let newCity = city.results[0].formatted_address;
      $("#container").append(newCity);

      initMap(lat, long);
      getParks(lat, long);
      getFood(lat, long);
      getPlaceOfInterest(lat, long);
      getAttractions(lat, long);

      document.getElementById("save-button").onclick = savedCities;

      function savedCities() {
        console.log("Saving City...");
        var citiesList = JSON.parse(window.localStorage.getItem("saved-cities")) || [];
        var newCitiesSaved = {
          city: newCity,
        };

        citiesList.push(newCitiesSaved);
        localStorage.setItem("saved-cities", JSON.stringify(citiesList));
      }
    });
}

const getParks = (lat, long) => {
  let cors = "https://floating-headland-95050.herokuapp.com/";
  let placesUrl =
    cors +
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    long +
    "&radius=50000&count=10&type=park&keyword=hiking&key=" +
    alexGMkey;
  fetch(placesUrl, {
    method: "GET",
    datatype: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.slice(0, 10).forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
      });

      data.results.slice(0, 10).forEach((place) => {
        var name = place.name;
        var rating = "Rating: " + place.rating;
        var address = "Address: " + place.vicinity;
        printResults();

        function printResults() {
          var resultCard = document.createElement("div");
          resultCard.classList.add("card-header");
          resultCard.append(name);
          $("#tester").append(resultCard);
          var cardContent = document.createElement("p");
          cardContent.classList.add("card-internal");
          cardContent.append(rating + "/5");
          $("#tester").append(cardContent);
          var cardAddress = document.createElement("p");
          cardAddress.classList.add("card-internal");
          cardAddress.append(address);
          $("#tester").append(cardAddress);
        }
      });
    });
};

const getFood = (lat, long) => {
  let cors = "https://floating-headland-95050.herokuapp.com/";
  let placesUrl =
    cors +
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    long +
    "&radius=50000&count=10&type=restaurant&minprice=2&maxprice=4&rankby=prominence&key=" +
    alexGMkey;
  fetch(placesUrl, {
    method: "GET",
    datatype: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.slice(0, 10).forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
      });

      data.results.slice(0, 10).forEach((place) => {
        var name = place.name;
        var rating = "Rating: " + place.rating;
        var address = "Address: " + place.vicinity;
        printResults();

        function printResults() {
          var resultCard = document.createElement("div");
          resultCard.classList.add("card-header");
          resultCard.append(name);
          $("#foodcard").append(resultCard);
          var cardContent = document.createElement("p");
          cardContent.classList.add("card-internal");
          cardContent.append(rating + "/5");
          $("#foodcard").append(cardContent);
          var cardAddress = document.createElement("p");
          cardAddress.classList.add("card-internal");
          cardAddress.append(address);
          $("#foodcard").append(cardAddress);
        }
      });
    });
};

const getPlaceOfInterest = (lat, long) => {
  let cors = "https://floating-headland-95050.herokuapp.com/";
  let placesUrl =
    cors +
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    long +
    "&radius=50000&count=10&type=amusement_park&rankby=prominence&key=" +
    alexGMkey;
  fetch(placesUrl, {
    method: "GET",
    datatype: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.slice(0, 10).forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
      });

      data.results.slice(0, 5).forEach((place) => {
        var name = place.name;
        var rating = "Rating: " + place.rating;
        var address = "Address: " + place.vicinity;
        printResults();

        function printResults() {
          var resultCard = document.createElement("div");
          resultCard.classList.add("card-header");
          resultCard.append(name);
          $("#placesofInterest").append(resultCard);
          var cardContent = document.createElement("p");
          cardContent.classList.add("card-internal");
          cardContent.append(rating + "/5");
          $("#placesofInterest").append(cardContent);
          var cardAddress = document.createElement("p");
          cardAddress.classList.add("card-internal");
          cardAddress.append(address);
          $("#placesofInterest").append(cardAddress);
        }
      });
    });
};

const getAttractions = (lat, long) => {
  let cors = "https://floating-headland-95050.herokuapp.com/";
  let placesUrl =
    cors +
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    lat +
    "," +
    long +
    "&radius=50000&count=10&type=tourist_attraction&rankby=prominence&key=" +
    alexGMkey;
  fetch(placesUrl, {
    method: "GET",
    datatype: "jsonp",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.results.slice(0, 10).forEach((place) => {
        new google.maps.Marker({
          position: place.geometry.location,
          map,
          title: place.name,
        });
      });

      data.results.slice(0, 8).forEach((place) => {
        var name = place.name;
        var rating = "Rating: " + place.rating;
        var address = "Address: " + place.vicinity;
        printResults();

        function printResults() {
          var resultCard = document.createElement("div");
          resultCard.classList.add("card-header");
          resultCard.append(name);
          $("#placesofInterest").append(resultCard);
          var cardContent = document.createElement("p");
          cardContent.classList.add("card-internal");
          cardContent.append(rating + "/5");
          $("#placesofInterest").append(cardContent);
          var cardAddress = document.createElement("p");
          cardAddress.classList.add("card-internal");
          cardAddress.append(address);
          $("#placesofInterest").append(cardAddress);
        }
      });
    });
};

function initMap(lat, long) {
  console.log(lat, long);
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: lat, lng: long },
  });
}

var newResults = document.getElementById("new-button");

newResults.addEventListener("click", function () {
  location.reload();
});