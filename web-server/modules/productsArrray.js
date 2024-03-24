module.exports = (tempcard, product) => {
    let output = tempcard.replace(/{%PRODUCT_NAME%}/g, product.title)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%RATING%}/g, product.rating)
    output = output.replace(/{%IMAGE%}/g, product.images[0])
    output = output.replace(/{%ID%}/g, product.id)
    return output
}