(this["webpackJsonppersonal-projects"]=this["webpackJsonppersonal-projects"]||[]).push([[0],{71:function(t,e,n){},76:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var r=n(0),s=n.n(r),a=n(32),c=n.n(a),i=n(12),o=n(3),l=n(20),u=n.n(l),d=n(33),j=n(34),b=n(35),h=n(42),p=n(41),m=n(36),f=n.n(m),v=n(1),O=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var r;return Object(j.a)(this,n),(r=e.call(this,t)).newRandomWord=function(){var t=r.nextWord;r.nextWord=r.state.words[Math.floor(Math.random()*r.state.words.length)],r.setState({currentWord:t})},r.decreaseTimer=function(){var t=r.state.time;if(0===t)return r.setState({gameFinished:!0}),void clearInterval(r.timer);r.setState({time:t-1})},r.startTimer=function(){r.setState({isStarted:!0}),0===r.timer&&r.state.time>0&&(r.timer=setInterval(r.decreaseTimer,1e3))},r.makeGuess=function(t){t===r.state.currentWord+" "?r.correct+=t.length-1:(r.incorrect+=t.length-1,r.wrong.push([t,r.state.currentWord])),r.setState({input:"",words:r.state.words.filter((function(e){return e!==t}))}),r.newRandomWord()},r.handleInput=function(t){var e=t.target.value;" "===e[e.length-1]?r.makeGuess(e):r.setState({input:e})},r.state={words:[],time:60,gameFinished:!1,input:"",currentWord:"",isStarted:!1},r.nextWord="",r.timer=0,r.correct=0,r.incorrect=0,r.wrong=[],r}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=Object(d.a)(u.a.mark((function t(){var e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://random-word-api.herokuapp.com/word?number=300",t.next=3,f.a.get("https://random-word-api.herokuapp.com/word?number=300");case 3:e=t.sent,this.nextWord=e.data[e.data.length-1],e.data.pop(),this.setState({words:e.data}),this.newRandomWord();case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(!this.state.isStarted)return Object(v.jsx)("button",{onClick:this.startTimer,children:"Start"});if(this.state.gameFinished){var t=Math.round(this.correct/5),e=this.wrong.map((function(t){return Object(v.jsxs)("div",{children:[t[0],": ",t[1]]})}));return Object(v.jsxs)("div",{children:["Your score: ",t,Object(v.jsx)("div",{children:e})]})}return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{children:this.state.currentWord}),Object(v.jsxs)("div",{children:["Next: ",this.nextWord]}),Object(v.jsx)("div",{children:this.state.time}),Object(v.jsx)("form",{onSubmit:this.makeGuess,children:Object(v.jsx)("input",{type:"text",value:this.state.input,onChange:this.handleInput,autoFocus:!0})})]})}}]),n}(s.a.Component),x=n(4),g=n(5),w=n(88),S=function(t){for(var e=0;e<t.length-1;e++)if(t[e]>t[e+1])return!1;return!0},y=function(t){for(var e=Object(x.a)(t),n=[],r=0;r<e.length;r++)for(var s=0;s<e.length-r-1;s++)if(e[s]>e[s+1]){n.push({step:[s,s+1],swap:!0});var a=e[s];e[s]=e[s+1],e[s+1]=a}else n.push({step:[s,s+1],swap:!1});return n},N=function(t){for(var e=Object(x.a)(t),n=[],r=0;r<e.length;r++){for(var s=r,a=r+1;a<e.length;a++)n.push({step:[a,s],swap:!1}),e[a]<e[s]&&(s=a);if(s!==r){n.push({step:[r,s],swap:!0});var c=e[r];e[r]=e[s],e[s]=c}}return n},k=function(t,e,n,r,s){for(var a=n-e+1,c=r-n,i=new Array(a),o=new Array(c),l=0;l<a;l++)i[l]=t[e+l];for(var u=0;u<c;u++)o[u]=t[n+1+u];for(var d=0,j=0,b=e;d<a&&j<c;)i[d]<=o[j]?(s.push({step:[b,e+d],swap:!0}),t[b]=i[d],d++):(s.push({step:[b,j+n+1],swap:!0}),t[b]=o[j],j++),b++;for(;d<a;)s.push({step:[b,d+e],swap:!0}),t[b]=i[d],d++,b++;for(;j<c;)s.push({step:[b,j+n+1],swap:!0}),t[b]=o[j],j++,b++},C=function t(e,n,r){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(!(n>=r)){var a=n+parseInt((r-n)/2);return t(e,n,a,s),t(e,a+1,r,s),k(e,n,a,r,s),console.log("b",e),S(e)?(console.log("ccc"),s):void 0}console.log("a",e)},W=function(t,e,n){},I=function(t){},A=(n(71),function(t){for(var e,n,r=[],s=0;s<t;s++)r.push((e=5,n=400,Math.floor(Math.random()*(n-e+1)+e)));return r}),M=function(){var t=Object(r.useState)([]),e=Object(g.a)(t,2),n=e[0],s=e[1],a=Object(r.useState)([0,0]),c=Object(g.a)(a,2),i=c[0],o=c[1],l=Object(r.useState)(50),u=Object(g.a)(l,2),d=u[0],j=u[1],b=Object(r.useState)(100),h=Object(g.a)(b,2),p=h[0],m=h[1],f=Object(r.useState)(!1),O=Object(g.a)(f,2),k=O[0],M=O[1],L=Object(r.useState)(null),F=Object(g.a)(L,2),T=F[0],R=F[1];Object(r.useEffect)((function(){s(A(d))}),[d]);var z=function(t){if(!k)if(S(n))alert("Array is already sorted!");else{var e=t(Object(x.a)(n),0,n.length-1)||[];console.log(e),M(!0),B(e)}},B=function(t){var e=t.length,r=0;console.log(p);var a=setInterval((function(){if(e>0){var c=Object(g.a)(t[r].step,2),i=c[0],l=c[1];if(t[r].swap){var u=n[i];n[i]=n[l],n[l]=u}s(Object(x.a)(n)),o([i,l]),e--,r++}else clearInterval(a),R(null),M(!1)}),205-p);R(a)};return Object(v.jsxs)("div",{className:"app-container",children:[Object(v.jsx)("h1",{className:"mt-5 mb-5",children:"Sorting Algorithms Visualizer"}),Object(v.jsxs)("div",{className:"controls mb-5",children:[k?Object(v.jsx)("div",{className:"leftControls lead",children:"Animation In Progress"}):Object(v.jsxs)("div",{className:"leftControls",children:[Object(v.jsxs)("div",{className:"slider",children:[Object(v.jsx)("div",{className:"lead",children:"Select array size:"}),Object(v.jsx)(w.a,{value:d,min:10,max:100,step:10,valueLabelDisplay:"auto",onChange:function(t){return j(t.target.value)}})]}),Object(v.jsxs)("div",{className:"slider",children:[Object(v.jsx)("div",{className:"lead",children:"Select sorting speed:"}),Object(v.jsx)(w.a,{value:p,min:5,max:200,step:5,valueLabelDisplay:"auto",onChange:function(t){return m(t.target.value)}})]})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{className:"btn btn-success btn-lg",onClick:function(){return M(!1),T&&clearInterval(T),void s(A(d))},children:k?"Stop Animation and Reset":"New Array"}),Object(v.jsx)("br",{}),k?Object(v.jsx)(v.Fragment,{}):Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"lead mt-3 mb-2",children:"Select sorting algorithm"}),Object(v.jsx)("button",{className:"btn btn-primary",onClick:function(){return z(y)},children:"Bubble Sort"}),Object(v.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"20px"},onClick:function(){return z(N)},children:"Selection Sort"}),Object(v.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"20px"},onClick:function(){return z(C)},children:"Merge Sort"}),Object(v.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"20px"},onClick:function(){return z(I)},children:"Insertion Sort"}),Object(v.jsx)("button",{className:"btn btn-primary",style:{marginLeft:"20px"},onClick:function(){return z(W)},children:"Quick Sort"})]})]})]}),Object(v.jsx)("div",{className:"array-container",children:n.map((function(t,e){var n={height:"".concat(t,"px"),backgroundColor:k&&i.includes(e)?"black":"green"};return Object(v.jsx)("div",{className:"array-bar",style:n},e)}))})]})},L=(n(76),function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("h1",{className:"mt-5 mb-3 ",children:"My Projects"}),Object(v.jsxs)("ul",{className:"list-group",children:[Object(v.jsx)("li",{className:"list-group-item",children:Object(v.jsx)(i.b,{to:"/typing",children:"Typing App"})}),Object(v.jsx)("li",{className:"list-group-item",children:Object(v.jsx)(i.b,{to:"/sorting",children:"Sorting Visualizer"})})]})]})}),F=function(){var t=Object(o.f)();return Object(v.jsxs)("div",{children:[Object(v.jsx)("div",{className:"homeBtn",onClick:function(){return t.push("/")},children:"Home"}),Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{exact:!0,path:"/",component:L}),Object(v.jsx)(o.a,{exact:!0,path:"/typing",component:O}),Object(v.jsx)(o.a,{exact:!0,path:"/sorting",component:M})]})]})};c.a.render(Object(v.jsx)(i.a,{children:Object(v.jsx)(F,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.24a7b3e4.chunk.js.map