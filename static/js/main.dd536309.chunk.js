(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{30:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),s=a.n(c),o=(a(29),a(30),a(4)),i=a(5),l=a(7),u=a(6),h=a(0),d=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.handleSearchSubmit=function(t){var a=e.state.searchValue;t.preventDefault(),console.log("Before fetch:",a),e.props.getSearchValue(a)},e.handleSearchChange=function(t){e.setState({searchValue:t.target.value})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.handleSearchSubmit,t=this.handleSearchChange;return Object(h.jsx)("header",{className:"Searchbar",children:Object(h.jsxs)("form",{onSubmit:e,className:"SearchForm",children:[Object(h.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(h.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(h.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:t})]})})}}]),a}(n.Component),p=d,j=a(13),g=(a(32),a(22)),b=a.n(g),m=function(e){var t=e.children;return Object(h.jsx)("ul",{className:"ImageGallery",children:t})},f=a(2),O=a.n(f),v=function(e){var t=e.searchResults,a=e.openModal;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.tags;return Object(h.jsx)("li",{id:t,onClick:a,className:"ImageGalleryItem",children:Object(h.jsx)("img",{src:n,alt:r,className:"ImageGalleryItem-image"})},t)}))})},y=v;v.propType={searchResults:O.a.arrayOf({webformatURL:O.a.string.isRequired,tags:O.a.string,id:O.a.number}),openModal:O.a.func.isRequired};var x=a(12),S=a.n(x),k=a(23),w=a(24),I=a.n(w),C=function(){function e(t,a){Object(o.a)(this,e),this.BASE_URL=t,this.API_KEY=a,this._searchQuery="",this._page=1,this.perPage=12,this.urlWithKey=""}return Object(i.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"searchPhotos",value:function(){var e=Object(k.a)(S.a.mark((function e(){var t,a,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.urlWithKey=this.BASE_URL+"?key=".concat(this.API_KEY),console.log(this.searchQuery,this.page),t="&q=".concat(this._searchQuery,"&page=").concat(this.page,"&per_page=").concat(this.perPage),a=this.urlWithKey+t,e.prev=4,e.next=7,I.a.get(a);case 7:return n=e.sent,r=n.data.hits,e.abrupt("return",r);case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",console.log(e.t0));case 15:case"end":return e.stop()}}),e,this,[[4,12]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),N=function(e){var t=e.onClick;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"btn-load",type:"button",onClick:t,children:"Load more"})})},R=(a(72),document.querySelector("#modal-root")),M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(c.createPortal)(Object(h.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(h.jsx)("div",{className:"Modal",children:this.props.children})}),R)}}]),a}(n.Component),V=new C("https://pixabay.com/api/","23189092-912e167e41c5e7d499821c37e"),_=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchResults:[],status:"idle",largeImageId:null,isModalOpen:!1},e.handleClick=function(){V.page=1,V.searchPhotos().then((function(t){e.setState((function(e){return{searchResults:[].concat(Object(j.a)(e.searchResults),Object(j.a)(t)),status:"resolved"}}))})).then((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(t){console.log(t),e.setState({status:"rejected"})}))},e.findImg=function(){var t=e.state,a=t.searchResults,n=t.largeImageId;return a.find((function(e){return e.id===n}))},e.openModal=function(t){e.setState({isModalOpen:!0,largeImageId:Number(t.currentTarget.id)})},e.closeModal=function(){return e.setState({isModalOpen:!1})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.searchValue;e.searchValue!==n&&(console.log("get fetsch"),this.setState({status:"pending"}),V.resetPage(),V.searchQuery=n,V.searchPhotos().then((function(e){a.setState({searchResults:e,status:"resolved"})})).catch((function(e){console.log(e),a.setState({status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.searchResults,a=e.largeImageId,n=e.isModalOpen,r=e.status,c=this.openModal,s=this.handleClick,o=this.findImg,i=t.length>0&&t.length>=12;return"idle"===r?Object(h.jsx)("div",{className:"container-title",children:Object(h.jsx)("p",{children:"You can find any pictures, photos and images here"})}):"pending"===r?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)(b.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100,timeout:3e3})}):"rejected"===r?Object(h.jsx)("div",{className:"container-title",children:Object(h.jsx)("p",{children:"Uppps, error"})}):"resolved"===r?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(m,{children:t.length>0&&Object(h.jsx)(y,{openModal:c,searchResults:t})}),i>0&&Object(h.jsx)(N,{onClick:s}),0===t.length&&Object(h.jsx)("div",{className:"container-title",children:Object(h.jsx)("p",{children:"Sorry, we did not find this"})}),n&&Object(h.jsx)(M,{largeImageId:a,onClose:this.closeModal,children:Object(h.jsx)("img",{src:o().largeImageURL,alt:o().tags})})]}):void 0}}]),a}(n.Component),F=_,P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:""},e.getSearchValue=function(t){return e.setState({searchValue:t})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{getSearchValue:this.getSearchValue}),Object(h.jsx)(F,{searchValue:this.state.searchValue})]})}}]),a}(n.Component);s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.dd536309.chunk.js.map