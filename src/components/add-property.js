import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AddProperty from './section-components/add-property';
import Footer from './global-components/footer-v2';

const AddPropertyPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Add Property"  />
        <AddProperty />
        <Footer />
    </div>
}

export default AddPropertyPage

