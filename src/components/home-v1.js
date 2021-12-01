import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Service from './section-components/service';
import Product from './section-components/product';
import Video from './section-components/video';
import ProductV2 from './section-components/product-v2';
import Testimonial from './section-components/testimonial';
import Property from './section-components/property';
import Cta from './section-components/call-to-action';
import Agent from './section-components/agent';
import Client from './section-components/client';
import LatestNews from './blog-components/latest-news';
import Footer from './global-components/footer';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Service />
        <Product />
        <Video />
        <ProductV2 />
        <Testimonial />
        <Property />
        <Cta />
        <Agent />
        <Client />
        <LatestNews />
        <Footer />
    </div>
}

export default Home_V1

