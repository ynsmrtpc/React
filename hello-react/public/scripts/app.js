"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Ana Yapı
var TodoApp = /*#__PURE__*/function (_React$Component) {
  _inherits(TodoApp, _React$Component);

  var _super = _createSuper(TodoApp);

  // this özelliğini kaybeden fonksiyonlara tekrar this özelliği kazandırıyoruz
  function TodoApp(props) {
    var _this;

    _classCallCheck(this, TodoApp);

    _this = _super.call(this, props);
    _this.clearItems = _this.clearItems.bind(_assertThisInitialized(_this));
    _this.addItem = _this.addItem.bind(_assertThisInitialized(_this));
    _this.deleteItem = _this.deleteItem.bind(_assertThisInitialized(_this));
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(TodoApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var json = localStorage.getItem('items');
      var items = JSON.parse(json);

      if (items) {
        this.setState({
          items: items
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.items.length !== this.state.items.length) {
        var json = JSON.stringify(this.state.items);
        localStorage.setItem('items', json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("Component Deleted!");
    } // FONKSİYONLAR
    // temizleme fonksiyonu

  }, {
    key: "clearItems",
    value: function clearItems() {
      this.setState({
        items: []
      });
    } // ekleme fonksiyonu

  }, {
    key: "addItem",
    value: function addItem(item) {
      if (!item) {
        return "Please enter any todo...";
      } else if (this.state.items.indexOf(item) > -1) {
        return "You cannot add same todo!";
      }

      this.setState(function (prevState) {
        return {
          items: prevState.items.concat(item)
        };
      });
    } // silme fonksiyonu

  }, {
    key: "deleteItem",
    value: function deleteItem(item) {
      this.setState(function (prevState) {
        var arr = prevState.items.filter(function (i) {
          return item != i;
        });
        return {
          items: arr
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var app = {
        title: "Todo Application",
        description: "Write todos below..."
      };
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        title: app.title,
        description: app.description
      }), /*#__PURE__*/React.createElement(Action, {
        addItem: this.addItem
      }), /*#__PURE__*/React.createElement(TodoList, {
        items: this.state.items,
        deleteItem: this.deleteItem,
        clearItems: this.clearItems
      }));
    }
  }]);

  return TodoApp;
}(React.Component);

var Header = function Header(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, props.title), /*#__PURE__*/React.createElement("div", {
    className: "description"
  }, props.description));
};

var TodoList = function TodoList(props) {
  return /*#__PURE__*/React.createElement("ul", null, props.items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TodoItem, {
      className: "items",
      deleteItem: props.deleteItem,
      key: index,
      item: item
    });
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    className: "clear",
    onClick: props.clearItems
  }, "Clear Todos")));
};

var TodoItem = function TodoItem(props) {
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("button", {
    className: "delete",
    onClick: function onClick() {
      return props.deleteItem(props.item);
    }
  }, "X"), props.item);
}; // Action kısmı, butonlar ve formlar


var Action = /*#__PURE__*/function (_React$Component2) {
  _inherits(Action, _React$Component2);

  var _super2 = _createSuper(Action);

  function Action(props) {
    var _this2;

    _classCallCheck(this, Action);

    _this2 = _super2.call(this, props);
    _this2.onFormSubmit = _this2.onFormSubmit.bind(_assertThisInitialized(_this2)); // this özelliği kaybolan yapılara tekrar this özelliği kazandırmak için binding işlemi

    _this2.state = {
      // state ile ekleme yapacağımız alana erişiyoruz (state özel bir addır değişmez)
      error: ''
    };
    return _this2;
  }

  _createClass(Action, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();
      var item = e.target.elements.txtItem.value.trim();
      var error = this.props.addItem(item);
      this.setState({
        error: error
      });
      e.target.elements.txtItem.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, this.state.error && /*#__PURE__*/React.createElement("label", null, this.state.error), /*#__PURE__*/React.createElement("form", {
        onSubmit: this.onFormSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "txtItem"
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit"
      }, "Add Item")));
    }
  }]);

  return Action;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(TodoApp, null), document.getElementById('root')); // CLASS İLE YAPIMI
// Başlık Kısmı
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <div className='description'>{this.props.description}</div>
//             </div>
//         )
//     }
// }
// Todo Liste Kısmı
// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//             {
//                 this.props.items.map((item,index) =>
//                     <TodoItem className='items' deleteItem={this.props.deleteItem} key={index} item={item}/>
//                 )
//             }
//             <br />
//             <div>
//                 <button className='clear' onClick={this.props.clearItems}>Clear Todos</button>
//             </div>
//             </ul>
//         )
//     }
// }
// Todo Listedeki Itemler
// class TodoItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.deleteItem = this.deleteItem.bind(this);  // this özelliği kaybolan yapılara tekrar this özelliği kazandırmak için binding işlemi
//     }
//     render() {
//         return (
//             <li> 
//                 <button className='delete' onClick={() => this.props.deleteItem(this.props.item)}>X</button>
//                 {this.props.item}
//             </li>
//         )
//     }
// }
