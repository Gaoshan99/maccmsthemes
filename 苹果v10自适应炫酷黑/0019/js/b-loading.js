 
//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
    _PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为140px，高度为140px）
var _LoadingTop = _PageHeight > 140 ? (_PageHeight - 140) / 2 : 0,
    _LoadingLeft = _PageWidth > 140 ? (_PageWidth - 140) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:rgba(30, 30, 40, 0.98);opacity:1;filter:alpha(opacity=80);z-index:999999;"><div style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px;color: #fff; font-family:\'Microsoft YaHei\';"><div style="padding: 0;margin: 0;position: relative;width: 140px;height: 140px;color: #fff;text-align: center;"><img style="max-width: 48px;margin: 20% 0 0;" src="http://www.321ik.com/images/loading.gif"><p style="position: absolute;width: 100%;left: 0;bottom: 20px;margin: 0;font-size: 16px;white-space: nowarp;">加载中...</p></div></div></div>';
//呈现loading效果
document.write(_LoadingHtml);
 
//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};
 
//监听加载状态改变
document.onreadystatechange = completeLoading;
 
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        loadingMask.parentNode.removeChild(loadingMask);
    }
}
// JavaScript Document