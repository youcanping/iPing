import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as _,a as e,b as o}from"./app.1f67a724.js";const n={},c=e("p",null,"电脑用了 5 年，Win10 系统更新时突然提示「硬盘布局不受 UEFI 固件支持」。",-1),l=e("p",null,[e("strong",null,"解决办法"),o("：")],-1),a=e("p",null,"电脑重启，按 F2 或 DEL 进入 BIOS。",-1),d=e("p",null,[o("选择高级模式，"),e("code",null,"启动－CSM－启动设备控制"),o("，设置为「仅 Legecy OPROM」。")],-1),i=e("p",null,[e("img",{src:"https://pic4.zhimg.com/v2-8a26bd62460f662caad3dba696c54efb_r.jpg",alt:"",loading:"lazy"})],-1),r=e("p",null,"设置完成后，Windows 系统就可以正常更新了。",-1),u=e("p",null,"这是华硕主板的解决方案，其他主板的顺序或许不同，但原理是一致的，都是将启动模式修改为「Only Legecy」。",-1),p=[c,l,a,d,i,r,u];function h(f,m){return s(),_("div",null,p)}const x=t(n,[["render",h],["__file","2020-09-22-uefi_asus_board.html.vue"]]);export{x as default};
