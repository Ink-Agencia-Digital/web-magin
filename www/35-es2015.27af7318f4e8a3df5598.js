(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"8g1P":function(t,i,a){"use strict";a.r(i),a.d(i,"AudioplayerPageModule",(function(){return F}));var n=a("ofXK"),e=a("3Pt+"),o=a("TEn/"),c=a("tyNb"),r=a("mrSG"),s=a("HlzF"),l=a("fXoL"),d=a("h7Fw"),b=a("J2Na"),m=a("VnPy"),u=a("0Wod"),h=a("KB8S"),f=a("3no8"),p=a("dNgK"),v=a("7Vn+");const g=["range"];function y(t,i){if(1&t){const t=l.cc();l.bc(0,"ion-item",15),l.jc("click",(function(){l.Hc(t);const a=i.$implicit;return l.nc().start(a)})),l.bc(1,"div",16),l.bc(2,"ion-badge",17),l.Qc(3),l.ac(),l.ac(),l.ac()}if(2&t){const t=i.$implicit,a=l.nc();l.Ib(2),l.uc("color",t===a.activetrack?"info":"medium"),l.Ib(1),l.Rc(a.audioname)}}function k(t,i){if(1&t){const t=l.cc();l.bc(0,"ion-button",26),l.jc("click",(function(){l.Hc(t);const i=l.nc().$implicit;return l.nc(2).toggleplayer(!0,i)})),l.Wb(1,"ion-icon",30),l.ac()}}function w(t,i){if(1&t){const t=l.cc();l.bc(0,"ion-button",26),l.jc("click",(function(){l.Hc(t);const i=l.nc().$implicit;return l.nc(2).toggleplayer(!0,i)})),l.Wb(1,"ion-icon",31),l.ac()}}function W(t,i){if(1&t){const t=l.cc();l.bc(0,"ion-col",19),l.bc(1,"ion-button",26),l.jc("click",(function(){return l.Hc(t),l.nc(2).prev()})),l.Wb(2,"ion-icon",27),l.ac(),l.Oc(3,k,2,0,"ion-button",28),l.Oc(4,w,2,0,"ion-button",28),l.bc(5,"ion-button",26),l.jc("click",(function(){return l.Hc(t),l.nc(2).next()})),l.Wb(6,"ion-icon",29),l.ac(),l.ac()}if(2&t){const t=l.nc(2);l.Ib(3),l.uc("ngIf",!t.isPlaying),l.Ib(1),l.uc("ngIf",t.isPlaying)}}function O(t,i){if(1&t){const t=l.cc();l.bc(0,"div"),l.bc(1,"ion-button",33),l.jc("click",(function(){l.Hc(t);const i=l.nc(2).$implicit,a=l.nc(2).$implicit;return l.nc(3).startVideo(a.name,i.video,i.order,null==a.resources?null:a.resources.length)})),l.Qc(2," Continuar "),l.Wb(3,"ion-icon",34),l.ac(),l.ac()}}function P(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,O,4,0,"div",14),l.ac()),2&t){const t=l.nc().$implicit;l.Ib(1),l.uc("ngIf",t.video)}}function C(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,P,2,1,"div",14),l.ac()),2&t){const t=i.$implicit;l.Ib(1),l.uc("ngIf",2===t.order)}}function x(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,C,2,1,"div",32),l.ac()),2&t){const t=l.nc().$implicit;l.Ib(1),l.uc("ngForOf",t.resources)}}function M(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,x,2,1,"div",14),l.ac()),2&t){const t=i.index,a=l.nc(3);l.Ib(1),l.uc("ngIf",t===a.indexLessons)}}function _(t,i){if(1&t&&(l.bc(0,"div"),l.Oc(1,M,2,1,"div",32),l.ac()),2&t){const t=i.$implicit;l.Ib(1),l.uc("ngForOf",t.lessons)}}function j(t,i){if(1&t){const t=l.cc();l.bc(0,"ion-footer"),l.bc(1,"ion-toolbar",18),l.bc(2,"ion-row"),l.bc(3,"ion-col",19),l.bc(4,"ion-label",20),l.Qc(5),l.ac(),l.ac(),l.bc(6,"ion-col",21),l.bc(7,"ion-range",22,23),l.jc("ngModelChange",(function(i){return l.Hc(t),l.nc().progress=i}))("touched",(function(){return l.Hc(t),l.nc().seek()}))("mouseup",(function(){return l.Hc(t),l.nc().seek()})),l.ac(),l.ac(),l.Oc(9,W,7,2,"ion-col",24),l.Oc(10,_,2,1,"div",25),l.ac(),l.ac(),l.ac()}if(2&t){const t=l.nc();l.Ib(5),l.Rc(t.audioname),l.Ib(2),l.uc("ngModel",t.progress),l.Ib(2),l.uc("ngForOf",t.aud),l.Ib(1),l.uc("ngForOf",t.cursos)}}const I=[{path:"",component:(()=>{class t{constructor(t,i,a,n,e,o,c,r,s){this.router=t,this.pObjecto=i,this.PObjectAux=a,this.share=n,this.pObjectoVideo=e,this.PObjecIndex=o,this.loadingService=c,this.snackbar=r,this.auth=s,this.player=null,this.isPlaying=!1,this.progress=0,this.cursos=[],this.menajeNuevo="",this.img="https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png",this.comentariosGeneral=[],this.autoClose=!0,this.exam=0,this.getToken()}ngOnInit(){}getToken(){this.auth.gettokenLog().then(t=>{this.token=t,this.loadPage()})}loadPage(){let t=this.pObjecto.getNavData();t&&(this.share.guardarLeccionActiva(t),this.data=t.audioInfo,this.audioname=t.name,this.orderID=t.orderid,this.tam=t.tm,this.aud=[],this.aud.push(this.data)),this.activetrack=this.aud,this.share.verorder().then(t=>{t===this.tam?this.share.varExam.next("Listo para el examen"):this.share.updateorder(this.orderID)}),this.indexLessons=this.PObjecIndex.getData();const i=this.pObjectoVideo.getNavData();this.color=i.color,this.data=i.infoCurso,this.userinfo=i.userInf,this.course=i.course.name,this.courseID=i.infoCurso.id,this.getCourse()}getCourse(){this.loadingService.loadingPresent({spinner:"circles"}),this.share.getCursoEspecifico(this.data.id,this.token).subscribe(t=>Object(r.b)(this,void 0,void 0,(function*(){this.info=t.data,this.share.getComentariosCurso(this.data.id,this.token).subscribe(t=>{this.comentariosGeneral=t.data,this.share.getCursosUsuario(this.userinfo.id,this.token).subscribe(t=>{this.loadingService.loadingDismiss();let i=t.data.filter(t=>t.id===this.courseID);i.forEach(t=>{this.CourseLessonID=t.id,this.progreso=t.pivot.progress}),this.share.hayorder().then(t=>{t?this.share.verorder().then(t=>{this.orderStorage=t}):this.share.iniciorder()}),this.cursos=i},t=>{this.loadingService.loadingDismiss()})},t=>{this.loadingService.loadingDismiss()})})),t=>{this.loadingService.loadingDismiss()})}start(t){const i=this;this.player&&this.player.stop(),this.player=new s.Howl({src:[t],html5:!0,onplay:()=>{this.isPlaying=!0,this.activetrack=t,this.updateProgress()},onend:()=>{this.player.stop()},onloaderror:function(){i.mostrarmensaje("Error al cargar el audio","Error","red-snackbar")}}),this.player.play()}toggleplayer(t,i){this.player?(this.isPlaying=!t,t?this.player.pause():null===this.player?(console.group(i),this.start(i)):this.player.play()):this.mostrarmensaje("Error al cargar el audio","Error","red-snackbar")}next(){let t=this.aud.indexOf(this.activetrack);this.start(t!=this.aud.length-1?this.aud[t+1]:this.aud[0])}prev(){let t=this.aud.indexOf(this.activetrack);this.start(t>0?this.aud[t-1]:this.aud[this.aud.length-1])}seek(){let t=+this.range.value,i=this.player.duration();this.player.seek(i*(t/100))}updateProgress(){let t=this.player.seek();this.progress=t/this.player.duration()*100||0,setTimeout(()=>{this.updateProgress()},1e3)}startVideo(t,i,a,n){this.pObjectoVideo.setData({name:t,vidInfo:i,orderid:a,tm:n}),this.router.navigate(["/users/entrena/vercurso/verleccion/vidplayer/"])}anterior(){this.pObjecto.setData(this.PObjectAux.getNavData()),this.pObjectoVideo.setData(this.PObjectAux.getNavData()),this.router.navigate(["/users/entrena/vercurso/verleccion/"])}mostrarmensaje(t,i,a){this.snackbar.open(t,i,{duration:2e3,panelClass:[a]})}}return t.\u0275fac=function(i){return new(i||t)(l.Vb(c.h),l.Vb(d.a),l.Vb(b.a),l.Vb(m.a),l.Vb(u.a),l.Vb(h.a),l.Vb(f.a),l.Vb(p.a),l.Vb(v.a))},t.\u0275cmp=l.Pb({type:t,selectors:[["app-audioplayer"]],viewQuery:function(t,i){var a;1&t&&l.Wc(g,!0),2&t&&l.Dc(a=l.kc())&&(i.range=a.first)},decls:112,vars:2,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"color","white"],[3,"click"],[1,"tituloInfo","logo"],[2,"color","white"],["lines","none"],["button","",3,"click",4,"ngFor","ngForOf"],[1,"coverBack"],[1,"container"],[1,"rain"],[1,"drop"],[1,"waves"],[1,"splash"],[1,"particles"],[4,"ngIf"],["button","",3,"click"],[2,"width","100%"],[1,"title",3,"color"],[1,"toolbarColor"],["size","12",1,"ion-text-center"],["color","light"],["size","12"],["max","100","color","dark",3,"ngModel","ngModelChange","touched","mouseup"],["range",""],["size","12","class","ion-text-center",4,"ngFor","ngForOf"],[4,"ngFor","ngForIndex","ngForOf"],["fill","clear","color","dark",3,"click"],["slot","icon-only","name","play-back",2,"color","black"],["fill","clear","color","dark",3,"click",4,"ngIf"],["slot","icon-only","name","play-forward",2,"color","black"],["slot","icon-only","name","play",2,"color","black"],["slot","icon-only","name","pause",2,"color","black"],[4,"ngFor","ngForOf"],[1,"footer-dis-bot2",3,"click"],["name","caret-forward-outline"]],template:function(t,i){1&t&&(l.bc(0,"ion-header"),l.bc(1,"ion-toolbar",0),l.bc(2,"ion-buttons",1),l.bc(3,"ion-back-button",2),l.jc("click",(function(){return i.anterior()})),l.ac(),l.ac(),l.bc(4,"ion-title",3),l.bc(5,"label",4),l.Qc(6,"MAGIN"),l.ac(),l.ac(),l.ac(),l.ac(),l.bc(7,"ion-content"),l.bc(8,"ion-list",5),l.Oc(9,y,4,2,"ion-item",6),l.ac(),l.bc(10,"div",7),l.bc(11,"div",8),l.bc(12,"div",9),l.Wb(13,"div",10),l.bc(14,"div",11),l.Wb(15,"div"),l.Wb(16,"div"),l.ac(),l.Wb(17,"div",12),l.bc(18,"div",13),l.Wb(19,"div"),l.Wb(20,"div"),l.Wb(21,"div"),l.Wb(22,"div"),l.ac(),l.ac(),l.bc(23,"div",9),l.Wb(24,"div",10),l.bc(25,"div",11),l.Wb(26,"div"),l.Wb(27,"div"),l.ac(),l.Wb(28,"div",12),l.bc(29,"div",13),l.Wb(30,"div"),l.Wb(31,"div"),l.Wb(32,"div"),l.Wb(33,"div"),l.ac(),l.ac(),l.bc(34,"div",9),l.Wb(35,"div",10),l.bc(36,"div",11),l.Wb(37,"div"),l.Wb(38,"div"),l.ac(),l.Wb(39,"div",12),l.bc(40,"div",13),l.Wb(41,"div"),l.Wb(42,"div"),l.Wb(43,"div"),l.Wb(44,"div"),l.ac(),l.ac(),l.bc(45,"div",9),l.Wb(46,"div",10),l.bc(47,"div",11),l.Wb(48,"div"),l.Wb(49,"div"),l.ac(),l.Wb(50,"div",12),l.bc(51,"div",13),l.Wb(52,"div"),l.Wb(53,"div"),l.Wb(54,"div"),l.Wb(55,"div"),l.ac(),l.ac(),l.bc(56,"div",9),l.Wb(57,"div",10),l.bc(58,"div",11),l.Wb(59,"div"),l.Wb(60,"div"),l.ac(),l.Wb(61,"div",12),l.bc(62,"div",13),l.Wb(63,"div"),l.Wb(64,"div"),l.Wb(65,"div"),l.Wb(66,"div"),l.ac(),l.ac(),l.bc(67,"div",9),l.Wb(68,"div",10),l.bc(69,"div",11),l.Wb(70,"div"),l.Wb(71,"div"),l.ac(),l.Wb(72,"div",12),l.bc(73,"div",13),l.Wb(74,"div"),l.Wb(75,"div"),l.Wb(76,"div"),l.Wb(77,"div"),l.ac(),l.ac(),l.bc(78,"div",9),l.Wb(79,"div",10),l.bc(80,"div",11),l.Wb(81,"div"),l.Wb(82,"div"),l.ac(),l.Wb(83,"div",12),l.bc(84,"div",13),l.Wb(85,"div"),l.Wb(86,"div"),l.Wb(87,"div"),l.Wb(88,"div"),l.ac(),l.ac(),l.bc(89,"div",9),l.Wb(90,"div",10),l.bc(91,"div",11),l.Wb(92,"div"),l.Wb(93,"div"),l.ac(),l.Wb(94,"div",12),l.bc(95,"div",13),l.Wb(96,"div"),l.Wb(97,"div"),l.Wb(98,"div"),l.Wb(99,"div"),l.ac(),l.ac(),l.bc(100,"div",9),l.Wb(101,"div",10),l.bc(102,"div",11),l.Wb(103,"div"),l.Wb(104,"div"),l.ac(),l.Wb(105,"div",12),l.bc(106,"div",13),l.Wb(107,"div"),l.Wb(108,"div"),l.Wb(109,"div"),l.Wb(110,"div"),l.ac(),l.ac(),l.ac(),l.ac(),l.ac(),l.Oc(111,j,11,4,"ion-footer",14)),2&t&&(l.Ib(9),l.uc("ngForOf",i.aud),l.Ib(102),l.uc("ngIf",i.activetrack))},directives:[o.y,o.db,o.k,o.g,o.h,o.cb,o.s,o.G,n.l,n.m,o.E,o.i,o.w,o.P,o.r,o.F,o.L,o.ob,e.p,e.s,o.j,o.z],styles:[".coverBack[_ngcontent-%COMP%]{height:120%;margin:0;display:flex;justify-content:center;align-items:center;background-color:rgba(33,65,153,.623)}.toolbarColor[_ngcontent-%COMP%]{--ion-background-color:linear-gradient(162deg,rgba(114,150,247,0.603) 20%,rgba(33,65,153,0.623))}.container[_ngcontent-%COMP%]{width:100%;height:100%;min-width:600px;max-width:800px;max-height:500px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,1fr)}.row[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.rain[_ngcontent-%COMP%]{position:relative;width:100%;height:100%}.rain[_ngcontent-%COMP%]:first-of-type{--duration:2.7s;--delay:1s;transform:translate(10%,10%) scale(.9)}.rain[_ngcontent-%COMP%]:nth-of-type(2){--duration:2.1s;--delay:1.2s;transform:translate(-20%,40%) scale(1.3)}.rain[_ngcontent-%COMP%]:nth-of-type(3){--duration:2.3s;--delay:2s;transform:translateY(50%) scale(1.1)}.rain[_ngcontent-%COMP%]:nth-of-type(4){--duration:2s;--delay:4s;transform:translateY(-10%) scale(1.2)}.rain[_ngcontent-%COMP%]:nth-of-type(5){--duration:2.5s;--delay:0s;transform:translate(10%) scale(.9)}.rain[_ngcontent-%COMP%]:nth-of-type(6){--duration:2s;--delay:2.7s;transform:translate(-20%) scale(1)}.rain[_ngcontent-%COMP%]:nth-of-type(7){--duration:1.8s;--delay:1.3s;transform:translate(20%,-40%) scale(1.2)}.rain[_ngcontent-%COMP%]:nth-of-type(8){--duration:2.2s;--delay:0s;transform:translate(20%) scale(1)}.rain[_ngcontent-%COMP%]:nth-of-type(9){--duration:2s;--delay:0.5s;transform:translateY(-10%) scale(1.3)}.drop[_ngcontent-%COMP%]{background-color:#fff;width:3px;height:100px;position:absolute;top:calc(50% - 100px);left:calc(50% - 1.5px);-webkit-animation-name:fall;animation-name:fall;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@-webkit-keyframes fall{0%{transform:translateY(-120vh)}45%{transform:translateY(0);opacity:1}46%{opacity:0}to{opacity:0}}@keyframes fall{0%{transform:translateY(-120vh)}45%{transform:translateY(0);opacity:1}46%{opacity:0}to{opacity:0}}.waves[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;border:3px solid #fff;-webkit-animation-name:spread;animation-name:spread;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.waves[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){-webkit-animation-delay:calc(var(--delay) + .3s);animation-delay:calc(var(--delay) + .3s);-webkit-animation-timing-function:linear;animation-timing-function:linear}@-webkit-keyframes spread{0%{transform:scale(0);opacity:1}40%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:0}}@keyframes spread{0%{transform:scale(0);opacity:1}40%{transform:scale(0);opacity:1}to{transform:scale(1);opacity:0}}.splash[_ngcontent-%COMP%]{position:absolute;top:10%;bottom:50%;left:35%;right:35%;border-radius:8px;-webkit-clip-path:polygon(7% 100%,5% 95%,3% 80%,11% 50%,17% 38%,23% 44%,30% 53%,37% 28%,40% 29%,45% 43%,51% 53%,59% 36%,64% 22%,67% 23%,70% 34%,72% 46%,79% 37%,83% 37%,93% 61%,96% 76%,96% 94%,94% 100%);clip-path:polygon(7% 100%,5% 95%,3% 80%,11% 50%,17% 38%,23% 44%,30% 53%,37% 28%,40% 29%,45% 43%,51% 53%,59% 36%,64% 22%,67% 23%,70% 34%,72% 46%,79% 37%,83% 37%,93% 61%,96% 76%,96% 94%,94% 100%);background-color:#fff;transform-origin:bottom;-webkit-animation-name:splash;animation-name:splash;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}@-webkit-keyframes splash{0%{transform:scale(.3,0)}49%{transform:scale(.3,0)}50%{transform:scale(.3)}60%{transform:scaleX(.7)}90%{transform:scaleY(0)}to{transform:scaleY(0)}}@keyframes splash{0%{transform:scale(.3,0)}49%{transform:scale(.3,0)}50%{transform:scale(.3)}60%{transform:scaleX(.7)}90%{transform:scaleY(0)}to{transform:scaleY(0)}}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;border-radius:100%;background-color:#fff;-webkit-animation-duration:var(--duration);animation-duration:var(--duration);-webkit-animation-delay:var(--delay);animation-delay:var(--delay);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:ease;animation-timing-function:ease;-webkit-animation-fill-mode:backwards;animation-fill-mode:backwards}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child{width:7px;height:7px;top:50%}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:first-child, .particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){left:50%;-webkit-animation-name:jumpLeft;animation-name:jumpLeft}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){width:5px;height:5px;top:30%;-webkit-animation-delay:calc(var(--delay) + .1s);animation-delay:calc(var(--delay) + .1s)}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){width:3px;height:3px;top:20%;left:70%;-webkit-animation-delay:calc(var(--delay) + .15s);animation-delay:calc(var(--delay) + .15s)}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3), .particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){-webkit-animation-name:jumpRight;animation-name:jumpRight}.particles[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){width:5px;height:5px;top:30%;left:50%;-webkit-animation-delay:calc(var(--delay) + .3s);animation-delay:calc(var(--delay) + .3s)}@-webkit-keyframes jumpLeft{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(-50px,-90px) scale(1)}to{transform:translate(-60px) scale(.1)}}@keyframes jumpLeft{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(-50px,-90px) scale(1)}to{transform:translate(-60px) scale(.1)}}@-webkit-keyframes jumpRight{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(30px,-80px) scale(1)}to{transform:translate(50px) scale(.1)}}@keyframes jumpRight{0%{transform:translate(0) scale(0)}45%{transform:translate(0) scale(0)}60%{transform:translate(30px,-80px) scale(1)}to{transform:translate(50px) scale(.1)}}.footer-dis-bot2[_ngcontent-%COMP%]{--background:#002a68;display:list-item}*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.title[_ngcontent-%COMP%]{white-space:break-spaces;font-weight:500;padding:5px;font-size:14px;width:100%}.list-md[_ngcontent-%COMP%]{padding-top:0!important;padding-bottom:0!important}"]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=l.Tb({type:t}),t.\u0275inj=l.Sb({factory:function(i){return new(i||t)},imports:[[c.j.forChild(I)],c.j]}),t})(),F=(()=>{class t{}return t.\u0275mod=l.Tb({type:t}),t.\u0275inj=l.Sb({factory:function(i){return new(i||t)},imports:[[n.c,e.k,o.eb,D]]}),t})()}}]);