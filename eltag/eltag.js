/* retrieved from https://www.w3schools.com/tags/ */
const ELTAG_ELEMENT_TAGS = [
  'a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 
  'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 
  'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 
  'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'h1', 
  'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 
  'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'meta', 'meter', 'nav', 'noframes', 'noscript', 
  'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 
  'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 
  'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 
  'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'
];

/* retrieved from https://www.w3schools.com/jsref/dom_obj_event.asp */
const ELTAG_ELEMENT_TRIGGERS = [
  'onabort', 'onafterprint', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onbeforeprint', 
  'onbeforeunload', 'onblur', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'oncontextmenu', 'oncopy', 
  'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 
  'ondrop', 'ondurationchange', 'onended', 'onerror', 'onfocus', 'onfocusin', 'onfocusout', 'onfullscreenchange', 
  'onfullscreenerror', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 
  'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmessage', 'onmousedown', 'onmouseenter', 'onmouseleave', 
  'onmousemove', 'onmouseover', 'onmouseout', 'onmouseup', 'onmousewheel', 'onoffline', 'ononline', 'onopen', 
  'onpagehide', 'onpageshow', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate', 'onprogress', 
  'onratechange', 'onresize', 'onreset', 'onscroll', 'onsearch', 'onseeked', 'onseeking', 'onselect', 'onshow', 
  'onstalled', 'onstorage', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontouchcancel', 'ontouchend', 
  'ontouchmove', 'ontouchstart', 'ontransitionend', 'onunload', 'onvolumechange', 'onwaiting', 'onwheel'
];

const PROPERTY_MAP = new Map();
const STATE_MAP = new Map();
const INIT_LIST = [];

const _visitTree = (element, fn) => {
  fn(element);
  for (let child of element.children) {
    _visitTree(child, fn);
  }
};

const _renderTree = (element) => _visitTree(element, (e) => _rerender(e));

const _createContextProxy = (element, ctx, owner=null) => {
  const proxy = new Proxy(ctx, {
    get: (target, property) => {
      return owner ? (owner[property] ? owner[property] : target[property]) : target[property];
    },
    
    set: (target, property, value) => {
      if (owner) {
        owner[property] = value;
      } else {
        target[property] = value;
      }
      return value;
    }
  });
  
  proxy.setState = (updated) => {
    if (proxy.state) {
      for (let key in proxy.state) {
        if (!(key in updated)) {
          updated[key] = proxy.state[key];
        }
      }
    }
    proxy.state = updated;
    const props = PROPERTY_MAP.get(element);
    if (props && props.ctx) {
      _renderTree(props.ctx);
    }
  };
  
  return proxy;
};

const _rerender = (element) => {
  const props = PROPERTY_MAP.get(element);
  if (props && props.ctx && props.render) {
    const state = STATE_MAP.get(props.ctx);
    if (state) {
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
      const render = _runInContext(props.render, state);
      element.appendChild(document.createTextNode(render));
    }
  }
};

const _initProps = () => {
  for (let element of INIT_LIST) {
    const props = PROPERTY_MAP.get(element);
    if (props && !props.ctx) {
      let current = element;
      while (current.parentElement) {
        current = current.parentElement;
        const parent = PROPERTY_MAP.get(current);
        if (parent && parent.ctx) {
          props.ctx = parent.ctx;
          break;
        }
      }
    }
  }
  INIT_LIST.length = 0;
};

const _runInContext = (fn, context) => {
  return (fn.hasOwnProperty('prototype') ? fn : (function() { return eval('(' + fn + ')()'); })).call(context);
};

const ElTag = {

  renderElement: (target, element) => {
    _initProps();
    _renderTree(element);
    target.appendChild(element);
  },

  el: (tag, properties={}, children=[]) => {
    const element = document.createElement(tag);

    INIT_LIST.push(element);

    const realProperties = Array.isArray(properties) ? {} : properties;
    let realChildren = Array.isArray(properties) ? properties : (children || []);

    if (typeof properties === 'string') {
      realChildren = properties;
    }

    if (realProperties.state) {
      PROPERTY_MAP.set(element, { ctx: element, render: realProperties.render });
      STATE_MAP.set(element, _createContextProxy(element, { state: realProperties.state }));
    } else {
      PROPERTY_MAP.set(element, { render: realProperties.render })
    }

    if (!realProperties.style) {
      realProperties.style = {};
    }

    for (let trigger of ELTAG_ELEMENT_TRIGGERS) {
      if (realProperties[trigger]) {
        const fn = realProperties[trigger];
        realProperties[trigger] = () => {
          const context = STATE_MAP.get(PROPERTY_MAP.get(element).ctx);
          _runInContext(fn, _createContextProxy(element, { ref: element }, context));
        };
      }
    }

    for (let property in realProperties) {
      element[property] = realProperties[property];
    }

    if (realProperties.class) {
      element.className = realProperties.class;
    }

    for (let styleAttr in realProperties.style) {
      element.style[styleAttr] = realProperties.style[styleAttr];
    }

    if (Array.isArray(realChildren)) {
      for (let child of realChildren) {
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      }
    } else {
      element.appendChild(document.createTextNode(realChildren));
    }

    return element
  },

  app: (properties={}, children=[]) => ElTag.el('div', properties, children)
};

for (let tag of ELTAG_ELEMENT_TAGS) {
  ElTag[tag] = (properties={}, children=[]) => ElTag.el(tag, properties, children);
}