function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Ppmg:function(e,t,i){"use strict";i.r(t),i.d(t,"ExamenPageModule",(function(){return y}));var n=i("ofXK"),r=i("3Pt+"),a=i("TEn/"),o=i("tyNb"),s=i("mrSG"),c=function e(){_classCallCheck(this,e)},u=i("fXoL"),l=i("h7Fw"),h=i("9bwK"),p=i("J2Na"),f=i("0Wod"),b=i("KB8S"),g=i("VnPy"),d=i("3no8"),m=i("7Vn+"),v=i("1as6");function x(e,t){if(1&e){var i=u.cc();u.bc(0,"ion-item"),u.bc(1,"ion-checkbox",14),u.jc("ngModelChange",(function(e){return u.Hc(i),t.$implicit.select=e}))("click",(function(){u.Hc(i);var e=t.$implicit,n=u.nc().$implicit;return u.nc().obtenerVal(n.p,e,n.co)})),u.ac(),u.bc(2,"ion-label"),u.Qc(3),u.oc(4,"capitalize"),u.ac(),u.ac()}if(2&e){var n=t.$implicit;u.Ib(1),u.uc("ngModel",n.select),u.Ib(2),u.Rc(u.pc(4,2,n.dt))}}function k(e,t){if(1&e){var i=u.cc();u.bc(0,"div"),u.bc(1,"ion-card",7),u.bc(2,"div",8),u.bc(3,"ion-badge",9),u.Qc(4,"Examen Final"),u.ac(),u.ac(),u.bc(5,"ion-card-subtitle",10),u.Qc(6),u.oc(7,"capitalize"),u.ac(),u.bc(8,"ion-card-content",11),u.Oc(9,x,5,4,"ion-item",6),u.bc(10,"ion-button",12),u.jc("click",(function(){return u.Hc(i),u.nc().calificar()})),u.Wb(11,"ion-icon",13),u.Qc(12,"Enviar mi respuesta "),u.ac(),u.ac(),u.ac(),u.ac()}if(2&e){var n=t.$implicit,r=u.nc();u.Ib(6),u.Rc(u.pc(7,3,n.p)),u.Ib(3),u.uc("ngForOf",n.op),u.Ib(1),u.uc("disabled",r.tama!==r.totalExam.length)}}var C,P,w,O=[{path:"",component:(C=function(){function e(t,i,n,r,a,o,s,c,u,l){_classCallCheck(this,e),this.pObjecto=t,this.pObjectExamen=i,this.pObjectAux=n,this.pObjectVideo=r,this.pObjectIndex=a,this.alertController=o,this.share=s,this.router=c,this.loadingService=u,this.auth=l,this.examenDT=null,this.dt=[],this.cursos=[],this.getToken()}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getToken",value:function(){var e=this;this.auth.gettokenLog().then((function(t){e.token=t,e.loadPage()}))}},{key:"loadPage",value:function(){this.totalExam=[];var e=this.pObjectExamen.getNavData();this.examenDT=e.examen.exam,this.tama=this.examenDT.length,this.indexLection=this.pObjectIndex.getData();var t=this.pObjectAux.getNavData();t&&(this.color=t.color,this.data=t.infoCurso,this.userinfo=t.userInf,this.course=t.course.name,this.courseID=t.infoCurso.id),this.getCourse()}},{key:"getCourse",value:function(){var e=this;this.loadingService.loadingPresent({spinner:"circles"}),this.share.getCursoEspecifico(this.data.id,this.token).subscribe((function(t){return Object(s.b)(e,void 0,void 0,regeneratorRuntime.mark((function e(){var i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.info=t.data,this.share.getComentariosCurso(this.data.id,this.token).subscribe((function(e){i.comentariosGeneral=e.data,i.share.getCursosUsuario(i.userinfo.id,i.token).subscribe((function(e){var t=e.data.filter((function(e){return e.id===i.courseID}));t.forEach((function(e){i.CourseLessonID=e.id,i.progreso=e.pivot.progress})),i.cursos=t,i.cursos.forEach((function(e){i.numLecciones=e.lessons.length})),i.loadingService.loadingDismiss()}),(function(e){i.loadingService.loadingDismiss()}))}),(function(e){i.loadingService.loadingDismiss()}));case 1:case"end":return e.stop()}}),e,this)})))}),(function(t){e.loadingService.loadingDismiss()}))}},{key:"obtenerVal",value:function(e,t,i){var n=this;this.valorChange=t,this.examenDT.filter((function(r){if(0===n.totalExam.length)n.totalExam.push({pregunta:e,val:t,corec:i});else if(n.totalExam.length>0)if(r.p===e){var a={pregunta:e,val:t,corec:i},o=n.totalExam.map((function(e){return e.pregunta})).indexOf(e);n.totalExam[o]=a}else if(r.p!==e){var s={pregunta:e,val:t,corec:i},c=n.totalExam.map((function(e){return e.pregunta})).indexOf(e);-1===c?n.totalExam.push({pregunta:e,val:t,corec:i}):n.totalExam[c]=s}})),this.examenDT.length>0&&this.examenDT.filter((function(t){return t.p===e})).forEach((function(e){e.op.forEach((function(e){e.id!==t.id&&(e.select=!1)}))}))}},{key:"calificar",value:function(){var e=0,t=0;this.totalExam.forEach((function(i){i.val.id===+i.corec?e+=1:t+=1})),this.alertDespuesTiempo(e,t),this.pObjecto.setData(this.pObjectAux.getNavData()),this.pObjectVideo.setData(this.pObjectAux.getNavData()),this.pObjectExamen.setData(this.pObjectAux.getNavData()),this.guardaProgreso(this.progreso),this.router.navigateByUrl("/users/entrena/vercurso")}},{key:"alertDespuesTiempo",value:function(e,t){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,this.alertController.create({header:"Felicidades",subHeader:"Completaste el examen tu puntaje es",message:"Correcto: "+e+"\n\nIncorrecto: "+t,buttons:["Acepto"]});case 2:return this.alert=i.sent,i.next=5,this.alert.present();case 5:case"end":return i.stop()}}),i,this)})))}},{key:"alertProgreso",value:function(){return Object(s.b)(this,void 0,void 0,regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Felicidades",subHeader:"Terminaste la lecci\xf3n",message:"Pasa a la siguiente lecci\xf3n para incrementar tu progreso",buttons:["Acepto"]});case 2:return this.alert=e.sent,e.next=5,this.alert.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"guardaProgreso",value:function(e){var t=this;this.user=new c;var i=e;if(this.newProgress=1/this.numLecciones,i>=.6&&i<1&&3==this.numLecciones)this.user.progress=1,this.share.actualizarProgreso(this.userinfo.id,this.courseID,this.user.progress,this.token).subscribe((function(){t.alertProgreso()}));else if(0==i&&i<1)this.user.progress=parseFloat(this.newProgress.toFixed(2)),this.share.actualizarProgreso(this.userinfo.id,this.courseID,this.user.progress,this.token).subscribe((function(){})),this.alertProgreso();else if(0!==i&&i<1){var n;this.newProgress=this.newProgress+i,n=parseFloat(this.newProgress.toFixed(2)),this.user.progress=n,this.share.actualizarProgreso(this.userinfo.id,this.courseID,this.user.progress,this.token).subscribe((function(){t.alertProgreso()}))}}}]),e}(),C.\u0275fac=function(e){return new(e||C)(u.Vb(l.a),u.Vb(h.a),u.Vb(p.a),u.Vb(f.a),u.Vb(b.a),u.Vb(a.b),u.Vb(g.a),u.Vb(o.h),u.Vb(d.a),u.Vb(m.a))},C.\u0275cmp=u.Pb({type:C,selectors:[["app-examen"]],decls:9,vars:1,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"color","white"],["defaultHref","/users/entrena/cursos-categorias"],[1,"tituloInfo","logo"],[1,"color-blue",2,"color","white"],["align","center"],[4,"ngFor","ngForOf"],["align","center",2,"margin","0"],[2,"margin","15px 0px 0px 0px","text-align-last","center"],["color","primary",1,"badge-title"],[2,"color","black","margin-top","4%","margin-top","10px","font-size","16px"],[2,"text-transform","capitalize","color","black"],[1,"btn-submit",3,"disabled","click"],["name","pencil-outline",2,"margin-left","5px"],["slot","end","color","primary",3,"ngModel","ngModelChange","click"]],template:function(e,t){1&e&&(u.bc(0,"ion-header"),u.bc(1,"ion-toolbar",0),u.bc(2,"ion-buttons",1),u.Wb(3,"ion-back-button",2),u.ac(),u.bc(4,"ion-title",3),u.bc(5,"label",4),u.Qc(6,"MAGIN"),u.ac(),u.ac(),u.ac(),u.ac(),u.bc(7,"ion-content",5),u.Oc(8,k,13,5,"div",6),u.ac()),2&e&&(u.Ib(8),u.uc("ngForOf",t.examenDT))},directives:[a.y,a.db,a.k,a.g,a.h,a.cb,a.s,n.l,a.l,a.i,a.o,a.m,a.j,a.z,a.E,a.q,a.c,r.p,r.s,a.F],pipes:[v.a],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.badge-title[_ngcontent-%COMP%]{font-size:18px;padding:10px;border-radius:7px;font-weight:500;background-color:#002a68}.btn-submit[_ngcontent-%COMP%]{margin-top:15px;--background:#002a68}"]}),C)}],D=((P=function e(){_classCallCheck(this,e)}).\u0275mod=u.Tb({type:P}),P.\u0275inj=u.Sb({factory:function(e){return new(e||P)},imports:[[o.j.forChild(O)],o.j]}),P),j=i("HsBR"),y=((w=function e(){_classCallCheck(this,e)}).\u0275mod=u.Tb({type:w}),w.\u0275inj=u.Sb({factory:function(e){return new(e||w)},imports:[[n.c,r.k,a.eb,D,j.a]]}),w)}}]);