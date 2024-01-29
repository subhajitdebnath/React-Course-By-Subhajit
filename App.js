import React from 'react';
import ReactDOM from 'react-dom/client';

// const parent = React.createElement("div", { id: "parent"}, [
//     React.createElement("div", {
//         id: "child1"
//     }, 'Child 1'),
//     React.createElement("div", {
//         id: "child2"
//     }, 'Child 2')
// ]);

const parent = <h1>hi</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);