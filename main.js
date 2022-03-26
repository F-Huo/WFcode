"ui";

ui.layout(
  <vertical>
    <text
      marginTop="10"
      text="模式选择："
      color="#0000FF"
      size="20"
      marginLeft="10"
    />
    <radiogroup marginLeft="10" id="moshi" orientation="horizontal">
      <radio id="kaiche" text="开车模式" />
      <radio id="cengche" text="蹭车模式" />
      <radio id="lingdang" text="共斗铃铛" />
      <radio id="huodongld" text="活动铃铛" />
    </radiogroup>
    //模式选择
    <horizontal>
      <text
        text="其他设置："
        color="#0000FF"
        size="20"
        marginLeft="10"
      />

      <checkbox id="dianban" text="踢罐点板" marginLeft="10" />
      <checkbox id="zhaomu" text="招募队友" />
    </horizontal>

    <horizontal marginTop="10">
      <text text="指定次数(0=无限)" marginLeft="20" color="#000000" />
      <text text="0" id="sbcsxs" marginLeft="10" color="#FF0000" w="20" />
      <seekbar id="sbcs" marginRight="20" w="*" max="50" />
    </horizontal>
    <text
      marginLeft="10"
      text="一一一一一一一一一一一一一一一一一一一一一"
      color="#FF0000"
    />
    <horizontal>
      <text marginLeft="10" text="开车设置：" color="#0000FF" size="20" />
      <radiogroup orientation="horizontal">
        <radio id="danren" text="单刷" />
        <radio id="liangren" text="两人开车" />
        <radio id="sanren" text="三人开车" />
      </radiogroup>
      //人数
    </horizontal>
    <text text="体力药使用：" color="#0000FF" size="20" marginLeft="10" />
    <radiogroup orientation="horizontal" marginLeft="10">
      <radio id="chitili" text="吃体力" />
      <radio id="buchi" text="不吃体力" />
    </radiogroup>
    //体力
    <horizontal marginLeft="10">
      <checkbox id="xiao" text="小体力*2" />
      <checkbox id="zhong" text="中体力" />
      <checkbox id="da" text="大体力" />
      <checkbox id="zuan" text="50钻体力" />
    </horizontal>
    //体力药
    <text
      marginLeft="10"
      text="一一一一一一一一一一一一一一一一一一一一一"
      color="#FF0000"
    />
    <text marginLeft="10" text="蹭车战后关注：" color="#0000FF" size="20" />
    <horizontal marginLeft="10">
      <radiogroup orientation="horizontal">
        <radio id="buguanzhu" text="不关注" />
        <radio id="guanzhu" text="自动关注" />
      </radiogroup>
      <checkbox id="jump" text="快速结算" />
    </horizontal>
    //关注队友
    <text
      marginLeft="10"
      text="一一一一一一一一一一一一一一一一一一一一一"
      color="#FF0000"
    />
    <horizontal>
      <text text="铃铛模式设置：" color="#0000FF" size="20" marginLeft="10" />
      <checkbox id="hdld" text="不进好友房间" />
    </horizontal>
    <horizontal>
      <text text="只进：" marginLeft="10" />
      <spinner id="sp11" bg="#eeeeee" entries="不选择▼|活动本▼|超火▼|超风▼|暗高+|超暗" />
      <text text="    " />
      <spinner id="sp12" bg="#eeeeee" entries="不选择▼|活动本▼|超火▼|超风▼|暗高+|超暗" />
    </horizontal>
    <horizontal>
      <text text="不进：" marginLeft="10" />
      <spinner id="sp21" bg="#eeeeee" entries="不选择▼|活动本▼|超火▼|超风▼|暗高+|超暗" />
      <text text="    " />
      <spinner id="sp22" bg="#eeeeee" entries="不选择▼|活动本▼|超火▼|超风▼|暗高+|超暗" />
    </horizontal>
    <horizontal>
      <button id="sysm" layout_weight="1" text="使用说明" />
    </horizontal>
    <button
      id="start"
      text="开始运行"
      style="Widget.AppCompat.Button.Colored"
    />
    <img id="pay" src="file://res/pay.png" />
  </vertical>
);

/////////////////////////////////////////////////////////////
var banbenhao = 1;
let ViewIdListRegisterListener = require("./ViewIdListRegisterListener");
let storage = storages.create("UIConfigInfo");
let kongjian = [
  ["kaiche", "cengche", "lingdang", "huodongld"],
  ["liangren", "sanren", "danren"],
  ["buguanzhu", "guanzhu"],
  ["chitili", "buchi"],
  ["xiao", "zhong", "da", "zuan", "jump", "hdld", "dianban", "zhaomu"],
  ["sp11", "sp12", "sp21", "sp22"]
];
kongjian.map((viewIdList) => {
  let inputViewIdListRegisterListener = new ViewIdListRegisterListener(
    viewIdList,
    storage
  );
  inputViewIdListRegisterListener.registerlistener();
  inputViewIdListRegisterListener.restore();
});
/////////////////////////////////////////////////////////////
let kSeekbarListener = new android.widget.SeekBar.OnSeekBarChangeListener({
  onProgressChanged: function (seekbar, progress, fromUser) {
    sbcsshuzi = progress;
    ui.sbcsxs.setText(progress + "");
  },
});

ui.sbcs.setOnSeekBarChangeListener(kSeekbarListener);
ui.post(function () {
  ui.sbcs.progress = sbcsshuzi;
});
/////////////////////////////////////////////////////////////
codess = require("./codes.js");

var window
zm = 0;
shuacishu = 0;
sbcsshuzi = 0;
dianji = 0;
var gengxin = 0;
moshi = 0;
renshu = 0;
guanzhu = 0;
tili = 0;
chichichi = 0;
tilix1 = 0;
tiliy1 = 0;
tiliz1 = 0;
tilim1 = 0;
tp = 1;
xuanfuchuang = 0;
wuzhangai = 0;
kaishi = 0;
jumpjia = 0;
hdldcheck = 0;
var zuixinbanbenhao;
just1 = 0;
just2 = 0;
no1 = 0;
no2 = 0;
tgdb = 0;
$settings.setEnabled('foreground_service', true);
qdqx();
/////////////////////////////////////////////////////////////

ui.sysm.on("click", function () {
  engines.execScriptFile("./shuoming.js");
});
//使用说明按钮


ui.emitter.on("resume", function () {
  console.log(gengxin);
  if (gengxin == 2) {
    engines.stopAll();
  }

  if (dianji == 2) {
    if (auto.service == null) {
      toast("无障碍服务开启失败，请重新尝试。");
      toast("如果显示已经开启，请关闭后重新打开。");
      app.startActivity({
        action: "android.settings.ACCESSIBILITY_SETTINGS"
      });
    } else {
      //ui.run(function () {
      wuzhangai = 1;
      if (wuzhangai == 1 && xuanfuchuang == 1) {
        ui.start.setText("开始运行");
      }
      // });
    }
  } else {
    if (!$floaty.checkPermission()) {
      // 没有悬浮窗权限，提示用户并跳转请求
      toast("请开启悬浮窗权限！");
      $floaty.requestPermission();
    } else {
      if (wuzhangai == 0) {
        ui.start.setText("开启无障碍权限");
      }
      xuanfuchuang = 1;
      dianji = 2;
    }
  }
});
//返回检测

ui.start.on("click", function () {
  threads.shutDownAll();

  if (wuzhangai == 1 && xuanfuchuang == 1) {
    threads.start(function () {
      getui();
      if (kaishi == 0) {
        jietu();
        kaishi = 1;
        if (device.sdkInt >= 24) {
          xuanfu();
        }
      }
      toast("点右边圆形按钮【开始】或【结束】脚本");
      if (device.sdkInt < 24 && gengxin == 1) {
        console.log("start");
        codess.zhuchengxu();
      } else {
        threads.shutDownAll();
      }
    });
  } else {
    threads.start(function () {
      if (dianji == 2) {
        toast("请开启无障碍权限！");
        sleep(1000);
        app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
      }
      if (dianji == 1) {
        toast("请开启悬浮窗权限！");
        sleep(1000);
        $floaty.requestPermission();
      }
    });
  }
});
//开始运行按钮

function yun() {
  toast("发现有新版本。正在更新中......");
  uuu = [
    "wfui.js",
    "kk.js",
    "codes.js",
    "main.js",
    "shuoming.js",
    "chenggong.js",
    "shibai.js"
  ];
  for (var i = 0; i < uuu.length; i++) {
    let url = "https://raw.githubusercontent.com/F-Huo/WFcode/main/" + uuu[i];
    let res = http.get(url);
    console.log("正在更新脚本");
    if (res.statusCode != 200) {
      console.log("更新失败,请检查网络后重新更新");
      gengxin = 0;
      return;
    } else {
      files.write("./" + uuu[i], res.body.string());
    }
    console.log("更新成功");
    gengxin = 1;
  }
}

function pay() {
  ui.run(function () {
    console.show()
    //ui.start.setText("嘤嘤嘤");
    //ui.pay.setSource("file://res/pay2.png");
  });
} //启动时下面的图

function qdqx() {

  var thread = threads.start(function () {
zuixinbanbenhao = http.get("https://raw.githubusercontent.com/F-Huo/WFcode/main/banben.js").body.string().split("版本")[1];
    if(zuixinbanbenhao=="undefined"){zuixinbanbenhao=banbenhao;} 
if (banbenhao == zuixinbanbenhao) {
      gengxin = 1;
    } else {
      gengxin = 0;
    }
    console.log(banbenhao);
    console.log(zuixinbanbenhao);
    if (banbenhao == zuixinbanbenhao) {
      console.log("true");
    } else {
      console.log("false");
    }
  });
  thread.join();
  if (gengxin == 0) {
    var thread = threads.start(function () {
      yun();
      gengxin = 2;
      engines.execScriptFile("./chenggong.js");
    });
  } else {
    if (auto.service != null) {
      wuzhangai = 1;
    } else {
      wuzhangai = 0;
    }

    if (!$floaty.checkPermission()) {
      xuanfuchuang = 0;
    } else {
      xuanfuchuang = 1;
    }

    if (wuzhangai == 0 && xuanfuchuang == 0) {
      ui.run(function () {
        ui.start.setText("开启悬浮窗权限");
      });
      dianji = 1;
    }

    if (wuzhangai == 1 && xuanfuchuang == 0) {
      ui.run(function () {
        ui.start.setText("开启悬浮窗权限");
      });
      dianji = 1;
    }

    if (wuzhangai == 0 && xuanfuchuang == 1) {
      ui.run(function () {
        ui.start.setText("开启无障碍权限");
      });
      dianji = 2;
    }
    pay();
  }
}

function jietu() {
  toast("请点“立即开始”提供截屏录屏权限");
  sleep(1000);
  for (var i = 0; i < 5; i++) {
    if (!requestScreenCapture()) {
      if (i == 4) {
        toast("无法获取截图权限，脚本已关闭。请检查设备。");
        exit();
      }
    } else {
      break;
    }
    console.log(i);
  }
}

function getui() {
  if (ui.kaiche.checked == true) {
    moshi = 0;
  }
  if (ui.cengche.checked == true) {
    moshi = 1;
  }
  if (ui.lingdang.checked == true) {
    moshi = 2;
    ld = 1;
  }
  if (ui.huodongld.checked == true) {
    moshi = 2;
    ld = 2;
  }
  //模式判断

  if (ui.liangren.checked == true) {
    renshu = 0;
  }
  if (ui.sanren.checked == true) {
    renshu = 1;
  }
  if (ui.danren.checked == true) {
    renshu = 2;
  }
  //人数选择

  if (ui.buguanzhu.checked == true) {
    guanzhu = 0;
  } else {
    guanzhu = 1;
  }
  //关注选择

  if (ui.chitili.checked == true) {
    tili = 0;
  } else {
    tili = 1;
  }
  //吃体力

  tilix1 = ui.xiao.checked;
  tiliy1 = ui.zhong.checked;
  tiliz1 = ui.da.checked;
  tilim1 = ui.zuan.checked;
  jumpjia = ui.jump.checked;
  hdldcheck = ui.hdld.checked;
  tgdb = ui.dianban.checked;
  just1 = ui.sp11.getSelectedItemPosition();
  just2 = ui.sp12.getSelectedItemPosition();
  no1 = ui.sp21.getSelectedItemPosition();
  no2 = ui.sp22.getSelectedItemPosition();
  shuacishu = ui.sbcs.progress;
  if (shuacishu == 0) { shuacishu = 999 }
  zm = ui.zhaomu.checked;
}

function xuanfu() {
  window = floaty.rawWindow(
    <frame gravity="center">
      <img id="qidong" w="35" h="35" radius="50" src="file://res/start.png" />
    </frame>
  );
  xzb = device.width - 150;
  yzb = device.height / 2;
  window.setPosition(xzb, yzb);
  window.qidong.on("click", function () {
    ui.run(function () {
      if (tp == 0) {
        window.qidong.setSource("file://res/start.png");
        tp = 1;
        threads.shutDownAll();
      } else {
        window.qidong.setSource("file://res/stop.png");
        tp = 0;
        threads.shutDownAll();
        codess.zhuchengxu();
      }
    });
  });

  //记录按键被按下时的触摸坐标
  var x = 0,
    y = 0;
  //记录按键被按下时的悬浮窗位置
  var windowX, windowY;
  //记录按键被按下的时间以便判断长按等动作
  var downTime;

  let windowWidth;
  let windowHeight;
  ui.post(function () {
    windowWidth = window.getWidth();
    windowHeight = window.getHeight();
  }, 1000);

  window.qidong.setOnTouchListener(function (view, event) {
    switch (event.getAction()) {
      case event.ACTION_DOWN:
        x = event.getRawX();
        y = event.getRawY();
        windowX = window.getX();
        windowY = window.getY();
        downTime = new Date().getTime();
        return true;
      case event.ACTION_MOVE:
        //移动手指时调整悬浮窗位置
        let xAxisMovingDistance = event.getRawX() - x;
        let yAxisMovingDistance = event.getRawY() - y;
        if (windowX + xAxisMovingDistance < 0) {
          if (windowY + yAxisMovingDistance < 0) {
            window.setPosition(0, 0);
          } else if (
            windowY + windowHeight + yAxisMovingDistance >
            device.height
          ) {
            window.setPosition(0, device.height - windowHeight);
          } else {
            window.setPosition(0, windowY + yAxisMovingDistance);
          }
        } else if (windowX + xAxisMovingDistance > device.width - windowWidth) {
          if (windowY + yAxisMovingDistance < 0) {
            window.setPosition(device.width - windowWidth, 0);
          } else if (
            windowY + windowHeight + yAxisMovingDistance >
            device.height
          ) {
            window.setPosition(
              device.width - windowWidth,
              device.height - windowHeight
            );
          } else {
            window.setPosition(
              device.width - windowWidth,
              windowY + yAxisMovingDistance
            );
          }
        } else {
          if (windowY + yAxisMovingDistance < 0) {
            window.setPosition(windowX + xAxisMovingDistance, 0);
          } else if (
            windowY + windowHeight + yAxisMovingDistance >
            device.height
          ) {
            window.setPosition(
              windowX + xAxisMovingDistance,
              device.height - windowHeight
            );
          } else {
            window.setPosition(
              windowX + xAxisMovingDistance,
              windowY + yAxisMovingDistance
            );
          }
        }
        return true;
      case event.ACTION_UP:
        //手指弹起时如果偏移很小则判断为点击
        if (
          Math.abs(event.getRawY() - y) < 10 &&
          Math.abs(event.getRawX() - x) < 10
        ) {
          window.qidong.click();
        }
        return true;
    }
    return true;
  });
}
////悬浮按钮拖动
