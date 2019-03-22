class API{
    constructor(){
        this.URL = "http://api.openweathermap.org/data/2.5/weather?q="
        this.secondPart = "&APPID=4bb0c6131e11ccf37ea335b4241371d2"
    }


    async getData(city){

        let response = await fetch(this.URL+city+this.secondPart)

        const data = response.json()

        return data

    }
}