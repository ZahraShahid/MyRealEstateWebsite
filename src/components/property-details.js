import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import PropertyDetailsPage from './section-components/property-details';
import Footer from './global-components/footer';

const PropertyDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Property Details"  />
        <PropertyDetailsPage />
        <Footer />
    </div>
}

export default PropertyDetails

