(function() {
  var SVG, defaults, extend;

  extend = function(out) {
    var i, key;
    out = out || {};
    i = 1;
    while (i < arguments.length) {
      if (!arguments[i]) {
        continue;
      }
      for (key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key)) {
          out[key] = arguments[i][key];
        }
      }
      i++;
    }
    return out;
  };

  defaults = {
    icons: {},
    color: 'auto',
    size: '3em'
  };

  SVG = {
    facebook: function(color, size) {
      return "<svg style=\"display: inline-block; width: " + size + "; height: " + size + "\" xmlns=\"http://www.w3.org/2000/svg\" class=\"facebook-icon\" fill=\"white\" viewBox=\"10 10 40 40\" role=\"img\">\n  <path fill=\"" + (color === 'auto' ? '#3b5998' : color) + "\" d=\"M30,12.218c-9.82,0-17.781,7.962-17.781,17.782c0,9.822,7.961,17.782,17.781,17.782 S47.781,39.822,47.781,30C47.781,20.18,39.82,12.218,30,12.218z M33.809,30.006h-2.49c0,3.981,0,8.885,0,8.885h-3.693 c0,0,0-4.854,0-8.885h-1.756v-3.138h1.756v-2.032c0-1.455,0.691-3.727,3.727-3.727l2.734,0.01v3.049c0,0-1.662,0-1.984,0 c-0.324,0-0.783,0.16-0.783,0.854v1.846h2.814L33.809,30.006z\" role=\"presentation\" />\n</svg>";
    },
    twitter: function(color, size) {
      return "<svg style=\"display: inline-block; width: " + size + "; height: " + size + "\" xmlns=\"http://www.w3.org/2000/svg\" class=\"twitter-icon\" viewBox=\"10 10 40 40\" role=\"img\">\n  <path fill=\"" + (color === 'auto' ? '#00aced' : color) + "\" d=\"M30,12.218c-9.82,0-17.781,7.961-17.781,17.781c0,9.822,7.961,17.783,17.781,17.783 s17.781-7.961,17.781-17.783C47.781,20.179,39.82,12.218,30,12.218z M37.07,26.374c0.008,0.156,0.012,0.312,0.012,0.473 c0,4.82-3.67,10.379-10.381,10.379c-2.061,0-3.977-0.604-5.592-1.639c0.287,0.033,0.576,0.051,0.869,0.051 c1.711,0,3.283-0.582,4.531-1.562c-1.596-0.029-2.943-1.084-3.406-2.533c0.221,0.041,0.449,0.066,0.686,0.066 c0.332,0,0.654-0.047,0.961-0.129c-1.668-0.336-2.928-1.811-2.928-3.576c0-0.016,0-0.031,0-0.047 c0.494,0.273,1.057,0.438,1.654,0.457c-0.979-0.654-1.623-1.771-1.623-3.037c0-0.668,0.18-1.297,0.494-1.834 c1.799,2.207,4.488,3.66,7.52,3.811c-0.062-0.266-0.096-0.543-0.096-0.83c0-2.016,1.635-3.646,3.648-3.646 c1.049,0,1.998,0.441,2.664,1.15c0.83-0.164,1.611-0.467,2.316-0.887c-0.273,0.854-0.852,1.568-1.605,2.02 c0.74-0.088,1.443-0.285,2.096-0.572C38.402,25.218,37.783,25.86,37.07,26.374z\" role=\"presentation\" />\n</svg>";
    },
    github: function(color, size) {
      return "<svg style=\"display: inline-block; width: " + size + "; height: " + size + "\" xmlns=\"http://www.w3.org/2000/svg\" class=\"twitter-icon\" viewBox=\"-75 -75 1350 1350\" role=\"img\">\n  <g fill-rule=\"evenodd\">\n    <g fill=\"" + (color === 'auto' ? '#000' : color) + "\">\n      <path d=\"M600,0 C268.62914,0 0,268.62914 0,600 C0,931.37086 268.62914,1200 600,1200 C931.37086,1200 1200,931.37086 1200,600 C1200,268.62914 931.37086,0 600,0 L600,0 Z M374.561944,261.764017 C361.106565,300.873442 356.441817,343.321346 368.478542,380.394343 C353.936313,396.532094 342.644932,415.07078 334.565705,436.052824 C313.030481,504.116053 318.290435,591.063822 365.436638,643.671916 C381.998735,661.828696 404.468613,676.755941 432.744573,688.457575 C461.020331,700.157768 497.361849,707.62189 541.796255,710.850196 C511.973257,724.786041 490.949983,733.301014 483.613829,764.114175 C450.347775,786.342971 409.895494,781.038694 380.580929,756.865633 C357.414573,739.950824 346.919716,709.888416 321.233354,698.747818 C319.61796,697.134287 314.571933,695.930824 306.089266,695.123547 C297.606192,694.316057 290.938365,696.722789 286.090943,702.37208 C283.667246,704.792897 283.846181,707.379182 286.673522,710.20321 C306.119088,726.018293 324.834421,742.780038 335.795271,762.884406 C346.298195,784.672711 357.168331,800.625306 368.478542,810.711978 C399.853569,831.913136 441.931787,842.943351 478.76001,829.480532 C474.465353,855.396779 486.051417,895.867475 477.530241,919.051858 C474.298214,925.507623 469.674882,931.166448 463.615506,936.008276 C458.215134,941.27628 441.472033,947.866914 444.847155,955.941749 C446.462559,959.573036 452.108748,961.800939 461.80337,962.60796 C483.144337,962.063024 504.389006,953.434973 516.944104,936.590643 C521.388086,930.538522 523.61028,922.651891 523.61028,912.968253 L523.61028,813.753882 C523.61028,802.456492 526.011418,794.39052 530.85883,789.548701 C535.706243,784.707085 540.994579,781.454549 546.650303,779.841028 L546.650303,910.573742 C546.650303,921.871122 545.628674,931.562846 543.608399,939.632521 C541.588336,947.702275 539.787591,953.361101 538.171993,956.58901 C534.463432,962.808986 527.373307,968.548885 527.234551,975.939939 C527.234551,978.360827 528.678874,979.743358 531.50602,980.146736 C552.730392,979.225991 577.356182,966.775258 585.999556,949.275583 C592.86704,934.750337 596.290011,919.464399 596.290011,903.325199 L596.290011,774.986997 L622.954297,774.986997 L622.954297,903.325199 C622.954297,919.464399 626.62062,934.750337 633.891739,949.275583 C641.162849,963.801129 653.298169,973.134937 670.26391,977.169602 C679.150211,979.59049 685.153247,980.550203 688.385274,980.146736 C691.6173,979.743358 693.060387,978.360827 692.656744,975.939939 C690.710605,968.607912 686.655979,962.333946 682.366288,956.58901 C676.710768,949.326171 673.88819,933.975781 673.88819,910.573742 L673.88819,779.841028 C679.543702,781.454549 685.011186,784.707085 690.262233,789.548701 C695.513076,794.39052 698.093141,802.456492 698.093141,813.753882 L698.093141,912.968253 C698.093141,922.651891 700.315344,930.538522 704.759325,936.590643 C718.264409,953.765186 738.616458,962.477978 759.900051,962.60796 C769.594681,961.800939 775.241083,959.573036 776.856266,955.941749 C778.471873,952.310462 777.271105,949.301959 773.232004,946.881019 C769.193115,944.460122 764.147088,940.850069 758.087915,936.008276 C752.028548,931.166448 747.405215,925.507623 744.173198,919.051858 C740.546435,877.424487 744.080673,832.801814 741.131285,790.713858 C735.309049,744.78333 717.630473,729.672811 682.366288,712.079965 C724.377209,708.851659 758.917778,701.144396 785.981775,689.039941 C866.885084,649.730868 889.256587,588.961953 889.597262,507.502795 C888.321306,455.07696 873.187795,409.343597 838.663175,374.310544 C843.510588,355.750739 844.954717,336.432115 842.934636,316.257552 C840.914582,296.08298 836.647663,277.903014 830.184864,261.764017 C800.296204,263.377547 775.246067,269.394244 755.04602,279.88539 C734.848252,290.376306 720.311811,299.286836 711.425298,306.549676 C639.837833,290.297406 563.20246,290.199438 494.551483,308.94439 C459.422538,280.213438 415.886521,264.20719 374.561944,261.764017 L374.561944,261.764017 Z\" role=\"presentation\"></path>\n    </g>\n  </g>\n</svg>";
    }
  };

  window.SocialIcons = {
    init: function(element, options) {
      var htmlString, icon, type, _ref;
      if (!element) {
        return;
      }
      options = extend({}, defaults, options);
      htmlString = '';
      _ref = options.icons;
      for (type in _ref) {
        icon = _ref[type];
        if (icon.enabled !== false) {
          htmlString += "<a href=\"http://" + type + ".com/" + icon.username + "\" target=\"_blank\" style=\"display: inline\">" + (SVG[type](options.color, options.size)) + "</a>";
        }
      }
      return element.innerHTML = htmlString;
    }
  };

}).call(this);
