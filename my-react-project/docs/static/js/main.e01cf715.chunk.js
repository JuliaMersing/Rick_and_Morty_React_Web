(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{11:function(e,c,t){"use strict";t.r(c);var r=t(1),n=t(3),a=t.n(n),i=(t(9),t(4)),s=function(){return fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20").then((function(e){return e.json()})).then((function(e){var c=e.map((function(e){return{name:e.name,photo:e.image,specie:e.species,id:e.id}}));return console.log(c),c}))},o=t(0),j=function(e){return Object(o.jsxs)("article",{children:[Object(o.jsx)("img",{src:e.character.image,alt:e.character.name}),Object(o.jsx)("h4",{children:e.character.name}),Object(o.jsx)("p",{children:e.character.specie})]})},u=function(e){var c=e.characters.map((function(e){return Object(o.jsx)(j,{character:e},e.id)}));return Object(o.jsx)("section",{children:Object(o.jsx)("ul",{className:"cards",children:c})})},h=function(){var e=Object(r.useState)([""]),c=Object(i.a)(e,2),t=c[0],n=c[1];return Object(r.useEffect)((function(){s().then((function(e){n(e)}))}),[]),Object(o.jsx)("div",{children:Object(o.jsx)(u,{characters:t})})};a.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))},9:function(e,c,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.e01cf715.chunk.js.map