import React from 'react'

const Footer = () => {
    const date=new Date();
    const year = date.getFullYear();
    return (
        <footer className='text-secondary d-flex justify-content-center align-items-center'>&copy; {year} Shaadow ToDo</footer>
    )
}

export default Footer