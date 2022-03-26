"ui";

ui.layout(
    <vertical>
        <img w="*" layout_weight="1" h="auto" marginTop="30" marginLeft="10" src="https://gitee.com/F-Huo/wf_code/raw/master/res/no.png" />
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
