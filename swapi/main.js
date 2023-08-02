let getHomies = document.querySelector('button')
const baseURL ='https://swapi.dev/api'
function logs(){
    console.log('button clicked')
    axios
    .get(baseURL + '/planets/2')
    .then((res) => {
        console.log(res)
        res.data.residents.forEach((peeps) =>{
            axios.get(peeps)
            .then((res) => {
                console.log(res.data)
            const thing = document.createElement('h2')
            thing.textContent = res.data.name
            document.body.appendChild(thing)
            })
        })
      })
}
getHomies.addEventListener('click', logs)