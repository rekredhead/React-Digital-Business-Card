import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer.js';

function CustomPage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

const root = document.getElementById('root');

ReactDOM.render(<CustomPage />, root);