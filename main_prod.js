const cardContainer = document.querySelector('.card-container')


document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
    const productId = urlParams.get('id')

    cardContainer.innerHTML = ''
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(product => renderProduct(product))

})

function renderProduct(product) {
    const wrapToCard = document.createElement('div')
    wrapToCard.className = 'card-wrap'

    const card = document.createElement('div')
    card.className = 'item-card'

    const cardInfo = document.createElement('div')
    cardInfo.className = 'card-info'

    const img = document.createElement('img');
    img.src = product.images[0];

    img.alt = product.title;
    img.style.maxWidth = '180px';

    const itemText = document.createElement('span')
    itemText.textContent = product.title
    itemText.className = 'item-text'

    const itemPrice = document.createElement('span')
    itemPrice.textContent = 'Цена: ' + product.price
    itemPrice.className = 'item-price'

    const wrapDescription = document.createElement('div')
    wrapDescription.className = 'wrap-descript'

    const itemDescription = document.createElement('div')
    itemDescription.textContent = product.description
    itemDescription.className = 'item-descr'

    const itemDimensions = document.createElement('div')
    itemDimensions.className = 'item-dimensions'
    itemDimensions.textContent = 'Размеры:'
    itemDimensions.style.fontSize = '20px'

    const itemWidth = document.createElement('span')
    itemWidth.textContent = 'Ширина: ' + product.dimensions.width

    const itemHeight = document.createElement('span')
    itemHeight.textContent = 'Длина: ' + product.dimensions.height

    const itemDepth = document.createElement('span')
    itemDepth.textContent = 'Глубина: ' + product.dimensions.depth

    cardInfo.appendChild(img)

    cardInfo.appendChild(itemText)
    cardInfo.appendChild(itemPrice)

    card.appendChild(cardInfo)

    wrapDescription.appendChild(itemDescription)
    wrapDescription.appendChild(itemDimensions)
    wrapDescription.appendChild(itemWidth)
    wrapDescription.appendChild(itemHeight)
    wrapDescription.appendChild(itemDepth)


    wrapToCard.appendChild(card)
    wrapToCard.appendChild(wrapDescription)


    cardContainer.appendChild(wrapToCard)
}
