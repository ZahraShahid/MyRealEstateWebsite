import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Property from './section-components/property-page';
import Footer from './global-components/footer-v2';

const PropertyPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property"  />
        <Property />
        <Footer />
    </div>
}

export default PropertyPage

