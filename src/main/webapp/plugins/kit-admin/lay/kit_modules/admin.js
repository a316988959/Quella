/** kitadmin-v2.1.0 MIT License By http://kit.zhengjinfan.cn Author Van Zheng */
;"use strict";
var mods = ["element", "sidebar", "mockjs", "select", "tabs", "menu", "route", "utils", "component", "kit"];
layui.define(mods, function (e) {
    layui.element;
    var n = layui.utils, i = layui.jquery, l = (layui.lodash, layui.route), o = layui.tabs, m = layui.layer,
        t = layui.menu, s = layui.component, p = layui.kit, a = function () {
            this.config = {elem: "#app", loadType: "SPA"}, this.version = "1.0.0"
        };
    a.prototype.ready = function (e) {
        var t = this.config, a = (0, n.localStorage.getItem)("KITADMIN_SETTING_LOADTYPE");
        null !== a && void 0 !== a.loadType && (t.loadType = a.loadType), p.set({type: t.loadType}).init(), u.routeInit(t), u.menuInit(t), "TABS" === t.loadType && u.tabsInit(), "" === location.hash && n.setUrlState("主页", "#/"), layui.sidebar.render({
            elem: "#ccleft",
            title: "这是左侧打开的栗子",
            shade: !0,
            direction: "left",
            dynamicRender: !0,
            url: "views/table/teble2.html",
            width: "50%"
        }), i("#cc").on("click", function () {
            layui.sidebar.render({
                elem: this,
                title: "这是表单盒子",
                shade: !0,
                dynamicRender: !0,
                url: "views/form/index.ftl",
                width: "50%"
            })
        }), s.on("nav(header_right)", function (e) {
            var t = e.elem.attr("kit-target");
            "setting" === t && layui.sidebar.render({
                elem: e.elem,
                title: "设置",
                shade: !0,
                dynamicRender: !0,
                url: "views/setting.html"
            }), "help" === t && m.alert("QQ群：248049395，616153456")
        }), layui.mockjs.inject(APIs), "SPA" === t.loadType && l.render(), "function" == typeof e && e()
    };

    var routes = [];
    $.ajax({
        async:false,
        type:"GET",
        url:"/menu/buildMenuUrl",
        dataType:"json",
        success:function (data) {
            routes = data;
        }
    });
    console.log(routes);

    var u = {
        routeInit: function (e) {
            var t = this, a = {
                r: [{
                    path: "/user/index",
                    component: "/views/user/index.ftl",
                    name: "用户列表",
                    children: [{
                        path: "/user/create",
                        component: "views/user/create.html",
                        name: "新增用户"
                    }, {path: "/user/edit", component: "views/user/edit.html", name: "编辑用户"}]
                }],
                routes : routes
                // routes: [{
                //     path: "/layui/fly",
                //     component: "https://fly.layui.com/",
                //     name: "Fly",
                //     iframe: !0
                // }, {path: "/layui", component: "http://www.layui.com/", name: "Layui", iframe: !0}, {
                //     path: "/baidu",
                //     component: "https://www.baidu.com/",
                //     name: "百度一下",
                //     iframe: !0
                // }, {path: "/user/index", component: "/views/user/index.ftl", name: "用户列表"}, {
                //     path: "/user/create",
                //     component: "views/user/create.html",
                //     name: "新增用户"
                // }, {path: "/user/edit", component: "views/user/edit.html", name: "编辑用户"}, {
                //     path: "/cascader",
                //     component: "views/cascader/index.ftl",
                //     name: "Cascader"
                // }, {path: "/", component: "views/app.html", name: "主页"}, {
                //     path: "/user/my",
                //     component: "views/profile.html",
                //     name: "用户中心"
                // }, {path: "/inputnumber", component: "views/inputnumber.html", name: "InputNumber"}, {
                //     path: "/layui/grid",
                //     component: "views/layui/grid.html",
                //     name: "Grid"
                // }, {path: "/layui/button", component: "views/layui/button.html", name: "按钮"}, {
                //     path: "/layui/form",
                //     component: "views/layui/form.html",
                //     name: "表单"
                // }, {path: "/layui/nav", component: "views/layui/nav.html", name: "导航/面包屑"}, {
                //     path: "/layui/tab",
                //     component: "views/layui/tab.html",
                //     name: "选项卡"
                // }, {
                //     path: "/layui/progress",
                //     component: "views/layui/progress.html",
                //     name: "progress"
                // }, {path: "/layui/panel", component: "views/layui/panel.html", name: "panel"}, {
                //     path: "/layui/badge",
                //     component: "views/layui/badge.html",
                //     name: "badge"
                // }, {
                //     path: "/layui/timeline",
                //     component: "views/layui/timeline.html",
                //     name: "timeline"
                // }, {
                //     path: "/layui/table-element",
                //     component: "views/layui/table-element.html",
                //     name: "table-element"
                // }, {path: "/layui/anim", component: "views/layui/anim.html", name: "anim"}, {
                //     path: "/layui/layer",
                //     component: "views/layui/layer.html",
                //     name: "layer"
                // }, {path: "/layui/laydate", component: "views/layui/laydate.html", name: "laydate"}, {
                //     path: "/layui/table",
                //     component: "views/layui/table.html",
                //     name: "table"
                // }, {path: "/layui/laypage", component: "views/layui/laypage.html", name: "laypage"}, {
                //     path: "/layui/upload",
                //     component: "views/layui/upload.html",
                //     name: "upload"
                // }, {
                //     path: "/layui/carousel",
                //     component: "views/layui/carousel.html",
                //     name: "carousel"
                // }, {path: "/layui/laytpl", component: "views/layui/laytpl.html", name: "laytpl"}, {
                //     path: "/layui/flow",
                //     component: "views/layui/flow.html",
                //     name: "flow"
                // }, {path: "/layui/util", component: "views/layui/util.html", name: "util"}, {
                //     path: "/layui/code",
                //     component: "views/layui/code.html",
                //     name: "code"
                // }, {path: "/user/table", component: "/views/table/teble.html", name: "Table"}, {
                //     path: "/user/table2",
                //     component: "/views/table/teble2.html",
                //     name: "数据表格2"
                // }, {path: "/user/table3", component: "/views/table/teble3.html", name: "数据表格3"}, {
                //     path: "/user/form",
                //     component: "/views/form/index.ftl",
                //     name: "Form"
                // }, {path: "/docs/mockjs", component: "docs/mockjs.html", name: "拦截器(Mockjs)"}, {
                //     path: "/docs/menu",
                //     component: "docs/menu.html",
                //     name: "左侧菜单(Menu)"
                // }, {path: "/docs/route", component: "docs/route.html", name: "路由配置(Route)"}, {
                //     path: "/docs/tabs",
                //     component: "docs/tabs.html",
                //     name: "选项卡(Tabs)"
                // }, {path: "/docs/utils", component: "docs/utils.html", name: "工具包(Utils)"}, {
                //     path: "/views/select",
                //     component: "views/select/index.ftl",
                //     name: "Select"
                // }, {path: "/exception/403", component: "views/exception/403.html", name: "403"}, {
                //     path: "/exception/404",
                //     component: "views/exception/404.html",
                //     name: "404"
                // }, {path: "/exception/500", component: "views/exception/500.html", name: "500"},{
                //     path:"/menu/index",
                //     component: "/menu/index",
                //     name:"菜单设置"
                // }]
            };
            return "TABS" === e.loadType && (a.onChanged = function () {
                o.existsByPath(location.hash) ? o.switchByPath(location.hash) : t.addTab(location.hash, (new Date).getTime())
            }), l.setRoutes(a), this
        }, addTab: function (e, t) {
            var a = l.getRoute(e);
            a && o.add({id: t, title: a.name, path: e, component: a.component, rendered: !1, icon: "&#xe62e;"})
        }, menuInit: function (i) {
            var l = this;
            return t.set({
                dynamicRender: !1, isJump: "SPA" === i.loadType, onClicked: function (e) {
                    if ("TABS" === i.loadType && !e.hasChild) {
                        var t = e.data, a = t.href, n = t.layid;
                        l.addTab(a, n)
                    }
                }, elem: "#menu-box", remote: {url: "/api/getmenus", method: "post"}, cached: !1
            }).render(), l
        }, tabsInit: function () {
            o.set({
                onChanged: function (e) {
                }
            }).render(function (e) {
                e.isIndex && l.render("#/")
            })
        }
    };
    (new a).ready(function () {
        console.log("Init successed.")
    }), e("admin", {})
});
//# sourceMappingURL=admin.js.map
