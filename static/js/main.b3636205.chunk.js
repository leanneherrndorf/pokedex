(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(32)},22:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),a=n(6),r=n.n(a),c=(n(22),n(1)),s=n(2),l=n(4),u=n(3),p=n(5),m=n(11);function h(){var e=Object(m.a)(["\n\tborder-bottom: 1px solid grey;\n\tpadding: 10px;\n\tcursor: pointer;\n\t\n\t&:hover {\n\t\tbackground: #fdf8cf;\n\t}\n"]);return h=function(){return e},e}var d=n(12).a.div(h()),f=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d,{onClick:function(){return e.props.findPokemon(e.props.item.entry_number)}},i.a.createElement("div",null,i.a.createElement("div",null,this.props.item.pokemon_species.name)))}}]),t}(o.Component),b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"list"},Object.keys(this.props.items).map(function(t){return i.a.createElement(f,{key:t,item:e.props.items[t],findPokemon:e.props.findPokemon})}))}}]),t}(o.Component),k=function e(t){Object(c.a)(this,e),this.id=t.id,this.name=t.name,this.height=t.height,this.baseExperience=t.base_experience,this.sprite=t.sprites.front_default,this.abilities=t.abilities},v=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"details"},i.a.createElement("h2",null,this.props.pokemon.name),i.a.createElement("img",{alt:"",src:this.props.pokemon.sprite}),i.a.createElement("table",null,i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("td",null,"Base Experience: "),i.a.createElement("td",null,this.props.pokemon.baseExperience)),i.a.createElement("tr",null,i.a.createElement("td",null,"Height: "),i.a.createElement("td",null,this.props.pokemon.height)),i.a.createElement("tr",null,i.a.createElement("td",{className:"abilities"},"Abilities"),Object.keys(this.props.pokemon.abilities).map(function(t){return i.a.createElement("td",{key:t},"+ ",e.props.pokemon.abilities[t].ability.name)})))))}}]),t}(o.Component),g=(n(30),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).getPokemonList=function(){fetch("https://pokeapi.co/api/v2/pokedex/2/").then(function(e){return e.json()}).then(function(t){e.setState({items:t.pokemon_entries})}).catch(function(e){console.log(e)})},e.componentDidMount=function(){e.getPokemonList()},e.findPokemon=function(t){fetch("https://pokeapi.co/api/v2/pokemon/".concat(t,"/")).then(function(e){return e.json()}).then(function(t){console.log(t);var n=new k(t);e.setState({pokemon:n}),e.setState({detailView:!0})}).catch(function(e){console.log(e)})},e.state={items:[],pokemon:"",detailView:!1},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Pokemon Pokedex"),i.a.createElement(b,{items:this.state.items,findPokemon:this.findPokemon}),this.state.detailView&&i.a.createElement(v,{pokemon:this.state.pokemon}))}}]),t}(o.Component)),w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(g,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pokedex",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/pokedex","/service-worker.js");w?(function(e,t){fetch(e).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):E(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):E(t,e)})}}()}},[[16,2,1]]]);
//# sourceMappingURL=main.b3636205.chunk.js.map