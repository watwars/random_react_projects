(this["webpackJsonppersonal-projects"]=this["webpackJsonppersonal-projects"]||[]).push([[0],{71:function(t,e,n){},76:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(32),c=n.n(s),i=n(15),o=n(3),l=n(20),u=n.n(l),d=n(33),j=n(34),h=n(35),b=n(42),m=n(41),p=n(36),O=n.n(p),v=n(1),f=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(t){var r;return Object(j.a)(this,n),(r=e.call(this,t)).newRandomWord=function(){var t=r.nextWord;r.nextWord=r.state.words[Math.floor(Math.random()*r.state.words.length)],r.setState({currentWord:t})},r.decreaseTimer=function(){var t=r.state.time;if(0===t)return r.setState({gameFinished:!0}),void clearInterval(r.timer);r.setState({time:t-1})},r.startTimer=function(){r.setState({isStarted:!0}),0===r.timer&&r.state.time>0&&(r.timer=setInterval(r.decreaseTimer,1e3))},r.makeGuess=function(t){t===r.state.currentWord+" "?r.correct+=t.length-1:(r.incorrect+=t.length-1,r.wrong.push([t,r.state.currentWord])),r.setState({input:"",words:r.state.words.filter((function(e){return e!==t}))}),r.newRandomWord()},r.handleInput=function(t){var e=t.target.value;" "===e[e.length-1]?r.makeGuess(e):r.setState({input:e})},r.state={words:[],time:60,gameFinished:!1,input:"",currentWord:"",isStarted:!1},r.nextWord="",r.timer=0,r.correct=0,r.incorrect=0,r.wrong=[],r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://random-word-api.herokuapp.com/word?number=300",t.next=3,O.a.get("https://random-word-api.herokuapp.com/word?number=300");case 3:e=t.sent,this.nextWord=e.data[e.data.length-1],e.data.pop(),this.setState({words:e.data}),this.newRandomWord();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.isStarted)return Object(v.jsx)("button",{onClick:this.startTimer,children:"Start"});if(this.state.gameFinished){var t=Math.round(this.correct/5),e=this.wrong.map((function(t){return Object(v.jsxs)("div",{children:[t[0],": ",t[1]]})}));return Object(v.jsxs)("div",{children:["Your score: ",t,Object(v.jsx)("div",{children:e})]})}return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:this.state.currentWord}),Object(v.jsxs)("div",{children:["Next: ",this.nextWord]}),Object(v.jsx)("div",{children:this.state.time}),Object(v.jsx)("form",{onSubmit:this.makeGuess,children:Object(v.jsx)("input",{type:"text",value:this.state.input,onChange:this.handleInput,autoFocus:!0})})]})}}]),n}(a.a.Component),x=n(4),g=n(5),S=n(88),w=function(t){for(var e=0;e<t.length-1;e++)if(t[e]>t[e+1])return!1;return!0},N=function(t){for(var e=Object(x.a)(t),n=[],r=0;r<e.length;r++)for(var a=0;a<e.length-r-1;a++)if(e[a]>e[a+1]){n.push({step:[a,a+1],swap:!0});var s=e[a];e[a]=e[a+1],e[a+1]=s}else n.push({step:[a,a+1],swap:!1});return n},y=function(t){for(var e=Object(x.a)(t),n=[],r=0;r<e.length;r++){for(var a=r,s=r+1;s<e.length;s++)n.push({step:[s,a],swap:!1}),e[s]<e[a]&&(a=s);if(a!==r){n.push({step:[r,a],swap:!0});var c=e[r];e[r]=e[a],e[a]=c}}return n},k=function(t){},C=(n(71),function(t){for(var e,n,r=[],a=0;a<t;a++)r.push((e=5,n=400,Math.floor(Math.random()*(n-e+1)+e)));return r}),W=function(){var t=Object(r.useState)([]),e=Object(g.a)(t,2),n=e[0],a=e[1],s=Object(r.useState)([0,0]),c=Object(g.a)(s,2),i=c[0],o=c[1],l=Object(r.useState)(50),u=Object(g.a)(l,2),d=u[0],j=u[1],h=Object(r.useState)(100),b=Object(g.a)(h,2),m=b[0],p=b[1],O=Object(r.useState)(!1),f=Object(g.a)(O,2),W=f[0],I=f[1],M=Object(r.useState)(null),A=Object(g.a)(M,2),F=A[0],L=A[1];Object(r.useEffect)((function(){a(C(d))}),[d]);var R=function(t){if(!W)if(w(n))alert("Array is already sorted!");else{var e=t(Object(x.a)(n),0,n.length-1)||[];console.log(e),I(!0),T(e)}},T=function(t){var e=t.length,r=0;console.log(m);var s=setInterval((function(){if(e>0){var c=Object(g.a)(t[r].step,2),i=c[0],l=c[1];if(t[r].swap){var u=n[i];n[i]=n[l],n[l]=u}a(Object(x.a)(n)),o([i,l]),e--,r++}else clearInterval(s),L(null),I(!1)}),205-m);L(s)};return Object(v.jsxs)("div",{className:"app-container",children:[Object(v.jsx)("h1",{className:"mt-5 mb-5",children:"Sorting Algorithms Visualizer"}),Object(v.jsxs)("div",{className:"controls mb-5",children:[W?Object(v.jsx)("div",{className:"leftControls lead",children:"Animation In Progress"}):Object(v.jsxs)("div",{className:"leftControls",children:[Object(v.jsxs)("div",{className:"slider",children:[Object(v.jsx)("div",{className:"lead",children:"Select array size:"}),Object(v.jsx)(S.a,{value:d,min:10,max:100,step:10,valueLabelDisplay:"auto",onChange:function(t){return j(t.target.value)}})]}),Object(v.jsxs)("div",{className:"slider",children:[Object(v.jsx)("div",{className:"lead",children:"Select sorting speed:"}),Object(v.jsx)(S.a,{value:m,min:5,max:200,step:5,valueLabelDisplay:"auto",onChange:function(t){return p(t.target.value)}})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return I(!1),F&&clearInterval(F),void a(C(d))},children:W?"Stop Animation and Reset":"New Array"}),Object(v.jsx)("br",{}),W?Object(v.jsx)(v.Fragment,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"lead mt-3 mb-2",children:"Select sorting algorithm"}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){return R(N)},children:"Bubble Sort"}),Object(v.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"20px"},onClick:function(){return R(y)},children:"Selection Sort"}),Object(v.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"20px"},onClick:function(){return R(k)},children:"Insertion Sort"})]})]})]}),Object(v.jsx)("div",{className:"array-container",children:n.map((function(t,e){var n={height:"".concat(t,"px"),backgroundColor:W&&i.includes(e)?"black":"green"};return Object(v.jsx)("div",{className:"array-bar",style:n},e)}))})]})},I=(n(76),function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"mt-5 mb-3 ",children:"My Projects"}),Object(v.jsx)("ul",{className:"list-group",children:Object(v.jsx)("li",{className:"list-group-item",children:Object(v.jsx)(i.b,{to:"/sorting",children:"Sorting Visualizer"})})})]})}),M=function(){var t=Object(o.f)();return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"homeBtn",onClick:function(){return t.push("/")},children:"Home"}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:I}),Object(v.jsx)(o.a,{exact:!0,path:"/typing",component:f}),Object(v.jsx)(o.a,{exact:!0,path:"/sorting",component:W})]})]})};c.a.render(Object(v.jsx)(i.a,{children:Object(v.jsx)(M,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.641ece74.chunk.js.map