(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue'), require('crypto')) :
  typeof define === 'function' && define.amd ? define(['vue', 'crypto'], factory) :
  (global = global || self, global.imoocDatav = factory(global.vue, global.crypto));
}(this, (function (vue, crypto) { 'use strict';

  crypto = crypto && Object.prototype.hasOwnProperty.call(crypto, 'default') ? crypto['default'] : crypto;

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'TestComponent'
  };

  const _hoisted_1 = {
    width: "0",
    height: "0"
  };
  const _hoisted_2 = /*#__PURE__*/vue.createVNode("defs", null, [
    /*#__PURE__*/vue.createVNode("symbol", {
      id: "more",
      viewBox: "0 0 100 100"
    }, [
      /*#__PURE__*/vue.createVNode("circle", {
        r: "5",
        cx: "20",
        cy: "25",
        fill: "currentColor"
      }),
      /*#__PURE__*/vue.createVNode("circle", {
        r: "5",
        cx: "20",
        cy: "50",
        fill: "currentColor"
      }),
      /*#__PURE__*/vue.createVNode("circle", {
        r: "5",
        cx: "20",
        cy: "75",
        fill: "currentColor"
      }),
      /*#__PURE__*/vue.createVNode("line", {
        x1: "40",
        y1: "25",
        x2: "90",
        y2: "25",
        "stroke-width": "8",
        stroke: "currentColor"
      }),
      /*#__PURE__*/vue.createVNode("line", {
        x1: "40",
        y1: "50",
        x2: "90",
        y2: "50",
        "stroke-width": "8",
        stroke: "currentColor"
      }),
      /*#__PURE__*/vue.createVNode("line", {
        x1: "40",
        y1: "75",
        x2: "90",
        y2: "75",
        "stroke-width": "8",
        stroke: "currentColor"
      })
    ]),
    /*#__PURE__*/vue.createVNode("symbol", {
      id: "filledArrowRight",
      viewBox: "0 0 100 100"
    }, [
      /*#__PURE__*/vue.createVNode("polyline", {
        points: "20 10, 80 50, 20 90",
        fill: "currentColor"
      })
    ]),
    /*#__PURE__*/vue.createVNode("symbol", {
      id: "arrowRight",
      viewBox: "0 0 100 100"
    }, [
      /*#__PURE__*/vue.createVNode("polyline", {
        points: "30 20, 70 50, 30 80",
        fill: "transparent",
        stroke: "currentColor",
        "stroke-width": "4"
      })
    ]),
    /*#__PURE__*/vue.createVNode("symbol", {
      id: "comments",
      viewBox: "0 0 1024 1024"
    }, [
      /*#__PURE__*/vue.createVNode("path", {
        fill: "currentColor",
        d: "M131.253515 789.333333C87.810305 789.333333 52.51282 753.473975 52.51282 709.41763L52.51282 69.333333 26.25641 96 892.853331 96C936.231586 96 971.487179 131.853286 971.487179 175.915703L971.487179 816 997.74359 789.333333 525.128205 789.333333 517.234323 789.333333 510.649171 793.754413 285.912493 944.636066C273.815607 952.757562 270.491629 969.301024 278.488179 981.586923 286.484727 993.872821 302.773675 997.248736 314.87056 989.127241L539.607238 838.245587 525.128205 842.666667 997.74359 842.666667 1024 842.666667 1024 816 1024 175.915703C1024 102.41369 965.24899 42.666667 892.853331 42.666667L26.25641 42.666667 0 42.666667 0 69.333333 0 709.41763C0 782.925715 58.804881 842.666667 131.253515 842.666667L268.117303 842.666667C282.618319 842.666667 294.373713 830.727593 294.373713 816 294.373713 801.272407 282.618319 789.333333 268.117303 789.333333L131.253515 789.333333Z",
        "p-id": "2666"
      }),
      /*#__PURE__*/vue.createVNode("path", {
        fill: "currentColor",
        d: "M367.589743 442.666667C367.589743 383.756294 320.568162 336 262.564102 336 204.560043 336 157.538461 383.756294 157.538461 442.666667 157.538461 501.577039 204.560043 549.333333 262.564102 549.333333 320.568162 549.333333 367.589743 501.577039 367.589743 442.666667ZM210.051282 442.666667C210.051282 413.211479 233.562074 389.333333 262.564102 389.333333 291.566133 389.333333 315.076924 413.211479 315.076924 442.666667 315.076924 472.121854 291.566133 496 262.564102 496 233.562074 496 210.051282 472.121854 210.051282 442.666667Z",
        "p-id": "2667"
      }),
      /*#__PURE__*/vue.createVNode("path", {
        fill: "currentColor",
        d: "M630.153845 442.666667C630.153845 383.756294 583.132265 336 525.128205 336 467.124145 336 420.102564 383.756294 420.102564 442.666667 420.102564 501.577039 467.124145 549.333333 525.128205 549.333333 583.132265 549.333333 630.153845 501.577039 630.153845 442.666667ZM472.615386 442.666667C472.615386 413.211479 496.126176 389.333333 525.128205 389.333333 554.130236 389.333333 577.641026 413.211479 577.641026 442.666667 577.641026 472.121854 554.130236 496 525.128205 496 496.126176 496 472.615386 472.121854 472.615386 442.666667Z",
        "p-id": "2668"
      }),
      /*#__PURE__*/vue.createVNode("path", {
        fill: "currentColor",
        d: "M892.717948 442.666667C892.717948 383.756294 845.696367 336 787.692307 336 729.688247 336 682.666667 383.756294 682.666667 442.666667 682.666667 501.577039 729.688247 549.333333 787.692307 549.333333 845.696367 549.333333 892.717948 501.577039 892.717948 442.666667ZM735.179488 442.666667C735.179488 413.211479 758.690278 389.333333 787.692307 389.333333 816.694338 389.333333 840.205129 413.211479 840.205129 442.666667 840.205129 472.121854 816.694338 496 787.692307 496 758.690278 496 735.179488 472.121854 735.179488 442.666667Z",
        "p-id": "2669"
      })
    ])
  ], -1 /* HOISTED */);

  function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("svg", _hoisted_1, [
      _hoisted_2
    ]))
  }

  script.render = render;
  script.__file = "src/components/Test/Test.vue";

  function Test (Vue) {
    Vue.component(script.name, script);
  }

  //
  //
  //
  //
  //
  //
  var script$1 = {
    name: 'TestComponent2',
    setup: function setup() {
      var message = 'hello world2!';
      return {
        message: message
      };
    }
  };

  const _withId = /*#__PURE__*/vue.withScopeId("data-v-f780135e");

  vue.pushScopeId("data-v-f780135e");
  const _hoisted_1$1 = { class: "test2" };
  vue.popScopeId();

  const render$1 = /*#__PURE__*/_withId(function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$1, [
      vue.createVNode("div", null, vue.toDisplayString(_ctx.message), 1 /* TEXT */)
    ]))
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".test2[data-v-f780135e] {\n  color: blue;\n}";
  styleInject(css_248z);

  script$1.render = render$1;
  script$1.__scopeId = "data-v-f780135e";
  script$1.__file = "src/components/Test2/Test2.vue";

  function Test2 (Vue) {
    Vue.component(script$1.name, script$1);
  }

  //
  //
  //
  //
  //
  //
  var script$2 = {
    name: 'TestComponent3',
    setup: function setup() {
      var message = 'hello world3!';
      return {
        message: message
      };
    }
  };

  const _withId$1 = /*#__PURE__*/vue.withScopeId("data-v-1932c093");

  vue.pushScopeId("data-v-1932c093");
  const _hoisted_1$2 = { class: "test3" };
  vue.popScopeId();

  const render$2 = /*#__PURE__*/_withId$1(function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$2, [
      vue.createVNode("div", null, vue.toDisplayString(_ctx.message), 1 /* TEXT */)
    ]))
  });

  var css_248z$1 = ".test3[data-v-1932c093] {\n  color: green;\n}";
  styleInject(css_248z$1);

  script$2.render = render$2;
  script$2.__scopeId = "data-v-1932c093";
  script$2.__file = "src/components/Test3/Test3.vue";

  function Test3 (Vue) {
    Vue.component(script$2.name, script$2);
  }

  //
  //
  //
  //
  //
  //
  //
  //
  var script$3 = {
    name: 'Icon',
    props: {
      name: String,
      prefix: {
        type: String,
        "default": 'icon'
      },
      style: Object
    },
    setup: function setup(ctx) {
      var iconName = "#".concat(ctx.prefix).concat(ctx.name);
      return {
        iconName: iconName
      };
    }
  };

  const _hoisted_1$3 = { class: "icon" };

  function render$3(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: "icon-wrapper",
      style: {..._ctx.style}
    }, [
      (vue.openBlock(), vue.createBlock("svg", _hoisted_1$3, [
        vue.createVNode("use", { href: _ctx.iconName }, null, 8 /* PROPS */, ["href"])
      ]))
    ], 4 /* STYLE */))
  }

  var css_248z$2 = "\n.icon-wrapper {\n  display: inline-block;\n}\n.icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n";
  styleInject(css_248z$2);

  script$3.render = render$3;
  script$3.__file = "src/components/Icon/Icon.vue";

  function Icon (Vue) {
    Vue.component(script$3.name, script$3);
  }

  //
  var script$4 = {
    name: 'SvgAnimation',
    setup: function setup() {
      vue.onMounted(function () {
        var logo = document.getElementsByClassName('logo')[0];
        console.log(logo.getTotalLength());
      });
    }
  };

  const _withId$2 = /*#__PURE__*/vue.withScopeId("data-v-5a151e4f");

  vue.pushScopeId("data-v-5a151e4f");
  const _hoisted_1$4 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "500",
      height: "200",
      viewBox: "0 0 500 200"
    }, [
      /*#__PURE__*/vue.createCommentVNode("\n          [2,-1,50] => 2*_x+(-1)*_y+50=x\n          [1, 2, 0] => 1*_x+2*_y+0=y\n\n          顶点坐标\n          [0,0]     => [50,0]\n          [100,0]   => [250,100]\n          [100,50]  => [200,200]\n          [0,50]    => [0,100]\n\n          transform=\"matrix(2 1 -1 2 50 0)\"\n        "),
      /*#__PURE__*/vue.createVNode("rect", {
        class: "rect",
        x: "5",
        y: "5",
        width: "100",
        height: "50",
        fill: "none",
        stroke: "blue",
        "stroke-width": "5"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_2$1 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "440",
      height: "440",
      viewBox: "0 0 440 440"
    }, [
      /*#__PURE__*/vue.createVNode("circle", {
        cx: "220",
        cy: "220",
        r: "200",
        "stroke-width": "20",
        stroke: "#d1d3d7",
        fill: "none"
      }),
      /*#__PURE__*/vue.createCommentVNode(" 2*3.1415926*200 = 1257 "),
      /*#__PURE__*/vue.createVNode("circle", {
        class: "circle",
        cx: "220",
        cy: "220",
        r: "200",
        "stroke-width": "20",
        stroke: "#00a5e0",
        fill: "none",
        transform: "matrix(0 -1 1 0 0 440)"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_3 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200",
      viewBox: "0 0 200 200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        width: "200",
        height: "200",
        fill: "none",
        stroke: "grey",
        "stroke-width": "8"
      }),
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        width: "200",
        height: "200",
        fill: "none",
        stroke: "blue",
        "stroke-width": "8",
        class: "rect-process",
        transform: "matrix(0,1,-1,0,200,0)"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_4 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      viewBox: "0 0 1024 1024",
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("path", {
        class: "logo",
        d: "M786.731708 648C807.42218 648 824.195121 603.109084 824.195121 547.733333 824.195121 492.357583 807.42218 447.466667 786.731708 447.466667 766.041235 447.466667 749.268292 492.357583 749.268292 547.733333 749.268292 603.109084 766.041235 648 786.731708 648ZM462.048781 698.133333C482.739253 698.133333 499.512194 658.853781 499.512194 610.4 499.512194 561.946217 482.739253 522.666667 462.048781 522.666667 441.358308 522.666667 424.585365 561.946217 424.585365 610.4 424.585365 658.853781 441.358308 698.133333 462.048781 698.133333ZM0 572.8C0 822.813926 229.933961 1024 512 1024 794.066039 1024 1024 822.813926 1024 572.8 1024 322.786074 794.066039 121.599999 512 121.599999 515.649685 121.599999 516.946722 122.183253 516.866057 122.124053 514.736119 120.560928 512.302005 118.428984 505.789668 112.472612 487.675081 95.904489 476.340222 86.603485 458.812092 75.393661 404.94781 40.945655 334.29571 21.333333 237.268292 21.333333 223.474645 21.333333 212.292683 32.556062 212.292683 46.4 212.292683 60.243938 223.474645 71.466667 237.268292 71.466667 325.013274 71.466667 386.336418 88.489363 431.969129 117.673005 444.078925 125.417623 494.717728 171.733333 512 171.733333 767.886246 171.733333 974.048781 352.120043 974.048781 572.8 974.048781 793.479955 767.886246 973.866667 512 973.866667 256.113754 973.866667 49.951219 793.479955 49.951219 572.8 49.951219 427.029845 140.536466 294.462295 284.745583 223.557118 297.132651 217.466607 302.254953 202.450961 296.186566 190.018733 290.11818 177.586505 275.157079 172.445527 262.770012 178.536038 102.138268 257.515945 0 406.990833 0 572.8Z",
        "p-id": "2666"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_5 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      class: "line-container",
      viewBox: "0 0 400 400",
      width: "400",
      height: "400"
    }, [
      /*#__PURE__*/vue.createVNode("line", {
        class: "line",
        x1: "0",
        y1: "50",
        x2: "400",
        y2: "50",
        fill: "none",
        "stroke-width": "20",
        stroke: "red"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_6 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        fill: "red",
        width: "100",
        height: "50"
      }, [
        /*#__PURE__*/vue.createVNode("set", {
          attributeName: "x",
          attributeType: "XML",
          to: "10",
          begin: "1s"
        }),
        /*#__PURE__*/vue.createVNode("set", {
          attributeName: "x",
          attributeType: "XML",
          to: "20",
          begin: "2s"
        }),
        /*#__PURE__*/vue.createVNode("set", {
          attributeName: "fill",
          attributeType: "XML",
          to: "blue",
          begin: "3s"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_7 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("circle", {
        cx: "0",
        cy: "0",
        r: "30",
        fill: "blue",
        stroke: "black",
        "stroke-width": "1"
      }, [
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "cx",
          attributeType: "XML",
          from: "0",
          to: "100",
          dur: "3s",
          repeatCount: "2",
          fill: "freeze"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "cy",
          attributeType: "XML",
          from: "0",
          to: "50",
          dur: "3s",
          repeatCount: "2",
          fill: "freeze"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "fill",
          attributeType: "XML",
          from: "blue",
          to: "red",
          dur: "3s",
          repeatCount: "2",
          fill: "freeze"
        }),
        /*#__PURE__*/vue.createVNode("animateTransform", {
          attributeName: "transform",
          attributeType: "XML",
          begin: "0",
          dur: "3s",
          type: "scale",
          from: "1",
          to: "2",
          repeatCount: "2",
          fill: "freeze"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_8 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "400",
      height: "400"
    }, [
      /*#__PURE__*/vue.createVNode("polygon", {
        points: "30 30 70 30 90 70 10 70",
        fill: "#fcc",
        stroke: "black"
      }, [
        /*#__PURE__*/vue.createVNode("animate", {
          attributeName: "points",
          attributeType: "XML",
          to: "50 30 70 50 50 90 30 50",
          dur: "5s",
          fill: "freeze",
          repeatCount: "1"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_9 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        fill: "red",
        width: "10",
        height: "10"
      }, [
        /*#__PURE__*/vue.createVNode("animateMotion", {
          path: "M10 10 L110 10 L110 110 L10 110 Z",
          dur: "5s",
          rotate: "0",
          fill: "freeze",
          repeatCount: "2"
        })
      ]),
      /*#__PURE__*/vue.createVNode("path", {
        d: "M10 10 L110 10 L110 110 L10 110 Z",
        fill: "none",
        stroke: "green"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_10 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "0",
        fill: "red",
        width: "10",
        height: "10"
      }, [
        /*#__PURE__*/vue.createVNode("animateMotion", {
          id: "forward-rect",
          path: "M10 10 L110 10 L110 110 L10 110",
          dur: "2s",
          rotate: "0",
          fill: "freeze",
          begin: "0; backward-rect.end + 0.5s"
        }),
        /*#__PURE__*/vue.createVNode("animateMotion", {
          id: "backward-rect",
          path: "M10 110 L110 110 L110 10 L10 10",
          dur: "2s",
          rotate: "0",
          fill: "freeze",
          begin: "forward-rect.end + 0.5s"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          id: "red-to-blue",
          attributeName: "fill",
          attributeType: "XML",
          from: "red",
          to: "blue",
          dur: "2s",
          fill: "freeze",
          begin: "0; blue-to-red.end + 0.5s"
        }),
        /*#__PURE__*/vue.createVNode("animate", {
          id: "blue-to-red",
          attributeName: "fill",
          attributeType: "XML",
          from: "blue",
          to: "red",
          dur: "2s",
          fill: "freeze",
          begin: "red-to-blue.end + 0.5s"
        })
      ]),
      /*#__PURE__*/vue.createVNode("path", {
        d: "M10 10 L110 10 L110 110 L10 110",
        fill: "none",
        stroke: "green"
      })
    ])
  ], -1 /* HOISTED */);
  const _hoisted_11 = /*#__PURE__*/vue.createVNode("div", { class: "container" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      viewBox: "0 0 200 200",
      width: "200",
      height: "200"
    }, [
      /*#__PURE__*/vue.createVNode("g", { id: "rect1" }, [
        /*#__PURE__*/vue.createVNode("rect", {
          x: "0",
          y: "0",
          rx: "0",
          ry: "0",
          width: "100",
          height: "100",
          fill: "red"
        }, [
          /*#__PURE__*/vue.createVNode("animate", {
            attributeType: "XML",
            attributeName: "fill",
            from: "red",
            to: "green",
            begin: "rect1.click",
            dur: "2s",
            fill: "freeze"
          })
        ])
      ]),
      /*#__PURE__*/vue.createVNode("animateTransform", {
        attributeType: "XML",
        attributeName: "transform",
        type: "translate",
        from: "0, 0",
        to: "50, 50",
        begin: "rect1.click",
        dur: "2s",
        fill: "freeze"
      }),
      /*#__PURE__*/vue.createVNode("rect", {
        x: "0",
        y: "100",
        width: "100",
        height: "100",
        fill: "blue"
      }, [
        /*#__PURE__*/vue.createVNode("animate", {
          attributeType: "XML",
          attributeName: "fill",
          from: "blue",
          to: "green",
          begin: "rect1.click",
          dur: "2s",
          fill: "freeze"
        })
      ])
    ])
  ], -1 /* HOISTED */);
  const _hoisted_12 = /*#__PURE__*/vue.createVNode("div", { class: "container bg-grey" }, [
    /*#__PURE__*/vue.createVNode("svg", {
      width: "400",
      height: "400"
    }, [
      /*#__PURE__*/vue.createVNode("defs", null, [
        /*#__PURE__*/vue.createVNode("mask", { id: "test-mask" }, [
          /*#__PURE__*/vue.createVNode("rect", {
            x: "5",
            y: "5",
            width: "390",
            height: "390",
            fill: "red"
          }),
          /*#__PURE__*/vue.createVNode("circle", {
            r: "50",
            cx: "150",
            cy: "150"
          })
        ]),
        /*#__PURE__*/vue.createVNode("linearGradient", { id: "test-linear-gradient" }, [
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "0%",
            "stop-color": "red",
            "stop-opacity": "1"
          }),
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "50%",
            "stop-color": "green"
          }),
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "100%",
            "stop-color": "blue",
            "stop-opacity": "0.5"
          })
        ]),
        /*#__PURE__*/vue.createVNode("radialGradient", {
          id: "test-radial-gradient",
          cx: "50%",
          cy: "50%",
          fx: "50%",
          fy: "50%",
          r: "50%"
        }, [
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "0%",
            "stop-color": "#fff",
            "stop-opacity": "1"
          }),
          /*#__PURE__*/vue.createVNode("stop", {
            offset: "100%",
            "stop-color": "#fff",
            "stop-opacity": "0"
          })
        ])
      ]),
      /*#__PURE__*/vue.createCommentVNode("<rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"url(#test-radial-gradient)\"></rect>"),
      /*#__PURE__*/vue.createVNode("circle", {
        cx: "200",
        cy: "200",
        r: "150",
        fill: "url(#test-radial-gradient)"
      }),
      /*#__PURE__*/vue.createCommentVNode("<rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"blue\" mask=\"url(#test-mask)\"></rect>")
    ])
  ], -1 /* HOISTED */);
  vue.popScopeId();

  const render$4 = /*#__PURE__*/_withId$2(function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", null, [
      _hoisted_1$4,
      _hoisted_2$1,
      _hoisted_3,
      _hoisted_4,
      _hoisted_5,
      _hoisted_6,
      _hoisted_7,
      _hoisted_8,
      _hoisted_9,
      _hoisted_10,
      _hoisted_11,
      _hoisted_12
    ]))
  });

  var css_248z$3 = ".container[data-v-5a151e4f] svg {\n  border: 1px solid #000;\n}\n\n.rect[data-v-5a151e4f] {\n  stroke-dasharray: 10 20 30;\n}\n\n.circle[data-v-5a151e4f] {\n  animation: circle-data-v-5a151e4f 5s linear infinite;\n}\n\n@keyframes circle-data-v-5a151e4f {\n  from {\n    stroke-dasharray: 0 1257;\n  }\n  to {\n    stroke-dasharray: 1257 0;\n  }\n}\n.rect-process[data-v-5a151e4f] {\n  animation: rect-process-data-v-5a151e4f 5s linear infinite;\n}\n\n@keyframes rect-process-data-v-5a151e4f {\n  from {\n    stroke-dasharray: 0 800;\n  }\n  to {\n    stroke-dasharray: 800 0;\n  }\n}\n.logo[data-v-5a151e4f] {\n  fill: none;\n  stroke: #333;\n  stroke-width: 5;\n  animation: logo-data-v-5a151e4f 10s linear 1 forwards;\n}\n\n@keyframes logo-data-v-5a151e4f {\n  0% {\n    fill: white;\n    stroke: #333;\n    stroke-dasharray: 6885;\n    stroke-dashoffset: 6885;\n  }\n  50% {\n    fill: white;\n    stroke: #333;\n    stroke-dasharray: 6885;\n    stroke-dashoffset: 0;\n  }\n  75% {\n    fill: red;\n    stroke: white;\n  }\n  100% {\n    fill: blue;\n    stroke: white;\n  }\n}\n.line[data-v-5a151e4f] {\n  stroke-dasharray: 400;\n  stroke-dashoffset: 400;\n  transition: stroke-dashoffset 0.5s ease-out;\n}\n\n.line-container[data-v-5a151e4f]:hover .line {\n  stroke-dashoffset: 0;\n}\n\n.bg-grey[data-v-5a151e4f] {\n  background: #333;\n}";
  styleInject(css_248z$3);

  script$4.render = render$4;
  script$4.__scopeId = "data-v-5a151e4f";
  script$4.__file = "src/components/SvgAnimation/SvgAnimation.vue";

  function SvgAnimation (Vue) {
    Vue.component(script$4.name, script$4);
  }

  //
  var script$5 = {
    name: 'ImoocLoading',
    props: {
      width: {
        type: [Number, String],
        "default": 50
      },
      height: {
        type: [Number, String],
        "default": 50
      },
      outsideColor: {
        type: String,
        "default": '#3be6cb'
      },
      insideColor: {
        type: String,
        "default": '#02bcfe'
      },
      duration: {
        type: [Number, String],
        "default": 2
      }
    },
    setup: function setup(ctx) {
      var outsideColorAnimation = vue.computed(function () {
        return "".concat(ctx.outsideColor, ";").concat(ctx.insideColor, ";").concat(ctx.outsideColor);
      });
      var insideColorAnimation = vue.computed(function () {
        return "".concat(ctx.insideColor, ";").concat(ctx.outsideColor, ";").concat(ctx.insideColor);
      });
      return {
        outsideColorAnimation: outsideColorAnimation,
        insideColorAnimation: insideColorAnimation
      };
    }
  };

  const _hoisted_1$5 = { class: "imooc-loading" };
  const _hoisted_2$2 = { class: "imooc-loading-content" };

  function render$5(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", _hoisted_1$5, [
      (vue.openBlock(), vue.createBlock("svg", {
        width: _ctx.width,
        height: _ctx.height,
        viewBox: "0 0 50 50",
        preserveAspectRatio: "xMidYMid meet"
      }, [
        vue.createVNode("circle", {
          cx: "25",
          cy: "25",
          r: "22",
          fill: "none",
          "stroke-width": "3",
          stroke: _ctx.outsideColor,
          "stroke-dasharray": "34",
          "stroke-linecap": "round"
        }, [
          vue.createVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "0 25 25;360 25 25",
            dur: `${_ctx.duration}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["dur"]),
          vue.createVNode("animate", {
            attributeName: "stroke",
            values: _ctx.outsideColorAnimation,
            dur: `${+_ctx.duration * 2}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["values", "dur"])
        ], 8 /* PROPS */, ["stroke"]),
        vue.createVNode("circle", {
          cx: "25",
          cy: "25",
          r: "12",
          fill: "none",
          "stroke-width": "3",
          "stroke-dasharray": "19",
          stroke: _ctx.insideColor,
          "stroke-linecap": "round"
        }, [
          vue.createVNode("animateTransform", {
            attributeName: "transform",
            type: "rotate",
            values: "360 25 25;0 25 25",
            dur: `${_ctx.duration}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["dur"]),
          vue.createVNode("animate", {
            attributeName: "stroke",
            values: _ctx.insideColorAnimation,
            dur: `${+_ctx.duration * 2}s`,
            repeatCount: "indefinite"
          }, null, 8 /* PROPS */, ["values", "dur"])
        ], 8 /* PROPS */, ["stroke"])
      ], 8 /* PROPS */, ["width", "height"])),
      vue.createVNode("div", _hoisted_2$2, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ]))
  }

  script$5.render = render$5;
  script$5.__file = "src/components/ImoocLoading/ImoocLoading.vue";

  function ImoocLoading (Vue) {
    Vue.component(script$5.name, script$5);
  }

  const rnds8 = new Uint8Array(16);
  function rng() {
    return crypto.randomFillSync(rnds8);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  const byteToHex = [];

  for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
  }

  function bytesToUuid(buf, offset_) {
    const offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

    return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
  }

  function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = rnds[i];
      }

      return buf;
    }

    return bytesToUuid(rnds);
  }

  //
  var script$6 = {
    name: 'ImoocFlyBox',
    props: {
      lineColor: {
        type: String,
        "default": '#235fa7'
      },
      starColor: {
        type: String,
        "default": '#4fd2dd'
      },
      starLength: {
        type: [String, Number],
        "default": 50
      },
      duration: {
        type: [Number, String],
        "default": 3
      }
    },
    setup: function setup() {
      var uuid = v4();
      console.log(uuid);
      var width = vue.ref(0);
      var height = vue.ref(0);
      var refName = 'imoocFlyBox';
      var pathId = "".concat(refName, "-path-").concat(uuid);
      var radialGradientId = "".concat(refName, "-gradient-").concat(uuid);
      var maskId = "".concat(refName, "-mask-").concat(uuid);
      var path = vue.computed(function () {
        return "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, " L5 ").concat(height.value - 5, " Z");
      });

      var init = function init() {
        var instance = vue.getCurrentInstance();
        var dom = instance.ctx.$refs[refName];
        width.value = dom.clientWidth;
        height.value = dom.clientHeight;
      };

      vue.onMounted(function () {
        init();
      });
      return {
        width: width,
        height: height,
        path: path,
        refName: refName,
        pathId: pathId,
        radialGradientId: radialGradientId,
        maskId: maskId
      };
    }
  };

  const _withId$3 = /*#__PURE__*/vue.withScopeId("data-v-c0159702");

  vue.pushScopeId("data-v-c0159702");
  const _hoisted_1$6 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "0%",
    "stop-color": "#fff",
    "stop-opacity": "1"
  }, null, -1 /* HOISTED */);
  const _hoisted_2$3 = /*#__PURE__*/vue.createVNode("stop", {
    offset: "100%",
    "stop-color": "#fff",
    "stop-opacity": "0"
  }, null, -1 /* HOISTED */);
  const _hoisted_3$1 = { class: "imooc-fly-box-content" };
  vue.popScopeId();

  const render$6 = /*#__PURE__*/_withId$3(function render(_ctx, _cache) {
    return (vue.openBlock(), vue.createBlock("div", {
      class: "imooc-fly-box",
      ref: _ctx.refName
    }, [
      (vue.openBlock(), vue.createBlock("svg", {
        width: _ctx.width,
        height: _ctx.height
      }, [
        vue.createVNode("defs", null, [
          vue.createVNode("path", {
            id: _ctx.pathId,
            d: _ctx.path,
            fill: "none"
          }, null, 8 /* PROPS */, ["id", "d"]),
          vue.createVNode("radialGradient", {
            id: _ctx.radialGradientId,
            cx: "50%",
            cy: "50%",
            fx: "100%",
            fy: "50%",
            r: "50%"
          }, [
            _hoisted_1$6,
            _hoisted_2$3
          ], 8 /* PROPS */, ["id"]),
          vue.createVNode("mask", { id: _ctx.maskId }, [
            vue.createVNode("circle", {
              r: _ctx.starLength,
              cx: "0",
              cy: "0",
              fill: `url(#${_ctx.radialGradientId})`
            }, [
              vue.createVNode("animateMotion", {
                dur: `${_ctx.duration}s`,
                path: _ctx.path,
                rotate: "auto",
                repeatCount: "indefinite"
              }, null, 8 /* PROPS */, ["dur", "path"])
            ], 8 /* PROPS */, ["r", "fill"])
          ], 8 /* PROPS */, ["id"])
        ]),
        vue.createVNode("use", {
          href: `#${_ctx.pathId}`,
          "stroke-width": "1",
          stroke: _ctx.lineColor
        }, null, 8 /* PROPS */, ["href", "stroke"]),
        vue.createVNode("use", {
          href: `#${_ctx.pathId}`,
          "stroke-width": "3",
          stroke: _ctx.starColor,
          mask: `url(#${_ctx.maskId})`
        }, null, 8 /* PROPS */, ["href", "stroke", "mask"])
      ], 8 /* PROPS */, ["width", "height"])),
      vue.createVNode("div", _hoisted_3$1, [
        vue.renderSlot(_ctx.$slots, "default")
      ])
    ], 512 /* NEED_PATCH */))
  });

  var css_248z$4 = ".imooc-fly-box[data-v-c0159702] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box[data-v-c0159702] svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box[data-v-c0159702] .imooc-fly-box-content {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  box-sizing: border-box;\n}";
  styleInject(css_248z$4);

  script$6.render = render$6;
  script$6.__scopeId = "data-v-c0159702";
  script$6.__file = "src/components/ImoocFlyBox/ImoocFlyBox.vue";

  function ImoocFlyBox (Vue) {
    Vue.component(script$6.name, script$6);
  }

  function index (Vue) {
    Vue.use(Test);
    Vue.use(Test2);
    Vue.use(Test3);
    Vue.use(Icon);
    Vue.use(SvgAnimation);
    Vue.use(ImoocLoading);
    Vue.use(ImoocFlyBox);
  }

  return index;

})));
