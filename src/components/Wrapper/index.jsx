import React from 'react';

const Button = () => <button>Test</button>

const Wrapper = ({ children }) => <div className="box">{children}</div>

const Main = () => <Wrapper><Button/></Wrapper>

export default Wrapper;