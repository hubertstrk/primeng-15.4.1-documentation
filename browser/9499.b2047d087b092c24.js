"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[9499],{63668:(h,d,i)=>{i.d(d,{p:()=>m});var a=i(92012),c=i(41571);let m=(()=>{class s extends a.s{}return s.\u0275fac=function(){let p;return function(u){return(p||(p=c.n5z(s)))(u||s)}}(),s.\u0275cmp=c.Xpm({type:s,selectors:[["PlusIcon"]],standalone:!0,features:[c.qOj,c.jDz],decls:6,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0_306_11939)"],["d","M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z","fill","currentColor"],["id","clip0_306_11939"],["width","14","height","14","fill","white"]],template:function(e,u){1&e&&(c.O4$(),c.TgZ(0,"svg",0)(1,"g",1),c._UZ(2,"path",2),c.qZA(),c.TgZ(3,"defs")(4,"clipPath",3),c._UZ(5,"rect",4),c.qZA()()()),2&e&&(c.Tol(u.getClassNames()),c.uIk("aria-label",u.ariaLabel)("aria-hidden",u.ariaHidden)("role",u.role))},encapsulation:2}),s})()},92025:(h,d,i)=>{i.d(d,{p:()=>a.p});var a=i(63668)},46544:(h,d,i)=>{i.d(d,{N:()=>m});var a=i(41571);const c=["*"];let m=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=a.Xpm({type:s,selectors:[["app-developmentsection"]],ngContentSelectors:c,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(e,u){1&e&&(a.F$t(),a.TgZ(0,"div",0),a._UZ(1,"i",1),a._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),a.qZA(),a.Hsn(3))},encapsulation:2}),s})()},89684:(h,d,i)=>{i.r(d),i.d(d,{BlockUIDemoModule:()=>Q});var a=i(36895),c=i(10359),m=i(68476),s=i(9716),p=i(52240),e=i(41571);const u=["mask"];function y(t,l){1&t&&e.GkF(0)}const _=function(t){return{"p-blockui-document":t,"p-blockui p-component-overlay p-component-overlay-enter":!0}},v=function(t){return{display:t}},D=["*"];let f=(()=>{class t{constructor(o,n,r,g,R){this.document=o,this.el=n,this.cd=r,this.config=g,this.renderer=R,this.autoZIndex=!0,this.baseZIndex=0}get blocked(){return this._blocked}set blocked(o){this.mask&&this.mask.nativeElement?o?this.block():this.unblock():this._blocked=o}ngAfterViewInit(){if(this.target&&!this.target.getBlockableElement)throw"Target of BlockUI must implement BlockableUI interface"}ngAfterContentInit(){this.templates.forEach(o=>{o.getType(),this.contentTemplate=o.template})}block(){this._blocked=!0,this.target?(this.target.getBlockableElement().appendChild(this.mask.nativeElement),this.target.getBlockableElement().style.position="relative"):this.renderer.appendChild(this.document.body,this.mask.nativeElement),this.autoZIndex&&s.P9.set("modal",this.mask.nativeElement,this.baseZIndex+this.config.zIndex.modal)}unblock(){this.mask&&(this.animationEndListener=this.renderer.listen(this.mask.nativeElement,"animationend",this.destroyModal.bind(this)),p.p.addClass(this.mask.nativeElement,"p-component-overlay-leave"))}destroyModal(){this._blocked=!1,this.mask&&(p.p.removeClass(this.mask.nativeElement,"p-component-overlay-leave"),s.P9.clear(this.mask.nativeElement),this.renderer.appendChild(this.el.nativeElement,this.mask.nativeElement)),this.unbindAnimationEndListener(),this.cd.markForCheck()}unbindAnimationEndListener(){this.animationEndListener&&this.mask&&(this.animationEndListener(),this.animationEndListener=null)}ngOnDestroy(){this.unblock(),this.destroyModal()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(a.K0),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(m.b4),e.Y36(e.Qsj))},t.\u0275cmp=e.Xpm({type:t,selectors:[["p-blockUI"]],contentQueries:function(o,n,r){if(1&o&&e.Suo(r,m.jx,4),2&o){let g;e.iGM(g=e.CRH())&&(n.templates=g)}},viewQuery:function(o,n){if(1&o&&e.Gf(u,5),2&o){let r;e.iGM(r=e.CRH())&&(n.mask=r.first)}},hostAttrs:[1,"p-element"],inputs:{target:"target",autoZIndex:"autoZIndex",baseZIndex:"baseZIndex",styleClass:"styleClass",blocked:"blocked"},ngContentSelectors:D,decls:4,vars:9,consts:[[3,"ngClass","ngStyle"],["mask",""],[4,"ngTemplateOutlet"]],template:function(o,n){1&o&&(e.F$t(),e.TgZ(0,"div",0,1),e.Hsn(2),e.YNc(3,y,1,0,"ng-container",2),e.qZA()),2&o&&(e.Tol(n.styleClass),e.Q6J("ngClass",e.VKq(5,_,!n.target))("ngStyle",e.VKq(7,v,n.blocked?"flex":"none")),e.xp6(3),e.Q6J("ngTemplateOutlet",n.contentTemplate))},dependencies:[a.mk,a.tP,a.PC],styles:[".p-blockui{position:absolute;top:0;left:0;width:100%;height:100%;background-color:transparent;transition-property:background-color;display:flex;align-items:center;justify-content:center}.p-blockui.p-component-overlay{position:absolute}.p-blockui-document.p-component-overlay{position:fixed}.p-blockui-leave.p-component-overlay{background-color:transparent}\n"],encapsulation:2,changeDetection:0}),t})(),T=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez]}),t})();var A=i(61928),B=i(43427),Z=i(84369),k=i(79768);let I=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,c.Bz,k.a,Z.V,B.Q,A.hJ,T,Z.V]}),t})();var b=i(54802),C=i(46544);let q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:19,vars:2,consts:[[3,"title","id"]],template:function(o,n){1&o&&(e.TgZ(0,"app-developmentsection")(1,"app-docsectiontext",0)(2,"h3"),e._uU(3,"Screen Reader"),e.qZA(),e.TgZ(4,"p"),e._uU(5," BlockUI manages "),e.TgZ(6,"i"),e._uU(7,"aria-busy"),e.qZA(),e._uU(8," state attribute when the UI gets blocked and unblocked. Any valid attribute is passed to the root element so additional attributes like "),e.TgZ(9,"i"),e._uU(10,"role"),e.qZA(),e._uU(11," and "),e.TgZ(12,"i"),e._uU(13,"aria-live"),e.qZA(),e._uU(14," can be used to define live regions. "),e.qZA(),e.TgZ(15,"h3"),e._uU(16,"Keyboard Support"),e.qZA(),e.TgZ(17,"p"),e._uU(18,"Component does not include any interactive elements."),e.qZA()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[b.c,C.N],encapsulation:2}),t})();var P=i(37371),U=i(62863);let M=(()=>{class t{constructor(){this.blockedPanel=!1,this.code={basic:'\n<button type="button" pButton pRipple label="Block" (click)="blockedPanel = true"></button>\n<button type="button" pButton pRipple label="Unblock" (click)="blockedPanel = false"></button>\n<p-blockUI [target]="pnl" [blocked]="blockedPanel">\n    <i class="pi pi-lock" style="font-size: 3rem"></i>\n</p-blockUI>\n<p-panel #pnl header="Header" styleClass="mt-4">\n    <p class="m-0">\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n</p-panel>',html:'\n<div class="card">\n    <button type="button" pButton pRipple label="Block" (click)="blockedPanel=true"></button>\n    <button type="button" pButton pRipple label="Unblock" (click)="blockedPanel=false"></button>\n    <p-blockUI [target]="pnl" [blocked]="blockedPanel">\n        <i class="pi pi-lock" style="font-size: 3rem"></i>\n    </p-blockUI>\n    <p-panel #pnl header="Header" styleClass="mt-4">\n        <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    </p-panel>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'block-ui-basic-demo',\n    templateUrl: './block-ui-basic-demo.html'\n})\nexport class BlockUiBasicDemo {\n    blockedPanel: boolean = false;\n}"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["block-ui-basic-demo"]],inputs:{id:"id",title:"title"},decls:17,vars:5,consts:[[3,"title","id"],[1,"card"],["type","button","pButton","","pRipple","","label","Block",3,"click"],["type","button","pButton","","pRipple","","label","Unblock",3,"click"],[3,"target","blocked"],[1,"pi","pi-lock",2,"font-size","3rem"],["header","Header","styleClass","mt-4"],["pnl",""],[1,"m-0"],["selector","block-ui-basic-demo",3,"code"]],template:function(o,n){if(1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"The element to block should be placed as a child of BlockUI and "),e.TgZ(4,"i"),e._uU(5,"blocked"),e.qZA(),e._uU(6," property is required to control the state."),e.qZA()(),e.TgZ(7,"div",1)(8,"button",2),e.NdJ("click",function(){return n.blockedPanel=!0}),e.qZA(),e.TgZ(9,"button",3),e.NdJ("click",function(){return n.blockedPanel=!1}),e.qZA(),e.TgZ(10,"p-blockUI",4),e._UZ(11,"i",5),e.qZA(),e.TgZ(12,"p-panel",6,7)(14,"p",8),e._uU(15," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),e.qZA()()(),e._UZ(16,"app-code",9),e.qZA()),2&o){const r=e.MAs(13);e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(9),e.Q6J("target",r)("blocked",n.blockedPanel),e.xp6(6),e.Q6J("code",n.code)}},dependencies:[k.h,b.c,P.s,U.Hq,f],encapsulation:2}),t})(),x=(()=>{class t{constructor(){this.blockedDocument=!1,this.code={basic:'\n<p-blockUI [blocked]="blockedDocument"></p-blockUI>',html:'\n<div class="card">\n    <p-blockUI [blocked]="blockedDocument"></p-blockUI>\n    <button type="button" pButton pRipple label="Block" (click)="blockDocument()"></button>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'block-ui-document-demo',\n    templateUrl: './block-ui-document-demo.html'\n})\nexport class BlockUiDocumentDemo {\n    blockedDocument: boolean = false;\n\n    blockDocument() {\n        this.blockedDocument = true;\n        setTimeout(() => {\n            this.blockedDocument = false;\n        }, 3000);\n    }\n}"}}blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1},3e3)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["block-ui-document-demo"]],inputs:{id:"id",title:"title"},decls:11,vars:4,consts:[[3,"title","id"],[1,"card"],[3,"blocked"],["type","button","pButton","","pRipple","","label","Block",3,"click"],["selector","block-ui-document-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Enabling "),e.TgZ(4,"i"),e._uU(5,"fullScreen"),e.qZA(),e._uU(6," property controls the document."),e.qZA()(),e.TgZ(7,"div",1),e._UZ(8,"p-blockUI",2),e.TgZ(9,"button",3),e.NdJ("click",function(){return n.blockDocument()}),e.qZA()(),e._UZ(10,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("blocked",n.blockedDocument),e.xp6(2),e.Q6J("code",n.code))},dependencies:[k.h,b.c,U.Hq,f],encapsulation:2}),t})(),E=(()=>{class t{constructor(){this.code={typescript:"import { BlockUIModule } from 'primeng/blockui';"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:8,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Content of the badge is specified using the "),e.TgZ(4,"i"),e._uU(5,"value"),e.qZA(),e._uU(6," property."),e.qZA()(),e._UZ(7,"app-code",1),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(6),e.Q6J("code",n.code)("hideToggleCode",!0))},dependencies:[k.h,b.c],encapsulation:2}),t})(),S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:60,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"blocked"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"boolean"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"false"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"Controls the blocked state."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"target"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"any"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"document"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Name of the local ng-template variable referring to another component."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"baseZIndex"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"number"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"0"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"autoZIndex"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"boolean"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"true"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"styleClass"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"string"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"false"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"Style class of the component."),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[b.c],encapsulation:2}),t})(),J=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:26,vars:2,consts:[[3,"title","id"],["routerLink","/theming"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-blockui"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Mask element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-blockui-document"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Mask element in full screen mode."),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[c.rH,b.c],encapsulation:2}),t})();var O=i(63408);let w=(()=>{class t{constructor(){this.blockedPanel=!1,this.blockedDocument=!1,this.docs=[{id:"import",label:"Import",component:E},{id:"basic",label:"Basic",component:M},{id:"document",label:"Document",component:x},{id:"style",label:"Style",component:J},{id:"accessibility",label:"Accessibility",component:q}],this.apiDocs=[{id:"props",label:"Properties",component:S}]}blockDocument(){this.blockedDocument=!0,setTimeout(()=>{this.blockedDocument=!1},3e3)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular BlockUI Component","header","BlockUI","description","BlockUI can either block other components or the whole page.",3,"docs","apiDocs"]],template:function(o,n){1&o&&e._UZ(0,"app-doc",0),2&o&&e.Q6J("docs",n.docs)("apiDocs",n.apiDocs)},dependencies:[O.x],styles:["[_nghost-%COMP%]     button{margin-right:.25em}[_nghost-%COMP%]     .p-component-overlay-enter .pi.pi-lock{animation:_ngcontent-%COMP%_enter .15s forwards}[_nghost-%COMP%]     .p-component-overlay-leave .pi.pi-lock{animation:_ngcontent-%COMP%_leave .15s forwards}@keyframes _ngcontent-%COMP%_enter{0%{color:transparent}to{color:var(--text-color)}}@keyframes _ngcontent-%COMP%_leave{0%{color:var(--text-color)}to{color:transparent}}"]}),t})(),F=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.Bz.forChild([{path:"",component:w}]),c.Bz]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,F,I]}),t})()}}]);