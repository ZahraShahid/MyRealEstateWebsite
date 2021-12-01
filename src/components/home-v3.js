import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import About from './section-components/about';
import Product from './section-components/product-v4';
import Cta from './section-components/call-to-action';
import PropertyFilter from './section-components/property-filter';
import Testimonial from './section-components/testimonial-v3';
import ProductCategories from './section-components/product-categories-v2';
import Agent from './section-components/agent-v4';
import FeaturedProperty from './section-components/featured-property';
import LatestNews from './blog-components/latest-news-v3';
import Footer from './global-components/footer';

const Home_V3 = () => {
    return <div>
        <Navbar />
        <Banner />
        <About />
        <Product />
        <Cta />
        <PropertyFilter />
        <Testimonial />
        <ProductCategories />
        <Agent />
        <FeaturedProperty />
        <LatestNews />
        <Footer />
    </div>
}

export default Home_V3

