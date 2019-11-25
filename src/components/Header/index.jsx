import React from 'react';
import './style.scss';

const Header = ({ title }) => (
    <header className="box">
        <img alt="Alt" src="https://picsum.photos/id/451/200/300" />
        <h1>{title}</h1>
    </header>
)


export default Header;