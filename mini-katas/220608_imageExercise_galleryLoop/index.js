// 1. create an array that holds all images
// 2. on click: increase the imgNum count, so the next image is displayed
// 3. if we reach the last image, we will show the first image again

const imageCollection = ['image1.jpg','image2.jpg','image3.jpg']

const shownImage = document.querySelector('.shown-image')

let imgNum = 0


shownImage.addEventListener('click', () => {

    imgNum++

    if (imgNum == imageCollection.length) {
        imgNum = 0
    }

    shownImage.setAttribute('src', `images/${imageCollection[imgNum]}`)
    
})

    /*for (let imgNum = 0; imgNum < imageCollection.length; imgNum++) {
        
        shownImage.addEventListener('click', () => {

        console.log('äghi')

        if (imgNum == imageCollection.length) {
            imgNum = 0
        }

        shownImage.setAttribute('src', `images/${imageCollection[imgNum]}`)
    
    })
}*/

