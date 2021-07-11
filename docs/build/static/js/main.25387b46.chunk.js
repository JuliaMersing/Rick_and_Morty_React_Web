(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,,,,,,function(e,t,c){},function(e,t,c){},,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(17),n=c.n(r),s=(c(23),c(10)),i=function(){return fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20").then((function(e){return e.json()})).then((function(e){return e.map((function(e){return{name:e.name,photo:e.image,specie:e.species,id:e.id,planet:e.origin.name,episode:e.episode,status:e.status,gender:e.gender}}))}))},l=(c(24),c(7)),j=c(0),o=function(e){return Object(j.jsx)(l.b,{className:"link character",to:"/character/".concat(e.character.id),children:Object(j.jsxs)("div",{className:"character__card",children:[Object(j.jsx)("div",{className:"character__card--name",children:Object(j.jsx)("h4",{children:e.character.name})}),Object(j.jsx)("img",{className:"character__card--img",src:e.character.photo,alt:e.character.name}),Object(j.jsxs)("div",{className:"character__card--info",children:[Object(j.jsx)("p",{className:"character__card--text-info",children:"Human"===e.character.specie?Object(j.jsx)("i",{class:"far fa-user"}):"Alien"===e.character.specie?Object(j.jsx)("span",{children:"\ud83d\udc7d"}):void 0}),Object(j.jsx)("p",{className:"character__card--text-info",children:e.character.gender}),Object(j.jsx)("p",{className:"character__card--text-info",children:"Dead"===e.character.status?Object(j.jsx)("i",{class:"fas fa-skull"}):"unknown"===e.character.status?Object(j.jsx)("i",{title:"Dear or alive...Who knows!",class:"fas fa-question"}):"Alive"===e.character.status?Object(j.jsx)("i",{class:"fas fa-heartbeat"}):void 0})]})]})})},d=(c(34),function(e){var t=e.characters.map((function(e){return Object(j.jsx)(o,{character:e},e.id)}));return Object(j.jsx)("section",{children:Object(j.jsx)("ul",{className:"cards",children:t})})}),h=(c(15),function(){return Object(j.jsxs)("div",{className:"notfound",children:[Object(j.jsx)("p",{children:"You may have made a typing error. This character does not exist "}),Object(j.jsx)("img",{className:"notfound_img",src:"https://media2.giphy.com/media/3o7TKuAfCHifvPdcxG/200.gif?cid=6104955ee217f4e7cd4aa21708ff12d11c326ef5d3f38193&rid=200.gif&ct=g&cid=6104955ee217f4e7cd4aa21708ff12d11c326ef5d3f38193&rid=200.gif&ct=g",alt:"Character not found"}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("i",{className:"home_icon fas fa-reply"})})]})});var u=function(){return Object(j.jsxs)("div",{className:"notfound",children:[Object(j.jsx)("p",{children:"Oh boy! You must be wrong, this page does not exist!"}),Object(j.jsx)("img",{className:"notfound_img",src:"https://media3.giphy.com/media/AqOioh3rTS0Z3pP6V2/200.gif?cid=6104955e88bb50cc0c697bb25419b159b7d30129498cd934&rid=200.gif&ct=g&cid=6104955e88bb50cc0c697bb25419b159b7d30129498cd934&rid=200.gif&ct=g",alt:"This page doesn't exist"}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("i",{className:"home_icon fas fa-reply"})})]})},f=(c(35),function(e){return Object(j.jsxs)("div",{className:"SingleCharacter",children:[Object(j.jsxs)("article",{className:"singleCharacterCard",children:[Object(j.jsx)("img",{className:"imageCharacter",src:e.character.photo,alt:e.character.name}),Object(j.jsxs)("div",{className:"characterDetails",children:[Object(j.jsx)("h4",{children:e.character.name}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:["Specie: ",e.character.species]}),Object(j.jsxs)("li",{children:["Planet: ",e.character.planet]}),Object(j.jsxs)("li",{children:["Episodes: ",e.character.episode.length]}),Object(j.jsxs)("li",{children:["Status: ",e.character.status]})]})]})]}),Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("i",{className:"home_icon fas fa-reply"})})]})}),b=c.p+"static/media/Rick_and_Morty.de13d484.png",m=(c(36),{get:function(e,t){var c=localStorage.getItem(e);return null===c?t:JSON.parse(c)},set:function(e,t){localStorage.setItem(e,JSON.stringify(t))}}),O=(c(37),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"form__label",htmlFor:"name",children:"Filter by name:"}),Object(j.jsx)("input",{className:"form__input",type:"text",name:"name",id:"name",placeholder:"We are waiting...please type a name",value:e.filterName,onChange:function(t){e.handleFilter({value:t.target.value,key:"name"})}})]})}),x=(c(16),function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"form__label",htmlFor:"specie",children:"Species:"}),Object(j.jsxs)("select",{className:"form__select",id:"Specie",name:"Specie",onChange:function(t){e.handleFilter({value:t.target.value,key:"specie"})},value:e.filterBySpecie,children:[Object(j.jsx)("option",{value:"All",children:"All"}),Object(j.jsx)("option",{value:"Human",children:"Human"}),Object(j.jsx)("option",{value:"Alien",children:"Alien"})]})]})}),p=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{className:"form__label",htmlFor:"Gender",children:"Gender:"}),Object(j.jsxs)("select",{className:"form__select",id:"Gender",name:"Gender",onChange:function(t){e.handleFilter({value:t.target.value,key:"gender"})},value:e.filterByGender,children:[Object(j.jsx)("option",{value:"all",children:"All Genders"}),Object(j.jsx)("option",{value:"Female",children:"Female"}),Object(j.jsx)("option",{value:"Male",children:"Male"}),Object(j.jsx)("option",{value:"unknown",children:"Unknown"})]})]})},g=(c(38),c(39),function(e){return Object(j.jsx)("div",{className:"reset",children:Object(j.jsx)("button",{className:"reset__button",onClick:function(){e.handleReset()},children:Object(j.jsx)("i",{className:"reset__button--icon fas fa-trash"})})})}),v=function(e){return Object(j.jsx)("section",{children:Object(j.jsxs)("form",{className:"form__container",children:[Object(j.jsx)(O,{filterName:e.filterName,handleFilter:e.handleFilter}),Object(j.jsx)(x,{filterSpecie:e.filterSpecie,handleFilter:e.handleFilter}),Object(j.jsx)(p,{filterGender:e.filterGender,handleFilter:e.handleFilter}),Object(j.jsx)(g,{handleReset:e.handleReset})]})})},N=c(2),_=function(){var e=Object(a.useState)(m.get("characters",[])),t=Object(s.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(m.get("filterName","")),l=Object(s.a)(n,2),o=l[0],O=l[1],x=Object(a.useState)(m.get("filterSpecie","")),p=Object(s.a)(x,2),g=p[0],_=p[1],y=Object(a.useState)(m.get("filterGender","")),S=Object(s.a)(y,2),F=S[0],k=S[1];Object(a.useEffect)((function(){0===c.length&&i().then((function(e){r(e)}))}),[]),Object(a.useEffect)((function(){m.set("characters",c),m.set("filterName",o),m.set("filterSpecie",g),m.set("filterGender",F)}),[c,o,g,F]);var C=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).filter((function(e){return"All"===g||e.specie.toLowerCase().includes(g.toLowerCase())})).filter((function(e){return"all"===F||e.gender.toLowerCase().includes(F.toLowerCase())}));return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("img",{className:"logo",src:b,alt:"Logo"}),Object(j.jsxs)(N.c,{children:[Object(j.jsx)(N.a,{exact:!0,path:"/",children:Object(j.jsxs)("div",{children:[Object(j.jsx)(v,{filterName:o,filterSpecies:g,filterGender:F,handleFilter:function(e){"name"===e.key?O(e.value):"specie"===e.key?_(e.value):"gender"===e.key&&k(e.value)},handleReset:function(){r(c),O(""),k("all"),_("All")}}),Object(j.jsx)("ul",{children:C.length>0?Object(j.jsx)(d,{characters:C}):Object(j.jsx)(h,{})})]})}),Object(j.jsx)(N.a,{path:"/character/:characterId",render:function(e){var t=e.match.params.characterId,a=c.find((function(e){return e.id===parseInt(t)}));if(void 0!==a)return Object(j.jsx)(f,{character:a})}}),Object(j.jsx)(N.a,{children:Object(j.jsx)(u,{})})]})]})};n.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(_,{})}),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.25387b46.chunk.js.map