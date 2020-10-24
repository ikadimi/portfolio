(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a(45)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),o=(a(27),a(9)),c=a(2);a(28);var s=function(){return i.a.createElement("div",{id:"about"},i.a.createElement("div",{id:"aboutContainer"},i.a.createElement("div",{id:"profileImg"},i.a.createElement("img",{alt:"myImage",src:"/portfolio/me.jpg"})),i.a.createElement("div",{id:"AboutMe"},i.a.createElement("span",null,"Web Developer"),i.a.createElement("h1",null,"Ilias Kadimi"),i.a.createElement("p",null,"Aspiring Web developer, currently student in 1337 khouribga specilized in web applications. Eager to learn, problem solver, motivated with high attention to detail. Intrested in web developement and working on ambitions projects."),i.a.createElement("div",{id:"aboutActions"},i.a.createElement("a",{href:"/portfolioilias-kadimi.pdf",download:!0,id:"downloadCv"},"Download CV"),i.a.createElement(o.b,{to:"/contact"},i.a.createElement("button",null,"Contact"))))))};a(17);var m=function(e){var t=e.skill,a=t.title,n=t.icon,r=t.description;return i.a.createElement("div",{id:"skillContainer"},i.a.createElement("div",{id:"imgContainer"},i.a.createElement("img",{alt:"skill icon",src:"/portfolio"+n,id:"skillIcon"})),i.a.createElement("div",{id:"skillInfo"},i.a.createElement("h1",null,a),i.a.createElement("ul",null,r.map((function(e,t){return i.a.createElement("li",{key:t},e)})))))};var u=function(){return i.a.createElement("div",{id:"skillOuterContainer"},i.a.createElement("h2",{id:"whatIDo"},"What I Do"),i.a.createElement("div",{id:"skillsContainer",className:"halfSize"},[{title:"Front End",icon:"/web-design.png",description:["Determining the structure and design of web pages.","Developing features to enhance the user experience.","Building reusable code for future use.","Utilizing a variety of markup languages to write web pages."]},{title:"Back End",icon:"/backend.png",description:["Integration of user-facing elements with server side logic","Optimization of the application for maximum speed and scalability","Implementation of security and data protection"]}].map((function(e){return i.a.createElement(m,{key:e.title,skill:e})}))))};a(34);var d=function(){return i.a.createElement("div",{className:"pageContainer"},i.a.createElement(s,null),i.a.createElement(u,null))},p=a(7);a(35);var g=function(e){var t=e.project,a=Object(n.useState)(!1),r=Object(p.a)(a,2),l=r[0],o=r[1],c=t.title,s=t.subtitle,m=t.url,u=t.languages,d=t.img,g=t.gif,f=t.description,h=t.github,E=t.type;return i.a.createElement("div",{className:"cardContainer"},l?i.a.createElement("div",{id:"hoverContent"},i.a.createElement("button",{onClick:function(){return o(!1)},className:"cardButton",id:"closeButton"},"close"),i.a.createElement("img",{alt:"animated project gif",src:g})):null,i.a.createElement("div",{id:"projectCard"},i.a.createElement("div",{id:"cardContent"},i.a.createElement("span",{id:"cardTitle"},c),i.a.createElement("span",{id:"cardSubtitle"},s),i.a.createElement("div",{id:"cardLanguages"},u.map((function(e){return i.a.createElement("span",{key:e,id:"cardLanguage"},e)}))),i.a.createElement("div",{id:"cardButtons"},m?i.a.createElement("a",{href:m,target:"_blank",className:"cardButton",rel:"noopener noreferrer",id:"urlLink"},i.a.createElement("img",{alt:"live project link",src:"/portfoliowork.png"})):null,"system"===E?null:i.a.createElement("a",{href:h,target:"_blank",className:"cardButton",rel:"noopener noreferrer",id:"githubLink"},"Code"),"system"===E?null:i.a.createElement("button",{onClick:function(){return o(!0)},className:"cardButton",id:"showButton"},"Show"),i.a.createElement("img",{alt:"project icon",src:d,atl:"projectImage",id:"projectImage"})),i.a.createElement("span",{id:"cardDescription"},f))))};a(36);var f=function(){var e=Object(n.useState)("all"),t=Object(p.a)(e,2),a=t[0],r=t[1],l=[{type:"web",title:"redTetris",subtitle:"Multiplayer web game",img:"tetris.png",gif:"Tetris.gif",languages:["Nodejs","Reactjs","Redux","Socketio"],description:"RedTetris is a remastering of the beloved 80s game and making it multiplayer, you can joing rooms of 4 and be the last survivor.",url:"https://red-tetris.netlify.app/",github:"https://github.com/Kaadimi/red-tetris"},{type:"web",title:"hyperTube",subtitle:"Movie streaming platform",img:"movie.png",gif:"Hypper.gif",languages:["Nodejs","Vuejs","Vuex","Mysql","Oauth"],description:"HyperTube is a group project offering all availble movies to bing watch and a community of movie lovers that interact with each other",url:!1,github:"https://github.com/Kaadimi/hypertube"},{type:"web",title:"Matcha",subtitle:"Dating web app",img:"dating-app.png",gif:"Matcha.gif",languages:["Nodejs","Vuejs","Vuex","Mysql"],description:"Matcha a dating web application that matches interests and preferences of potentiel parteners inside your chosen area from your geolocation",url:!1,github:"https://github.com/Kaadimi/matcha"},{type:"other",title:"21sh",subtitle:"Unix shell",img:"terminal.png",gif:"21sh.gif",languages:["C","Termcap"],description:"Recreating shell like beheivor from multiline editing to command excution including Pipes and redirections",url:!1,github:"https://github.com/Kaadimi/21sh"},{type:"other",title:"Filler",subtitle:"Algorithmic game",img:"logic.png",gif:"filler.gif",languages:["C","VM"],description:"Filler is a game which consists in filling a grid of a known size in advance with pieces of random size and shapes against a virtual player taking turns to fill up the most space",url:!1,github:"https://github.com/Kaadimi/filler"},{type:"other",title:"FDF",subtitle:"Graphic programming",img:"graphic.png",gif:"fdf.gif",languages:["C","MinilibX"],description:"Basics of graphic programming, placement of points in space joined by segments with different observable viewpoints, scene rotation on diffrent axes and color adjustement",url:!1,github:"https://github.com/Kaadimi/fdf"},{type:"system",title:"Roger-skyline",subtitle:"Network administration",img:"security-system.png",gif:!1,languages:["VM","Ubuntu","Shell"],description:"Services used on a server machine, changing dhcp and ssh system files, protecting server from ddos attacks and port scans, configuring a web server",url:!1,github:!1}];return i.a.createElement("div",{className:"pageContainer"},i.a.createElement("div",{id:"projectPageTitle"},i.a.createElement("h1",null,"Porjects"),i.a.createElement("span",null,"More to come")),i.a.createElement("div",{id:"projectsInnerContainer"},i.a.createElement("div",{id:"filterButtons"},i.a.createElement("button",{onClick:function(){return r("all")},className:"all"===a?"selected":null},"All"),i.a.createElement("button",{onClick:function(){return r("web")},className:"web"===a?"selected":null},"Web"),i.a.createElement("button",{onClick:function(){return r("other")},className:"other"===a?"selected":null},"Other")),i.a.createElement("div",{id:"workContainer"},function(e){return"all"===e?l:l.filter((function(t){return t.type===e}))}(a).map((function(e,t){return i.a.createElement(g,{key:t,project:e})})))))},h=a(19),E=a.n(h),v=a(21);var b=function(e){var t=e.text;return i.a.createElement("div",{className:"pin"},i.a.createElement("img",{alt:"location pin",src:"/portfoliopin.png",className:"pin-icon"}),i.a.createElement("p",{className:"pin-text"},t))};a(39);var k=function(e){var t=e.location,a=e.zoomLevel;return i.a.createElement("div",{className:"map"},i.a.createElement("div",{className:"google-map"},i.a.createElement(v.a,{bootstrapURLKeys:{key:"AIzaSyCRdJCsrFzOK1ZawyuaWQ7KwSwbmUGCKwU"},defaultCenter:t,defaultZoom:a},i.a.createElement(b,{lat:t.lat,lng:t.lng,text:t.address}))))};a(40);var w=function(e){var t=e.type,a=e.notification,r=e.setNotif;return Object(n.useEffect)((function(){setTimeout((function(){r("")}),1500)}),[]),i.a.createElement("div",{id:"F"===t?"errorNotif":"notification"},a)};a(41);var y=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),o=Object(p.a)(l,2),c=o[0],s=o[1];return i.a.createElement("div",{className:"pageContainer"},i.a.createElement("div",{id:"projectPageTitle"},i.a.createElement("h1",null,"Contact"),i.a.createElement("span",null,"Get in touch")),i.a.createElement("div",{id:"contactInnerContainer"},i.a.createElement("div",{id:"mapsContainer"},i.a.createElement(k,{location:{address:"boulevard Mohammed V, Beni Mellal",lat:32.332405,lng:-6.362984},zoomLevel:15})),i.a.createElement("div",{id:"formContainer"},i.a.createElement("div",{id:"contactInfo"},i.a.createElement("h2",null,"Contact information"),[{title:"Address",icon:"/location.png",description:["boulevard Mohammed V, Beni Mellal"]},{title:"Mobile",icon:"/mobile.png",description:["+212 6 32 30 85 06"]},{title:"Mail",icon:"/envelope.png",description:["ilkadimi@outlook.com"]}].map((function(e){return i.a.createElement(m,{key:e.title,skill:e})}))),i.a.createElement("div",{id:"formInnerContainer"},i.a.createElement("h2",null,"Send a message?"),i.a.createElement("form",{id:"contactForm",onSubmit:function(e){e.preventDefault(),a||(e.target.name.value?e.target.email.value?e.target.subject.value?e.target.message.value?(r(!0),E.a.sendForm("service_8uxjeuc","template_kdnkcdq",e.target,"user_p2hFADtTZSZNcAVObkozc").then((function(e){r(!1),s("Thank you"),console.log(e.text)}),(function(e){r(!1),s(e.text),console.log(e.text)}))):s("Message is required"):s("Subject is required"):s("Email is required"):s("Name is required"))}},i.a.createElement("div",{id:"formLeftSide"},i.a.createElement("input",{placeholder:"Name",id:"formName",name:"name"}),i.a.createElement("input",{placeholder:"Email",id:"formEmail",name:"email"}),i.a.createElement("input",{placeholder:"Subject",id:"formSub",name:"subject"})),i.a.createElement("textarea",{placeholder:"Message",id:"formMsg",name:"message"}),i.a.createElement("button",{type:"submit",id:"formBtn",className:a?"disabled":null},a?i.a.createElement("div",{class:"spinner"},i.a.createElement("div",{class:"bounce1"}),i.a.createElement("div",{class:"bounce2"}),i.a.createElement("div",{class:"bounce3"})):i.a.createElement("span",null,"Send")))))),c?i.a.createElement(w,{type:"Thank you"===c?"S":"F",notification:c,setNotif:s}):null)};a(42);var j=function(){return i.a.createElement("div",{id:"footer"},i.a.createElement("a",{href:"https://github.com/Kaadimi",target:"_blank",rel:"noopener noreferrer",className:"linkButtons"},"Github"),i.a.createElement("a",{href:"https://www.linkedin.com/in/ilias-kadimi-9349a0174/",target:"_blank",rel:"noopener noreferrer",className:"linkButtons"},"Linkedin"))};a(43),a(44);var C=function(){!function(){var e=Object(n.useState)([0,0]),t=Object(p.a)(e,2),a=t[0],i=t[1];Object(n.useLayoutEffect)((function(){function e(){window.innerWidth>600&&m(!1),i([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[])}();var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(!1),c=Object(p.a)(l,2),s=c[0],m=c[1];return i.a.createElement("div",{id:"Navbar"},i.a.createElement("button",{id:"lightButton",onClick:function(){return document.body.classList.toggle("dark"),void r((function(e){return!e}))}},a?i.a.createElement("img",{alt:"light button",src:"/portfolio/lightbulb.png"}):i.a.createElement("img",{alt:"light button",src:"/portfolio/blueLight.png"})),i.a.createElement("div",{id:"NavbarContainer"},i.a.createElement(o.b,{to:"/",style:{textDecoration:"none"}},i.a.createElement("div",{id:"sideLogo"},i.a.createElement("img",{alt:"logo",src:"/portfolio/i.png"}),i.a.createElement("span",{id:"logoName"},"Ilias "),i.a.createElement("span",{id:"logoLastName"},"Kadimi"))),i.a.createElement("div",{id:s?"navMenu":"navLinks"},i.a.createElement(o.c,{exact:!0,to:"/",className:"navLink",activeClassName:"selected"},"About Me"),i.a.createElement(o.c,{exact:!0,to:"/projects",className:"navLink",activeClassName:"selected"},"Projects"),i.a.createElement(o.c,{exact:!0,to:"/contact",className:"navLink",activeClassName:"selected"},"Contact")),i.a.createElement("div",{id:"navIcons"},i.a.createElement("button",{id:"moreButton",onClick:function(){return m((function(e){return!e}))}},i.a.createElement("img",{alt:"show links",src:"/portfolio/more.png"})))))};var N=function(){return i.a.createElement(o.a,{style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(C,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",exact:!0,component:d}),i.a.createElement(c.a,{path:"/projects",exact:!0,component:f}),i.a.createElement(c.a,{path:"/contact",exact:!0,component:y})),i.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.2a70d3e5.chunk.js.map