import { openBlock, createBlock, createVNode, pushScopeId, popScopeId, toDisplayString, withScopeId, onMounted, createCommentVNode, computed, renderSlot, ref, getCurrentInstance, onUnmounted, nextTick, watch } from 'vue';
import crypto from 'crypto';
import Echarts from 'echarts';

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
const _hoisted_2 = /*#__PURE__*/createVNode("defs", null, [
  /*#__PURE__*/createVNode("symbol", {
    id: "more",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/createVNode("circle", {
      r: "5",
      cx: "20",
      cy: "25",
      fill: "currentColor"
    }),
    /*#__PURE__*/createVNode("circle", {
      r: "5",
      cx: "20",
      cy: "50",
      fill: "currentColor"
    }),
    /*#__PURE__*/createVNode("circle", {
      r: "5",
      cx: "20",
      cy: "75",
      fill: "currentColor"
    }),
    /*#__PURE__*/createVNode("line", {
      x1: "40",
      y1: "25",
      x2: "90",
      y2: "25",
      "stroke-width": "8",
      stroke: "currentColor"
    }),
    /*#__PURE__*/createVNode("line", {
      x1: "40",
      y1: "50",
      x2: "90",
      y2: "50",
      "stroke-width": "8",
      stroke: "currentColor"
    }),
    /*#__PURE__*/createVNode("line", {
      x1: "40",
      y1: "75",
      x2: "90",
      y2: "75",
      "stroke-width": "8",
      stroke: "currentColor"
    })
  ]),
  /*#__PURE__*/createVNode("symbol", {
    id: "filledArrowRight",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/createVNode("polyline", {
      points: "20 10, 80 50, 20 90",
      fill: "currentColor"
    })
  ]),
  /*#__PURE__*/createVNode("symbol", {
    id: "arrowRight",
    viewBox: "0 0 100 100"
  }, [
    /*#__PURE__*/createVNode("polyline", {
      points: "30 20, 70 50, 30 80",
      fill: "transparent",
      stroke: "currentColor",
      "stroke-width": "4"
    })
  ]),
  /*#__PURE__*/createVNode("symbol", {
    id: "comments",
    viewBox: "0 0 1024 1024"
  }, [
    /*#__PURE__*/createVNode("path", {
      fill: "currentColor",
      d: "M131.253515 789.333333C87.810305 789.333333 52.51282 753.473975 52.51282 709.41763L52.51282 69.333333 26.25641 96 892.853331 96C936.231586 96 971.487179 131.853286 971.487179 175.915703L971.487179 816 997.74359 789.333333 525.128205 789.333333 517.234323 789.333333 510.649171 793.754413 285.912493 944.636066C273.815607 952.757562 270.491629 969.301024 278.488179 981.586923 286.484727 993.872821 302.773675 997.248736 314.87056 989.127241L539.607238 838.245587 525.128205 842.666667 997.74359 842.666667 1024 842.666667 1024 816 1024 175.915703C1024 102.41369 965.24899 42.666667 892.853331 42.666667L26.25641 42.666667 0 42.666667 0 69.333333 0 709.41763C0 782.925715 58.804881 842.666667 131.253515 842.666667L268.117303 842.666667C282.618319 842.666667 294.373713 830.727593 294.373713 816 294.373713 801.272407 282.618319 789.333333 268.117303 789.333333L131.253515 789.333333Z",
      "p-id": "2666"
    }),
    /*#__PURE__*/createVNode("path", {
      fill: "currentColor",
      d: "M367.589743 442.666667C367.589743 383.756294 320.568162 336 262.564102 336 204.560043 336 157.538461 383.756294 157.538461 442.666667 157.538461 501.577039 204.560043 549.333333 262.564102 549.333333 320.568162 549.333333 367.589743 501.577039 367.589743 442.666667ZM210.051282 442.666667C210.051282 413.211479 233.562074 389.333333 262.564102 389.333333 291.566133 389.333333 315.076924 413.211479 315.076924 442.666667 315.076924 472.121854 291.566133 496 262.564102 496 233.562074 496 210.051282 472.121854 210.051282 442.666667Z",
      "p-id": "2667"
    }),
    /*#__PURE__*/createVNode("path", {
      fill: "currentColor",
      d: "M630.153845 442.666667C630.153845 383.756294 583.132265 336 525.128205 336 467.124145 336 420.102564 383.756294 420.102564 442.666667 420.102564 501.577039 467.124145 549.333333 525.128205 549.333333 583.132265 549.333333 630.153845 501.577039 630.153845 442.666667ZM472.615386 442.666667C472.615386 413.211479 496.126176 389.333333 525.128205 389.333333 554.130236 389.333333 577.641026 413.211479 577.641026 442.666667 577.641026 472.121854 554.130236 496 525.128205 496 496.126176 496 472.615386 472.121854 472.615386 442.666667Z",
      "p-id": "2668"
    }),
    /*#__PURE__*/createVNode("path", {
      fill: "currentColor",
      d: "M892.717948 442.666667C892.717948 383.756294 845.696367 336 787.692307 336 729.688247 336 682.666667 383.756294 682.666667 442.666667 682.666667 501.577039 729.688247 549.333333 787.692307 549.333333 845.696367 549.333333 892.717948 501.577039 892.717948 442.666667ZM735.179488 442.666667C735.179488 413.211479 758.690278 389.333333 787.692307 389.333333 816.694338 389.333333 840.205129 413.211479 840.205129 442.666667 840.205129 472.121854 816.694338 496 787.692307 496 758.690278 496 735.179488 472.121854 735.179488 442.666667Z",
      "p-id": "2669"
    })
  ])
], -1 /* HOISTED */);

function render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", _hoisted_1, [
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

const _withId = /*#__PURE__*/withScopeId("data-v-f780135e");

pushScopeId("data-v-f780135e");
const _hoisted_1$1 = { class: "test2" };
popScopeId();

const render$1 = /*#__PURE__*/_withId(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1$1, [
    createVNode("div", null, toDisplayString(_ctx.message), 1 /* TEXT */)
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

const _withId$1 = /*#__PURE__*/withScopeId("data-v-1932c093");

pushScopeId("data-v-1932c093");
const _hoisted_1$2 = { class: "test3" };
popScopeId();

const render$2 = /*#__PURE__*/_withId$1(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1$2, [
    createVNode("div", null, toDisplayString(_ctx.message), 1 /* TEXT */)
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
  return (openBlock(), createBlock("div", {
    class: "icon-wrapper",
    style: {..._ctx.style}
  }, [
    (openBlock(), createBlock("svg", _hoisted_1$3, [
      createVNode("use", { href: _ctx.iconName }, null, 8 /* PROPS */, ["href"])
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
    onMounted(function () {
      var logo = document.getElementsByClassName('logo')[0];
      console.log(logo.getTotalLength());
    });
  }
};

const _withId$2 = /*#__PURE__*/withScopeId("data-v-5a151e4f");

pushScopeId("data-v-5a151e4f");
const _hoisted_1$4 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "500",
    height: "200",
    viewBox: "0 0 500 200"
  }, [
    /*#__PURE__*/createCommentVNode("\n          [2,-1,50] => 2*_x+(-1)*_y+50=x\n          [1, 2, 0] => 1*_x+2*_y+0=y\n\n          顶点坐标\n          [0,0]     => [50,0]\n          [100,0]   => [250,100]\n          [100,50]  => [200,200]\n          [0,50]    => [0,100]\n\n          transform=\"matrix(2 1 -1 2 50 0)\"\n        "),
    /*#__PURE__*/createVNode("rect", {
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
const _hoisted_2$1 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "440",
    height: "440",
    viewBox: "0 0 440 440"
  }, [
    /*#__PURE__*/createVNode("circle", {
      cx: "220",
      cy: "220",
      r: "200",
      "stroke-width": "20",
      stroke: "#d1d3d7",
      fill: "none"
    }),
    /*#__PURE__*/createCommentVNode(" 2*3.1415926*200 = 1257 "),
    /*#__PURE__*/createVNode("circle", {
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
const _hoisted_3 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "200",
    height: "200",
    viewBox: "0 0 200 200"
  }, [
    /*#__PURE__*/createVNode("rect", {
      x: "0",
      y: "0",
      width: "200",
      height: "200",
      fill: "none",
      stroke: "grey",
      "stroke-width": "8"
    }),
    /*#__PURE__*/createVNode("rect", {
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
const _hoisted_4 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    viewBox: "0 0 1024 1024",
    width: "200",
    height: "200"
  }, [
    /*#__PURE__*/createVNode("path", {
      class: "logo",
      d: "M786.731708 648C807.42218 648 824.195121 603.109084 824.195121 547.733333 824.195121 492.357583 807.42218 447.466667 786.731708 447.466667 766.041235 447.466667 749.268292 492.357583 749.268292 547.733333 749.268292 603.109084 766.041235 648 786.731708 648ZM462.048781 698.133333C482.739253 698.133333 499.512194 658.853781 499.512194 610.4 499.512194 561.946217 482.739253 522.666667 462.048781 522.666667 441.358308 522.666667 424.585365 561.946217 424.585365 610.4 424.585365 658.853781 441.358308 698.133333 462.048781 698.133333ZM0 572.8C0 822.813926 229.933961 1024 512 1024 794.066039 1024 1024 822.813926 1024 572.8 1024 322.786074 794.066039 121.599999 512 121.599999 515.649685 121.599999 516.946722 122.183253 516.866057 122.124053 514.736119 120.560928 512.302005 118.428984 505.789668 112.472612 487.675081 95.904489 476.340222 86.603485 458.812092 75.393661 404.94781 40.945655 334.29571 21.333333 237.268292 21.333333 223.474645 21.333333 212.292683 32.556062 212.292683 46.4 212.292683 60.243938 223.474645 71.466667 237.268292 71.466667 325.013274 71.466667 386.336418 88.489363 431.969129 117.673005 444.078925 125.417623 494.717728 171.733333 512 171.733333 767.886246 171.733333 974.048781 352.120043 974.048781 572.8 974.048781 793.479955 767.886246 973.866667 512 973.866667 256.113754 973.866667 49.951219 793.479955 49.951219 572.8 49.951219 427.029845 140.536466 294.462295 284.745583 223.557118 297.132651 217.466607 302.254953 202.450961 296.186566 190.018733 290.11818 177.586505 275.157079 172.445527 262.770012 178.536038 102.138268 257.515945 0 406.990833 0 572.8Z",
      "p-id": "2666"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_5 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    class: "line-container",
    viewBox: "0 0 400 400",
    width: "400",
    height: "400"
  }, [
    /*#__PURE__*/createVNode("line", {
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
const _hoisted_6 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "200",
    height: "200"
  }, [
    /*#__PURE__*/createVNode("rect", {
      x: "0",
      y: "0",
      fill: "red",
      width: "100",
      height: "50"
    }, [
      /*#__PURE__*/createVNode("set", {
        attributeName: "x",
        attributeType: "XML",
        to: "10",
        begin: "1s"
      }),
      /*#__PURE__*/createVNode("set", {
        attributeName: "x",
        attributeType: "XML",
        to: "20",
        begin: "2s"
      }),
      /*#__PURE__*/createVNode("set", {
        attributeName: "fill",
        attributeType: "XML",
        to: "blue",
        begin: "3s"
      })
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_7 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "200",
    height: "200"
  }, [
    /*#__PURE__*/createVNode("circle", {
      cx: "0",
      cy: "0",
      r: "30",
      fill: "blue",
      stroke: "black",
      "stroke-width": "1"
    }, [
      /*#__PURE__*/createVNode("animate", {
        attributeName: "cx",
        attributeType: "XML",
        from: "0",
        to: "100",
        dur: "3s",
        repeatCount: "2",
        fill: "freeze"
      }),
      /*#__PURE__*/createVNode("animate", {
        attributeName: "cy",
        attributeType: "XML",
        from: "0",
        to: "50",
        dur: "3s",
        repeatCount: "2",
        fill: "freeze"
      }),
      /*#__PURE__*/createVNode("animate", {
        attributeName: "fill",
        attributeType: "XML",
        from: "blue",
        to: "red",
        dur: "3s",
        repeatCount: "2",
        fill: "freeze"
      }),
      /*#__PURE__*/createVNode("animateTransform", {
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
const _hoisted_8 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "400",
    height: "400"
  }, [
    /*#__PURE__*/createVNode("polygon", {
      points: "30 30 70 30 90 70 10 70",
      fill: "#fcc",
      stroke: "black"
    }, [
      /*#__PURE__*/createVNode("animate", {
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
const _hoisted_9 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "200",
    height: "200"
  }, [
    /*#__PURE__*/createVNode("rect", {
      x: "0",
      y: "0",
      fill: "red",
      width: "10",
      height: "10"
    }, [
      /*#__PURE__*/createVNode("animateMotion", {
        path: "M10 10 L110 10 L110 110 L10 110 Z",
        dur: "5s",
        rotate: "0",
        fill: "freeze",
        repeatCount: "2"
      })
    ]),
    /*#__PURE__*/createVNode("path", {
      d: "M10 10 L110 10 L110 110 L10 110 Z",
      fill: "none",
      stroke: "green"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_10 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "200",
    height: "200"
  }, [
    /*#__PURE__*/createVNode("rect", {
      x: "0",
      y: "0",
      fill: "red",
      width: "10",
      height: "10"
    }, [
      /*#__PURE__*/createVNode("animateMotion", {
        id: "forward-rect",
        path: "M10 10 L110 10 L110 110 L10 110",
        dur: "2s",
        rotate: "0",
        fill: "freeze",
        begin: "0; backward-rect.end + 0.5s"
      }),
      /*#__PURE__*/createVNode("animateMotion", {
        id: "backward-rect",
        path: "M10 110 L110 110 L110 10 L10 10",
        dur: "2s",
        rotate: "0",
        fill: "freeze",
        begin: "forward-rect.end + 0.5s"
      }),
      /*#__PURE__*/createVNode("animate", {
        id: "red-to-blue",
        attributeName: "fill",
        attributeType: "XML",
        from: "red",
        to: "blue",
        dur: "2s",
        fill: "freeze",
        begin: "0; blue-to-red.end + 0.5s"
      }),
      /*#__PURE__*/createVNode("animate", {
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
    /*#__PURE__*/createVNode("path", {
      d: "M10 10 L110 10 L110 110 L10 110",
      fill: "none",
      stroke: "green"
    })
  ])
], -1 /* HOISTED */);
const _hoisted_11 = /*#__PURE__*/createVNode("div", { class: "container" }, [
  /*#__PURE__*/createVNode("svg", {
    viewBox: "0 0 200 200",
    width: "200",
    height: "200"
  }, [
    /*#__PURE__*/createVNode("g", { id: "rect1" }, [
      /*#__PURE__*/createVNode("rect", {
        x: "0",
        y: "0",
        rx: "0",
        ry: "0",
        width: "100",
        height: "100",
        fill: "red"
      }, [
        /*#__PURE__*/createVNode("animate", {
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
    /*#__PURE__*/createVNode("animateTransform", {
      attributeType: "XML",
      attributeName: "transform",
      type: "translate",
      from: "0, 0",
      to: "50, 50",
      begin: "rect1.click",
      dur: "2s",
      fill: "freeze"
    }),
    /*#__PURE__*/createVNode("rect", {
      x: "0",
      y: "100",
      width: "100",
      height: "100",
      fill: "blue"
    }, [
      /*#__PURE__*/createVNode("animate", {
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
const _hoisted_12 = /*#__PURE__*/createVNode("div", { class: "container bg-grey" }, [
  /*#__PURE__*/createVNode("svg", {
    width: "400",
    height: "400"
  }, [
    /*#__PURE__*/createVNode("defs", null, [
      /*#__PURE__*/createVNode("mask", { id: "test-mask" }, [
        /*#__PURE__*/createVNode("rect", {
          x: "5",
          y: "5",
          width: "390",
          height: "390",
          fill: "red"
        }),
        /*#__PURE__*/createVNode("circle", {
          r: "50",
          cx: "150",
          cy: "150"
        })
      ]),
      /*#__PURE__*/createVNode("linearGradient", { id: "test-linear-gradient" }, [
        /*#__PURE__*/createVNode("stop", {
          offset: "0%",
          "stop-color": "red",
          "stop-opacity": "1"
        }),
        /*#__PURE__*/createVNode("stop", {
          offset: "50%",
          "stop-color": "green"
        }),
        /*#__PURE__*/createVNode("stop", {
          offset: "100%",
          "stop-color": "blue",
          "stop-opacity": "0.5"
        })
      ]),
      /*#__PURE__*/createVNode("radialGradient", {
        id: "test-radial-gradient",
        cx: "50%",
        cy: "50%",
        fx: "50%",
        fy: "50%",
        r: "50%"
      }, [
        /*#__PURE__*/createVNode("stop", {
          offset: "0%",
          "stop-color": "#fff",
          "stop-opacity": "1"
        }),
        /*#__PURE__*/createVNode("stop", {
          offset: "100%",
          "stop-color": "#fff",
          "stop-opacity": "0"
        })
      ])
    ]),
    /*#__PURE__*/createCommentVNode("<rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"url(#test-radial-gradient)\"></rect>"),
    /*#__PURE__*/createVNode("circle", {
      cx: "200",
      cy: "200",
      r: "150",
      fill: "url(#test-radial-gradient)"
    }),
    /*#__PURE__*/createCommentVNode("<rect x=\"5\" y=\"5\" width=\"390\" height=\"390\" fill=\"blue\" mask=\"url(#test-mask)\"></rect>")
  ])
], -1 /* HOISTED */);
popScopeId();

const render$4 = /*#__PURE__*/_withId$2(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", null, [
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
    var outsideColorAnimation = computed(function () {
      return "".concat(ctx.outsideColor, ";").concat(ctx.insideColor, ";").concat(ctx.outsideColor);
    });
    var insideColorAnimation = computed(function () {
      return "".concat(ctx.insideColor, ";").concat(ctx.outsideColor, ";").concat(ctx.insideColor);
    });
    return {
      outsideColorAnimation: outsideColorAnimation,
      insideColorAnimation: insideColorAnimation
    };
  }
};

const _withId$3 = /*#__PURE__*/withScopeId("data-v-1fe70522");

pushScopeId("data-v-1fe70522");
const _hoisted_1$5 = { class: "imooc-loading" };
const _hoisted_2$2 = { class: "imooc-loading-content" };
popScopeId();

const render$5 = /*#__PURE__*/_withId$3(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", _hoisted_1$5, [
    (openBlock(), createBlock("svg", {
      width: _ctx.width,
      height: _ctx.height,
      viewBox: "0 0 50 50",
      preserveAspectRatio: "xMidYMid meet"
    }, [
      createVNode("circle", {
        cx: "25",
        cy: "25",
        r: "22",
        fill: "none",
        "stroke-width": "3",
        stroke: _ctx.outsideColor,
        "stroke-dasharray": "34",
        "stroke-linecap": "round"
      }, [
        createVNode("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: "0 25 25;360 25 25",
          dur: `${_ctx.duration}s`,
          repeatCount: "indefinite"
        }, null, 8 /* PROPS */, ["dur"]),
        createVNode("animate", {
          attributeName: "stroke",
          values: _ctx.outsideColorAnimation,
          dur: `${+_ctx.duration * 2}s`,
          repeatCount: "indefinite"
        }, null, 8 /* PROPS */, ["values", "dur"])
      ], 8 /* PROPS */, ["stroke"]),
      createVNode("circle", {
        cx: "25",
        cy: "25",
        r: "12",
        fill: "none",
        "stroke-width": "3",
        "stroke-dasharray": "19",
        stroke: _ctx.insideColor,
        "stroke-linecap": "round"
      }, [
        createVNode("animateTransform", {
          attributeName: "transform",
          type: "rotate",
          values: "360 25 25;0 25 25",
          dur: `${_ctx.duration}s`,
          repeatCount: "indefinite"
        }, null, 8 /* PROPS */, ["dur"]),
        createVNode("animate", {
          attributeName: "stroke",
          values: _ctx.insideColorAnimation,
          dur: `${+_ctx.duration * 2}s`,
          repeatCount: "indefinite"
        }, null, 8 /* PROPS */, ["values", "dur"])
      ], 8 /* PROPS */, ["stroke"])
    ], 8 /* PROPS */, ["width", "height"])),
    createVNode("div", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "default")
    ])
  ]))
});

var css_248z$4 = ".imooc-loading[data-v-1fe70522] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}";
styleInject(css_248z$4);

script$5.render = render$5;
script$5.__scopeId = "data-v-1fe70522";
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
    var width = ref(0);
    var height = ref(0);
    var refName = 'imoocFlyBox';
    var pathId = "".concat(refName, "-path-").concat(uuid);
    var radialGradientId = "".concat(refName, "-gradient-").concat(uuid);
    var maskId = "".concat(refName, "-mask-").concat(uuid);
    var path = computed(function () {
      return "M5 5 L".concat(width.value - 5, " 5 L").concat(width.value - 5, " ").concat(height.value - 5, " L5 ").concat(height.value - 5, " Z");
    });

    var init = function init() {
      var instance = getCurrentInstance();
      var dom = instance.ctx.$refs[refName];
      width.value = dom.clientWidth;
      height.value = dom.clientHeight;
    };

    onMounted(function () {
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

const _withId$4 = /*#__PURE__*/withScopeId("data-v-c0159702");

pushScopeId("data-v-c0159702");
const _hoisted_1$6 = /*#__PURE__*/createVNode("stop", {
  offset: "0%",
  "stop-color": "#fff",
  "stop-opacity": "1"
}, null, -1 /* HOISTED */);
const _hoisted_2$3 = /*#__PURE__*/createVNode("stop", {
  offset: "100%",
  "stop-color": "#fff",
  "stop-opacity": "0"
}, null, -1 /* HOISTED */);
const _hoisted_3$1 = { class: "imooc-fly-box-content" };
popScopeId();

const render$6 = /*#__PURE__*/_withId$4(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", {
    class: "imooc-fly-box",
    ref: _ctx.refName
  }, [
    (openBlock(), createBlock("svg", {
      width: _ctx.width,
      height: _ctx.height
    }, [
      createVNode("defs", null, [
        createVNode("path", {
          id: _ctx.pathId,
          d: _ctx.path,
          fill: "none"
        }, null, 8 /* PROPS */, ["id", "d"]),
        createVNode("radialGradient", {
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
        createVNode("mask", { id: _ctx.maskId }, [
          createVNode("circle", {
            r: _ctx.starLength,
            cx: "0",
            cy: "0",
            fill: `url(#${_ctx.radialGradientId})`
          }, [
            createVNode("animateMotion", {
              dur: `${_ctx.duration}s`,
              path: _ctx.path,
              rotate: "auto",
              repeatCount: "indefinite"
            }, null, 8 /* PROPS */, ["dur", "path"])
          ], 8 /* PROPS */, ["r", "fill"])
        ], 8 /* PROPS */, ["id"])
      ]),
      createVNode("use", {
        href: `#${_ctx.pathId}`,
        "stroke-width": "1",
        stroke: _ctx.lineColor
      }, null, 8 /* PROPS */, ["href", "stroke"]),
      createVNode("use", {
        href: `#${_ctx.pathId}`,
        "stroke-width": "3",
        stroke: _ctx.starColor,
        mask: `url(#${_ctx.maskId})`
      }, null, 8 /* PROPS */, ["href", "stroke", "mask"])
    ], 8 /* PROPS */, ["width", "height"])),
    createVNode("div", _hoisted_3$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 512 /* NEED_PATCH */))
});

var css_248z$5 = ".imooc-fly-box[data-v-c0159702] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box[data-v-c0159702] svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.imooc-fly-box[data-v-c0159702] .imooc-fly-box-content {\n  width: 100%;\n  height: 100%;\n  padding: 5px;\n  box-sizing: border-box;\n}";
styleInject(css_248z$5);

script$6.render = render$6;
script$6.__scopeId = "data-v-c0159702";
script$6.__file = "src/components/ImoocFlyBox/ImoocFlyBox.vue";

function ImoocFlyBox (Vue) {
  Vue.component(script$6.name, script$6);
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator;

function debounce(delay, callback) {
  var task;

  return function () {
    var _arguments = arguments,
        _this = this;

    clearTimeout(task);
    task = setTimeout(function () {
      callback.apply(_this, _arguments);
    }, delay);
  };
}

var script$7 = {
  name: 'ImoocContainer',
  props: {
    options: Object
  },
  setup: function setup(ctx) {
    var refName = 'imoocContainer';
    var width = ref(0);
    var height = ref(0);
    var originalWidth = ref(0);
    var originalHeight = ref(0);
    var ready = ref(false);
    var context, dom, observer;

    var initSize = function initSize() {
      return new Promise(function (resolve) {
        nextTick(function () {
          dom = context.$refs[refName]; // 获取大屏的真实尺寸

          if (ctx.options && ctx.options.width && ctx.options.height) {
            width.value = ctx.options.width;
            height.value = ctx.options.height;
          } else {
            width.value = dom.clientWidth;
            height.value = dom.clientHeight;
          } // 获取画布尺寸


          if (!originalWidth.value || !originalHeight.value) {
            originalWidth.value = window.screen.width;
            originalHeight.value = window.screen.height;
          }

          console.log(width.value, height.value, originalWidth.value, originalHeight.value);
          resolve();
        });
      });
    };

    var updateSize = function updateSize() {
      if (width.value && height.value) {
        dom.style.width = "".concat(width.value, "px");
        dom.style.height = "".concat(height.value, "px");
      } else {
        dom.style.width = "".concat(originalWidth.value, "px");
        dom.style.height = "".concat(originalHeight.value, "px");
      }
    };

    var updateScale = function updateScale() {
      // 获取真实的视口尺寸
      var currentWidth = document.body.clientWidth;
      var currentHeight = document.body.clientHeight; // 获取大屏最终的宽高

      var realWidth = width.value || originalWidth.value;
      var realHeight = height.value || originalHeight.value;
      console.log(currentWidth, currentHeight);
      var widthScale = currentWidth / realWidth;
      var heightScale = currentHeight / realHeight;
      dom && (dom.style.transform = "scale(".concat(widthScale, ", ").concat(heightScale, ")"));
    };

    var onResize = /*#__PURE__*/function () {
      var _ref = asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(e) {
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return initSize();

              case 2:
                updateScale();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function onResize(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    var initMutationObserver = function initMutationObserver() {
      var MutationObserver = window.MutationObserver;
      observer = new MutationObserver(onResize);
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true
      });
    };

    var removeMutationObserver = function removeMutationObserver() {
      if (observer) {
        observer.disconnect();
        observer.takeRecords();
        observer = null;
      }
    };

    onMounted( /*#__PURE__*/asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2() {
      return regenerator.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              ready.value = false;
              context = getCurrentInstance().ctx;
              _context2.next = 4;
              return initSize();

            case 4:
              updateSize();
              updateScale();
              window.addEventListener('resize', debounce(100, onResize));
              initMutationObserver();
              ready.value = true;

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    onUnmounted(function () {
      window.removeEventListener('resize', onResize);
      removeMutationObserver();
    });
    return {
      refName: refName,
      ready: ready
    };
  }
};

function render$7(_ctx, _cache) {
  return (openBlock(), createBlock("div", {
    id: "imooc-container",
    ref: _ctx.refName
  }, [
    (_ctx.ready)
      ? renderSlot(_ctx.$slots, "default", { key: 0 })
      : createCommentVNode("v-if", true)
  ], 512 /* NEED_PATCH */))
}

var css_248z$6 = "#imooc-container {\n  position: fixed;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  transform-origin: left top;\n  z-index: 999;\n}";
styleInject(css_248z$6);

script$7.render = render$7;
script$7.__file = "src/components/Container/Container.vue";

function Container (Vue) {
  Vue.component(script$7.name, script$7);
}

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
var script$8 = {
  name: 'ImoocLogo',
  props: {
    strokeWidth: {
      type: [String, Number],
      "default": 1
    },
    stroke: {
      type: String,
      "default": '#000'
    }
  }
};

const _withId$5 = /*#__PURE__*/withScopeId("data-v-46aab5e5");

pushScopeId("data-v-46aab5e5");
const _hoisted_1$7 = {
  class: "imooc-logo",
  viewBox: "0 0 1082 1024"
};
popScopeId();

const render$8 = /*#__PURE__*/_withId$5(function render(_ctx, _cache) {
  return (openBlock(), createBlock("svg", _hoisted_1$7, [
    createVNode("path", {
      stroke: _ctx.stroke,
      "stroke-width": _ctx.strokeWidth,
      class: "imooc-logo1",
      d: "M533.767 0l158.995 304.74s-278.24 164.672-442.914 444.805l13.25-92.746L0.076 389.915l367.201-41.641z"
    }, null, 8 /* PROPS */, ["stroke", "stroke-width"]),
    createVNode("path", {
      stroke: _ctx.stroke,
      "stroke-width": _ctx.strokeWidth,
      class: "imooc-logo1",
      d: "M232.813 819.351s384.237-577.074 849.94-433.222l-60.57 66.248s-253.634-24.606-388.022 71.926c0 0-264.991 132.496-401.272 310.418z"
    }, null, 8 /* PROPS */, ["stroke", "stroke-width"]),
    createVNode("path", {
      stroke: _ctx.stroke,
      "stroke-width": _ctx.strokeWidth,
      class: "imooc-logo1",
      d: "M902.861 564.052l-81.39 79.497s-278.24 11.357-588.658 240.384c0 0 300.954-359.857 670.048-319.881z"
    }, null, 8 /* PROPS */, ["stroke", "stroke-width"]),
    createVNode("path", {
      stroke: _ctx.stroke,
      "stroke-width": _ctx.strokeWidth,
      class: "imooc-logo1",
      d: "M223.35 921.79s321.774-217.672 611.37-179.816L868.792 1024 546.108 849.863l-341.61 173.91z"
    }, null, 8 /* PROPS */, ["stroke", "stroke-width"])
  ]))
});

var css_248z$7 = ".imooc-logo[data-v-46aab5e5] {\n  width: 100%;\n  height: 100%;\n}\n\n.imooc-logo1[data-v-46aab5e5] {\n  fill: none;\n  animation: imooc-logo-animation-data-v-46aab5e5 5s linear infinite forwards;\n}\n\n@keyframes imooc-logo-animation-data-v-46aab5e5 {\n  0% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 2202;\n  }\n  50% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dasharray: 2202;\n    stroke-dashoffset: 0;\n  }\n}";
styleInject(css_248z$7);

script$8.render = render$8;
script$8.__scopeId = "data-v-46aab5e5";
script$8.__file = "src/components/ImoocLogo/ImoocLogo.vue";

function ImoocLogo (Vue) {
  Vue.component(script$8.name, script$8);
}

var lastTime = 0;
var prefixes = 'webkit moz ms o'.split(' '); // 各浏览器前缀

var requestAnimationFrame;
var cancelAnimationFrame;
var isServer = typeof window === 'undefined';

if (isServer) {
  requestAnimationFrame = function requestAnimationFrame() {};

  cancelAnimationFrame = function cancelAnimationFrame() {};
} else {
  requestAnimationFrame = window.requestAnimationFrame;
  cancelAnimationFrame = window.cancelAnimationFrame;
  var prefix; // 通过遍历各浏览器前缀，来得到requestAnimationFrame和cancelAnimationFrame在当前浏览器的实现形式

  for (var i = 0; i < prefixes.length; i++) {
    if (requestAnimationFrame && cancelAnimationFrame) {
      break;
    }

    prefix = prefixes[i];
    requestAnimationFrame = requestAnimationFrame || window[prefix + 'RequestAnimationFrame'];
    cancelAnimationFrame = cancelAnimationFrame || window[prefix + 'CancelAnimationFrame'] || window[prefix + 'CancelRequestAnimationFrame'];
  } // 如果当前浏览器不支持requestAnimationFrame和cancelAnimationFrame，则会退到setTimeout


  if (!requestAnimationFrame || !cancelAnimationFrame) {
    requestAnimationFrame = function requestAnimationFrame(callback) {
      var currTime = new Date().getTime(); // 为了使setTimteout的尽可能的接近每秒60帧的效果

      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    cancelAnimationFrame = function cancelAnimationFrame(id) {
      window.clearTimeout(id);
    };
  }
}

//
var script$9 = {
  name: 'CountTo',
  props: {
    startVal: {
      type: Number,
      required: false,
      "default": 0
    },
    endVal: {
      type: Number,
      required: false,
      "default": 2017
    },
    duration: {
      type: Number,
      required: false,
      "default": 3000
    },
    autoplay: {
      type: Boolean,
      required: false,
      "default": true
    },
    decimals: {
      type: Number,
      required: false,
      "default": 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    decimal: {
      type: String,
      required: false,
      "default": '.'
    },
    separator: {
      type: String,
      required: false,
      "default": ','
    },
    prefix: {
      type: String,
      required: false,
      "default": ''
    },
    suffix: {
      type: String,
      required: false,
      "default": ''
    },
    useEasing: {
      type: Boolean,
      required: false,
      "default": true
    },
    easingFn: {
      type: Function,
      "default": function _default(t, b, c, d) {
        return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
      }
    }
  },
  data: function data() {
    return {
      localStartVal: this.startVal,
      displayValue: this.formatNumber(this.startVal),
      printVal: null,
      paused: false,
      localDuration: this.duration,
      startTime: null,
      timestamp: null,
      remaining: null,
      rAF: null
    };
  },
  computed: {
    countDown: function countDown() {
      return this.startVal > this.endVal;
    }
  },
  watch: {
    startVal: function startVal() {
      if (this.autoplay) {
        this.start();
      }
    },
    endVal: function endVal() {
      if (this.autoplay) {
        this.start();
      }
    }
  },
  mounted: function mounted() {
    if (this.autoplay) {
      this.start();
    }
    /* eslint-disable */


    this.$emit('mountedCallback');
  },
  methods: {
    start: function start() {
      this.localStartVal = this.startVal;
      this.startTime = null;
      this.localDuration = this.duration;
      this.paused = false;
      this.rAF = requestAnimationFrame(this.count);
    },
    pauseResume: function pauseResume() {
      if (this.paused) {
        this.resume();
        this.paused = false;
      } else {
        this.pause();
        this.paused = true;
      }
    },
    pause: function pause() {
      cancelAnimationFrame(this.rAF);
    },
    resume: function resume() {
      this.startTime = null;
      this.localDuration = +this.remaining;
      this.localStartVal = +this.printVal;
      requestAnimationFrame(this.count);
    },
    reset: function reset() {
      this.startTime = null;
      cancelAnimationFrame(this.rAF);
      this.displayValue = this.formatNumber(this.startVal);
    },
    count: function count(timestamp) {
      if (!this.startTime) this.startTime = timestamp;
      this.timestamp = timestamp;
      var progress = timestamp - this.startTime;
      this.remaining = this.localDuration - progress;

      if (this.useEasing) {
        if (this.countDown) {
          this.printVal = this.localStartVal - this.easingFn(progress, 0, this.localStartVal - this.endVal, this.localDuration);
        } else {
          this.printVal = this.easingFn(progress, this.localStartVal, this.endVal - this.localStartVal, this.localDuration);
        }
      } else {
        if (this.countDown) {
          this.printVal = this.localStartVal - (this.localStartVal - this.endVal) * (progress / this.localDuration);
        } else {
          this.printVal = this.localStartVal + (this.endVal - this.localStartVal) * (progress / this.localDuration);
        }
      }

      if (this.countDown) {
        this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal;
      } else {
        this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal;
      }

      this.displayValue = this.formatNumber(this.printVal);

      if (progress < this.localDuration) {
        this.rAF = requestAnimationFrame(this.count);
      } else {
        this.$emit('callback');
      }
    },
    isNumber: function isNumber(val) {
      return !isNaN(parseFloat(val));
    },
    formatNumber: function formatNumber(num) {
      num = num.toFixed(this.decimals);
      num += '';
      var x = num.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? this.decimal + x[1] : '';
      var rgx = /(\d+)(\d{3})/;

      if (this.separator && !this.isNumber(this.separator)) {
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + this.separator + '$2');
        }
      }

      return this.prefix + x1 + x2 + this.suffix;
    }
  },
  destroyed: function destroyed() {
    cancelAnimationFrame(this.rAF);
  }
};

function render$9(_ctx, _cache) {
  return (openBlock(), createBlock("span", null, toDisplayString(_ctx.displayValue), 1 /* TEXT */))
}

script$9.render = render$9;
script$9.__file = "src/components/VueCountTo/vue-countTo.vue";

function VueCountTo (Vue) {
  Vue.component(script$9.name, script$9);
}

//
var script$a = {
  name: 'VueEcharts',
  props: {
    options: Object,
    theme: [String, Object]
  },
  setup: function setup(ctx) {
    var dom;
    var chart;
    var className = "echarts".concat(v4());

    var initChart = function initChart() {
      if (!chart) {
        dom = document.getElementsByClassName(className)[0];
        chart = Echarts.init(dom, ctx.theme);
      }

      if (ctx.options) {
        chart.setOption(ctx.options);
      }
    };

    onMounted(function () {
      initChart();
    });
    watch(function () {
      return ctx.options;
    }, function () {
      initChart();
    });
    return {
      className: className
    };
  }
};

const _withId$6 = /*#__PURE__*/withScopeId("data-v-38cd74e2");

const render$a = /*#__PURE__*/_withId$6(function render(_ctx, _cache) {
  return (openBlock(), createBlock("div", {
    class: [_ctx.className, 'echarts']
  }, null, 2 /* CLASS */))
});

var css_248z$8 = ".echarts[data-v-38cd74e2] {\n  width: 100%;\n  height: 100%;\n}";
styleInject(css_248z$8);

script$a.render = render$a;
script$a.__scopeId = "data-v-38cd74e2";
script$a.__file = "src/components/VueEcharts/VueEcharts.vue";

function VueEcharts (Vue) {
  Vue.component(script$a.name, script$a);
}

function index (Vue) {
  Vue.use(Test);
  Vue.use(Test2);
  Vue.use(Test3);
  Vue.use(Icon);
  Vue.use(SvgAnimation);
  Vue.use(ImoocLoading);
  Vue.use(ImoocFlyBox);
  Vue.use(Container);
  Vue.use(ImoocLogo);
  Vue.use(VueCountTo);
  Vue.use(VueEcharts);
}

export default index;
