"use strict";(self.webpackChunkheroesApp=self.webpackChunkheroesApp||[]).push([[926],{7926:(v,i,a)=>{a.r(i),a.d(i,{AuthModule:()=>A});var p=a(6895),u=a(3060),t=a(4650);let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"router-outlet"),t.qZA()())},dependencies:[u.lC],encapsulation:2}),e})();var d=a(6518),m=a(4859),l=a(9549),s=a(7392),c=a(4144);const f=[{path:"",component:g,children:[{path:"login",component:(()=>{class e{constructor(o,r){this.authService=o,this.router=r}onLogin(){this.authService.login("esvv08@gmail.com","12345").subscribe(o=>{this.router.navigate(["/"])})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.e),t.Y36(u.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-page"]],decls:18,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Nombre de usuario"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary",3,"click"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/new-account"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2," Login "),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5," Usuario "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9," Contrase\xf1a "),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"button",4),t.NdJ("click",function(){return r.onLogin()}),t.TgZ(12,"mat-icon"),t._uU(13," login "),t.qZA(),t._uU(14," Ingresar "),t.qZA(),t.TgZ(15,"div",5)(16,"a",6),t._uU(17," No tienes cuenta? "),t.qZA()()())},dependencies:[u.rH,m.lW,l.KE,l.hX,s.Hw,c.Nt],encapsulation:2}),e})()},{path:"new-account",component:(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register-page"]],decls:22,vars:0,consts:[[1,"flex","flex-column"],[1,"text-lg","mb-4"],["type","text","matInput","","placeholder","Usuario"],["type","text","matInput","","placeholder","Nombre"],["type","password","matInput","","placeholder","Contrase\xf1a"],["mat-button","","mat-flat-button","","color","primary"],[1,"flex","justify-content-end","mt-5"],["routerLink","/auth/login"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"span",1),t._uU(2," Registro "),t.qZA(),t.TgZ(3,"mat-form-field")(4,"mat-label"),t._uU(5," Usuario "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9," Nombre "),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13," Contrase\xf1a "),t.qZA(),t._UZ(14,"input",4),t.qZA(),t.TgZ(15,"button",5)(16,"mat-icon"),t._uU(17," person_add "),t.qZA(),t._uU(18," Crear cuenta "),t.qZA(),t.TgZ(19,"div",6)(20,"a",7),t._uU(21," Ya tienes cuenta? "),t.qZA()()())},dependencies:[u.rH,m.lW,l.KE,l.hX,s.Hw,c.Nt],encapsulation:2}),e})()},{path:"**",redirectTo:"login"}]}];let Z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.Bz.forChild(f),u.Bz]}),e})();var h=a(898);let A=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,Z,h.q]}),e})()}}]);