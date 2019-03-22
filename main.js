let call = new API()




document.getElementById('enter').addEventListener('click', (event)=>{
    event.preventDefault()

    city = document.getElementById('city').value

    call.getData(city).then(data=>{
        console.log(data)
    })
})


