function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{EYix:function(n,t,e){"use strict";e.r(t),e.d(t,"RecomendacionesPageModule",(function(){return v}));var o,a,i,c=e("ofXK"),r=e("3Pt+"),s=e("TEn/"),l=e("tyNb"),u=e("bXRV"),h=e("fXoL"),b=e("7Vn+"),p=e("8rbx"),f=e("VnPy"),d=e("3no8"),m=[{path:"",component:(o=function(){function n(t,e,o,a,i,c){_classCallCheck(this,n),this.router=t,this.auth=e,this.log=o,this.share=a,this.loadingService=i,this.payPal=c,this.panelOpenState=!1,this.payuform={},this.disablePaymentButton=!1,this.paymentAmount="2500000",this.currency="COP",this.currencyIcon="$",this.getToken()}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.loadingService.loadingPresent({spinner:"circles"}),this.auth.gettokenLog().then((function(t){n.log.logdataInfData(t).subscribe((function(t){n.usertk=t,n.loadingService.loadingDismiss()}),(function(t){n.loadingService.loadingDismiss()}))}))}},{key:"getToken",value:function(){var n=this;this.auth.gettokenLog().then((function(t){n.token=t}))}},{key:"payWithPaypal",value:function(){var n=this;this.payPal.init({PayPalEnvironmentProduction:"",PayPalEnvironmentSandbox:"AfPfIzEjMKZDvJhjO9Akrp7pv6Dk450Tp_5ZxfCzNSwhVVX_CCtOYPRmtV-dNqnPoISJs2fhJ7CS5ymG"}).then((function(){n.payPal.prepareToRender("PayPalEnvironmentSandbox",new u.b({acceptCreditCards:!0,languageOrLocale:"es-CO",merchantPrivacyPolicyURL:"",merchantUserAgreementURL:""})).then((function(){var t=new u.c("3.33","USD","Description","sale");n.payPal.renderSinglePaymentUI(t).then((function(n){alert("res "+n)}),(function(n){}))}),(function(){}))}),(function(){}))}},{key:"hacerpremium",value:function(){var n=this;this.share.editpremium(1,this.usertk.id).subscribe((function(t){n.share.var.next("update"),n.router.navigate(["/users/perfil"])}))}},{key:"volver",value:function(){this.router.navigate(["/users/home"])}}]),n}(),o.\u0275fac=function(n){return new(n||o)(h.Vb(l.h),h.Vb(b.a),h.Vb(p.a),h.Vb(f.a),h.Vb(d.a),h.Vb(u.a))},o.\u0275cmp=h.Pb({type:o,selectors:[["app-recomendaciones"]],decls:27,vars:2,consts:[[1,"ion-toolbar-ccs"],["slot","start",2,"font-size","30px","color","white",3,"click"],["name","arrow-back-outline"],[1,"tituloInfo","logo"],[2,"color","white"],[1,"welcome-card"],["src","/assets/paypal.png"],["expand","full","color","success",3,"click"]],template:function(n,t){1&n&&(h.bc(0,"ion-header"),h.bc(1,"ion-toolbar",0),h.bc(2,"ion-buttons",1),h.jc("click",(function(){return t.volver()})),h.Wb(3,"ion-icon",2),h.ac(),h.bc(4,"ion-title",3),h.bc(5,"label",4),h.Qc(6,"MAGIN"),h.ac(),h.ac(),h.ac(),h.ac(),h.bc(7,"ion-content"),h.bc(8,"ion-grid"),h.bc(9,"ion-row"),h.bc(10,"ion-col"),h.Qc(11," Pagar con PayPal "),h.ac(),h.ac(),h.ac(),h.bc(12,"ion-card",5),h.Wb(13,"ion-img",6),h.bc(14,"ion-card-header"),h.bc(15,"ion-card-subtitle"),h.Qc(16,"MAGIN"),h.ac(),h.bc(17,"ion-card-title"),h.Qc(18,"Contenido Premium"),h.ac(),h.bc(19,"ion-row"),h.bc(20,"ion-col"),h.Qc(21," Total "),h.ac(),h.bc(22,"ion-col"),h.Qc(23),h.ac(),h.ac(),h.ac(),h.bc(24,"ion-card-content"),h.bc(25,"ion-button",7),h.jc("click",(function(){return t.payWithPaypal()})),h.Qc(26,"Pagar con Paypal"),h.ac(),h.ac(),h.ac(),h.ac()),2&n&&(h.Ib(23),h.Tc(" ",t.currencyIcon," ",t.paymentAmount," "))},directives:[s.y,s.db,s.k,s.z,s.cb,s.s,s.x,s.P,s.r,s.l,s.A,s.n,s.o,s.p,s.m,s.j],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.center[_ngcontent-%COMP%]{display:block;margin-left:auto;margin-right:auto;width:50%}.button-css-options[_ngcontent-%COMP%]{box-shadow:0 10px 30px 0 rgba(95,187,233,.151);font-family:Proxima;font-size:9px;letter-spacing:1px;margin:10px 0 0 5%;text-align:center;border:rgba(20,110,155,.267);text-decoration:none;display:inline-block;text-transform:uppercase;transition:all .3s ease-in-out;width:85%;height:35px;color:#fff;--background:#002a68!important}.welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]}),o)}],g=((a=function n(){_classCallCheck(this,n)}).\u0275mod=h.Tb({type:a}),a.\u0275inj=h.Sb({factory:function(n){return new(n||a)},imports:[[l.j.forChild(m)],l.j]}),a),y=e("7EHt"),P=e("HsBR"),v=((i=function n(){_classCallCheck(this,n)}).\u0275mod=h.Tb({type:i}),i.\u0275inj=h.Sb({factory:function(n){return new(n||i)},imports:[[c.c,r.k,s.eb,g,y.b,P.a]]}),i)}}]);