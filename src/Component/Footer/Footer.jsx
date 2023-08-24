import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    {/* Add your footer content here */}
                    <p>&copy; {new Date().getFullYear()} CoreNet</p>
                </div>
            </footer>
        </>
    )
}

export default Footer