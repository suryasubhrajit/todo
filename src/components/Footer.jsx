import React from 'react';

const Footer = () => {
    // Gets the current year using the Date object
    const date = new Date();
    const year = date.getFullYear();

    // Renders the Footer component with content and styles
    return (
        <footer className='text-secondary d-flex justify-content-center align-items-center'>
            &copy; {year} Shaadow ToDo
        </footer>
    );
};

export default Footer;
