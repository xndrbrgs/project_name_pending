
function retrieveCities () {
    var scoresList = JSON.parse(window.localStorage.getItem("saved-cities")) || [];

    scoresList.forEach(function(score) {
        var listEl = document.createElement("li");
        listEl.textContent = score.city;
        listEl.classList.add('city-display');

        var ordListEl = document.getElementById("cities");
        ordListEl.appendChild(listEl);
    });
}

document.getElementById('clear-button').onclick = clearCities;

function clearCities () {
    window.localStorage.removeItem("saved-cities");
    window.location.reload();
}

var newResults = document.getElementById("new-button");

newResults.addEventListener("click", function () {
  location.reload();
});

retrieveCities();