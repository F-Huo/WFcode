"ui";

ui.layout(
    <vertical>
        <img layout_weight="1" h="auto" scaleType="fitCenter" src="https://gitee.com/F-Huo/wf_code/raw/master/res/cg.png" />
        <button
            id="guanbi"
            text="关闭APP"
            style="Widget.AppCompat.Button.Colored"
        />
    </vertical>
)

ui.guanbi.on("click", function () {
    engines.stopAll();
});