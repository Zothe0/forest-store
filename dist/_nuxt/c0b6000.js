(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{251:function(t,e,n){"use strict";n.r(e);n(62),n(33),n(10),n(34),n(63),n(94),n(254),n(47),n(26);var o=n(5),c=n(96);function r(){return(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var body,n,o,data,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return body=r.length>1&&void 0!==r[1]?r[1]:{data:1},t.prev=1,e=c.a+e,body=JSON.stringify(body),n={method:"POST",body:body},t.next=7,fetch(e,n);case 7:return o=t.sent,t.next=10,o.json();case 10:return data=t.sent,t.abrupt("return",data);case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}var d=function(t){return r.apply(this,arguments)},l=(n(143),{data:function(){return{name:"",email:"",phone:"",question:"",placePhone:"Введите ваш номер телефона",response:!1,errorPhone:!1}},methods:{sendForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){e(t.validateForm())}));case 2:if(!e.sent){e.next=16;break}return body={name:t.name,email:t.email,phone:t.phone,question:t.question},t.name="",t.email="",t.phone="",t.question="",t.response=!0,setTimeout((function(){return t.response=!1}),2e3),e.next=13,d("/api/mail",body);case 13:e.sent,e.next=20;break;case 16:t.phone="",t.placePhone="Введите корректный номер телефона",t.errorPhone=!0,setTimeout((function(){t.placePhone="Введите ваш номер телефона",t.errorPhone=!1}),2500);case 20:case"end":return e.stop()}}),e)})))()},validateForm:function(){return 0===this.phone.trim().replace(/[.*+?^${}()|[\]\\]/g,"").split("").filter((function(i){return isNaN(i)})).length&&this.phone.length>0}}}),_=(n(257),n(23)),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts"},[n("a",{staticClass:"contacts__link",attrs:{name:"contacts"}}),t._v(" "),n("div",{staticClass:"contacts__container"},[n("div",{staticClass:"contacts__header"},[t._v("Оставить заявку")]),t._v(" "),n("div",{staticClass:"contacts__row"},[n("div",{staticClass:"contacts__column"},[t._m(0),t._v(" "),n("div",{staticClass:"social-links"},[n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","telegram"]}})],1),t._v(" "),n("a",{staticClass:"soc-link",attrs:{href:""}},[n("fa",{attrs:{icon:["fab","whatsapp"]}})],1)])]),t._v(" "),n("div",{staticClass:"contacts__column"},[n("form",{staticClass:"contacts__form",on:{submit:function(e){return e.preventDefault(),t.sendForm(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите ваше имя",maxlength:"50"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите email",maxlength:"30"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"contacts__input",class:{error:t.errorPhone},attrs:{placeholder:t.placePhone,type:"tel",maxlength:"30"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"contacts__area",attrs:{placeholder:"Заинтересовавший вас товар или вопрос(необязательно)",rows:"5",maxlength:"600"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),t._v(" "),n("div",{staticClass:"contacts__commit"},[n("button",{staticClass:"contacts__button",class:{hide:t.response},attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\tОтправить\n\t\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"contacts__succes",class:{active:t.response}},[t._v("\n\t\t\t\t\t\t\tВаша заявка успешно отправлена!\n\t\t\t\t\t\t")])]),t._v(" "),n("div",{staticClass:"contacts__rights"},[t._v("\n\t\t\t\t\t\tНажимая на кнопку, вы даете полное, информированное\n\t\t\t\t\t\tсогласие и блаблабла политика (гиперссылка)\n\t\t\t\t\t")])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"contacts__addres"},[e("p",[this._v("Тел: + 7 916 968 08 77")]),this._v(" "),e("p",[this._v("E-mail: lesnye.radosti@gmail.com")])])}],!1,null,"104562ee",null);e.default=component.exports;installComponents(component,{Form:n(251).default})},252:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},253:function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2d0f8f11",content,!0,{sourceMap:!1})},254:function(t,e,n){"use strict";var o=n(2),c=n(255).trim;o({target:"String",proto:!0,forced:n(256)("trim")},{trim:function(){return c(this)}})},255:function(t,e,n){var o=n(11),c="["+n(252)+"]",r=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),l=function(t){return function(e){var n=String(o(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:l(1),end:l(2),trim:l(3)}},256:function(t,e,n){var o=n(6),c=n(252);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},257:function(t,e,n){"use strict";n(253)},258:function(t,e,n){(e=n(21)(!1)).push([t.i,'.soc-link[data-v-104562ee]{font-size:28px;margin-right:3px}.soc-link[data-v-104562ee]:last-child{margin:0}.contacts[data-v-104562ee]{display:flex;flex-direction:column;justify-content:center;margin-bottom:50px;position:relative;padding:0 20px}.contacts__link[data-v-104562ee]{position:absolute;top:-100px}.contacts__container[data-v-104562ee]{max-width:960px;margin:0 auto}.contacts__header[data-v-104562ee]{font-weight:600;font-size:42px;margin-bottom:65px}.contacts__header[data-v-104562ee],.contacts__info[data-v-104562ee]{display:flex;justify-content:center}.contacts__info[data-v-104562ee]{text-align:justify;flex-direction:column;align-items:flex-start;font-size:24px;font-weight:300;max-width:605px;margin:0 auto 125px;line-height:1.3em}.contacts__p[data-v-104562ee]{margin-bottom:10px}.contacts__row[data-v-104562ee]{display:flex}.contacts__column[data-v-104562ee]{display:flex;flex-direction:column;flex:1 1 50%}.contacts__addres[data-v-104562ee]{font-size:28px;font-weight:300;margin-bottom:25px}.contacts__addres p[data-v-104562ee]{margin-bottom:7px}.contacts__addres p[data-v-104562ee]:last-child{margin:0}.contacts__form[data-v-104562ee]{display:flex;flex-direction:column}.contacts__input[data-v-104562ee]{height:60px;padding:0 15px;border:1px solid #cecece;margin-bottom:24px;border-radius:3px}.contacts__input.error[data-v-104562ee]{border:1px solid red}.contacts__input.error[data-v-104562ee]::-webkit-input-placeholder{color:red}.contacts__input.error[data-v-104562ee]:-moz-placeholder,.contacts__input.error[data-v-104562ee]::-moz-placeholder{color:red}.contacts__input.error[data-v-104562ee]:-ms-input-placeholder{color:red}.contacts__area[data-v-104562ee]{resize:none;border:1px solid #cecece;margin-bottom:24px;font-family:"Roboto","Helvetica Neue",Arial,sans-serif;padding:10px 15px 0}.contacts__commit[data-v-104562ee]{position:relative;display:flex;justify-content:center}.contacts__button[data-v-104562ee]{width:200px;height:60px;font-weight:700;color:#fff;border-radius:30px;background-color:#1f5bff;margin-bottom:24px;transition:all .3s ease 0s;z-index:10}.contacts__button[data-v-104562ee]:hover{background-color:#1742b6}.contacts__button.hide[data-v-104562ee]{opacity:0}.contacts__succes[data-v-104562ee]{font-size:26px;position:absolute;top:25%;opacity:0;transition:all .3s ease 0s}.contacts__succes.active[data-v-104562ee]{opacity:1}@media screen and (max-width:768px){.contacts__header[data-v-104562ee]{font-size:28px;margin-bottom:25px}.contacts__info[data-v-104562ee]{font-size:16px;margin-bottom:45px}.contacts__column[data-v-104562ee]:first-child{flex:0 0 40%}.contacts__addres[data-v-104562ee]{font-size:18px}.contacts__input[data-v-104562ee]{height:45px;margin-bottom:24px}.contacts__succes[data-v-104562ee]{font-size:18px}}@media screen and (max-width:576px){.contacts__row[data-v-104562ee]{flex-direction:column}.contacts__column[data-v-104562ee]:first-child{margin-bottom:25px}.contacts__button[data-v-104562ee]{width:120px;height:35px}.contacts__succes[data-v-104562ee]{font-size:24px}}',""]),t.exports=e},261:function(t,e,n){var content=n(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("5f43af2a",content,!0,{sourceMap:!1})},262:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("d026bc38",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("4d78a40e",content,!0,{sourceMap:!1})},264:function(t,e,n){"use strict";n.r(e);var o=n(265),c={props:{list:{type:Array}},components:{ProductCard:o.default}},r=(n(272),n(23)),component=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column"},this._l(this.list,(function(t){return e("ProductCard",{key:t.title,attrs:{cardData:t}})})),1)}),[],!1,null,"205b2fdf",null);e.default=component.exports;installComponents(component,{ProductCard:n(265).default})},265:function(t,e,n){"use strict";n.r(e);var o={props:["cardData"],data:function(){return{card:this.cardData,shadowVisible:!1,src:"asdasd"}},methods:{hideShadow:function(){this.shadowVisible=!1},showShadow:function(){this.shadowVisible=!0}}},c=(n(270),n(23)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("nuxt-link",{staticClass:"img-wrapper",attrs:{to:"/products/index.vue"}},[n("div",{staticClass:"img",style:{background:"center/cover url("+t.card.image+")"},on:{mouseenter:t.showShadow,mouseleave:t.hideShadow}},[n("nuxt-link",{attrs:{to:t.card.path}},[n("transition",{attrs:{name:"fade"}},[t.shadowVisible?n("div",{staticClass:"shadow",on:{mouseleave:t.hideShadow}},[n("div",{staticClass:"shadow__text"},[t._v("Подробнее о товаре")])]):t._e()])],1)],1),t._v(" "),n("div",{staticClass:"title"},[t._v("\n\t\t\t"+t._s(t.card.title)+"\n\t\t")])]),t._v(" "),n("a",{staticClass:"order",attrs:{href:"/#contacts"}},[t._v("Заказать")]),t._v(" "),n("nuxt-link",{staticClass:"descrition",attrs:{to:t.card.path}},[t._v("Подробнее о товаре")])],1)}),[],!1,null,"06c4b772",null);e.default=component.exports},270:function(t,e,n){"use strict";n(261)},271:function(t,e,n){(e=n(21)(!1)).push([t.i,".fade-enter-active[data-v-06c4b772],.fade-leave-active[data-v-06c4b772]{transition:all .3s ease}.fade-enter[data-v-06c4b772]{transform:translateX(-30%);opacity:0}.fade-leave-to[data-v-06c4b772]{transform:translateX(30%);opacity:0}.card[data-v-06c4b772]{display:flex;margin:0 20px 45px;flex-direction:column;flex:0 0 20%;min-width:20%}.img-wrapper[data-v-06c4b772]{display:flex;flex-direction:column;height:250px;flex:0 0 auto}.img[data-v-06c4b772]{border:1px solid #000;position:relative;border-radius:5px;height:200px;margin-bottom:15px;flex:1 1 124px}.shadow[data-v-06c4b772]{position:absolute;top:0;left:0;display:flex;color:#fff;font-weight:500;align-items:center;justify-content:center;font-size:14px;border-radius:5px;height:100%;width:100%;transition:all .3s ease 0s;background-color:rgba(0,0,0,.55)}.title[data-v-06c4b772]{font-size:18px;font-weight:700;margin-bottom:10px}.description[data-v-06c4b772]{font-size:14px;font-weight:300;margin-bottom:15px;line-height:1.2em}.order[data-v-06c4b772]{display:flex;justify-content:center;align-items:center;margin-bottom:8px;border:1px solid #000;border-radius:3px;height:35px;max-width:100%;font-size:13px;font-weight:600;background-color:#fff;transition:all .3s ease 0s}.order[data-v-06c4b772]:hover{background-color:#000}.descrition[data-v-06c4b772],.order[data-v-06c4b772]:hover{border:1px solid #fff;color:#fff}.descrition[data-v-06c4b772]{display:flex;align-items:center;justify-content:center;border-radius:3px;height:35px;max-width:100%;font-size:13px;font-weight:600;background-color:#719c7b;transition:all .3s ease 0s}.descrition[data-v-06c4b772]:hover{border:1px solid #000;background-color:#fff;color:#000}@media screen and (max-width:768px){.order[data-v-06c4b772]:hover{border:1px solid #000;background-color:#fff;color:#000}.descrition[data-v-06c4b772]:hover{border:1px solid #fff;background-color:#719c7b;color:#fff}.card[data-v-06c4b772]{flex:1 0 20%;margin:0 10px 40px;min-width:30%}.title[data-v-06c4b772]{font-size:16px}}",""]),t.exports=e},272:function(t,e,n){"use strict";n(262)},273:function(t,e,n){(e=n(21)(!1)).push([t.i,".column[data-v-205b2fdf]{display:flex;flex-wrap:wrap;justify-content:center;max-width:1260px;margin:0 auto}@media screen and (max-width:768px){.column[data-v-205b2fdf]{flex-direction:row;padding:0 10px}.row[data-v-205b2fdf]{flex-direction:column}}",""]),t.exports=e},274:function(t,e,n){"use strict";n(263)},275:function(t,e,n){var o=n(21),c=n(95),r=n(276);e=o(!1);var d=c(r);e.push([t.i,'.soc-link[data-v-6d22c6ca]{font-size:28px;margin-right:3px}.soc-link[data-v-6d22c6ca]:last-child{margin:0}.link[data-v-6d22c6ca]{margin-top:100px}.wrapper[data-v-6d22c6ca]{background-color:#fff}.header[data-v-6d22c6ca]{height:100vh;background:50%/cover url(/images/zastavka.webp);display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:100px 20px 0;font-family:"Yanone Kaffeesatz",Arial,sans-serif;color:#719c7b}.header__image[data-v-6d22c6ca]{background:50%/cover no-repeat url('+d+");background-repeat:no-repeat;width:320px;height:320px;border-radius:50%;margin-bottom:55px;flex:0 0 auto}.header__title[data-v-6d22c6ca]{font-size:46px;margin-bottom:35px}.header__text[data-v-6d22c6ca],.header__title[data-v-6d22c6ca]{font-weight:700;text-align:center}.header__text[data-v-6d22c6ca]{font-size:26px;max-width:670px;line-height:1.3em}@media screen and (max-width:767px){.header[data-v-6d22c6ca]{height:100%}.header__image[data-v-6d22c6ca]{width:150px;height:150px}.header__title[data-v-6d22c6ca]{font-size:30px}}@media screen and (max-width:576px){.header__title[data-v-6d22c6ca]{font-size:28px}.header__text[data-v-6d22c6ca]{font-size:20px}}.advantages[data-v-6d22c6ca]{background-color:#efefef;padding:110px 20px 0;position:relative}.advantages__link[data-v-6d22c6ca]{position:absolute;top:-80px}.advantages__header[data-v-6d22c6ca]{font-size:50px;font-weight:700;text-align:center;margin-bottom:105px}.advantages__columns[data-v-6d22c6ca]{display:flex;justify-content:center}.advantages__column[data-v-6d22c6ca]{display:flex;flex-direction:column}.advantages__row[data-v-6d22c6ca]{display:flex;justify-content:center;padding:0 -31px;margin-bottom:70px}.advantages__mini-row[data-v-6d22c6ca]{display:flex;margin:0 31px}.advantages__text[data-v-6d22c6ca]{max-width:425px;margin-right:10px}.advantages__title[data-v-6d22c6ca]{font-size:24px;line-height:1.3em;font-weight:700;margin-bottom:30px}.advantages__info[data-v-6d22c6ca]{text-align:justify;line-height:1.5em}.advantages__img[data-v-6d22c6ca]{width:100px;height:100px;border-radius:50%}@media screen and (max-width:1259px){.advantages__header[data-v-6d22c6ca]{font-size:34px}.advantages__title[data-v-6d22c6ca]{text-align:center}.advantages__mini-row[data-v-6d22c6ca]{margin:0}.advantages__text[data-v-6d22c6ca]{margin-right:0}.advantages__row[data-v-6d22c6ca]{flex-direction:column;align-items:center;margin-bottom:0}.advantages__mini-row[data-v-6d22c6ca]{margin-bottom:40px}}@media screen and (max-width:767px){.advantages[data-v-6d22c6ca]{padding-top:35px}.advantages__header[data-v-6d22c6ca]{margin-bottom:22px}.advantages__mini-row[data-v-6d22c6ca]{flex-direction:column-reverse;align-items:center}.advantages__text[data-v-6d22c6ca]{margin-bottom:20px}.advantages__title[data-v-6d22c6ca]{line-height:1em;margin-bottom:15px}.advantages__info[data-v-6d22c6ca]{line-height:1.2em}.advantages__img[data-v-6d22c6ca]{margin-bottom:15px}}.goods[data-v-6d22c6ca]{margin-bottom:150px;position:relative}.goods__link[data-v-6d22c6ca]{position:absolute;top:-71px}.goods__container[data-v-6d22c6ca]{max-width:1160px;margin:0 auto}.goods__header[data-v-6d22c6ca]{margin-top:30px;margin-bottom:100px;text-align:center;font-size:42px;font-weight:600}@media screen and (max-width:768px){.goods[data-v-6d22c6ca]{margin-bottom:50px}.goods__header[data-v-6d22c6ca]{font-size:30px;margin-bottom:30px}}.contacts[data-v-6d22c6ca]{display:flex;flex-direction:column;justify-content:center;margin-bottom:50px;position:relative;padding:0 20px}.contacts__link[data-v-6d22c6ca]{position:absolute;top:-100px}.contacts__container[data-v-6d22c6ca]{max-width:960px;margin:0 auto}.contacts__header[data-v-6d22c6ca]{font-weight:600;font-size:42px;margin-bottom:65px}.contacts__header[data-v-6d22c6ca],.contacts__info[data-v-6d22c6ca]{display:flex;justify-content:center}.contacts__info[data-v-6d22c6ca]{padding:0 20px;text-align:justify;flex-direction:column;align-items:flex-start;font-size:24px;font-weight:300;max-width:605px;margin:0 auto 125px;line-height:1.3em}.contacts__p[data-v-6d22c6ca]{margin-bottom:10px}@media screen and (max-width:768px){.contacts__header[data-v-6d22c6ca]{font-size:28px;margin-bottom:25px}.contacts__info[data-v-6d22c6ca]{font-size:16px;margin-bottom:45px}}",""]),t.exports=e},276:function(t,e,n){t.exports=n.p+"img/logo.2c03eb3.svg"},279:function(t,e,n){"use strict";n.r(e);var o=n(138),c=n(264),r=n(251),d={components:{MenuBar:o.a,ProductsTable:c.default,Form:r.default},data:function(){return{list:[{image:"images/products/adaptogen.webp",title:"Адаптогены",path:"/product?name=adaptogen"},{image:"images/products/tea.webp",title:"Травяные чаи",path:"/product?name=tea"},{image:"images/products/mushroom.webp",title:"Грибы (белый, лисички,опята, рейши, чага, агарикус)",path:"/product?name=mushroom"},{image:"images/products/berries.webp",title:"Ягоды сушеные",path:"/product?name=berries"},{image:"images/products/moss.webp",title:"Исландский мох",path:"/product?name=moss"},{image:"images/products/mumie.webp",title:"Мумие",path:"/product?name=mumie"},{image:"images/products/stone-oil.webp",title:"Каменное масло",path:"/product?name=stone-oil"},{image:"images/products/hedge.webp",title:"Живица",path:"/product?name=hedge"},{image:"images/products/raw-oil.webp",title:"Масла сыродавленные под заказ",path:"/product?name=raw-oil"},{image:"images/products/ghee-oil.webp",title:"Масло Гхи",path:"/product?name=ghee-oil"},{image:"images/products/cedar-coffee.webp",title:"Кедрокофе",path:"/product?name=cedar-coffee"},{image:"images/products/pine-nut.webp",title:"Кедровых орех (продукция на основе кедрового ореха, ореховые пасты с шоколадом и др.)",path:"/product?name=pine-nut"},{image:"images/products/honey.webp",title:"Мед",path:"/product?name=honey"},{image:"images/products/cream-honey.webp",title:"Крем-мед",path:"/product?name=cream-honey"},{image:"images/products/premium-honey.webp",title:"Премиальный дягилевый мед",path:"/product?name=premium-honey"},{image:"images/products/fir-oil.webp",title:"Пихтовое масло",path:"/product?name=fir-oil"},{image:"images/products/production.webp",title:"Продукция на основе сосновых зеленых шишек",path:"/product?name=production"},{image:"images/products/gift-set.webp",title:"Подарочные наборы к праздникам и торжествам",path:"/product?name=gift-set"},{image:"images/products/burdock-juice.webp",title:"Сок лопуха с медом",path:"/product?name=burdock-juice"},{image:"images/products/cedar-pillows.webp",title:"Подушки с кедровой скорлупой",path:"/product?name=cedar-pillows"},{image:"images/products/royal-jelly.webp",title:"Маточное молочко",path:"/product?name=royal-jelly"},{image:"images/products/boron-uterus.webp",title:"Красная щетка и боровая матка",path:"/product?name=boron-uterus"}]}}},l=(n(274),n(23)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"advantages"},[n("a",{staticClass:"advantages__link",attrs:{name:"advantages"}}),t._v(" "),n("div",{staticClass:"advantages__header"},[t._v("\n\t\t\t\tПочему предлагаем выбрать именно наши товары\n\t\t\t")]),t._v(" "),n("div",{staticClass:"advantages__column"},[n("div",{staticClass:"advantages__row"},[n("div",{staticClass:"advantages__mini-row"},[t._m(1),t._v(" "),n("div",{staticClass:"advantages__img",style:{background:"center/cover url(/images/les1.webp)"}})]),t._v(" "),n("div",{staticClass:"advantages__mini-row"},[t._m(2),t._v(" "),n("div",{staticClass:"advantages__img",style:{background:"center/cover url(/images/les3.webp)"}})])]),t._v(" "),n("div",{staticClass:"advantages__row"},[n("div",{staticClass:"advantages__mini-row"},[t._m(3),t._v(" "),n("div",{staticClass:"advantages__img",style:{background:"center/cover url(/images/les6.webp)"}})]),t._v(" "),n("div",{staticClass:"advantages__mini-row"},[t._m(4),t._v(" "),n("div",{staticClass:"advantages__img",style:{background:"center/cover url(/images/les4.webp)"}})])]),t._v(" "),n("div",{staticClass:"advantages__row"},[n("div",{staticClass:"advantages__mini-row"},[t._m(5),t._v(" "),n("div",{staticClass:"advantages__img",style:{background:"center/cover url(/images/squirrel.webp)"}})]),t._v(" "),n("div",{staticClass:"advantages__mini-row"},[t._m(6),t._v(" "),n("div",{staticClass:"advantages__img",style:{background:"center/cover url(/images/les8.webp)"}})])])])]),t._v(" "),n("div",{staticClass:"goods"},[n("a",{staticClass:"goods__link",attrs:{name:"goods"}}),t._v(" "),n("div",{staticClass:"goods__container"},[n("div",{staticClass:"goods__header"},[t._v("\n\t\t\t\t\tВыбирайте здоровую, натуральную пищу, подаренную самой\n\t\t\t\t\tприродой!\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"goods__slider"},[n("transition",{attrs:{name:"product"}},[n("div",{staticClass:"goods__track"},[n("ProductsTable",{attrs:{list:t.list}})],1)])],1)])]),t._v(" "),t._m(7),t._v(" "),n("Form")],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"header__image"}),this._v(" "),e("div",{staticClass:"header__title"},[this._v("\n\t\t\t\tИнтернет-магазин здорового питания\n\t\t\t")]),this._v(" "),e("div",{staticClass:"header__text"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantages__text"},[e("p",{staticClass:"advantages__title"},[this._v("\n\t\t\t\t\t\t\t\tУникальная полезная продукция (дикорастущие\n\t\t\t\t\t\t\t\tтравы, ягоды, грибы, орехи и др.)\n\t\t\t\t\t\t\t")]),this._v(" "),e("p",{staticClass:"advantages__info"},[this._v("\n\t\t\t\t\t\t\t\tСвежие сборы трав, грибов, ягод 2020 г.\n\t\t\t\t\t\t\t\tМесто произрастания: Горный Алтай (Онгудай,\n\t\t\t\t\t\t\t\tБелокуриха и т. д.), Алтайский край,\n\t\t\t\t\t\t\t\tНовосибирская область. Дикорастущие\n\t\t\t\t\t\t\t\tрастения, произрастающие в жестких, суровых\n\t\t\t\t\t\t\t\tусловиях более богаты витаминами,\n\t\t\t\t\t\t\t\tмикроэлементами и др. биологически активными\n\t\t\t\t\t\t\t\tвеществами. Горные растения активнее по\n\t\t\t\t\t\t\t\tсравнению с равнинными из одного и того же\n\t\t\t\t\t\t\t\tрода.\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantages__text"},[e("p",{staticClass:"advantages__title"},[this._v("\n\t\t\t\t\t\t\t\tСобственные заготовки сырья и проверенные\n\t\t\t\t\t\t\t\tпоставщики\n\t\t\t\t\t\t\t")]),this._v(" "),e("p",{staticClass:"advantages__info"},[this._v("\n\t\t\t\t\t\t\t\tВсю продукцию мы либо заготавливаем сами\n\t\t\t\t\t\t\t\t(индивидуальная ручная сборка), либо\n\t\t\t\t\t\t\t\tзаказываем сырье у проверенных поставщиков\n\t\t\t\t\t\t\t\t(по желанию предоставим фото места сбора и\n\t\t\t\t\t\t\t\tдругую информацию).\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantages__text"},[e("p",{staticClass:"advantages__title"},[this._v("\n\t\t\t\t\t\t\t\tКачественная, свежая и индивидуальная\n\t\t\t\t\t\t\t\tпродукция\n\t\t\t\t\t\t\t")]),this._v(" "),e("p",{staticClass:"advantages__info"},[this._v("\n\t\t\t\t\t\t\t\tРучная, индивидуальная фасовка, насыщенный\n\t\t\t\t\t\t\t\tвкус, свежий аромат, отличается от аптечной,\n\t\t\t\t\t\t\t\tгде сырье заготавливается огромными партиями\n\t\t\t\t\t\t\t\tи храниться ни один сезон на складах, что\n\t\t\t\t\t\t\t\tпонижает биологическую активность\n\t\t\t\t\t\t\t\tкомпонентов. Некоторая продукция только под\n\t\t\t\t\t\t\t\tзаказ, например, масла, которые быстро\n\t\t\t\t\t\t\t\tокисляются.\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantages__text"},[e("p",{staticClass:"advantages__title"},[this._v("\n\t\t\t\t\t\t\t\tБез вытяжки и обработки\n\t\t\t\t\t\t\t")]),this._v(" "),e("p",{staticClass:"advantages__info"},[this._v("\n\t\t\t\t\t\t\t\tМы предлагаем сырье в первозданном виде, мы\n\t\t\t\t\t\t\t\tпротив вытяжки и заготовок, которые\n\t\t\t\t\t\t\t\tподвергались переработке, ведь это снижает\n\t\t\t\t\t\t\t\tактивность веществ. Мы не используем сырье\n\t\t\t\t\t\t\t\tсо склада или с искусственно выращенных\n\t\t\t\t\t\t\t\tплантаций.\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantages__text"},[e("p",{staticClass:"advantages__title"},[this._v("\n\t\t\t\t\t\t\t\tБез вреда окружающей среде и животным\n\t\t\t\t\t\t\t")]),this._v(" "),e("p",{staticClass:"advantages__info"},[this._v("\n\t\t\t\t\t\t\t\tВ магазине вы не увидите такие позиции, как\n\t\t\t\t\t\t\t\tпантовая продукции и другие, такие как\n\t\t\t\t\t\t\t\tбарсучий жир и медвежья желчь и др. В погоне\n\t\t\t\t\t\t\t\tза наживой браконьеры уничтожают животных, а\n\t\t\t\t\t\t\t\tв этом нет необходимости, так как дары\n\t\t\t\t\t\t\t\tприроды в виде трав, ягод, грибов и т. д.\n\t\t\t\t\t\t\t\tобладают уникальными лечебными свойствами, и\n\t\t\t\t\t\t\t\tнет необходимости прибегать к средствам\n\t\t\t\t\t\t\t\tживотного происхождения.\n\t\t\t\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"advantages__text"},[e("p",{staticClass:"advantages__title"},[this._v("\n\t\t\t\t\t\t\t\tНеобходимо жителям мегаполисов\n\t\t\t\t\t\t\t")]),this._v(" "),e("p",{staticClass:"advantages__info"},[this._v("\n\t\t\t\t\t\t\t\tНаша продукция будет полезна жителям\n\t\t\t\t\t\t\t\tмегаполиса, кто испытывает постоянную\n\t\t\t\t\t\t\t\tхроническую усталость, имеет повышенные\n\t\t\t\t\t\t\t\tэмоциональные и умственные нагрузки, кто\n\t\t\t\t\t\t\t\tсвязан с вредными условиями труда, кто хочет\n\t\t\t\t\t\t\t\tпридерживаться здорового питания, повысить\n\t\t\t\t\t\t\t\tзащитные силы организма\n\t\t\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contacts__container"},[n("div",{staticClass:"contacts__header"},[t._v("Связь с нами")]),t._v(" "),n("div",{staticClass:"contacts__info"},[n("p",{staticClass:"contacts__p"},[t._v("\n\t\t\t\tДля заказы свяжитесь с нами любым удобным для вас способом:\n\t\t\t")]),t._v(" "),n("p",{staticClass:"contacts__p"},[t._v("\n\t\t\t\t1. Оставьте заявку через форму представленную слева (укажите\n\t\t\t\tномер и мы вам перезвоним в удобное время или адрес\n\t\t\t\tэлектронной почты с комментарием о том или ином товаре)\n\t\t\t")]),t._v(" "),n("p",{staticClass:"contacts__p"},[t._v("2. Позвоните или напишите нам")]),t._v(" "),n("p",{staticClass:"contacts__p"},[t._v("\n\t\t\t\t3. Напишите нам в любой из соц.сетей (инстаграм, воцап,\n\t\t\t\tтелеграм)\n\t\t\t")])])])}],!1,null,"6d22c6ca",null);e.default=component.exports;installComponents(component,{ProductsTable:n(264).default,Form:n(251).default})}}]);