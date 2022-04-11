import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertyGridForRent from './section-components/property-grid-for-rent';
import Footer from './global-components/footer-v2';

const PropertGridForRentPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property For Rent"  />
        <PropertyGridForRent />
        <Footer />
    </div>
}

export default PropertGridForRentPage;

