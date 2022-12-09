


window.addEventListener('DOMContentLoaded',()=>{
    axios.get('http://localhost:4000/orders')
    .then(response=>{
        console.log(response.data)
       
    })
})