import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('h1', {}, 'test');
console.log(parent);

const span = '200';
const Title = <h1>{span}Hello title</h1>;
const Child = () => <h1>Hello comp</h1>;

const Child1 = () => (
    <div>
        {Child()}
        <Child />
        <Child></Child>
        <h1>Hello comp 1</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Child1 />);