/* 
1. create an array that holds all images
2. on click: increase(decrease) the imgNum count, so the next(previous) image is displayed
3. if we reach the last image, we will show the first image again
4. if we reach the first image, we will show the last image
5. otherwise change image automatically every 5 seconds
6. positioning caption
6. dynamically show image titles based on object
*/

const imageCollection = [
    {
        image: 'image1.jpg',
        title: 'beach'
    },
    {
        image: 'image2.jpg',
        title: 'forest'
    },
    {
        image: 'image3.jpg',
        title: 'snow mountains'
    }
]

const shownImage = document.querySelector('.shown-image')
const navigationElements = document.querySelectorAll('.navigation')
const imageCaption = document.querySelector('.caption')
imageCaption.innerHTML = `${imageCollection[0].title}`

let imgNum = 0

let seconds = 5000

const changeImage = (direction) => {
   
    if (direction==="next") {
        imgNum++
    }

    if (direction==="previous") {
        imgNum--
    }

    if (imgNum == imageCollection.length) { // when reaching last image: condition to move from last image of array to first again 
        imgNum = 0
    }

    if (imgNum < 0) { // when reaching first image: condition to move from first image to last
        imgNum = 2
    }

    

    shownImage.setAttribute('src', `images/${imageCollection[imgNum].image}`)
    imageCaption.innerHTML = `${imageCollection[imgNum].title}`

}

navigationElements.forEach(element => {
    element.addEventListener('click', () => {
        changeImage(event.target.id)
        seconds = 5000
    })
})


// setInterval(changeImage, seconds, "next")

