(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{251:function(t,n,e){"use strict";e.r(n);e(62),e(33),e(10),e(34),e(63),e(94),e(254),e(47),e(26);var o=e(5),c=e(95);function r(){return(r=Object(o.a)(regeneratorRuntime.mark((function t(n){var body,e,o,data,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return body=r.length>1&&void 0!==r[1]?r[1]:{data:1},t.prev=1,n=c.a+n,body=JSON.stringify(body),e={method:"POST",body:body},t.next=7,fetch(n,e);case 7:return o=t.sent,t.next=10,o.json();case 10:return data=t.sent,t.abrupt("return",data);case 14:t.prev=14,t.t0=t.catch(1),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}var d=function(t){return r.apply(this,arguments)},l=(e(143),{data:function(){return{name:"",email:"",phone:"",question:"",placePhone:"Введите ваш номер телефона",response:!1,errorPhone:!1}},methods:{sendForm:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var body;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,new Promise((function(n){n(t.validateForm())}));case 2:if(!n.sent){n.next=16;break}return body={name:t.name,email:t.email,phone:t.phone,question:t.question},t.name="",t.email="",t.phone="",t.question="",t.response=!0,setTimeout((function(){return t.response=!1}),2e3),n.next=13,d("/api/foo",body);case 13:n.sent,n.next=20;break;case 16:t.phone="",t.placePhone="Введите корректный номер телефона",t.errorPhone=!0,setTimeout((function(){t.placePhone="Введите ваш номер телефона",t.errorPhone=!1}),2500);case 20:case"end":return n.stop()}}),n)})))()},validateForm:function(){return 0===this.phone.trim().replace(/[.*+?^${}()|[\]\\]/g,"").split("").filter((function(i){return isNaN(i)})).length&&this.phone.length>0}}}),f=(e(257),e(23)),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contacts"},[e("a",{staticClass:"contacts__link",attrs:{name:"contacts"}}),t._v(" "),e("div",{staticClass:"contacts__container"},[e("div",{staticClass:"contacts__header"},[t._v("Оставить заявку")]),t._v(" "),e("div",{staticClass:"contacts__row"},[e("div",{staticClass:"contacts__column"},[t._m(0),t._v(" "),e("div",{staticClass:"social-links"},[e("a",{staticClass:"soc-link",attrs:{href:""}},[e("fa",{attrs:{icon:["fab","instagram"]}})],1),t._v(" "),e("a",{staticClass:"soc-link",attrs:{href:""}},[e("fa",{attrs:{icon:["fab","telegram"]}})],1),t._v(" "),e("a",{staticClass:"soc-link",attrs:{href:""}},[e("fa",{attrs:{icon:["fab","whatsapp"]}})],1)])]),t._v(" "),e("div",{staticClass:"contacts__column"},[e("form",{staticClass:"contacts__form",on:{submit:function(n){return n.preventDefault(),t.sendForm(n)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите ваше имя",maxlength:"50"},domProps:{value:t.name},on:{input:function(n){n.target.composing||(t.name=n.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"contacts__input",attrs:{type:"text",placeholder:"Введите email",maxlength:"30"},domProps:{value:t.email},on:{input:function(n){n.target.composing||(t.email=n.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"contacts__input",class:{error:t.errorPhone},attrs:{placeholder:t.placePhone,type:"tel",maxlength:"30"},domProps:{value:t.phone},on:{input:function(n){n.target.composing||(t.phone=n.target.value)}}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"contacts__area",attrs:{placeholder:"Заинтересовавший вас товар или вопрос(необязательно)",rows:"5",maxlength:"600"},domProps:{value:t.question},on:{input:function(n){n.target.composing||(t.question=n.target.value)}}}),t._v(" "),e("div",{staticClass:"contacts__commit"},[e("button",{staticClass:"contacts__button",class:{hide:t.response},attrs:{type:"submit"}},[t._v("\n\t\t\t\t\t\t\tОтправить\n\t\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"contacts__succes",class:{active:t.response}},[t._v("\n\t\t\t\t\t\t\tВаша заявка успешно отправлена!\n\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"contacts__rights"},[t._v("\n\t\t\t\t\t\tНажимая на кнопку, вы даете полное, информированное\n\t\t\t\t\t\tсогласие и блаблабла политика (гиперссылка)\n\t\t\t\t\t")])])])])])])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"contacts__addres"},[n("p",[this._v("Тел: + 7 916 968 08 77")]),this._v(" "),n("p",[this._v("E-mail: lesnye.radosti@gmail.com")])])}],!1,null,"65f24288",null);n.default=component.exports;installComponents(component,{Form:e(251).default})},252:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},253:function(t,n,e){var content=e(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("3e6db3e4",content,!0,{sourceMap:!1})},254:function(t,n,e){"use strict";var o=e(2),c=e(255).trim;o({target:"String",proto:!0,forced:e(256)("trim")},{trim:function(){return c(this)}})},255:function(t,n,e){var o=e(11),c="["+e(252)+"]",r=RegExp("^"+c+c+"*"),d=RegExp(c+c+"*$"),l=function(t){return function(n){var e=String(o(n));return 1&t&&(e=e.replace(r,"")),2&t&&(e=e.replace(d,"")),e}};t.exports={start:l(1),end:l(2),trim:l(3)}},256:function(t,n,e){var o=e(6),c=e(252);t.exports=function(t){return o((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},257:function(t,n,e){"use strict";e(253)},258:function(t,n,e){(n=e(21)(!1)).push([t.i,'.soc-link[data-v-65f24288]{font-size:28px;margin-right:3px}.soc-link[data-v-65f24288]:last-child{margin:0}.contacts[data-v-65f24288]{display:flex;flex-direction:column;justify-content:center;margin-bottom:50px;position:relative;padding:0 20px}.contacts__link[data-v-65f24288]{position:absolute;top:-100px}.contacts__container[data-v-65f24288]{max-width:960px;margin:0 auto}.contacts__header[data-v-65f24288]{font-weight:600;font-size:42px;margin-bottom:65px}.contacts__header[data-v-65f24288],.contacts__info[data-v-65f24288]{display:flex;justify-content:center}.contacts__info[data-v-65f24288]{text-align:justify;flex-direction:column;align-items:flex-start;font-size:24px;font-weight:300;max-width:605px;margin:0 auto 125px;line-height:1.3em}.contacts__p[data-v-65f24288]{margin-bottom:10px}.contacts__row[data-v-65f24288]{display:flex}.contacts__column[data-v-65f24288]{display:flex;flex-direction:column;flex:1 1 50%}.contacts__addres[data-v-65f24288]{font-size:28px;font-weight:300;margin-bottom:25px}.contacts__addres p[data-v-65f24288]{margin-bottom:7px}.contacts__addres p[data-v-65f24288]:last-child{margin:0}.contacts__form[data-v-65f24288]{display:flex;flex-direction:column}.contacts__input[data-v-65f24288]{height:60px;padding:0 15px;border:1px solid #cecece;margin-bottom:24px;border-radius:3px}.contacts__input.error[data-v-65f24288]{border:1px solid red}.contacts__input.error[data-v-65f24288]::-webkit-input-placeholder{color:red}.contacts__input.error[data-v-65f24288]:-moz-placeholder,.contacts__input.error[data-v-65f24288]::-moz-placeholder{color:red}.contacts__input.error[data-v-65f24288]:-ms-input-placeholder{color:red}.contacts__area[data-v-65f24288]{resize:none;border:1px solid #cecece;margin-bottom:24px;font-family:"Roboto","Helvetica Neue",Arial,sans-serif;padding:10px 15px 0}.contacts__commit[data-v-65f24288]{position:relative;display:flex;justify-content:center}.contacts__button[data-v-65f24288]{width:200px;height:60px;font-weight:700;color:#fff;border-radius:30px;background-color:#1f5bff;margin-bottom:24px;transition:all .3s ease 0s;z-index:10}.contacts__button[data-v-65f24288]:hover{background-color:#1742b6}.contacts__button.hide[data-v-65f24288]{opacity:0}.contacts__succes[data-v-65f24288]{font-size:26px;position:absolute;top:25%;opacity:0;transition:all .3s ease 0s}.contacts__succes.active[data-v-65f24288]{opacity:1}@media screen and (max-width:768px){.contacts__header[data-v-65f24288]{font-size:28px;margin-bottom:25px}.contacts__info[data-v-65f24288]{font-size:16px;margin-bottom:45px}.contacts__column[data-v-65f24288]:first-child{flex:0 0 40%}.contacts__addres[data-v-65f24288]{font-size:18px}.contacts__input[data-v-65f24288]{height:45px;margin-bottom:24px}.contacts__succes[data-v-65f24288]{font-size:18px}}@media screen and (max-width:576px){.contacts__row[data-v-65f24288]{flex-direction:column}.contacts__column[data-v-65f24288]:first-child{margin-bottom:25px}.contacts__button[data-v-65f24288]{width:120px;height:35px}.contacts__succes[data-v-65f24288]{font-size:24px}}',""]),t.exports=n},266:function(t,n,e){var content=e(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("7baca7d3",content,!0,{sourceMap:!1})},287:function(t,n,e){"use strict";e(266)},288:function(t,n,e){(n=e(21)(!1)).push([t.i,".main[data-v-4fc5acdc]{margin:0 auto;padding-top:100px;display:flex;flex-direction:column}.article[data-v-4fc5acdc]{margin-top:30px}.bold[data-v-4fc5acdc]{font-weight:600}.product[data-v-4fc5acdc]{background-color:#efefef;border-radius:3px;width:100%;padding:40px 20px;margin:0 auto 140px;max-width:1250px;display:flex}.product__columns[data-v-4fc5acdc]{display:flex;margin-bottom:15px}.product__column[data-v-4fc5acdc]{line-height:1.4em;display:flex;flex-direction:column}.product__column[data-v-4fc5acdc]:first-child{margin-right:20px}.product__image[data-v-4fc5acdc]{width:270px;background-position:50%;margin-bottom:20px;border-radius:3px;background-size:cover;height:350px}.product__price[data-v-4fc5acdc]{display:flex;justify-content:center;align-items:center;margin-bottom:8px;border:1px solid #000;border-radius:3px;height:35px;min-width:270px;max-width:100%;font-size:13px;font-weight:600;background-color:#fff;transition:all .3s ease 0s}.product__price[data-v-4fc5acdc]:hover{border:1px solid #fff;background-color:#000;color:#fff}.product__text[data-v-4fc5acdc]{text-align:justify;line-height:1.2em}.product__text p[data-v-4fc5acdc]{margin-bottom:10px}@media screen and (max-width:767px){.product[data-v-4fc5acdc]{flex-direction:column}.product__column[data-v-4fc5acdc]{align-items:center;margin-right:0!important;margin-bottom:20px}}",""]),t.exports=n},306:function(t,n,e){"use strict";e.r(n);var o={components:{Form:e(251).default},data:function(){return{image:"../images/mushrooms.jpg"}}},c=(e(287),e(23)),component=Object(c.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"product"},[n("div",{staticClass:"product__column"},[n("div",{staticClass:"product__image",style:{"background-image":"url("+this.image+")"}}),this._v(" "),n("a",{staticClass:"product__price",attrs:{href:"#contacts"}},[this._v("от 250 ₽")])]),this._v(" "),this._m(0)]),this._v(" "),n("Form")],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"product__text"},[e("p",[e("span",{staticClass:"bold"},[t._v("Каменное масло")]),t._v(" - это квасцы\n\t\t\t\tминерального происхождения собираются со стен и сводов пещер\n\t\t\t")]),t._v(" "),e("div",{staticClass:"product__columns"},[e("div",{staticClass:"product__column"},[e("span",{staticClass:"bold"},[t._v("- 10гр 350 ₽")]),t._v(" "),e("span",{staticClass:"bold"},[t._v("- 20гр 650 ₽")]),e("span",{staticClass:"bold"},[t._v("- 30гр 900 ₽")]),t._v(" "),e("span",{staticClass:"bold"},[t._v("Оптом дешевле.")])])]),t._v(" "),e("p",[t._v("\n\t\t\t\tСамым качественным считается каменное масло, добытое в\n\t\t\t\tкаменных пещерах Алтая Каменное масло уникальный продукт,\n\t\t\t\tсодержащий огромное количество макро и микроэлементов,\n\t\t\t\tбиологически активных веществ, созданный природой, продукт\n\t\t\t\tздоровья, молодости, долголетия.\n\t\t\t")]),t._v(" "),e("p",[t._v("\n\t\t\t\tПовышает жизненные силы организма, иммунитет, борется с\n\t\t\t\tразличными инфекциями, очищает организм от шлаков и\n\t\t\t\tтоксинов, обладая адаптогенным свойством, повышает\n\t\t\t\tустойчивость организма к неблагоприятным факторам внешней\n\t\t\t\tсреды Невозможно перечислить все заболевания, которые лечит\n\t\t\t\tкаменное масло, вот некоторый перечень:\n\t\t\t")]),t._v(" "),e("div",{staticClass:"product__column"},[e("span",[t._v("- остеохондроз, ревматизм, радикулит, артроз,\n\t\t\t\t\tполиартрит, артрит, подагра, переломы")]),e("span",[t._v("- постоянное чувство усталости, желудочно-кишечные\n\t\t\t\t\tзаболевания, болезни щитовидной железы,\n\t\t\t\t\tсердечно-сосудистые заболевания, астма бронхиальная,\n\t\t\t\t\tзаболевания печени, гепатиты т д.")]),e("span",[t._v("-женские заболевания")]),e("span",[t._v(" -мужские заболевания")]),e("span",[t._v("-эндокринные нарушения ")]),e("span",[t._v("-новообразования")])]),t._v(" "),e("p",[t._v("\n\t\t\t\tРекомендуется тем, у кого работа связана с вредными\n\t\t\t\tусловиями труда, жителям мегаполиса\n\t\t\t")]),t._v(" "),e("p",[t._v("\n\t\t\t\tРекомендую добавлять в крема тем, у кого стрии (растяжки) на\n\t\t\t\tкоже, добавлять в шампуни, гели, крема, чтобы продлить\n\t\t\t\tкрасоту и молодость. Из-за насыщенности минералов хорошо\n\t\t\t\tприменять тем, кто употребляет дистиллированную воду\n\t\t\t")])])}],!1,null,"4fc5acdc",null);n.default=component.exports;installComponents(component,{Form:e(251).default})}}]);