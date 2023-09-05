const renderer = {
    createElement: function (tag, attrs, ...children) {
        const element = document.createElement(tag);

        for (const name in attrs) {
            if (name && attrs.hasOwnProperty(name)) {
                const value = attrs[name];
                if (value === true) {
                    element.setAttribute(name, name);
                } else if (value !== false && value != null) {
                    element.setAttribute(name, value.toString());
                }
            }
        }
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            element.appendChild(
                child.nodeType == null ?
                    document.createTextNode(child.toString()) : child);
        }
        return element;
    }
};

module.exports = function() {
  return renderer.createElement;
}
