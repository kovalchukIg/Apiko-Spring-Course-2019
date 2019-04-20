const React = {
  createElement(tag, atribute, children) {
    const createTag = document.createElement(tag);
    if (atribute) {
      if (typeof atribute === "object") {
        for (let props in atribute) {
          if (props === "style") {
            createTag.style.backgroundColor = atribute[props].backgroundColor;
          } else if (props === "textContent") {
            createTag.textContent = atribute[props];
          }
        }
      }
    }
    if (children && Array.isArray(children)) {
      children.map(element => {
        if (typeof element === "string") {
          const someText = document.createTextNode(element);
          createTag.appendChild(someText);
        } else {
          createTag.appendChild(element);
        }
      });
    } else if (typeof atribute === "undefined") {
      createTag.textContent = children;
    }
    return createTag;
  },
  render(element, dom) {
    dom.appendChild(element);
  }
};

const app = React.createElement("div", { style: { backgroundColor: "red" } }, [
  React.createElement("span", undefined, "Hello world"),
  React.createElement("br"),
  "this is a just text node",
  React.createElement("div", { textContent: "text content" })
]);

React.render(app, document.getElementById("app"));
