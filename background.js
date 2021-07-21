// 插件安装后、开启时的监听回调
chrome.runtime.onInstalled.addListener(() => {
    alert('Hello, World!');
});