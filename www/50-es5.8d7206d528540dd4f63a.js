function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var i=0;i<n.length;i++){var c=n[i];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function _createClass(t,n,i){return n&&_defineProperties(t.prototype,n),i&&_defineProperties(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{giAl:function(t,n,i){"use strict";i.r(n),i.d(n,"ActividadPageModule",(function(){return A}));var c=i("ofXK"),e=i("3Pt+"),o=i("TEn/"),a=i("tyNb"),r=i("AytR"),s=i("eP/1"),l=i("fXoL"),b=i("7Vn+"),g=i("8rbx"),d=i("3no8"),p=i("VnPy"),u=i("XQ85");function f(t,n){if(1&t&&(l.bc(0,"div",20),l.bc(1,"label",21),l.Qc(2),l.oc(3,"slice"),l.ac(),l.bc(4,"label",22),l.Qc(5),l.oc(6,"title"),l.oc(7,"slice"),l.ac(),l.ac()),2&t){var i=l.nc().$implicit;l.Ib(2),l.Rc(l.rc(3,2,i.post,0,10)),l.Ib(3),l.Rc(l.pc(6,6,l.rc(7,8,i.post,10,i.post.length)))}}function h(t,n){if(1&t&&(l.bc(0,"div",20),l.bc(1,"label",23),l.Qc(2),l.oc(3,"slice"),l.ac(),l.bc(4,"label",22),l.Qc(5),l.oc(6,"title"),l.oc(7,"slice"),l.ac(),l.ac()),2&t){var i=l.nc().$implicit;l.Ib(2),l.Rc(l.rc(3,2,i.post,0,6)),l.Ib(3),l.Rc(l.pc(6,6,l.rc(7,8,i.post,6,i.post.length)))}}function m(t,n){if(1&t&&(l.bc(0,"div",20),l.bc(1,"label",24),l.Qc(2),l.oc(3,"slice"),l.ac(),l.bc(4,"label",22),l.Qc(5),l.oc(6,"title"),l.oc(7,"slice"),l.ac(),l.ac()),2&t){var i=l.nc().$implicit;l.Ib(2),l.Rc(l.rc(3,2,i.post,0,9)),l.Ib(3),l.Rc(l.pc(6,6,l.rc(7,8,i.post,9,i.post.length)))}}function v(t,n){if(1&t){var i=l.cc();l.bc(0,"ion-slide"),l.bc(1,"img",28),l.jc("click",(function(){l.Hc(i);var t=n.$implicit;return l.nc(3).imageView(t.media)})),l.ac(),l.ac()}if(2&t){var c=n.$implicit,e=l.nc(3);l.Ib(1),l.xc("src","",e.basePath,"medias/",c.media,"",l.Jc)}}function x(t,n){if(1&t&&(l.bc(0,"div",25),l.bc(1,"ion-slides",26),l.Oc(2,v,2,2,"ion-slide",27),l.ac(),l.ac()),2&t){var i=l.nc().$implicit,c=l.nc();l.Ib(1),l.uc("options",c.sliderImgOption),l.Ib(1),l.uc("ngForOf",i.medias)}}var k=function(t,n,i){return{"card-challenge":t,"card-inform":n,"card-share":i}};function C(t,n){if(1&t&&(l.bc(0,"ion-list",10),l.bc(1,"ion-card",11),l.bc(2,"div",12),l.bc(3,"ion-item"),l.bc(4,"ion-avatar",13),l.Wb(5,"img",14),l.ac(),l.bc(6,"ion-label",15),l.bc(7,"h3",16),l.Qc(8),l.ac(),l.bc(9,"p",17),l.Qc(10),l.oc(11,"date"),l.ac(),l.ac(),l.ac(),l.Oc(12,f,8,12,"div",18),l.Oc(13,h,8,12,"div",18),l.Oc(14,m,8,12,"div",18),l.Oc(15,x,3,2,"div",19),l.ac(),l.ac(),l.ac()),2&t){var i=n.$implicit,c=l.nc();l.Ib(1),l.uc("ngClass",l.Bc(12,k,"#"==i.post[0],"!"==i.post[0],"@"==i.post[0])),l.Ib(4),l.wc("src","assets/avatar/",c.user.avatar,".png",l.Jc),l.Ib(3),l.Tc("",c.user.name," ",c.user.lastname,""),l.Ib(2),l.Rc(l.qc(11,9,i.created_at,"short")),l.Ib(2),l.uc("ngIf","@"==i.post[0]),l.Ib(1),l.uc("ngIf","#"==i.post[0]),l.Ib(1),l.uc("ngIf","!"==i.post[0]),l.Ib(1),l.uc("ngIf",0!==i.medias.length)}}function I(t,n){1&t&&(l.bc(0,"div",29),l.bc(1,"ion-badge",30),l.Qc(2,"No existen publicaciones"),l.ac(),l.ac())}var y,O,P,w=[{path:"",component:(y=function(){function t(n,i,c,e,o,a){_classCallCheck(this,t),this.auth=n,this.log=i,this.router=c,this.loadingService=e,this.share=o,this.modelcontroller=a,this.user=null,this.activity=[],this.basePath=""+r.a.HOST,this.sliderImgOption={initialSlide:0,zoom:!1},this.getToken()}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getToken",value:function(){var t=this;this.auth.gettokenLog().then((function(n){t.token=n,t.getAuthUser()}))}},{key:"getAuthUser",value:function(){var t=this;this.log.logdataInfData(this.token).subscribe((function(n){t.user=n,t.getActivity()}))}},{key:"getActivity",value:function(){var t=this;this.loadingService.loadingPresent({spinner:"circles"}),this.share.getActividadUsuario(this.user.id,this.token).subscribe((function(n){t.activity=n.data,t.paginaActual=n.meta.current_page,t.ultimaPage=n.meta.last_page,t.totalDt=n.meta.total,t.loadingService.loadingDismiss()}),(function(n){t.loadingService.loadingDismiss()}))}},{key:"loadData",value:function(t){var n=this;this.paginaActual=this.paginaActual+1,setTimeout((function(){if(n.activity.length>=n.totalDt)return t.target.complete(),void(n.infonitescroll.disabled=!0);n.share.getpostNextPage(n.paginaActual,n.token).subscribe((function(i){i.data.forEach((function(t){n.activity.push(t)})),t.target.complete()}))}),2e3)}},{key:"imageView",value:function(t){this.modelcontroller.create({component:s.a,componentProps:{img:this.basePath+"medias/"+t,type:1}}).then((function(t){return t.present()}))}},{key:"volver",value:function(){this.router.navigate(["/users/perfil"])}}]),t}(),y.\u0275fac=function(t){return new(t||y)(l.Vb(b.a),l.Vb(g.a),l.Vb(a.h),l.Vb(d.a),l.Vb(p.a),l.Vb(o.hb))},y.\u0275cmp=l.Pb({type:y,selectors:[["app-actividad"]],viewQuery:function(t,n){var i;1&t&&l.Wc(o.B,!0),2&t&&l.Dc(i=l.kc())&&(n.infonitescroll=i.first)},decls:15,vars:2,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"font-size","30px","color","white",3,"click"],["name","arrow-back-outline"],[1,"tituloInfo","logo"],[2,"color","white"],[1,"titulo"],["class","list-mdActividad",4,"ngFor","ngForOf"],["style","margin-top: 15px;text-align: center;",4,"ngIf"],["threshold","100px","position","bottom",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Cargando post..."],[1,"list-mdActividad"],[1,"card-posts",3,"ngClass"],[1,"boder"],["slot","start"],[3,"src"],[2,"margin","0"],[1,"name-user",2,"margin","0"],[2,"margin","0","font-size","12px"],["style","margin: 10px;",4,"ngIf"],["class","labelContent",4,"ngIf"],[2,"margin","10px"],[1,"content","content-share"],[1,"content-post"],[1,"content","content-challenge"],[1,"content","content-inform"],[1,"labelContent"],["pager","true",3,"options"],[4,"ngFor","ngForOf"],[1,"image-cont",3,"src","click"],[2,"margin-top","15px","text-align","center"],["color","warning"]],template:function(t,n){1&t&&(l.bc(0,"ion-header"),l.bc(1,"ion-toolbar",0),l.bc(2,"ion-buttons",1),l.jc("click",(function(){return n.volver()})),l.Wb(3,"ion-icon",2),l.ac(),l.bc(4,"ion-title",3),l.bc(5,"label",4),l.Qc(6,"MAGIN"),l.ac(),l.ac(),l.ac(),l.ac(),l.bc(7,"ion-content"),l.bc(8,"div"),l.bc(9,"h2",5),l.Qc(10,"Mi Actividad"),l.ac(),l.ac(),l.Oc(11,C,16,16,"ion-list",6),l.Oc(12,I,3,0,"div",7),l.bc(13,"ion-infinite-scroll",8),l.jc("ionInfinite",(function(t){return n.loadData(t)})),l.Wb(14,"ion-infinite-scroll-content",9),l.ac(),l.ac()),2&t&&(l.Ib(11),l.uc("ngForOf",n.activity),l.Ib(1),l.uc("ngIf",0===n.activity.length))},directives:[o.y,o.db,o.k,o.z,o.cb,o.s,c.l,c.m,o.B,o.C,o.G,o.l,c.k,o.E,o.f,o.F,o.W,o.V,o.i],pipes:[c.f,c.u,u.a],styles:[".titulo[_ngcontent-%COMP%]{font-size:19px;letter-spacing:1px;text-align:center;color:#002a68;font-weight:700;margin-top:10px;margin-bottom:0}.list-mdActividad[_ngcontent-%COMP%]{margin:0;padding:8px 0;background:var(--ion-item-background,var(--ion-background-color,rgba(134,133,133,.796078431372549)))}.card-posts[_ngcontent-%COMP%]{margin:5px 10px;border-radius:15px;box-shadow:none;border:1px solid #dadada}.card-share[_ngcontent-%COMP%]{border-left:4px solid #3880ff!important}.card-inform[_ngcontent-%COMP%]{border-left:4px solid #3dc2ff!important}.card-challenge[_ngcontent-%COMP%]{border-left:4px solid #eb445a!important}.name-user[_ngcontent-%COMP%]{font-size:17px;text-transform:capitalize;margin-bottom:0}.content-share[_ngcontent-%COMP%]{background-color:#3880ff}.content-inform[_ngcontent-%COMP%]{background-color:#3dc2ff}.content-challenge[_ngcontent-%COMP%]{background-color:#eb445a}.content[_ngcontent-%COMP%]{word-break:break-all;text-align:justify;color:#fff;padding:3px 5px;border-radius:10px;font-weight:500;font-size:13px}.labelContent[_ngcontent-%COMP%]{font-size:11px;background-color:rgba(255,254,254,.5686274509803921);color:#000;white-space:break-spaces;margin:10px 0 0}.image-cont[_ngcontent-%COMP%]{width:70%;padding:5px;margin-bottom:10px}.content-post[_ngcontent-%COMP%]{font-size:13px;font-weight:500;margin-left:5px;color:#000}.boder[_ngcontent-%COMP%]{margin-left:0;margin-right:0;padding-bottom:0}ion-slides[_ngcontent-%COMP%]{background:hsla(0,0%,59.6%,.12);border-radius:10px;width:90%;height:auto;border-radius:8px;margin-bottom:10px}"]}),y)}],_=((O=function t(){_classCallCheck(this,t)}).\u0275mod=l.Tb({type:O}),O.\u0275inj=l.Sb({factory:function(t){return new(t||O)},imports:[[a.j.forChild(w)],a.j]}),O),M=i("HsBR"),A=((P=function t(){_classCallCheck(this,t)}).\u0275mod=l.Tb({type:P}),P.\u0275inj=l.Sb({factory:function(t){return new(t||P)},imports:[[c.c,e.k,o.eb,_,M.a]]}),P)}}]);