(()=>{"use strict";const e=window.React,t=window.wp.htmlEntities,{registerPaymentMethod:n}=window.wc.wcBlocksRegistry,i=window.yookassaOwnPaymentMethods,a=window.wc.wcSettings.allSettings.paymentMethodData;Object.keys(a).forEach((function(l){if(i.indexOf(l)>=0){const i=a[l],c=(0,t.decodeEntities)(i.title),s=()=>(0,t.decodeEntities)(i.description||""),o=()=>i.icon?(0,e.createElement)("img",{src:i.icon,style:{float:"right",marginRight:"20px"},alt:i.title}):"",r=()=>(0,e.createElement)("span",{style:{width:"100%"}},c,(0,e.createElement)(o,null));n({name:l,label:(0,e.createElement)(r,null),content:(0,e.createElement)(s,null),edit:(0,e.createElement)(s,null),canMakePayment:()=>!0,ariaLabel:c,supports:{features:i.supports}})}}))})();