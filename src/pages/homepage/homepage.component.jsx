import React from 'react';

import CallToAction from '../../components/call-to-action/call-to-action.component';
import Heading from '../../components/heading/heading.component';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => (
    <main className="homepage">
        <CallToAction />
        <Heading />
        <Directory />
    </main>
);

export default HomePage;