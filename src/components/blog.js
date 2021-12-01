import React from 'react';
import Navbar from './global-components/navbar-v2';
import PageHeader from './global-components/page-header';
import Blog from './blog-components/blog';
import Footer from './global-components/footer-v2';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog"  />
        <Blog />
        <Footer />
    </div>
}

export default BlogPage

