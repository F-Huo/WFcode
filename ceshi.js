/*
function Tap(intX, intY) {
  zhongjianshu = Math.round(Math.random()) * 6 - 3;
  x = intX + zhongjianshu;
  y = intY + zhongjianshu;
  zhongjianshu = Math.round(Math.random()) * 100;
  sleep(100 + zhongjianshu);
  if (x < 1) {
    x = 2;
  }
  if (y < 1) {
    y = 2;
  }
  click(x, y);
}

function change(strrr) {
  strrr[0] = "0|0|" + strrr[0]
  for (var i = 0; i < strrr[1].length; i++) {
    strrr[1][i] = strrr[1][i].toString().replace(/\,/g, "|")
  }
  strrr[1] = strrr[1].toString().replace(/\#/g, "0x")
  strrr[0] = strrr[0].toString().replace(/\#/g, "0x")
  var strafter = strrr[0] + "," + strrr[1]
  return strafter
}
//////颜色转成XX代码


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
      newarr2[i][j] = parseInt(newarr2[i][j]);
    }
  }
  var chushi = arr[0].replace(/\,/g, "").replace(/0/g, "");
  var fhys = [chushi, newarr2];
  return fhys;
} //颜色转换

function fwzh(fw) {
  fw[2] = fw[2] - fw[0];
  fw[3] = fw[3] - fw[1];
  return fw;
} //范围转换

function zhaose(tttt) {
  var img = captureScreen();
  var point = images.findMultiColors(img, yszh(tttt[1])[0], yszh(tttt[1])[1], {
    region: fwzh(tttt[0].map(Number)),
    threshold: 4,
  });
  img.recycle()
  return point;
}


requestScreenCapture()
sleep(2000)

function chucunku() {
  t = [];

  t["房间"] = [
    [959, 327, 1406, 530],
    "0|0|0xffffff,139|2|0xffffff,-3|147|0xfffeff,150|145|0xffffff,237|2|0x32c6ba,375|2|0x32c6b8,237|134|0x32c5bb,376|135|0x2fc3b7"
  ];

  t["招募"] = [
    [609, 1805, 829, 1863],
    "0|0|0xff9e1c,76|-2|0xff9e1c,139|-3|0xff9e1c,139|11|0xff9e1c",
    (zhaomu = function () {
      Tap(709,1930);
    }),
    (huguan = function () {
      Tap(346,1283);
    }),
    (danguan = function () {
      Tap(346,1542);
    }),
    (lingdangzhaomu = function () {
      Tap(346,1797);
    }),
    (kaishizhaomu = function () {
      Tap(1038,2133);
    })
  ];

  return t;
}
t = {};
t = chucunku();

var strr = ["#fcc000", [[106, 69, "#7f0102"], [3, 88, "#ffc201"]]]
console.log(change(strr));


console.log(zhaose(t["房间"]));

i=0
y=1
if(i==1 ||y==0)
{console.log("可以");}

*/

var thread = threads.start(function () {
zuixinbanbenhao = 1

    console.log(zuixinbanbenhao);
    xxx=http.get("https://gitee.com/F-Huo/wf_code/raw/master/banben.js").body.string();
    console.log(xxx);
})

sleep(1000)
