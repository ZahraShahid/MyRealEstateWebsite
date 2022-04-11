import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PropertyGridForSale from './section-components/property-grid-for-sale';
import Footer from './global-components/footer-v2';

const PropertGridForSalePage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property For Sale"  />
        <PropertyGridForSale />
        <Footer />
    </div>
}

export default PropertGridForSalePage;

