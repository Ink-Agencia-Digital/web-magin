(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"g/u+":function(t,n,e){"use strict";e.r(n),e.d(n,"TabsPageModule",(function(){return f}));var o=e("ofXK"),i=e("3Pt+"),a=e("TEn/"),c=e("tyNb"),s=e("mrSG"),r=e("mO1d"),l=e("fXoL"),b=e("7Vn+"),u=e("8rbx"),h=e("UsEe");function d(t,n){if(1&t&&(l.bc(0,"ion-badge"),l.Qc(1),l.ac()),2&t){const t=l.nc(2);l.Ib(1),l.Rc(t.msj.length)}}function m(t,n){if(1&t&&(l.bc(0,"ion-tab-button",10),l.Wb(1,"ion-icon",11),l.Oc(2,d,2,1,"ion-badge",12),l.Qc(3," Mensaje "),l.ac()),2&t){const t=l.nc();l.Ib(2),l.uc("ngIf",t.msj.length>0)}}const p=[{path:"",redirectTo:"/users/home",pathMatch:"full"},{path:"",component:(()=>{class t{constructor(t,n,e,o){this.auth=t,this.log=n,this.modelcontroller=e,this.chatS=o,this.usertk={}}ionViewWillEnter(){return Object(s.b)(this,void 0,void 0,(function*(){this.validarPremium()}))}ngOnInit(){this.chatS.var.subscribe(t=>{this.msj=this.chatS.getbadge()}),this.msj=this.chatS.getbadge()}validarPremium(){this.auth.gettokenLog().then(t=>{this.log.logdataInfData(t).subscribe(t=>{this.usertk=t})})}imageView(){this.modelcontroller.create({component:r.a}).then(t=>t.present())}}return t.\u0275fac=function(n){return new(n||t)(l.Vb(b.a),l.Vb(u.a),l.Vb(a.hb),l.Vb(h.a))},t.\u0275cmp=l.Pb({type:t,selectors:[["app-tabs"]],decls:15,vars:1,consts:[["slot","bottom"],["tab","entrena"],["src","/assets/brain.svg"],["tab","social"],["name","people-sharp"],["tab","home"],["name","home"],["tab","chat",4,"ngIf"],["tab","perfil"],["name","person-circle"],["tab","chat"],["name","mail-open"],[4,"ngIf"]],template:function(t,n){1&t&&(l.bc(0,"ion-tabs"),l.bc(1,"ion-tab-bar",0),l.bc(2,"ion-tab-button",1),l.Wb(3,"ion-icon",2),l.Qc(4," Entrena "),l.ac(),l.bc(5,"ion-tab-button",3),l.Wb(6,"ion-icon",4),l.Qc(7," Comunidad "),l.ac(),l.bc(8,"ion-tab-button",5),l.Wb(9,"ion-icon",6),l.Qc(10," Home "),l.ac(),l.Oc(11,m,4,1,"ion-tab-button",7),l.bc(12,"ion-tab-button",8),l.Wb(13,"ion-icon",9),l.Qc(14," Perfil "),l.ac(),l.ac(),l.ac()),2&t&&(l.Ib(11),l.uc("ngIf",1===n.usertk.premium))},directives:[a.Z,a.X,a.Y,a.z,o.m,a.i],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}"]}),t})(),children:[{path:"home",loadChildren:()=>Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"zuTJ")).then(t=>t.HomePageModule)},{path:"chat",loadChildren:()=>e.e(20).then(e.bind(null,"yTs8")).then(t=>t.ChatPageModule)},{path:"social",loadChildren:()=>Promise.all([e.e(0),e.e(71)]).then(e.bind(null,"2Z8B")).then(t=>t.SocialPageModule)},{path:"cart",loadChildren:()=>e.e(24).then(e.bind(null,"xesm")).then(t=>t.CartPageModule)},{path:"buscar",loadChildren:()=>e.e(23).then(e.bind(null,"h/3f")).then(t=>t.BuscarPageModule)},{path:"perfil",loadChildren:()=>Promise.all([e.e(0),e.e(61)]).then(e.bind(null,"DAI9")).then(t=>t.PerfilPageModule)},{path:"entrena",loadChildren:()=>Promise.all([e.e(0),e.e(21)]).then(e.bind(null,"y1I3")).then(t=>t.EntrenaPageModule)},{path:"notifications",loadChildren:()=>e.e(48).then(e.bind(null,"0c+Z")).then(t=>t.NotificationsPageModule)}]}];let g=(()=>{class t{}return t.\u0275mod=l.Tb({type:t}),t.\u0275inj=l.Sb({factory:function(n){return new(n||t)},imports:[[c.j.forChild(p)],c.j]}),t})(),f=(()=>{class t{}return t.\u0275mod=l.Tb({type:t}),t.\u0275inj=l.Sb({factory:function(n){return new(n||t)},imports:[[o.c,i.k,a.eb,g]]}),t})()},mO1d:function(t,n,e){"use strict";e.d(n,"a",(function(){return p}));var o=e("mrSG"),i=e("fXoL"),a=e("TEn/"),c=e("7Vn+"),s=e("8rbx"),r=e("h7Fw"),l=e("tyNb"),b=e("ofXK");const u=["slider"];function h(t,n){if(1&t){const t=i.cc();i.bc(0,"ion-button",7),i.jc("click",(function(){i.Hc(t);const n=i.nc(2);return n.diagnosticoRedirect(n.usertk.profile.id,n.usertk.id)})),i.Qc(1,"Hacer Diagnostico"),i.ac()}}function d(t,n){if(1&t){const t=i.cc();i.bc(0,"ion-button",7),i.jc("click",(function(){i.Hc(t);const n=i.nc(2);return n.recomedacionesRedirect(n.usertk.id)})),i.Qc(1,"Comprar un Paquete"),i.ac()}}function m(t,n){if(1&t&&(i.bc(0,"div",5),i.bc(1,"h3"),i.Qc(2," \xa1Cambiate a Premium! "),i.ac(),i.Wb(3,"br"),i.Wb(4,"br"),i.Oc(5,h,2,0,"ion-button",6),i.Wb(6,"br"),i.Wb(7,"br"),i.Oc(8,d,2,0,"ion-button",6),i.Wb(9,"br"),i.Wb(10,"br"),i.ac()),2&t){const t=i.nc();i.Ib(5),i.uc("ngIf",0===t.usertk.surveyed),i.Ib(3),i.uc("ngIf",1===t.usertk.surveyed)}}let p=(()=>{class t{constructor(t,n,e,o,i,a,c){this.navParams=t,this.modalCRTL=n,this.auth=e,this.log=o,this.pObjecto=i,this.alertController=a,this.router=c,this.sliderOpts={zoom:{maxRatio:5}}}ngOnInit(){this.auth.gettokenLog().then(t=>{this.log.logdataInfData(t).subscribe(t=>{this.usertk=t})}),this.img=this.navParams.get("img")}diagnosticoRedirect(t,n){let e={idprofile:t,idUser:n};this.modalCRTL.dismiss(),this.pObjecto.setData(e),this.router.navigate(["/users/perfil/diagnostico-inicio/"])}alertDespuesTiempo2(t){return Object(o.b)(this,void 0,void 0,(function*(){this.alert=yield this.alertController.create({cssClass:"my-customback",header:"",buttons:[{text:"",cssClass:"secondaryClose"}]}),yield this.alert.present()}))}recomedacionesRedirect(t){this.pObjecto.setData({idUser:t}),this.modalCRTL.dismiss(),this.router.navigate(["/users/perfil/recomendaciones/"])}zoom(t){let n=this.slider.nativeElement.swiper.zoom;t?n.in():n.out()}close(){this.router.navigate(["/users/home/"]),this.modalCRTL.dismiss()}}return t.\u0275fac=function(n){return new(n||t)(i.Vb(a.jb),i.Vb(a.hb),i.Vb(c.a),i.Vb(s.a),i.Vb(r.a),i.Vb(a.b),i.Vb(l.h))},t.\u0275cmp=i.Pb({type:t,selectors:[["app-info-premium"]],viewQuery:function(t,n){var e;1&t&&i.Wc(u,!0,i.m),2&t&&i.Dc(e=i.kc())&&(n.slider=e.first)},decls:6,vars:1,consts:[["fullscreen","",1,"modal-wrapper"],["lines","none","text-center","",1,"close-fake"],["fill","clear","color","light",3,"click"],["name","close","slot","start"],["class","itemback","style","padding-top: 0px;margin-bottom: 4px;margin-left: 10px;margin-right: 50px;",4,"ngIf"],[1,"itemback",2,"padding-top","0px","margin-bottom","4px","margin-left","10px","margin-right","50px"],["class","buttonCss",3,"click",4,"ngIf"],[1,"buttonCss",3,"click"]],template:function(t,n){1&t&&(i.bc(0,"ion-content",0),i.bc(1,"ion-item",1),i.bc(2,"ion-button",2),i.jc("click",(function(){return n.close()})),i.Wb(3,"ion-icon",3),i.Qc(4," close "),i.ac(),i.ac(),i.Oc(5,m,11,2,"div",4),i.ac()),2&t&&(i.Ib(5),i.uc("ngIf",n.usertk))},directives:[a.s,a.E,a.j,a.z,b.m],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.close-fake[_ngcontent-%COMP%]{--background:transparent;margin-top:40px}.close-fake[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:2rem}ion-content[_ngcontent-%COMP%]{--background:rgba(44,39,45,0.863)}ion-slides[_ngcontent-%COMP%]{height:80%}.buttonCss[_ngcontent-%COMP%]{box-shadow:0 10px 30px 0 rgba(95,187,233,.151);font-size:9px;letter-spacing:1px;margin:10px 0 0 20px;text-align:center;border:rgba(20,110,155,.267);display:inline-block;text-transform:uppercase;width:85%;height:35px;color:#fff;--background:#002a68!important}.buttonCss[_ngcontent-%COMP%], .itemback[_ngcontent-%COMP%]{text-decoration:none;transition:all .3s ease-in-out}.itemback[_ngcontent-%COMP%]{background-color:hsla(0,0%,96.5%,.5215686274509804);border:none;color:#000;border:2px solid hsla(0,0%,100%,.4745098039215686);border-radius:8px;--background:hsla(0,0%,100%,0.438)!important;width:93%}h3[_ngcontent-%COMP%]{margin-top:15px;text-align:center;font-size:20px;color:#002a68}"]}),t})()}}]);