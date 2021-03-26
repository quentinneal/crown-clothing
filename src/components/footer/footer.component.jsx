import React from 'react';

import "./footer.styles.scss";

const Footer = () => (
    <footer className="footer">
        <span className="copyright">&copy; </span>
        <span className="copyright-text">2020 - {(new Date().getFullYear())}, Quentin Neal. All Rights Reserved.</span>
    </footer>
);

export default Footer;