const apiBase = "http://playground.local";
// vertsnavnet
// den er delt opp for å lettere kunne få tilgang til de utallige endepunktene
const wooCommerceBase  ="/wp-json/wc/store";
// en del av "stien"
const productsBase = "/products";
// grunnen til at man splitter opp linken er for at den lettere kan brukes om

const pageBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pageBase;
const fullProductURL = apiBase + wooCommerceBase + productsBase;
// oppsplittingen av kode gjør den mer fleksibel

//async tillater oss å vente til at funksjonen/oppgaven er gjennomført før koden løper videre
// linje 18 er som en kontrakt med betingelsen om å vente før man henter informasjon - jeg lover å gi deg informasjonen når ønske er tilredstilt 
// når ønsket er tilfredstilt får du respons = const response

// DATAFUNKSJON
async function getProducts() {
    const response = await fetch (fullProductURL);

    const products = await response.json();

    return products
}

// RENDERFUNKSJONER / INNLASTNINGSFUNKSONER?
function createProductHTML (product) {
    const container = document.querySelector(".product_container");

    const productContainer = document.createElement("div");
    productContainer.classList.add("product"); 
    productContainer.id = product.id;

    const title = document.createElement ("h3");
    title.innerText = product.name;
    productContainer.append(title)

    for (let i= 0; i < product.images.length; i++) {
        const imgData = product.images[i];
        const img = document.createElement("img");
        img.src = imgData.src;
        img.alt = imgData.alt;
        img.style = imgData.style="max-width: 300px";
        productContainer.append(img)
    }

    container.append(productContainer)

}

function createProductsHTML (products) {
    for (let i=0; i < products.length; i++) {
        const product = products[i];
        createProductHTML(product)
    }
}

// NARRATIVFUNKSJON
async function productPage () {
   const products = await getProducts() 
   createProductsHTML (products)
}

productPage()

const product = document.querySelector(".product_container"); 

productContainer.addEventListener("click", addNew);

function addNew() {
    const newDiv = document.createElement("div");
    console.log("add");
}