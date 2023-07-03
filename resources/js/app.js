import { createRoot } from 'react-dom';
import React from 'react';
import ReactDOM from 'react-dom';  
import About from './components/about';
import Home from './components/Home';
import Food from './components/Food';

const dataElement = document.getElementById('root');
const dataLink = JSON.parse(dataElement.getAttribute('link'));

if (dataLink === 'home') {
    createRoot(document.getElementById('root')).render(<Home />);
}
else if (dataLink === 'about') {
    createRoot(document.getElementById('root')).render(<About />);
}
else if (dataLink === 'food') {
    const data = JSON.parse(dataElement.getAttribute('data'));

    ReactDOM.render(<Food data={data} />, dataElement);
}
