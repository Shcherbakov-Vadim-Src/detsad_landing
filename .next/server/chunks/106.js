"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(409);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





function ContactForm() {
  let {
    0: nameValue,
    1: setName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  let {
    0: phoneValue,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  let {
    0: mailValue,
    1: setMail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  let {
    0: productValue,
    1: setProduct
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const getContacts = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.values()];
    console.log('data', data);

    if (data[0] == null || data[0] == '') {
      setName('Пожалуйста введите Ваше имя');
    } else {
      setName('');
    }

    if (data[1] == null || data[1].length === 0) {
      setPhone('Пожалуйста введите Ваш номер телефона');
    } else if (typeof Number(data[1]) !== "number") {
      setPhone('Корректный формат телефона: 84951234567');
    } else {
      setProduct('');
    }

    if (data[2] == null || data[2] == '') {
      setMail('Пожалуйста укажите Вашу почту');
    } else if (regex.test(String(data[2]).toLowerCase()) === false) {
      setMail('Неверный формат почты');
    } else {
      setMail('');
    }

    if (data[3] == null || data[3].length === 0) {
      setProduct('Пожалуйста укажите удобную для Вас дату');
    } else {
      setProduct('');
    }

    let mail = {
      name: data[0],
      phone: data[1],
      mail: data[2],
      site: data[3]
    };
    console.log(mail);
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mail)
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().contacts_block),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact_box),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
            onSubmit: getContacts,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().lable),
                  children: "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F \u0438 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().validity),
                  children: nameValue
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                name: "input_name",
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_contact),
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043C\u044F"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().lable),
                  children: "\u0412\u0430\u0448 \u043A\u043E\u043D\u0442\u0430\u043A\u0442 \u0434\u043B\u044F \u0441\u0432\u044F\u0437\u0438"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().validity),
                  children: phoneValue
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                name: "input_name",
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_contact),
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().lable),
                  children: "\u0412\u0430\u0448\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().validity),
                  children: mailValue
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                name: "input_name",
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_contact),
                type: "text",
                placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_column),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().lable),
                  children: "\u0414\u0430\u0442\u0430, \u0432\u0440\u0435\u043C\u044F \u0432\u0438\u0437\u0438\u0442\u0430"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().validity),
                  children: productValue
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                name: "input_name",
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().input_contact),
                type: "text",
                placeholder: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0438 \u0432\u0440\u0435\u043C\u044F, \u0443\u0434\u043E\u0431\u043D\u0443\u044E \u0434\u043B\u044F \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              type: "submit",
              className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_submit_mail),
              children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
            })]
          })
        })
      })
    })
  });
}

/***/ })

};
;