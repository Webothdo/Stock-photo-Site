let imgContainer = document.querySelector('.image-container')
let loadMoreBtn = document.querySelector('.load-more')

let page = 1

loadMoreBtn.addEventListener('click', () => {
    page += 1
    showPhoto()
})

async function getPhoto(pagination) {
    try {
        let response = await fetch(`https:picsum.photos/v2/list?page=${pagination}`)
        let data = await response.json()
        return data
    } catch (error) {
        
    }

}

async function showPhoto() {
    let images = await getPhoto(page)

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        let myImage = document.createElement('img')
        myImage.setAttribute('src', image.download_url)

        imgContainer.appendChild(myImage)

    }
}

showPhoto()
