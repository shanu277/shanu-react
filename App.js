 //create h1 tag using react
 const heading = React.createElement("h1",{id: "heading"},"Hello World 123");
 console.log(heading);
 //create root using reactdom
 const root = ReactDOM.createRoot(document.getElementById("root"));
 console.log(root);
 root.render(heading);