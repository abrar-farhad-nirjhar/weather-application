const call = new API()
const ui = new UI()



document.getElementById('enter').addEventListener('click', (event)=>{
    event.preventDefault()

    city = document.getElementById('city').value

    call.getData(city).then(data=>{
        console.log(data.weather[0].icon)

        const iconcode = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        console.log(iconcode)
        ui.setIcon(iconcode)

        ui.setInfo(data)

        console.log(data)
    })
})


