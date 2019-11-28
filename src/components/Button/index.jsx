import React from 'react';
import { Link } from 'react-router-dom';

export default ({ text }) => <Link to={{ pathname: "/user/", state: { name: 'seba' } }}><button>{text}</button></Link>