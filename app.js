const submit = document.querySelector('.btn')
const celcius = document.querySelector(".celcius")
const fahrenheit = document.querySelector(".fahrenheit")
const kelvin = document.querySelector(".kelvin")
const weather_image = document.querySelector('.weather_image')


let lastEdit = 'celcius'

const updateLastEdit = () => {
    celcius.addEventListener('keyup', (e) => {
        lastEdit = 'celcius'
    })

    fahrenheit.addEventListener('keyup', (e) => {
        lastEdit = 'fahrenheit'
    })

    kelvin.addEventListener('keyup', (e) => {
        lastEdit = 'kelvin'
    })
}
updateLastEdit()

const updateImage = (temp) => {
    if(temp < -10){
        weather_image.setAttribute('src', conditionImage.superCold)
    }else if(temp >= -10 && temp <= 0){
        weather_image.setAttribute('src', conditionImage.extraCold)
    }else if(temp > -10 && temp <= 0){
        weather_image.setAttribute('src', conditionImage.cold)
    }else if(temp > 0 && temp <= 15){
        weather_image.setAttribute('src', conditionImage.normalCold)
    }else if(temp > 15 && temp <= 25){
        weather_image.setAttribute('src', conditionImage.normal)
    }else if(temp > 25 && temp <= 35){
        weather_image.setAttribute('src', conditionImage.sunny)
    }else if(temp > 35 && temp < 1000){
        weather_image.setAttribute('src', conditionImage.desert)
    }else if(temp >= 1000){
        weather_image.setAttribute('src', conditionImage.lava)
    }
}

const convert = (lastEdited) => {
    if(lastEdited === 'celcius') {
        const fVlue = (parseFloat(celcius.value) * 9 / 5) + 32
        const kVlue = parseFloat(celcius.value) + 273

        fahrenheit.value = Math.floor(fVlue) + ' °F'
        kelvin.value = Math.floor(kVlue) + ' K'
        
    }else if(lastEdited === 'fahrenheit'){
        const cVlue = (parseFloat(fahrenheit.value) - 32) * 5/9
        const kVlue = (parseFloat(fahrenheit.value) - 32) * 5/9 + 273

        celcius.value = Math.floor(cVlue) + ' °C'
        kelvin.value = Math.floor(kVlue) + ' K'

    }else if(lastEdited === 'kelvin'){
        const cVlue = parseFloat(kelvin.value) - 273
        const fVlue = (parseFloat(kelvin.value) - 273.15) * 9/5 + 32

        celcius.value = Math.floor(cVlue) + ' °C'
        fahrenheit.value = Math.floor(fVlue) + ' °F'   
    }
}

submit.addEventListener('click', () => {
    convert(lastEdit)
    let temp = 0
    if(lastEdit === 'celcius') {
        temp = celcius.value
    }else if(lastEdit === 'fahrenheit'){
        temp = (parseFloat(fahrenheit.value) - 32) * 5 / 9
    }else if(lastEdit === 'kelvin'){
        temp = parseFloat(kelvin.value) - 273
    }
    updateImage(temp)
})

