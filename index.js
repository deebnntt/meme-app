let memeDiv
let likeDiv
let newDiv
let commentDiv

window.onload = function() {
  getMeme()
}

function getMeme() {
  fetch('https://api.imgflip.com/get_memes')
  .then( res => res.json())
  .then( json => displayMeme(json))

}


function displayMeme(json) {
  memeDiv = document.getElementById('meme-div')

  let randomI = Math.ceil(Math.random() * 100)

  memeDiv.innerHTML=`<img src="${json.data.memes[randomI].url}" width="500">`

  let caption = document.createElement('h1')
  caption.innerHTML = `${json.data.memes[randomI].name}`
  memeDiv.appendChild(caption)
  caption.setAttribute("id", "caption")

  let captionHeading = document.createElement('h2')
  captionHeading.innerText = "Write your caption here:"
  memeDiv.appendChild(captionHeading)

  let captionForm = document.createElement('form')
  let captionInput = document.createElement('input')
  let captionSubmit = document.createElement('input')
  captionSubmit.setAttribute("type", "submit")
  captionInput.setAttribute("id", "user-caption")

  captionForm.appendChild(captionInput)
  captionForm.appendChild(captionSubmit)
  memeDiv.appendChild(captionForm)

  captionForm.addEventListener('submit', e => {
    e.preventDefault()
    let userCaption = captionInput.value
    caption.innerHTML = userCaption
    captionInput.value = ""
})

  commentDiv = document.getElementById('comment-div')

  let commentHeading = document.createElement('h2')
  commentHeading.innerText = "Leave your comments here:"
  commentDiv.appendChild(commentHeading)

  let commentForm = document.createElement('form')
  let commentInput = document.createElement('input')
  let commentSubmit = document.createElement('input')
  commentSubmit.setAttribute("type", "submit")
  commentInput.setAttribute("id", "user-comment")

  commentForm.appendChild(commentInput)
  commentForm.appendChild(commentSubmit)
  commentDiv.appendChild(commentForm)

  commentForm.addEventListener('submit', e => {
    e.preventDefault()
    let commentList = document.createElement("ul")
    commentDiv.appendChild(commentList)
    let userComment = commentInput.value
    let li = document.createElement('li')
    commentList.appendChild(li)
    li.innerText = userComment
    commentInput.value = ""
  })
  let newDiv = document.getElementById('new-div')
  let newMemeButton = document.createElement('button')
  newMemeButton.innerText = "Generate New Meme"
  newDiv.appendChild(newMemeButton)
  newMemeButton.addEventListener('click', e => {
    location.reload();
  })

  likeDiv = document.getElementById('like-div')

  let count = 0
    let likeCount = document.createElement('h1')
    let likeButton = document.createElement('button')
    likeCount.innerText = count
    likeButton.innerText = "❤️"
    likeDiv.appendChild(likeCount)
    likeDiv.appendChild(likeButton)

    likeButton.addEventListener('click', () => {
      likeCount.innerText = ++count
    })

}
