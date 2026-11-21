/* ==========================================
   BMW PROFESSIONAL SHOWROOM — SCRIPT.JS
   ========================================== */

// CAR DATA REPOSITORY
const bmwCars = [
    {
        id: "bmw-3-series",
        name: "BMW 3 Series Sedan",
        category: "sedan",
        price: 44500,
        formattedPrice: "$44,500",
        engine: "2.0L BMW TwinPower Turbo",
        hp: 255,
        transmission: "8-Speed Sport Steptronic",
        desc: "The ultimate sports sedan. Athletic design, razor-sharp handling, and state-of-the-art BMW Curved Display.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-5-series",
        name: "BMW 5 Series Sedan",
        category: "sedan",
        price: 57900,
        formattedPrice: "$57,900",
        engine: "3.0L BMW TwinPower Turbo Inline 6",
        hp: 375,
        transmission: "8-Speed Sport Automatic",
        desc: "Sophistication meets exhilarating dynamics. Advanced driver assistance and peerless executive luxury.",
        image: "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-7-series",
        name: "BMW 7 Series Sedan",
        category: "sedan",
        price: 96400,
        formattedPrice: "$96,400",
        engine: "4.4L BMW M TwinPower Turbo V8",
        hp: 536,
        transmission: "8-Speed STEPTRONIC Automatic",
        desc: "Pure luxury without compromise. Featuring the 31-inch BMW Theatre Screen and Executive Lounge Seating.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-x5",
        name: "BMW X5 SAV",
        category: "suv",
        price: 65200,
        formattedPrice: "$65,200",
        engine: "3.0L BMW TwinPower Turbo Inline 6",
        hp: 375,
        transmission: "8-Speed Sport Automatic",
        desc: "The trailblazing Sports Activity Vehicle. Command every road with supreme capability and luxury.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-x6",
        name: "BMW X6 SAC",
        category: "suv",
        price: 74500,
        formattedPrice: "$74,500",
        engine: "3.0L BMW TwinPower Turbo + Mild Hybrid",
        hp: 375,
        transmission: "8-Speed Sport Automatic",
        desc: "Striking coupe-like silhouette combined with rugged SAV versatility and bold road presence.",
        image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-x7",
        name: "BMW X7 Flagship SAV",
        category: "suv",
        price: 104500,
        formattedPrice: "$104,500",
        engine: "4.4L BMW M TwinPower Turbo V8",
        hp: 523,
        transmission: "8-Speed Sport Automatic",
        desc: "The largest and most luxurious BMW SAV. Three rows of immaculate comfort and unmatched prestige.",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-m3",
        name: "BMW M3 Competition",
        category: "m",
        price: 76000,
        formattedPrice: "$76,000",
        engine: "3.0L BMW M TwinPower Turbo Inline 6",
        hp: 503,
        transmission: "8-Speed M STEPTRONIC w/ Drivelogic",
        desc: "Pure motorsport DNA. Uncompromising track capability packaged in a high-performance 4-door sedan.",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-m4",
        name: "BMW M4 Coupe",
        category: "coupe",
        price: 79100,
        formattedPrice: "$79,100",
        engine: "3.0L BMW M TwinPower Turbo Inline 6",
        hp: 503,
        transmission: "6-Speed Manual / 8-Speed M",
        desc: "Aggressive styling, carbon fiber aerodynamics, and ferocious twin-turbocharged acceleration.",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-m5",
        name: "BMW M5 High-Performance",
        category: "m",
        price: 111900,
        formattedPrice: "$111,900",
        engine: "4.4L V8 M TwinPower Turbo + Electric Motor",
        hp: 717,
        transmission: "8-Speed M STEPTRONIC",
        desc: "Electrified high-performance dominance. Unmatched supercar performance with executive daily usability.",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-i4",
        name: "BMW i4 Gran Coupe",
        category: "electric",
        price: 52200,
        formattedPrice: "$52,200",
        engine: "Dual Electric Motors (All-Electric)",
        hp: 536,
        transmission: "Single-Speed Automatic",
        desc: "100% electric driving dynamics. Instant torque, stunning Gran Coupe proportions, and 300+ mile range.",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop"
        ]
    },
    {
        id: "bmw-ix",
        name: "BMW iX Electric SAV",
        category: "electric",
        price: 87100,
        formattedPrice: "$87,100",
        engine: "Dual Fully Electric Motors",
        hp: 516,
        transmission: "Single-Speed Automatic",
        desc: "The flagship of BMW electric mobility. Futuristic Shy Tech interior and state-of-the-art aerodynamics.",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop"
        ]
    }
];

// REVIEWS DATA REPOSITORY
const initialReviews = [
    { author: "Alexandr K.", rating: 5, text: "Buying the BMW i4 through this digital showroom was exceptionally seamless. The delivery was fast and professional." },
    { author: "Sanjar M.", rating: 5, text: "The 3D showroom allowed me to inspect the M3 in detail before visiting the Tashkent flagship dealership. Outstanding!" },
    { author: "Dilshod T.", rating: 4, text: "Great financing options and transparent installment calculations. Highly recommend the BMW X5." }
];

// TRANSLATIONS REPOSITORY
const translations = {
    en: {
        nav_home: "Home",
        nav_models: "Models",
        nav_electric: "Electric",
        nav_m: "BMW M",
        nav_showroom: "3D Showroom",
        nav_offers: "Offers",
        nav_about: "About",
        nav_contact: "Contact",
        btn_login: "Login",
        btn_register: "Register",
        hero_badge: "THE ALL-NEW ELECTRIC & PERFORMANCE RANGE",
        hero_title: "THE JOY OF DRIVING.",
        hero_subtitle: "Immerse yourself in unrivaled luxury, dynamic performance, and cutting-edge electric innovation.",
        btn_explore: "Explore Models",
        btn_discover: "Interactive 3D Showroom",
        carousel_heading: "Featured BMW Fleet",
        showroom_heading: "Interactive 3D BMW Showroom",
        catalog_heading: "Complete BMW Catalog"
    },
    ru: {
        nav_home: "Главная",
        nav_models: "Модели",
        nav_electric: "Электро",
        nav_m: "BMW M",
        nav_showroom: "3D Шоурум",
        nav_offers: "Спецпредложения",
        nav_about: "О нас",
        nav_contact: "Контакты",
        btn_login: "Войти",
        btn_register: "Регистрация",
        hero_badge: "НОВАЯ ЛИНЕЙКА ЭЛЕКТРО И SPORT",
        hero_title: "УДОВОЛЬСТВИЕ ЗА РУЛЕМ.",
        hero_subtitle: "Погрузитесь в непревзойденную роскошь, динамику и передовые электротехнологии.",
        btn_explore: "Все модели",
        btn_discover: "3D Шоурум",
        carousel_heading: "Избранный автопарк BMW",
        showroom_heading: "Интерактивный 3D Шоурум BMW",
        catalog_heading: "Полный каталог BMW"
    },
    uz: {
        nav_home: "Bosh sahifa",
        nav_models: "Modellar",
        nav_electric: "Elektr",
        nav_m: "BMW M",
        nav_showroom: "3D Ko'rgazma",
        nav_offers: "Takliflar",
        nav_about: "Biz haqimizda",
        nav_contact: "Aloqa",
        btn_login: "Kirish",
        btn_register: "Ro'yxatdan o'tish",
        hero_badge: "YANGI ELEKTR VA SPORT AVTOMOBILLARI",
        hero_title: "HAYASH LAZZATI.",
        hero_subtitle: "Mislsiz hashamat, sport dinamikasi va eng ilg'or texnologiyalardan bahramand bo'ling.",
        btn_explore: "Modellarni ko'rish",
        btn_discover: "3D Ko'rgazma",
        carousel_heading: "Tanlangan BMW avtomobillari",
        showroom_heading: "Interaktiv 3D BMW Ko'rgazmasi",
        catalog_heading: "To'liq BMW Katalogi"
    }
};

// STATE MANAGEMENT
let cart = JSON.parse(localStorage.getItem('bmw_cart')) || [];
let favorites = JSON.parse(localStorage.getItem('bmw_favorites')) || [];
let currentUser = JSON.parse(localStorage.getItem('bmw_current_user')) || null;
let currentSlide = 0;

// DOM LOADED INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initCarousel();
    init3DShowroom();
    initCatalog();
    initAuth();
    initCartCheckout();
    initReviews();
    initContactAndSearch();
    updateBadges();
    
    // Set initial language from localStorage or default 'en'
    const savedLang = localStorage.getItem('bmw_lang') || 'en';
    document.getElementById('language-select').value = savedLang;
    changeLanguage(savedLang);
});

/* ==========================================
   1. NAVIGATION & MOBILE MENU
   ========================================== */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Language Selector
    document.getElementById('language-select').addEventListener('change', (e) => {
        const lang = e.target.value;
        localStorage.setItem('bmw_lang', lang);
        changeLanguage(lang);
    });
}

function changeLanguage(lang) {
    const translation = translations[lang];
    if (!translation) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translation[key]) {
            el.textContent = translation[key];
        }
    });
}

/* ==========================================
   2. CAROUSEL
   ========================================== */
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    // Render carousel cards
    track.innerHTML = bmwCars.map(car => `
        <div class="carousel-card">
            <img src="${car.image}" alt="${car.name}" onerror="this.src='https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop'">
            <div class="carousel-card-body">
                <h3>${car.name}</h3>
                <div class="car-price">From ${car.formattedPrice}</div>
                <p>${car.desc}</p>
                <div class="card-btn-group">
                    <button class="btn-outline" onclick="openCarDetails('${car.id}')">View Details</button>
                    <button class="btn-solid" onclick="addToCart('${car.id}')">Buy Now</button>
                </div>
            </div>
        </div>
    `).join('');

    const cards = track.querySelectorAll('.carousel-card');
    const totalSlides = cards.length;

    // Render indicators
    indicatorsContainer.innerHTML = Array.from({length: totalSlides}).map((_, i) => `
        <div class="indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
    `).join('');

    document.getElementById('carousel-next').addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    document.getElementById('carousel-prev').addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });
}

function updateCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    const cardWidth = track.querySelector('.carousel-card').offsetWidth + 32; // gap
    
    track.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    
    indicators.forEach((ind, i) => {
        ind.classList.toggle('active', i === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

/* ==========================================
   3. INTERACTIVE 3D SHOWROOM (THREE.JS)
   ========================================== */
let scene, camera, renderer, carMesh, controls;

function init3DShowroom() {
    const container = document.getElementById('canvas-container');
    const loadingOverlay = document.getElementById('loading-overlay');

    if (!container) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f0f);

    // Camera setup
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(6, 3, 6);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't go below ground

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x0066B1, 3, 50);
    pointLight.position.set(0, 5, 0);
    scene.add(pointLight);

    // Ground floor
    const floorGeo = new THREE.PlaneGeometry(50, 50);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.4, metalness: 0.8 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Load 3D GLTF Car Model or Fallback procedural luxury car geometry
    const loader = new THREE.GLTFLoader();
    // Using a reliable public domain GLTF car model or fallback
    loader.load(
        'https://threejs.org/examples/models/gltf/ferrari.glb', // Demo GLB
        (gltf) => {
            carMesh = gltf.scene;
            carMesh.scale.set(1.2, 1.2, 1.2);
            carMesh.position.set(0, 0, 0);
            scene.add(carMesh);
            loadingOverlay.style.display = 'none';
        },
        undefined,
        (error) => {
            console.warn('GLTF load failed, rendering fallback procedural BMW concept shape.', error);
            createProceduralCarFallback();
            loadingOverlay.style.display = 'none';
        }
    );

    // Color Pickers
    document.querySelectorAll('.color-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const colorHex = e.target.getAttribute('data-color');
            
            if (carMesh) {
                carMesh.traverse((child) => {
                    if (child.isMesh && child.material && child.material.name.toLowerCase().includes('body') || child.isMesh && carMesh.children.length < 5) {
                        child.material.color.setHex(colorHex);
                    }
                });
            }
        });
    });

    // Reset Camera & Spin
    let autoSpin = false;
    document.getElementById('reset-cam-btn').addEventListener('click', () => {
        camera.position.set(6, 3, 6);
        controls.target.set(0, 0, 0);
    });

    document.getElementById('toggle-spin-btn').addEventListener('click', (e) => {
        autoSpin = !autoSpin;
        e.target.textContent = autoSpin ? 'Stop Auto-Spin' : 'Toggle Auto-Spin';
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        if (autoSpin && carMesh) {
            carMesh.rotation.y += 0.005;
        }
        controls.update();
        renderer.render(scene, camera);
    }
    animate();

    // Window resize
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}

function createProceduralCarFallback() {
    const group = new THREE.Group();
    
    // Body
    const bodyGeo = new THREE.BoxGeometry(2.2, 0.7, 4.5);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x0066B1, roughness: 0.2, metalness: 0.9 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 0.5;
    group.add(body);

    // Cabin
    const cabinGeo = new THREE.BoxGeometry(1.8, 0.6, 2.3);
    const cabinMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.5 });
    const cabin = new THREE.Mesh(cabinGeo, cabinMat);
    cabin.position.set(0, 1.05, -0.2);
    group.add(cabin);

    carMesh = group;
    scene.add(carMesh);
}

/* ==========================================
   4. CAR CATALOG & FILTERS
   ========================================== */
function initCatalog() {
    renderCatalog(bmwCars);

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            const filter = e.target.getAttribute('data-filter');
            
            if (filter === 'all') {
                renderCatalog(bmwCars);
            } else {
                const filtered = bmwCars.filter(car => car.category === filter);
                renderCatalog(filtered);
            }
        });
    });

    // Sorting
    document.getElementById('sort-select').addEventListener('change', (e) => {
        const val = e.target.value;
        let sorted = [...bmwCars];
        if (val === 'price-low') sorted.sort((a,b) => a.price - b.price);
        if (val === 'price-high') sorted.sort((a,b) => b.price - a.price);
        if (val === 'hp') sorted.sort((a,b) => b.hp - a.hp);
        renderCatalog(sorted);
    });
}

function renderCatalog(cars) {
    const grid = document.getElementById('car-grid-container');
    grid.innerHTML = cars.map(car => {
        const isFav = favorites.some(f => f.id === car.id);
        return `
            <div class="car-card">
                <div class="car-card-img-wrapper">
                    <img src="${car.image}" alt="${car.name}" onerror="this.src='https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop'">
                    <button class="fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${car.id}')"><i class="fas fa-heart"></i></button>
                </div>
                <div class="car-card-body">
                    <h3>${car.name}</h3>
                    <div class="car-price">${car.formattedPrice}</div>
                    <p>${car.desc}</p>
                    <div class="car-specs-grid">
                        <div>Engine<strong>${car.engine.split(' ')[0]}</strong></div>
                        <div>Power<strong>${car.hp} HP</strong></div>
                        <div>Transmission<strong>Auto</strong></div>
                    </div>
                    <div class="car-card-actions">
                        <button class="btn-outline full-width" onclick="openCarDetails('${car.id}')">View Details</button>
                        <button class="btn-solid full-width" onclick="addToCart('${car.id}')">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleFavorite(carId) {
    const car = bmwCars.find(c => c.id === carId);
    const index = favorites.findIndex(f => f.id === carId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(car);
    }
    localStorage.setItem('bmw_favorites', JSON.stringify(favorites));
    updateBadges();
    renderCatalog(bmwCars);
}

/* ==========================================
   5. CAR DETAILS MODAL
   ========================================== */
function openCarDetails(carId) {
    const car = bmwCars.find(c => c.id === carId);
    if (!car) return;

    const modal = document.getElementById('car-details-modal');
    const body = document.getElementById('details-body');

    body.innerHTML = `
        <div class="details-gallery">
            <img id="main-detail-img" src="${car.image}" alt="${car.name}">
            <div class="gallery-thumbs">
                ${car.gallery.map((img, i) => `<img src="${img}" class="${i === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">`).join('')}
            </div>
        </div>
        <div class="details-info">
            <h2>${car.name}</h2>
            <div class="car-price">${car.formattedPrice}</div>
            <p>${car.desc}</p>
            <ul class="specs-list">
                <li><strong>Engine:</strong> ${car.engine}</li>
                <li><strong>Horsepower:</strong> ${car.hp} HP</li>
                <li><strong>Transmission:</strong> ${car.transmission}</li>
                <li><strong>Drive:</strong> BMW xDrive / RWD</li>
                <li><strong>0-100 km/h:</strong> 3.8s - 5.2s</li>
                <li><strong>Top Speed:</strong> 250 km/h</li>
            </ul>
            <div class="card-btn-group" style="margin-top: 2rem;">
                <button class="btn-solid large full-width" onclick="addToCart('${car.id}'); closeModal('car-details-modal');">Add to Cart & Checkout</button>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
}

function changeMainImage(src, thumbElement) {
    document.getElementById('main-detail-img').src = src;
    document.querySelectorAll('.gallery-thumbs img').forEach(img => img.classList.remove('active'));
    thumbElement.classList.add('active');
}

/* ==========================================
   6. AUTHENTICATION (LOGIN / REGISTER)
   ========================================== */
function initAuth() {
    const modal = document.getElementById('auth-modal');
    const loginOpenBtn = document.getElementById('login-open-btn');
    const regOpenBtn = document.getElementById('register-open-btn');
    const tabLogin = document.getElementById('tab-login-btn');
    const tabReg = document.getElementById('tab-reg-btn');
    const loginForm = document.getElementById('login-form');
    const regForm = document.getElementById('register-form');

    loginOpenBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        tabLogin.click();
    });

    regOpenBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        tabReg.click();
    });

    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabReg.classList.remove('active');
        loginForm.classList.remove('hidden');
        regForm.classList.add('hidden');
    });

    tabReg.addEventListener('click', () => {
        tabReg.classList.add('active');
        tabLogin.classList.remove('active');
        regForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Password visibility toggle
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', (e) => {
            const input = e.target.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                e.target.classList.replace('fa-eye', 'fa-eye-slash');
            } else {
                input.type = 'password';
                e.target.classList.replace('fa-eye-slash', 'fa-eye');
            }
        });
    });

    // Registration submission
    regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const phone = document.getElementById('reg-phone').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const confirm = document.getElementById('reg-confirm').value;
        const errorEl = document.getElementById('reg-error');

        if (password !== confirm) {
            errorEl.textContent = "Passwords do not match!";
            errorEl.classList.remove('hidden');
            return;
        }

        const newUser = { name, phone, email, password };
        localStorage.setItem('bmw_current_user', JSON.stringify(newUser));
        currentUser = newUser;
        updateAuthUI();
        modal.classList.add('hidden');
        alert('Registration successful! Welcome to BMW Showroom.');
    });

    // Login submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const identifier = document.getElementById('login-identifier').value;
        const password = document.getElementById('login-password').value;
        const errorEl = document.getElementById('login-error');

        // Frontend demo authentication check
        const savedUser = JSON.parse(localStorage.getItem('bmw_current_user'));
        if (savedUser && (savedUser.email === identifier || savedUser.phone === identifier) && savedUser.password === password) {
            currentUser = savedUser;
            updateAuthUI();
            modal.classList.add('hidden');
        } else {
            // Create a default session if demo credentials used
            const demoUser = { name: identifier.split('@')[0] || 'BMW User' };
            currentUser = demoUser;
            localStorage.setItem('bmw_current_user', JSON.stringify(demoUser));
            updateAuthUI();
            modal.classList.add('hidden');
        }
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('bmw_current_user');
        updateAuthUI();
    });

    updateAuthUI();
}

function updateAuthUI() {
    const loginBtn = document.getElementById('login-open-btn');
    const regBtn = document.getElementById('register-open-btn');
    const profileMenu = document.getElementById('user-profile-menu');
    const usernameDisplay = document.getElementById('username-display');

    if (currentUser) {
        loginBtn.classList.add('hidden');
        regBtn.classList.add('hidden');
        profileMenu.classList.remove('hidden');
        usernameDisplay.textContent = currentUser.name;
    } else {
        loginBtn.classList.remove('hidden');
        regBtn.classList.remove('hidden');
        profileMenu.classList.add('hidden');
    }
}

/* ==========================================
   7. SHOPPING CART & CHECKOUT SYSTEM
   ========================================== */
function addToCart(carId) {
    const car = bmwCars.find(c => c.id === carId);
    if (!car) return;

    const existing = cart.find(item => item.id === carId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...car, quantity: 1 });
    }

    saveCart();
    updateBadges();
    openCartCheckoutModal();
}

function removeFromCart(carId) {
    cart = cart.filter(item => item.id !== carId);
    saveCart();
    updateBadges();
    renderCartModal();
}

function saveCart() {
    localStorage.setItem('bmw_cart', JSON.stringify(cart));
}

function updateBadges() {
    document.getElementById('cart-count').textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('fav-count').textContent = favorites.length;
}

function openCartCheckoutModal() {
    const modal = document.getElementById('cart-checkout-modal');
    renderCartModal();
    modal.classList.remove('hidden');
}

function renderCartModal() {
    const listContainer = document.getElementById('cart-items-list');
    
    if (cart.length === 0) {
        listContainer.innerHTML = `<p class="text-light">Your shopping bag is empty.</p>`;
        document.getElementById('cart-subtotal').textContent = '$0';
        document.getElementById('cart-grand-total').textContent = '$0';
        return;
    }

    listContainer.innerHTML = cart.map(item => `
        <div class="cart-item-row">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.formattedPrice} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="icon-btn" onclick="removeFromCart('${item.id}')"><i class="fas fa-trash"></i></button>
            </div>
        </div>
    `).join('');

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const grandTotal = subtotal + 1500; // Delivery & tax
    
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toLocaleString()}`;
    document.getElementById('cart-grand-total').textContent = `$${grandTotal.toLocaleString()}`;

    // Update installment calculation
    updateInstallmentCalculation(subtotal);
}

function initCartCheckout() {
    document.getElementById('cart-btn').addEventListener('click', openCartCheckoutModal);

    // Payment method tabs
    document.querySelectorAll('.pay-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.pay-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.pay-content').forEach(c => c.classList.remove('active'));
            
            e.target.classList.add('active');
            const method = e.target.getAttribute('data-method');
            document.getElementById(`pay-${method}-content`).classList.add('active');
        });
    });

    // Installment months change
    document.getElementById('installment-months').addEventListener('change', () => {
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        updateInstallmentCalculation(subtotal);
    });

    // Confirm buttons triggering order tracking demo
    const confirmTriggers = ['confirm-cash-btn', 'confirm-installment-btn', 'confirm-card-btn', 'confirm-credit-btn'];
    confirmTriggers.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener('click', () => {
                if (cart.length === 0) {
                    alert('Your cart is empty!');
                    return;
                }
                document.getElementById('cart-checkout-modal').classList.add('hidden');
                triggerOrderSuccess();
            });
        }
    });

    document.getElementById('close-tracking-btn').addEventListener('click', () => {
        document.getElementById('tracking-modal').classList.add('hidden');
        cart = [];
        saveCart();
        updateBadges();
    });
}

function updateInstallmentCalculation(subtotal) {
    const months = parseInt(document.getElementById('installment-months').value);
    const totalWithFee = subtotal * 1.05; // 5% fee
    const monthly = totalWithFee / months;

    document.getElementById('monthly-payment-val').textContent = `$${Math.round(monthly).toLocaleString()} / mo`;
    document.getElementById('installment-total-val').textContent = `$${Math.round(totalWithFee).toLocaleString()}`;
}

function triggerOrderSuccess() {
    const modal = document.getElementById('tracking-modal');
    const refNum = 'BMW-' + Math.floor(100000 + Math.random() * 900000);
    document.getElementById('tracking-ref-num').textContent = refNum;
    modal.classList.remove('hidden');
}

/* ==========================================
   8. REVIEWS SYSTEM
   ========================================== */
function initReviews() {
    let reviews = JSON.parse(localStorage.getItem('bmw_reviews')) || initialReviews;
    const grid = document.getElementById('reviews-grid');

    function renderReviews() {
        grid.innerHTML = reviews.map(rev => `
            <div class="review-card">
                <div class="review-stars">${'⭐'.repeat(rev.rating)}</div>
                <p>"${rev.text}"</p>
                <div class="review-author">— ${rev.author}</div>
            </div>
        `).join('');
    }
    renderReviews();

    document.getElementById('review-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const author = document.getElementById('review-author').value;
        const rating = parseInt(document.getElementById('review-rating').value);
        const text = document.getElementById('review-text').value;

        reviews.unshift({ author, rating, text });
        localStorage.setItem('bmw_reviews', JSON.stringify(reviews));
        renderReviews();
        e.target.reset();
        alert('Thank you for your valuable review!');
    });
}

/* ==========================================
   9. SEARCH & CONTACT SYSTEM
   ========================================== */
function initContactAndSearch() {
    const searchBtn = document.getElementById('search-btn');
    const searchModal = document.getElementById('search-modal');
    const searchInput = document.getElementById('site-search-input');
    const resultsContainer = document.getElementById('search-results-container');

    searchBtn.addEventListener('click', () => {
        searchModal.classList.remove('hidden');
        searchInput.focus();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            resultsContainer.innerHTML = '';
            return;
        }

        const matches = bmwCars.filter(car => 
            car.name.toLowerCase().includes(query) || 
            car.category.toLowerCase().includes(query) ||
            car.desc.toLowerCase().includes(query)
        );

        if (matches.length === 0) {
            resultsContainer.innerHTML = `<p class="text-light">No BMW models found matching "${query}".</p>`;
            return;
        }

        resultsContainer.innerHTML = matches.map(car => `
            <div class="search-result-item" onclick="openCarDetails('${car.id}'); closeModal('search-modal');">
                <img src="${car.image}" alt="${car.name}">
                <div>
                    <h4>${car.name}</h4>
                    <p class="car-price">${car.formattedPrice}</p>
                </div>
            </div>
        `).join('');
    });

    // Close buttons for all modals
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) modal.classList.add('hidden');
        });
    });

    // Contact form
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you! Your inquiry has been sent to our flagship Tashkent dealership team. We will call you shortly.');
        e.target.reset();
    });
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}