import{u as _,o as c,c as l,a as t,t as n,b as h,d as p,e as q,f as x,F as i,r as P,g as b}from"./index-4a828dad.js";const f={class:"cart__item"},g={__name:"CartItem",props:{nameProduct:{type:String,required:!0},priceProduct:{type:Number,required:!0},qtyProduct:{type:Number,required:!0},indexProduct:{type:Number,required:!0}},setup(e){const r=_();return(d,o)=>(c(),l("div",f,[t("div",null,n(e.nameProduct),1),t("div",null,n(e.priceProduct),1),t("div",null,n(e.qtyProduct),1),t("div",null,[h(n(Math.round(e.priceProduct*e.qtyProduct*100)/100)+" ",1),t("button",{onClick:o[0]||(o[0]=()=>p(r).remove(e.indexProduct))},"×")])]))}};const C=t("div",{class:"cart__head"},[t("h3",null,"Наименование"),t("h3",null,"Цена"),t("h3",null,"Количество"),t("h3",null,"Стоимость")],-1),k={class:"cart__items"},N={class:"cart__total"},B=t("p",null,"Итого",-1),V={__name:"CartView",setup(e){const r=_(),d=q(()=>{let s=0;return r.items.forEach(a=>{s+=Math.round(a.price*a.qty*100)/100}),s}),o=x(),m=()=>{r.removeAll(),o.push("/")},y=()=>{console.log(JSON.stringify(r.items)),o.push("/")};return(s,a)=>(c(),l(i,null,[C,t("div",k,[(c(!0),l(i,null,P(p(r).items,(u,v)=>(c(),b(g,{key:u.name,"name-product":u.name,"price-product":u.price,"qty-product":u.qty,"index-product":v},null,8,["name-product","price-product","qty-product","index-product"]))),128))]),t("div",N,[B,t("p",null,n(d.value),1)]),t("div",{class:"cart__button"},[t("button",{onClick:y},"Берем!"),t("button",{onClick:m},"Пожалуй, откажусь")])],64))}};export{V as default};