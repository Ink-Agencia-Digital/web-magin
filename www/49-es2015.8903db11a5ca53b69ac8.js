(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{ExYR:function(e,o,t){"use strict";t.r(o),t.d(o,"OlvidocPageModule",(function(){return g}));var r=t("ofXK"),n=t("3Pt+"),i=t("TEn/"),c=t("tyNb"),a=t("mrSG"),s=t("fXoL"),l=t("VnPy"),b=t("3no8"),d=t("dNgK");function p(e,o){1&e&&(s.bc(0,"ion-item",12),s.bc(1,"ion-label",13),s.Qc(2,"Debe ser un correo valido"),s.ac(),s.ac())}const u=[{path:"",component:(()=>{class e{constructor(e,o,t,r,n){this.router=e,this.alertController=o,this.sharedService=t,this.loadingService=r,this.snackbar=n,this.emailPattern=/^[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})/,this.isSubmitted=!1}ngOnInit(){this.inicializarFormulario()}inicializarFormulario(){this.correoForm=new n.h({correo:new n.f("",[n.v.required,n.v.min(7),n.v.max(70),n.v.pattern(this.emailPattern)])})}RecuperarEmail(){if(!this.correoForm.valid)return this.mostrarmensaje("Los datos ingresados no son validos","Error","red-snackbar"),!1;{const e=this.correoForm.value;this.loadingService.loadingPresent({spinner:"circles"}),this.sharedService.forgetPassword(e.correo).subscribe(e=>Object(a.b)(this,void 0,void 0,(function*(){e?(this.loadingService.loadingDismiss(),this.presentAlert()):(this.loadingService.loadingDismiss(),this.mostrarmensaje("El email no se encuentra registrado en el sistema","Error","red-snackbar"))})))}}volverLogin(){this.router.navigateByUrl("/")}presentAlert(){return Object(a.b)(this,void 0,void 0,(function*(){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Cambio Contrase\xf1a",subHeader:"Cambio de contrase\xf1a",message:"Por favor revisa tu correo para recuperar tu cuenta",buttons:["OK"]});yield e.present()}))}mostrarmensaje(e,o,t){this.snackbar.open(e,o,{duration:2e3,panelClass:[t]})}}return e.\u0275fac=function(o){return new(o||e)(s.Vb(c.h),s.Vb(i.b),s.Vb(l.a),s.Vb(b.a),s.Vb(d.a))},e.\u0275cmp=s.Pb({type:e,selectors:[["app-olvidoc"]],decls:24,vars:3,consts:[[1,"ion-content-login"],[1,"butonCs"],["expand","block",1,"loginBtn2",3,"click"],[1,"solid"],[1,"title-css"],[1,"Subtitle-css"],[3,"formGroup"],[1,"ion-item-css"],["name","email","type","email","placeholder","Digita tu correo","formControlName","correo"],["class","form-text-error",4,"ngIf"],["padding",""],["type","submit","expand","block",1,"button-css",3,"disabled","click"],[1,"form-text-error"],[2,"color","#ff5722","font-size","12px"]],template:function(e,o){1&e&&(s.bc(0,"ion-content",0),s.Wb(1,"br"),s.Wb(2,"br"),s.Wb(3,"br"),s.bc(4,"div",1),s.bc(5,"ion-button",2),s.jc("click",(function(){return o.volverLogin()})),s.Qc(6," Ya Recuerdo La Contrase\xf1a "),s.ac(),s.ac(),s.Wb(7,"hr",3),s.Wb(8,"br"),s.Wb(9,"br"),s.bc(10,"div"),s.bc(11,"ion-card-title",4),s.Qc(12,"Recupera tu cuenta"),s.ac(),s.bc(13,"ion-card-subtitle",5),s.Qc(14,"\xbfOlvidaste tu contrase\xf1a? no te preocupes puedes recuperar tu cuenta solo envianos tu email "),s.ac(),s.bc(15,"div"),s.bc(16,"form",6),s.bc(17,"ion-item",7),s.Wb(18,"ion-input",8),s.ac(),s.Oc(19,p,3,0,"ion-item",9),s.bc(20,"div",10),s.bc(21,"ion-button",11),s.jc("click",(function(){return o.RecuperarEmail()})),s.Qc(22,"Recupera Tu Cuenta"),s.ac(),s.ac(),s.ac(),s.ac(),s.Wb(23,"hr",3),s.ac(),s.ac()),2&e&&(s.Ib(16),s.uc("formGroup",o.correoForm),s.Ib(3),s.uc("ngIf",!o.correoForm.controls.correo.valid&&(o.correoForm.controls.correo.touched||o.correoForm.controls.correo.dirty)),s.Ib(2),s.uc("disabled",!o.correoForm.valid))},directives:[i.s,i.j,i.p,i.o,n.w,n.q,n.i,i.E,i.D,i.pb,n.p,n.g,r.m,i.F],styles:["*[_ngcontent-%COMP%]{font-family:Proxima Nova!important}.coverBack[_ngcontent-%COMP%]{margin-top:30%;height:35%;background-color:hsla(0,0%,98%,.623)}.butonCs[_ngcontent-%COMP%]{margin-top:8%}hr.solid[_ngcontent-%COMP%]{border-top:3px solid rgba(253,251,251,.034)}.title-css[_ngcontent-%COMP%]{margin:0;padding:0 0 6px;font-size:20px;line-height:44px;letter-spacing:1px;font-weight:700}.Subtitle-css[_ngcontent-%COMP%], .title-css[_ngcontent-%COMP%]{color:#000;text-align:center}.Subtitle-css[_ngcontent-%COMP%]{font-size:12px;line-height:17px;padding:10px 25px;text-transform:uppercase;font-weight:500}.form-text-error[_ngcontent-%COMP%]{font-size:11px;color:#721c24;background:#f5c6cb;border-color:#f5c6cb;font-size:smaller;margin:0 auto 10px;width:85%;border-radius:8px}.button-css[_ngcontent-%COMP%], .form-text-error[_ngcontent-%COMP%]{letter-spacing:1px;transition:all .3s ease-in-out;text-decoration:none}.button-css[_ngcontent-%COMP%]{box-shadow:0 10px 30px 0 rgba(95,186,233,.4);font-size:11px;margin:10px 0 0 10%;text-align:center;border:none;display:inline-block;text-transform:uppercase;width:82%;height:35px;color:#fff;--background:#80b9f6!important}.ion-item-css[_ngcontent-%COMP%]{background-color:#afacac;border-radius:8px;color:#535353;text-decoration:none;font-size:13px;width:85%;border:1px solid #bbb;transition:all .3s ease-in-out;height:49px;text-align:center;margin:0 auto 10px}.loginBtn2[_ngcontent-%COMP%]{box-sizing:border-box;position:relative;font-size:11px;letter-spacing:1px;padding:0 15px 0 46px;border:none;text-align:left;line-height:34px;white-space:nowrap;border-radius:22px;color:#fff;margin:10px .2em 2% 20px;width:85%;--background:#002a68!important}"]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=s.Tb({type:e}),e.\u0275inj=s.Sb({factory:function(o){return new(o||e)},imports:[[c.j.forChild(u)],c.j]}),e})(),g=(()=>{class e{}return e.\u0275mod=s.Tb({type:e}),e.\u0275inj=s.Sb({factory:function(o){return new(o||e)},imports:[[r.c,n.k,i.eb,m,n.t]]}),e})()}}]);