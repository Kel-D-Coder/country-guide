const input = document.querySelector('input')
const searchBtn = document.querySelector('button')
const detailContainer = document.querySelector('.detail-container')

async function getData(countryName) {
    const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)

    display(res.data[0])
}

function display(info) {
    document.querySelector('h3').textContent = info.name.common
    document.querySelector('.capital').textContent = info.capital[0]
    document.querySelector('.region').textContent = info.region
    document.querySelector('.subregion').textContent = info.subregion
    document.querySelector('.language').textContent = `${Object.values(info.languages)[0]}`
    document.querySelector('.currency').textContent = `${Object.values(info.currencies)[0].name} (${Object.values(info.currencies)[0].symbol})`
    document.querySelector('.population').textContent = info.population
    document.querySelector('img').src = `${info.flags.png}`
}


searchBtn.addEventListener('click', () => {
    getData(input.value)
    input.value ? detailContainer.style.display = 'block' : null
})