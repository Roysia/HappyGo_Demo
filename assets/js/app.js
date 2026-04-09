let currentLang = 'en';
let currentIndustry = 'donut';
let cart = []; // { id, name, price, qty, tag }

// ===== TRANSLATIONS =====
const translations = {
    en: {
        title: "HappyGo | One-Stop Packaging Procurement",
        heroBadge: "Industrial Compostable & Sustainable",
        heroDesc: "From coastal inspiration to industrial reality. We provide pre-verified, one-stop packaging solutions that actually work for your business and the planet.",
        heroCta: "Browse Essentials",
        heroSecondary: "How it works →",
        statLabel: "Curated SKUs per shop type",
        navProducts: "Products",
        navHow: "How It Works",
        navWhy: "Why HappyGo",
        navCustom: "Custom Order",
        loginBtn: "Login",
        cartBtn: "Order",
        cartTitle: "Your Order",
        cartEmpty: "No items yet. Browse products and add to order.",
        cartSubmit: "Submit Inquiry →",
        cartNote: "Our team will follow up within 24 hours.",
        gridTitle: "Essentials Selection",
        stockStatus: "● US Stock · 7-Day Delivery",
        certSubtitle: "All products meet FSC and BPI compostable standards.",
        addBtn: "Add",
        addedBtn: "Added ✓",
        priceSuffix: "/unit",
        moqLabel: "MOQ",
        customTitle: "Need a specific size or spec?",
        customDesc: "Our team handles fully custom orders — from dieline design to certified production.",
        customBtn: "Request Custom Order →",
        howTitle: "Ordering in 3 Steps",
        howDesc: "From browse to delivery — designed for busy shop owners.",
        step1Title: "Choose Your Shop Type",
        step1Desc: "Select your business category. We instantly show only the packaging relevant to you — no irrelevant SKUs cluttering your view.",
        step2Title: "Pick & Set Quantities",
        step2Desc: "Add items to your order list with your desired quantity. All certifications and specs are pre-verified and shown upfront.",
        step3Title: "Ship in 7 Days",
        step3Desc: "We ship from US stock. Most orders arrive within 7 business days. Need custom printing? Our team will follow up directly.",
        whyTitle: "Why HappyGo",
        whyDesc: "We solve the problems that traditional packaging distributors don't.",
        why1Title: "Curated, Not Overwhelming",
        why1Desc: "We pre-select 20 essential SKUs per shop type. You'll never scroll through 200,000 irrelevant products again.",
        why2Title: "Pre-Verified Certifications",
        why2Desc: "Every product is verified for FSC, BPI, FDA, and PFAS-free status before it appears on our platform. You buy with confidence.",
        why3Title: "Sustainable by Default",
        why3Desc: "All products are compostable, recyclable, or plant-based. Going green has never been this easy for your shop.",
        why4Title: "Custom When You Need It",
        why4Desc: "Ready-to-ship products cover 80% of your needs. For the rest, our custom order team handles everything from design to delivery.",
        footerTagline: "One-stop sustainable packaging\nfor independent food businesses.",
        footerShop: "Shop",
        footerDonut: "Donut Shop",
        footerCafe: "Coffee Shop",
        footerSushi: "Sushi Bar",
        footerBakery: "Bakery",
        footerBubbleTea: "Bubble Tea",
        footerCompany: "Company",
        footerAbout: "About Us",
        footerSustain: "Sustainability",
        footerCerts: "Certifications",
        footerCustom: "Custom Orders",
        footerSupport: "Support",
        footerContact: "Contact Us",
        footerFaq: "FAQ",
        footerShipping: "Shipping Info",
        footerReturns: "Returns",
        footerPowered: "Powered by InnoRhino Group",
        indDonut: "Donut Shop",
        indCafe: "Coffee Shop",
        indSushi: "Sushi Bar",
        indBakery: "Bakery",
        indBubble: "Bubble Tea",
        industries: { donut: "Donut Shop", cafe: "Coffee Shop", sushi: "Sushi Bar", bakery: "Bakery", "bubble-tea": "Bubble Tea" }
    },
    zh: {
        title: "HappyGo | 一站式外帶包裝採購專區",
        heroBadge: "工業級可堆肥與永續方案",
        heroDesc: "從海灘垃圾的警示，到落實工業級環保。我們提供經預先驗證的一站式包材方案，兼顧商業運營與環境責任。",
        heroCta: "瀏覽精選品項",
        heroSecondary: "了解流程 →",
        statLabel: "每種店型精選 SKU 數量",
        navProducts: "商品",
        navHow: "採購流程",
        navWhy: "為何選擇我們",
        navCustom: "訂製詢問",
        loginBtn: "登入",
        cartBtn: "採購單",
        cartTitle: "您的採購單",
        cartEmpty: "尚未加入商品，瀏覽後即可加入採購單。",
        cartSubmit: "送出詢價 →",
        cartNote: "我們的團隊將在 24 小時內與您聯繫。",
        gridTitle: "必備精選商品",
        stockStatus: "● 美國現貨供應 · 7天到貨",
        certSubtitle: "全線產品符合 FSC 森林認證與 BPI 可堆肥驗證",
        addBtn: "加入",
        addedBtn: "已加入 ✓",
        priceSuffix: "/個",
        moqLabel: "最低訂量",
        customTitle: "需要特定規格或尺寸？",
        customDesc: "我們的團隊承接全流程客製訂單，從版型設計到認證生產一手包辦。",
        customBtn: "訂製詢問 →",
        howTitle: "3 步驟完成採購",
        howDesc: "從瀏覽到出貨，專為忙碌的店主設計。",
        step1Title: "選擇您的店型",
        step1Desc: "選擇您的業別，系統立即呈現只與您相關的包裝品項，不會看到不相關的產品。",
        step2Title: "選品並設定數量",
        step2Desc: "將所需商品加入採購單並填寫數量，所有認證與規格均已預先驗證並清楚標示。",
        step3Title: "7 天快速出貨",
        step3Desc: "從美國現貨倉出貨，多數訂單 7 個工作天內送達。需要客製印刷？我們的團隊將直接與您跟進。",
        whyTitle: "為何選擇 HappyGo",
        whyDesc: "我們解決傳統包裝經銷商無法解決的問題。",
        why1Title: "精選，而非讓你選擇困難",
        why1Desc: "每種店型我們只精選 20 個核心 SKU，您再也不需要從 20 萬個不相關品項中大海撈針。",
        why2Title: "預先驗證所有認證",
        why2Desc: "每樣商品在上架前均已完成 FSC、BPI、FDA 及無 PFAS 的驗證，讓您安心採購。",
        why3Title: "永續材質為預設選項",
        why3Desc: "所有商品均為可堆肥、可回收或植物基材質，讓您的店家輕鬆實踐環保。",
        why4Title: "需要訂製時我們支援",
        why4Desc: "現貨商品可滿足您 80% 的需求，其餘部分由我們的客製團隊從設計到出貨全程處理。",
        footerTagline: "獨立餐飲店的一站式\n永續包裝採購平台",
        footerShop: "商品分類",
        footerDonut: "甜甜圈店",
        footerCafe: "咖啡廳",
        footerSushi: "壽司店",
        footerBakery: "烘焙坊",
        footerBubbleTea: "手搖飲店",
        footerCompany: "關於我們",
        footerAbout: "品牌故事",
        footerSustain: "永續承諾",
        footerCerts: "認證說明",
        footerCustom: "客製服務",
        footerSupport: "客服支援",
        footerContact: "聯絡我們",
        footerFaq: "常見問題",
        footerShipping: "配送說明",
        footerReturns: "退換貨政策",
        footerPowered: "由 InnoRhino Group 提供支持",
        indDonut: "甜甜圈店",
        indCafe: "咖啡廳",
        indSushi: "壽司店",
        indBakery: "烘焙坊",
        indBubble: "手搖飲店",
        industries: { donut: "甜甜圈店", cafe: "咖啡廳", sushi: "壽司店", bakery: "烘焙坊", "bubble-tea": "手搖飲店" }
    }
};

// ===== PRODUCT DATA =====
const productsData = {
    donut: {
        en: [
            { id: 1, name: "12-Count Donut Box", desc: "High-strength corrugated paper, perfect topping protection.", price: "$0.45", tag: "FSC Certified", moq: "500 pcs", img: "./assets/images/donut_box.png" },
            { id: 2, name: "6-Count Window Box", desc: "Clear window design for maximum product visibility.", price: "$0.32", tag: "BPI Compostable", moq: "1,000 pcs", img: "./assets/images/donut_box.png" },
            { id: 3, name: "12oz Double-Wall Coffee Cup", desc: "Premium heat insulation, no sleeve needed.", price: "$0.18", tag: "FSC Certified", moq: "1,000 pcs", img: "./assets/images/coffee_cups.png" },
            { id: 4, name: "Grease-Proof Donut Wrap", desc: "Advanced oil-resistant coating, keeps packaging clean.", price: "$0.05", tag: "PFAS Free", moq: "2,000 pcs", img: "./assets/images/donut_box.png" },
        ],
        zh: [
            { id: 1, name: "12 入甜甜圈盒", desc: "高強度瓦楞紙，完美保護糖霜與裝飾。", price: "$0.45", tag: "FSC 認證", moq: "500 個", img: "./assets/images/donut_box.png" },
            { id: 2, name: "6 入透明開窗禮盒", desc: "透明開窗設計，提升商品展示視覺。", price: "$0.32", tag: "BPI 可堆肥", moq: "1,000 個", img: "./assets/images/donut_box.png" },
            { id: 3, name: "12oz 雙層隔熱紙杯", desc: "頂級隔熱設計，無需加裝杯套。", price: "$0.18", tag: "FSC 認證", moq: "1,000 個", img: "./assets/images/coffee_cups.png" },
            { id: 4, name: "防油甜甜圈包裝紙", desc: "強力防油塗層，保持包裝乾淨整潔。", price: "$0.05", tag: "無 PFAS", moq: "2,000 個", img: "./assets/images/donut_box.png" },
        ]
    },
    cafe: {
        en: [
            { id: 5, name: "16oz Double-Wall Paper Cup", desc: "Premium heat insulation, no sleeve required.", price: "$0.22", tag: "FSC Certified", moq: "500 pcs", img: "./assets/images/coffee_cups.png" },
            { id: 6, name: "Plant-Based Cold Straw", desc: "Designed for cold drinks — durable, no softening.", price: "$0.03", tag: "Biodegradable", moq: "5,000 pcs", img: "./assets/images/coffee_cups.png" },
            { id: 7, name: "4-Cup Kraft Carry Tray", desc: "Reinforced kraft board, handles 4-cup takeout.", price: "$0.25", tag: "Recycled", moq: "500 pcs", img: "./assets/images/donut_box.png" },
            { id: 8, name: "Flat White Lid (Sip-Through)", desc: "Secure fit for 12oz/16oz cups, no-spill design.", price: "$0.04", tag: "BPI Compostable", moq: "2,000 pcs", img: "./assets/images/coffee_cups.png" },
        ],
        zh: [
            { id: 5, name: "16oz 雙層隔熱紙杯", desc: "頂級防燙設計，無需加裝杯套。", price: "$0.22", tag: "FSC 認證", moq: "500 個", img: "./assets/images/coffee_cups.png" },
            { id: 6, name: "植萃冷飲吸管", desc: "冷飲專用，耐用且不軟化。", price: "$0.03", tag: "生物可降解", moq: "5,000 支", img: "./assets/images/coffee_cups.png" },
            { id: 7, name: "牛皮紙四杯裝提籃", desc: "加強承重設計，適合外送組合。", price: "$0.25", tag: "環保再生", moq: "500 個", img: "./assets/images/donut_box.png" },
            { id: 8, name: "平口防漏杯蓋", desc: "適配 12oz/16oz 紙杯，防漏設計。", price: "$0.04", tag: "BPI 可堆肥", moq: "2,000 個", img: "./assets/images/coffee_cups.png" },
        ]
    },
    sushi: {
        en: [
            { id: 9, name: "Premium Bamboo Sushi Tray", desc: "Natural bamboo, elevates delivery dining experience.", price: "$0.55", tag: "Sustainable", moq: "300 pcs", img: "./assets/images/donut_box.png" },
            { id: 10, name: "PLA Crystal Clear Sauce Cup", desc: "Plant-based plastic, high transparency, leak-proof.", price: "$0.08", tag: "Compostable", moq: "1,000 pcs", img: "./assets/images/coffee_cups.png" },
            { id: 11, name: "2-Compartment Kraft Bento Box", desc: "Grease-resistant, microwave-safe kraft board.", price: "$0.38", tag: "FSC Certified", moq: "500 pcs", img: "./assets/images/donut_box.png" },
        ],
        zh: [
            { id: 9, name: "頂級竹製壽司餐盤", desc: "天然竹材，提升外送用餐儀式感。", price: "$0.55", tag: "永續材質", moq: "300 個", img: "./assets/images/donut_box.png" },
            { id: 10, name: "PLA 全透明醬料罐", desc: "植物基塑料，高透明度與防漏設計。", price: "$0.08", tag: "可堆肥", moq: "1,000 個", img: "./assets/images/coffee_cups.png" },
            { id: 11, name: "雙格牛皮紙便當盒", desc: "防油可微波牛皮紙板，雙格設計。", price: "$0.38", tag: "FSC 認證", moq: "500 個", img: "./assets/images/donut_box.png" },
        ]
    },
    bakery: {
        en: [
            { id: 12, name: "Windowed Pastry Box (4-count)", desc: "Crystal window top, perfect for croissants and tarts.", price: "$0.40", tag: "FSC Certified", moq: "500 pcs", img: "./assets/images/donut_box.png" },
            { id: 13, name: "Glassine Bread Bag", desc: "Semi-transparent food-grade wax alternative, grease-proof.", price: "$0.06", tag: "PFAS Free", moq: "2,000 pcs", img: "./assets/images/donut_box.png" },
            { id: 14, name: "Kraft Paper Cake Slice Box", desc: "Triangular design for single slice presentation.", price: "$0.28", tag: "BPI Compostable", moq: "500 pcs", img: "./assets/images/donut_box.png" },
        ],
        zh: [
            { id: 12, name: "開窗烘焙禮盒 (4 入)", desc: "頂部透明開窗設計，可頌與塔類最佳選擇。", price: "$0.40", tag: "FSC 認證", moq: "500 個", img: "./assets/images/donut_box.png" },
            { id: 13, name: "透明麵包袋", desc: "半透明食品級防油材質，替代蠟紙的環保選擇。", price: "$0.06", tag: "無 PFAS", moq: "2,000 個", img: "./assets/images/donut_box.png" },
            { id: 14, name: "牛皮紙蛋糕切片盒", desc: "三角形切片設計，單份蛋糕最佳呈現。", price: "$0.28", tag: "BPI 可堆肥", moq: "500 個", img: "./assets/images/donut_box.png" },
        ]
    },
    "bubble-tea": {
        en: [
            { id: 15, name: "16oz PLA Clear Cup", desc: "Crystal clarity for colorful drinks — fully plant-based.", price: "$0.14", tag: "Compostable", moq: "1,000 pcs", img: "./assets/images/coffee_cups.png" },
            { id: 16, name: "Flat Dome Lid (Film-Seal Ready)", desc: "Compatible with sealing machines. Stackable.", price: "$0.05", tag: "BPI Compostable", moq: "2,000 pcs", img: "./assets/images/coffee_cups.png" },
            { id: 17, name: "XXL Boba Straw (12mm)", desc: "Extra-wide for tapioca pearls, plant-based material.", price: "$0.04", tag: "Biodegradable", moq: "5,000 pcs", img: "./assets/images/coffee_cups.png" },
        ],
        zh: [
            { id: 15, name: "16oz PLA 全透明杯", desc: "完美展示繽紛飲品色澤，全植物基材質。", price: "$0.14", tag: "可堆肥", moq: "1,000 個", img: "./assets/images/coffee_cups.png" },
            { id: 16, name: "平頂蓋 (封膜機相容)", desc: "可搭配市面封膜機使用，可堆疊收納。", price: "$0.05", tag: "BPI 可堆肥", moq: "2,000 個", img: "./assets/images/coffee_cups.png" },
            { id: 17, name: "12mm 超粗珍珠吸管", desc: "珍珠專用超寬口徑，植物基環保材質。", price: "$0.04", tag: "生物可降解", moq: "5,000 支", img: "./assets/images/coffee_cups.png" },
        ]
    }
};

// ===== DOM REFS =====
const productGrid = document.getElementById('product-grid');
const gridTitle = document.getElementById('grid-title');
const industryBtns = document.querySelectorAll('.industry-btn');
const langSpans = document.querySelectorAll('.lang-switcher span[data-lang]');
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartClose = document.getElementById('cart-close');
const cartBody = document.getElementById('cart-body');
const heroCta = document.getElementById('hero-cta');

// ===== i18n =====
function updateUIText() {
    const t = translations[currentLang];
    document.title = t.title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = t[key];
            } else {
                el.innerHTML = t[key];
            }
        }
    });

    // Hero industry span
    const industryName = t.industries[currentIndustry];
    document.getElementById('hero-industry-span').innerText = industryName;

    // Grid title
    const products = productsData[currentIndustry]?.[currentLang] || [];
    gridTitle.innerText = `${t.gridTitle} (${products.length}/20)`;
}

// ===== PRODUCTS =====
function renderProducts() {
    const products = productsData[currentIndustry]?.[currentLang] || [];
    const t = translations[currentLang];

    productGrid.style.opacity = '0';
    productGrid.style.transition = 'opacity 0.2s ease';

    setTimeout(() => {
        productGrid.innerHTML = '';

        products.forEach(product => {
            const inCart = cart.find(c => c.id === product.id);
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-tag">${product.tag}</div>
                <div class="product-img-wrap">
                    <img src="${product.img}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-meta">
                        <span class="product-spec moq">${t.moqLabel}: ${product.moq}</span>
                    </div>
                    <div class="product-actions">
                        <span class="price">${product.price} <small style="font-weight:400;color:var(--text-muted);font-size:12px;">${t.priceSuffix}</small></span>
                        <input class="qty-input" type="number" min="1" value="${inCart?.qty || 1}" id="qty-${product.id}">
                        <button class="add-btn ${inCart ? 'added' : ''}" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-tag="${product.tag}">
                            ${inCart ? t.addedBtn : t.addBtn}
                        </button>
                    </div>
                </div>
            `;
            productGrid.appendChild(card);
        });

        // Bind add buttons
        productGrid.querySelectorAll('.add-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                const name = btn.getAttribute('data-name');
                const price = btn.getAttribute('data-price');
                const tag = btn.getAttribute('data-tag');
                const qty = parseInt(document.getElementById(`qty-${id}`).value) || 1;
                addToCart({ id, name, price, tag, qty });
                btn.classList.add('added');
                btn.innerText = translations[currentLang].addedBtn;
            });
        });

        gridTitle.innerText = `${t.gridTitle} (${products.length}/20)`;
        productGrid.style.opacity = '1';
    }, 180);
}

// ===== CART =====
function addToCart(item) {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
        existing.qty = item.qty;
    } else {
        cart.push(item);
    }
    updateCartUI();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateCartUI();
    renderProducts(); // refresh added state
}

function updateCartUI() {
    const total = cart.reduce((sum, c) => sum + c.qty, 0);
    cartCount.innerText = total;
    cartCount.style.background = total > 0 ? 'var(--primary-orange)' : '#666';

    const t = translations[currentLang];
    if (cart.length === 0) {
        cartBody.innerHTML = `<p class="cart-empty">${t.cartEmpty}</p>`;
        return;
    }

    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-meta">${item.tag} · Qty: ${item.qty} · ${item.price}</div>
            </div>
            <button class="cart-item-remove" data-id="${item.id}">✕</button>
        </div>
    `).join('');

    cartBody.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(parseInt(btn.getAttribute('data-id'))));
    });
}

function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
}
function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
}

// ===== EVENT LISTENERS =====
industryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        industryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentIndustry = btn.getAttribute('data-industry');
        updateUIText();
        renderProducts();
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});

langSpans.forEach(span => {
    span.addEventListener('click', () => {
        langSpans.forEach(s => s.classList.remove('active'));
        span.classList.add('active');
        currentLang = span.getAttribute('data-lang');
        updateUIText();
        renderProducts();
        updateCartUI();
    });
});

cartBtn.addEventListener('click', openCart);
cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

heroCta.addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// ===== INIT =====
updateUIText();
renderProducts();
updateCartUI();
