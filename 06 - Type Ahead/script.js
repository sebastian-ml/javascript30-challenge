const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

async function fetchCities(endpoint) {
    const cities = await fetch(endpoint);

    return cities.json();
}

function filterCities(cityList, stringToFind) {
    stringToFind = stringToFind.toLowerCase();

    return cityList.filter(city => (
        city.city.toLowerCase().includes(stringToFind)
    ));
}

function renderCities(cityList, parentElement) {
    const htmlList = cityList.map(city => {
        return (`
            <li>
                <span class="name">${city.city}</span>
                <span class="population">${city.population}</span>
            </li>
        `)
    })

    parentElement.innerHTML = htmlList.join('');
}

const cities = fetchCities(endpoint);
cities.then(citiesList => {
    input.addEventListener('keyup', function() {
        const pressedKeyChar = this.value;
        const filteredCities = filterCities(citiesList, pressedKeyChar);

        renderCities(filteredCities, suggestions);
    })
})

