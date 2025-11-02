import './home.css';
import React, { useState, useEffect } from 'react';
import left from './images/left.png';
import right from './images/right.png';
import fish from './images/fish.jpeg';

import f_icon from './images/fish.png';
import chicken from './images/chicken.png';
import turkey from './images/turkey.png';
import seafood from './images/seafood.png';
import snails from './images/snail.png';
import vegetables from './images/frozen-food.png';
import bulk from './images/bulk.png';
import combo from './images/combine.png';

import fresh from './images/fresh.png';
import delivery from './images/express-delivery.png';
import quality from './images/purchase-order.png';
import map from './images/map.png';
import butcher from './images/butcher.png';

import s3img from './images/s3_img.png';



import Glide from '@glidejs/glide';

function Body() {

    const [currentIndex, setCurrentIndex] = useState(0);
    
    const products = [
        {
          id: 1,
          name: 'Salmon',
          localName: 'Point-and-Kill',
          image: fish,
          price: '₦20,000 Per KG',
          inStock: true,
          deliveryOption: 'Next-Day Delivery',
        },
        {
          id: 2,
          name: 'Tuna',
          localName: 'Tuna (Ijebu style)',
          image: fish,
          price: '₦15,000 Per KG',
          inStock: false,
          deliveryOption: 'Same-Day Delivery',
        },
        {
          id: 3,
          name: 'Cod',
          localName: 'Okporoko',
          image: fish,
          price: '₦18, 000 Per KG',
          inStock: true,
          deliveryOption: 'Next-Day Delivery',
        },
        {
          id: 4,
          name: 'Trout',
          localName: 'Sweet Fish',
          image: fish,
          price: '₦22,000 Per KG',
          inStock: true,
          deliveryOption: 'Same-Day Delivery',
        },
        {
          id: 5,
          name: 'Mackerel',
          localName: 'Shawa',
          image: fish,
          price: '₦12,000 Per KG',
          inStock: false,
          deliveryOption: 'Next-Day Delivery',
        }
      ];

    const categories = [
    { id: 1, name: 'Fish', image: f_icon, size: 'small', heat: 0.95 },
    { id: 2, name: 'Chicken', image: chicken, size: 'medium', heat: 0.85 },
    { id: 3, name: 'Turkey', image: turkey, size: 'large', heat: 0.6 },
    { id: 4, name: 'Seafood', image: seafood, size: 'medium', heat: 0.9 },
    { id: 5, name: 'Snails', image: snails, size: 'large', heat: 0.5 },
    { id: 6, name: 'Gizzards', image: chicken, size: 'small', heat: 0.4 },
    { id: 7, name: 'Combo Packs', image: combo, size: 'medium', heat: 0.7 },
    { id: 8, name: 'Frozen Vegetables', image: vegetables, size: 'large', heat: 0.3 },
    { id: 9, name: 'Bulk Orders', image: bulk, size: 'small', heat: 0.6 },
    ];
    


    const colors = ['#1c1c1c', '#2c3e50', '#d01a0d', '#ec9533'];
    
    const getHeatColor = (heat) => {
        if (heat <= 0.5) return '#d01a0d';   // Hot
        if (heat >= 0.7) return '#ec9533';   // Warm
        if (heat >= 0.9) return '#2c3e50';   // Cool
        return '#1c1c1c';                    // Cold
      };
      


    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? products.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === products.length - 1 ? 0 : prevIndex + 1));
    };

    const getVisibleProducts = () => {
        const visibleProducts = [];
        for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % products.length;
            visibleProducts.push(products[index]);
        }
        return visibleProducts;
        };

    useEffect(() => {
        const glide = new Glide('.glide', {
            type: 'carousel',
            perView: 4,
            gap: 50,
            animationDuration: 1000,
            autoplay: 3000,
            hoverpause: true,
            keyboard: true,
            breakpoints: {
            1024: { perView: 2 },
            640: { perView: 1 },
            },
        });
    
        glide.mount();
        }, []);

    
    
    return(
        <div className="body_container">
            <div className="top-selling-section" >
                <div className="section-title">
                    <h2>TOP SELLING ITEMS</h2>
                    
                </div>

                <div className="glide section-carousel">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                    {products.map((product) => (
                        <li key={product.id} className="glide__slide carousel-item">
                        <div className="image-wrapper">
                            {!product.inStock && (
                            <span className={`stock-badge ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                            )}
                            <img src={product.image} alt={product.name} className="carousel-image" />
                        </div>
                        <div className="product-details">
                            <div className="product-name-container">
                            <p className="product-name">{product.name}</p>
                            <p className="product-local-name">{product.localName}</p>
                            </div>
                            <p className="product-price">{product.price}</p>
                            <p className="product-delivery">{product.deliveryOption}</p>
                        </div>
                        <button className="add-to-cart-btn" disabled={!product.inStock}>
                            Add to Cart
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>
                </div>

                {/* <div className="glide__arrows" data-glide-el="controls">
                                <button className="glide__arrow glide__arrow--left scroll-button" data-glide-dir="<">
                                    <img src={left} alt="left" />
                                </button>
                                <button className="glide__arrow glide__arrow--right scroll-button" data-glide-dir=">">
                                    <img src={right} alt="right" />
                                </button>
                                </div> */}
           </div>


            <div className="section2"> 
                
                <div className='categories'>
                    <div className="section-title">
                        <h2>SHOP BY CATEGORIES</h2>
                    </div>

                    <div className="masonry-grid">
                        {categories.map(cat => (
                        <div
                            key={cat.id}
                            className={`category-card ${cat.size}`}
                            style={{
                            backgroundColor: getHeatColor(cat.heat),
                            }}
                        >
                            <img src={cat.image} alt={cat.name} className="category-icon" />
                            <p className="category-name">{cat.name}</p>
                        </div>
                        ))}
                    </div>
                </div>

                <div className='pick-of-the-month-section'>
                    <div className="section-title">
                        <h2>TOP PICK + RECEIPE TO GO WITH IT</h2>
                    </div>
                    
                    <div className ="section-content">
                        <div className ="section-img"> 
                            <img src={fish} alt="Fish" className="top-pick-image" />
                            <div>
                                <p>FISH</p>
                                <button className="add-to-cart-btn">Add to Cart</button> 
                            </div>
                           
                            
                        </div>
                        <div className="section-recipe"> 
                            
                            <p> NIGERIAN FISH PEPPER SOUP</p>
                            {/* <h5>Ingredients</h5> */}
                            <ul>
                                <li>Fresh Catfish<strong> (2kg)</strong> </li>
                                <li>Pepper Soup Spice<strong> (2 tbsp) </strong></li>
                                <li>Scotch Bonnet peppers <strong>(2)</strong> </li>
                                <li>1 small onion (sliced)</li>
                                <li>2 seasoning cubes</li>
                                <li>Scent leaves (or basil)</li>
                                <li>Salt to taste</li>
                            </ul>

                        
                            <h5>STEPS</h5>
                            <ol>
                                <li>Place cleaned catfish in a pot with sliced onions, pepper, and seasoning cubes.</li>
                                <li>Add enough water to slightly cover the fish and bring to a boil.</li>
                                <li>After 10 mins, add pepper soup spice and let simmer for another 10–15 mins.</li>
                                <li>Gently stir without breaking the fish. Add scent leaves and salt to taste.</li>
                                <li>Simmer for 3 more minutes and serve hot.</li>
                            </ol>

            
                        </div>
                    </div>
                </div>


            </div>

            <div className='section3'>
                <div className="section-title">
                    <h2>WHY FRESH ONE?</h2>
                </div>

                <div>
                    <p className="section3-description">At Fresh One Frozen Foods, we go beyond selling frozen meats — we deliver a trusted experience, built around Nigerian taste, convenience, and quality. 
                        Here’s what makes us truly different:
                    </p>

                </div>

                <div className='section3-container'>
                    <div className='section3-img'>
                        <img src={s3img} alt="Delivery" className="section3-image" />
                    </div>

                    <div className='section3-content'>
                        <div className="section3-card">
                            <div className='card-title'>
                            <img src={fresh} alt="Fresh" className="section3-icon" />
                            <h3>Taste of Home, Frozen Fresh</h3>
                            </div>
                            <p>From Point-and-Kill catfish to shawa and smoked turkey, we bring Nigerian flavours straight to your freezer. Frozen at peak freshness to lock in taste and nutrients — enjoy that true homely taste every time.</p>
                        </div>

                        <div className="section3-card">
                            <div className='card-title'>
                            <img src={delivery} alt="Delivery" className="section3-icon" />
                            <h3>Same-Day or Next-Day Delivery</h3>
                            </div>
                            <p>We deliver across Nigeria — fast and fresh. Choose Same-Day delivery in select cities or reliable Next-Day shipping nationwide. No more market runs; just doorstep convenience.</p>
                        </div>

                        <div className="section3-card">
                            <div className='card-title'>
                            <img src={butcher} alt="Butcher" className="section3-icon" />
                            <h3>Clean, Cut & Ready-to-Cook</h3>
                            </div>
                            <p>All products are professionally cleaned, cut, and sealed — ready for your pot. Save time and skip the stress. Just thaw, season, and cook your favorite stew, soup, or suya.</p>
                        </div>

                        <div className="section3-card">
                            <div className='card-title'>
                            <img src={map} alt="Map" className="section3-icon" />
                            <h3>Proudly Nigerian & Community-Driven</h3>
                            </div>
                            <p>We serve Nigerian families, students, caterers, and food vendors with pride. Our platform is made by Nigerians, for Nigerians — focused on quality, culture, and trust.</p>
                        </div>

                        <div className="section3-card">
                            <div className='card-title'>
                            <img src={quality} alt="Quality" className="section3-icon" />
                            <h3>Fair Prices & Bulk Deals</h3>
                            </div>
                            <p>Get transparent pricing and combo packs that save you more. From small orders to party-sized bulk deliveries — we’ve got your table covered.</p>
                        </div>
                    </div>

                </div>

                {/* <div>
                    <h3>Fresh One Frozen Foods</h3>
                    <p>Always Fresh. Always Reliable. Always Naija.</p>
                </div> */}
                <div>
                    
                </div>

                <div></div>

            </div>

                
           
        </div>
    )
}


export default Body;