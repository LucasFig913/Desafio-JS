document.addEventListener('DOMContentLoaded', () => {

fetch('https://api.punkapi.com/v2/beers/5')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data)
    const name = data[0].name
    console.log(name)
    const description = data[0].description
    const volume = data[0]
    const volumeValue = volume.value
    const volumeUnit = volume.unit
    
})

})

