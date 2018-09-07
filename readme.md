# 一个模仿《二十四节气诗词》的翻书DEMO版本效果

本demo的翻页效果基于：[turn.js](https://github.com/blasten/turn.js "turnjs")

## turn.js常方法汇总

```
Turn.js是一个内置的jQuery翻页插件

1 html中引入<script type="text/javascript" src="js/turn.js"></script>

2  创建html

<div id="flipbook">
  <div class="hard"> Turn.js </div>
  <div class="hard"></div>
  <div> Page 1 </div>
  <div> Page 2 </div>
  <div> Page 3 </div>
  <div> Page 4 </div>
  <div class="hard"></div>
  <div class="hard"></div>
</div>

3 javascript 部分

$("#flipbook").turn({
  width: 400,
  height: 300,
  autoCenter: true
});
4.可用选项、属性、方法、事件、css类

　选项：

(1)acceleration:设置硬件加速模式，对于触摸设备，此值必须为真。
   acceleration:true;
(2)direction:指定flipbook从左到右(DIR=ltr，默认值)或右向左(DIR=rtl)的方向。
　　a.$("#flipbook").turn({
　　　　direction:'rtl'
　　　})
　　b.<div id="flipbook" dir="rtl"></div>
　　c.#flipbook{
　　  　　direction:rtl
  　　}
(3)duration:设置翻页的速度
　　duration:600 如果设置为0 则不会产生翻页效(4) gradients：翻页过程中显示渐变和阴影
　　 gradients:true
(5) width:页面的宽度 height:页面的高度
    width:num height:num
(6) elevation：转换期间页面的高度
    elevation:0
(7) page：初始化时设置页面个数
　　 page:1
(8) pages:设置任意数量的页面。如果页面的数量大于#flipbook中元素的数量，使用addPage方法动态地添加这些页面。
    $("#flipbook").children().length()
(9) when:事件侦听器。键必须在事件列表中使用
    $("#flipbook").turn({
　　　　when:{
　　　　　　turned: function(e, page) {
　　　　　　　　if(page==1){
　　　　　　　　}
　　　　　　　　if(page==2){
　　　　　　　　}
　　　　　　}
　　　　}
　　})
属性：
(1)animating:当折叠的页面显示时返回true，
function isAnimating() {
if ($("#flipbook").turn("animating")) {
　　alert('Animating a page!');
　}
}
(2)direction: 返回当前翻页的方向
  $("#flipbook).turn("direction")
(3)display: 获取当前显示的是单页还是双页
  $("#flipbook).turn("display")
(4)page:获取当前页面为第几页
  $("#flipbook).turn("page")
(5)pages:获取总共有多少页
  $("#flipbook").turn("pages")
(6)size：获取flipbook的高宽
  $("#flipbook").turn("size")  获取出有两个值 size.width 和 size.height
方法:
(1) addpage:将页面添加到flipbook中
例如插入第10页:
element=$("<div />").html("loading");
　　　$("#flipbook").turn("addpagge",element,10)
(2) destroy：删除所有页面
$("#flipbook").turn("destroy").remove();
(3) direction :设置flipbook 的方向
$("#flipbook").turn("direciton","rtl")
(4) display：设置单页还是双页
$("#flipbook").turn("display","single")
(5) next 把视图转到下一个
$("#flipbook").turn("next")
$("#flipbook").turn("next").turn("next")
(6) options:更改选项的值
$("#flipbook").turn("options",{display:"single",duration:})
(7) page：跳到指定的页面
$("#fllipbook").turn("page",10)
(8) previous:转到前面的视图
　$("#flipbook").turn("previous")
(9) removepage：删除指定的页面
$("#flipbook").turn("removepage"，10)
(10) resize:重新计算页面的大小
$("flipbook").turn("resize")
(11) stop:停止当前的过渡
$("#flipbook").turn("page",10).turn("stop")
(12)version:获取当前发布的版本
　$("#flipbook").turn("version")
(13)zoom:flipbook的缩放比例
　　　 $("#flipbook").turn("zoom",0.5) 例如当值为0.5时 缩小为原来的一半 当值为1时 则不改变大小
事件：
(1) end：事件在页面停止时触发
$("#flipbook").bind("end",function(event,pageobject,turned){
　　　　　　alert("turn.end:"+pageobject.page)
})
　　(2)first：当当前页面为1时触发此事件
$("#flipbook").bind("first",function(event){
　　alert("page1")
})
(3)last：当当前页面为最后一页时触发此事件
$("#flipbook").bind("last",function(event){
　　　　  alert("page_last")
　　  })
(4)missing：当当前范围需要某些页面时 触发此事件
$("#flipbook").bind("missing",function(event,pages){
　　　for(var i=0;i<pages.length;i++){
　　　　　$(this).turn("addpage",$("<div/>"),pages[i])
　　　}
})
(10) addpage：将页面插入到flipbook
　　　　　 element=$("<div/>").html("loading...")
$("#flipbook").turn("addpage",element,10) 插入第10页
(11) start：页面启动时触发
$("#flipbook").bind("start",function(event,pageobject,corner){
　　　　　　　　if(corner=="tl"||corner=="tr"){
　　　　　　　　　　　event.preventDefault();　　　
　　　　　　　　}
})
当翻动左角和右角时，禁止启动动画
(12)turning：翻页之前被启动
　　　　　$("#flipbook").bind("turning",function(event,page,view){
alert("turning the page to"+page)
})
翻页之前 弹出即将翻开的是第几页
(13)turned：翻页完成之后启动
$("#flipbook").bind("turned",function(event,page,view){
　　　　　　alert("page"+page)
})
(14)zooming:当缩放改变时触发此事件
　　　　　　$("#flipbook").bind("zooming", function(event,  newZoomValue, currentZoomValue) {
　　　　　　　　alert("New zoom: "+currentZoomValue);
　　　　　　});
```