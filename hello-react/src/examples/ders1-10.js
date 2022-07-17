//JSX - Javascript XML
var root = document.getElementById('root');

// Ürün Kartı 
const product = {
        name : "Samsung S22",
        price : 30000,
        description : "Çok iyi bir telefon",
        type : ["red","blue","orange","green"]
}

function formatPrice(price){
        return price.price + " TL"
}

function getDescription(description){
        if(description)
                return  <p id="product-desc"> Description: {description}</p>
        else
                return 'No Description' 
}

const upperArr = []
product.type.forEach(element => {
        upperArr.push(element.toUpperCase());
});

var template = 
        <div id="product-details">
                <h2 id="product-name">{product.name ? product.name:"No Name"}</h2>
                {product.price && product.price>0 && <p id='product-price'>Price: {formatPrice(product)}</p>}
                {getDescription(product.description)}
                <p>{product.type.length>0 ? `There are ${upperArr} options` : "No options"}</p>
        <br /><br /><br />
        </div>



// Güncel Saat
function tick() {
        var element = (
                <div>
                        <h2>time is: {new Date().toLocaleTimeString()}</h2>
                </div>
        )
        ReactDOM.render(element, root)
}
setInterval(tick,1000)
