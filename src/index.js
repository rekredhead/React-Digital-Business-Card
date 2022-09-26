import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Kehan',
    lastName: 'Rathnayake'
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
);

ReactDOM.render(element, root);