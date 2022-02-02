(this["webpackJsonpapp"] = this["webpackJsonpapp"] || []).push([
  ["main"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
      /*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          "text {\n    /* shape-rendering: geometricPrecision */\n}\n\ncircle {\n    /* shape-rendering: geometricPrecision */\n    /* fill: red !important */\n}",
          "",
          {
            version: 3,
            sources: ["webpack://src/App.css"],
            names: [],
            mappings:
              "AAAA;IACI,wCAAwC;AAC5C;;AAEA;IACI,wCAAwC;IACxC,yBAAyB;AAC7B",
            sourcesContent: [
              "text {\n    /* shape-rendering: geometricPrecision */\n}\n\ncircle {\n    /* shape-rendering: geometricPrecision */\n    /* fill: red !important */\n}",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
      /*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
          );
        // Imports

        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
            true
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.i,
          "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://src/index.css"],
            names: [],
            mappings:
              "AAAA;EACE,SAAS;EACT;;cAEY;EACZ,mCAAmC;EACnC,kCAAkC;AACpC;;AAEA;EACE;aACW;AACb",
            sourcesContent: [
              "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ __webpack_exports__["default"] =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./src/App.css":
      /*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
              function () {
                content = __webpack_require__(
                  /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/App.js":
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! ./App.css */ "./src/App.css");
          /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              _App_css__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js"
            );
          /* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./components/header */ "./src/components/header.js"
            );
          /* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./components/footer */ "./src/components/footer.js"
            );
          /* harmony import */ var _components_maincontainer__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./components/maincontainer */ "./src/components/maincontainer.js"
            );
          /* harmony import */ var _components_modals_loadbldgmodal__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./components/modals/loadbldgmodal */ "./src/components/modals/loadbldgmodal.js"
            );
          /* harmony import */ var _components_modals_aboutmodal__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./components/modals/aboutmodal */ "./src/components/modals/aboutmodal.js"
            );
          /* harmony import */ var _components_modals_loadedsummarymodal__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./components/modals/loadedsummarymodal */ "./src/components/modals/loadedsummarymodal.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/App.js",
            _s = __webpack_require__.$Refresh$.signature();

          const theme = Object(
            _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["createTheme"]
          )({
            palette: {
              secondary: {
                main: "#cf202e",
              },
              primary: {
                main: "#283759",
              },
            },
          });
          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"]
          )({
            app: {
              height: "100vh",
              width: "100vw",
              minWidth: 900,
              boxSizing: "border-box",
              overflow: "hidden",
            },
          });

          const App = (props) => {
            _s();

            const classes = useStyles(); // load test dataset...

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              const test_building_data = {
                areas: [
                  {
                    type: "office",
                    area: 21000,
                    index: 0,
                  },
                ],
                consumption_native: {
                  elec_grid: 260000,
                  gas: 0,
                  fuel_1: 0,
                  fuel_2: 0,
                  fuel_4: 0,
                  diesel: 0,
                  district_steam: 0,
                  district_hot_water: 0,
                  elec_driven_chiller: 0,
                  absorption_chiller_gas: 0,
                  engine_driven_chiller_gas: 0,
                },
                onsite_generation_native: {
                  elec_pv: 800,
                },
              };
              props.actions.setAllBuildingInputs(test_building_data);
              props.actions.compileBuildingOutputs();
            }, [props.actions]); // handle resize

            Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
              const handleResize = () => {
                props.actions.setWindowDimensions({
                  width: window.innerWidth,
                  height: window.innerHeight,
                });
              };

              window.addEventListener("resize", handleResize);
              return () => window.removeEventListener("resize", handleResize);
            }, [props.actions]);
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"]
            )(
              _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__[
                "ThemeProvider"
              ],
              {
                theme: theme,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"]
                )(
                  "div",
                  {
                    className: classes.app,
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__[
                          "jsxDEV"
                        ]
                      )(
                        _components_header__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 86,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__[
                          "jsxDEV"
                        ]
                      )(
                        _components_maincontainer__WEBPACK_IMPORTED_MODULE_7__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 87,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__[
                          "jsxDEV"
                        ]
                      )(
                        _components_modals_loadbldgmodal__WEBPACK_IMPORTED_MODULE_8__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 88,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__[
                          "jsxDEV"
                        ]
                      )(
                        _components_modals_aboutmodal__WEBPACK_IMPORTED_MODULE_9__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 89,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__[
                          "jsxDEV"
                        ]
                      )(
                        _components_modals_loadedsummarymodal__WEBPACK_IMPORTED_MODULE_10__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__[
                          "jsxDEV"
                        ]
                      )(
                        _components_footer__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 91,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(App, "e3X/1Rqsn7nblQK13ERnP9eN2qU=", false, function () {
            return [useStyles];
          });

          _c = App;

          const mapStateToProps = (store) => {
            return {
              actions: { ...store.actions },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_2__["conn"]
          )(mapStateToProps)(App);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "App");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/calculations/buildingtypes.js":
      /*!*******************************************!*\
  !*** ./src/calculations/buildingtypes.js ***!
  \*******************************************/
      /*! exports provided: building_types */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "building_types",
            function () {
              return building_types;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const building_types = {
            assembly: "Assembly",
            college_university: "College/University",
            education: "Education",
            food_sales_service: "Food Sales & Service",
            healthcare: "Healthcare",
            lodging: "Lodging",
            manufacturing_industrial: "Manufacturing/Industrial",
            multifamily_housing: "Multifamily Housing",
            office: "Office",
            retail: "Retail",
            services: "Services",
            storage: "Storage",
            technology_science: "Technology/Science",
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/calculations/compilebuilding.js":
      /*!*********************************************!*\
  !*** ./src/calculations/compilebuilding.js ***!
  \*********************************************/
      /*! exports provided: compileBuildingProfile */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "compileBuildingProfile",
            function () {
              return compileBuildingProfile;
            }
          );
          /* harmony import */ var _emissionsstandards__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./emissionsstandards */ "./src/calculations/emissionsstandards.js"
            );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          /* harmony import */ var _emissionsfactors__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./emissionsfactors */ "./src/calculations/emissionsfactors.js"
            );
          /* harmony import */ var _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ../calculations/unitconversions */ "./src/calculations/unitconversions.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const getAlternativeCompliancePayments = (
            emissions_thresholds,
            annual_emissions
          ) => {
            let compliance_obj = [];
            let abs_thresholds = emissions_thresholds.absolute;
            let norm_thresholds = emissions_thresholds.normalized;
            let acp_per_ton = 234;
            annual_emissions.forEach((d) => {
              let { year, absolute, normalized } = d;
              let abs_total = absolute.total;
              let norm_total = normalized.total;

              const getAcp = (
                abs_total,
                abs_thresholds,
                norm_total,
                norm_thresholds
              ) => {
                let carbon_deficit_absolute,
                  carbon_surplus_absolute,
                  carbon_deficit_normalized,
                  carbon_surplus_normalized,
                  payment,
                  payment_avoidance;

                if (abs_thresholds || abs_thresholds === 0) {
                  carbon_deficit_absolute = Object(
                    d3__WEBPACK_IMPORTED_MODULE_1__["max"]
                  )([0, abs_total - abs_thresholds]);
                  carbon_surplus_absolute = Object(
                    d3__WEBPACK_IMPORTED_MODULE_1__["max"]
                  )([0, abs_thresholds - abs_total]);
                  carbon_deficit_normalized = Object(
                    d3__WEBPACK_IMPORTED_MODULE_1__["max"]
                  )([0, norm_total - norm_thresholds]);
                  carbon_surplus_normalized = Object(
                    d3__WEBPACK_IMPORTED_MODULE_1__["max"]
                  )([0, norm_thresholds - norm_total]);
                  payment = carbon_deficit_absolute * acp_per_ton;
                  payment_avoidance = carbon_surplus_absolute * acp_per_ton;
                } else {
                  carbon_deficit_absolute = 0;
                  carbon_surplus_absolute = 0;
                  carbon_deficit_normalized = 0;
                  carbon_surplus_normalized = 0;
                  payment = 0;
                  payment_avoidance = 0;
                }

                return {
                  payment: payment,
                  payment_avoidance: payment_avoidance,
                  carbon_deficit_absolute: carbon_deficit_absolute,
                  carbon_surplus_absolute: carbon_surplus_absolute,
                  carbon_deficit_normalized: carbon_deficit_normalized,
                  carbon_surplus_normalized: carbon_surplus_normalized,
                };
              };

              let acpobj = {};

              if (+year <= 2029) {
                acpobj = getAcp(
                  abs_total,
                  abs_thresholds["2025-2029"],
                  norm_total,
                  norm_thresholds["2025-2029"]
                );
              } else if (+year <= 2034) {
                acpobj = getAcp(
                  abs_total,
                  abs_thresholds["2030-2034"],
                  norm_total,
                  norm_thresholds["2030-2034"]
                );
              } else if (+year <= 2039) {
                acpobj = getAcp(
                  abs_total,
                  abs_thresholds["2035-2039"],
                  norm_total,
                  norm_thresholds["2035-2039"]
                );
              } else if (+year <= 2044) {
                acpobj = getAcp(
                  abs_total,
                  abs_thresholds["2040-2044"],
                  norm_total,
                  norm_thresholds["2040-2044"]
                );
              } else if (+year <= 2049) {
                acpobj = getAcp(
                  abs_total,
                  abs_thresholds["2045-2049"],
                  norm_total,
                  norm_thresholds["2045-2049"]
                );
              } else if (+year > 2049) {
                acpobj = getAcp(
                  abs_total,
                  abs_thresholds["2050-"],
                  norm_total,
                  norm_thresholds["2050-"]
                );
              }

              compliance_obj.push({
                year: year,
                acp_payment: acpobj.payment,
                carbon_deficit_absolute: acpobj.carbon_deficit_absolute,
                carbon_surplus_absolute: acpobj.carbon_surplus_absolute,
                carbon_deficit_normalized: acpobj.carbon_deficit_normalized,
                carbon_surplus_normalized: acpobj.carbon_surplus_normalized,
                payment_avoidance: acpobj.payment_avoidance,
              });
            });
            return compliance_obj;
          };

          const getEmissionsThresholds = (areas, building_validation) => {
            let has_2025_2029_threshold;

            if (!building_validation.is_above_20000_sf) {
              has_2025_2029_threshold = false;
            }

            if (
              building_validation.is_above_20000_sf &&
              !building_validation.is_above_35000_sf
            ) {
              has_2025_2029_threshold = false;
            } else {
              has_2025_2029_threshold = true;
            }

            let absolute = {
              "2025-2029": 0,
              "2030-2034": 0,
              "2035-2039": 0,
              "2040-2044": 0,
              "2045-2049": 0,
              "2050-": 0,
            };
            let normalized = {
              "2025-2029": 0,
              "2030-2034": 0,
              "2035-2039": 0,
              "2040-2044": 0,
              "2045-2049": 0,
              "2050-": 0,
            };
            let total_area = Object(d3__WEBPACK_IMPORTED_MODULE_1__["sum"])(
              areas.map((e) => e.area)
            );
            areas.forEach((e) => {
              let area_absolute = e.area;
              let area_fraction = area_absolute / total_area;
              let thresholds =
                _emissionsstandards__WEBPACK_IMPORTED_MODULE_0__[
                  "emissions_standards"
                ][e.type];
              absolute["2025-2029"] += area_absolute * thresholds[0];
              absolute["2030-2034"] += area_absolute * thresholds[1];
              absolute["2035-2039"] += area_absolute * thresholds[2];
              absolute["2040-2044"] += area_absolute * thresholds[3];
              absolute["2045-2049"] += area_absolute * thresholds[4];
              absolute["2050-"] += area_absolute * thresholds[5];
              normalized["2025-2029"] += area_fraction * thresholds[0];
              normalized["2030-2034"] += area_fraction * thresholds[1];
              normalized["2035-2039"] += area_fraction * thresholds[2];
              normalized["2040-2044"] += area_fraction * thresholds[3];
              normalized["2045-2049"] += area_fraction * thresholds[4];
              normalized["2050-"] += area_fraction * thresholds[5];
            }); // handle area validation... is 'null' the right way to express this?

            if (!has_2025_2029_threshold) {
              absolute["2025-2029"] = null;
              normalized["2025-2029"] = null;
            }

            if (!building_validation.is_above_20000_sf) {
              absolute["2025-2029"] = null;
              absolute["2030-2034"] = null;
              absolute["2035-2039"] = null;
              absolute["2040-2044"] = null;
              absolute["2045-2049"] = null;
              absolute["2050-"] = null;
              normalized["2025-2029"] = null;
              normalized["2030-2034"] = null;
              normalized["2035-2039"] = null;
              normalized["2040-2044"] = null;
              normalized["2045-2049"] = null;
              normalized["2050-"] = null;
            }

            return {
              absolute,
              normalized,
            };
          };

          const getEmissionsFactorsByYear = (year) => {
            return {
              ..._emissionsfactors__WEBPACK_IMPORTED_MODULE_2__[
                "non_electric_emissions_factors"
              ],
              elec_grid:
                _emissionsfactors__WEBPACK_IMPORTED_MODULE_2__[
                  "electric_emissions_factors_by_year"
                ][year],
              elec_pv:
                _emissionsfactors__WEBPACK_IMPORTED_MODULE_2__[
                  "electric_emissions_factors_by_year"
                ][year],
            };
          };

          const getEmissionsFromConsumption = (
            consumption,
            onsite_generation,
            factors,
            buildingarea
          ) => {
            const absolute = {
              total: 0,
            };
            const normalized = {
              total: 0,
            };
            Object.keys(consumption).forEach((k) => {
              const fuel_factor = factors[k];
              const fuel_consumption = consumption[k];
              const fuel_emission = fuel_consumption * fuel_factor;
              absolute[k] = fuel_emission;
              normalized[k] = fuel_emission / buildingarea;
              absolute["total"] += fuel_emission;
              normalized["total"] += fuel_emission / buildingarea;
            });
            Object.keys(onsite_generation).forEach((k) => {
              const fuel_factor = factors[k];
              const fuel_consumption = onsite_generation[k];
              const fuel_emission = fuel_consumption * fuel_factor;
              absolute[k] = fuel_emission;
              normalized[k] = fuel_emission / buildingarea;
              absolute["total"] += fuel_emission;
              normalized["total"] += fuel_emission / buildingarea;
            }); // set any negative values to zero to account for potential net positive energy
            // might be hacky or inelegant.

            absolute["total"] = Object(d3__WEBPACK_IMPORTED_MODULE_1__["max"])([
              0,
              absolute["total"],
            ]);
            normalized["total"] = Object(
              d3__WEBPACK_IMPORTED_MODULE_1__["max"]
            )([0, normalized["total"]]);
            return {
              absolute,
              normalized,
            };
          };

          const getAnnualEmissions = (
            years,
            consumption,
            onsite_generation,
            buildingarea
          ) => {
            const annual_emissions_array = years.map((year) => {
              const factors = getEmissionsFactorsByYear(year);
              const emissions = getEmissionsFromConsumption(
                consumption,
                onsite_generation,
                factors,
                buildingarea
              );
              emissions["year"] = year;
              return emissions;
            });
            return annual_emissions_array;
          };

          const compileBuildingProfile = (buildinginputs) => {
            let { areas, consumption_native, onsite_generation_native } =
              buildinginputs;
            let totalarea = Object(d3__WEBPACK_IMPORTED_MODULE_1__["sum"])(
              areas.map((e) => e.area)
            );
            let building_validation = {
              is_above_35000_sf: totalarea >= 35000 ? true : false,
              is_above_20000_sf: totalarea >= 20000 ? true : false,
            };
            let consumption_mmbtu = {};
            Object.keys(consumption_native).forEach((fuel) => {
              let val = consumption_native[fuel];
              consumption_mmbtu[fuel] = Object(
                _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_3__[
                  "convertNativeToMMBtu"
                ]
              )(val, fuel);
            });
            let onsite_generation_mmbtu = {};
            Object.keys(onsite_generation_native).forEach((fuel) => {
              let val = onsite_generation_native[fuel];
              onsite_generation_mmbtu[fuel] = -Object(
                _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_3__[
                  "convertNativeToMMBtu"
                ]
              )(val, fuel);
            });
            let annual_emissions = getAnnualEmissions(
              _emissionsfactors__WEBPACK_IMPORTED_MODULE_2__["years"],
              consumption_mmbtu,
              onsite_generation_mmbtu,
              totalarea
            );
            let emissions_thresholds = getEmissionsThresholds(
              areas,
              building_validation
            );
            let alternative_compliance_payments =
              getAlternativeCompliancePayments(
                emissions_thresholds,
                annual_emissions
              );
            return {
              building_validation: building_validation,
              annual_emissions: annual_emissions,
              emissions_thresholds: emissions_thresholds,
              alternative_compliance_payments: alternative_compliance_payments,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/calculations/emissionsfactors.js":
      /*!**********************************************!*\
  !*** ./src/calculations/emissionsfactors.js ***!
  \**********************************************/
      /*! exports provided: electric_emissions_factors_by_year, non_electric_emissions_factors, years */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "electric_emissions_factors_by_year",
            function () {
              return electric_emissions_factors_by_year;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "non_electric_emissions_factors",
            function () {
              return non_electric_emissions_factors;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "years",
            function () {
              return years;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          // source: https://www.boston.gov/sites/default/files/file/2021/02/Boston_Performance_Standard_Technical_Methods_2021-02-18_20-013.pdf
          // Emission factor
          // (kg CO2e/MMBtu)
          const non_electric_emissions_factors = {
            gas: 53.11,
            fuel_1: 73.5,
            fuel_2: 74.21,
            fuel_4: 75.29,
            diesel: 74.21,
            district_steam: 66.4,
            district_hot_water: 66.4,
            elec_driven_chiller: 52.7,
            absorption_chiller_gas: 73.89,
            engine_driven_chiller_gas: 49.31,
          }; // kg CO2e/ MMBtu

          const electric_emissions_factors_by_year = {
            2018: 87,
            2019: 85,
            2020: 83,
            2021: 81,
            2022: 79,
            2023: 77,
            2024: 75,
            2025: 73,
            2026: 71,
            2027: 69,
            2028: 67,
            2029: 65,
            2030: 62,
            2031: 60,
            2032: 58,
            2033: 56,
            2034: 54,
            2035: 52,
            2036: 50,
            2037: 48,
            2038: 46,
            2039: 44,
            2040: 42,
            2041: 40,
            2042: 37,
            2043: 35,
            2044: 33,
            2045: 31,
            2046: 29,
            2047: 27,
            2048: 25,
            2049: 23,
            2050: 21,
            2051: 21,
          };
          const years = Object.keys(electric_emissions_factors_by_year);

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/calculations/emissionsstandards.js":
      /*!************************************************!*\
  !*** ./src/calculations/emissionsstandards.js ***!
  \************************************************/
      /*! exports provided: emissions_standards */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "emissions_standards",
            function () {
              return emissions_standards;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          /**
           * arrays correspond to the following years:
           * 2025-2029
           * 2030-2034
           * 2035-2039
           * 2040-2044
           * 2045-2049
           * 2050-
           *
           * units are kgCO2e/SF
           */
          const emissions_standards = {
            assembly: [7.8, 4.6, 3.3, 2.1, 1.1, 0],
            college_university: [10.2, 5.3, 3.8, 2.5, 1.2, 0],
            education: [3.9, 2.4, 1.8, 1.2, 0.6, 0],
            food_sales_service: [17.4, 10.9, 8.0, 5.4, 2.7, 0],
            healthcare: [15.4, 10.0, 7.4, 4.9, 2.4, 0],
            lodging: [5.8, 3.7, 2.7, 1.8, 0.9, 0],
            manufacturing_industrial: [23.9, 15.3, 10.9, 6.7, 3.2, 0],
            multifamily_housing: [4.1, 2.4, 1.8, 1.1, 0.6, 0],
            office: [5.3, 3.2, 2.4, 1.6, 0.8, 0],
            retail: [7.1, 3.4, 2.4, 1.5, 0.7, 0],
            services: [7.5, 4.5, 3.3, 2.2, 1.1, 0],
            storage: [5.4, 2.8, 1.8, 1.0, 0.4, 0],
            technology_science: [19.2, 11.1, 7.8, 5.1, 2.5, 0],
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/calculations/unitconversions.js":
      /*!*********************************************!*\
  !*** ./src/calculations/unitconversions.js ***!
  \*********************************************/
      /*! exports provided: convertNativeToMMBtu, convertMMBtuToNative */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "convertNativeToMMBtu",
            function () {
              return convertNativeToMMBtu;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "convertMMBtuToNative",
            function () {
              return convertMMBtuToNative;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          // native to mmbtu
          const elec_kwh_to_mmbtu = (kwh) => kwh * 0.003412;

          const gas_therms_to_mmbtu = (therms) => therms * 0.1;

          const fuel_one_gallons_to_mmbtu = (gal) => gal * 0.141;

          const fuel_two_gallons_to_mmbtu = (gal) => gal * 0.1467;

          const fuel_four_gallons_to_mmbtu = (gal) => gal * 0.51;

          const diesel_gallons_to_mmbtu = (gal) => gal * 0.137381; // mmbtu to native

          const elec_mmbtu_to_kwh = (mmbtu) => Math.round(mmbtu / 0.003412);

          const gas_mmbtu_to_therms = (mmbtu) => Math.round(mmbtu / 0.1);

          const fuel_one_mmbtu_to_gallons = (mmbtu) =>
            Math.round(mmbtu / 0.141);

          const fuel_two_mmbtu_to_gallons = (mmbtu) =>
            Math.round(mmbtu / 0.1467);

          const fuel_four_mmbtu_to_gallons = (mmbtu) =>
            Math.round(mmbtu / 0.51);

          const diesel_mmbtu_to_gallons = (mmbtu) =>
            Math.round(mmbtu / 0.137381);

          const placeholder_conversion = (v) => Math.round(v);

          const convertNativeToMMBtu = (val, fuel) => {
            let functionobj = {
              elec_grid: elec_kwh_to_mmbtu,
              elec_pv: elec_kwh_to_mmbtu,
              gas: gas_therms_to_mmbtu,
              fuel_1: fuel_one_gallons_to_mmbtu,
              fuel_2: fuel_two_gallons_to_mmbtu,
              fuel_4: fuel_four_gallons_to_mmbtu,
              diesel: diesel_gallons_to_mmbtu,
              // units already in mmbtu: placeholder function
              district_steam: placeholder_conversion,
              district_hot_water: placeholder_conversion,
              elec_driven_chiller: placeholder_conversion,
              absorption_chiller_gas: placeholder_conversion,
              engine_driven_chiller_gas: placeholder_conversion,
              district_chilled_water: placeholder_conversion,
            };
            return functionobj[fuel](val);
          };

          const convertMMBtuToNative = (val, fuel) => {
            return {
              elec_grid: elec_mmbtu_to_kwh,
              elec_pv: elec_mmbtu_to_kwh,
              gas: gas_mmbtu_to_therms,
              fuel_1: fuel_one_mmbtu_to_gallons,
              fuel_2: fuel_two_mmbtu_to_gallons,
              fuel_4: fuel_four_mmbtu_to_gallons,
              diesel: diesel_mmbtu_to_gallons,
              // units already in mmbtu: placeholder function
              district_steam: placeholder_conversion,
              district_hot_water: placeholder_conversion,
              district_chilled_water: placeholder_conversion,
              elec_driven_chiller: placeholder_conversion,
              absorption_chiller_gas: placeholder_conversion,
              engine_driven_chiller_gas: placeholder_conversion,
            }[fuel](val);
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/accordioncontainer.js":
      /*!**********************************************!*\
  !*** ./src/components/accordioncontainer.js ***!
  \**********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/index.js"
            );
          /* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/index.js"
            );
          /* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/index.js"
            );
          /* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js"
            );
          /* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/accordioncontainer.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"]
          )({
            root: {
              overflow: "hidden",
              marginBottom: 10,
            },
            accordionSummary: {
              fontWeight: 600,
            },
          });

          const AccordionContainer = (props) => {
            _s();

            const { label, tag } = props;

            const handleAccordionChange = (val) => {
              props.actions.toggleAccordion(val);
            };

            const classes = useStyles();
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
            )(
              _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"],
              {
                className: classes.root,
                expanded: tag === props.ui.activeAccordionKey,
                onChange: () => handleAccordionChange(tag),
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                    {
                      expandIcon: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                          "jsxDEV"
                        ]
                      )(
                        _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4___default.a,
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 32,
                          columnNumber: 37,
                        },
                        undefined
                      ),
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: classes.accordionSummary,
                          children: label,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 33,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 32,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {
                      children: props.children,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 35,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            AccordionContainer,
            "8g5FPXexvSEOsxdmU7HicukHGqY=",
            false,
            function () {
              return [useStyles];
            }
          );

          _c = AccordionContainer;

          const mapStateToProps = (state) => {
            return {
              actions: { ...state.actions },
              ui: { ...state.ui },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(AccordionContainer);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "AccordionContainer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/berdoapi/berdoapicomponent.js":
      /*!******************************************************!*\
  !*** ./src/components/berdoapi/berdoapicomponent.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _berdoapiinput__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./berdoapiinput */ "./src/components/berdoapi/berdoapiinput.js"
            );
          /* harmony import */ var _berdoapiresultstable__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./berdoapiresultstable */ "./src/components/berdoapi/berdoapiresultstable.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/berdoapi/berdoapicomponent.js";

          const BerdoApiComponent = (props) => {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    _berdoapiinput__WEBPACK_IMPORTED_MODULE_1__["default"],
                    {},
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 8,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    _berdoapiresultstable__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 9,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 7,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = BerdoApiComponent;

          const mapStateToProps = (store) => {
            return {};
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(BerdoApiComponent);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BerdoApiComponent");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/berdoapi/berdoapiinput.js":
      /*!**************************************************!*\
  !*** ./src/components/berdoapi/berdoapiinput.js ***!
  \**************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _userinputs_textinput__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../userinputs/textinput */ "./src/components/userinputs/textinput.js"
            );
          /* harmony import */ var _csvqueries__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./csvqueries */ "./src/components/berdoapi/csvqueries.js"
            );
          /* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js"
            );
          /* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/berdoapi/berdoapiinput.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"]
          )({
            root: {},
            yearselectContainer: {
              marginTop: 20,
              marginBottom: 20,
            },
            yearSelectTitle: {
              marginBottom: 10,
              color: "rgba(0,0,0,0.6)",
              fontSize: 12,
            },
          });

          const BerdoApiInput = (props) => {
            _s();

            const classes = useStyles();

            const inputQueryCallback = (e) => {
              let actionCallback = props.actions.setBerdoApiQueryResults;
              let inputval = e.target.value; // handle synchronous & ui updates

              props.actions.setBerdoApiInputQuery(inputval); // send to async query function

              Object(
                _csvqueries__WEBPACK_IMPORTED_MODULE_2__["queryCsvByTextInput"]
              )(inputval, actionCallback, props.berdoapi.berdo_dataset_year); // queryBuildingsByTextInput(inputval, actionCallback);
            };

            const changeDataSetYear = (e) => {
              let value = e.target.value;
              props.actions.setBerdoDatasetYear(value);
              props.actions.setBerdoApiInputQuery("");
              props.actions.setBerdoApiQueryResults([]);
            };

            const datasets = [
              {
                key: "2021_cal_2020",
                val: "2021_cal_2020",
                text: "2021 Dataset (calendar year 2020)",
              },
              {
                key: "2020_cal_2019",
                val: "2020_cal_2019",
                text: "2020 Dataset (calendar year 2019)",
              },
              {
                key: "2019_cal_2018",
                val: "2019_cal_2018",
                text: "2019 Dataset (calendar year 2018)",
              },
            ];
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: classes.yearselectContainer,
                      children: [
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: classes.yearSelectTitle,
                            children: "Choose Dataset Year",
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 68,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                            "jsxDEV"
                          ]
                        )(
                          _mui_material_Select__WEBPACK_IMPORTED_MODULE_3__[
                            "default"
                          ],
                          {
                            size: "small",
                            sx: {
                              minWidth: 500,
                            },
                            value: props.berdoapi.berdo_dataset_year,
                            onChange: changeDataSetYear,
                            children: datasets.map((d) =>
                              /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                                  "jsxDEV"
                                ]
                              )(
                                _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__[
                                  "default"
                                ],
                                {
                                  value: d.val,
                                  children: d.text,
                                },
                                d.key,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 76,
                                  columnNumber: 13,
                                },
                                undefined
                              )
                            ),
                          },
                          void 0,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 9,
                          },
                          undefined
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"]
                  )(
                    "div",
                    {
                      style: {
                        width: 500,
                      },
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[
                          "jsxDEV"
                        ]
                      )(
                        _userinputs_textinput__WEBPACK_IMPORTED_MODULE_1__[
                          "TextInput"
                        ],
                        {
                          label: "search for your building...",
                          value: props.berdoapi.inputQuery,
                          changeCallback: inputQueryCallback,
                          autoFocus: true,
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(BerdoApiInput, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = BerdoApiInput;

          const mapStateToProps = (store) => {
            return {
              berdoapi: { ...store.building.berdoapi },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(BerdoApiInput);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BerdoApiInput");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/berdoapi/berdoapiresultstable.js":
      /*!*********************************************************!*\
  !*** ./src/components/berdoapi/berdoapiresultstable.js ***!
  \*********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js"
            );
          /* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js"
            );
          /* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/index.js"
            );
          /* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js"
            );
          /* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js"
            );
          /* harmony import */ var _csvqueries__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./csvqueries */ "./src/components/berdoapi/csvqueries.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/berdoapi/berdoapiresultstable.js";

          const BerdoApiResultsTable = (props) => {
            const handleSelectBuilding = (e) => {
              let callbackFunction = (p) => {
                props.actions.setLoadedBuildingQueryInfo(p);
                props.actions.compileBuildingOutputs();
              };

              let berdo_dataset_year = props.berdoapi.berdo_dataset_year;
              Object(
                _csvqueries__WEBPACK_IMPORTED_MODULE_7__[
                  "queryBuildingDataFromCsv"
                ]
              )(e, callbackFunction, berdo_dataset_year);
              props.actions.setIsLoadModalOpen(false); // todo: create table & results summary

              props.actions.setIsLoadedSummaryModalOpen(true);
            };

            let { inputQueryResults } = props.berdoapi;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"]
            )(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"],
              {
                style: {
                  maxHeight: "500px",
                  overflow: "auto",
                },
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"]
                )(
                  _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__["default"],
                  {
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                          "jsxDEV"
                        ]
                      )(
                        _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__[
                          "default"
                        ],
                        {
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                              "jsxDEV"
                            ]
                          )(
                            _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ],
                            {
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                    "default"
                                  ],
                                  {
                                    children: "Property Name",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 33,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                    "default"
                                  ],
                                  {
                                    children: "Address",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 34,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                    "jsxDEV"
                                  ]
                                )(
                                  _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                    "default"
                                  ],
                                  {
                                    children: "Tax Parcel",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 35,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 32,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 31,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                          "jsxDEV"
                        ]
                      )(
                        _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__[
                          "default"
                        ],
                        {
                          children: inputQueryResults.map((e, i) => {
                            return /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                "jsxDEV"
                              ]
                            )(
                              _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__[
                                "default"
                              ],
                              {
                                hover: true,
                                onClick: () => handleSelectBuilding(e),
                                children: [
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      children: e["Property Name"],
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 42,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      children: e["Address"],
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 43,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      children: e["Tax Parcel"],
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 44,
                                      columnNumber: 17,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              i,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 41,
                                columnNumber: 15,
                              },
                              undefined
                            );
                          }),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = BerdoApiResultsTable;

          const mapStateToProps = (store) => {
            return {
              berdoapi: { ...store.building.berdoapi },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(BerdoApiResultsTable);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BerdoApiResultsTable");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/berdoapi/convertbuildingtype.js":
      /*!********************************************************!*\
  !*** ./src/components/berdoapi/convertbuildingtype.js ***!
  \********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const BUILDING_TYPE_CONVERSIONS = {
            "Residence Hall/Dormitory": "college_university",
            "College/University": "college_university",
            "Performing Arts": "assembly",
            Parking: "storage",
            "Retail Store": "retail",
            "Multifamily Housing": "multifamily_housing",
            "Mixed Use Property": "office",
            "Manufacturing/Industrial Plant": "manufacturing_industrial",
            Office: "office",
            "Urgent Care/Clinic/Other Outpatient": "healthcare",
            "Strip Mall": "retail",
            Hotel: "lodging",
            "Enclosed Mall": "retail",
            "Other - Lodging/Residential": "lodging",
            "Hospital (General Medical & Surgical)": "healthcare",
            "Self-Storage Facility": "storage",
            "K-12 School": "education",
            Other: "office",
            "Repair Services (Vehicle, Shoe, Locksmith, etc.)": "services",
            "Other - Mall": "retail",
            "Other - Utility": "storage",
            "Pre-school/Daycare": "education",
            "Other - Education": "education",
            "Senior Care Community": "multifamily_housing",
            "Distribution Center": "services",
            "Worship Facility": "assembly",
            "Bar/Nightclub": "services",
            Laboratory: "technology_science",
            "Non-Refrigerated Warehouse": "storage",
            "Movie Theater": "assembly",
            "Other - Services": "assembly",
            "Medical Office": "office",
            "Financial Office": "office",
            "Supermarket/Grocery Store": "services",
            "Other - Technology/Science": "technology_science",
            "Energy/Power Station": "manufacturing_industrial",
            "Other - Specialty Hospital": "healthcare",
            "Other - Recreation": "assembly",
            Museum: "assembly",
            "Social/Meeting Hall": "assembly",
            "Senior Living Community": "lodging",
            "Adult Education": "education",
            Restaurant: "services",
            "Other - Entertainment/Public Assembly": "assembly",
            Courthouse: "assembly",
            "Residential Care Facility": "lodging",
            Library: "assembly",
            "Fire Station": "assembly",
            "Police Station": "assembly",
            "Other - Public Services": "assembly",
            "Fitness Center/Health Club/Gym": "assembly",
            "Stadium (Open)": "assembly",
            "Ambulatory Surgical Center": "healthcare",
            "Wholesale Club/Supercenter": "services",
            "Other - Stadium": "assembly",
            "Indoor Arena": "assembly",
            "Ice/Curling Rink": "assembly",
            "Single Family Home": "multifamily_housing",
            "Food Service": "services",
            "ACTIVITY/SOCIAL CENTER": "assembly",
            "ADMINISTRATIVE BLDG": "office",
            Apartment: "multifamily_housing",
            "Apartment Property / APT 100+ UNITS": "multifamily_housing",
            "APT 100+ UNITS": "multifamily_housing",
            "APT 31-99 UNITS": "multifamily_housing",
            "APT 7-30 UNITS": "multifamily_housing",
            "APT SUBSIDIZED HOUSING": "multifamily_housing",
            "ATHLETIC FACILITY": "assembly",
            "AUDITORIUM / SPORT CTR": "assembly",
            "AUDITORIUM / THEATER": "assembly",
            "BOST REDEVELOP AUTH": "assembly",
            "BOSTON HOUSING AUTH": "assembly",
            "CHARITABLE ORGANIZTN": "assembly",
            "CHURCH, SYNAGOGUE": "assembly",
            "CITY OF BOSTON": "assembly",
            "CO-OP APARTMENT": "multifamily_housing",
            "COLD STORAGE WAREHOUSE": "storage",
            COLLEGE: "college_university",
            "COM MULTI-USE": "assembly",
            "COMM CONDO": "assembly",
            "CONDO MAIN": "multifamily_housing",
            "ELDERLY HOME": "lodging",
            "EXEMPT 121A PROPERTY": "office",
            "FOOD PROCESS PLANT": "manufacturing_industrial",
            "HEALTH CLUB": "assembly",
            HOSPITAL: "healthcare",
            "HOTEL/LODGING": "lodging",
            "INDUSTRIAL LOFT": "manufacturing_industrial",
            "LIGHT MFG / R & D": "technology_science",
            "MEDICAL CLINIC": "healthcare",
            MOTEL: "lodging",
            "NURSING HOME": "lodging",
            "OFFICE 1-2 STORY": "office",
            "OFFICE 3-9 STORY": "office",
            "Office Bldg": "office",
            "OFFICE BUILDING": "office",
            "OFFICE CONDO": "office",
            "OFFICE/ADMINISTR BLDG": "office",
            "OFFICE/INDUSTRIAL USE": "office",
            "OLD MANUFACTURING": "storage",
            "OTHER EXEMPT BLDG": "office",
            "PARKING GARAGE": "storage",
            "PARKING LOT": "storage",
            "PRIV SCHOOL /COLLEGE": "college_university",
            "RADIO TV STUDIO": "services",
            "RECREATION BUILDING": "assembly",
            "REHAB/COVALES FACILITY": "assembly",
            "RELIGIOUS ORGANIZATN": "assembly",
            "REPAIR GARAGE": "services",
            "RES/COMMERCIAL USE": "multifamily_housing",
            "RETAIL USE": "retail",
            "RETAIL/OFFICE": "retail",
            "RETAIL/WHLSALE/SERVICE": "retail",
            "ROOMING HOUSE": "lodging",
            SCHOOL: "education",
            "SCHOOL (TAXABLE)": "education",
            "SELF STORAGE WAREHOUSE": "storage",
            "SHOPPING CENTER": "retail",
            SHOWROOM: "assembly",
            "SUBTERRANEAN GARAGE": "storage",
            SUPERMARKET: "services",
            "TENNIS/ RACQUET CLUB": "assembly",
            "TRAINING FACILITY": "assembly",
            "U.S. GOVERNMENT": "office",
            "VACANT LAND": "office",
            WAREHOUSE: "storage",
          };

          const convertBuildingType = (input) => {
            if (input in BUILDING_TYPE_CONVERSIONS) {
              return BUILDING_TYPE_CONVERSIONS[input];
            } else {
              return "office";
            }
          };

          /* harmony default export */ __webpack_exports__["default"] =
            convertBuildingType;

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/berdoapi/convertqueryresults.js":
      /*!********************************************************!*\
  !*** ./src/components/berdoapi/convertqueryresults.js ***!
  \********************************************************/
      /*! exports provided: convertQueryResults */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "convertQueryResults",
            function () {
              return convertQueryResults;
            }
          );
          /* harmony import */ var _convertbuildingtype__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./convertbuildingtype */ "./src/components/berdoapi/convertbuildingtype.js"
            );
          /* harmony import */ var _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../calculations/unitconversions */ "./src/calculations/unitconversions.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          /* 
ASSUMPTIONS IN DATASET CONVERSION:
- no input for multiple fuel oils... assume BERDO Input Number Two
- no 'district chw' input in BERDO calcs. assuming elec driven.
- no '% Other (Diesel #2, Kerosene, Propane or Other Fuel)' input in BERDO calcs. Assume diesel.
- other conversion lookups to be found in convertBuildingType
*/

          const convertQueryResults = (results) => {
            let area = +results["Gross Area (sq ft)"];
            let type = Object(
              _convertbuildingtype__WEBPACK_IMPORTED_MODULE_0__["default"]
            )(results["Property Type"]);
            let name = results["Property Name"] + " - " + results["Address"];
            let total_mmbtu = +results["Total Site Energy (kBTU)"] / 1e3;
            let elec_mmbtu = total_mmbtu * +results["% Electricity"];
            let gas_mmbtu = total_mmbtu * +results["% Gas"];
            let district_chw_mmbtu =
              total_mmbtu * +results["% District Chilled Water"];
            let district_hw_mmbtu =
              total_mmbtu * +results["% District Hot Water"];
            let steam_mmbtu = total_mmbtu * +results["% Steam"];
            let fuel_oil_two_mmbtu = total_mmbtu * +results["% Fuel Oil"];
            let other_mmbtu =
              total_mmbtu *
              +results["% Other (Diesel #2, Kerosene, Propane or Other Fuel)"];
            let elec_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(elec_mmbtu, "elec_grid");
            let gas_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(gas_mmbtu, "gas");
            let district_chw_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(district_chw_mmbtu, "district_chilled_water");
            let district_hw_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(district_hw_mmbtu, "district_hot_water");
            let steam_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(steam_mmbtu, "district_steam");
            let fuel_oil_two_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(fuel_oil_two_mmbtu, "fuel_2");
            let other_native = Object(
              _calculations_unitconversions__WEBPACK_IMPORTED_MODULE_1__[
                "convertMMBtuToNative"
              ]
            )(other_mmbtu, "diesel");
            let onsite_elec_pv = results["Onsite Renewable (kWh)"];
            let areas = [
              {
                type: type,
                area: area,
                index: 0,
              },
            ];
            let consumption = {
              elec_grid: elec_native || 0,
              gas: gas_native || 0,
              fuel_1: 0,
              // fuel not in query reults
              fuel_2: fuel_oil_two_native || 0,
              fuel_4: fuel_oil_two_native || 0,
              diesel: other_native || 0,
              district_steam: steam_native || 0,
              district_hot_water: district_hw_native || 0,
              elec_driven_chiller: district_chw_native || 0,
              absorption_chiller_gas: 0,
              // fuel not in query reults
              engine_driven_chiller_gas: 0, // fuel not in query reults
            };
            let onsite_generation_native = {
              elec_pv: onsite_elec_pv,
            };
            return {
              areas: areas,
              consumption: consumption,
              name: name,
              onsite_generation_native: onsite_generation_native,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/berdoapi/csvqueries.js":
      /*!***********************************************!*\
  !*** ./src/components/berdoapi/csvqueries.js ***!
  \***********************************************/
      /*! exports provided: queryCsvByTextInput, queryBuildingDataFromCsv */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "queryCsvByTextInput",
            function () {
              return queryCsvByTextInput;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "queryBuildingDataFromCsv",
            function () {
              return queryBuildingDataFromCsv;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const dataset_lookup = {
            "2021_cal_2020": "./dataset_2021_calendar_2020.csv",
            "2020_cal_2019": "./dataset_2020_calendar_2019.csv",
            "2019_cal_2018": "./dataset_2019_calendar_2018.csv",
          };

          const queryCsvByTextInput = async (
            input,
            callbackFunction,
            dataset_year
          ) => {
            const dataset = dataset_lookup[dataset_year];
            d3__WEBPACK_IMPORTED_MODULE_0__["csv"](dataset).then((arr) => {
              let filtered = arr.filter((row) => {
                let query_string =
                  row["Property Name"] + row["Address"] + row["Tax Parcel"];
                let input_lower = input.toLowerCase();
                let query_lower = query_string.toLowerCase();

                if (query_lower.includes(input_lower)) {
                  return row;
                }
              });
              callbackFunction(filtered);
            });
          };

          const queryBuildingDataFromCsv = async (
            input,
            callbackFunction,
            dataset_year
          ) => {
            const dataset = dataset_lookup[dataset_year];
            d3__WEBPACK_IMPORTED_MODULE_0__["csv"](dataset).then((arr) => {
              let filtered = arr.filter((row) => {
                let row_property_name = row["Property Name"];
                let row_tax_parcel = row["Tax Parcel"];
                let row_address = row["Address"];
                let input_property_name = input["Property Name"];
                let input_tax_parcel = input["Tax Parcel"];
                let input_address = input["Address"];

                if (
                  row_property_name === input_property_name &&
                  row_tax_parcel === input_tax_parcel &&
                  row_address === input_address
                ) {
                  return row;
                }
              });

              if (filtered.length > 1) {
                console.error("error: more than one record found for query.");
              }

              callbackFunction(filtered[0]);
            });
            return;
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/buildingfeedbackmessage.js":
      /*!***************************************************!*\
  !*** ./src/components/buildingfeedbackmessage.js ***!
  \***************************************************/
      /*! exports provided: BuildingFeedbackMessage */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "BuildingFeedbackMessage",
            function () {
              return BuildingFeedbackMessage;
            }
          );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/buildingfeedbackmessage.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"]
          )({
            root: {
              padding: "20%",
            },
            copy: {
              verticalAlign: "middle",
              textAlign: "center",
              fontSize: "1em",
              color: "rgba(0,0,0,0.6)",
            },
          });

          const BuildingFeedbackMessage = (props) => {
            _s();

            const { message } = props;
            const classes = useStyles();
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
            )(
              "div",
              {
                className: classes.root,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"]
                )(
                  "div",
                  {
                    className: classes.copy,
                    children: message,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            BuildingFeedbackMessage,
            "8g5FPXexvSEOsxdmU7HicukHGqY=",
            false,
            function () {
              return [useStyles];
            }
          );

          _c = BuildingFeedbackMessage;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BuildingFeedbackMessage");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/acpplot/dimensions.js":
      /*!*****************************************************!*\
  !*** ./src/components/charts/acpplot/dimensions.js ***!
  \*****************************************************/
      /*! exports provided: createDimensions */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createDimensions",
            function () {
              return createDimensions;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createDimensions = (node, margins, windowprops) => {
            // calculate dimensions
            const containerdims = {
              width: node
                ? node.getBoundingClientRect()["width"]
                : windowprops.dims.width - 400,
              height: node
                ? node.getBoundingClientRect()["height"]
                : windowprops.dims.height - 225,
            };
            let chartdims = {
              width: containerdims.width - margins.l - margins.r,
              height: containerdims.height - margins.t - margins.b,
            };
            return {
              containerdims,
              chartdims,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/acpplot/index.js":
      /*!************************************************!*\
  !*** ./src/components/charts/acpplot/index.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./dimensions */ "./src/components/charts/acpplot/dimensions.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/charts/acpplot/index.js",
            _s = __webpack_require__.$Refresh$.signature();

          const ACPPlot = (props) => {
            _s();

            const container = Object(
              react__WEBPACK_IMPORTED_MODULE_2__["useRef"]
            )(null);
            Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
              createChart();
            });

            const createChart = () => {
              let data = props.building.alternative_compliance_payments;
              let node = container.current;
              let margins = {
                t: 50,
                b: 175,
                r: 200,
                l: 100,
              };
              let { containerdims, chartdims } = Object(
                _dimensions__WEBPACK_IMPORTED_MODULE_3__["createDimensions"]
              )(node, margins, props.window);
              let colorTableau =
                d3__WEBPACK_IMPORTED_MODULE_1__["schemeTableau10"];
              console.log(containerdims, chartdims); // svg and groups

              let svg = d3__WEBPACK_IMPORTED_MODULE_1__["select"](node)
                .selectAll("svg")
                .data([0])
                .join("svg")
                .attr("width", containerdims.width)
                .attr("height", containerdims.height);
              let axis_g = svg
                .selectAll(".axis-g")
                .data([0])
                .join("g")
                .attr("class", "axis-g")
                .attr("transform", `translate(${margins.l}, ${margins.t})`);
              let legend_g = svg
                .selectAll(".legend-g")
                .data([0])
                .join("g")
                .attr("class", "legend-g")
                .attr(
                  "transform",
                  `translate(${chartdims.width / 2 - 225}, ${
                    margins.t + chartdims.height + 50
                  })`
                );
              let plot_g = svg
                .selectAll(".plot-g")
                .data([0])
                .join("g")
                .attr("class", "plot-g")
                .attr("transform", `translate(${margins.l}, ${margins.t})`);
              let annotation_g = svg
                .selectAll(".annotation-g")
                .data([0])
                .join("g")
                .attr("class", "annotation-g")
                .attr("transform", `translate(${margins.l}, ${margins.t})`); // scales
              //   let xAxisBottom = d3
              //   .axisBottom()
              //   .scale(xScale)
              //   .tickFormat(d3.format("0"))
              //   .tickSizeOuter(0);
              // let xAxisTop = d3
              //   .axisTop()
              //   .scale(xScale)
              //   .ticks(0)
              //   .tickFormat(d3.format("0"))
              //   .tickSizeOuter(0);

              let xScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleTime"]()
                .range([0, chartdims.width])
                .domain([2018, 2051]);
              let acp_extent_high = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](
                data,
                (d) => d["acp_payment"]
              );
              let acp_extent_low = d3__WEBPACK_IMPORTED_MODULE_1__["extent"](
                data,
                (d) => d["payment_avoidance"]
              );
              let acp_extent = [acp_extent_low[0], acp_extent_high[1]];
              let yScaleLeft = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
                .range([chartdims.height, 0])
                .domain(acp_extent);
              let yScaleRight = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]()
                .range([chartdims.height, 0])
                .domain(
                  d3__WEBPACK_IMPORTED_MODULE_1__["extent"](
                    data,
                    (d) => d["carbon_deficit_absolute"]
                  )
                );
              let xaxis_top_g = axis_g
                .selectAll(".x-axis-top-g")
                .data([0])
                .join("g")
                .attr("class", "x-axis-top-g")
                .call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisTop"]()
                    .scale(xScale)
                    .ticks(0)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]("0"))
                    .tickSizeOuter(0)
                );
              let xaxis_bottom_g = axis_g
                .selectAll(".x-axis-bottom-g")
                .data([0])
                .join("g")
                .attr("class", "x-axis-bottom-g")
                .attr("transform", `translate(${0},${chartdims.height / 2})`)
                .call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]()
                    .scale(xScale)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]("0"))
                    .tickSizeOuter(0)
                );
              let yaxis_left_g = axis_g
                .selectAll(".y-axis-left-g")
                .data([0])
                .join("g")
                .attr("class", "y-axis-left-g")
                .attr("transform", `translate(${0},${0})`)
                .call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]()
                    .scale(yScaleLeft)
                    .tickSizeOuter(0)
                );
              let yaxis_right_g = axis_g
                .selectAll(".y-axis-right-g")
                .data([0])
                .join("g")
                .attr("class", "y-axis-right-g")
                .attr("transform", `translate(${chartdims.width},${0})`)
                .call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisRight"]()
                    .scale(yScaleRight)
                    .tickSizeOuter(0)
                ); // let paymentLine = d3
              //   .line()
              //   .x((d) => xScale(d.year))
              //   .y((d) => yScaleLeft(d.acp_payment));
              // plot_g
              //   .selectAll(".payment-line")
              //   .data([0])
              //   .join("path")
              //   .attr("class", "payment-line");
              // plot_g
              //   .selectAll(".payment-line")
              //   .datum(data)
              //   .join("path")
              //   .attr("class", "payment-line")
              //   .attr("stroke", "blue")
              //   .attr("stroke-width", 2)
              //   .attr("fill", "none")
              //   .attr("d", paymentLine);

              plot_g
                .selectAll(".payment-bar")
                .data(data)
                .join("rect")
                .attr("class", "payment-bar")
                .attr("x", (d) => xScale(d.year) - 5)
                .attr("y", (d) => yScaleLeft(d.acp_payment) / 2)
                .attr(
                  "height",
                  (d) => chartdims.height - yScaleLeft(d.acp_payment)
                )
                .attr("width", 10)
                .style("fill", colorTableau[2]);
              plot_g
                .selectAll(".payment-avoidance-bar")
                .data(data)
                .join("rect")
                .attr("class", "payment-avoidance-bar")
                .attr("x", (d) => xScale(d.year) - 5)
                .attr("y", (d) => yScaleLeft(d.acp_payment) / 2)
                .attr(
                  "height",
                  (d) => chartdims.height - yScaleLeft(d.payment_avoidance)
                )
                .attr("width", 10)
                .style("fill", colorTableau[3]); // console.log(data);
            }; // const createAxes = (config) => {};
            // createAxes({});

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                style: {
                  height: "100%",
                  width: "100%",
                },
                ref: container,
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 10,
              },
              undefined
            );
          };

          _s(ACPPlot, "gP936EAkbq44zYYGRnj90r2fLhg=");

          _c = ACPPlot;

          const mapStateToProps = (state) => {
            return {
              building: { ...state.building },
              window: { ...state.window },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(ACPPlot);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "ACPPlot");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/acpscales.js":
      /*!*****************************************************!*\
  !*** ./src/components/charts/lineplot/acpscales.js ***!
  \*****************************************************/
      /*! exports provided: createACPScales */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createACPScales",
            function () {
              return createACPScales;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createACPScales = (config) => {
            const { chartdims, data, domain_padding } = config;
            let xACPScale = d3__WEBPACK_IMPORTED_MODULE_0__["scaleTime"]()
              .range([0, chartdims.width])
              .domain([2018, 2051]);
            let acp_carbon_extent_high = d3__WEBPACK_IMPORTED_MODULE_0__[
              "extent"
            ](data, (d) => d["carbon_deficit_normalized"]);
            let acp_carbon_extent_low = d3__WEBPACK_IMPORTED_MODULE_0__[
              "extent"
            ](data, (d) => -d["carbon_surplus_normalized"]);
            let acp_carbon_extent = [
              acp_carbon_extent_low[0],
              acp_carbon_extent_high[1],
            ];
            let acp_payment_extent_high = d3__WEBPACK_IMPORTED_MODULE_0__[
              "extent"
            ](data, (d) => d["acp_payment"]);
            let acp_payment_extent_low = d3__WEBPACK_IMPORTED_MODULE_0__[
              "extent"
            ](data, (d) => -d["payment_avoidance"]);
            let acp_payment_extent = [
              acp_payment_extent_low[0],
              acp_payment_extent_high[1],
            ];
            let yACPScaleLeft = d3__WEBPACK_IMPORTED_MODULE_0__["scaleLinear"]()
              .range([chartdims.height, 0])
              .domain(acp_carbon_extent);
            let yACPScaleRight = d3__WEBPACK_IMPORTED_MODULE_0__[
              "scaleLinear"
            ]()
              .range([chartdims.height, 0])
              .domain(acp_payment_extent);
            return {
              xACPScale,
              yACPScaleLeft,
              yACPScaleRight,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/axisgroups.js":
      /*!******************************************************!*\
  !*** ./src/components/charts/lineplot/axisgroups.js ***!
  \******************************************************/
      /*! exports provided: createAxisGroups */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createAxisGroups",
            function () {
              return createAxisGroups;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createAxisGroups = (config) => {
            const { svg, chartdims, margins } = config; // create axes

            let x_axis_top_g = svg
              .selectAll(".xaxis-g-top")
              .data([0])
              .join("g")
              .attr("class", "xaxis-g-top")
              .attr("transform", () => `translate(${margins.l},${margins.t})`);
            let x_axis_bottom_g = svg
              .selectAll(".xaxis-g-bottom")
              .data([0])
              .join("g")
              .attr("class", "xaxis-g-bottom")
              .attr(
                "transform",
                () => `translate(${margins.l},${margins.t + chartdims.height})`
              );
            let y_axis_left_g = svg
              .selectAll(".yaxis-g-left")
              .data([0])
              .join("g")
              .attr("class", "yaxis-g-left")
              .attr("transform", () => `translate(${margins.l},${margins.t})`);
            let y_axis_right_g = svg
              .selectAll(".yaxis-g-right")
              .data([0])
              .join("g")
              .attr("class", "yaxis-g-right")
              .attr(
                "transform",
                () => `translate(${margins.l + chartdims.width},${margins.t})`
              );
            return {
              x_axis_bottom_g,
              x_axis_top_g,
              y_axis_left_g,
              y_axis_right_g,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/datacalcs.js":
      /*!*****************************************************!*\
  !*** ./src/components/charts/lineplot/datacalcs.js ***!
  \*****************************************************/
      /*! exports provided: createDataArrays */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createDataArrays",
            function () {
              return createDataArrays;
            }
          );
          /* harmony import */ var _thresholdarray__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./thresholdarray */ "./src/components/charts/lineplot/thresholdarray.js"
            );
          /* harmony import */ var _thresholdareacalcs__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./thresholdareacalcs */ "./src/components/charts/lineplot/thresholdareacalcs.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createDataArrays = (thresholds_raw, emissions_raw) => {
            // process data. handle any missing values due
            // to area regulations here.
            // console.log(thresholds_raw);
            // console.log(emissions_raw);
            // console.log(building_validation);
            let emissions = emissions_raw.map((e) => {
              return {
                year: e.year,
                val: e.normalized.total,
              };
            });
            let emissions_simple =
              emissions.length > 30
                ? [
                    emissions.slice(0)[0],
                    emissions.slice(-2)[0],
                    emissions.slice(-1)[0],
                  ]
                : emissions;
            let thresholds = Object(
              _thresholdarray__WEBPACK_IMPORTED_MODULE_0__["getThresholdArray"]
            )(thresholds_raw.normalized, emissions);
            let areaArrays = Object(
              _thresholdareacalcs__WEBPACK_IMPORTED_MODULE_1__["calcAreas"]
            )(thresholds, emissions);
            return {
              emissions,
              emissions_simple,
              thresholds,
              areaArrays,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/index.js":
      /*!*************************************************!*\
  !*** ./src/components/charts/lineplot/index.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var _axisgroups__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./axisgroups */ "./src/components/charts/lineplot/axisgroups.js"
            );
          /* harmony import */ var _thresholdtitles__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./thresholdtitles */ "./src/components/charts/lineplot/thresholdtitles.js"
            );
          /* harmony import */ var _acpscales__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./acpscales */ "./src/components/charts/lineplot/acpscales.js"
            );
          /* harmony import */ var _thresholdscales__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./thresholdscales */ "./src/components/charts/lineplot/thresholdscales.js"
            );
          /* harmony import */ var _thresholdannotations__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./thresholdannotations */ "./src/components/charts/lineplot/thresholdannotations.js"
            );
          /* harmony import */ var _svggroups__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./svggroups */ "./src/components/charts/lineplot/svggroups.js"
            );
          /* harmony import */ var _thresholdplot__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! ./thresholdplot */ "./src/components/charts/lineplot/thresholdplot.js"
            );
          /* harmony import */ var _thresholdlegend__WEBPACK_IMPORTED_MODULE_11__ =
            __webpack_require__(
              /*! ./thresholdlegend */ "./src/components/charts/lineplot/thresholdlegend.js"
            );
          /* harmony import */ var _datacalcs__WEBPACK_IMPORTED_MODULE_12__ =
            __webpack_require__(
              /*! ./datacalcs */ "./src/components/charts/lineplot/datacalcs.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/charts/lineplot/index.js",
            _s = __webpack_require__.$Refresh$.signature();

          const LinePlot = (props) => {
            _s();

            const container = Object(
              react__WEBPACK_IMPORTED_MODULE_3__["useRef"]
            )(null);

            const toggleChartType = () => {
              let new_plot_type_view =
                props.ui.activePlot == "thresholds" ? "payments" : "thresholds";
              props.actions.setActivePlot(new_plot_type_view);
            };

            Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
              createChart(props.ui.activePlot);
            });

            const createChart = (activeView) => {
              let node = container.current;
              /*
    --------------
    GENERAL DIMENSIONS AND AESTHETICS
    --------------
    */

              let margins = {
                t: 50,
                b: 175,
                r: 200,
                l: 100,
              };
              let containerdims = {
                width: node
                  ? node.getBoundingClientRect()["width"]
                  : props.window.dims.width - 400,
                height: node
                  ? node.getBoundingClientRect()["height"]
                  : props.window.dims.height - 225,
              };
              let chartdims = {
                width: containerdims.width - margins.l - margins.r,
                height: containerdims.height - margins.t - margins.b,
              };
              let colorTableau =
                d3__WEBPACK_IMPORTED_MODULE_1__["schemeTableau10"];
              const colors = {
                bottomFill: "rgba(0,0,0,0.1)",
                topFill: "black",
                middleFill: colorTableau[2],
                middleFillStroke: "black",
                emissionsLineStroke: colorTableau[0],
                emissionsCircleFill: colorTableau[0],
                emissionsCircleStroke: "black",
                thresholdCircleFillOn: colorTableau[2],
                thresholdCircleStrokeOn: "black",
                thresholdCircleFillOff: colorTableau[3],
                thresholdCircleStrokeOff: "black",
                annotationLineOn: "black",
                annotationLineOff: "black",
                annotationTextOn: colorTableau[2],
                annotationTextOff: "black",
              };
              const domain_padding = 1.2;
              const transition_duration = 1000;
              /*
    --------------
    GENERATE DATA ARRAYS
    --------------
    */

              let { emissions, emissions_simple, thresholds, areaArrays } =
                Object(
                  _datacalcs__WEBPACK_IMPORTED_MODULE_12__["createDataArrays"]
                )(
                  props.building.emissions_thresholds,
                  props.building.annual_emissions,
                  props.building.building_validation,
                  props.building.alternative_compliance_payments
                );
              let { alternative_compliance_payments } = props.building;
              let emissions_simple_normalized = [
                {
                  year: 2018,
                  val: 0,
                },
                {
                  year: 2050,
                  val: 0,
                },
                {
                  year: 2051,
                  val: 0,
                },
              ];
              /*
    --------------
    COMMON SHARED SVG ELEMENTS AND DIMENSIONS
    --------------
    */

              let { svg, plot_g, annotation_g, legend_g, axis_g, title_g } =
                Object(
                  _svggroups__WEBPACK_IMPORTED_MODULE_9__["createSvgGroups"]
                )({
                  containerdims: containerdims,
                  chartdims: chartdims,
                  margins: margins,
                  node: node,
                });
              let {
                x_axis_bottom_g,
                x_axis_top_g,
                y_axis_left_g,
                y_axis_right_g,
              } = Object(
                _axisgroups__WEBPACK_IMPORTED_MODULE_4__["createAxisGroups"]
              )({
                svg: axis_g,
                margins: margins,
                chartdims: chartdims,
              });
              let bottom_area = plot_g
                .selectAll(".bottom-area")
                .data([0])
                .join("path")
                .attr("class", "bottom-area");
              let middle_area = plot_g
                .selectAll(".middle-area")
                .data([0])
                .join("polygon")
                .attr("class", "middle-area")
                .attr("clip-path", "url(#thresh-clip-id)");
              let clip_area = plot_g
                .selectAll(".clip-area-element")
                .data([0])
                .join("clipPath")
                .attr("class", "clip-area-element")
                .attr("id", "thresh-clip-id");
              let emissions_line = plot_g
                .selectAll(".emissions-line")
                .data([0])
                .join("path")
                .attr("class", "emissions-line");
              let emissions_today_circle = plot_g
                .selectAll(".emissions-today-circle")
                .data([0])
                .join("circle")
                .attr("class", "emissions-today-circle");
              let threshold_annotation_g = annotation_g
                .selectAll(".threshold-annotation-g")
                .data([0])
                .join("g")
                .attr("class", "threshold-annotation-g");
              let threshold_points = plot_g
                .selectAll(".thresh-point")
                .data([0])
                .join("circle")
                .attr("class", "thresh-point");
              let y_title = title_g
                .selectAll(".y-axis-title")
                .data([0])
                .join("text")
                .attr("class", "y-axis-title")
                .attr("transform", "rotate(270)")
                .attr("x", -(margins.t + chartdims.height / 2))
                .attr("y", margins.l / 2 - 15)
                .attr("text-anchor", "middle");
              let x_title = title_g
                .selectAll(".x-axis-title")
                .data([0])
                .join("text")
                .attr("class", "x-axis-title");
              let chart_title = title_g
                .selectAll(".chart-title")
                .data([0])
                .join("text")
                .attr("class", "chart-title");
              /*
    --------------
    THRESHOLD VIEW
    --------------
    */

              let { xThresholdScale, yThresholdScale } = Object(
                _thresholdscales__WEBPACK_IMPORTED_MODULE_7__[
                  "createThresholdScales"
                ]
              )({
                chartdims: chartdims,
                emissions: emissions,
                thresholds: thresholds,
                domain_padding: domain_padding,
              });

              if (activeView == "thresholds") {
                x_axis_top_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisTop"]()
                    .scale(xThresholdScale)
                    .ticks(0)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]("0"))
                    .tickSizeOuter(0)
                );
                x_axis_bottom_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]()
                    .scale(xThresholdScale)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]("0"))
                    .tickSizeOuter(0)
                );
                y_axis_left_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]()
                    .scale(yThresholdScale)
                    .ticks(5)
                    .tickFormat(
                      d3__WEBPACK_IMPORTED_MODULE_1__["format"](".2f")
                    )
                    .tickSizeOuter(0)
                );
                y_axis_right_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisRight"]()
                    .scale(yThresholdScale)
                    .ticks(0)
                    .tickFormat(
                      d3__WEBPACK_IMPORTED_MODULE_1__["format"](".2f")
                    )
                    .tickSizeOuter(0)
                );
                bottom_area
                  .data([areaArrays.bottom])
                  .attr(
                    "d",
                    d3__WEBPACK_IMPORTED_MODULE_1__["area"]()
                      .x((d) => xThresholdScale(d.year))
                      .y0(chartdims.height)
                      .y1((d) => yThresholdScale(d.val))
                  )
                  .attr("fill", colors.bottomFill);
                middle_area
                  .data([areaArrays.middle])
                  .attr("points", (d) => {
                    return d
                      .map((d) => {
                        return [
                          xThresholdScale(d.year),
                          yThresholdScale(d.val),
                        ].join(",");
                      })
                      .join(" ");
                  })
                  .attr("fill", colors.middleFill)
                  .attr("stroke", colors.middleFillStroke)
                  .attr("opacity", 1);
                clip_area
                  .selectAll(".clip-area-path")
                  .data([emissions_simple])
                  .join("path")
                  .attr("class", "clip-area-path")
                  .attr(
                    "d",
                    d3__WEBPACK_IMPORTED_MODULE_1__["area"]()
                      .x((d) => xThresholdScale(d.year))
                      .y0((d) => chartdims.height)
                      .y1((d) => yThresholdScale(d.val))
                  );
                emissions_line
                  .datum(emissions_simple)
                  .join("path")
                  .attr("class", "emissions-line")
                  .attr("stroke", colors.emissionsLineStroke)
                  .attr("stroke-width", 2)
                  .transition()
                  .duration(transition_duration)
                  .attr(
                    "d",
                    d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
                      .x((d) => xThresholdScale(d.year))
                      .y((d) => yThresholdScale(d.val))
                  )
                  .attr("fill", "none");
                emissions_today_circle
                  .data(emissions_simple)
                  .join("circle")
                  .attr("class", "emissions-today-circle")
                  .transition()
                  .duration(transition_duration)
                  .attr("cx", (d) => xThresholdScale(d.year))
                  .attr("cy", (d) => yThresholdScale(d.val))
                  .attr("r", (d, i) => (i === 0 ? 5 : 0))
                  .attr("fill", colors.emissionsCircleFill)
                  .attr("stroke", colors.emissionsCircleStroke);
                threshold_annotation_g
                  .selectAll(".thresh-text")
                  .data(thresholds)
                  .join("text")
                  .attr("class", "thresh-text")
                  .attr("x", xThresholdScale(2051) + 15)
                  .attr("y", (d) =>
                    d.val !== null ? yThresholdScale(d.val) + 5 : 0
                  )
                  .text(
                    (d) =>
                      `${d.period} es: ${d3__WEBPACK_IMPORTED_MODULE_1__[
                        "format"
                      ](".2f")(d.val)}`
                  )
                  .style("fill", (d) =>
                    d.threshold_met
                      ? colors.annotationTextOff
                      : colors.annotationTextOn
                  )
                  .style("font-size", "1.0em");
                threshold_annotation_g
                  .selectAll(".thresh-line")
                  .data(thresholds)
                  .join("line")
                  .attr("class", "thresh-line")
                  .attr("x1", (d) => xThresholdScale(d.starting_year) + 5)
                  .attr("x2", (d) => xThresholdScale(2051))
                  .attr("y1", (d) => yThresholdScale(d.val))
                  .attr("y2", (d) => yThresholdScale(d.val))
                  .attr("stroke-dasharray", "2 0 2")
                  .style("stroke", (d) =>
                    d.threshold_met
                      ? colors.annotationLineOff
                      : colors.annotationLineOn
                  );
                threshold_points
                  .data(thresholds)
                  .join("circle")
                  .attr("class", "thresh-point")
                  .attr("r", 5)
                  .attr("cx", (d) => xThresholdScale(d.starting_year))
                  .attr("cy", (d) => yThresholdScale(d.val))
                  .attr("stroke", (d) =>
                    d.threshold_met
                      ? colors.thresholdCircleStrokeOff
                      : colors.thresholdCircleStrokeOn
                  )
                  .style("fill", (d) =>
                    d.threshold_met
                      ? colors.thresholdCircleFillOff
                      : colors.thresholdCircleFillOn
                  );
              }

              y_title
                .selectAll(".y-axis-title")
                .data([0])
                .join("text")
                .attr("class", "y-axis-title")
                .attr("transform", "rotate(270)")
                .attr("x", -(margins.t + chartdims.height / 2))
                .attr("y", margins.l / 2 - 15)
                .attr("text-anchor", "middle")
                .text("es (kgCO2e/sf/yr)");
              x_title
                .selectAll(".x-axis-title")
                .data([0])
                .join("text")
                .attr("class", "x-axis-title")
                .attr("x", margins.l + chartdims.width / 2)
                .attr("y", margins.t + chartdims.height + 40)
                .attr("text-anchor", "middle")
                .text("Year")
                .style("font-size", "1em");
              chart_title
                .selectAll(".chart-title")
                .data([0])
                .join("text")
                .attr("class", "chart-title")
                .attr("x", margins.l + chartdims.width / 2)
                .attr("y", margins.t - 20)
                .attr("text-anchor", "middle")
                .text("Emissions Standard (es) Threshold Summary")
                .style("font-size", "1.25em");
              let threshold_legend_g = Object(
                _thresholdlegend__WEBPACK_IMPORTED_MODULE_11__[
                  "createThresholdLegend"
                ]
              )({
                element: legend_g,
                colors: colors,
              });
              /*
    --------------
    ACP VIEW
    --------------
    */

              if (activeView == "payments") {
                let thresh_components = [
                  threshold_annotation_g,
                  threshold_legend_g,
                  threshold_points,
                  bottom_area,
                  middle_area,
                  clip_area,
                ];
                thresh_components.forEach((f) => f.remove());
                let { xACPScale, yACPScaleLeft, yACPScaleRight } = Object(
                  _acpscales__WEBPACK_IMPORTED_MODULE_6__["createACPScales"]
                )({
                  chartdims: chartdims,
                  data: alternative_compliance_payments,
                  domain_padding: domain_padding,
                });
                x_axis_bottom_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]()
                    .scale(xACPScale)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]("0"))
                    .tickSizeOuter(0)
                );
                x_axis_top_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]()
                    .scale(xACPScale)
                    .ticks(0)
                    .tickFormat(d3__WEBPACK_IMPORTED_MODULE_1__["format"]("0"))
                    .tickSizeOuter(0)
                );
                y_axis_left_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]()
                    .scale(yACPScaleLeft)
                    .ticks(5)
                    .tickFormat(
                      d3__WEBPACK_IMPORTED_MODULE_1__["format"](".2f")
                    )
                    .tickSizeOuter(0)
                );
                y_axis_right_g.call(
                  d3__WEBPACK_IMPORTED_MODULE_1__["axisRight"]()
                    .scale(yACPScaleRight)
                    .ticks(5)
                    .tickFormat(
                      d3__WEBPACK_IMPORTED_MODULE_1__["format"]("$,.0f")
                    )
                    .tickSizeOuter(0)
                );
                emissions_line
                  .datum(emissions_simple_normalized)
                  .transition()
                  .duration(transition_duration)
                  .attr(
                    "d",
                    d3__WEBPACK_IMPORTED_MODULE_1__["line"]()
                      .x((d) => xACPScale(d.year))
                      .y((d) => yACPScaleLeft(d.val))
                  );
                emissions_today_circle
                  .transition()
                  .duration(transition_duration)
                  .attr("cx", xACPScale(2018))
                  .attr("cy", yACPScaleLeft(0));
                plot_g
                  .selectAll(".payment-bar")
                  .data(alternative_compliance_payments)
                  .join("rect")
                  .attr("class", "payment-bar")
                  .attr(
                    "x",
                    (d) => xACPScale(d.year) - (chartdims.width / 33 - 2) / 2
                  )
                  .attr("y", (d) => yACPScaleRight(0))
                  .attr(
                    "height",
                    (d) => yACPScaleRight(0) - yACPScaleRight(d.acp_payment)
                  )
                  .attr("width", chartdims.width / 33 - 2)
                  .attr("stroke", "gray")
                  .style("fill", colorTableau[2]);
                plot_g
                  .selectAll(".payment-avoidance-bar")
                  .data(alternative_compliance_payments)
                  .join("rect")
                  .attr("class", "payment-avoidance-bar")
                  .attr(
                    "x",
                    (d) => xACPScale(d.year) - (chartdims.width / 33 - 2) / 2
                  )
                  .attr("y", (d) => yACPScaleRight(d.payment_avoidance))
                  .attr(
                    "height",
                    (d) =>
                      yACPScaleRight(0) - yACPScaleRight(d.payment_avoidance)
                  )
                  .attr("width", chartdims.width / 33 - 2)
                  .attr("stroke", "gray")
                  .style("fill", colorTableau[3]);
              }

              return;
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"]
            )(
              "div",
              {
                style: {
                  height: "100%",
                  width: "100%",
                },
                ref: container,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__["jsxDEV"]
                )(
                  _mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"],
                  {
                    size: "small",
                    variant: "outlined",
                    onClick: toggleChartType,
                    children: "toggle view",
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 493,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 492,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(LinePlot, "gP936EAkbq44zYYGRnj90r2fLhg=");

          _c = LinePlot;

          const mapStateToProps = (state) => {
            return {
              building: { ...state.building },
              ui: { ...state.ui },
              window: { ...state.window },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(LinePlot);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "LinePlot");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/svggroups.js":
      /*!*****************************************************!*\
  !*** ./src/components/charts/lineplot/svggroups.js ***!
  \*****************************************************/
      /*! exports provided: createSvgGroups */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createSvgGroups",
            function () {
              return createSvgGroups;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createSvgGroups = (config) => {
            const { containerdims, margins, node, chartdims } = config; // create containers

            let svg = d3__WEBPACK_IMPORTED_MODULE_0__["select"](node)
              .selectAll("svg")
              .data([0])
              .join("svg")
              .attr("width", containerdims.width)
              .attr("height", containerdims.height);
            let axis_g = svg
              .selectAll(".axis-g")
              .data([0])
              .join("g")
              .attr("class", "axis-g");
            let legend_g = svg
              .selectAll(".legend-g")
              .data([0])
              .join("g")
              .attr("class", "legend-g")
              .attr(
                "transform",
                `translate(${chartdims.width / 2 - 225}, ${
                  margins.t + chartdims.height + 50
                })`
              );
            let plot_g = svg
              .selectAll(".plot-g")
              .data([0])
              .join("g")
              .attr("class", "plot-g")
              .attr("transform", `translate(${margins.l}, ${margins.t})`);
            let annotation_g = svg
              .selectAll(".annotation-g")
              .data([0])
              .join("g")
              .attr("class", "annotation-g")
              .attr("transform", `translate(${margins.l}, ${margins.t})`);
            let title_g = svg
              .selectAll(".title-g")
              .data([0])
              .join("g")
              .attr("class", "title-g");
            return {
              svg,
              plot_g,
              annotation_g,
              legend_g,
              axis_g,
              title_g,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdannotations.js":
      /*!****************************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdannotations.js ***!
  \****************************************************************/
      /*! exports provided: createThresholdAnnotations */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createThresholdAnnotations",
            function () {
              return createThresholdAnnotations;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createThresholdAnnotations = (config) => {
            const {
              element,
              data,
              transition_duration,
              xScale,
              yScale,
              textColorOn,
              textColorOff,
              lineColorOn,
              lineColorOff,
            } = config;
            let threshold_annotations = element
              .selectAll(".threshold-annotation")
              .data(data)
              .join("text")
              .attr("class", "threshold-annotation")
              .transition()
              .duration(transition_duration)
              .attr("x", xScale(2051) + 15)
              .attr("y", (d) => (d.val !== null ? yScale(d.val) + 5 : 0))
              .text(
                (d) =>
                  `${d.period} es: ${d3__WEBPACK_IMPORTED_MODULE_0__["format"](
                    ".2f"
                  )(d.val)}`
              )
              .style("fill", (d) =>
                d.threshold_met ? textColorOff : textColorOn
              )
              .style("font-size", "1.0em");
            let threshold_lines = element
              .selectAll(".thresh-line")
              .data(data)
              .join("line")
              .attr("class", "thresh-line")
              .transition()
              .duration(transition_duration)
              .attr("x1", (d) => xScale(d.starting_year) + 5)
              .attr("x2", (d) => xScale(2051))
              .attr("y1", (d) => yScale(d.val))
              .attr("y2", (d) => yScale(d.val))
              .attr("stroke-dasharray", "2 0 2")
              .style("stroke", (d) =>
                d.threshold_met ? lineColorOff : lineColorOn
              );
            return {
              threshold_annotations,
              threshold_lines,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdareacalcs.js":
      /*!**************************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdareacalcs.js ***!
  \**************************************************************/
      /*! exports provided: calcAreas */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "calcAreas",
            function () {
              return calcAreas;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const calcAreas = (thresholds, emissions) => {
            let is_2025_fine =
              thresholds[0].period == "2025-2029" ? true : false;
            let periods = is_2025_fine
              ? [2018, 2025, 2030, 2035, 2040, 2045, 2050, 2051]
              : [2018, 2030, 2035, 2040, 2045, 2050, 2051];
            let combined_array = periods.map((d) => {
              return {
                year: d,
                emission_val: emissions.filter((f) => +f.year === d)[0]
                  ? emissions.filter((f) => +f.year === d)[0].val
                  : 0,
                thresh_val: thresholds.filter((f) => +f.starting_year === d)[0]
                  ? thresholds.filter((f) => +f.starting_year === d)[0].val
                  : 0,
                thresh_met: thresholds.filter((f) => +f.starting_year === d)[0]
                  ? thresholds.filter((f) => +f.starting_year === d)[0]
                      .threshold_met
                  : false,
              };
            });
            let combined_top = is_2025_fine
              ? [
                  combined_array[1],
                  combined_array[2],
                  combined_array[3],
                  combined_array[4],
                  combined_array[5],
                  combined_array[6],
                  combined_array[7],
                ]
              : [
                  combined_array[1],
                  combined_array[2],
                  combined_array[3],
                  combined_array[4],
                  combined_array[5],
                  combined_array[6],
                ];
            let combined_bottom = is_2025_fine
              ? [
                  combined_array[0],
                  combined_array[1],
                  combined_array[2],
                  combined_array[3],
                  combined_array[4],
                  combined_array[5],
                  combined_array[6],
                  combined_array[7],
                ]
              : [
                  combined_array[0],
                  combined_array[1],
                  combined_array[2],
                  combined_array[3],
                  combined_array[4],
                  combined_array[5],
                  combined_array[6],
                ];
            let top = combined_top.map((d) => {
              return {
                val: d.thresh_val,
                // d3.max([d.thresh_val, d.emission_val]),
                year: d.year,
                thresh_met: d.thresh_met,
              };
            });
            let middleFilter = combined_top.filter(
              (d) => d.thresh_met === false
            );
            let middle = [];
            middle.push({
              val: middleFilter[0].emission_val,
              year: middleFilter[0].year,
            });
            middleFilter.forEach((d, i) => {
              middle.push({
                val: d.thresh_val,
                year: d.year,
              });

              if (middleFilter[i + 1]) {
                middle.push({
                  val: d.thresh_val,
                  year: middleFilter[i + 1].year,
                });
              }
            });
            middle.push({
              val: middleFilter[middleFilter.length - 1].emission_val,
              year: middleFilter[middleFilter.length - 1].year,
            });
            middle.push({
              val: middleFilter[0].emission_val,
              year: middleFilter[0].year,
            });
            let bottom = combined_bottom.map((d) => {
              return {
                val: d.emission_val,
                year: d.year,
              };
            });
            top = [
              {
                val: top[0] ? top[0].val : 0,
                year: top[0] ? top[0].year : 0,
              },
              {
                val: top[0] ? top[0].val : 0,
                year: top[1] ? top[1].year : 0,
              },
              {
                val: top[1] ? top[1].val : 0,
                year: top[1] ? top[1].year : 0,
              },
              {
                val: top[1] ? top[1].val : 0,
                year: top[2] ? top[2].year : 0,
              },
              {
                val: top[2] ? top[2].val : 0,
                year: top[2] ? top[2].year : 0,
              },
              {
                val: top[2] ? top[2].val : 0,
                year: top[3] ? top[3].year : 0,
              },
              {
                val: top[3] ? top[3].val : 0,
                year: top[3] ? top[3].year : 0,
              },
              {
                val: top[3] ? top[3].val : 0,
                year: top[4] ? top[4].year : 0,
              },
              {
                val: top[4] ? top[4].val : 0,
                year: top[4] ? top[4].year : 0,
              },
              {
                val: top[4] ? top[4].val : 0,
                year: top[5] ? top[5].year : 0,
              },
              {
                val: top[5] ? top[5].val : 0,
                year: top[5] ? top[5].year : 0,
              },
              {
                val: top[5] ? top[5].val : 0,
                year: top[6] ? top[6].year : 0,
              },
            ];
            return {
              top,
              middle,
              bottom,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdarray.js":
      /*!**********************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdarray.js ***!
  \**********************************************************/
      /*! exports provided: getThresholdArray */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "getThresholdArray",
            function () {
              return getThresholdArray;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const getThresholdArray = (thresholds, emissions) => {
            let domain_map = {
              "2025-2029": 2025,
              "2030-2034": 2030,
              "2035-2039": 2035,
              "2040-2044": 2040,
              "2045-2049": 2045,
              "2050-": 2050,
            };

            const getThresholdsMet = (e) => {
              let emission_period = emissions.filter(
                (f) => +f.year === domain_map[e]
              )[0];

              if (emission_period) {
                if (emission_period.val < thresholds[e]) {
                  return true;
                } else {
                  return false;
                }
              } else {
                return false;
              }
            };

            thresholds = Object.keys(thresholds).map((e) => {
              return {
                period: e,
                val: thresholds[e],
                starting_year: domain_map[e],
                threshold_met: getThresholdsMet(e),
              };
            });

            if (!thresholds[0].val) {
              thresholds.shift();
            }

            return thresholds;
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdlegend.js":
      /*!***********************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdlegend.js ***!
  \***********************************************************/
      /*! exports provided: createThresholdLegend */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createThresholdLegend",
            function () {
              return createThresholdLegend;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createThresholdLegend = (config) => {
            const { element, colors } = config;
            let rowspacing = [25, 50, 75, 100];
            let colspacing = [0, 250];
            let paddingLeft = 100;
            let textAlignLeft = 35;
            let textAlignLeftLong = 40;
            let threshold_legend_g = element
              .selectAll(".threshold-legend-g")
              .data([0])
              .join("g")
              .attr("class", "threshold-legend-g");
            let today_es_g = threshold_legend_g
              .selectAll(".today-es-g")
              .data([0])
              .join("g")
              .attr("class", "today-es-g")
              .attr(
                "transform",
                `translate(${colspacing[0] + paddingLeft},${rowspacing[0]})`
              );
            today_es_g
              .selectAll(".today-es-circle")
              .data([0])
              .join("circle")
              .attr("class", "today-es-circle")
              .attr("cx", 15)
              .attr("cy", 0)
              .attr("r", 5)
              .attr("stroke", colors.emissionsCircleStroke)
              .attr("fill", colors.emissionsCircleFill);
            today_es_g
              .selectAll(".today-es-text")
              .data([0])
              .join("text")
              .attr("class", "today-es-text")
              .text("mission at present day")
              .attr("x", textAlignLeft)
              .attr("y", 5);
            let threshold_met_g = threshold_legend_g
              .selectAll(".threshold-met-g")
              .data([0])
              .join("g")
              .attr("class", "threshold-met-g")
              .attr(
                "transform",
                `translate(${colspacing[0] + paddingLeft},${rowspacing[1]})`
              );
            threshold_met_g
              .selectAll(".threshold-met-circle")
              .data([0])
              .join("circle")
              .attr("class", "threshold-met-circle")
              .attr("cx", 15)
              .attr("cy", 0)
              .attr("r", 5)
              .attr("stroke", colors.thresholdCircleStrokeOff)
              .attr("fill", colors.thresholdCircleFillOff);
            threshold_met_g
              .selectAll(".threshold-met-text")
              .data([0])
              .join("text")
              .attr("class", "threshold-met-text")
              .text("es threshold (met)")
              .attr("x", textAlignLeft)
              .attr("y", 5);
            let threshold_unmet_g = threshold_legend_g
              .selectAll(".threshold-unmet-g")
              .data([0])
              .join("g")
              .attr("class", "threshold-unmet-g")
              .attr(
                "transform",
                `translate(${colspacing[0] + paddingLeft},${rowspacing[2]})`
              );
            threshold_unmet_g
              .selectAll(".threshold-unmet-circle")
              .data([0])
              .join("circle")
              .attr("class", "threshold-unmet-circle")
              .attr("cx", 15)
              .attr("cy", 0)
              .attr("r", 5)
              .attr("stroke", colors.thresholdCircleStrokeOn)
              .attr("fill", colors.thresholdCircleFillOn);
            threshold_unmet_g
              .selectAll(".threshold-unmet-text")
              .data([0])
              .join("text")
              .attr("class", "threshold-unmet-text")
              .text("es threshold (unmet)")
              .attr("x", textAlignLeft)
              .attr("y", 5);
            let legend_emissions_g = threshold_legend_g
              .selectAll(".legend-emissions-g")
              .data([0])
              .join("g")
              .attr("class", "legend-emissions-g")
              .attr(
                "transform",
                `translate(${colspacing[1] + paddingLeft},${rowspacing[0]})`
              );
            legend_emissions_g
              .selectAll(".legend-emissions-line-stroke")
              .data([0])
              .join("line")
              .attr("class", "legend-emissions-line-stroke")
              .attr("x0", 0)
              .attr("x1", 30)
              .attr("y0", 0)
              .attr("y1", 1)
              .attr("stroke-width", 2)
              .attr("stroke", colors.emissionsLineStroke);
            legend_emissions_g
              .selectAll(".legend-emissions-line-text")
              .data([0])
              .join("text")
              .attr("class", "legend-emissions-line-text")
              .text("es over time")
              .attr("x", textAlignLeftLong)
              .attr("y", 5);
            let legend_area_unmet_g = threshold_legend_g
              .selectAll(".legend-area-unmet-g")
              .data([0])
              .join("g")
              .attr("class", "legend-area-unmet-g")
              .attr(
                "transform",
                `translate(${colspacing[1] + paddingLeft},${rowspacing[1]})`
              );
            legend_area_unmet_g
              .selectAll(".legend-area-unmet-rect")
              .data([0])
              .join("rect")
              .attr("class", "legend-area-unmet-rect")
              .attr("x", 0)
              .attr("y", -7)
              .attr("width", 30)
              .attr("height", 10)
              .attr("stroke", "black")
              .attr("fill", colors.middleFill);
            legend_area_unmet_g
              .selectAll(".legend-area-unmet-text")
              .data([0])
              .join("text")
              .attr("class", "legend-area-unmet-text")
              .text("es above threshold")
              .attr("x", textAlignLeftLong)
              .attr("y", 5);
            let legend_area_met_g = threshold_legend_g
              .selectAll(".legend-area-met-g")
              .data([0])
              .join("g")
              .attr("class", "legend-area-met-g")
              .attr(
                "transform",
                `translate(${colspacing[1] + paddingLeft},${rowspacing[2]})`
              );
            legend_area_met_g
              .selectAll(".legend-area-met-rect")
              .data([0])
              .join("rect")
              .attr("class", "legend-area-met-rect")
              .attr("x", 0)
              .attr("y", -7)
              .attr("width", 30)
              .attr("height", 10)
              .attr("stroke", "black")
              .attr("fill", colors.bottomFill);
            legend_area_met_g
              .selectAll(".legend-area-met-text")
              .data([0])
              .join("text")
              .attr("class", "legend-area-met-text")
              .text("es below threshold")
              .attr("x", textAlignLeftLong)
              .attr("y", 5);
            return threshold_legend_g;
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdplot.js":
      /*!*********************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdplot.js ***!
  \*********************************************************/
      /*! exports provided: createEmissionsLine, createThresholdPoints */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createEmissionsLine",
            function () {
              return createEmissionsLine;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createThresholdPoints",
            function () {
              return createThresholdPoints;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createThresholdPoints = (config) => {
            const { data, xScale, yScale, element, colors } = config;
            let threshold_points = element
              .selectAll(".thresh-point")
              .data(data)
              .join("circle")
              .attr("class", "thresh-point")
              .attr("r", 5)
              .attr("cx", (d) => xScale(d.starting_year))
              .attr("cy", (d) => yScale(d.val))
              .attr("stroke", (d) =>
                d.threshold_met
                  ? colors.thresholdCircleStrokeOff
                  : colors.thresholdCircleStrokeOn
              )
              .style("fill", (d) =>
                d.threshold_met
                  ? colors.thresholdCircleFillOff
                  : colors.thresholdCircleFillOn
              );
            return threshold_points;
          };

          const createEmissionsLine = (config) => {
            const { element, data, xScale, yScale, colors } = config;
            element
              .selectAll(".emissions-line")
              .data([0])
              .join("path")
              .attr("class", "emissions-line");
            let emissions_line = element
              .selectAll(".emissions-line")
              .datum(data)
              .join("path")
              .attr("class", "emissions-line")
              .attr("stroke", colors.emissionsLineStroke)
              .attr("stroke-width", 2)
              .attr(
                "d",
                d3__WEBPACK_IMPORTED_MODULE_0__["line"]()
                  .x((d) => xScale(d.year))
                  .y((d) => yScale(d.val))
              )
              .attr("fill", "none");
            let emissions_today_circle = element
              .selectAll(".emissions-today-circle")
              .data(data)
              .join("circle")
              .attr("class", "emissions-today-circle")
              .attr("cx", (d) => xScale(d.year))
              .attr("cy", (d) => yScale(d.val))
              .attr("r", (d, i) => (i === 0 ? 5 : 0))
              .attr("fill", colors.emissionsCircleFill)
              .attr("stroke", colors.emissionsCircleStroke);
            return {
              emissions_line,
              emissions_today_circle,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdscales.js":
      /*!***********************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdscales.js ***!
  \***********************************************************/
      /*! exports provided: createThresholdScales */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createThresholdScales",
            function () {
              return createThresholdScales;
            }
          );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createThresholdScales = (config) => {
            let { emissions, thresholds, domain_padding, chartdims } = config; // create scales

            let xThresholdScale = d3__WEBPACK_IMPORTED_MODULE_0__[
              "scaleLinear"
            ]()
              .domain([2018, 2051])
              .range([0, chartdims.width]);
            let yThresholdScale = d3__WEBPACK_IMPORTED_MODULE_0__[
              "scaleLinear"
            ]()
              .domain([
                0,
                d3__WEBPACK_IMPORTED_MODULE_0__["max"]([
                  ...emissions.map((e) => e.val),
                  ...thresholds.map((e) => e.val),
                ]) * domain_padding,
              ])
              .range([chartdims.height, 0]);
            return {
              xThresholdScale,
              yThresholdScale,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/lineplot/thresholdtitles.js":
      /*!***********************************************************!*\
  !*** ./src/components/charts/lineplot/thresholdtitles.js ***!
  \***********************************************************/
      /*! exports provided: createThresholdTitles */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "createThresholdTitles",
            function () {
              return createThresholdTitles;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const createThresholdTitles = (props) => {
            const { element, margins, chartdims } = props;
            let threshold_y_title = element
              .selectAll(".y-axis-title")
              .data([0])
              .join("text")
              .attr("class", "y-axis-title")
              .attr("transform", "rotate(270)")
              .attr("x", -(margins.t + chartdims.height / 2))
              .attr("y", margins.l / 2 - 15)
              .attr("text-anchor", "middle")
              .text("es (kgCO2e/sf/yr)")
              .style("font-size", "1em");
            let threshold_x_title = element
              .selectAll(".x-axis-title")
              .data([0])
              .join("text")
              .attr("class", "x-axis-title")
              .attr("x", margins.l + chartdims.width / 2)
              .attr("y", margins.t + chartdims.height + 40)
              .attr("text-anchor", "middle")
              .text("Year")
              .style("font-size", "1em");
            let threshold_chart_title = element
              .selectAll(".chart-title")
              .data([0])
              .join("text")
              .attr("class", "chart-title")
              .attr("x", margins.l + chartdims.width / 2)
              .attr("y", margins.t - 20)
              .attr("text-anchor", "middle")
              .text("Emissions Standard (es) Threshold Summary")
              .style("font-size", "1.25em");
            return {
              threshold_y_title,
              threshold_x_title,
              threshold_chart_title,
            };
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/charts/tabularplot/index.js":
      /*!****************************************************!*\
  !*** ./src/components/charts/tabularplot/index.js ***!
  \****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          /* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @mui/material/Table */ "./node_modules/@mui/material/Table/index.js"
            );
          /* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/material/TableBody */ "./node_modules/@mui/material/TableBody/index.js"
            );
          /* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/material/TableCell */ "./node_modules/@mui/material/TableCell/index.js"
            );
          /* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @mui/material/TableHead */ "./node_modules/@mui/material/TableHead/index.js"
            );
          /* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! @mui/material/TableRow */ "./node_modules/@mui/material/TableRow/index.js"
            );
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_7__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/charts/tabularplot/index.js";

          const TabularPlot = (props) => {
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"]
            )(
              "div",
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"]
                )(
                  _mui_material_Table__WEBPACK_IMPORTED_MODULE_2__["default"],
                  {
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                        "jsxDEV"
                      ]
                    )(
                      _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_3__[
                        "default"
                      ],
                      {
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                              "jsxDEV"
                            ]
                          )(
                            _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ],
                            {
                              children: ["a", "b", "c", "d", "e", "f"].map(
                                (e, i) =>
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      children: e,
                                    },
                                    i,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 18,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  )
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 16,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                              "jsxDEV"
                            ]
                          )(
                            _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_6__[
                              "default"
                            ],
                            {
                              children: ["a", "b", "c", "d", "e", "f"].map(
                                (e, i) =>
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_4__[
                                      "default"
                                    ],
                                    {
                                      children: e,
                                    },
                                    i,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 23,
                                      columnNumber: 15,
                                    },
                                    undefined
                                  )
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 21,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 13,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = TabularPlot;

          const mapStateToProps = (state) => {
            return {
              building: { ...state.building },
              window: { ...state.window },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(TabularPlot);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "TabularPlot");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/footer.js":
      /*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/footer.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"]
          )({
            footer: {
              height: 25,
              // padding: 20,
              borderTop: "solid 1px gray", // backgroundColor: 'rgba(20,20,20,0.1)'
            },
            left: {},
            center: {},
            right: {
              float: "right",
              paddingTop: 25,
              paddingRight: 25,
            },
          });

          const Footer = (props) => {
            _s();

            const classes = useStyles();
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"],
              {
                elevation: 0,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                )(
                  "div",
                  {
                    className: classes.footer,
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      "div",
                      {
                        className: classes.right,
                        children: "copyright 2022 AKF Engineers",
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 18,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(Footer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = Footer;
          /* harmony default export */ __webpack_exports__["default"] = Footer;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Footer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/header.js":
      /*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js"
            );
          /* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/icons-material/Info */ "./node_modules/@mui/icons-material/Info.js"
            );
          /* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_4__
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/header.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"]
          )({
            header: {
              height: 100,
              width: "100%",
              // padding: 20,
              borderBottom: "1px gray solid",
              overflow: "hidden",
              whiteSpace: "nowrap",
              boxSizing: "border-box",
              padding: "20px",
            },
            left: {
              display: "inline-block",
              width: "200px",
              verticalAlign: "middle",
            },
            center: {
              minWidth: "calc(100% - 350px)",
              display: "inline-block",
              textAlign: "center",
              verticalAlign: "middle", // padding: 15,
            },
            centerInner: {},
            right: {
              display: "inline-block",
              width: "150px",
              textAlign: "right", // float: "right",
              // padding: 20,
            },
            rightInner: {
              display: "inline-block",
            },
            h1: {
              fontSize: "1.25em",
              fontWeight: 600,
              letterSpacing: 1.5,
              marginBottom: 5,
            },
            h2: {
              fontSize: "1.0em",
              letterSpacing: 1.25,
            },
            h2link: {
              fontSize: "1.0em",
              letterSpacing: 1.25,
              transition: "color 250ms",
              cursor: "pointer",
              "&:hover": {
                color: "rgba(0,0,0,0.5)",
              },
            },
            akfLogoContainer: {
              padding: 10,
            },
            findButton: {
              paddingRight: 15,
              display: "inline-block",
            },
            aboutButton: {
              paddingRight: 15,
              display: "inline-block",
            },
          });

          const Header = (props) => {
            _s();

            const classes = useStyles();
            const is_building_loaded = props.building_name ? true : false;
            const date_labels = {
              "2021_cal_2020": "2020 dataset",
              "2020_cal_2019": "2019 dataset",
              "2019_cal_2018": "2018 dataset",
            };

            const handleOpenAbout = () => {
              props.actions.setIsLoadedSummaryModalOpen(true);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              _mui_material__WEBPACK_IMPORTED_MODULE_0__["Paper"],
              {
                elevation: 2,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                )(
                  "div",
                  {
                    className: classes.header,
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: classes.left,
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: classes.akfLogoContainer,
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                "img",
                                {
                                  alt: "",
                                  width: "95",
                                  src: "akf-logo.png",
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 95,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 94,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 93,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: classes.center,
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: classes.centerInner,
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: classes.h1,
                                    children: "BERDO 2.0 CALCULATOR",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 100,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: classes.h2link,
                                    onClick: handleOpenAbout,
                                    children: is_building_loaded
                                      ? props.building_name +
                                        " (" +
                                        date_labels[
                                          props.berdoapi.berdo_dataset_year
                                        ] +
                                        ")"
                                      : "",
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 101,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 99,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: classes.right,
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: classes.rightInner,
                              children: [
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: classes.findButton,
                                    children: /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _mui_material__WEBPACK_IMPORTED_MODULE_0__[
                                        "Button"
                                      ], // size="small"
                                      {
                                        color: "primary",
                                        variant: "contained",
                                        onClick: () =>
                                          props.actions.setIsLoadModalOpen(
                                            true
                                          ),
                                        children: /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_3___default.a,
                                          {},
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 120,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 114,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 113,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                                /*#__PURE__*/ Object(
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                    "jsxDEV"
                                  ]
                                )(
                                  "div",
                                  {
                                    className: classes.aboutButton,
                                    children: /*#__PURE__*/ Object(
                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                        "jsxDEV"
                                      ]
                                    )(
                                      _mui_material__WEBPACK_IMPORTED_MODULE_0__[
                                        "Button"
                                      ], // size="small"
                                      {
                                        color: "primary",
                                        variant: "contained",
                                        onClick: () =>
                                          props.actions.setIsAboutModalOpen(
                                            true
                                          ),
                                        children: /*#__PURE__*/ Object(
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                            "jsxDEV"
                                          ]
                                        )(
                                          _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_4___default.a,
                                          {},
                                          void 0,
                                          false,
                                          {
                                            fileName: _jsxFileName,
                                            lineNumber: 132,
                                            columnNumber: 17,
                                          },
                                          undefined
                                        ),
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 125,
                                        columnNumber: 15,
                                      },
                                      undefined
                                    ),
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 124,
                                    columnNumber: 13,
                                  },
                                  undefined
                                ),
                              ],
                            },
                            void 0,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 112,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 111,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(Header, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = Header;

          const mapStateToProps = (store) => {
            return {
              building_name: store.building.building_name,
              berdoapi: store.building.berdoapi,
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_1__["conn"]
          )(mapStateToProps)(Header);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Header");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/maincontainer.js":
      /*!*****************************************!*\
  !*** ./src/components/maincontainer.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./sidebar */ "./src/components/sidebar.js");
          /* harmony import */ var _viewcontainer__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./viewcontainer */ "./src/components/viewcontainer.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/maincontainer.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
          )({
            root: {
              height: "calc(100vh - 175px)",
              minHeight: 300,
              boxSizing: "border-box",
              overflow: "hidden",
            },
            main: {
              padding: 20,
              width: "calc(100% - 350px)",
              height: "100%",
              display: "inline-block",
              boxSizing: "border-box",
            },
            side: {
              padding: 20,
              width: "350px",
              display: "inline-block",
              verticalAlign: "top",
              height: "100%",
              borderRight: "1px solid black",
              boxSizing: "border-box",
            },
            viewSelectorBtn: {
              marginLeft: 5,
              display: "inline-block",
            },
            viewSelectorContainer: {
              marginBottom: 10,
            },
          });

          const MainContainer = (props) => {
            _s();

            const classes = useStyles();
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
            )(
              "div",
              {
                className: classes.root,
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: classes.side,
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                          "jsxDEV"
                        ]
                      )(
                        _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 44,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 43,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: classes.main,
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[
                          "jsxDEV"
                        ]
                      )(
                        _viewcontainer__WEBPACK_IMPORTED_MODULE_3__["default"],
                        {},
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 47,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 46,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(MainContainer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = MainContainer;

          const mapStateToProps = (store) => {
            return {
              building_validation: store.building.building_validation,
              activeView: store.ui.activeView,
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(MainContainer);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "MainContainer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/modalcomponent.js":
      /*!******************************************!*\
  !*** ./src/components/modalcomponent.js ***!
  \******************************************/
      /*! exports provided: ModalComponent */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "ModalComponent",
            function () {
              return ModalComponent;
            }
          );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/system */ "./node_modules/@mui/system/esm/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/modalcomponent.js";

          const style = {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "80%",
            bgcolor: "white",
            border: "1px solid gray",
            boxShadow: 24,
            p: 4,
          };

          const ModalComponent = (props) => {
            const { isOpen, exitCallback } = props;

            const hideModal = () => {
              exitCallback(false);
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              _mui_material__WEBPACK_IMPORTED_MODULE_0__["Modal"],
              {
                className: "modal",
                open: isOpen,
                onClose: hideModal,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                )(
                  "div",
                  {
                    className: "modal-content",
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                        "jsxDEV"
                      ]
                    )(
                      _mui_system__WEBPACK_IMPORTED_MODULE_1__["Box"],
                      {
                        sx: style,
                        children: [
                          /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[
                              "jsxDEV"
                            ]
                          )(
                            _mui_material__WEBPACK_IMPORTED_MODULE_0__[
                              "Button"
                            ],
                            {
                              color: "primary",
                              onClick: hideModal,
                              children: "x",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 29,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                          props.children,
                        ],
                      },
                      void 0,
                      true,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 28,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 27,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = ModalComponent;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "ModalComponent");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/modals/aboutmodal.js":
      /*!*********************************************!*\
  !*** ./src/components/modals/aboutmodal.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _modalcomponent__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../modalcomponent */ "./src/components/modalcomponent.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/modals/aboutmodal.js";

          const AboutModal = (props) => {
            const isAboutModalOpen = props.ui.isAboutModalOpen;
            const exitCallback = props.actions.setIsAboutModalOpen;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              _modalcomponent__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
              {
                isOpen: isAboutModalOpen,
                exitCallback: exitCallback,
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "h3",
                    {
                      children: "About this calculator",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 10,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "p",
                    {
                      children:
                        "This is a work-in-progress demo version of AKF's BERDO 2.0 calculator, and as such should not be used to predict any actual BERDO thresholds or future building performance.",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 11,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "p",
                    {
                      children:
                        "Future information about this calculator, including dataset and legal references, will be included at a later date.",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 9,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = AboutModal;

          const mapStateToProps = (store) => {
            return {
              actions: { ...store.actions },
              ui: { ...store.ui },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(AboutModal);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "AboutModal");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/modals/loadbldgmodal.js":
      /*!************************************************!*\
  !*** ./src/components/modals/loadbldgmodal.js ***!
  \************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _modalcomponent__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../modalcomponent */ "./src/components/modalcomponent.js"
            );
          /* harmony import */ var _berdoapi_berdoapicomponent__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../berdoapi/berdoapicomponent */ "./src/components/berdoapi/berdoapicomponent.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/modals/loadbldgmodal.js";

          const LoadBldgModal = (props) => {
            const isLoadModalOpen = props.ui.isLoadModalOpen;
            const exitCallback = props.actions.setIsLoadModalOpen;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              _modalcomponent__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
              {
                isOpen: isLoadModalOpen,
                exitCallback: exitCallback,
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "h3",
                    {
                      children: "Query the BERDO dataset for your building",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 11,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    _berdoapi_berdoapicomponent__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {},
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 12,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 10,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = LoadBldgModal;

          const mapStateToProps = (store) => {
            return {
              actions: { ...store.actions },
              ui: { ...store.ui },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(LoadBldgModal);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "LoadBldgModal");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/modals/loadedsummarymodal.js":
      /*!*****************************************************!*\
  !*** ./src/components/modals/loadedsummarymodal.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _modalcomponent__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../modalcomponent */ "./src/components/modalcomponent.js"
            );
          /* harmony import */ var _calculations_buildingtypes__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../calculations/buildingtypes */ "./src/calculations/buildingtypes.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/modals/loadedsummarymodal.js";

          const LoadedSummaryModal = (props) => {
            const isLoadModalOpen = props.ui.isLoadedSummaryModalOpen;
            const exitCallback = props.actions.setIsLoadedSummaryModalOpen;
            let { berdoapi } = props.building;
            let { loadedBuildingInfo } = berdoapi;
            let converted_property_type =
              _calculations_buildingtypes__WEBPACK_IMPORTED_MODULE_2__[
                "building_types"
              ][props.building.areas[0].type];
            let dataset_year_name = {
              "2021_cal_2020": "2021 (calendar year 2020)",
              "2020_cal_2019": "2020 (calendar year 2019)",
              "2019_cal_2018": "2019 (calendar year 2018",
            }[berdoapi.berdo_dataset_year];

            const convertBlank = (d) => (d === "" ? 0 : d);

            let loaded_summary_list = [
              `Property Name: ${loadedBuildingInfo["Property Name"]}`,
              `Address: ${loadedBuildingInfo["Address"]}`,
              `Tax Parcel: ${loadedBuildingInfo["Tax Parcel"]}`,
              `Gross Area (sq ft): ${loadedBuildingInfo["Gross Area (sq ft)"]}`,
              `Energy Star Score: ${loadedBuildingInfo["ENERGY STAR Score"]}`,
              `Onsite Renewable (kWh): ${convertBlank(
                loadedBuildingInfo["Onsite Renewable (kWh)"]
              )}`,
              `Property Type: ${loadedBuildingInfo["Property Type"]}`,
              `Property Uses: ${loadedBuildingInfo["Property Uses"]}`,
              `Total Site Energy (kBtu): ${loadedBuildingInfo["Total Site Energy (kBTU)"]}`,
              `% Electricity: ${convertBlank(
                loadedBuildingInfo["% Electricity"]
              )}`,
              `% Gas: ${convertBlank(loadedBuildingInfo["% Gas"])}`,
              `% Other (Diesel #2, Kerosene, Propane, or Other Fuel): ${convertBlank(
                loadedBuildingInfo[
                  "% Other (Diesel #2, Kerosene, Propane or Other Fuel)"
                ]
              )}`,
              `% Fuel Oil: ${convertBlank(loadedBuildingInfo["% Fuel Oil"])}`,
              `% District Hot Water: ${convertBlank(
                loadedBuildingInfo["% District Hot Water"]
              )}`,
              `% District Chilled Water: ${convertBlank(
                loadedBuildingInfo["% District Chilled Water"]
              )}`,
            ];
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              _modalcomponent__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
              {
                isOpen: isLoadModalOpen,
                exitCallback: exitCallback,
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "h3",
                    {
                      children: "LOADED BUILDING SUMMARY",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 51,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  "The below information has been loaded for the selected building:",
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "ul",
                    {
                      children: loaded_summary_list.map((d, i) =>
                        /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                            "jsxDEV"
                          ]
                        )(
                          "li",
                          {
                            children: d,
                          },
                          i,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 55,
                            columnNumber: 11,
                          },
                          undefined
                        )
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 53,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "h3",
                    {
                      children: "DATASET INFORMATION AND CAVEATS",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 58,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      children: [
                        "The above information was loaded from the ",
                        dataset_year_name,
                        ' BERDO dataset. The "Property Use" category has been converted from "',
                        loadedBuildingInfo["Property Type"],
                        '" to "',
                        converted_property_type,
                        '". All utility and emission information was calculated using the "Total Site Energy (kBTU)" field and each fuel type\'s percentage fraction field. Check property type and all other calculator inputs for accuracy. Note that onsite renewable is not currently implemented in this calculator.',
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 59,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "a",
                    {
                      href: "https://data.boston.gov/dataset/building-energy-reporting-and-disclosure-ordinance",
                      target: "_blank",
                      rel: "noreferrer",
                      children: "Data Source (data.boston.gov)",
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 69,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = LoadedSummaryModal;

          const mapStateToProps = (store) => {
            return {
              actions: { ...store.actions },
              ui: { ...store.ui },
              building: { ...store.building },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(LoadedSummaryModal);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "LoadedSummaryModal");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/sidebar.js":
      /*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _userinputs_bldgtypeinfocontainer__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./userinputs/bldgtypeinfocontainer */ "./src/components/userinputs/bldgtypeinfocontainer.js"
            );
          /* harmony import */ var _userinputs_utilityinputcontainer__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./userinputs/utilityinputcontainer */ "./src/components/userinputs/utilityinputcontainer.js"
            );
          /* harmony import */ var _userinputs_onsiteinputcontainer__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./userinputs/onsiteinputcontainer */ "./src/components/userinputs/onsiteinputcontainer.js"
            );
          /* harmony import */ var _accordioncontainer__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./accordioncontainer */ "./src/components/accordioncontainer.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/sidebar.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"]
          )({
            root: {
              height: "100%",
            },
          });

          const Sidebar = (props) => {
            _s();

            const classes = useStyles();
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
            )(
              _mui_material__WEBPACK_IMPORTED_MODULE_1__["Paper"],
              {
                elevation: 0,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                )(
                  "div",
                  {
                    className: classes.root,
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                          "jsxDEV"
                        ]
                      )(
                        _accordioncontainer__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ],
                        {
                          label: "Property Types",
                          tag: "property_types",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            _userinputs_bldgtypeinfocontainer__WEBPACK_IMPORTED_MODULE_3__[
                              "default"
                            ],
                            {},
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 25,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 24,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                          "jsxDEV"
                        ]
                      )(
                        _accordioncontainer__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ],
                        {
                          label: "Utility Consumption",
                          tag: "utility_consumption",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            _userinputs_utilityinputcontainer__WEBPACK_IMPORTED_MODULE_4__[
                              "default"
                            ],
                            {},
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 32,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 28,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                          "jsxDEV"
                        ]
                      )(
                        _accordioncontainer__WEBPACK_IMPORTED_MODULE_6__[
                          "default"
                        ],
                        {
                          label: "Onsite Renewable",
                          tag: "onsite_renewable",
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                              "jsxDEV"
                            ]
                          )(
                            _userinputs_onsiteinputcontainer__WEBPACK_IMPORTED_MODULE_5__[
                              "default"
                            ],
                            {},
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 35,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 34,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 23,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(Sidebar, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = Sidebar;

          const mapStateToProps = (state) => {
            return {
              window: state.window,
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(Sidebar);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "Sidebar");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/bldgtypeinfobox.js":
      /*!******************************************************!*\
  !*** ./src/components/userinputs/bldgtypeinfobox.js ***!
  \******************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _bldgtypeselect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ./bldgtypeselect */ "./src/components/userinputs/bldgtypeselect.js"
            );
          /* harmony import */ var _numberinput__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./numberinput */ "./src/components/userinputs/numberinput.js"
            );
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/bldgtypeinfobox.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"]
          )({
            root: {
              // display: 'inline-block'
              overflow: "hidden",
              marginTop: 0,
              marginBottom: 20,
            },
            inner: {
              display: "inline-block",
            },
            rmButton: {
              display: "inline-block",
              position: "relative",
              top: 0,
              left: 120,
            },
            row1: {
              display: "inline-block",
              marginBottom: 10,
            },
            row2: {
              display: "inline-block",
              marginBottom: 10,
            },
            input: {
              display: "inline-block",
              marginLeft: 5,
            },
            selectLabelRow: {
              display: "inline-block",
              marginBottom: 5,
              color: "gray",
            },
          });

          const BldgTypeInfoBox = (props) => {
            _s();

            const classes = useStyles();
            const { type, area, index, labelKey } = props;

            const handleRemoveSelf = () => {
              props.actions.removeBuildingType(index);
              props.actions.compileBuildingOutputs();
            };

            const handleAreaChange = (e) => {
              props.actions.setBuildingTypeArea(e.target.value, index);
              props.actions.compileBuildingOutputs();
            };

            const handleTypeChange = (e) => {
              props.actions.setBuildingType(e.target.value, index);
              props.actions.compileBuildingOutputs();
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                className: classes.root,
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                )(
                  "div",
                  {
                    className: classes.inner,
                    children: [
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: classes.row1,
                          children: [
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              "div",
                              {
                                className: classes.selectLabelRow,
                                children: [
                                  `Property Type ${labelKey}`,
                                  /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                      "jsxDEV"
                                    ]
                                  )(
                                    _mui_material__WEBPACK_IMPORTED_MODULE_3__[
                                      "Button"
                                    ],
                                    {
                                      className: classes.rmButton,
                                      size: "small",
                                      sx: {
                                        minWidth: "10px",
                                      },
                                      onClick: handleRemoveSelf,
                                      children: index === 0 ? "" : "x",
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 69,
                                      columnNumber: 13,
                                    },
                                    undefined
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 67,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                "jsxDEV"
                              ]
                            )(
                              _bldgtypeselect__WEBPACK_IMPORTED_MODULE_0__[
                                "BldgTypeSelect"
                              ],
                              {
                                width: "250px",
                                changeCallback: handleTypeChange,
                                type: type,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 79,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        "div",
                        {
                          className: classes.row2,
                          children: /*#__PURE__*/ Object(
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                              "jsxDEV"
                            ]
                          )(
                            "div",
                            {
                              className: classes.input,
                              children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                                  "jsxDEV"
                                ]
                              )(
                                _numberinput__WEBPACK_IMPORTED_MODULE_1__[
                                  "NumberInput"
                                ],
                                {
                                  changeCallback: handleAreaChange,
                                  label: "Area (sf)",
                                  value: area,
                                },
                                void 0,
                                false,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 87,
                                  columnNumber: 13,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 86,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 85,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            BldgTypeInfoBox,
            "8g5FPXexvSEOsxdmU7HicukHGqY=",
            false,
            function () {
              return [useStyles];
            }
          );

          _c = BldgTypeInfoBox;

          const mapStateToProps = (state) => {
            return {
              actions: state.actions,
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_2__["conn"]
          )(mapStateToProps)(BldgTypeInfoBox);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BldgTypeInfoBox");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/bldgtypeinfocontainer.js":
      /*!************************************************************!*\
  !*** ./src/components/userinputs/bldgtypeinfocontainer.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! d3 */ "./node_modules/d3/src/index.js");
          /* harmony import */ var _bldgtypeinfobox__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./bldgtypeinfobox */ "./src/components/userinputs/bldgtypeinfobox.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/bldgtypeinfocontainer.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"]
          )({
            root: {
              overflowY: "auto",
              maxHeight: (props) => props.height,
            },
            addBuildingType: {
              textAlign: "center",
            },
          });

          const BldgTypeInfoContainer = (props) => {
            _s();

            const styles = {
              height: props.window.dims.height - 425,
            };
            const classes = useStyles(styles);

            const handleAddBuildingType = (e) => {
              const new_idx =
                Object(d3__WEBPACK_IMPORTED_MODULE_3__["max"])(
                  props.building.areas.map((d) => d.index)
                ) + 1;
              props.actions.addBuildingType(new_idx);
              props.actions.compileBuildingOutputs();
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
            )(
              "div",
              {
                className: classes.root,
                children: [
                  props.building.areas.map((e, i) =>
                    /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                        "jsxDEV"
                      ]
                    )(
                      _bldgtypeinfobox__WEBPACK_IMPORTED_MODULE_4__["default"],
                      {
                        labelKey: i + 1,
                        index: e.index,
                        type: e.type,
                        area: e.area,
                      },
                      i,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 31,
                        columnNumber: 9,
                      },
                      undefined
                    )
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: classes.addBuildingType,
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[
                          "jsxDEV"
                        ]
                      )(
                        _mui_material__WEBPACK_IMPORTED_MODULE_1__["Button"],
                        {
                          size: "small",
                          onClick: handleAddBuildingType,
                          variant: "outlined",
                          children: "ADD BUILDING TYPE",
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            BldgTypeInfoContainer,
            "8g5FPXexvSEOsxdmU7HicukHGqY=",
            false,
            function () {
              return [useStyles];
            }
          );

          _c = BldgTypeInfoContainer;

          const mapStateToProps = (state) => {
            return {
              building: { ...state.building },
              actions: { ...state.actions },
              window: { ...state.window },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(BldgTypeInfoContainer);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BldgTypeInfoContainer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/bldgtypeselect.js":
      /*!*****************************************************!*\
  !*** ./src/components/userinputs/bldgtypeselect.js ***!
  \*****************************************************/
      /*! exports provided: BldgTypeSelect */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "BldgTypeSelect",
            function () {
              return BldgTypeSelect;
            }
          );
          /* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @mui/material/Select */ "./node_modules/@mui/material/Select/index.js"
            );
          /* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/index.js"
            );
          /* harmony import */ var _calculations_buildingtypes__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../../calculations/buildingtypes */ "./src/calculations/buildingtypes.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/bldgtypeselect.js";

          const BldgTypeSelect = (props) => {
            const { type, changeCallback, width } = props;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                )(
                  _mui_material_Select__WEBPACK_IMPORTED_MODULE_0__["default"],
                  {
                    size: "small",
                    sx: {
                      minWidth: width,
                    },
                    value: type,
                    label: type,
                    onChange: changeCallback,
                    children: Object.keys(
                      _calculations_buildingtypes__WEBPACK_IMPORTED_MODULE_2__[
                        "building_types"
                      ]
                    ).map((e, i) =>
                      /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_1__[
                          "default"
                        ],
                        {
                          value: e,
                          children:
                            _calculations_buildingtypes__WEBPACK_IMPORTED_MODULE_2__[
                              "building_types"
                            ][e],
                        },
                        i,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                          columnNumber: 11,
                        },
                        undefined
                      )
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = BldgTypeSelect;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "BldgTypeSelect");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/numberinput.js":
      /*!**************************************************!*\
  !*** ./src/components/userinputs/numberinput.js ***!
  \**************************************************/
      /*! exports provided: NumberInput */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "NumberInput",
            function () {
              return NumberInput;
            }
          );
          /* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/numberinput.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
          )({
            root: {},
            label: {
              marginBottom: 5,
              color: "gray",
            },
            input: {},
          });

          const NumberInput = (props) => {
            _s();

            const { label, changeCallback, value } = props;
            const classes = useStyles();
            const step = 500;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    "div",
                    {
                      className: classes.label,
                      children: label,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 16,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _mui_material_TextField__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                    {
                      sx: {
                        width: "100%",
                      },
                      onChange: changeCallback,
                      type: "number",
                      value: value,
                      variant: "standard",
                      inputProps: {
                        step: step,
                      },
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 17,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(NumberInput, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = NumberInput;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "NumberInput");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/onsiteinputcontainer.js":
      /*!***********************************************************!*\
  !*** ./src/components/userinputs/onsiteinputcontainer.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _numberinput__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./numberinput */ "./src/components/userinputs/numberinput.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/onsiteinputcontainer.js";

          const OnsiteInputContainer = (props) => {
            const handleUtilityChange = (val, fuel) => {
              props.actions.setNativeOnsiteGeneration(val, fuel);
              props.actions.compileBuildingOutputs();
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                )(
                  _numberinput__WEBPACK_IMPORTED_MODULE_1__["NumberInput"],
                  {
                    changeCallback: (v) =>
                      handleUtilityChange(v.target.value, "elec_pv"),
                    label: "Electric Photovoltaic (kWh)",
                    value: props.building.onsite_generation_native.elec_pv,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                    columnNumber: 7,
                  },
                  undefined
                ),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 11,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = OnsiteInputContainer;

          const mapStateToProps = (state) => {
            return {
              building: { ...state.building },
              actions: { ...state.actions },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(OnsiteInputContainer);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "OnsiteInputContainer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/textinput.js":
      /*!************************************************!*\
  !*** ./src/components/userinputs/textinput.js ***!
  \************************************************/
      /*! exports provided: TextInput */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "TextInput",
            function () {
              return TextInput;
            }
          );
          /* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/textinput.js";

          const TextInput = (props) => {
            const { label, changeCallback, value, autoFocus } = props;
            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
            )(
              "div",
              {
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _mui_material__WEBPACK_IMPORTED_MODULE_1__["InputLabel"],
                    {
                      value: label,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 7,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"]
                  )(
                    _mui_material_TextField__WEBPACK_IMPORTED_MODULE_0__[
                      "default"
                    ],
                    {
                      inputRef: (input) =>
                        autoFocus ? input && input.focus() : input,
                      size: "small",
                      onChange: changeCallback,
                      value: value,
                      label: label,
                      variant: "standard",
                      fullWidth: true,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 8,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 6,
                columnNumber: 5,
              },
              undefined
            );
          };

          _c = TextInput;

          var _c;

          __webpack_require__.$Refresh$.register(_c, "TextInput");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/userinputs/utilityinputcontainer.js":
      /*!************************************************************!*\
  !*** ./src/components/userinputs/utilityinputcontainer.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _numberinput__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./numberinput */ "./src/components/userinputs/numberinput.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/userinputs/utilityinputcontainer.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
          )({
            root: {
              overflowY: "auto",
              maxHeight: (props) => props.height,
            },
          });

          const UtilityInputContainer = (props) => {
            _s();

            let styles = {
              height: props.window.dims.height - 425,
            };
            const classes = useStyles(styles);
            const fueltypes = {
              elec_grid: "Grid Electricity (kWh)",
              gas: "Natural Gas (therms)",
              fuel_1: "Fuel Type One (gal)",
              fuel_2: "Fuel Type Two (gal)",
              fuel_4: "Fuel Type Four (gal)",
              diesel: "Diesel (gal)",
              district_steam: "District Steam (MMBtu)",
              district_hot_water: "District Hot Water (MMBtu)",
              elec_driven_chiller: "Elec-Driven Chiller (MMBtu)",
              absorption_chiller_gas: "Gas Absorption Chiller (MMBtu)",
              engine_driven_chiller_gas: "Gas-Driven Chiller (MMBtu)",
            };

            const handleUtilityChange = (val, fuel) => {
              props.actions.setNativeUtilityConsumption(val, fuel);
              props.actions.compileBuildingOutputs();
            };

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
            )(
              "div",
              {
                className: classes.root,
                children: Object.keys(fueltypes).map((e, i) => {
                  return /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"]
                  )(
                    "div",
                    {
                      children: /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[
                          "jsxDEV"
                        ]
                      )(
                        _numberinput__WEBPACK_IMPORTED_MODULE_2__[
                          "NumberInput"
                        ],
                        {
                          changeCallback: (v) =>
                            handleUtilityChange(v.target.value, e),
                          label: fueltypes[e],
                          value: props.building.consumption_native[e],
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 38,
                          columnNumber: 13,
                        },
                        undefined
                      ),
                    },
                    i,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 11,
                    },
                    undefined
                  );
                }),
              },
              void 0,
              false,
              {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(
            UtilityInputContainer,
            "8g5FPXexvSEOsxdmU7HicukHGqY=",
            false,
            function () {
              return [useStyles];
            }
          );

          _c = UtilityInputContainer;

          const mapStateToProps = (state) => {
            return {
              building: { ...state.building },
              actions: { ...state.actions },
              window: { ...state.window },
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(UtilityInputContainer);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "UtilityInputContainer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/components/viewcontainer.js":
      /*!*****************************************!*\
  !*** ./src/components/viewcontainer.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var _store_connect__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../store/connect */ "./src/store/connect/index.js"
            );
          /* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js"
            );
          /* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! @mui/material */ "./node_modules/@mui/material/index.js"
            );
          /* harmony import */ var _mui_icons_material_OfflineBolt__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! @mui/icons-material/OfflineBolt */ "./node_modules/@mui/icons-material/OfflineBolt.js"
            );
          /* harmony import */ var _mui_icons_material_OfflineBolt__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_icons_material_OfflineBolt__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var _mui_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! @mui/icons-material/AttachMoney */ "./node_modules/@mui/icons-material/AttachMoney.js"
            );
          /* harmony import */ var _mui_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_icons_material_AttachMoney__WEBPACK_IMPORTED_MODULE_4__
            );
          /* harmony import */ var _mui_icons_material_TableChart__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! @mui/icons-material/TableChart */ "./node_modules/@mui/icons-material/TableChart.js"
            );
          /* harmony import */ var _mui_icons_material_TableChart__WEBPACK_IMPORTED_MODULE_5___default =
            /*#__PURE__*/ __webpack_require__.n(
              _mui_icons_material_TableChart__WEBPACK_IMPORTED_MODULE_5__
            );
          /* harmony import */ var _charts_lineplot__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! ./charts/lineplot */ "./src/components/charts/lineplot/index.js"
            );
          /* harmony import */ var _charts_tabularplot__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! ./charts/tabularplot */ "./src/components/charts/tabularplot/index.js"
            );
          /* harmony import */ var _charts_acpplot__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(
              /*! ./charts/acpplot */ "./src/components/charts/acpplot/index.js"
            );
          /* harmony import */ var _buildingfeedbackmessage__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(
              /*! ./buildingfeedbackmessage */ "./src/components/buildingfeedbackmessage.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
              "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/components/viewcontainer.js",
            _s = __webpack_require__.$Refresh$.signature();

          const useStyles = Object(
            _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"]
          )({
            root: {
              height: "calc(100vh - 175px)",
              boxSizing: "border-box",
              overflow: "hidden",
            },
            main: {
              width: "100%",
              minHeight: 300,
              height: "calc(100% - 45px)",
              display: "inline-block",
              boxSizing: "border-box",
            },
            viewSelectorBtn: {
              marginLeft: 5,
              display: "inline-block",
            },
            viewSelectorContainer: {
              marginBottom: 10,
              boxSizing: "border-box",
              height: "40px",
            },
          });

          const ViewContainer = (props) => {
            _s();

            const classes = useStyles();

            const handleViewChange = (label) => {
              props.actions.setActiveView(label);
            };

            const is_regulated = props.building_validation.is_above_20000_sf;
            const unregulated_message =
              "Buildings under 20,000 SF are unregulated under BERDO 2.0";
            let ActiveViewComponent;
            const views = [
              {
                key: "lineplot",
                label: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"]
                )(
                  _mui_icons_material_OfflineBolt__WEBPACK_IMPORTED_MODULE_3___default.a,
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 31,
                  },
                  undefined
                ),
                component: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"]
                )(
                  _charts_lineplot__WEBPACK_IMPORTED_MODULE_6__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 63,
                  },
                  undefined
                ),
              },
              {
                key: "tabular",
                label: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"]
                )(
                  _mui_icons_material_TableChart__WEBPACK_IMPORTED_MODULE_5___default.a,
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 30,
                  },
                  undefined
                ),
                component: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"]
                )(
                  _charts_tabularplot__WEBPACK_IMPORTED_MODULE_7__["default"],
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 52,
                    columnNumber: 61,
                  },
                  undefined
                ),
              },
            ];

            if (!is_regulated) {
              ActiveViewComponent = /*#__PURE__*/ Object(
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"]
              )(
                _buildingfeedbackmessage__WEBPACK_IMPORTED_MODULE_9__[
                  "BuildingFeedbackMessage"
                ],
                {
                  message: unregulated_message,
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 7,
                },
                undefined
              );
            } else {
              ActiveViewComponent = views.filter(
                (f) => f.key == [props.activeView]
              )[0].component;
            }

            return /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"]
            )(
              "div",
              {
                className: classes.root,
                children: [
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__[
                      "jsxDEV"
                    ]
                  )(
                    "div",
                    {
                      className: classes.viewSelectorContainer,
                      children: views.map((d, i) => {
                        return /*#__PURE__*/ Object(
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__[
                            "jsxDEV"
                          ]
                        )(
                          "div",
                          {
                            className: classes.viewSelectorBtn,
                            children: /*#__PURE__*/ Object(
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__[
                                "jsxDEV"
                              ]
                            )(
                              _mui_material__WEBPACK_IMPORTED_MODULE_2__[
                                "Button"
                              ],
                              {
                                size: "small",
                                onClick: () => handleViewChange(d.key),
                                variant:
                                  props.activeView == d.key
                                    ? "contained"
                                    : "outlined",
                                color: "primary",
                                children: d.label,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 70,
                                columnNumber: 15,
                              },
                              undefined
                            ),
                          },
                          i,
                          false,
                          {
                            fileName: _jsxFileName,
                            lineNumber: 69,
                            columnNumber: 13,
                          },
                          undefined
                        );
                      }),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                  /*#__PURE__*/ Object(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__[
                      "jsxDEV"
                    ]
                  )(
                    "div",
                    {
                      className: classes.main,
                      children: ActiveViewComponent,
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 82,
                      columnNumber: 7,
                    },
                    undefined
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 5,
              },
              undefined
            );
          };

          _s(ViewContainer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
            return [useStyles];
          });

          _c = ViewContainer;

          const mapStateToProps = (store) => {
            return {
              building_validation: store.building.building_validation,
              activeView: store.ui.activeView,
            };
          };

          /* harmony default export */ __webpack_exports__["default"] = Object(
            _store_connect__WEBPACK_IMPORTED_MODULE_0__["conn"]
          )(mapStateToProps)(ViewContainer);

          var _c;

          __webpack_require__.$Refresh$.register(_c, "ViewContainer");

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/index.css":
      /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        var api = __webpack_require__(
          /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        );
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css"
        );

        content = content.__esModule ? content.default : content;

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = api(content, options);

        if (true) {
          if (!content.locals || module.hot.invalidate) {
            var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
              if ((!a && b) || (a && !b)) {
                return false;
              }

              var p;

              for (p in a) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (a[p] !== b[p]) {
                  return false;
                }
              }

              for (p in b) {
                if (isNamedExport && p === "default") {
                  // eslint-disable-next-line no-continue
                  continue;
                }

                if (!a[p]) {
                  return false;
                }
              }

              return true;
            };
            var oldLocals = content.locals;

            module.hot.accept(
              /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
              function () {
                content = __webpack_require__(
                  /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css"
                );

                content = content.__esModule ? content.default : content;

                if (typeof content === "string") {
                  content = [[module.i, content, ""]];
                }

                if (!isEqualLocals(oldLocals, content.locals)) {
                  module.hot.invalidate();

                  return;
                }

                oldLocals = content.locals;

                update(content);
              }
            );
          }

          module.hot.dispose(function () {
            update();
          });
        }

        module.exports = content.locals || {};

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(/*! react */ "./node_modules/react/index.js");
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! react-dom */ "./node_modules/react-dom/index.js"
            );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_dom__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(/*! ./index.css */ "./src/index.css");
          /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              _index_css__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(/*! ./App */ "./src/App.js");
          /* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(
              /*! ./reportWebVitals */ "./src/reportWebVitals.js"
            );
          /* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(
              /*! ./store/configureStore */ "./src/store/configureStore.js"
            );
          /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(
              /*! react-redux */ "./node_modules/react-redux/es/index.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(
              /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
            );
          /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          var _jsxFileName =
            "/Users/michaelsweeney/code/AKF-BERDO-Calculator/src/index.js";

          // ie polyfills

          if (!Object.values)
            Object.values = (o) => Object.keys(o).map((k) => o[k]);

          if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = function (callback, thisArg) {
              thisArg = thisArg || window;

              for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
              }
            };
          }

          if (!Array.prototype.map) {
            Array.prototype.map = function (
              callback
              /*, thisArg*/
            ) {
              var T, A, k;

              if (this == null) {
                throw new TypeError("this is null or not defined");
              }

              var O = Object(this);
              var len = O.length >>> 0;

              if (typeof callback !== "function") {
                throw new TypeError(callback + " is not a function");
              }

              if (arguments.length > 1) {
                T = arguments[1];
              }

              A = new Array(len);
              k = 0;

              while (k < len) {
                var kValue, mappedValue;

                if (k in O) {
                  kValue = O[k];
                  mappedValue = callback.call(T, kValue, k, O);
                  A[k] = mappedValue;
                }

                k++;
              }

              return A;
            };
          }

          react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
            /*#__PURE__*/ Object(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
            )(
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"],
              {
                children: /*#__PURE__*/ Object(
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"]
                )(
                  react_redux__WEBPACK_IMPORTED_MODULE_6__["Provider"],
                  {
                    store:
                      _store_configureStore__WEBPACK_IMPORTED_MODULE_5__[
                        "store"
                      ],
                    children: /*#__PURE__*/ Object(
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[
                        "jsxDEV"
                      ]
                    )(
                      _App__WEBPACK_IMPORTED_MODULE_3__["default"],
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 55,
                        columnNumber: 7,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 5,
                  },
                  undefined
                ),
              },
              void 0,
              false
            ),
            document.getElementById("root")
          ); // If you want to start measuring performance in your app, pass a function
          // to log results (for example: reportWebVitals(console.log))
          // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

          Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/reportWebVitals.js":
      /*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const reportWebVitals = (onPerfEntry) => {
            if (onPerfEntry && onPerfEntry instanceof Function) {
              __webpack_require__
                .e(/*! import() */ 0)
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js"
                  )
                )
                .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                  getCLS(onPerfEntry);
                  getFID(onPerfEntry);
                  getFCP(onPerfEntry);
                  getLCP(onPerfEntry);
                  getTTFB(onPerfEntry);
                });
            }
          };

          /* harmony default export */ __webpack_exports__["default"] =
            reportWebVitals;

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/actions/index.js":
      /*!************************************!*\
  !*** ./src/store/actions/index.js ***!
  \************************************/
      /*! exports provided: addBuildingType, removeBuildingType, setBuildingTypeArea, setBuildingType, setNativeUtilityConsumption, setNativeOnsiteGeneration, compileBuildingOutputs, setAllBuildingInputs, setIsLoadModalOpen, setIsAboutModalOpen, setIsLoadedSummaryModalOpen, toggleAccordion, setBerdoApiInputQuery, setBerdoApiQueryResults, setLoadedBuildingQueryInfo, setBerdoDatasetYear, setWindowDimensions, setActiveView, setActivePlot */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "addBuildingType",
            function () {
              return addBuildingType;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "removeBuildingType",
            function () {
              return removeBuildingType;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setBuildingTypeArea",
            function () {
              return setBuildingTypeArea;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setBuildingType",
            function () {
              return setBuildingType;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setNativeUtilityConsumption",
            function () {
              return setNativeUtilityConsumption;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setNativeOnsiteGeneration",
            function () {
              return setNativeOnsiteGeneration;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "compileBuildingOutputs",
            function () {
              return compileBuildingOutputs;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setAllBuildingInputs",
            function () {
              return setAllBuildingInputs;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setIsLoadModalOpen",
            function () {
              return setIsLoadModalOpen;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setIsAboutModalOpen",
            function () {
              return setIsAboutModalOpen;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setIsLoadedSummaryModalOpen",
            function () {
              return setIsLoadedSummaryModalOpen;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "toggleAccordion",
            function () {
              return toggleAccordion;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setBerdoApiInputQuery",
            function () {
              return setBerdoApiInputQuery;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setBerdoApiQueryResults",
            function () {
              return setBerdoApiQueryResults;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setLoadedBuildingQueryInfo",
            function () {
              return setLoadedBuildingQueryInfo;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setBerdoDatasetYear",
            function () {
              return setBerdoDatasetYear;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setWindowDimensions",
            function () {
              return setWindowDimensions;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setActiveView",
            function () {
              return setActiveView;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "setActivePlot",
            function () {
              return setActivePlot;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          /* building actions */
          function addBuildingType(idx) {
            return {
              type: "ADD_BUILDING_TYPE",
              payload: idx,
            };
          }
          function removeBuildingType(idx) {
            return {
              type: "REMOVE_BUILDING_TYPE",
              payload: idx,
            };
          }
          function setBuildingTypeArea(val, idx) {
            return {
              type: "SET_BUILDING_TYPE_AREA",
              payload: {
                val,
                idx,
              },
            };
          }
          function setBuildingType(val, idx) {
            return {
              type: "SET_BUILDING_TYPE",
              payload: {
                val,
                idx,
              },
            };
          }
          function setNativeUtilityConsumption(val, fuel) {
            return {
              type: "SET_NATIVE_UTILITY_CONSUMPTION",
              payload: {
                val,
                fuel,
              },
            };
          }
          function setNativeOnsiteGeneration(val, fuel) {
            return {
              type: "SET_NATIVE_ONSITE_GENERATION",
              payload: {
                val,
                fuel,
              },
            };
          }
          function compileBuildingOutputs() {
            return {
              type: "COMPILE_BUILDING_OUTPUTS",
            };
          }
          function setAllBuildingInputs(obj) {
            return {
              type: "SET_ALL_BUILDING_INPUTS",
              payload: obj,
            };
          }
          /* ui actions */

          function setIsLoadModalOpen(bool) {
            return {
              type: "SET_IS_LOAD_MODAL_OPEN",
              payload: bool,
            };
          }
          function setIsAboutModalOpen(bool) {
            return {
              type: "SET_IS_ABOUT_MODAL_OPEN",
              payload: bool,
            };
          }
          function setIsLoadedSummaryModalOpen(bool) {
            return {
              type: "SET_IS_LOADED_SUMMARY_MODAL_OPEN",
              payload: bool,
            };
          }
          function toggleAccordion(val) {
            return {
              type: "TOGGLE_ACCORDION",
              payload: val,
            };
          }
          /* berdo api actions */

          function setBerdoApiInputQuery(query) {
            return {
              type: "SET_BERDO_API_INPUT_QUERY",
              payload: query,
            };
          }
          function setBerdoApiQueryResults(query_array) {
            return {
              type: "SET_BERDO_API_QUERY_RESULTS",
              payload: query_array,
            };
          }
          function setLoadedBuildingQueryInfo(result) {
            return {
              type: "SET_LOADED_BUILDING_QUERY_INFO",
              payload: result,
            };
          }
          function setBerdoDatasetYear(result) {
            return {
              type: "SET_BERDO_DATASET_YEAR",
              payload: result,
            };
          } // resize actions

          function setWindowDimensions(dims) {
            return {
              type: "SET_WINDOW_DIMENSIONS",
              payload: dims,
            };
          }
          function setActiveView(label) {
            return {
              type: "SET_ACTIVE_VIEW",
              payload: label,
            };
          }
          function setActivePlot(label) {
            return {
              type: "SET_ACTIVE_PLOT",
              payload: label,
            };
          }

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/configureStore.js":
      /*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
      /*! exports provided: store */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "store",
            function () {
              return store;
            }
          );
          /* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"
            );
          /* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./reducers */ "./src/store/reducers/index.js"
            );
          /* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const store = Object(
            _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"]
          )({
            reducer: _reducers__WEBPACK_IMPORTED_MODULE_1__["default"],
            middleware: [redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]],
          });

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/connect/index.js":
      /*!************************************!*\
  !*** ./src/store/connect/index.js ***!
  \************************************/
      /*! exports provided: conn */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "conn",
            function () {
              return conn;
            }
          );
          /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! react-redux */ "./node_modules/react-redux/es/index.js"
            );
          /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! redux */ "./node_modules/redux/es/redux.js"
            );
          /* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ../actions */ "./src/store/actions/index.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const mapDispatchToProps = (dispatch) => {
            return {
              actions: Object(
                redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"]
              )(_actions__WEBPACK_IMPORTED_MODULE_2__, dispatch),
            };
          };

          const mapStateToProps = (state) => {
            return {
              data: { ...state },
            };
          };

          const conn = (
            mapState = mapStateToProps,
            mapDispatch = mapDispatchToProps
          ) => {
            return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(
              mapState,
              mapDispatch
            );
          };

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/reducers/buildingreducer.js":
      /*!***********************************************!*\
  !*** ./src/store/reducers/buildingreducer.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return buildingReducer;
            }
          );
          /* harmony import */ var _calculations_compilebuilding__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! ../../calculations/compilebuilding */ "./src/calculations/compilebuilding.js"
            );
          /* harmony import */ var _components_berdoapi_convertqueryresults__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ../../components/berdoapi/convertqueryresults */ "./src/components/berdoapi/convertqueryresults.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const initialState = {
            berdoapi: {
              inputQuery: "",
              inputQueryResults: [],
              loadedBuildingInfo: [],
              berdo_dataset_year: "2021_cal_2020",
            },
            building_validation: {
              is_above_35000_sf: false,
              is_above_20000_sf: false,
            },
            alternative_compliance_payments: {},
            onsite_generation_native: {
              elec_pv: 0,
            },
            areas: [
              {
                type: "office",
                area: "",
                index: 0,
              },
            ],
            consumption_native: {
              elec_grid: 0,
              gas: 0,
              fuel_1: 0,
              fuel_2: 0,
              fuel_4: 0,
              diesel: 0,
              district_steam: 0,
              district_hot_water: 0,
              elec_driven_chiller: 0,
              absorption_chiller_gas: 0,
              engine_driven_chiller_gas: 0,
            },
            annual_emissions: [],
            emissions_thresholds: {
              absolute: {
                "2025-2029": 0,
                "2030-2034": 0,
                "2035-2039": 0,
                "2040-2044": 0,
                "2045-2049": 0,
                "2050-": 0,
              },
              normalized: {
                "2025-2029": 0,
                "2030-2034": 0,
                "2035-2039": 0,
                "2040-2044": 0,
                "2045-2049": 0,
                "2050-": 0,
              },
            },
            building_name: "",
          };
          function buildingReducer(state = initialState, action) {
            switch (action.type) {
              case "SET_ALL_BUILDING_INPUTS": {
                return {
                  ...state,
                  areas: action.payload.areas,
                  consumption_native: action.payload.consumption_native,
                  onsite_generation_native:
                    action.payload.onsite_generation_native,
                };
              }

              case "ADD_BUILDING_TYPE": {
                return {
                  ...state,
                  areas: [
                    ...state.areas,
                    {
                      type: "office",
                      area: "",
                      index: action.payload,
                    },
                  ],
                };
              }

              case "REMOVE_BUILDING_TYPE": {
                return {
                  ...state,
                  areas: [...state.areas].filter(
                    (e) => e.index !== action.payload
                  ),
                };
              }

              case "SET_BUILDING_TYPE_AREA": {
                return {
                  ...state,
                  areas: state.areas.map((e) =>
                    e.index === action.payload.idx
                      ? {
                          type: e.type,
                          area: action.payload.val,
                          index: e.index,
                        }
                      : e
                  ),
                };
              }

              case "SET_BUILDING_TYPE": {
                return {
                  ...state,
                  areas: state.areas.map((e) =>
                    e.index === action.payload.idx
                      ? {
                          type: action.payload.val,
                          area: e.area,
                          index: e.index,
                        }
                      : e
                  ),
                };
              }

              case "SET_NATIVE_UTILITY_CONSUMPTION": {
                return {
                  ...state,
                  consumption_native: {
                    ...state.consumption_native,
                    [action.payload.fuel]: action.payload.val,
                  },
                };
              }

              case "SET_NATIVE_ONSITE_GENERATION": {
                return {
                  ...state,
                  onsite_generation_native: {
                    ...state.onsite_generation_native,
                    [action.payload.fuel]: action.payload.val,
                  },
                };
              }

              case "COMPILE_BUILDING_OUTPUTS": {
                let {
                  annual_emissions,
                  emissions_thresholds,
                  building_validation,
                  alternative_compliance_payments,
                } = Object(
                  _calculations_compilebuilding__WEBPACK_IMPORTED_MODULE_0__[
                    "compileBuildingProfile"
                  ]
                )({
                  areas: state.areas,
                  consumption_native: state.consumption_native,
                  onsite_generation_native: state.onsite_generation_native,
                });
                return {
                  ...state,
                  annual_emissions: annual_emissions,
                  emissions_thresholds: emissions_thresholds,
                  building_validation: building_validation,
                  alternative_compliance_payments:
                    alternative_compliance_payments,
                };
              }

              case "SET_BERDO_API_INPUT_QUERY": {
                return {
                  ...state,
                  berdoapi: { ...state.berdoapi, inputQuery: action.payload },
                };
              }

              case "SET_BERDO_API_QUERY_RESULTS": {
                return {
                  ...state,
                  berdoapi: {
                    ...state.berdoapi,
                    inputQueryResults: action.payload,
                  },
                };
              }

              case "SET_BERDO_DATASET_YEAR": {
                return {
                  ...state,
                  berdoapi: {
                    ...state.berdoapi,
                    berdo_dataset_year: action.payload,
                  },
                };
              }

              case "SET_LOADED_BUILDING_QUERY_INFO": {
                let { areas, consumption, name, onsite_generation_native } =
                  Object(
                    _components_berdoapi_convertqueryresults__WEBPACK_IMPORTED_MODULE_1__[
                      "convertQueryResults"
                    ]
                  )(action.payload);
                return {
                  ...state,
                  berdoapi: {
                    ...state.berdoapi,
                    loadedBuildingInfo: action.payload,
                  },
                  areas: areas,
                  consumption_native: consumption,
                  building_name: name,
                  onsite_generation_native: onsite_generation_native,
                };
              }

              default:
                return state;
            }
          }

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/reducers/index.js":
      /*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(
              /*! redux */ "./node_modules/redux/es/redux.js"
            );
          /* harmony import */ var _uireducer__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(
              /*! ./uireducer */ "./src/store/reducers/uireducer.js"
            );
          /* harmony import */ var _buildingreducer__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(
              /*! ./buildingreducer */ "./src/store/reducers/buildingreducer.js"
            );
          /* harmony import */ var _windowreducer__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(
              /*! ./windowreducer */ "./src/store/reducers/windowreducer.js"
            );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const rootReducer = Object(
            redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"]
          )({
            ui: _uireducer__WEBPACK_IMPORTED_MODULE_1__["default"],
            building: _buildingreducer__WEBPACK_IMPORTED_MODULE_2__["default"],
            window: _windowreducer__WEBPACK_IMPORTED_MODULE_3__["default"],
          });
          /* harmony default export */ __webpack_exports__["default"] =
            rootReducer;

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/reducers/uireducer.js":
      /*!*****************************************!*\
  !*** ./src/store/reducers/uireducer.js ***!
  \*****************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return uiReducer;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const initialState = {
            isLoadModalOpen: false,
            isAboutModalOpen: false,
            isLoadedSummaryModalOpen: false,
            activeAccordionKey: "property_types",
            activeView: "lineplot",
            activePlot: "thresholds'",
          };
          function uiReducer(state = initialState, action) {
            switch (action.type) {
              case "SET_IS_LOAD_MODAL_OPEN": {
                return { ...state, isLoadModalOpen: action.payload };
              }

              case "SET_IS_ABOUT_MODAL_OPEN": {
                return { ...state, isAboutModalOpen: action.payload };
              }

              case "SET_IS_LOADED_SUMMARY_MODAL_OPEN": {
                return { ...state, isLoadedSummaryModalOpen: action.payload };
              }

              case "SET_WINDOW_DIMENSIONS": {
                return { ...state, dims: action.payload };
              }

              case "TOGGLE_ACCORDION": {
                let active_key;

                if (action.payload === state.activeAccordionKey) {
                  active_key = "property_types";
                } else {
                  active_key = action.payload;
                }

                return { ...state, activeAccordionKey: active_key };
              }

              case "SET_ACTIVE_VIEW": {
                return { ...state, activeView: action.payload };
              }

              case "SET_ACTIVE_PLOT": {
                return { ...state, activePlot: action.payload };
              }

              default:
                return state;
            }
          }

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ "./src/store/reducers/windowreducer.js":
      /*!*********************************************!*\
  !*** ./src/store/reducers/windowreducer.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (
          __react_refresh_utils__,
          __react_refresh_error_overlay__
        ) {
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            "default",
            function () {
              return windowReducer;
            }
          );
          __webpack_require__.$Refresh$.runtime = __webpack_require__(
            /*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js"
          );
          __webpack_require__.$Refresh$.setup(module.i);

          const initialState = {
            dims: {
              height: window.innerHeight,
              width: window.innerWidth,
            },
          };
          function windowReducer(state = initialState, action) {
            switch (action.type) {
              case "SET_WINDOW_DIMENSIONS": {
                return { ...state, dims: action.payload };
              }

              default:
                return state;
            }
          }

          const currentExports = __react_refresh_utils__.getModuleExports(
            module.i
          );
          __react_refresh_utils__.registerExportsForReactRefresh(
            currentExports,
            module.i
          );

          if (true) {
            const isHotUpdate = !!module.hot.data;
            const prevExports = isHotUpdate
              ? module.hot.data.prevExports
              : null;

            if (
              __react_refresh_utils__.isReactRefreshBoundary(currentExports)
            ) {
              module.hot.dispose(
                /**
                 * A callback to performs a full refresh if React has unrecoverable errors,
                 * and also caches the to-be-disposed module.
                 * @param {*} data A hot module data object from Webpack HMR.
                 * @returns {void}
                 */
                function hotDisposeCallback(data) {
                  // We have to mutate the data object to get data registered and cached
                  data.prevExports = currentExports;
                }
              );
              module.hot.accept(
                /**
                 * An error handler to allow self-recovering behaviours.
                 * @param {Error} error An error occurred during evaluation of a module.
                 * @returns {void}
                 */
                function hotErrorHandler(error) {
                  if (
                    typeof __react_refresh_error_overlay__ !== "undefined" &&
                    __react_refresh_error_overlay__
                  ) {
                    __react_refresh_error_overlay__.handleRuntimeError(error);
                  }

                  if (
                    typeof __react_refresh_test__ !== "undefined" &&
                    __react_refresh_test__
                  ) {
                    if (window.onHotAcceptError) {
                      window.onHotAcceptError(error.message);
                    }
                  }

                  __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
                }
              );

              if (isHotUpdate) {
                if (
                  __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
                  __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(
                    prevExports,
                    currentExports
                  )
                ) {
                  module.hot.invalidate();
                } else {
                  __react_refresh_utils__.enqueueUpdate(
                    /**
                     * A function to dismiss the error overlay after performing React refresh.
                     * @returns {void}
                     */
                    function updateCallback() {
                      if (
                        typeof __react_refresh_error_overlay__ !==
                          "undefined" &&
                        __react_refresh_error_overlay__
                      ) {
                        __react_refresh_error_overlay__.clearRuntimeErrors();
                      }
                    }
                  );
                }
              }
            } else {
              if (
                isHotUpdate &&
                __react_refresh_utils__.isReactRefreshBoundary(prevExports)
              ) {
                module.hot.invalidate();
              }
            }
          }
          /* WEBPACK VAR INJECTION */
        }.call(
          this,
          __webpack_require__(
            /*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"
          ),
          __webpack_require__(
            /*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js"
          )
        ));

        /***/
      },

    /***/ 1:
      /*!**********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function (module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/michaelsweeney/code/AKF-BERDO-Calculator/node_modules/webpack/hot/dev-server.js */ "./node_modules/webpack/hot/dev-server.js"
        );
        __webpack_require__(
          /*! /Users/michaelsweeney/code/AKF-BERDO-Calculator/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"
        );
        __webpack_require__(
          /*! /Users/michaelsweeney/code/AKF-BERDO-Calculator/node_modules/react-dev-utils/webpackHotDevClient.js */ "./node_modules/react-dev-utils/webpackHotDevClient.js"
        );
        module.exports = __webpack_require__(
          /*! /Users/michaelsweeney/code/AKF-BERDO-Calculator/src/index.js */ "./src/index.js"
        );

        /***/
      },
  },
  [[1, "runtime-main", "vendors~main"]],
]);
//# sourceMappingURL=main.chunk.js.map
