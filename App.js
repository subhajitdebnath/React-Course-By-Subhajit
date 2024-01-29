// const heading = React.createElement("h1", {
//     id: "heading", abc: "zyx"
// }, "Hello World");

const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, 'Child 1'),
    React.createElement("div", {
        id: "child2"
    }, 'Child 2')
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);