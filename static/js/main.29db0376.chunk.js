(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(11),o=n.n(i),s=(n(20),n(14)),r=n(2),p=n.p+"static/media/logo.bbe2a6ea.svg",u=n(3),l=n(7),_=n(0);var d=function(e){var t=e.loggedIn,n=e.onSingOut,c=e.autoEmail,i=Object(a.useState)(!1),o=Object(r.a)(i,2),s=o[0],d=o[1],j=Object(u.f)();function b(){n()}return"header__entry ".concat(s?"header__show-menu":""),Object(_.jsxs)("header",{className:"header page__item",children:[Object(_.jsx)("div",{className:"header__menu ".concat(s?"":"header__menu_active"),children:Object(_.jsxs)("nav",{className:"header__entry header__show-menu",children:[Object(_.jsx)("p",{className:"header__text",children:c}),Object(_.jsx)("button",{className:"header__button",type:"button",onClick:b,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(_.jsxs)("div",{className:"header__basic",children:[Object(_.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e \u0448\u0430\u043f\u043a\u0438",className:"header__logo"}),t&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("nav",{className:"header__entry",children:[Object(_.jsx)("p",{className:"header__text",children:c}),Object(_.jsx)("button",{className:"header__button",type:"button",onClick:b,children:"\u0412\u044b\u0439\u0442\u0438"})]}),Object(_.jsx)("button",{className:"header__navi",type:"button",onClick:function(){d(!s)},children:Object(_.jsx)("span",{className:"header__navi-line \n                                ".concat(s?"header__navi-line_active":"")})})]})]}),!t&&Object(_.jsxs)("p",{children:["/sign-in"===j.pathname&&Object(_.jsx)(l.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),"/sign-up"===j.pathname&&Object(_.jsx)(l.b,{className:"header__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},j=Object(a.createContext)();var b=function(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,o=Object(a.useContext)(j),s=t.owner._id===o._id,r="element__trash ".concat(s?"element__trash_visible":"element__trash_hidden"),p=t.likes.some((function(e){return e._id===o._id})),u="element__like ".concat(p?"element__like_active":"element__like");return Object(_.jsxs)("article",{className:"element",children:[Object(_.jsx)("img",{src:t.link,alt:t.name,className:"element__image",onClick:function(){n(t)}}),Object(_.jsxs)("div",{className:"element__caption",children:[Object(_.jsx)("h2",{className:"element__description",children:t.name}),Object(_.jsxs)("div",{className:"element__likes",children:[Object(_.jsx)("button",{className:u,onClick:function(){c(t)},type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f"}),Object(_.jsx)("span",{className:"element__number-of-likes",children:t.likes.length})]})]}),Object(_.jsx)("button",{className:r,onClick:function(){i(t)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})};var m=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,i=e.onCardClick,o=e.cards,s=e.onCardLike,r=e.onCardDelete,p=Object(a.useContext)(j);return Object(_.jsxs)("main",{className:"content",children:[Object(_.jsxs)("section",{className:"profile page__item",children:[Object(_.jsxs)("div",{className:"profile__avatar-container",children:[Object(_.jsx)("button",{onClick:c,className:"profile__avatar-edit"}),Object(_.jsx)("img",{src:p.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ".concat(p.name),className:"profile__avatar"})]}),Object(_.jsxs)("div",{className:"profile__info",children:[Object(_.jsxs)("div",{className:"profile__container",children:[Object(_.jsx)("h1",{className:"profile__name",children:p.name}),Object(_.jsx)("button",{onClick:t,className:"profile__edit-button",type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u043c\u044f"})]}),Object(_.jsx)("p",{className:"profile__description",children:p.about})]}),Object(_.jsx)("button",{onClick:n,className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e"})]}),Object(_.jsx)("section",{className:"elements page__item","aria-label":"\u0424\u043e\u0442\u043e\u0433\u0430\u043b\u0435\u0440\u0435\u044f",children:o.map((function(e){return Object(_.jsx)(b,{card:e,onCardClick:i,onCardLike:s,onCardDelete:r},e._id)}))})]})};var h=function(){return Object(_.jsx)("footer",{className:"footer page__item",children:Object(_.jsx)("p",{className:"footer__copy",children:"\xa9 2021 Mesto Russia"})})};var O=function(e){var t=e.isOpen,n=e.card,a=e.onClose;return Object(_.jsx)("div",{className:"popup popup_type_open-image ".concat(t?"popup_opened":""),onClick:function(e){e.target.classList.contains("popup_opened")&&a()},children:Object(_.jsxs)("div",{className:"popup__open-image",children:[Object(_.jsx)("img",{src:n?n.link:"",alt:n?n.name:"",className:"popup__image"}),Object(_.jsx)("p",{className:"popup__image-title",children:n?n.name:""}),Object(_.jsx)("button",{className:"popup__close popup__close_type_image",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a})]})})},f=n(12),v=n(13),g=new(function(){function e(t){Object(f.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(v.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430")}},{key:"getAllCards",value:function(){return fetch("".concat(this._url,"cards/"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards/"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"getApiUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.info})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"disLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.disLike(e):this.addLike(e)}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-29/",headers:{"content-type":"application/json",authorization:"8bc97cc4-e8dd-4b97-8e8e-b29acddab317"}}),x=n(6),k=n(4);var C=function(e){var t=e.isOpen,n=e.onClose,a=e.name,c=e.title,i=e.children,o=e.onSubmit,s=e.isDisabled;return Object(_.jsx)("div",{className:"popup popup_type_".concat(a," ").concat(t?"popup_opened":""),onClick:function(e){e.target.classList.contains("popup_opened")&&n()},children:Object(_.jsxs)("div",{className:"popup__container popup__container_type_".concat(a),children:[Object(_.jsxs)("form",{action:"#",className:"popup__form popup__form_type_".concat(a),name:"".concat(a),onSubmit:o,children:[Object(_.jsx)("h2",{className:"popup__form-header",children:c}),i,Object(_.jsx)("button",{className:"popup__button ".concat(s?"popup__button_disabled":""),disabled:s,type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]}),Object(_.jsx)("button",{onClick:n,className:"popup__close popup__close_type_".concat(a),type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var N=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,i=Object(a.useState)({name:"",info:""}),o=Object(r.a)(i,2),s=o[0],p=o[1],u=Object(a.useState)({name:!1,info:!1}),l=Object(r.a)(u,2),d=l[0],b=l[1],m=Object(a.useState)({name:"",info:""}),h=Object(r.a)(m,2),O=h[0],f=h[1],v=Object(a.useState)({name:!1,info:!1}),g=Object(r.a)(v,2),N=g[0],y=g[1],S=Object(a.useContext)(j);function L(e){switch(e.target.name){case"name":y({name:!0});break;case"info":y({info:!0});break;default:y(!1)}}function E(e){p(Object(k.a)(Object(k.a)({},s),{},Object(x.a)({},e.target.name,e.target.value))),b(Object(k.a)(Object(k.a)({},d),{},Object(x.a)({},e.target.name,e.target.validity.valid))),f(Object(k.a)(Object(k.a)({},O),{},Object(x.a)({},e.target.name,e.target.validationMessage)))}return Object(a.useEffect)((function(){S&&t&&(p({name:S.name,info:S.about}),b({name:!1,info:!1}),f({name:"",info:""}),y({name:!1,info:!1}))}),[S,t]),Object(_.jsxs)(C,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:s.name,info:s.info})},isDisabled:!d.name||!d.info,children:[Object(_.jsx)("input",{type:"text",placeholder:"\u0418\u043c\u044f \u0424\u0430\u043c\u0438\u043b\u0438\u044f",className:"popup__input popup__input_value_name \n            ".concat(!d.name&&N.name?"popup__input_type_error":""),id:"name-input",name:"name",minLength:"2",maxLength:"40",required:!0,value:s.name,onBlur:function(e){return L(e)},onChange:E}),Object(_.jsx)("span",{id:"name-input-error",className:"popup__input-error popup__input-error_active",children:d.name&&!N.name?"":O.name}),Object(_.jsx)("input",{type:"text",placeholder:"\u0420\u043e\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",className:"popup__input popup__input_value_job \n            ".concat(!d.info&&N.info?"popup__input_type_error":""),id:"job-input",name:"info",minLength:"2",maxLength:"200",required:!0,value:s.info,onBlur:function(e){return L(e)},onChange:E}),Object(_.jsx)("span",{id:"job-input-error",className:"popup__input-error popup__input-error_active",children:d.info&&!N.info?"":O.info})]})};var y=function(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,i=Object(a.useRef)(""),o=Object(a.useState)(!1),s=Object(r.a)(o,2),p=s[0],u=s[1],l=Object(a.useState)(""),d=Object(r.a)(l,2),j=d[0],b=d[1],m=Object(a.useState)(!1),h=Object(r.a)(m,2),O=h[0],f=h[1],v=!p&&O?"popup__input_type_error popup__input popup__input_type_notlast":"popup__input popup__input_type_notlast";return Object(a.useEffect)((function(){t&&(i.current.value="",u(!1),b(""),f(!1))}),[t]),Object(_.jsxs)(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({avatar:i.current.value})},isDisabled:!p,children:[Object(_.jsx)("input",{type:"url",placeholder:"https://somewebsite.com/someimage.jpg",className:v,id:"avatar-input",name:"avatar",required:!0,ref:i,defaultValue:"",onChange:function(){u(i.current.validity.valid),b(i.current.validationMessage)},onBlur:function(e){return function(e){"avatar"===e.target.name?f(!0):f(!1)}(e)}}),Object(_.jsx)("span",{id:"avatar-input-error",className:"popup__input-error popup__input-error_active",children:p&&!O?"":j})]})};var S=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,i=Object(a.useState)({name:"",link:""}),o=Object(r.a)(i,2),s=o[0],p=o[1],u=Object(a.useState)({name:!1,link:!1}),l=Object(r.a)(u,2),d=l[0],j=l[1],b=Object(a.useState)({name:"",link:""}),m=Object(r.a)(b,2),h=m[0],O=m[1],f=Object(a.useState)({name:!1,link:!1}),v=Object(r.a)(f,2),g=v[0],N=v[1];function y(e){switch(e.target.name){case"name":N({name:!0});break;case"link":N({link:!0});break;default:N(!1)}}function S(e){p(Object(k.a)(Object(k.a)({},s),{},Object(x.a)({},e.target.name,e.target.value))),j(Object(k.a)(Object(k.a)({},d),{},Object(x.a)({},e.target.name,e.target.validity.valid))),O(Object(k.a)(Object(k.a)({},h),{},Object(x.a)({},e.target.name,e.target.validationMessage)))}return Object(a.useEffect)((function(){t&&(p({name:"",link:""}),j({name:!1,link:!1}),O({name:"",link:""}),N({name:!1,link:!1}))}),[t]),Object(_.jsxs)(C,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:s.name,link:s.link})},isDisabled:!d.name||!d.link,children:[Object(_.jsx)("input",{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_value_place \n            ".concat(!d.name&&g.name?"popup__input_type_error":""),id:"place-input",name:"name",minLength:"2",maxLength:"30",value:s.name||"",onBlur:function(e){return y(e)},onChange:S,required:!0}),Object(_.jsx)("span",{id:"place-input-error",className:"popup__input-error  popup__input-error_active",children:d.name&&!g.name?"":h.name}),Object(_.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_value_link \n                   ".concat(!d.link&&g.link?"popup__input_type_error":""),id:"link-input",name:"link",value:s.link||"",onBlur:function(e){return y(e)},onChange:S,required:!0}),Object(_.jsx)("span",{id:"link-input-error",className:"popup__input-error  popup__input-error_active",children:d.link&&!g.link?"":h.link})]})};var L=function(e){var t=e.card,n=e.isOpen,a=e.onClose,c=e.onCardDelete;return Object(_.jsx)(C,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),c(t)}})};var E=function(e){var t=e.isOpen,n=e.onClose,a=e.name,c=e.title,i=e.children,o=e.onSubmit,s=e.isDisabled,r=e.linkToEntry,p=e.buttonText;return Object(_.jsx)("div",{className:"sign ".concat(t?"popup_opened":""),onClick:function(e){e.target.classList.contains("popup_opened")&&n()},children:Object(_.jsx)("div",{className:"popup__container sign__container",children:Object(_.jsxs)("form",{action:"#",className:"popup__form",name:"".concat(a),onSubmit:o,children:[Object(_.jsx)("h2",{className:"popup__form-header sign__header",children:c}),i,Object(_.jsx)("button",{className:"popup__button sign__button",disabled:s,type:"submit",children:p}),r]})})})};var w=function(e){var t=e.isOpen,n=e.onClose,c=e.onAddUser,i=Object(_.jsxs)("p",{className:"sign__description",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(_.jsx)(l.b,{className:"sign__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]}),o=Object(a.useState)(""),s=Object(r.a)(o,2),p=s[0],u=s[1],d=Object(a.useState)(""),j=Object(r.a)(d,2),b=j[0],m=j[1];return Object(_.jsxs)(E,{name:"login",title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",isOpen:t,onClose:n,buttonText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",onSubmit:function(e){e.preventDefault(),c(p,b)},linkToEntry:i,isDisabled:!p||!b,children:[Object(_.jsx)("input",{type:"email",placeholder:"Email",className:"popup__input popup__input_value_name sign__input",id:"email-input",name:"email",minLength:"2",maxLength:"40",required:!0,value:p,onChange:function(e){u(e.target.value)}}),Object(_.jsx)("span",{id:"email-input-error",className:"popup__input-error popup__input-error_active sign__input-error"}),Object(_.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"popup__input popup__input_value_job sign__input",id:"password-input",name:"password",minLength:"2",maxLength:"200",required:!0,value:b,onChange:function(e){m(e.target.value)}}),Object(_.jsx)("span",{id:"password-input-error",className:"popup__input-error popup__input-error_active sign__input-error"})]})};var A=function(e){var t=e.isOpen,n=e.onClose,c=e.onEntryUser,i=Object(a.useState)(""),o=Object(r.a)(i,2),s=o[0],p=o[1],u=Object(a.useState)(""),l=Object(r.a)(u,2),d=l[0],j=l[1];return Object(_.jsxs)(E,{name:"login",title:"\u0412\u0445\u043e\u0434",isOpen:t,onClose:n,buttonText:"\u0412\u043e\u0439\u0442\u0438",onSubmit:function(e){e.preventDefault(),c(s,d)},isDisabled:!s||!d,children:[Object(_.jsx)("input",{type:"email",placeholder:"Email",className:"popup__input popup__input_value_name sign__input",id:"email-input",name:"email",minLength:"2",maxLength:"40",required:!0,value:s,onChange:function(e){p(e.target.value)}}),Object(_.jsx)("span",{id:"email-input-error",className:"popup__input-error popup__input-error_active sign__input-error"}),Object(_.jsx)("input",{type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"popup__input popup__input_value_job sign__input",id:"password-input",name:"password",minLength:"2",maxLength:"200",required:!0,value:d,onChange:function(e){j(e.target.value)}}),Object(_.jsx)("span",{id:"password-input-error",className:"popup__input-error popup__input-error_active sign__input-error"})]})},D=n(15),T=["element"];var P=function(e){var t=e.element,n=Object(D.a)(e,T);return n.loggedIn?Object(_.jsx)(t,Object(k.a)({},n)):Object(_.jsx)(u.a,{to:"/sign-in"})},U="https://auth.nomoreparties.co";function I(e){return e.ok?e.json():Promise.reject(e.status)}var R=n.p+"static/media/error.df8eddf6.svg",q=n.p+"static/media/success.1b6082f8.svg";var B=function(e){var t=e.isOpen,n=e.onClose,a=e.isRegistered;return Object(_.jsx)("div",{className:"popup ".concat(t?"popup_opened":""),onClick:function(e){e.target.classList.contains("popup_opened")&&n()},children:Object(_.jsxs)("div",{className:"popup__container popup__container_type_tooltip",children:[Object(_.jsx)("img",{className:"popup__icon",src:a?q:R,alt:a?"\u0438\u043a\u043e\u043d\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438":"\u0438\u043a\u043e\u043d\u043a\u0430 \u043e\u0448\u0438\u0431\u043a\u0438"}),Object(_.jsx)("h3",{className:"popup__form-header popup__tooltip-title",children:a?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a... \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(_.jsx)("button",{onClick:n,className:"popup__close",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var J=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),o=Object(r.a)(i,2),p=o[0],l=o[1],b=Object(a.useState)(!1),f=Object(r.a)(b,2),v=f[0],x=f[1],k=Object(a.useState)(!1),C=Object(r.a)(k,2),E=C[0],D=C[1],T=Object(a.useState)(null),R=Object(r.a)(T,2),q=R[0],J=R[1],F=Object(a.useState)(!1),M=Object(r.a)(F,2),G=M[0],z=M[1],H=Object(a.useState)(!1),V=Object(r.a)(H,2),K=V[0],Q=V[1],W=Object(a.useState)(!1),X=Object(r.a)(W,2),Y=X[0],Z=X[1],$=Object(a.useState)(""),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)({avatar:"",name:"",about:""}),ce=Object(r.a)(ae,2),ie=ce[0],oe=ce[1],se=Object(a.useState)([]),re=Object(r.a)(se,2),pe=re[0],ue=re[1],le=Object(a.useState)(!1),_e=Object(r.a)(le,2),de=_e[0],je=_e[1],be=Object(u.g)();function me(){c(!1),l(!1),x(!1),D(!1),z(!1),Q(!1)}return Object(a.useEffect)((function(){Promise.all([g.getAllCards(),g.getApiUserInfo()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];oe(a),ue(n)})).catch((function(e){console.log("".concat(e))}));var e=function(e){"Escape"===e.key&&me()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(a.useEffect)((function(){!function(){if(localStorage.getItem("jwt")){(function(e){return fetch("".concat(U,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(I)})(localStorage.getItem("jwt")).then((function(e){e&&(je(!0),ne(e.data.email))})).catch((function(e){console.log("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d: ".concat(e))}))}}()}),[]),Object(a.useEffect)((function(){!0===de&&be("/")}),[de,be]),Object(_.jsx)(j.Provider,{value:ie,children:Object(_.jsxs)("div",{className:"page",children:[Object(_.jsx)(d,{loggedIn:de,autoEmail:te,onSingOut:function(){localStorage.removeItem("jwt"),je(!1),be("/sign-in")}}),Object(_.jsxs)(u.d,{children:[Object(_.jsx)(u.b,{path:"/sign-up",element:Object(_.jsx)(w,{onAddUser:function(e,t){(function(e,t){return fetch("".concat(U,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(I)})(e,t).then((function(){Z(!0),be("/sign-in")})).catch((function(e){console.log(e),Z(!1)})).finally((function(){Q(!0)}))}})}),Object(_.jsx)(u.b,{path:"/sign-in",element:Object(_.jsx)(A,{onEntryUser:function(e,t){(function(e,t){return fetch("".concat(U,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(I)})(e,t).then((function(t){localStorage.setItem("jwt",t.token),je(!0),ne(e),be("/")})).catch((function(e){console.log(e)}))}})}),Object(_.jsx)(u.b,{exact:!0,path:"/",element:Object(_.jsx)(P,{element:m,loggedIn:de,onEditProfile:function(){c(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){x(!0)},onCardClick:function(e){J(e),D(!0)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ie._id}));g.changeLikeCardStatus(e._id,t).then((function(t){ue((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){J(e),z(!0)},cards:pe})})]}),Object(_.jsx)(h,{}),Object(_.jsx)(N,{isOpen:n,onClose:me,onUpdateUser:function(e){g.patchUserInfo(e).then((function(e){oe(e),me()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(S,{isOpen:p,onClose:me,onAddPlace:function(e){g.addCard(e).then((function(e){ue([e].concat(Object(s.a)(pe))),me()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(y,{isOpen:v,onClose:me,onUpdateAvatar:function(e){g.changeAvatar(e).then((function(e){oe(e),me()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(O,{isOpen:E,card:q,onClose:me}),Object(_.jsx)(L,{onClose:me,isOpen:G,card:q,onCardDelete:function(e){g.deleteCard(e._id).then((function(){ue((function(t){return t.filter((function(t){return t._id!==e._id}))})),me()})).catch((function(e){console.log(e)}))}}),Object(_.jsx)(B,{onClose:me,isOpen:K,isRegistered:Y})]})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(l.a,{basename:"/react-mesto-auth",children:Object(_.jsx)(J,{})})}),document.getElementById("root")),F()}},[[22,1,2]]]);
//# sourceMappingURL=main.29db0376.chunk.js.map