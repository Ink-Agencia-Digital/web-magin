function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/Ite":function(t,e,n){"use strict";n.r(e),n.d(e,"CursosCategoriasPageModule",(function(){return V}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("tyNb"),a=n("mrSG"),s=n("AytR"),u=n("fXoL"),l=n("VnPy"),g=n("h7Fw"),d=n("jhN1"),p=n("3no8"),b=n("dNgK"),h=n("te5A"),f=n("mtRb"),m=n("B7Rs"),x=n("7Vn+"),k=n("m/P+");function v(t,e){if(1&t&&(u.bc(0,"ion-row"),u.Wb(1,"iframe",19,20),u.ac()),2&t){var n=u.nc(2);u.Ib(1),u.uc("src",n.video,u.Ic)}}function C(t,e){1&t&&(u.bc(0,"ion-row",21),u.bc(1,"ion-badge",22),u.Qc(2,"No existe video para la categoria"),u.ac(),u.ac())}function P(t,e){if(1&t){var n=u.cc();u.bc(0,"ion-row",23),u.bc(1,"div",24),u.bc(2,"ion-button",25),u.jc("click",(function(){return u.Hc(n),u.nc(2).descargarPDF()})),u.Wb(3,"ion-icon",26),u.Qc(4," M\xe1s informaci\xf3n "),u.ac(),u.ac(),u.ac()}}function O(t,e){1&t&&(u.bc(0,"ion-row",21),u.bc(1,"ion-badge",22),u.Qc(2,"No existe informaci\xf3n adicional para mostrar"),u.ac(),u.ac())}function w(t,e){if(1&t){var n=u.cc();u.bc(0,"div"),u.bc(1,"ion-card",33),u.bc(2,"img",34),u.jc("click",(function(){u.Hc(n);var t=u.nc().$implicit;return u.nc(3).verCurso(t)})),u.ac(),u.bc(3,"ion-card-subtitle",35),u.jc("click",(function(){u.Hc(n);var t=u.nc().$implicit;return u.nc(3).verCurso(t)})),u.Qc(4),u.ac(),u.bc(5,"ion-button",36),u.jc("click",(function(){u.Hc(n);var t=u.nc().$implicit;return u.nc(3).agregarCurso(t)})),u.bc(6,"ion-icon",37),u.Qc(7," Agregar Curso"),u.ac(),u.ac(),u.ac(),u.ac()}if(2&t){var r=u.nc().$implicit,o=u.nc(3);u.Ib(2),u.xc("src","",o.basePath,"",r.photo,"",u.Jc),u.Ib(2),u.Rc(r.name)}}function _(t,e){if(1&t&&(u.bc(0,"ion-col",32),u.Oc(1,w,8,3,"div",15),u.ac()),2&t){var n=e.$implicit;u.Ib(1),u.uc("ngIf",0!==n.users.length||0===n.users.length)}}function M(t,e){if(1&t&&(u.bc(0,"ion-row"),u.bc(1,"ion-col",27),u.bc(2,"ion-list",28),u.bc(3,"div",29),u.bc(4,"ion-label",30),u.Qc(5,"Listado de cursos"),u.ac(),u.ac(),u.bc(6,"div"),u.bc(7,"ion-grid"),u.bc(8,"ion-row"),u.Oc(9,_,2,1,"ion-col",31),u.ac(),u.ac(),u.ac(),u.ac(),u.ac(),u.ac()),2&t){var n=u.nc(2);u.Ib(9),u.uc("ngForOf",n.cursosUser)}}function y(t,e){1&t&&(u.bc(0,"ion-row",38),u.bc(1,"ion-badge",22),u.Qc(2,"La categor\xeda no tiene cursos disponibles"),u.ac(),u.ac())}var I=function(t){return{color:t}};function j(t,e){if(1&t&&(u.bc(0,"div",9),u.bc(1,"ion-grid",10),u.bc(2,"div",11),u.bc(3,"ion-row"),u.bc(4,"ion-title",12),u.bc(5,"h1",13),u.bc(6,"strong"),u.Qc(7),u.ac(),u.ac(),u.ac(),u.ac(),u.bc(8,"ion-row"),u.bc(9,"ion-title",12),u.bc(10,"div",14),u.bc(11,"p"),u.Qc(12),u.ac(),u.ac(),u.ac(),u.ac(),u.Oc(13,v,3,1,"ion-row",15),u.Oc(14,C,3,0,"ion-row",16),u.Oc(15,P,5,0,"ion-row",17),u.Oc(16,O,3,0,"ion-row",16),u.ac(),u.Oc(17,M,10,1,"ion-row",15),u.Oc(18,y,3,0,"ion-row",18),u.ac(),u.ac()),2&t){var n=u.nc();u.Ib(5),u.uc("ngStyle",u.zc(9,I,n.color)),u.Ib(2),u.Rc(n.coursetk.name.split(":")[0]),u.Ib(5),u.Sc(" ",n.coursetk.name.split(":")[1]," "),u.Ib(1),u.uc("ngIf",n.video),u.Ib(1),u.uc("ngIf",!n.video),u.Ib(1),u.uc("ngIf",n.coursetk.pdf),u.Ib(1),u.uc("ngIf",!n.coursetk.pdf),u.Ib(1),u.uc("ngIf",n.cursosUser.length>0),u.Ib(1),u.uc("ngIf",0===n.cursosUser.length)}}var z,S,N,U=function(t){return{"background-color":t}},D=[{path:"",component:(z=function(){function t(e,n,r,o,i,c,a,u,l,g,d,p){_classCallCheck(this,t),this.router=e,this.share=n,this.pObjecto=r,this.alertController=o,this.sanitizer=i,this.loadingService=c,this.snackbar=a,this.fileOpener=u,this.diagnostic=l,this.transfer=g,this.auth=d,this.iab=p,this.autoClose=!0,this.usertk=null,this.coursetk=null,this.cursos=[],this.cursosUser=[],this.cursosU=[],this.msj=[],this.cursoId=[],this.basePath=""+s.a.HOST,this.getToken()}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"getToken",value:function(){var t=this;this.auth.gettokenLog().then((function(e){t.token=e,t.loadPage()}))}},{key:"loadPage",value:function(){var t=this.pObjecto.getNavData();this.color=t.color,this.usertk=t.userInf,this.userIDName=t.userInf.id,this.coursetk=t.infoCurso,this.video=this.coursetk.video?this.sanitizer.bypassSecurityTrustResourceUrl(this.coursetk.video+"?title=0&byline=0&portrait=0&sidedock=0"):null,this.getcursos(this.usertk.id,this.coursetk.id),this.share.getCursosUsuario(this.userIDName,this.token)}},{key:"getcursos",value:function(t,e){var n=this;this.loadingService.loadingPresent({spinner:"circles"}),this.share.getCursosCategorias(e,t,this.token).subscribe((function(e){n.share.getCursosUsuario(t,n.token).subscribe((function(t){if(t.data.length>0){var r=[];t.data.map((function(t){var n=e.find((function(e){return e.id===t.id}));n&&r.push(n)})),n.cursosUser=r,n.cursosU=n.cursosUser}else n.mostrarmensaje("Actualmente no cuentas con cursos disponibles","Error","red-snackbar");n.loadingService.loadingDismiss()}),(function(t){n.loadingService.loadingDismiss()}))}),(function(t){n.loadingService.loadingDismiss()}))}},{key:"openChat",value:function(){this.router.navigate(["/users/chat"])}},{key:"verCurso",value:function(t){0!==this.usertk.premium?(this.pObjecto.setData({infoCurso:t,userInf:this.usertk,course:this.coursetk,color:this.color}),this.router.navigate(["/users/entrena/vercurso"])):this.alertConfirmarPago(this.usertk.id)}},{key:"agregarCurso",value:function(t){var e=this;0!==this.usertk.premium?this.share.getCursosUsuario(this.userIDName,this.token).subscribe((function(n){n.data.forEach((function(n){n.id==t.id&&(e.cursoId=n.id)})),e.cursoId!=t.id||0==e.cursoId.length?e.share.agregarCurso(e.usertk.id,t.id,e.token).subscribe((function(t){e.loadingService.showMessageCoins("50")})):e.alertDespuesTiempo()})):this.alertConfirmarPago(this.usertk.id)}},{key:"alertDespuesTiempo",value:function(){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:"UPS!",subHeader:"Ya tienes el curso agregado",message:"No puedes agregar varias veces un mismo curso",buttons:["Acepto"]});case 2:return this.alert=t.sent,t.next=5,this.alert.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"descargarPDF",value:function(){var t=this;if(0!==this.usertk.premium)if(this.coursetk.pdf)if(".pdf"==this.coursetk.pdf.substr(this.coursetk.pdf.length-4)){var e=this.basePath+this.coursetk.pdf;this.diagnostic.requestExternalStorageAuthorization().then((function(n){t.transfer.create().download(e,cordova.file.externalDataDirectory+"MAGIN.pdf").then((function(e){t.fileOpener.open(e.toURL(),"application/pdf").then((function(){return!1})).catch((function(e){return t.mostrarmensaje("Error descargando el archivo","Error","red-snackbar")}))}),(function(e){t.mostrarmensaje("Error descargando el archivo","Error","red-snackbar")}))})).catch((function(e){t.mostrarmensaje("Error descargando el archivo","Error","red-snackbar")}))}else this.mostrarmensaje("El archivo no es un pdf","Error","red-snackbar");else this.mostrarmensaje("La categor\xeda no tiene mas informaci\xf3n","Error","red-snackbar");else this.alertConfirmarPago(this.usertk.id)}},{key:"filtrar",value:function(t){var e=t.target.value;this.cursosUser=this.cursosU.filter((function(t){return t.name.indexOf(e)>-1}))}},{key:"mostrarmensaje",value:function(t,e,n){this.snackbar.open(t,e,{duration:2e3,panelClass:[n]})}},{key:"alertConfirmarPago",value:function(t){return Object(a.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"\xa1Suscribete al contenido Premium!",message:"Adquiere aqu\xed tu plan de entrenamiento",buttons:[{text:"Confirmar",cssClass:"confirm-category",handler:function(){n.iab.create("https://portalpagos.venkisports.com/?user="+t,"_system"),n.alert.dismiss(!0),n.router.navigate(["/users/entrena"])}},{text:"Cancelar",cssClass:"cancel-category",handler:function(){n.alert.dismiss(!1),n.router.navigate(["/users/entrena"])}}]});case 2:return this.alert=e.sent,e.next=5,this.alert.present();case 5:case"end":return e.stop()}}),e,this)})))}}]),t}(),z.\u0275fac=function(t){return new(t||z)(u.Vb(c.h),u.Vb(l.a),u.Vb(g.a),u.Vb(i.b),u.Vb(d.b),u.Vb(p.a),u.Vb(b.a),u.Vb(h.a),u.Vb(f.a),u.Vb(m.a),u.Vb(x.a),u.Vb(k.a))},z.\u0275cmp=u.Pb({type:z,selectors:[["app-cursos-categorias"]],decls:14,vars:4,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"color","white"],["defaultHref","/users/entrena"],[1,"tituloInfo","logo"],[2,"color","white"],[1,"semi-circulo-2",3,"ngStyle"],["name","search-outline"],["placeholder","Buscar",3,"keyup"],["class","divBack",4,"ngIf"],[1,"divBack"],[2,"padding","5px 0px","text-align","-webkit-center"],[1,"div-content"],[1,"title-gen"],[1,"title-cat",3,"ngStyle"],[1,"title-emb"],[4,"ngIf"],["style","place-content: center;padding-bottom: 10px;",4,"ngIf"],["style","place-content: center;",4,"ngIf"],["style","place-content: center;padding-bottom: 10px;margin-top: 15px;",4,"ngIf"],["frameborder","0","allow","autoplay;","width","100%","height","100%","webkitallowfullscreen","","mozallowfullscreen","","allowfullscreen","",3,"src"],["playerVim",""],[2,"place-content","center","padding-bottom","10px"],["color","danger"],[2,"place-content","center"],[2,"margin","5px 0px"],[3,"click"],["name","download-outline"],["size","12",2,"padding","5px 0px"],["lines","none"],[2,"text-align-last","center"],[2,"font-size","17px","font-weight","bold","text-transform","uppercase","color","#002a68"],["size","6",4,"ngFor","ngForOf"],["size","6"],[2,"margin","0 0 20px 0"],[2,"height","132px",3,"src","click"],[1,"description-course",3,"click"],["expand","block",2,"margin","0",3,"click"],["name","add-circle"],[2,"place-content","center","padding-bottom","10px","margin-top","15px"]],template:function(t,e){1&t&&(u.bc(0,"ion-header"),u.bc(1,"ion-toolbar",0),u.bc(2,"ion-buttons",1),u.Wb(3,"ion-back-button",2),u.ac(),u.bc(4,"ion-title",3),u.bc(5,"label",4),u.Qc(6,"MAGIN"),u.ac(),u.ac(),u.ac(),u.ac(),u.bc(7,"ion-content"),u.Wb(8,"div",5),u.bc(9,"ion-item"),u.bc(10,"ion-label"),u.Wb(11,"ion-icon",6),u.ac(),u.bc(12,"ion-input",7),u.jc("keyup",(function(t){return e.filtrar(t)})),u.ac(),u.ac(),u.Oc(13,j,19,11,"div",8),u.ac()),2&t&&(u.Ib(8),u.uc("ngStyle",u.zc(2,U,e.color)),u.Ib(5),u.uc("ngIf",e.coursetk))},directives:[i.y,i.db,i.k,i.g,i.h,i.cb,i.s,r.n,i.E,i.F,i.z,i.D,i.pb,r.m,i.x,i.P,i.i,i.j,i.r,i.G,r.l,i.l,i.o],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.msg-input[_ngcontent-%COMP%]{width:100%;border:1px solid var(--ion-color-medium);border-radius:10px;background:#fff;resize:none;padding-left:10px;padding-right:10px}.title-gen[_ngcontent-%COMP%]{display:contents}.semi-circulo-2[_ngcontent-%COMP%]{width:30px;height:60px;position:absolute;border-radius:0 100px 100px 0;margin-top:20%}.title-cat[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;margin:0 0 1px}.title-emb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-transform:lowercase;text-align:center;font-size:16px}.title-list[_ngcontent-%COMP%]{font-size:18px;margin-bottom:10px}.title-item-list[_ngcontent-%COMP%]{font-size:15px}.title-emb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:first-letter{text-transform:uppercase;font-size:15px}.logo[_ngcontent-%COMP%]{background-color:#002a68}.msg-btn[_ngcontent-%COMP%]{--padding-start:8.5em;--padding-end:0.5em}.divBack[_ngcontent-%COMP%]{background-color:#fff}.icon-photo[_ngcontent-%COMP%]{border-radius:50%!important;margin-top:10px;height:1.7em!important;width:1.7em!important}.usernamecss[_ngcontent-%COMP%]{color:#444;padding:0 0 6px;font-size:9px;line-height:44px;margin:2px 0 0;text-align:left}.mensajecss[_ngcontent-%COMP%], .usernamecss[_ngcontent-%COMP%]{letter-spacing:1px;font-weight:700}.mensajecss[_ngcontent-%COMP%]{font-size:7px;line-height:12px;margin:0;padding:7px;text-transform:uppercase;text-align:justify}.divBack[_ngcontent-%COMP%]{background-color:rgba(248,249,250,.527)}.rowcss[_ngcontent-%COMP%]{padding:0;align-items:center}.cursoName[_ngcontent-%COMP%]{color:#444;margin:0;padding:0 6px 6px 0;font-size:12px;line-height:44px;letter-spacing:1px;font-weight:700;text-transform:uppercase}.lessonName[_ngcontent-%COMP%]{letter-spacing:-.1px}.contentName[_ngcontent-%COMP%], .lessonName[_ngcontent-%COMP%]{font-size:7px;line-height:12px;margin:0;padding:7px;text-transform:uppercase;font-weight:700}.contentName[_ngcontent-%COMP%]{letter-spacing:1px}hr.dashed[_ngcontent-%COMP%]{border-top:3px dotted #bbb}.contentNamedesc[_ngcontent-%COMP%]{font-size:7px;line-height:12px;margin:0;text-transform:lowercase;letter-spacing:-.1px;font-weight:700;text-align:justify}.child-item[_ngcontent-%COMP%], .section[_ngcontent-%COMP%]{--ion-item-background:#f3f2f1}.child-item[_ngcontent-%COMP%], .section[_ngcontent-%COMP%], .section-active[_ngcontent-%COMP%]{--padding-start:8px;--inner-padding-end:8px;margin-bottom:2px}.section-active[_ngcontent-%COMP%]{--ion-item-background:linear-gradient(162deg,rgba(114,150,247,0.836) 20%,rgba(33,65,153,0.712)),url(/assets/img-back.jpg) 0 0/100% 100% no-repeat}.lecciones-active[_ngcontent-%COMP%]{--ion-item-background:linear-gradient(162deg,rgba(114,150,247,0.541) 20%,rgba(33,65,153,0.589)),url(/assets/img-back.jpg) 0 0/100% 100% no-repeat;--padding-start:8px;--inner-padding-end:8px;margin-bottom:2px}.itemCssF[_ngcontent-%COMP%]{--background:var(--ion-item-background,var(--ion-background-color,hsla(0,4%,95.1%,0.4745098039215686)))!important}.list-md[_ngcontent-%COMP%]{background:transparent}.ion-item-css2[_ngcontent-%COMP%]{background-color:hsla(0,0%,96.5%,.5215686274509804);border:none;color:#000;text-decoration:none;font-size:13px;width:85%;border:2px solid hsla(0,0%,100%,.4745098039215686);transition:all .3s ease-in-out;height:55px;text-align:center;margin:0 auto 10px;border-radius:8px;--background:hsla(0,0%,100%,0.562)!important}.title-css[_ngcontent-%COMP%]{padding:0 0 6px;font-size:11px;line-height:44px;text-align:center}.Subtitle-css[_ngcontent-%COMP%], .title-css[_ngcontent-%COMP%]{color:#080808;margin:0;letter-spacing:1px;font-weight:700}.Subtitle-css[_ngcontent-%COMP%]{font-size:7px;line-height:12px;padding:7px;text-transform:uppercase}.title-courses[_ngcontent-%COMP%]{font-size:15px;padding:5px 10px;font-weight:500;background-color:#002a68}.description-course[_ngcontent-%COMP%]{color:#000;white-space:break-spaces;padding:10px;font-weight:700;height:60px;font-size:15px}.div-content[_ngcontent-%COMP%]{width:90%;background-color:#e2e2e2;border-radius:10px;border:1px solid #d0d0d0;border-left:4px solid #002a68;padding:10px;margin-top:5px}"]}),z)}],E=((N=function t(){_classCallCheck(this,t)}).\u0275mod=u.Tb({type:N}),N.\u0275inj=u.Sb({factory:function(t){return new(t||N)},imports:[[c.j.forChild(D)],c.j]}),N),V=((S=function t(){_classCallCheck(this,t)}).\u0275mod=u.Tb({type:S}),S.\u0275inj=u.Sb({factory:function(t){return new(t||S)},imports:[[r.c,o.k,i.eb,E]]}),S)}}]);