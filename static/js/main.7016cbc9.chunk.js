(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,a){},function(e,t,a){},,function(e){e.exports=[{id:1,name:"Word Guess Game",github:"https://github.com/katherinestout/FloralWordGame",deploy:"https://katherinestout.github.io/FloralWordGame/",description:"A hangman style word-guess game, utilizing Vanilla Javascript and jQuery.",tools:"Vanilla Javascript, jQuery, Boostrap",img:"screenshots/wordguess.png"},{id:2,name:"Doctor Who Memory Game",github:"https://github.com/katherinestout/DoctorWho_ReactGame",deploy:"https://young-dusk-20952.herokuapp.com/",description:"A memory game built with React.",tools:"React, ES6",img:"screenshots/doctorwho.png"},{id:3,name:"Photography Website",github:"https://github.com/katherinestout/PhotoWebsite_PayPal_React",deploy:"https://tranquil-wildwood-40776.herokuapp.com/home",description:"A photography website designed for the photographer 'Jane Newport.' The site utilizes nodemailer to send emails, and has a scheduling system which uses CRUD methods.",tools:"MERN stack, React, Redux, Express, Node, MongoDB, ES6, Javascript, Nodemailer, RESTFUL API",img:"screenshots/photography.png"},{id:4,name:"CleverCap",github:"https://github.com/katherinestout/React_MERN",deploy:"https://damp-mountain-40245.herokuapp.com",description:"Designed for Instagram users who are looking for unique captions to use for their Instagram photos, who are seeking to maximize their engagement potential.",tools:" MERN stack, React, Redux, Express, Node, MongoDB, ES6, Javascript, RESTFUL API",img:"screenshots/clevercap.png"},{id:5,name:"Drinkerator",github:"https://github.com/katherinestout/Drinkerator",deploy:"https://katherinestout.github.io/Drinkerator/",description:"App designed to come up with the perfect drink, for a person in their early 20's who is to the bar scene and who does not know what drink to order.",tools:" Javascript, jQuery, Bulma",img:"screenshots/drinkerator.png"},{id:6,name:"Ice Cream Shop",github:"https://github.com/katherinestout/MySQL_React_Node",deploy:"https://shrouded-tor-76235.herokuapp.com/",description:"A simple CRUD app, that implements MVC file structure.",tools:"React, Express, Node, MySQL, Fetch, CSS Grid, Javascript",img:"screenshots/icecream.png"}]},function(e){e.exports=[{id:6,name:"My Portfolio",github:"https://github.com/katherinestout/KatStout_ReactPortfolio",img:"screenshots/portfolio.png",tools:"React, Flexbox, Bootstrap",description:"My react portfolio"}]},function(e){e.exports=[{skillz:"Materialize.css",id:1},{skillz:"Moment.js",id:2},{skillz:"Firebase",id:3},{skillz:"MongoDB Atlas",id:4},{skillz:"Express",id:5},{skillz:"Git",id:6},{skillz:"CSS Grid",id:7},{skillz2:"APIs and AJAX",id:8},{skillz2:"Nodejs",id:9},{skillz2:"Reactjs",id:10},{skillz2:"Redux",id:11},{skillz2:"Handlebars",id:12},{skillz2:"Heroku",id:13},{skillz2:"jQuery",id:14},{skillz3:"HTML5",id:16},{skillz3:"CSS",id:17},{skillz3:"Bootstrap",id:18},{skillz3:"Bulma",id:19},{skillz3:"SASS",id:20},{skillz3:"Javascript",id:21},{skillz3:"MySQL",id:22},{skillz3:"Flexbox",id:15}]},function(e,t,a){e.exports=a(35)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,function(e,t,a){},,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(9),o=a.n(l),r=(a(19),a(1)),s=a(2),c=a(4),m=a(3),u=a(5),d=(a(21),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"overlay"},i.a.createElement("div",null,i.a.createElement(function(e){var t=e.src,a=e.width,n=e.height;return i.a.createElement("div",{style:{width:a},className:"responsive-image"},i.a.createElement("div",{style:{paddingBottom:n/a*100+"%"}}),i.a.createElement("img",{src:t,className:"responsive-image__image",alt:t}))},{src:"https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",alt:"headerpic",className:"headpic",width:1900,height:1100}),i.a.createElement("div",{className:"column-head"},i.a.createElement("h1",{className:"centered animated fadeIn"},i.a.createElement("div",{className:"fullstack"},"Katherine Stout"),i.a.createElement("div",{className:"name"},"Front End Web Developer")))))}}]),t}(n.Component)),h=(a(23),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={scrolled:!1},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",function(){!0!==window.scrollY<900?e.setState({scrolled:!0}):e.setState({scrolled:!1})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll")}},{key:"render",value:function(){return i.a.createElement("div",{className:this.state.scrolled?"t scrolled":"t"},i.a.createElement("div",{className:"NavBar bar t-text"},i.a.createElement("div",{className:"thisContainer"},i.a.createElement("div",{className:"thisBox animated fadeIn navabout"},i.a.createElement("a",{href:"#about"},"ABOUT")),i.a.createElement("div",{className:"thisBox animated fadeIn navskills"},i.a.createElement("a",{href:"#skills"},"SKILLS")),i.a.createElement("div",{className:"thisBox animated fadeIn navportfolio"},i.a.createElement("a",{href:"#portfolio"},"PORTFOLIO")),i.a.createElement("div",{className:"thisBox animated fadeIn navcontact"},i.a.createElement("a",{href:"#contact"},"CONTACT")))))}}]),t}(n.Component)),p=(a(25),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"About",id:"about"},i.a.createElement("h2",{className:"about-title"},"About Me"),i.a.createElement("hr",null),i.a.createElement("div",{className:"container-about"},i.a.createElement("div",{className:"about-box-1 about-box"},i.a.createElement("p",null,"I am a Full Stack / Front End Web Developer, with a background in Design and Photography. Upon graduating from Hood College in 2017, with my BA in Communications, I started and ran my own photography business. A year later, I dove full force into coding, earning my certificate in Full Stack Web Development from George Washington University."))),i.a.createElement("div",{className:"about-box"},i.a.createElement("p",null,"Download my resume!"),i.a.createElement("a",{href:"https://drive.google.com/file/d/1HZ7uluRVBYfiNid8Jwrd9XaQ2lrD0AJx/view?usp=sharing"},i.a.createElement("button",{type:"button",className:"btn btn"},"Resume",i.a.createElement("i",{className:"fas fa-file-download download"})))))}}]),t}(n.Component)),b=a(10),E=a(11),f=(a(7),function(e){return i.a.createElement("div",{className:"card-container"},i.a.createElement("div",{className:"img-box"},i.a.createElement("img",{alt:"true",src:e.img})),i.a.createElement("div",{className:"box-description"},i.a.createElement("div",{className:"box-description-box"},i.a.createElement("h4",null,e.name),i.a.createElement("ul",null,i.a.createElement("li",null,e.description),i.a.createElement("li",null,e.tools),i.a.createElement("li",null,i.a.createElement("a",{href:e.github}," GitHub / Code")),i.a.createElement("li",null,i.a.createElement("a",{href:e.deploy},"Deployed"))))))}),k=function(e){return i.a.createElement("div",{className:"card-container"},i.a.createElement("div",{className:"img-box"},i.a.createElement("img",{alt:"true",src:e.img})),i.a.createElement("div",{className:"box-description"},i.a.createElement("div",{className:"box-description-box"},i.a.createElement("h4",null,e.name),i.a.createElement("ul",null,i.a.createElement("li",null,e.description),i.a.createElement("li",null,e.tools),i.a.createElement("li",null,i.a.createElement("a",{href:e.github}," GitHub / Code"))))))},g=(a(28),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={projects:b,projectProject:E},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Portfolio",id:"portfolio"},i.a.createElement("h2",{className:"title-box-portfolio"},"Portfolio Projects")," ",i.a.createElement("hr",null),i.a.createElement("div",{className:"portfolio-wrapper"},this.state.projects.map(function(e){return i.a.createElement(f,{id:e.id,key:e.id,name:e.name,deploy:e.deploy,github:e.github,description:e.description,tools:e.tools,img:e.img})}),this.state.projectProject.map(function(e){return i.a.createElement(k,{id:e.id,key:e.id,name:e.name,deploy:e.deploy,github:e.github,description:e.description,tools:e.tools,img:e.img})})))}}]),t}(n.Component)),v=(a(8),function(e){return i.a.createElement("div",null,i.a.createElement("li",null,e.skillz))}),y=a(12),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={skillList:y},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Skills",id:"skills"},i.a.createElement("h2",{className:"title-box-skill"},"Technical Skills"),i.a.createElement("hr",null),i.a.createElement("div",{className:"skills-wrapper"},i.a.createElement("div",{className:"container-skills"},i.a.createElement("div",{className:"skill-box"},i.a.createElement("ul",{className:"skill-list"},this.state.skillList.map(function(e){return i.a.createElement(v,{id:e.id,key:e.id,skillz:e.skillz})}))),i.a.createElement("div",{className:"skill-box"},i.a.createElement("ul",{className:"skill-list"},this.state.skillList.map(function(e){return i.a.createElement(v,{id:e.id,key:e.id,skillz:e.skillz2})}))),i.a.createElement("div",{className:"skill-box"},i.a.createElement("ul",{className:"skill-list"},this.state.skillList.map(function(e){return i.a.createElement(v,{id:e.id,key:e.id,skillz:e.skillz3})}))))))}}]),t}(n.Component),j=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Contact",id:"contact"},i.a.createElement("div",{className:"title-box"},i.a.createElement("h2",null,"Contact Me:")),i.a.createElement("div",{className:"container-contact"},i.a.createElement("div",{className:"contact-box"},i.a.createElement("i",{className:"fas fa-envelope-open"}),i.a.createElement("p",null,"   katie.stout@outlook.com")),i.a.createElement("div",{className:"contact-box"},i.a.createElement("i",{className:"fab fa-linkedin"}),i.a.createElement("a",{href:"https://www.linkedin.com/in/katherinejstout/"},i.a.createElement("p",null,"LinkedIn"))),i.a.createElement("div",{className:"contact-box"},i.a.createElement("i",{className:"fab fa-github"}),i.a.createElement("a",{href:"https://www.github.com/katherinestout"},i.a.createElement("p",null,"GitHub")))))}}]),t}(n.Component)),w=(a(33),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Footer"},i.a.createElement("hr",null),i.a.createElement("div",{className:"container-footer"},i.a.createElement("div",{className:"footer-copyright text-center py-3"},i.a.createElement("a",{href:"https://www.github.com/katherinestout"},"\xa9 2018 Katherine Stout"))))}}]),t}(n.Component)),O=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},i.a.createElement(d,null),i.a.createElement(h,null),i.a.createElement(p,null),i.a.createElement(N,null),i.a.createElement(g,null),i.a.createElement(j,null),i.a.createElement(w,null))}}]),t}(n.Component),x=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,2,1]]]);
//# sourceMappingURL=main.7016cbc9.chunk.js.map