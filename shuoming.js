"ui";
var shuoming =
  "开车模式：自己开房间给别人进，进入房间后自动运行。可以配合吃体力功能实现一直开车。\n蹭车模式：进入别人房间后自动运行。\n铃铛模式：分为共斗铃铛和活动铃铛，区别在于刷的好友房间是活动的还是日常共斗本的。铃铛依旧有什么进什么。\n铃铛模式启动游戏后自动开始刷铃铛，刷铃铛的同时会判断是否有互fo好友开车。有的话顺便蹭车。挂一整天都没有问题的说~~~\n\n开车人数选择：两人开车只要有一名队友准备好即会开始；三人开车则会等到3人都准备好才开车\n\n关注队友：【只对蹭车模式有效，开车模式默认全部关注】因为关注人数有限制，可以单独设置是否关注队友，如果设置不关注，在战斗结束后有大概3秒的延迟时间可以手动关注，如果设置关注，默认2个队友都关注。\n建议：群里蹭车记住房主名字后在战斗后手动关注。NN吃体力药：仅限开车模式，会按照勾选的体力药，从少到多依次吃，一次吃一个。";
ui.layout(
  <vertical>
    <text
      marginLeft="10"
      marginTop="20"
      text="辅助说明："
      color="#0000FF"
      size="20"
    />
    <text
      marginLeft="20"
      marginRight="20"
      marginTop="10"
      color="#000000"
      text="{{shuoming}}"
    />
    <button id="guanbi">关闭</button>
  </vertical>
);

ui.guanbi.on("click", () => {
  exit();
});
//开始运行按钮