module.exports=function(e){var r={};function n(t){if(r[t])return r[t].exports;var u=r[t]={i:t,l:!1,exports:{}};return e[t].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)n.d(t,u,function(r){return e[r]}.bind(null,u));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=0)}([function(e,r,n){"use strict";n.r(r),n.d(r,"formatToBRL",(function(){return N})),n.d(r,"formatToCEP",(function(){return S})),n.d(r,"formatToCNPJ",(function(){return I})),n.d(r,"formatToCPF",(function(){return M})),n.d(r,"formatToCPFOrCNPJ",(function(){return R})),n.d(r,"formatToCapitalized",(function(){return L})),n.d(r,"formatToDate",(function(){return B})),n.d(r,"formatToDateTime",(function(){return J})),n.d(r,"formatToGenericPhone",(function(){return G})),n.d(r,"formatToList",(function(){return _})),n.d(r,"formatToNumber",(function(){return U})),n.d(r,"formatToPhone",(function(){return z})),n.d(r,"formatToRG",(function(){return V})),n.d(r,"isCEP",(function(){return l})),n.d(r,"isCNPJ",(function(){return b})),n.d(r,"isCPF",(function(){return C})),n.d(r,"isCPFOrCNPJ",(function(){return D})),n.d(r,"isDDD",(function(){return F})),n.d(r,"isDate",(function(){return x})),n.d(r,"isPhone",(function(){return q})),n.d(r,"parseToArray",(function(){return t})),n.d(r,"parseToDate",(function(){return d})),n.d(r,"parseToNumber",(function(){return c})),n.d(r,"validateEmail",(function(){return K})),n.d(r,"default",(function(){return X})),n.d(r,"errorMessage",(function(){return Y}));var t=function(e){if(!e.trim())return[];var r=e.split(" e ");return 1===r.length?r:r[0].split(", ").concat(r[1])},u=function(e){return new Date(e.year,e.month,e.date)},o=function(e,r){return void 0===r&&(r=u(e)),r.getDate()===e.date&&r.getMonth()===e.month&&r.getFullYear()===e.year},a=function(e){var r=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(e),n=r[1],t=r[2],u=r[3];return{date:parseInt(n,10),year:parseInt(u,10),month:parseInt(t,10)-1}},i=/^\d{2}\/\d{2}\/\d{4}$/,d=function(e){if(!i.test(e))throw new Error('Value "'+e+'" does not match format.');var r=a(e),n=u(r);if(!o(r,n))throw new Error('Value "'+e+'" is an invalid date.');return n},c=function(e){return Number(e.replace(/\./g,"").replace(",","."))},f=/^(\d{8}|\d{2}\.?\d{3}\-\d{3})$/,l=function(e){return f.test(e)},s=function(e,r){return r.reduce((function(r,n,t){var u=r[0],o=r[1];return[0===t?0:u+e[t-1]*n,o+e[t]*n]}),[0,0])},p=function(e){return e%11<2?0:11-e%11},m=function(e){return e.every((function(r){return e[0]===r}))},$=/\D/g,v=function(e){return e.replace($,"")},g=function(e){return v(e).split("").map(Number)},h=/^(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2})$/,b=function(e){if(!h.test(e))return!1;var r=g(e);if(m(r))return!1;var n=s(r,[6,5,4,3,2,9,8,7,6,5,4,3,2]);return r[12]===p(n[0])&&r[13]===p(n[1])},T=/^(\d{11}|\d{3}\.\d{3}\.\d{3}\-\d{2})$/,C=function(e){if(!T.test(e))return!1;var r=g(e);if(m(r))return!1;var n=s(r,[11,10,9,8,7,6,5,4,3,2]);return r[9]===p(n[0])&&r[10]===p(n[1])},P=/^\d{2}\/\d{2}\/\d{4}$/,x=function(e){return P.test(e)&&o(a(e))},y=["11","12","13","14","15","16","17","18","19","21","22","24","27","28","31","32","33","34","35","37","38","41","42","43","44","45","46","47","48","49","51","53","54","55","61","62","63","64","65","66","67","68","69","71","73","74","75","77","79","81","82","83","84","85","86","87","88","89","91","92","93","94","95","96","97","98","99"],F=function(e){return-1!==y.indexOf(e)},j=/^(\+55)? ?\(?(\d{2})?\)? ?9? ?\d{4}[-| ]?\d{4}$/,q=function(e){if(!j.test(e))return!1;var r=j.exec(e)[2];return!r||F(r)},w=[T,h],D=function(e){var r=w.map((function(r){return r.test(e)}));return!!r.includes(!0)&&(r[0]?C(e):b(e))},E=function(e){return e.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")},N=function(e){var r=Number(e).toFixed(2).replace(".",",");return"R$ "+E(r)},O=["cnpj","cpf","ltda","qp","tv"],k=["a","com","da","das","de","do","dos","e","em","i","na","nas","no","nos","o","por","sem","u"],L=function(e,r){var n,t=void 0===r?{}:r,u=t.wordsToKeepLowerCase,o=void 0===u?k:u,a=t.wordsToKeepUpperCase,i=void 0===a?O:a,d=t.trimTrailingWhiteSpaces;return(n=void 0===d||d?function(e){return e.trim().replace(/\s+/g," ")}(e):e,n?n.split(/\s+/):[]).map((function(e,r,n){var t=e&&0===r||!n[0]&&1===r,u=e.toLocaleLowerCase();return t||-1===o.indexOf(u)?-1!==i.indexOf(u)?e.toLocaleUpperCase():function(e){return e.charAt(0).toLocaleUpperCase()+e.substr(1).toLocaleLowerCase()}(e):u})).join(" ")},S=function(e){return v(e).replace(/(\d{5})(\d{1,3})/,"$1-$2")},I=function(e){return v(e).replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1/$2").replace(/(\d{4})(\d{1,2})$/,"$1-$2")},M=function(e){return v(e).replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})$/,"$1-$2")},R=function(e){return function(e){var r,n;return(null!==(n=null===(r=e.match(/\d/g))||void 0===r?void 0:r.length)&&void 0!==n?n:0)<=11}(e)?M(e):I(e)},A=function(e,r){for(var n=e.toString(10);n.length<r;)n="0"+n;return n},B=function(e){return A(e.getDate(),2)+"/"+A(e.getMonth()+1,2)+"/"+A(e.getFullYear(),4)},J=function(e){return B(e)+" "+A(e.getHours(),2)+":"+A(e.getMinutes(),2)},_=function(e){if(0===e.length)return"";if(1===e.length)return e[0];var r=function(e){return[e.slice(0,e.length-1),e[e.length-1]]}(e),n=r[0],t=r[1];return n.join(", ")+" e "+t},U=function(e){var r=Number(e).toString(10).split("."),n=r[0],t=r[1];return t?E(n)+","+t:E(n)},z=function(e){return v(e).replace(/(\d{1,2})/,"($1").replace(/(\(\d{2})(\d{1,4})/,"$1) $2").replace(/( \d{4})(\d{1,4})/,"$1-$2").replace(/( \d{1})(\d{3})(?:-)(\d{1})(\d{4})/,"$1 $2$3-$4")},V=function(e,r){return"RJ"!==r&&"SP"!==r?e:e.toUpperCase().replace(/[^\d|A|B|X]/g,"").replace(/(\d{2})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})([\d|A|B|X]{1})$/,"$1-$2")},G=function(e,r){void 0===r&&(r=2);var n=v(e);if(8===n.length)return n.replace(/(^\d{4})(\d{4}$)/gi,"$1-$2");if(9===n.length)return n.replace(/(^\d{5})(\d{4}$)/gi,"$1-$2");if(10===n.length)return n.replace(/(^\d{2})(\d{4})(\d{4}$)/gi,"($1) $2-$3");if(11===n.length)return n.replace(/(^\d{2})(\d{4,5})(\d{4}$)/gi,"($1) $2-$3");if(12===n.length)return n.replace(/(^\d{3})(\d{5})(\d{4}$)/gi,"$1 $2-$3");var t=new RegExp("([0-9]{"+r+"})([0-9][0-9])([0-9]{5})([0-9]{4})","gi");return n.replace(t,"+$1 $2 $3-$4")};function K(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}function X(e,r){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],t=[];return r&&Object.keys(r).forEach((function(u){switch(u){case"required":r.required&&(e?""===e&&t.push("required"):t.push("required"));break;case"max":e&&e.length>r.max&&t.push("max");break;case"min":e&&e.length<r.min&&t.push("min");break;case"email":e&&!K(e)&&t.push("email");break;case"cep":e&&!l(e)&&t.push("cep");break;case"cpf":e&&!C(e)&&t.push("cpf");break;case"cnpj":e&&!b(e)&&t.push("cnpj");break;case"date":e&&isNaN(Date.parse(e))&&t.push("date");break;case"dateBR":e&&!x(e)&&t.push("dateBR");break;case"equalsToField":if(n){var o,a=n(r.equalsToField.name),i=null==a||null===(o=a.ref)||void 0===o?void 0:o.getValue();i&&e&&(i!==e?(t.push("equalsToField"),a.ref.addError("equalsToField"),a.ref.setTouched()):a.ref.removeError("equalsToField"))}}})),t}function Y(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{required:"Este campo é obrigatório",email:"Insira um email válido",cep:"Insira um CEP válido",cpf:"Insira um CPF válido",cnpj:"Insira um CNPJ válido",date:"Insira uma data válida",dateBR:"Insira uma data válida",equalsToField:'Deve ser igual ao campo "'.concat(r.equalsToField&&r.equalsToField.label,'"'),max:"Esta campo suporta no máximo ".concat(r.max," caracteres"),min:"Esta campo suporta no minimo ".concat(r.min," caracteres")}[e]}}]);