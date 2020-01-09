webpackHotUpdate("styles",{

/***/ "./components/Projects/Project/Project.module.css":
/*!********************************************************!*\
  !*** ./components/Projects/Project/Project.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Project":"_3az_pWuEy_ChteTfqccAIX","title":"_3jE0IIxKh8DiqM4Db3RwJE","date":"_3EHvZ9J7cZWKbUUdJROU9s"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578538335070");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.7c42c8d9e33d5bb01260.hot-update.js.map