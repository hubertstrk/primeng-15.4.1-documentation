"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[5347],{46544:(_,f,r)=>{r.d(f,{N:()=>u});var s=r(41571);const l=["*"];let u=(()=>{class p{}return p.\u0275fac=function(m){return new(m||p)},p.\u0275cmp=s.Xpm({type:p,selectors:[["app-developmentsection"]],ngContentSelectors:l,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(m,c){1&m&&(s.F$t(),s.TgZ(0,"div",0),s._UZ(1,"i",1),s._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),s.qZA(),s.Hsn(3))},encapsulation:2}),p})()},95347:(_,f,r)=>{r.r(f),r.d(f,{SliderDemoModule:()=>R});var s=r(36895),l=r(90433),u=r(10359),p=r(46440),v=r(81447),m=r(84369),c=r(79768),e=r(41571);let h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,c.a,l.u5,l.UX,v.JH,m.V,p.j,u.Bz,m.V]}),t})();var g=r(54057),d=r(54802);let U=(()=>{class t{constructor(){this.code={basic:'\n<form [formGroup]="formGroup">\n    <p-slider formControlName="value"></p-slider>\n</form>',html:'\n<div class="card flex justify-content-center">\n    <form [formGroup]="formGroup">\n        <p-slider formControlName="value"></p-slider>\n    </form>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { FormControl, FormGroup } from '@angular/forms';\n\n@Component({\n    selector: 'slider-reactive-forms-demo',\n    templateUrl: './slider-reactive-forms-demo.html'\n})\nexport class SliderReactiveFormsDemo implements OnInit {\n    formGroup: FormGroup;\n\n    stateOptions: any[] = [\n        { label: 'Off', value: 'off' },\n        { label: 'On', value: 'on' }\n    ];\n\n    ngOnInit() {\n        this.formGroup = new FormGroup({\n            value: new FormControl('on')\n        });\n    }\n}"}}ngOnInit(){this.formGroup=new l.cw({value:new l.NI(20)})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["reactive-forms-doc"]],inputs:{id:"id",title:"title"},decls:11,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"formGroup"],["formControlName","value"],["selector","slider-reactive-forms-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Slider can also be used with reactive forms. In this case, the "),e.TgZ(4,"i"),e._uU(5,"formControlName"),e.qZA(),e._uU(6," property is used to bind the component to a form control."),e.qZA()(),e.TgZ(7,"div",1)(8,"form",2),e._UZ(9,"p-slider",3),e.qZA()(),e._UZ(10,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("formGroup",n.formGroup),e.xp6(2),e.Q6J("code",n.code))},dependencies:[c.h,l._Y,l.JJ,l.JL,l.sg,l.u,g.iR,d.c],encapsulation:2}),t})();var T=r(46544);let A=(()=>{class t{constructor(){this.code={basic:'<span id="label_number">Number</span>\n<p-slider aria-labelledby="label_number"></p-slider>\n\n<p-slider aria-label="Number"></p-slider>'}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:88,vars:6,consts:[[3,"title","id"],[3,"code","hideToggleCode","hideCodeSandbox","hideStackBlitz"],[1,"doc-tablewrapper"],[1,"doc-table"],[1,"inline-flex","flex-column"],[1,"mb-1"]],template:function(o,n){1&o&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," Slider element component uses "),e.TgZ(7,"i"),e._uU(8,"slider"),e.qZA(),e._uU(9," role on the handle in addition to the "),e.TgZ(10,"i"),e._uU(11,"aria-orientation"),e.qZA(),e._uU(12,", "),e.TgZ(13,"i"),e._uU(14,"aria-valuemin"),e.qZA(),e._uU(15,", "),e.TgZ(16,"i"),e._uU(17,"aria-valuemax"),e.qZA(),e._uU(18," and "),e.TgZ(19,"i"),e._uU(20,"aria-valuenow"),e.qZA(),e._uU(21," attributes. Value to describe the component can be defined using "),e.TgZ(22,"i"),e._uU(23,"aria-labelledby"),e.qZA(),e._uU(24," and "),e.TgZ(25,"i"),e._uU(26,"aria-label"),e.qZA(),e._uU(27," props. "),e.qZA()(),e._UZ(28,"app-code",1),e.TgZ(29,"h3"),e._uU(30,"Keyboard Support"),e.qZA(),e.TgZ(31,"div",2)(32,"table",3)(33,"thead")(34,"tr")(35,"th"),e._uU(36,"Key"),e.qZA(),e.TgZ(37,"th"),e._uU(38,"Function"),e.qZA()()(),e.TgZ(39,"tbody")(40,"tr")(41,"td")(42,"i"),e._uU(43,"tab"),e.qZA()(),e.TgZ(44,"td"),e._uU(45,"Moves focus to the slider."),e.qZA()(),e.TgZ(46,"tr")(47,"td")(48,"span",4)(49,"i",5),e._uU(50,"left arrow"),e.qZA(),e.TgZ(51,"i"),e._uU(52,"up arrow"),e.qZA()()(),e.TgZ(53,"td"),e._uU(54,"Decrements the value."),e.qZA()(),e.TgZ(55,"tr")(56,"td")(57,"span",4)(58,"i",5),e._uU(59,"right arrow"),e.qZA(),e.TgZ(60,"i"),e._uU(61,"down arrow"),e.qZA()()(),e.TgZ(62,"td"),e._uU(63,"Increments the value."),e.qZA()(),e.TgZ(64,"tr")(65,"td")(66,"i"),e._uU(67,"home"),e.qZA()(),e.TgZ(68,"td"),e._uU(69,"Set the minimum value."),e.qZA()(),e.TgZ(70,"tr")(71,"td")(72,"i"),e._uU(73,"end"),e.qZA()(),e.TgZ(74,"td"),e._uU(75,"Set the maximum value."),e.qZA()(),e.TgZ(76,"tr")(77,"td")(78,"i"),e._uU(79,"page up"),e.qZA()(),e.TgZ(80,"td"),e._uU(81,"Increments the value by 10 steps."),e.qZA()(),e.TgZ(82,"tr")(83,"td")(84,"i"),e._uU(85,"page down"),e.qZA()(),e.TgZ(86,"td"),e._uU(87,"Decrements the value by 10 steps."),e.qZA()()()()()()()),2&o&&(e.xp6(2),e.Q6J("title",n.title)("id",n.id),e.xp6(26),e.Q6J("code",n.code)("hideToggleCode",!0)("hideCodeSandbox",!0)("hideStackBlitz",!0))},dependencies:[c.h,d.c,T.N],encapsulation:2}),t})(),q=(()=>{class t{constructor(){this.code={basic:'\n<p-slider [(ngModel)]="value"></p-slider>',html:'\n<div class="card flex justify-content-center">\n    <p-slider [(ngModel)]="value"></p-slider>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'slider-basic-demo',\n    templateUrl: './slider-basic-demo.html'\n})\nexport class SliderBasicDemo {\n    value: number;\n}"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"ngModel","ngModelChange"],["selector","slider-basic-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Two-way binding is defined using the standard "),e.TgZ(4,"i"),e._uU(5,"ngModel"),e.qZA(),e._uU(6," directive."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-slider",2),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(9,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[c.h,l.JJ,l.On,g.iR,d.c],encapsulation:2}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["events-doc"]],inputs:{id:"id",title:"title"},decls:34,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Description"),e.qZA()()(),e.TgZ(12,"tbody")(13,"tr")(14,"td"),e._uU(15,"onChange"),e.qZA(),e.TgZ(16,"td"),e._uU(17," event.originalEvent: Slide event "),e._UZ(18,"br"),e._uU(19," event.value: New value "),e._UZ(20,"br"),e._uU(21," event.values: Values in range mode "),e._UZ(22,"br"),e.qZA(),e.TgZ(23,"td"),e._uU(24,"Callback to invoke on value change via slide."),e.qZA()(),e.TgZ(25,"tr")(26,"td"),e._uU(27,"onSlideEnd"),e.qZA(),e.TgZ(28,"td"),e._uU(29," event.originalEvent: Mouseup event"),e._UZ(30,"br"),e._uU(31," event.value: New value "),e.qZA(),e.TgZ(32,"td"),e._uU(33,"Callback to invoke when slide stops."),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[d.c],encapsulation:2}),t})(),y=(()=>{class t{constructor(){this.code={typescript:"import { SliderModule } from 'primeng/slider';"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(o,n){1&o&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(1),e.Q6J("code",n.code)("hideToggleCode",!0))},dependencies:[c.h,d.c],encapsulation:2}),t})(),D=(()=>{class t{constructor(){this.value=50,this.code={basic:'\n<div>\n    <input type="text" pInputText [(ngModel)]="value" class="w-full"/>\n    <p-slider [(ngModel)]="value" class="w-full"></p-slider>\n</div>',html:'\n<div class="card flex justify-content-center">\n    <div>\n        <input type="text" pInputText [(ngModel)]="value" class="w-full"/>\n        <p-slider [(ngModel)]="value" class="w-full"></p-slider>\n    </div>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'slider-input-demo',\n    templateUrl: './slider-input-demo.html'\n})\nexport class SliderInputDemo {\n    value: number = 50;\n}"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["input-doc"]],inputs:{id:"id",title:"title"},decls:9,vars:5,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["type","text","pInputText","",1,"w-full",3,"ngModel","ngModelChange"],[1,"w-full",3,"ngModel","ngModelChange"],["selector","slider-input-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Slider is connected to an input field using two-way binding."),e.qZA()(),e.TgZ(4,"div",1)(5,"div")(6,"input",2),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA(),e.TgZ(7,"p-slider",3),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()()(),e._UZ(8,"app-code",4),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(5),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[c.h,l.Fj,l.JJ,l.On,g.iR,d.c,p.o],encapsulation:2}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:114,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"animate"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"boolean"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"false"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"When enabled, displays an animation on click of the slider bar."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"disabled"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"boolean"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"false"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"When present, it specifies that the element should be disabled."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"min"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"number"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"0"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Mininum boundary value."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"max"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"number"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"100"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Maximum boundary value."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"orientation"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"string"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"horizontal"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"Orientation of the slider, valid values are horizontal and vertical."),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"step"),e.qZA(),e.TgZ(63,"td"),e._uU(64,"number"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"1"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"Step factor to increment/decrement the value."),e.qZA()(),e.TgZ(69,"tr")(70,"td"),e._uU(71,"range"),e.qZA(),e.TgZ(72,"td"),e._uU(73,"boolean"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"false"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"When specified, allows two boundary values to be picked."),e.qZA()(),e.TgZ(78,"tr")(79,"td"),e._uU(80,"style"),e.qZA(),e.TgZ(81,"td"),e._uU(82,"string"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"null"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"Inline style of the component."),e.qZA()(),e.TgZ(87,"tr")(88,"td"),e._uU(89,"styleClass"),e.qZA(),e.TgZ(90,"td"),e._uU(91,"string"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"null"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"Style class of the component."),e.qZA()(),e.TgZ(96,"tr")(97,"td"),e._uU(98,"tabindex"),e.qZA(),e.TgZ(99,"td"),e._uU(100,"number"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"0"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"Index of the element in tabbing order."),e.qZA()(),e.TgZ(105,"tr")(106,"td"),e._uU(107,"ariaLabelledBy"),e.qZA(),e.TgZ(108,"td"),e._uU(109,"string"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"null"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"Establishes relationships between the component and label(s) where its value should be one or more element IDs."),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id))},dependencies:[d.c],encapsulation:2}),t})(),S=(()=>{class t{constructor(){this.rangeValues=[20,80],this.code={basic:'\n<p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>',html:'\n<div class="card flex justify-content-center">\n    <p-slider [(ngModel)]="rangeValues" [range]="true"></p-slider>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'slider-range-demo',\n    templateUrl: './slider-range-demo.html'\n})\nexport class SliderRangeDemo {\n    rangeValues: number[] = [20, 80];\n}"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["range-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:5,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"ngModel","range","ngModelChange"],["selector","slider-range-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"When "),e.TgZ(4,"i"),e._uU(5,"range"),e.qZA(),e._uU(6," property is present, slider provides two handles to define two values. In range mode, value should be an array instead of a single value."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-slider",2),e.NdJ("ngModelChange",function(a){return n.rangeValues=a}),e.qZA()(),e._UZ(9,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("ngModel",n.rangeValues)("range",!0),e.xp6(1),e.Q6J("code",n.code))},dependencies:[c.h,l.JJ,l.On,g.iR,d.c],encapsulation:2}),t})(),C=(()=>{class t{constructor(){this.code={basic:'\n<p-slider [(ngModel)]="value" [step]="20"></p-slider>',html:'\n<div class="card flex justify-content-center">\n    <p-slider [(ngModel)]="value" [step]="20"></p-slider>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'slider-step-demo',\n    templateUrl: './slider-step-demo.html'\n})\nexport class SliderStepDemo {\n    value: number;\n}"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["step-doc"]],inputs:{id:"id",title:"title"},decls:10,vars:5,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],[3,"ngModel","step","ngModelChange"],["selector","slider-step-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Size of each movement is defined with the "),e.TgZ(4,"i"),e._uU(5,"step"),e.qZA(),e._uU(6," property."),e.qZA()(),e.TgZ(7,"div",1)(8,"p-slider",2),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(9,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(7),e.Q6J("ngModel",n.value)("step",20),e.xp6(1),e.Q6J("code",n.code))},dependencies:[c.h,l.JJ,l.On,g.iR,d.c],encapsulation:2}),t})();const J=function(){return["/theming"]};let w=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:26,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-slider"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element"),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-slider-handle"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Handle element"),e.qZA()()()()()()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,J)))},dependencies:[d.c,u.rH],encapsulation:2}),t})(),x=(()=>{class t{constructor(){this.code={basic:'\n<p-slider [(ngModel)]="value" orientation="vertical"></p-slider>',html:'\n<div class="card flex justify-content-center">\n    <p-slider [(ngModel)]="value" orientation="vertical"></p-slider>\n</div>',typescript:"\nimport { Component } from '@angular/core';\n\n@Component({\n    selector: 'slider-vertical-demo',\n    templateUrl: './slider-vertical-demo.html'\n})\nexport class SliderVerticalDemo {\n    value: number;\n}"}}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["vertical-doc"]],inputs:{id:"id",title:"title"},decls:16,vars:4,consts:[[3,"title","id"],[1,"card","flex","justify-content-center"],["orientation","vertical",3,"ngModel","ngModelChange"],["selector","slider-vertical-demo",3,"code"]],template:function(o,n){1&o&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Default layout of slider is "),e.TgZ(4,"i"),e._uU(5,"horizontal"),e.qZA(),e._uU(6,", use "),e.TgZ(7,"i"),e._uU(8,"orientation"),e.qZA(),e._uU(9," property for the alternative "),e.TgZ(10,"i"),e._uU(11,"vertical"),e.qZA(),e._uU(12," mode."),e.qZA()(),e.TgZ(13,"div",1)(14,"p-slider",2),e.NdJ("ngModelChange",function(a){return n.value=a}),e.qZA()(),e._UZ(15,"app-code",3),e.qZA()),2&o&&(e.xp6(1),e.Q6J("title",n.title)("id",n.id),e.xp6(13),e.Q6J("ngModel",n.value),e.xp6(1),e.Q6J("code",n.code))},dependencies:[c.h,l.JJ,l.On,g.iR,d.c],encapsulation:2}),t})();var F=r(63408);let I=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:y},{id:"basic",label:"Basic",component:q},{id:"reactive-forms",label:"Reactive Forms",component:U},{id:"input",label:"Input",component:D},{id:"step",label:"Step",component:C},{id:"range",label:"Range",component:S},{id:"vertical",label:"Vertical",component:x},{id:"style",label:"Style",component:w},{id:"accessibility",label:"Accessibility",component:A}],this.apiDocs=[{id:"properties",label:"Properties",component:M},{id:"events",label:"Events",component:b}]}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular Slider Component","header","Slider","description","Slider is a component to provide input with a drag handle.",3,"docs","apiDocs"]],template:function(o,n){1&o&&e._UZ(0,"app-doc",0),2&o&&e.Q6J("docs",n.docs)("apiDocs",n.apiDocs)},dependencies:[F.x],styles:[".p-inputtext[_ngcontent-%COMP%]{width:14rem}.p-slider-vertical[_ngcontent-%COMP%]{height:14rem}[_nghost-%COMP%]     .p-slider-horizontal{width:14rem}"]}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.Bz.forChild([{path:"",component:I}]),u.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,Q,h]}),t})()}}]);