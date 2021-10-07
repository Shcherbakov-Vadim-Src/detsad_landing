"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  __webpack_require__(334).config();

  let pass = await process.env.password;
  console.log('pass', pass);

  let nodemailer = __webpack_require__(123);

  let transporter = await nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: 'bootmailer.ru@gmail.com',
      pass: 'bootmailer1209.'
    }
  });
  let mail = {
    name: req.body.name,
    phone: req.body.phone,
    mail: req.body.mail,
    site: req.body.site
  };
  let info = await transporter.sendMail({
    from: "bootmailer.ru@gmail.com",
    to: `${mail.mail}`,
    subject: "Your new Baby house ✔",
    text: `Добрый день ${mail.name}, Мы получили Ваш заказ на посещение детского сада`,
    html: `<b>Добрый день ${mail.name}, Мы получили Ваш заказ на посещение нашего Детского сада. Мы ожидаем Вас ${mail.site}. Проверьте, пожалуйста, Ваши контактные данные: ${mail.name}, ${mail.phone}, ${mail.mail}</b>`
  });
  console.log("Message sent", info);
  res.status(200);
}

/***/ }),

/***/ 334:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 123:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(667));
module.exports = __webpack_exports__;

})();