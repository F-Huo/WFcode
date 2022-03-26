var codess = {};
yanse = require("./kk.js");
wfui = require("./wfui.js");
xfb = device.width;
if (xfb == 1080) {
  yfb = 1;
} else {
  yfb = device.width / 1440;
}
if (device.sdkInt < 24) {
  hold = 100;
} else {
  hold = 4;
}

codess.zhaose = function (tttt) {

  var img = captureScreen();
  var p = images.findMultiColors(img, yszh(tttt[1])[0], yszh(tttt[1])[1], {
    region: fwzh(tttt[0].map(Number)),
    threshold: hold
  });
  img.recycle();
  return p;
};

codess.zhaoses = function (tttt) {
  var img = captureScreen();
  var p = images.findMultiColors(img, yszh(tttt[1])[0], yszh(tttt[1])[1], {
    region: fwzh(tttt[0].map(Number)),
    threshold: 10
  });
  img.recycle();
  return p;
};
//找色ccc1格式="#ff00ff" CCC2格式=[10, 20, "#ffffff"], [30, 40, "#000000"]

function yszh(str) {
  var arr = str.split(",");
  var newarr = [];
  var newarr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      arr[i] = arr[i].replace(/\|/g, ",").replace(/0x([\w\d]*)/g, "#$1");
    } else {
      arr[i] = arr[i].replace(/\|/g, ",").replace(/0x([\w\d]*)/g, "#$1");
      newarr[i - 1] = arr[i];
    }
  }
  for (var i = 0; i < newarr.length; i++) {
    newarr2[i] = newarr[i].split(",");
  }
  for (var i = 0; i < newarr2.length; i++) {
    for (var j = 0; j < 2; j++) {
      newarr2[i][j] = parseInt(newarr2[i][j]) * yfb;
    }
  }
  var chushi = arr[0].replace(/\,/g, "").replace(/0/g, "");
  var fhys = [chushi, newarr2];
  return fhys;
} //颜色转换

function fwzh(fw) {
  fw[2] = fw[2] - fw[0];
  fw[3] = fw[3] - fw[1];
  fw[0] = fw[0] * yfb;
  fw[1] = fw[1] * yfb;
  fw[2] = fw[2] * yfb;
  fw[3] = fw[3] * yfb;
  return fw;
} //范围转换
AAA = 0;
codess.zhuchengxu = function () {
  threads.start(function () {
    console.log("zhuchengxu");
    wfui.jiaoben();
  })
}; //主程序

module.exports = codess;
