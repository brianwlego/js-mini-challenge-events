/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
  addNewLike()
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}
const header = document.querySelector("h1#header")
header.addEventListener('mouseover', function(e){
  e.target.style.cursor = "pointer"
})
header.addEventListener('click', function(e){
  toggleColor(header)
})

/***** Deliverable 2 *****/
const form = document.getElementById('new-player-form')
form.addEventListener('submit', function(e){
  e.preventDefault()
  const inputNum = form.number.value, inputNickname = form.nickname.value, inputName = form.name.value, inputPhoto = form.photo.value
  
  const newPlayer = {number: inputNum, name: inputName, nickname: inputNickname, photo: inputPhoto, likes: 0}
  
  renderPlayer(newPlayer)

})

/***** Deliverable 3 *****/
function addNewLike(){
  const likeBtn = document.getElementsByClassName('like-button')
  const array = Array.from(likeBtn)
  array.forEach(function(like){
      like.addEventListener('click', function(e){
      let likeNum = e.target.parentElement.getElementsByClassName('likes')[0].innerHTML
      likeNum.replace("likes ", "")
      likeNum = parseInt(likeNum, 10)
      e.target.parentElement.getElementsByClassName('likes')[0].innerHTML = (likeNum + 1)
    })
  })
}

// function like(player){
//   const likeBtn = document.querySelector(`div.like-button[data-number='${player.number}'`)


// }