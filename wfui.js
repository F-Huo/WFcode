const codess = require("./codes");
$debug.setMemoryLeakDetectionEnabled(true);
var wfui = {};
codess = require("./codes");
yanse = require("./kk");
var t = {};

xfb = device.width;
var winwin;

cs = 0;
csdj = 0;

function cishu() {
    if (cs == 0) {
        cs = 1;
        winwin = floaty.rawWindow(
            <frame w="70" bg="#444444">
                <horizontal>
                    <text
                        id="jishu"
                        w="50"
                        h="20"
                        color="#FFFFFF"
                        gravity="center"
                        text="0次"
                    />
                    <text id="fuck" w="20" gravity="center" h="20" color="#FFFFFF" text="清" />
                </horizontal>
            </frame>
        );
        xzb = device.width - 350;
        if (xfb == 1080) {
            winwin.setPosition(xzb, 20);
        } else {
            winwin.setPosition(xzb, 80);
        }

        winwin.fuck.on("click", function () {
            ui.run(function () {
                TTT = 0
                winwin.jishu.setText("0次");
            });
        });

        winwin.jishu.on("click", function () {
            ui.run(function () {
                if (csdj == 0) {
                    console.show();
                    csdj = 1;
                } else {
                    console.hide();
                    csdj = 0;
                }
            });
        });
    }
}

if (xfb == 1080) {
    t = yanse.chucun();
    yfb = 1;
} else {
    t = yanse.chucunku();
    yfb = device.width / 1440;
}
DDD = 0; //计算时间
TTT = 0; //战斗次数
TTY = 0;
MMM = 0; //铃铛模式蹭车还是铃铛
FFF = 0; //判断是否进入房间
HHH = 0; //计数
//AAA = 0; //脚本卡住计时.
BBB = 0;
zhongjianshu = 0;

hy = ["活动好友", "超火好友", "超风好友", "暗高+好友", "超暗好友"];
hyfj = ["活动好友房间", "超火好友房间", "超风好友房间", "暗高+好友房间", "超暗好友房间"];
ldpd = ["活动铃铛", "超火铃铛", "超风铃铛", "暗高+铃铛", "超暗铃铛"];

function fangjianpanduan(ldhy) {
    //ldhy=1是铃铛，=2是好友，=3是好友房间
    lingdangfangjian = 100;
    haoyou = 100;
    haoyoufangjian = 100;
    for (var j = 0; j < hy.length; j++) {
        if (ldhy == 1) {
            if (codess.zhaose(t[ldpd[j]])) {
                lingdangfangjian = j + 1;
                break;
            }
        }
        if (ldhy == 2) {
            if (codess.zhaose(t[hy[j]])) {
                haoyou = j + 1;
                break;
            }
        }
        if (ldhy == 3) {
            if (codess.zhaose(t[hyfj[j]])) {
                haoyoufangjian = j + 1;
                break;
            }
        }
        sleep(200);
    }
}

function jiance() {
    app.launch("com.leiting.wf"); //启动游戏
    if (device.sdkInt >= 24) {
        waitForPackage("com.leiting.wf"); //检测游戏是否前台
    }
}
//检测游戏状态

wfui.jiaoben = function () {
    toast("开始运行");
    jiance();
    cishu();
    if (TTT != 0) {
        if (shuacishu != 0) {
            TTT = 0
            ui.run(function () {
                winwin.jishu.setText(TTT + "次");
            });
        }
    }
    threads.start(function () {
        while (true) {
            if (moshi == 2) {
                lingdangmoshi();
            }
            chongfu();
        }
    });
};

if (device.sdkInt >= 24) {
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
        click(x * yfb, y * yfb);
    }
}
////点击函数
//////////////////////////////////////////////////////////////////////////

function chongfu() {
    ////一直重复刷副本，可以是开车，可以是蹭车，手动进房
    console.log("运行中");
    while (true) {
        if (codess.zhaose(t["战斗中"])) {
            DDD = 0;
            break;
        }
        console.log("判断战斗还是房间");
        if (codess.zhaose(t["房间"])) {
            DDD = 0;
            break;
        }

        if (renshu == 2) {
            if (codess.zhaose(t["单人房"])) {
                DDD = 0;
                break;
            }
        }
        sleep(2000);
        DDD = DDD + 2;
        toast("等待中...");
    } //判断战斗中或者在房间里

    while (true) {
        if (codess.zhaose(t["战斗中"])) {
            break;
        }

        console.log("点准备");
        if (moshi == 0) {
            //开车模式
            if (zm == true) {
                console.log(codess.zhaose(t["招募"]));
                if (codess.zhaose(t["房间"])) {
                    if (codess.zhaose(t["招募"]) == null) {
                        t["招募"][2]();
                        sleep(1000)
                        var img = captureScreen();
                        if (device.width == 1080) {
                            juli = 192;
                            xzuob = 135;
                            yzuob = 977;
                        }
                        else {
                            juli = 256;
                            xzuob = 180;
                            yzuob = 1265;
                        }
                        for (var i = 0; i < 3; i++) {
                            var point = findColor(img, "#e4e4e4", {
                                region: [xzuob, yzuob + i * juli, 10, 10],
                                threshold: 4
                            });
                            if (point) {
                                linshi = i + 3;
                                t["招募"][linshi]();
                                sleep(200)
                            } else {
                                console.log(i);
                            }
                        }
                        t["招募"][6]();
                    }
                }
            }


            if (renshu == 0) {
                if (codess.zhaose(t["开车两人"])) {
                    t["开车两人"][2]();
                }
            }
            else {
                if (renshu == 2) {
                    if (codess.zhaose(t["单人房"])) {
                        t["单人房"][2]();
                    }
                }
                else {
                    if (codess.zhaose(t["开车三人"])) {
                        t["开车三人"][2]();
                    }
                }
            }


        } else {
            if (codess.zhaose(t["房间"])) {
                if (codess.zhaose(t["准备"])) {
                    t["准备"][2]();
                }
            }

            if (codess.zhaose(t["弹窗"])) {
                t["弹窗"][2]();
                FFF = 0;
                return;
            }
        }
        sleep(500);
    } //弹窗是进入房间满员
    while (true) {
        console.log("战斗中");
        if (codess.zhaose(t["战斗中"])) {
            if (codess.zhaose(t["铃铛失败"])) {
                return;
            }
            if (codess.zhaose(t["战斗失败"])) {
                t["战斗失败"][2]();
                if (codess.zhaose(t["双倍"])) {
                    t["双倍"][2]();
                    return;
                }
            }

            if (tgdb == true) {
                click(2, 2)
            }
            else {
                toast("战斗中...当前第" + (TTT + 1) + "次");
                log("前台服务: " + $settings.isEnabled("foreground_service"));
                sleep(3000);
            }
        }
        else {
            if (renshu == 2) {
                Tap(2, 2);
            }
            else {
                yunxing = currentPackage();
                if (yunxing == "com.leiting.wf") {
                    break
                }
            }
        }

        if (codess.zhaoses(t["结算1"])) {
            break;
        }
        sleep(50)
    } //战斗中

    //房间&&战斗中//////////////上面////下面//////////////结算///////////////////
    while (true) {
        Tap(2, 2)
        sleep(100);
        console.log("结算");
        if (codess.zhaoses(t["结算1"])) {
            t["结算1"][2]();
        }
        if (codess.zhaoses(t["结算2"])) {
            break;
        }
    } //战斗结束
    //点到关注结算页面
    //结算////////////////////////////上面///下面/////////关注好友/////////////////

    while (true) {
        if (moshi == 2 || zm == true) {
            break;
        } else {
            Tap(2, 2);
            if (guanzhu == 0) {
                ID1 = 1;
                ID2 = 1;
                if (jumpjia == false) {
                    if (TTT == 0) {
                        toast("给你3秒自己加好友");
                        sleep(3000);
                    }
                }
            } else {
                if (codess.zhaose(t["关注1"])) {
                    ID1 = 1;
                } else {
                    t["关注1"][2]();
                    sleep(1500);
                }

                Tap(2, 2);
                sleep(500);

                if (codess.zhaose(t["关注2"])) {
                    ID2 = 1;
                } else {
                    t["关注2"][2]();
                    sleep(1500);
                }

                Tap(2, 2);
                sleep(500);

                if (codess.zhaose(t["关注空"])) {
                    ID2 = 1;
                }
            }

            if (ID1 == 1 && ID2 == 1) {
                if (codess.zhaoses(t["结算2"])) {
                    ID1 = 0;
                    ID2 = 0;
                    break;
                }
            }

            sleep(200);
        }
    }
    TTT = TTT + 1;
    ui.run(function () {
        winwin.jishu.setText(TTT + "次");
    });

    if (shuacishu != 0) {
        if (TTT == shuacishu) {
            t["关注空"][2](); //点退出
            alert("设置" + shuacishu + "次\n已刷" + TTT + "次。\n\n点确定结束脚本");
            ui.run(function () {
                window.qidong.setSource("file://res/start.png");
                tp = 1;
                threads.shutDownAll();
            });
        }
    }

    sleep(200);
    if (moshi == 2) {
        if (MMM == 0) {
            t["关注空"][2](); //点退出
        } else {
            t["结算2"][2](); //点返回房间
        }
    } else {
        t["结算2"][2]();
    }
    //点返回房间
    sleep(1000);
    $debug.gc();
    if (moshi == 0) {
        while (true) {

            if (renshu == 2) {
                if (codess.zhaose(t["单人房"])) {
                    break;
                }
            }
            else {
                if (codess.zhaose(t["房间"])) {
                    break;
                }
            }
            while (true) {
                if (codess.zhaose(t["没体力"])) {
                    if (tili == 0) {
                        toast("开始吃体力药");
                        sleep(500);
                        diantili();
                        chitili();
                        break;
                    } else {
                        t["没体力"][2]();
                        t["关注空"][2](); //点退出
                        alert("没有体力了！点确定结束脚本。");
                        ui.run(function () {
                            window.qidong.setSource("file://res/start.png");
                            tp = 1;
                            threads.shutDownAll();
                        });
                    }
                } else {
                    if (codess.zhaose(t["体力药"])) { Tap(2, 2) }
                    break;
                }
            }
            sleep(200);
        }
    }
    sleep(200);
} //关注好友

function diantili() {
    chichichi = 0;
    var se = [];
    var img = captureScreen();
    ////////////这个是判断有没有体力药\\\\\\\\\\\\\
    if (device.width == 1080) {
        juli = 216;
        for (var i = 0; i < 4; i++) {
            var point = findColor(img, "#fdfdfd", {
                region: [568, 955 + i * juli, 10, 10],
                threshold: 4
            });
            if (point) {
                se[i] = 1;
            } else {
                se[i] = 0;
            }
        }
    } else {
        juli = 288;
        for (var i = 0; i < 3; i++) {
            var point = findColor(img, "#fdfdfd", {
                region: [864, 1145 + i * juli, 10, 10],
                threshold: 4
            });
            if (point) {
                se[i] = 1;
            } else {
                se[i] = 0;
            }
        }
    }

    ////////////这个是判断有没有体力药\\\\\\\\\\\\\
    if (tilix1 == true && se[0] == 1) {
        t["没体力"][3]();
        chichichi = 2
        return;
    }
    if (tiliy1 == true && se[1] == 1) {
        t["没体力"][4]();
        return;
    }
    if (tiliz1 == true && se[2] == 1) {
        t["没体力"][5]();
        return;
    }
    if (tilim1 == true) {
        t["没体力"][6]();
        return;
    }
} //点体力

function chitili() {
    sleep(500);
    while (true) {
        if (codess.zhaoses(t["体力药"])) {
            console.log("吃几个？？？？？？？？？？？？");
            if (chichichi == 2) {
                console.log("吃多个！！！！！！！！！！！！！！");
                if (device.width == 1080) {
                    Tap(877, 1169);
                    sleep(50);
                    Tap(877, 1169);
                } else {
                    Tap(1169, 1513);
                    sleep(50);
                    Tap(1169, 1513);
                }
            }
            else { console.log("吃1个............................"); }
            sleep(500);
            t["体力药"][2]();
            chichichi = 3
        }

        if (chichichi == 3) {
            Tap(2, 2)
        }

        if (codess.zhaose(t["钻石"])) {
            t["钻石"][2]();
            sleep(700)
            t["弹窗"][2]();
            break
        }

        if (codess.zhaose(t["弹窗"])) {
            t["弹窗"][2]();
        }

        if (codess.zhaose(t["房间"])) {
            break;
        }

        if (codess.zhaoses(t["体力确认"])) {
            t["体力确认"][2]();
            break;
        }
        sleep(50);
    }
} ////吃体力
var yyy = 0;

function lingdangmoshi() {
    while (true) {
        while (true) {
            console.log("铃铛运行中");
            if (codess.zhaose(t["主城"])) {
                if (ld == 1) {
                    t["主城"][2]();
                } else {
                    t["主城"][3]();
                    sleep(2000);
                }
            }

            sleep(300);

            if (codess.zhaose(t["活动"])) {
                t["活动"][2]();
            }

            if (codess.zhaose(t["共斗"])) {
                if (codess.zhaose(t["铃铛"])) {
                    toast("等待中..." + TTT);
                    log("前台服务: " + $settings.isEnabled("foreground_service"));
                    t["共斗"][2]();
                    sleep(1000);
                } else {
                    break;
                }
            }

            if (hdldcheck == false) {
                /////////////////////////////////////////好友房限制/////////////////////////////////////////
                if (codess.zhaose(t["好友房"])) {
                    fangjianpanduan(2);
                    console.log("haoyou=" + haoyou + ",no1=" + no1 + ",no2=" + no2 + ",just1=" + just1 + ",just2=" + just2);
                    if (haoyou == no1 || haoyou == no2) {
                        console.log("不进");
                    } else {
                        if (just1 == 0 && just2 == 0) {
                            t["好友房"][2]();
                            MMM = 1;
                            sleep(1000);
                        }
                        if (just1 != 0 || just2 != 0) {
                            if (haoyou == just1 || haoyou == just2) {
                                t["好友房"][2]();
                                MMM = 1;
                                sleep(1000);
                            } else {
                                console.log("不进");
                            }
                        }
                    }
                }
                /////////////////////////////////////////好友房限制/////////////////////////////////////////
                if (codess.zhaose(t["好友房间"])) {
                    fangjianpanduan(3);
                    console.log("haoyoufangjian=" + haoyoufangjian + ",no1=" + no1 + ",no2=" + no2 + ",just1=" + just1 + ",just2=" + just2);
                    if (haoyoufangjian == no1 || haoyoufangjian == no2) {
                        console.log("不进");
                    } else {
                        if (just1 == 0 && just2 == 0) {
                            t["好友房间"][2]();
                            MMM = 1;
                            sleep(1000);
                        }
                        if (just1 != 0 || just2 != 0) {
                            if (haoyoufangjian == just1 || haoyoufangjian == just2) {
                                t["好友房间"][2]();
                                MMM = 1;
                                sleep(1000);
                            } else {
                                console.log("不进");
                            }
                        }
                    }
                }
                /////////////////////////////////////////好友房限制/////////////////////////////////////////
                if (codess.zhaose(t["双倍"])) {
                    t["双倍"][2]();
                }

                if (codess.zhaose(t["房间"])) {
                    toast("蹭到房~~");
                    return;
                }
            }
            if (codess.zhaose(t["弹窗"])) {
                t["弹窗"][2]();
                FFF = 0;
            }
        }

        while (true) {
            t["铃铛"][2]();
            sleep(1000);

            if (codess.zhaose(t["铃铛确认"])) {
                /////////////////////////////////////////铃铛限制/////////////////////////////////////////
                fangjianpanduan(1);
                console.log("lingdangfangjian=" + lingdangfangjian + ",no1=" + no1 + ",no2=" + no2 + ",just1=" + just1 + ",just2=" + just2);
                if (lingdangfangjian == no1 || lingdangfangjian == no2) {
                    t["铃铛确认"][3]();
                    sleep(1000);
                    HHH = 0;
                    break;
                } else {
                    if (just1 == 0 && just2 == 0) {
                        t["铃铛确认"][2]();
                        MMM = 0;
                        sleep(1000);
                        HHH = 0;
                        break;
                    }
                    if (just1 != 0 || just2 != 0) {
                        if (lingdangfangjian == just1 || lingdangfangjian == just2) {
                            t["铃铛确认"][2]();
                            MMM = 0;
                            sleep(1000);
                            HHH = 0;
                            break;
                        } else {
                            t["铃铛确认"][3]();
                            sleep(1000);
                            HHH = 0;
                            break;
                        }
                    }
                }
                /////////////////////////////////////////铃铛限制/////////////////////////////////////////
            }

            HHH = HHH + 1;
            if (HHH > 5) {
                HHH = 0;
                break;
            }
        }

        while (true) {
            if (codess.zhaose(t["房间"])) {
                FFF = 1;
                HHH = 0;
                break;
            }

            if (codess.zhaose(t["弹窗"])) {
                t["弹窗"][2]();
                FFF = 0;
                HHH = 0;
                break;
            }

            if (codess.zhaose(t["共斗"])) {
                FFF = 0;
                HHH = 0;
                break;
            }
            sleep(1000)
            HHH = HHH + 1;
            if (HHH > 10) {
                HHH = 0;
                break;
            }
        }

        if (FFF == 1) {
            MMM = 0;
            break;
        }
    }
}
//////////////////////////////////////////////////////////////////////////
module.exports = wfui;
