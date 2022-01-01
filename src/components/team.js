import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Team from './section-components/team';
import Testimonial from './section-components/testimonial-v3';
import MoreInfo from './section-components/more-info';
import Footer from './global-components/footer-v2';

const TeamPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Team"  />
        <Team />
        <Testimonial />
        <MoreInfo />
        <Footer />
    </div>
}

export default TeamPage

