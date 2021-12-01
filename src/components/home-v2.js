import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v2';
import Product from './section-components/product-v3';
import Service from './section-components/service-v2';
import Property from './section-components/property';
import Testimonial from './section-components/testimonial-v2';
import Client from './section-components/client-v2';
import Agent from './section-components/agent-v2';
import ProductCategories from './section-components/product-categories';
import LatestNews from './blog-components/latest-news-v2';
import Footer from './global-components/footer';

const Home_V2 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Product />
        <Service />
        <Property />
        <Testimonial />
        <Client />
        <Agent />
        <ProductCategories />
        <LatestNews />
        <Footer />
    </div>
}

export default Home_V2

