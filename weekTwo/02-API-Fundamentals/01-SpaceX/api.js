const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');
const vroom = document.querySelector('ul ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();
    fetch(baseURL)
    .then(result => {
        return result.json();
    })
    .then(json => {
        displayRockets(json);
    })
}

function displayRockets(json) {
    let rockets = json.forEach(r => {
        let rocket = document.createElement('li');
        let firstFlight = document.createElement('li');
        let rocketEngine = document.createElement('li');
        rocket.innerText = r.name;
        firstFlight.innerText = r.first_flight;
        rocketEngine.innerText = r.engines.type;
        spaceShips.appendChild(rocket);
        spaceShips.appendChild(firstFlight);
        vroom.appendChild(rocketEngine);
    })
}