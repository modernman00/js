import { removeDiv, createAndAppendElement } from '../helper/general'
import { id, log } from '../global'

export const pictures = (el) => {



  const html = `
  <button type="button" id="likeButton${el.post_no}" name="${el.post_no}"
    class="w3-button w3-tiny w3-green w3-margin-bottom">
    <em class="fa fa-thumbs-up"></em>
     Like <b><span class="likeCounter" id="likeCounter${el.post_no}">${el.post_likes}</span></b>
  </button>

  <button type="button" id="initComment${el.post_no}"
    class="w3-button w3-tiny w3-theme-d2 w3-margin-bottom"><em class="fa fa-comment"></em> Comment </button>
`
  createAndAppendElement('div', 'postItButton', 'messagePost', 'postItButton')

  id('postItButtons').insertAdjacentHTML('beforeend', html)

}

const name = (fullName) => {
  return `<h5 id="fullName"> ${fullName}</h5>`
}

const timing = (postedAt) => {
  return `<span class="w3-right w3-opacity"> ${postedAt} ago</span>`
}

// showComment = () => {

// }


const nameImgTiming = (data) => {

  const img = (data.img) ? `/img/profile/${data.img}` : "/avatar/avatarF.png"
  return `<a href="/profilepage/img?dir=img&pics=${data.img}&pID=${data.post_no}&path=profile">
        <img src=${img} alt="img" class="w3-left w3-circle w3-margin-right" style="width:60px">
        </a>
        ${timing(data.timing)} ${name(data.fullName)}`
}

const commentForm = (data) => {
  return ` <p id="formComment${data.post_no}_notification"></p>

  <form action="/postCommentProfile" method="post" id="formComment${data.post_no}" style="display:none" enctype="multipart/form-data">

    <input name='post_no' type="hidden" name="${data.post_no}" value=${data.post_no} />

    <input class="w3-input w3-border w3-round-large inputComment" type="text" placeholder="Write a comment"
      id="inputComment${data.post_no} " name='comment'>

    <br>

    <button type='submit' id="submitComment${data.post_no}" class="w3-button w3-green submitComment">Submit</button>
  </form>`
}

// const postImg = () => {

// }

const button = (data) => {
  return `<button type="button" id="likeButton${data.post_no}" name="${data.post_no}"
    class="w3-button w3-tiny w3-green w3-margin-bottom">
    <em class="fa fa-thumbs-up"></em>
     Like <b><span class="likeCounter" id="likeCounter${data.post_no}">${data.post_likes}</span></b>
  </button>
   <button type="button" id="initComment${data.post_no}"
    class="w3-button w3-tiny w3-theme-d2 w3-margin-bottom"><em class="fa fa-comment"></em> Comment </button>
    `
}

const showPostImg = (data) => {

  var postImg = []
  for (let i = 0; i < 6; i++) {
    let images = 'post_img' + i
    if (data[images]) {
      postImg.push(data[images])
    }
  }

  const picsImgHtml = (imgElement, i, postNo) => {
    return `<a href="/profilepage/img?dir=img&pics=${imgElement}&pID=${postNo}&path=post"> <div class="w3-half">
        <img src="/img/post/${imgElement}" style="width:100%" alt="images${i}"
          class="w3-margin-bottom w3-hover-sepia" id="postImage${i}">
      </div>
    </a>`
  }

  return `<div class="w3-row-padding" style="margin:0 -16px">

  ${postImg.map((pics, i) => {
    return picsImgHtml(pics, i, data.post_no)
  }
  )}
    <br>
  </div>`

}

export const allPost = (el) => {

  if (el) {

    const html = `<div class="w3-container w3-card w3-white w3-round w3-margin"><br>

      ${nameImgTiming(el)}

    <hr class="w3-clear">

    <p class="postFont"> ${el.postMessage} </p>

     ${showPostImg(el)}

    ${button(el)}

    ${commentForm(el)}
  <br><br>`


    // the function to be activated

    createAndAppendElement('div', 'postIt', 'messagePost', 'postIt')

    id('postIt').insertAdjacentHTML('beforeend', html)

  } else {

    return `<p> Sorry, we could find the data</p>`

  }
}