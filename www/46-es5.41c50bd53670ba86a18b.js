function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"3UxW":function(e,t,n){"use strict";n.r(t),n.d(t,"VermasPageModule",(function(){return y}));var c=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),r=n("mrSG"),s=n("fXoL"),l=n("h7Fw"),u=n("Ut7A"),p=n("JTFn");function d(e,t){if(1&e&&(s.bc(0,"ion-card"),s.bc(1,"ion-card-header"),s.bc(2,"ion-card-title",11),s.Qc(3),s.ac(),s.bc(4,"ion-item"),s.bc(5,"ion-avatar",12),s.Wb(6,"img",13),s.ac(),s.bc(7,"h2",14),s.Qc(8),s.ac(),s.ac(),s.ac(),s.bc(9,"ion-card-content"),s.Wb(10,"iframe",15,16),s.oc(12,"vimeoUrl"),s.Wb(13,"br"),s.bc(14,"p",17),s.Qc(15),s.ac(),s.ac(),s.ac()),2&e){var n=t.$implicit;s.Ib(3),s.Rc(n.title),s.Ib(5),s.Rc(n.user_name),s.Ib(2),s.uc("src",s.pc(12,4,n.url+"?loop=1&muted=1&playsinline=1"),s.Ic),s.Ib(5),s.Rc(n.description)}}function m(e,t){if(1&e&&(s.bc(0,"div"),s.bc(1,"ion-row",18),s.bc(2,"ion-col",19),s.bc(3,"ion-avatar",12),s.Wb(4,"img",20),s.ac(),s.ac(),s.bc(5,"ion-col",21),s.bc(6,"div"),s.bc(7,"p",22),s.bc(8,"strong"),s.Qc(9),s.ac(),s.ac(),s.bc(10,"p",23),s.Qc(11),s.ac(),s.ac(),s.ac(),s.ac(),s.ac()),2&e){var n=t.$implicit;s.Ib(4),s.vc("src",n.img,s.Jc),s.Ib(5),s.Rc(n.user),s.Ib(2),s.Rc(n.msg)}}function g(e,t){if(1&e){var n=s.cc();s.bc(0,"div"),s.bc(1,"ion-toolbar"),s.bc(2,"ion-row",24),s.bc(3,"ion-col",21),s.bc(4,"textarea",25),s.jc("ngModelChange",(function(e){return s.Hc(n),s.nc().newMsg=e})),s.ac(),s.ac(),s.bc(5,"ion-col",19),s.bc(6,"button",26),s.jc("click",(function(){return s.Hc(n),s.nc().enviarMsg()})),s.Wb(7,"ion-icon",27),s.ac(),s.ac(),s.ac(),s.ac(),s.ac()}if(2&e){var c=s.nc();s.Ib(4),s.uc("ngModel",c.newMsg),s.Ib(2),s.uc("disabled",""===c.newMsg)}}var b,f,h,v=[{path:"",component:(b=function(){function e(t,n,c,o,i){_classCallCheck(this,e),this.route=t,this.router=n,this.render=c,this.alertController=o,this.pObjecto=i,this.comments=[{id:1,id_user:3,user:"Julian",msg:"Es genial",currentTime:155409956e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"},{id:2,id_user:4,user:"Fabian",msg:"Ayuda mucho a todo lo que se necesita",currentTime:155401056e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"},{id:3,id_user:5,user:"Julia",msg:"No es de mi agrado",currentTime:155401086e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"},{id:4,id_user:6,user:"Nicolas",msg:"falta m\xe1s explicacion",currentTime:155401106e3,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"}],this.newMsg="",this.usuarioActual="Andres"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.pObjecto.getNavData();this.data=e.vidinfo,this.vid=[],this.vid.push(this.data)}},{key:"enviarMsg",value:function(){var e=this;this.comments.push({id:1,id_user:3,user:this.usuarioActual,currentTime:(new Date).getTime(),msg:this.newMsg,img:"https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png"}),this.newMsg="",setTimeout((function(){e.content.scrollToBottom(200)}))}},{key:"videoEnd",value:function(){return Object(r.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"HEY!",subHeader:"No olvides que puedes realizar un test cuando quieras",message:"Puedes ver tu progreso en el apartado de tu perfil en la seccion de metricas",buttons:["Acepto"]});case 2:return t=e.sent,e.next=5,t.present();case 5:setTimeout((function(){t.dismiss()}),3e3);case 6:case"end":return e.stop()}}),e,this)})))}}]),e}(),b.\u0275fac=function(e){return new(e||b)(s.Vb(a.a),s.Vb(a.h),s.Vb(s.J),s.Vb(i.b),s.Vb(l.a))},b.\u0275cmp=s.Pb({type:b,selectors:[["app-vermas"]],viewQuery:function(e,t){var n;1&e&&s.Wc(i.s,!0),2&e&&s.Dc(n=s.kc())&&(t.content=n.first)},decls:19,vars:6,consts:[["header",""],[1,"ion-toolbar-ccs"],["slot","start"],["defaultHref","/users/home"],[1,"tituloInfo"],[1,"color-blue"],[1,"color-blueC"],[3,"fullscreen","appHideHeader","scrollEvents"],[4,"ngFor","ngForOf"],[1,"divBack"],[4,"ngIf"],[1,"title-css",2,"text-align","center"],["item-start",""],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y",1,"icon-photo-css"],[1,"userN-css"],["frameborder","0","allow","autoplay;","width","100%","height","100%","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","",3,"src"],["playerVim",""],[1,"Subtitle-css"],[1,"user-comments"],["size","2"],[1,"icon-photo",3,"src"],["size","10"],[1,"usernamecss"],[1,"mensajecss"],[1,"ion-align-items-center","ion-no-padding"],["autosize","","maxRow","4","placeholder","Deja tu Comentario....",1,"msg-input",3,"ngModel","ngModelChange"],["expand","block",1,"msg-btn",3,"disabled","click"],["name","arrow-redo-outline"]],template:function(e,t){if(1&e&&(s.bc(0,"ion-header",null,0),s.bc(2,"ion-toolbar",1),s.bc(3,"ion-buttons",2),s.Wb(4,"ion-back-button",3),s.ac(),s.bc(5,"ion-title",4),s.bc(6,"label",5),s.Qc(7,"M"),s.ac(),s.bc(8,"label",6),s.Qc(9,"A"),s.ac(),s.bc(10,"label",5),s.Qc(11,"GIN"),s.ac(),s.ac(),s.ac(),s.ac(),s.bc(12,"ion-content",7),s.Oc(13,d,16,6,"ion-card",8),s.bc(14,"div",9),s.bc(15,"ion-grid"),s.Oc(16,m,12,3,"div",8),s.ac(),s.ac(),s.ac(),s.bc(17,"ion-footer"),s.Oc(18,g,8,2,"div",10),s.ac()),2&e){var n=s.Ec(1);s.Ib(12),s.uc("fullscreen",!0)("appHideHeader",n)("scrollEvents",!0),s.Ib(1),s.uc("ngForOf",t.vid),s.Ib(3),s.uc("ngForOf",t.comments),s.Ib(2),s.uc("ngIf",t.comments)}},directives:[i.y,i.db,i.k,i.g,i.h,i.cb,i.s,u.a,c.l,i.x,i.w,c.m,i.l,i.n,i.p,i.E,i.f,i.m,i.P,i.r,o.c,o.p,o.s,i.z],pipes:[p.a],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.divBack[_ngcontent-%COMP%]{background-color:#fff}.icon-photo[_ngcontent-%COMP%]{border-radius:50%!important;margin-top:10px;height:1.7em!important;width:1.7em!important}.usernamecss[_ngcontent-%COMP%]{color:#444;padding:0 0 6px;font-size:9px;line-height:44px;margin:2px 0 0;text-align:left}.mensajecss[_ngcontent-%COMP%], .usernamecss[_ngcontent-%COMP%]{letter-spacing:1px;font-weight:700}.mensajecss[_ngcontent-%COMP%]{font-size:7px;line-height:12px;margin:0;padding:7px;text-transform:uppercase;text-align:justify;color:#000}.time[_ngcontent-%COMP%]{color:#070707;float:right;font-size:small}.icon-photo-css[_ngcontent-%COMP%]{border-radius:10%!important;margin-top:10px;height:1em!important;width:1em!important}.post-content[_ngcontent-%COMP%], .user-comments[_ngcontent-%COMP%]{border-bottom:1px solid hsla(0,0%,62.7%,.453);padding-bottom:10px}.title-css[_ngcontent-%COMP%]{color:#444;margin:0;padding:0 0 6px;font-size:24px;line-height:44px;letter-spacing:1px;font-weight:700}.Subtitle-css[_ngcontent-%COMP%]{border-top:1px solid hsla(0,0%,62.7%,.453);font-size:11px;margin:0;padding:7px;text-align:justify}.Subtitle-css[_ngcontent-%COMP%], .userN-css[_ngcontent-%COMP%]{line-height:12px;text-transform:uppercase;letter-spacing:1px;font-weight:700}.userN-css[_ngcontent-%COMP%]{font-size:5px;margin:0 50% 0 0;padding:0}.titulo-user[_ngcontent-%COMP%]{color:#000;float:left;font-size:small}.tiempo[_ngcontent-%COMP%]{color:#c7c7c7;float:right;font-size:small}.coment[_ngcontent-%COMP%]{color:#555;text-align:justify;font-size:small}.msg-input[_ngcontent-%COMP%]{width:100%;border:1px solid var(--ion-color-medium);border-radius:10px;background:#fff;color:#000;resize:none;padding-left:10px;padding-right:10px}"]}),b)}],w=((f=function e(){_classCallCheck(this,e)}).\u0275mod=s.Tb({type:f}),f.\u0275inj=s.Sb({factory:function(e){return new(e||f)},imports:[[a.j.forChild(v)],a.j]}),f),x=n("HsBR"),C=n("Fgaq"),y=((h=function e(){_classCallCheck(this,e)}).\u0275mod=s.Tb({type:h}),h.\u0275inj=s.Sb({factory:function(e){return new(e||h)},imports:[[c.c,o.k,i.eb,w,x.a,C.a]]}),h)}}]);