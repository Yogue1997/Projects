const button = document.querySelector('button')
const input = document.getElementById('input')
const output = document.querySelector('h3')
const fullName = document.getElementById('fullName')
const nationality = document.getElementById('nationality')
const birthDate = document.getElementById('birthDate')
const heightWeight = document.getElementById('height&weight')

// let player = []
button.addEventListener('click', () => {
    let usr = input.value
    let url = `https://soccer.sportmonks.com/api/v2.0/players/search/${usr}?api_token=qCpK2kLovUUMFhi04j9a44WsB50cCnzWcy8hcbftMXzOV8iJ2pBIVPQjok3f`
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        let fullN = data.data[0].display_name
        let nat = data.data[0].nationality
        let height = data.data[0].height
        let weight = data.data[0].weight
        let birth = data.data[0].birthdate
        let playerPic = data.data[0].image_path
        
        //
        fullName.innerText = `Name: ${fullN}`
        nationality.innerText = `Nationality: ${nat}`
        heightWeight.innerText = `Height and Weight = ${height} , ${weight}`
        birthDate.innerText = `Birth Date: ${birth}`
        output.innerHTML = `<img src=${playerPic}>`
        
    })
    .catch((error) =>{
        console.log(error);
    })
})






        // let stats = data.image_path
        // output.innerHTML =`<p>${stats} </p>`
        // console.log(stats);
        // console.log(data.data.filter(element => element.display_name.toLowerCase().match('paul')));
        // players = data.data.filter(element => element.display_name.toLowerCase().match('paul'))
        // output.innerText = players[0].display_name
        // output.innerHTML += `<img src='${players[0].image_path}'>`















// const input = document.getElementById('input')
// const button = document.getElementById('button')
// const output = document.querySelector('div')
// button.addEventListener('click', () =>{
//     let breed = input.value//extracting vakue from user
//     const url = `https://dog.ceo/api/breed/${breed}/images/random`

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         let dogPics = data.message
//         output.innerHTML = `<img src=${dogPics} >`
//     })
//     .catch((error) => {
//         console.log(error);
//     })