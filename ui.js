class UI{
    constructor(){
        this.icon_area = "icon"
        this.info_area = "info"
    }

    setIcon(icon){

        document.getElementById('icon').innerHTML = `
            <img src=${icon} alt="icon" width="100px"/>
        
        `

    }

    setInfo(data){

        const iconcode = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

        document.getElementById('info').innerHTML = `
             Description : ${data.weather[0].description}  Temperature: ${data.main.temp} Celsius

        `
    }
}