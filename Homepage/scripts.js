const products = [
    {
        id: 1,
        name: "KFC",
        priceDisplay: "100฿",
        type: "view",
        type1: "add",
        isSale: true,
        img: ""
    },
    {
        id: 2,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

    {
        id: 3,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

    {
        id: 4,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

    {
        id: 5,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

    {
        id: 6,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

    {
        id: 7,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

    {
        id: 8,
        name: "McDonald's",
        priceDisplay: "150฿",
        type: "view",
        type1: "add",
        isSale: false,
        img: "https://cms.dmpcdn.com/trueyoumerchant/2025/01/08/d3fccb90-cd8c-11ef-9053-432c04a5d891_webp_original.webp"
    },

];

function renderProducts(data = products){
    const container = document.getElementById('product-container');
    container.innerHTML = ""; // ล้างข้อมูลเก่า

    data.forEach(p => {
        const sale = p.isSale ? `<div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>` : "";

        const button = p.type === "view"? `<a class="btn btn-outline-dark mt-auto" href="#">View Details</a>` :"";
            
        const buttonAdd = p.type1 === "add" ? `<a class="btn btn-outline-dark mt-auto" href="#" onclick="addToCart(${p.id})">Add to cart</a>` : "";

        const cardHTML = `
            <div class="col mb-5">
                <div class="card h-100">
                    ${sale}
                    <img class="card-img-top" src="${p.img}" alt="${p.name}" />
                    <div class="card-body p-4">
                        <div class="text-center">
                            <h5 class="fw-bolder">${p.name}</h5>
                            ${p.priceDisplay}
                        </div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">${button}</div>
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">${buttonAdd}</div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function searchProduct(){
    const keyword = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(item => item.name.toLowerCase().includes(keyword));
    renderProducts(filtered);
}

//Ai Search
renderProducts();