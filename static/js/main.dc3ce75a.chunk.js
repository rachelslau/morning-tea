(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(36)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),s=(n(17),n(2)),u=n(3),i=n(5),l=n(4),m=n(6),h=(n(18),n(1)),f=n.n(h),d=n(7),p=(n(21),n(10)),b=n.n(p),y=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(l.a)(t).call(this))).showMeme=function(){var t=" \u2227\uff3f\u2227\n( \uff65\u03c9\uff65\uff61)\u3064\u2501\u2606\u30fb*\u3002\n\u2282\u3000 \u30ce \u3000\u3000\u3000\u30fb\u309c+.\n\u3057\u30fc\uff2a\u3000\u3000\u3000\xb0\u3002+ *\xb4\xa8)\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000.\xb7 \xb4\xb8.\xb7*\xb4\xa8) \xb8.\xb7*\xa8)\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000(\xb8.\xb7\xb4 (\xb8.\xb7'* \u2606 \n\ncongrats! you found the hidden magic cat. you have been blessed with good luck for the rest of the day. go chance your dreams and shoot your shots!\n\n*disclaimer* finding the magic cat does not guarantee good luck for the rest of the day.";e.setState({memeMessage:t}),alert(t)},e.state={timeOfDay:"",fact:"",quote:"",author:"",memeMessage:""},e}return Object(m.a)(t,e),Object(u.a)(t,[{key:"setTimeOfDay",value:function(){var e,t=(new Date).getHours();e=t>6&&t<12?"morning":t>12&&t<20?"afternoon":"evening",this.setState({timeOfDay:e})}},{key:"loadAPI",value:function(){var e=Object(d.a)(f.a.mark(function e(){var t,n,a,o;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors-anywhere.herokuapp.com/http://randomuselessfact.appspot.com/today.json?language=en");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,fetch("https://quotes.rest/qod.json");case 8:return a=e.sent,e.next=11,a.json();case 11:o=e.sent,this.setState({fact:n.text,quote:o.contents.quotes[0].quote,author:o.contents.quotes[0].author});case 13:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(d.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.loadAPI(),this.setTimeOfDay();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("body",{className:"App"},o.a.createElement("p",null,o.a.createElement("div",{className:"title"},"good ",this.state.timeOfDay,"! here's your daily tea:"),o.a.createElement("br",null),o.a.createElement("br",null),"Did You Know?",o.a.createElement("br",null),this.state.fact,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(b.a,{format:"HH:mm",ticking:!0,timezone:"US/Pacific",className:"clock"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",{className:"quote"},'"',this.state.quote,'"',o.a.createElement("br",null),"- ",this.state.author)),o.a.createElement("button",{type:"button",className:"button",onClick:this.showMeme},"\xbf?"),this.state.message)}}]),t}(a.Component),v=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(y,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.dc3ce75a.chunk.js.map