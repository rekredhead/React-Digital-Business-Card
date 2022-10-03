import React from 'react';
import ReactDOM from 'react-dom';

function CustomPage() {
    return (
        <div>
            <header>
                <nav>
                    <img src="./react-logo.png" alt="React Logo"></img>
                </nav>
            </header>
            <h1>Why I love to learn React</h1>
            <ol>
                <li>It seems essential for my blockchain journey</li>
                <li>It seems fun to learn and use</li>
                <li>I want to create many projects using React</li>
                <li>Alot of clients want React developers</li>
            </ol>
        </div>
    );
}

const root = document.getElementById('root');

ReactDOM.render(<CustomPage />, root);