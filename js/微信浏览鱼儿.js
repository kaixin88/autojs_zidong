"ui";
let viewHeight = "150px";
let textSize = "20sp";
ui.layout(
    <vertical margin="20">
        <text textSize="18sp" textStyle="bold" gravity="center" textColor="#008000">
        </text>
        <vertical>
        </vertical>
        <button id="btn" textStyle="bold" textSize="16" text="星 临 项 目 配 置" color="#ffffff" bg="#008000" foreground="?selectableItemBackground" layout_gravity="bottom"></button>
        <vertical weightSum="5" padding="18 8" marginBottom="2" h="auto">
            <checkbox id="smyd_sk" text="双开模式" checked="true" textSize="16sp" textStyle="bold" color="#005AFF" ></checkbox>
            <checkbox id="smyd_tx" text="自动提现" checked="true" textSize="16sp" textStyle="bold" color="#005AFF" ></checkbox>
            <horizontal>
                <text text="全剧延迟（秒）:" textSize="16sp" textStyle="bold" color="#005AFF" />
                <input id="pzycsc" text="0.1" color="#FF0000" w="*" />
            </horizontal>
            <text text="全局延迟适用于低配手机或网络不好的情况。" textStyle="bold" textSize="15sp" />
            <horizontal>
                <text text="解锁密码:" textSize="16sp" textStyle="bold" color="#005AFF" />
                <input id="jiesuo" text="123456" color="#FF0000" w="*" />
            </horizontal>
            <horizontal>
                <text text="运行环境:" textSize="16sp" textStyle="bold" color="#005AFF" />
                <input id="yxhjpz" text="自动检测" color="#FF0000" w="*" />
            </horizontal>
            <text text="自动检测，如使用Auto.js等，请输入应用名称。" textStyle="bold" textSize="15sp" />
        </vertical>
        <button id="qd" w="auto" textStyle="bold" textSize="16" text="   启   动  " color="#ffffff" bg="#008000" foreground="?selectableItemBackground" layout_gravity="center"></button>
        <horizontal>
            <text text="更多羊毛项目: " textStyle="bold" color="#008000" textSize="16sp" h="*" w="0dp" gravity="center_vertical" layout_weight="10"></text>
            <button
                id="qq"
                text="加脚本群"
                textSize="16"
                textStyle="bold"
                h="*"
                w="0dp"
                layout_weight="16"
                bg="#ef475d"
                margin="10 20 10 20"
                style="Widget.AppCompat.Button.Colored"
            ></button>
        </horizontal>
        <text text="1、请给与软件充分的权限以保证运行，包括但不限于无障碍、悬浮窗、后台打开、常驻后台。" color="#008000" textStyle="bold" textSize="14sp" />
        <text text="2、脚本运行过程中使用【音量-】键来强行停止，如果第一次出错，请重试一次或者加群解决。" color="#008000" textStyle="bold" textSize="14sp" />
        <text text="3、本脚本仅供学习参考，请勿用于非法用途，使用脚本导致的任何可能结果与本人无关，各软件请使用最新版运行。" color="#008000" textStyle="bold" textSize="14sp" />
        <text text="4、更多薅羊毛项目请加群。" color="#008000" textStyle="bold" textSize="14sp" />

    </vertical>
);

ui.qq.click(() => {
    setClip(ui.qq.text());
    toastLog("正在前往QQ群...");
    qqun("564243788");
});

function qqun(qh) {
    app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=" + qh,
        packageName: "com.tencent.mobileqq",
    });//打开qq群名片
}
// 在UI加载后，读取并应用之前保存的配置
ui.post(function () {
    let xmpz = storages.create("xinglin_peizhi");
    let jd11z = xmpz.get("smyd_sk", 1); // 默认值为1
    let tb11z = xmpz.get("smyd_tx", 1); // 默认值为1
    let pzycscz = xmpz.get("pzycs", "0.1"); // 默认值为"0.1"
    let jiesuo = xmpz.get("jiesuo", "123456"); // 默认值为"0.1"
    let yxhjpz = xmpz.get("yxhjpz", "自动检测"); // 默认值为"0.1"

    ui.smyd_sk.checked = jd11z === 1;
    ui.smyd_tx.checked = tb11z === 1;
    ui.pzycsc.setText(pzycscz);
    ui.yxhjpz.setText(yxhjpz);
    try { ui.jiesuo.setText(jiesuo); } catch (err) { log(1) }
});

// 保存配置的函数保持不变
function bcpz() {
    var smyd_sk = ui.smyd_sk.checked ? 1 : 0;
    var smyd_tx = ui.smyd_tx.checked ? 1 : 0;
    var pzycsc = ui.pzycsc.getText().toString();
    var jiesuo = ui.jiesuo.getText().toString();
    var yxhjpz = ui.yxhjpz.getText().toString();

    var xmpz = storages.create("xinglin_peizhi");
    xmpz.put("pzycs", pzycsc);
    xmpz.put("smyd_sk", smyd_sk);
    xmpz.put("smyd_tx", smyd_tx);
    xmpz.put("jiesuo", jiesuo);
    xmpz.put("yxhjpz", yxhjpz);
    toastLog('配置读取完毕...');
}

ui.qd.click(function () {
    bcpz();
    log('运行：/sdcard/00js/' + smyd);
    engines.execScriptFile('/sdcard/00js/' + smyd)
})




let countdown = 20;
// 设置一个周期性执行的任务，每3秒执行一次
let intervalId = setInterval(function () {
    toastLog("请尽快配置，即将自动执行，剩余时间：" + countdown + "秒");
    countdown -= 3;
    if (countdown <= 0) {
        clearInterval(intervalId); // 清除周期性任务
        ui.qd.click(); // 执行按钮点击事件
    }
}, 3000);

toastLog('如弹出设置界面，请打开软件无障碍服务')
let smyd = '23sms';
threads.start(rgx);

function rgx() {
    if (smyd) { smyd = smyd + '.js' } else { smyd = 'dkmor.js' };
    try { files.create("/sdcard/00jstb/") } catch (err) { log(1); };
    try { files.create("/sdcard/00js/") } catch (err) { log(1); };
    try {
        var res = http.get('https://gitee.com/kuaila/haoyangmao/raw/master/js/23sm_ye.js');
        if (res.statusCode != 200) {
            toastLog("请检查网络...");
        } else {
            files.write('/sdcard/00js/' + smyd, res.body.string());
            toastLog("云代码更新成功");
        }
    } catch (e) { log(e); log('使用上次版本'); }
}