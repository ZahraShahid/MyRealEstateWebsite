import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Team from './section-components/team';
import Testimonial from './section-components/testimonial-v3';
import MoreInfo from './section-components/more-info';
import Footer from './global-components/footer-v2';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Team"  />
        <Team />
        <Testimonial />
        <MoreInfo />
        <Footer />
    </div>
}

export default AboutPage

