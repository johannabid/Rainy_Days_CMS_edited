const apiBase = "http://rainy-days-v2.local";
const wooCommerceBase  ="/wp-json/wc/store"; 
const productsBase = "/products"; 

const idBase = "/${id}";
const idSpecificBase = "/20"; // + "/18" + "/16" + "/14" + "/12" ;

const featuredBase = "/?&featured=true";
const pageBase = "/wp-json/wp/v2/pages";

const fullPagesURL = apiBase + pageBase;
const fullProductURL = apiBase + wooCommerceBase + productsBase;
const fullProductURLExample = "http://rainy-days-v2.local/wp-json/wc/store/products";

const productFrame= document.querySelector(".product_container_all");

// TASK 1
async function fetchProducts() {
    const response = await fetch (fullProductURL);
    const products = await response.json();
    return products
}

// TASK 2
async function fetchSingleProduct(id) { 
    const response = await fetch (fullProductURL + idSpecificBase); 
    const product = await response.json();
    return product
}

// TASK 3

async function renderSingleProductHTML(product) {
    const {id, name, description} = product;
    const wrapper = document.createElement("a"); 
    const heading = document.createElement("h2");
    const body = document.createElement("p");
    wrapper.href = `?id=${id}`;
    heading.innerText = name;
    body.innerText = description;
    wrapper.append(heading, body); 
    return wrapper;
}

// const response = await fetch(fullProductURL);
// const products = await products.json();

async function renderProducts() {
    const products = await fetchProducts();
    console.log(products)
    productFrame.innerHTML =''; 
    products.forEach(product => {
        // console.log (productFrame);
        // productContainerAll.append(domItem)
        console.log({product})
        const domItem = renderSingleProductHTML(product);
        productFrame.append(domItem);
    })
}

// 
    // fetchProducts();
    // fetchSingleProduct();
renderProducts();

