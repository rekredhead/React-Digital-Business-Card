import React from 'react';
import ReactDOM from 'react-dom';

const simpleStaticPage = (
    <div>
        <img src="./logo192.png" width="40px" alt="React Logo"></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>

        <ol>
            <li>Why do we need to 'import React from "react"' in our files?</li>
            <p>To gain access to the React Module - Use react in our program</p>
            
            <li>If I were to console.log(page) in index.js, what would show up?</li>
            <p>An Object would be displayed with the contents of the page JSX</p>
            
            <li>What's wrong with this code:${"\
                    const page = (\
                    <h1>Hello</h1>\
                    <p>This is my website</p>\
                )"
                }
            </li>
            <p>JSX variables can't have more than one element, they need to be inside a div at least</p>
            
            <li>What does it mean for something to be 'declarative' instead of "imperative"?</li>
            <p>(Not sure)</p>
            
            <li>What does it mean for something to be "composable"?</li>
            <p>In general, composable means removable</p>
        </ol>
    </div>
);

const root = document.getElementById('root');

ReactDOM.render(simpleStaticPage, root);