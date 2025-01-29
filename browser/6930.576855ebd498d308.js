"use strict";(self.webpackChunkprimeng=self.webpackChunkprimeng||[]).push([[6930],{46544:(g,d,l)=>{l.d(d,{N:()=>Z});var a=l(41571);const r=["*"];let Z=(()=>{class p{}return p.\u0275fac=function(c){return new(c||p)},p.\u0275cmp=a.Xpm({type:p,selectors:[["app-developmentsection"]],ngContentSelectors:r,decls:4,vars:0,consts:[[1,"flex","align-items-center","line-height-3","bg-primary-600","text-white","p-3","text-lg","border-round","mb-3"],[1,"pi","pi-info-circle","text-lg","text-white","mr-2"]],template:function(c,e){1&c&&(a.F$t(),a.TgZ(0,"div",0),a._UZ(1,"i",1),a._uU(2," Accessibility guide documents the specification of this component based on WCAG guidelines, the implementation is in progress.\n"),a.qZA(),a.Hsn(3))},encapsulation:2}),p})()},6930:(g,d,l)=>{l.r(d),l.d(d,{MenubarDemoModule:()=>C});var a=l(36895),r=l(10359),Z=l(57593),p=l(84369),s=l(79768),c=l(46440),e=l(41571);let f=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,s.a,r.Bz,Z.W6,c.j,p.V,p.V]}),t})();var m=l(22770),b=l(20485),u=l(54802);function U(t,n){1&t&&e._UZ(0,"img",6)}function T(t,n){1&t&&e._UZ(0,"input",7)}let A=(()=>{class t{constructor(){this.code={basic:'\n<p-menubar [model]="items">\n    <ng-template pTemplate="start">\n        <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />\n    </ng-template>\n    <ng-template pTemplate="end">\n        <input type="text" pInputText placeholder="Search" class="w-full" />\n    </ng-template>\n</p-menubar>',html:'\n<div class="card">\n    <p-menubar [model]="items">\n        <ng-template pTemplate="start">\n            <img src="https://primefaces.org/cdn/primeng/images/primeng.svg" height="40" class="mr-2" />\n        </ng-template>\n        <ng-template pTemplate="end">\n            <input type="text" pInputText placeholder="Search" class="w-full" />\n        </ng-template>\n    </p-menubar>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menubar-template-demo',\n    templateUrl: './menubar-template-demo.html'\n})\nexport class MenubarTemplateDemo implements OnInit {\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n                label: 'File',\n                icon: 'pi pi-fw pi-file',\n                items: [\n                    {\n                        label: 'New',\n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            {\n                                label: 'Bookmark',\n                                icon: 'pi pi-fw pi-bookmark'\n                            },\n                            {\n                                label: 'Video',\n                                icon: 'pi pi-fw pi-video'\n                            }\n                        ]\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-fw pi-trash'\n                    },\n                    {\n                        separator: true\n                    },\n                    {\n                        label: 'Export',\n                        icon: 'pi pi-fw pi-external-link'\n                    }\n                ]\n            },\n            {\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    {\n                        label: 'Left',\n                        icon: 'pi pi-fw pi-align-left'\n                    },\n                    {\n                        label: 'Right',\n                        icon: 'pi pi-fw pi-align-right'\n                    },\n                    {\n                        label: 'Center',\n                        icon: 'pi pi-fw pi-align-center'\n                    },\n                    {\n                        label: 'Justify',\n                        icon: 'pi pi-fw pi-align-justify'\n                    }\n                ]\n            },\n            {\n                label: 'Users',\n                icon: 'pi pi-fw pi-user',\n                items: [\n                    {\n                        label: 'New',\n                        icon: 'pi pi-fw pi-user-plus'\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-fw pi-user-minus'\n                    },\n                    {\n                        label: 'Search',\n                        icon: 'pi pi-fw pi-users',\n                        items: [\n                            {\n                                label: 'Filter',\n                                icon: 'pi pi-fw pi-filter',\n                                items: [\n                                    {\n                                        label: 'Print',\n                                        icon: 'pi pi-fw pi-print'\n                                    }\n                                ]\n                            },\n                            {\n                                icon: 'pi pi-fw pi-bars',\n                                label: 'List'\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                label: 'Events',\n                icon: 'pi pi-fw pi-calendar',\n                items: [\n                    {\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            {\n                                label: 'Save',\n                                icon: 'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                                label: 'Delete',\n                                icon: 'pi pi-fw pi-calendar-minus'\n                            }\n                        ]\n                    },\n                    {\n                        label: 'Archieve',\n                        icon: 'pi pi-fw pi-calendar-times',\n                        items: [\n                            {\n                                label: 'Remove',\n                                icon: 'pi pi-fw pi-calendar-minus'\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                label: 'Quit',\n                icon: 'pi pi-fw pi-power-off'\n            }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["menubar-template-demo"]],inputs:{id:"id",title:"title"},decls:15,vars:4,consts:[[3,"title","id"],[1,"card"],[3,"model"],["pTemplate","start"],["pTemplate","end"],["selector","menubar-template-demo",3,"code"],["src","https://primefaces.org/cdn/primeng/images/primeng.svg","height","40",1,"mr-2"],["type","text","pInputText","","placeholder","Search",1,"w-full"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Custom content can be placed inside the menubar using the "),e.TgZ(4,"i"),e._uU(5,"start"),e.qZA(),e._uU(6," and "),e.TgZ(7,"i"),e._uU(8,"end"),e.qZA(),e._uU(9," templates."),e.qZA()(),e.TgZ(10,"div",1)(11,"p-menubar",2),e.YNc(12,U,1,0,"ng-template",3),e.YNc(13,T,1,0,"ng-template",4),e.qZA()(),e._UZ(14,"app-code",5),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(10),e.Q6J("model",o.items),e.xp6(3),e.Q6J("code",o.code))},dependencies:[s.h,m.nm,b.jx,c.o,u.c],encapsulation:2}),t})(),_=(()=>{class t{constructor(){this.code={basic:'\n<p-menubar [model]="items"></p-menubar>',html:'\n<div class="card">\n    <p-menubar [model]="items"></p-menubar>\n</div>',typescript:"\nimport { Component, OnInit } from '@angular/core';\nimport { MenuItem } from 'primeng/api';\n\n@Component({\n    selector: 'menubar-basic-demo',\n    templateUrl: './menubar-basic-demo.html'\n})\nexport class MenubarBasicDemo implements OnInit {\n    items: MenuItem[];\n\n    ngOnInit() {\n        this.items = [\n            {\n                label: 'File',\n                icon: 'pi pi-fw pi-file',\n                items: [\n                    {\n                        label: 'New',\n                        icon: 'pi pi-fw pi-plus',\n                        items: [\n                            {\n                                label: 'Bookmark',\n                                icon: 'pi pi-fw pi-bookmark'\n                            },\n                            {\n                                label: 'Video',\n                                icon: 'pi pi-fw pi-video'\n                            }\n                        ]\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-fw pi-trash'\n                    },\n                    {\n                        separator: true\n                    },\n                    {\n                        label: 'Export',\n                        icon: 'pi pi-fw pi-external-link'\n                    }\n                ]\n            },\n            {\n                label: 'Edit',\n                icon: 'pi pi-fw pi-pencil',\n                items: [\n                    {\n                        label: 'Left',\n                        icon: 'pi pi-fw pi-align-left'\n                    },\n                    {\n                        label: 'Right',\n                        icon: 'pi pi-fw pi-align-right'\n                    },\n                    {\n                        label: 'Center',\n                        icon: 'pi pi-fw pi-align-center'\n                    },\n                    {\n                        label: 'Justify',\n                        icon: 'pi pi-fw pi-align-justify'\n                    }\n                ]\n            },\n            {\n                label: 'Users',\n                icon: 'pi pi-fw pi-user',\n                items: [\n                    {\n                        label: 'New',\n                        icon: 'pi pi-fw pi-user-plus'\n                    },\n                    {\n                        label: 'Delete',\n                        icon: 'pi pi-fw pi-user-minus'\n                    },\n                    {\n                        label: 'Search',\n                        icon: 'pi pi-fw pi-users',\n                        items: [\n                            {\n                                label: 'Filter',\n                                icon: 'pi pi-fw pi-filter',\n                                items: [\n                                    {\n                                        label: 'Print',\n                                        icon: 'pi pi-fw pi-print'\n                                    }\n                                ]\n                            },\n                            {\n                                icon: 'pi pi-fw pi-bars',\n                                label: 'List'\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                label: 'Events',\n                icon: 'pi pi-fw pi-calendar',\n                items: [\n                    {\n                        label: 'Edit',\n                        icon: 'pi pi-fw pi-pencil',\n                        items: [\n                            {\n                                label: 'Save',\n                                icon: 'pi pi-fw pi-calendar-plus'\n                            },\n                            {\n                                label: 'Delete',\n                                icon: 'pi pi-fw pi-calendar-minus'\n                            }\n                        ]\n                    },\n                    {\n                        label: 'Archieve',\n                        icon: 'pi pi-fw pi-calendar-times',\n                        items: [\n                            {\n                                label: 'Remove',\n                                icon: 'pi pi-fw pi-calendar-minus'\n                            }\n                        ]\n                    }\n                ]\n            },\n            {\n                label: 'Quit',\n                icon: 'pi pi-fw pi-power-off'\n            }\n        ];\n    }\n}"}}ngOnInit(){this.items=[{label:"File",icon:"pi pi-fw pi-file",items:[{label:"New",icon:"pi pi-fw pi-plus",items:[{label:"Bookmark",icon:"pi pi-fw pi-bookmark"},{label:"Video",icon:"pi pi-fw pi-video"}]},{label:"Delete",icon:"pi pi-fw pi-trash"},{separator:!0},{label:"Export",icon:"pi pi-fw pi-external-link"}]},{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Left",icon:"pi pi-fw pi-align-left"},{label:"Right",icon:"pi pi-fw pi-align-right"},{label:"Center",icon:"pi pi-fw pi-align-center"},{label:"Justify",icon:"pi pi-fw pi-align-justify"}]},{label:"Users",icon:"pi pi-fw pi-user",items:[{label:"New",icon:"pi pi-fw pi-user-plus"},{label:"Delete",icon:"pi pi-fw pi-user-minus"},{label:"Search",icon:"pi pi-fw pi-users",items:[{label:"Filter",icon:"pi pi-fw pi-filter",items:[{label:"Print",icon:"pi pi-fw pi-print"}]},{icon:"pi pi-fw pi-bars",label:"List"}]}]},{label:"Events",icon:"pi pi-fw pi-calendar",items:[{label:"Edit",icon:"pi pi-fw pi-pencil",items:[{label:"Save",icon:"pi pi-fw pi-calendar-plus"},{label:"Delete",icon:"pi pi-fw pi-calendar-minus"}]},{label:"Archieve",icon:"pi pi-fw pi-calendar-times",items:[{label:"Remove",icon:"pi pi-fw pi-calendar-minus"}]}]},{label:"Quit",icon:"pi pi-fw pi-power-off"}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["basic-doc"]],inputs:{id:"id",title:"title"},decls:7,vars:4,consts:[[3,"title","id"],[1,"card"],[3,"model"],["selector","menubar-basic-demo",3,"code"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Menubar requires nested menuitems as its model."),e.qZA()(),e.TgZ(4,"div",1),e._UZ(5,"p-menubar",2),e.qZA(),e._UZ(6,"app-code",3),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(4),e.Q6J("model",o.items),e.xp6(1),e.Q6J("code",o.code))},dependencies:[s.h,m.nm,u.c],encapsulation:2}),t})(),h=(()=>{class t{constructor(){this.code={typescript:"import { MenubarModule } from 'primeng/menubar';"}}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["import-doc"]],inputs:{id:"id",title:"title"},decls:3,vars:4,consts:[[3,"title","id"],[3,"code","hideToggleCode"]],template:function(i,o){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0)(2,"app-code",1),e.qZA()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(1),e.Q6J("code",o.code)("hideToggleCode",!0))},dependencies:[s.h,u.c],encapsulation:2}),t})(),q=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["menuitem-doc"]],inputs:{id:"id",title:"title"},decls:292,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"MenuItem provides the following properties. Note that not all of them may be utilized by the menubar component."),e.qZA()(),e.TgZ(4,"div",1)(5,"table",2)(6,"thead")(7,"tr")(8,"th"),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Default"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Description"),e.qZA()()(),e.TgZ(16,"tbody")(17,"tr")(18,"td"),e._uU(19,"id"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"string"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"null"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"Identifier of the element."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"label"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"string"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"null"),e.qZA(),e.TgZ(33,"td"),e._uU(34,"Text of the item."),e.qZA()(),e.TgZ(35,"tr")(36,"td"),e._uU(37,"icon"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"string"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"null"),e.qZA(),e.TgZ(42,"td"),e._uU(43,"Icon of the item."),e.qZA()(),e.TgZ(44,"tr")(45,"td"),e._uU(46,"iconStyle"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"object"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"null"),e.qZA(),e.TgZ(51,"td"),e._uU(52,"Inline style of the item's icon."),e.qZA()(),e.TgZ(53,"tr")(54,"td"),e._uU(55,"command"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"function"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"null"),e.qZA(),e.TgZ(60,"td"),e._uU(61,"Callback to execute when item is clicked."),e.qZA()(),e.TgZ(62,"tr")(63,"td"),e._uU(64,"url"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"string"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"null"),e.qZA(),e.TgZ(69,"td"),e._uU(70,"External link to navigate when item is clicked."),e.qZA()(),e.TgZ(71,"tr")(72,"td"),e._uU(73,"routerLink"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"array"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"null"),e.qZA(),e.TgZ(78,"td"),e._uU(79,"RouterLink definition for internal navigation."),e.qZA()(),e.TgZ(80,"tr")(81,"td"),e._uU(82,"routerLinkActiveOptions"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"object"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"null"),e.qZA(),e.TgZ(87,"td"),e._uU(88,"Configuration for active router link."),e.qZA()(),e.TgZ(89,"tr")(90,"td"),e._uU(91,"queryParams"),e.qZA(),e.TgZ(92,"td"),e._uU(93,"object"),e.qZA(),e.TgZ(94,"td"),e._uU(95,"null"),e.qZA(),e.TgZ(96,"td"),e._uU(97,"Query parameters for internal navigation via routerLink."),e.qZA()(),e.TgZ(98,"tr")(99,"td"),e._uU(100,"fragment"),e.qZA(),e.TgZ(101,"td"),e._uU(102,"string"),e.qZA(),e.TgZ(103,"td"),e._uU(104,"null"),e.qZA(),e.TgZ(105,"td"),e._uU(106,"Sets the hash fragment for the URL."),e.qZA()(),e.TgZ(107,"tr")(108,"td"),e._uU(109,"queryParamsHandling"),e.qZA(),e.TgZ(110,"td"),e._uU(111,"QueryParamsHandling"),e.qZA(),e.TgZ(112,"td"),e._uU(113,"null"),e.qZA(),e.TgZ(114,"td"),e._uU(115," How to handle query parameters in the router link for the next navigation. One of:"),e._UZ(116,"br")(117,"br"),e._uU(118," merge : Merge new with current parameters."),e._UZ(119,"br"),e._uU(120," preserve : Preserve current parameters.k. "),e.qZA()(),e.TgZ(121,"tr")(122,"td"),e._uU(123,"preserveFragment"),e.qZA(),e.TgZ(124,"td"),e._uU(125,"boolean"),e.qZA(),e.TgZ(126,"td"),e._uU(127,"false"),e.qZA(),e.TgZ(128,"td"),e._uU(129,"When true, preserves the URL fragment for the next navigation."),e.qZA()(),e.TgZ(130,"tr")(131,"td"),e._uU(132,"skipLocationChange"),e.qZA(),e.TgZ(133,"td"),e._uU(134,"boolean"),e.qZA(),e.TgZ(135,"td"),e._uU(136,"null"),e.qZA(),e.TgZ(137,"td"),e._uU(138,"When true, navigates without pushing a new state into history."),e.qZA()(),e.TgZ(139,"tr")(140,"td"),e._uU(141,"replaceUrl"),e.qZA(),e.TgZ(142,"td"),e._uU(143,"boolean"),e.qZA(),e.TgZ(144,"td"),e._uU(145,"null"),e.qZA(),e.TgZ(146,"td"),e._uU(147,"When true, navigates while replacing the current state in history."),e.qZA()(),e.TgZ(148,"tr")(149,"td"),e._uU(150,"state"),e.qZA(),e.TgZ(151,"td"),e._uU(152,"object"),e.qZA(),e.TgZ(153,"td"),e._uU(154,"null"),e.qZA(),e.TgZ(155,"td"),e._uU(156,"Developer-defined state that can be passed to any navigation."),e.qZA()(),e.TgZ(157,"tr")(158,"td"),e._uU(159,"items"),e.qZA(),e.TgZ(160,"td"),e._uU(161,"array"),e.qZA(),e.TgZ(162,"td"),e._uU(163,"null"),e.qZA(),e.TgZ(164,"td"),e._uU(165,"An array of children menuitems."),e.qZA()(),e.TgZ(166,"tr")(167,"td"),e._uU(168,"expanded"),e.qZA(),e.TgZ(169,"td"),e._uU(170,"boolean"),e.qZA(),e.TgZ(171,"td"),e._uU(172,"false"),e.qZA(),e.TgZ(173,"td"),e._uU(174,"Visibility of submenu."),e.qZA()(),e.TgZ(175,"tr")(176,"td"),e._uU(177,"disabled"),e.qZA(),e.TgZ(178,"td"),e._uU(179,"boolean"),e.qZA(),e.TgZ(180,"td"),e._uU(181,"false"),e.qZA(),e.TgZ(182,"td"),e._uU(183,"When set as true, disables the menuitem."),e.qZA()(),e.TgZ(184,"tr")(185,"td"),e._uU(186,"visible"),e.qZA(),e.TgZ(187,"td"),e._uU(188,"boolean"),e.qZA(),e.TgZ(189,"td"),e._uU(190,"true"),e.qZA(),e.TgZ(191,"td"),e._uU(192,"Whether the dom element of menuitem is created or not."),e.qZA()(),e.TgZ(193,"tr")(194,"td"),e._uU(195,"target"),e.qZA(),e.TgZ(196,"td"),e._uU(197,"string"),e.qZA(),e.TgZ(198,"td"),e._uU(199,"null"),e.qZA(),e.TgZ(200,"td"),e._uU(201,"Specifies where to open the linked document."),e.qZA()(),e.TgZ(202,"tr")(203,"td"),e._uU(204,"escape"),e.qZA(),e.TgZ(205,"td"),e._uU(206,"boolean"),e.qZA(),e.TgZ(207,"td"),e._uU(208,"true"),e.qZA(),e.TgZ(209,"td"),e._uU(210,"Whether to escape the label or not. Set to false to display html content."),e.qZA()(),e.TgZ(211,"tr")(212,"td"),e._uU(213,"separator"),e.qZA(),e.TgZ(214,"td"),e._uU(215,"boolean"),e.qZA(),e.TgZ(216,"td"),e._uU(217,"false"),e.qZA(),e.TgZ(218,"td"),e._uU(219,"Defines the item as a separator."),e.qZA()(),e.TgZ(220,"tr")(221,"td"),e._uU(222,"style"),e.qZA(),e.TgZ(223,"td"),e._uU(224,"object"),e.qZA(),e.TgZ(225,"td"),e._uU(226,"null"),e.qZA(),e.TgZ(227,"td"),e._uU(228,"Inline style of the menuitem."),e.qZA()(),e.TgZ(229,"tr")(230,"td"),e._uU(231,"styleClass"),e.qZA(),e.TgZ(232,"td"),e._uU(233,"string"),e.qZA(),e.TgZ(234,"td"),e._uU(235,"null"),e.qZA(),e.TgZ(236,"td"),e._uU(237,"Style class of the menuitem."),e.qZA()(),e.TgZ(238,"tr")(239,"td"),e._uU(240,"badge"),e.qZA(),e.TgZ(241,"td"),e._uU(242,"string"),e.qZA(),e.TgZ(243,"td"),e._uU(244,"null"),e.qZA(),e.TgZ(245,"td"),e._uU(246,"Value of the badge."),e.qZA()(),e.TgZ(247,"tr")(248,"td"),e._uU(249,"badgeStyleClass"),e.qZA(),e.TgZ(250,"td"),e._uU(251,"string"),e.qZA(),e.TgZ(252,"td"),e._uU(253,"null"),e.qZA(),e.TgZ(254,"td"),e._uU(255,"Style class of the badge."),e.qZA()(),e.TgZ(256,"tr")(257,"td"),e._uU(258,"title"),e.qZA(),e.TgZ(259,"td"),e._uU(260,"string"),e.qZA(),e.TgZ(261,"td"),e._uU(262,"null"),e.qZA(),e.TgZ(263,"td"),e._uU(264,"Tooltip text of the item."),e.qZA()(),e.TgZ(265,"tr")(266,"td"),e._uU(267,"automationId"),e.qZA(),e.TgZ(268,"td"),e._uU(269,"any"),e.qZA(),e.TgZ(270,"td"),e._uU(271,"null"),e.qZA(),e.TgZ(272,"td"),e._uU(273,"Value of HTML data-* attribute."),e.qZA()(),e.TgZ(274,"tr")(275,"td"),e._uU(276,"tabindex"),e.qZA(),e.TgZ(277,"td"),e._uU(278,"string"),e.qZA(),e.TgZ(279,"td"),e._uU(280,"0"),e.qZA(),e.TgZ(281,"td"),e._uU(282,"Specifies tab order of the item."),e.qZA()(),e.TgZ(283,"tr")(284,"td"),e._uU(285,"tooltipOptions"),e.qZA(),e.TgZ(286,"td"),e._uU(287,"TooltipOptions"),e.qZA(),e.TgZ(288,"td"),e._uU(289,"-"),e.qZA(),e.TgZ(290,"td"),e._uU(291,"Options of the item's tooltip."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[u.c],encapsulation:2}),t})(),w=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["props-doc"]],inputs:{id:"id",title:"title"},decls:87,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Type"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Default"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Description"),e.qZA()()(),e.TgZ(14,"tbody")(15,"tr")(16,"td"),e._uU(17,"model"),e.qZA(),e.TgZ(18,"td"),e._uU(19,"array"),e.qZA(),e.TgZ(20,"td"),e._uU(21,"null"),e.qZA(),e.TgZ(22,"td"),e._uU(23,"An array of menuitems."),e.qZA()(),e.TgZ(24,"tr")(25,"td"),e._uU(26,"style"),e.qZA(),e.TgZ(27,"td"),e._uU(28,"string"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"null"),e.qZA(),e.TgZ(31,"td"),e._uU(32,"Inline style of the component."),e.qZA()(),e.TgZ(33,"tr")(34,"td"),e._uU(35,"styleClass"),e.qZA(),e.TgZ(36,"td"),e._uU(37,"string"),e.qZA(),e.TgZ(38,"td"),e._uU(39,"null"),e.qZA(),e.TgZ(40,"td"),e._uU(41,"Style class of the component."),e.qZA()(),e.TgZ(42,"tr")(43,"td"),e._uU(44,"baseZIndex"),e.qZA(),e.TgZ(45,"td"),e._uU(46,"number"),e.qZA(),e.TgZ(47,"td"),e._uU(48,"0"),e.qZA(),e.TgZ(49,"td"),e._uU(50,"Base zIndex value to use in layering."),e.qZA()(),e.TgZ(51,"tr")(52,"td"),e._uU(53,"autoZIndex"),e.qZA(),e.TgZ(54,"td"),e._uU(55,"boolean"),e.qZA(),e.TgZ(56,"td"),e._uU(57,"true"),e.qZA(),e.TgZ(58,"td"),e._uU(59,"Whether to automatically manage layering."),e.qZA()(),e.TgZ(60,"tr")(61,"td"),e._uU(62,"autoDisplay"),e.qZA(),e.TgZ(63,"td"),e._uU(64,"boolean"),e.qZA(),e.TgZ(65,"td"),e._uU(66,"false"),e.qZA(),e.TgZ(67,"td"),e._uU(68,"Whether to show a root submenu on mouse over."),e.qZA()(),e.TgZ(69,"tr")(70,"td"),e._uU(71,"autoHide"),e.qZA(),e.TgZ(72,"td"),e._uU(73,"boolean"),e.qZA(),e.TgZ(74,"td"),e._uU(75,"false"),e.qZA(),e.TgZ(76,"td"),e._uU(77,"Whether to hide a root submenu when mouse leaves."),e.qZA()(),e.TgZ(78,"tr")(79,"td"),e._uU(80,"autoHideDelay"),e.qZA(),e.TgZ(81,"td"),e._uU(82,"number"),e.qZA(),e.TgZ(83,"td"),e._uU(84,"100"),e.qZA(),e.TgZ(85,"td"),e._uU(86,"Delay to hide the root submenu in milliseconds when mouse leaves."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[u.c],encapsulation:2}),t})();const v=function(){return["/theming"]};let y=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["style-doc"]],inputs:{id:"id",title:"title"},decls:46,vars:4,consts:[[3,"title","id"],["href","#",3,"routerLink"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section")(1,"app-docsectiontext",0)(2,"p"),e._uU(3,"Following is the list of structural style classes, for theming classes visit "),e.TgZ(4,"a",1),e._uU(5,"theming"),e.qZA(),e._uU(6," page."),e.qZA()(),e.TgZ(7,"div",2)(8,"table",3)(9,"thead")(10,"tr")(11,"th"),e._uU(12,"Name"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Element"),e.qZA()()(),e.TgZ(15,"tbody")(16,"tr")(17,"td"),e._uU(18,"p-menubar"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"Container element."),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"p-menu-list"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"List element."),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"p-menuitem"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"Menuitem element."),e.qZA()(),e.TgZ(31,"tr")(32,"td"),e._uU(33,"p-menuitem-text"),e.qZA(),e.TgZ(34,"td"),e._uU(35,"Label of a menuitem."),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"p-menuitem-icon"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"Icon of a menuitem."),e.qZA()(),e.TgZ(41,"tr")(42,"td"),e._uU(43,"p-submenu-icon"),e.qZA(),e.TgZ(44,"td"),e._uU(45,"Arrow icon of a submenu."),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id),e.xp6(3),e.Q6J("routerLink",e.DdM(3,v)))},dependencies:[r.rH,u.c],encapsulation:2}),t})(),D=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["templates-doc"]],inputs:{id:"id",title:"title"},decls:31,vars:2,consts:[[3,"title","id"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"section"),e._UZ(1,"app-docsectiontext",0),e.TgZ(2,"div",1)(3,"table",2)(4,"thead")(5,"tr")(6,"th"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Parameters"),e.qZA()()(),e.TgZ(10,"tbody")(11,"tr")(12,"td"),e._uU(13,"start"),e.qZA(),e.TgZ(14,"td"),e._uU(15,"-"),e.qZA()(),e.TgZ(16,"tr")(17,"td"),e._uU(18,"end"),e.qZA(),e.TgZ(19,"td"),e._uU(20,"-"),e.qZA()(),e.TgZ(21,"tr")(22,"td"),e._uU(23,"menuicon"),e.qZA(),e.TgZ(24,"td"),e._uU(25,"-"),e.qZA()(),e.TgZ(26,"tr")(27,"td"),e._uU(28,"submenuicon"),e.qZA(),e.TgZ(29,"td"),e._uU(30,"-"),e.qZA()()()()()()),2&i&&(e.xp6(1),e.Q6J("title",o.title)("id",o.id))},dependencies:[u.c],encapsulation:2}),t})();var x=l(46544);let M=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["accessibility-doc"]],inputs:{id:"id",title:"title"},decls:158,vars:2,consts:[[3,"title","id"],["href","/configuration/#locale"],[1,"doc-tablewrapper"],[1,"doc-table"]],template:function(i,o){1&i&&(e.TgZ(0,"app-developmentsection")(1,"div")(2,"app-docsectiontext",0)(3,"h3"),e._uU(4,"Screen Reader"),e.qZA(),e.TgZ(5,"p"),e._uU(6," Menubar component uses the "),e.TgZ(7,"i"),e._uU(8,"menubar"),e.qZA(),e._uU(9," role and the value to describe the menu can either be provided with "),e.TgZ(10,"i"),e._uU(11,"aria-labelledby"),e.qZA(),e._uU(12," or "),e.TgZ(13,"i"),e._uU(14,"aria-label"),e.qZA(),e._uU(15," props. Each list item has a "),e.TgZ(16,"i"),e._uU(17,"presentation"),e.qZA(),e._uU(18," role whereas anchor elements have a "),e.TgZ(19,"i"),e._uU(20,"menuitem"),e.qZA(),e._uU(21," role with "),e.TgZ(22,"i"),e._uU(23,"aria-label"),e.qZA(),e._uU(24," referring to the label of the item and "),e.TgZ(25,"i"),e._uU(26,"aria-disabled"),e.qZA(),e._uU(27," defined if the item is disabled. A submenu within a MenuBar uses the "),e.TgZ(28,"i"),e._uU(29,"menu"),e.qZA(),e._uU(30," role with an "),e.TgZ(31,"i"),e._uU(32,"aria-labelledby"),e.qZA(),e._uU(33," defined as the id of the submenu root menuitem label. In addition, menuitems that open a submenu have "),e.TgZ(34,"i"),e._uU(35,"aria-haspopup"),e.qZA(),e._uU(36,", "),e.TgZ(37,"i"),e._uU(38,"aria-expanded"),e.qZA(),e._uU(39," and "),e.TgZ(40,"i"),e._uU(41,"aria-controls"),e.qZA(),e._uU(42," to define the relation between the item and the submenu. "),e.qZA(),e.TgZ(43,"p"),e._uU(44," In mobile viewports, a menu icon appears with a "),e.TgZ(45,"i"),e._uU(46,"button"),e.qZA(),e._uU(47," role along with "),e.TgZ(48,"i"),e._uU(49,"aria-haspopup"),e.qZA(),e._uU(50,", "),e.TgZ(51,"i"),e._uU(52,"aria-expanded"),e.qZA(),e._uU(53," and "),e.TgZ(54,"i"),e._uU(55,"aria-controls"),e.qZA(),e._uU(56," to manage the relation between the overlay menubar and the button. The value to describe the button can be defined "),e.TgZ(57,"i"),e._uU(58,"aria-label"),e.qZA(),e._uU(59," or "),e.TgZ(60,"i"),e._uU(61,"aria-labelledby"),e.qZA(),e._uU(62," specified using "),e.TgZ(63,"i"),e._uU(64,"buttonProps"),e.qZA(),e._uU(65,", by default "),e.TgZ(66,"i"),e._uU(67,"navigation"),e.qZA(),e._uU(68," key of the "),e.TgZ(69,"i"),e._uU(70,"aria"),e.qZA(),e._uU(71," property from the "),e.TgZ(72,"a",1),e._uU(73,"locale"),e.qZA(),e._uU(74," API as the "),e.TgZ(75,"i"),e._uU(76,"aria-label"),e.qZA(),e._uU(77,". "),e.qZA(),e.TgZ(78,"h3"),e._uU(79,"Keyboard Support"),e.qZA(),e.TgZ(80,"div",2)(81,"table",3)(82,"thead")(83,"tr")(84,"th"),e._uU(85,"Key"),e.qZA(),e.TgZ(86,"th"),e._uU(87,"Function"),e.qZA()()(),e.TgZ(88,"tbody")(89,"tr")(90,"td")(91,"i"),e._uU(92,"tab"),e.qZA()(),e.TgZ(93,"td"),e._uU(94,"Add focus to the first item if focus moves in to the menu. If the focus is already within the menu, focus moves to the next focusable item in the page tab sequence."),e.qZA()(),e.TgZ(95,"tr")(96,"td")(97,"i"),e._uU(98,"shift"),e.qZA(),e._uU(99," + "),e.TgZ(100,"i"),e._uU(101,"tab"),e.qZA()(),e.TgZ(102,"td"),e._uU(103,"Add focus to the last item if focus moves in to the menu. If the focus is already within the menu, focus moves to the previous focusable item in the page tab sequence."),e.qZA()(),e.TgZ(104,"tr")(105,"td")(106,"i"),e._uU(107,"enter"),e.qZA()(),e.TgZ(108,"td"),e._uU(109,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),e.qZA()(),e.TgZ(110,"tr")(111,"td")(112,"i"),e._uU(113,"space"),e.qZA()(),e.TgZ(114,"td"),e._uU(115,"If menuitem has a submenu, toggles the visibility of the submenu otherwise activates the menuitem and closes all open overlays."),e.qZA()(),e.TgZ(116,"tr")(117,"td")(118,"i"),e._uU(119,"escape"),e.qZA()(),e.TgZ(120,"td"),e._uU(121,"If focus is inside a popup submenu, closes the submenu and moves focus to the root item of the closed submenu."),e.qZA()(),e.TgZ(122,"tr")(123,"td")(124,"i"),e._uU(125,"down arrow"),e.qZA()(),e.TgZ(126,"td"),e._uU(127,"If focus is on a root element, open a submenu and moves focus to the first element in the submenu otherwise moves focus to the next menuitem within the submenu."),e.qZA()(),e.TgZ(128,"tr")(129,"td")(130,"i"),e._uU(131,"up arrow"),e.qZA()(),e.TgZ(132,"td"),e._uU(133,"If focus is on a root element, opens a submenu and moves focus to the last element in the submenu otherwise moves focus to the previous menuitem within the submenu."),e.qZA()(),e.TgZ(134,"tr")(135,"td")(136,"i"),e._uU(137,"right arrow"),e.qZA()(),e.TgZ(138,"td"),e._uU(139,"If focus is on a root element, moves focus to the next menuitem otherwise opens a submenu if there is one available and moves focus to the first item."),e.qZA()(),e.TgZ(140,"tr")(141,"td")(142,"i"),e._uU(143,"left arrow"),e.qZA()(),e.TgZ(144,"td"),e._uU(145,"If focus is on a root element, moves focus to the previous menuitem otherwise closes a submenu and moves focus to the root item of the closed submenu."),e.qZA()(),e.TgZ(146,"tr")(147,"td")(148,"i"),e._uU(149,"home"),e.qZA()(),e.TgZ(150,"td"),e._uU(151,"Moves focus to the first menuitem within the submenu."),e.qZA()(),e.TgZ(152,"tr")(153,"td")(154,"i"),e._uU(155,"end"),e.qZA()(),e.TgZ(156,"td"),e._uU(157,"Moves focus to the last menuitem within the submenu."),e.qZA()()()()()()()()),2&i&&(e.xp6(2),e.Q6J("title",o.title)("id",o.id))},dependencies:[u.c,x.N],encapsulation:2}),t})();var I=l(63408);let S=(()=>{class t{constructor(){this.docs=[{id:"import",label:"Import",component:h},{id:"basic",label:"Basic",component:_},{id:"template",label:"Template",component:A},{id:"style",label:"Style",component:y},{id:"accessibility",label:"Accessibility",component:M}],this.apiDocs=[{id:"props",label:"Properties",component:w},{id:"templates",label:"Templates",component:D},{id:"menuitem",label:"MenuItem API",component:q}]}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],decls:1,vars:2,consts:[["title","Angular Menubar Component","header","Menubar","description","Menubar is a horizontal menu component.",3,"docs","apiDocs"]],template:function(i,o){1&i&&e._UZ(0,"app-doc",0),2&i&&e.Q6J("docs",o.docs)("apiDocs",o.apiDocs)},dependencies:[I.x],encapsulation:2}),t})(),k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild([{path:"",component:S}]),r.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,k,f]}),t})()}}]);