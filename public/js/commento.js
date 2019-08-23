(function(a,b){'use strict';function c(a){return b.getElementById(a)}function d(a){return b.getElementsByTagName(a)}function e(a,b){a.prepend(b)}function f(a,b){a.appendChild(b)}function g(a,b){a.parentNode.insertBefore(b,a.nextSibling)}function h(a,b){a.classList.add("commento-"+b)}function i(a,b){null!==a&&a.classList.remove("commento-"+b)}function j(a){return b.createElement(a)}function k(a){null!==a&&a.parentNode.removeChild(a)}function l(b,c){var a=b.attributes[c];return void 0===a?void 0:a.value}function m(a){if(null!==a){var b=a.cloneNode(!0);if(null!==a.parentNode)return a.parentNode.replaceChild(b,a),b}return a}function n(a,b,c){a.addEventListener("click",function(){b(c)},!1)}function o(b,c,a){b.setAttribute(c,a)}function p(a,b,c){var d=new XMLHttpRequest;d.open("POST",a,!0),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.onload=function(){c(JSON.parse(d.response))},d.send(JSON.stringify(b))}function q(a,b){var c=new XMLHttpRequest;c.open("GET",a,!0),c.onload=function(){b(JSON.parse(c.response))},c.send(null)}function r(a){"function"==typeof a&&a()}function s(a){var d="; "+b.cookie,c=d.split("; "+a+"=");if(2===c.length)return c.pop().split(";").shift()}function t(a,c){var d="",e=new Date;e.setTime(e.getTime()+31536000000),d="; expires="+e.toUTCString(),b.cookie=a+"="+c+d+"; path=/"}function u(){var a=s("commentoCommenterToken");return void 0===a?"anonymous":a}function v(b){Na[b.commenterHex]=b,Za=b.commenterHex;var c,d=j("div"),g=j("div");c="undefined"===b.link?j("div"):j("a");var i,k=j("div"),l=J(b.commenterHex+"-"+b.name);d.id="commento-logged-container",h(d,"logged-container"),h(g,"logged-in-as"),h(c,"name"),h(k,"logout"),c.innerText=b.name,k.innerText="Logout",n(k,a.logout),o(d,"style","display: none"),"undefined"!==b.link&&o(c,"href",b.link),"undefined"===b.photo?(i=j("div"),i.style.background=l,i.innerHTML=b.name[0].toUpperCase(),h(i,"avatar")):(i=j("img"),i.alt="",o(i,"src","https://cdn.commento.io/api/commenter/photo?commenterHex="+b.commenterHex),h(i,"avatar-img")),f(g,i),f(g,c),f(d,g),f(d,k),e(Ja,d),Ka=!0}function w(b){var c=u();if("anonymous"===c)return Ka=!1,void r(b);var d={commenterToken:u()};p("https://commento.io/api/commenter/self",d,function(c){return c.success?void(v(c.commenter),a.allShow(),r(b)):(t("commentoCommenterToken","anonymous"),void r(b))})}function x(a,c){var d=j("link"),e=b.getElementsByTagName("head")[0];d.type="text/css",o(d,"href",a),o(d,"rel","stylesheet"),o(d,"onload",c),f(e,d)}function y(){var b=j("div"),c=j("div"),d=j("a"),a=j("span");return b.id="commento-footer",h(b,"footer"),h(c,"logo-container"),h(d,"logo"),h(a,"logo-text"),o(d,"href","https://commento.io"),o(d,"target","_blank"),o(d,"rel","noopener"),a.innerText="Commento",f(d,a),f(c,d),f(b,c),b}function z(a){var b={commenterToken:u(),domain:ea,path:fa};p("https://commento.io/api/comment/list",b,function(b){if(!b.success)return void A(b.message);B();Oa=b.requireIdentification,Pa=b.isModerator,Qa=b.isFrozen,Sa=b.attributes.isLocked,Ta=b.attributes.stickyCommentHex,La=b.comments,Na=Object.assign({},Na,b.commenters),Wa=b.configuredOauths,r(a)})}function A(a){var b=c("commento-error");b.innerText=a,o(b,"style","display: block;")}function B(){var a=c("commento-error");o(a,"style","display: none;")}function C(){var a=j("div");a.id="commento-error",h(a,"error-box"),o(a,"style","display: none;"),f(Ja,a)}function D(a){return function(){a.style.height="",a.style.height=Math.min(Math.max(a.scrollHeight,75),400)+"px"}}function E(a){var b=c("commento-textarea-super-container-"+a),d=c("commento-markdown-button-"+a),e=j("table"),g=j("tr"),i=j("td"),k=j("td"),l=j("tr"),o=j("td"),p=j("td"),q=j("tr"),r=j("td"),s=j("td"),t=j("tr"),u=j("td"),v=j("td"),w=j("tr"),x=j("td"),y=j("td"),z=j("tr"),A=j("td"),B=j("td");e.id="commento-markdown-help-"+a,h(e,"markdown-help"),o.innerHTML="<b>bold</b>",p.innerHTML="surround text with <pre>**two asterisks**</pre>",i.innerHTML="<i>italics</i>",k.innerHTML="surround text with <pre>*asterisks*</pre>",r.innerHTML="<pre>code</pre>",s.innerHTML="surround text with <pre>`backticks`</pre>",u.innerHTML="<strike>strikethrough</strike>",v.innerHTML="surround text with <pre>~~two tilde characters~~</pre>",x.innerHTML="<a href=\"https://example.com\">hyperlink</a>",y.innerHTML="<pre>[hyperlink](https://example.com)</pre> or just a bare URL",A.innerHTML="<blockquote>quote</blockquote>",B.innerHTML="prefix with <pre>&gt;</pre>",d=m(d),n(d,F,a),f(g,i),f(g,k),f(e,g),f(l,o),f(l,p),f(e,l),f(w,x),f(w,y),f(e,w),f(q,r),f(q,s),f(e,q),f(t,u),f(t,v),f(e,t),f(z,A),f(z,B),f(e,z),f(b,e)}function F(a){var b=c("commento-markdown-button-"+a),d=c("commento-markdown-help-"+a);b=m(b),n(b,E,a),k(d)}function G(a,b){var c=j("div"),d=j("div"),e=j("textarea"),g=j("div"),i=j("input"),k=j("label"),l=j("button"),m=j("a");return c.id="commento-textarea-super-container-"+a,d.id="commento-textarea-container-"+a,e.id="commento-textarea-"+a,i.id="commento-anonymous-checkbox-"+a,l.id="commento-submit-button-"+a,m.id="commento-markdown-button-"+a,h(d,"textarea-container"),h(g,"round-check"),h(g,"anonymous-checkbox-container"),h(l,"button"),h(l,"submit-button"),h(m,"markdown-button"),h(c,"button-margin"),o(e,"placeholder","Add a comment"),o(i,"type","checkbox"),o(k,"for","commento-anonymous-checkbox-"+a),k.innerText="Comment anonymously",l.innerText=!0===b?"Save Changes":"Add Comment",m.innerHTML="<b>M &#8595;</b> &nbsp; Markdown",e.oninput=D(e),!0===b?n(l,P,a):n(l,T,a),n(m,E,a),f(d,e),f(c,d),f(g,i),f(g,k),f(c,l),Oa||!0===b||f(c,g),f(c,m),c}function H(b){var d=j("div"),e=j("div"),g=c("commento-main-area"),i=j("div");d.id="commento-login",i.id="commento-comments-area",h(d,"login"),h(e,"login-text"),h(i,"comments"),e.innerText="Login",i.innerHTML="",n(e,a.loginBoxShow,null),f(d,e),Sa||Qa?Ka||Ra?(f(g,I("This thread is locked. You cannot add new comments.")),k(c("commento-login"))):(f(g,d),f(g,G("root"))):(Ka?k(c("commento-login")):f(g,d),f(g,G("root"))),f(g,i),f(Ja,g),r(b)}function I(a){var b=j("div");return h(b,"moderation-notice"),b.innerText=a,b}function J(a){for(var b=["#396ab1","#da7c30","#3e9651","#cc2529","#922428","#6b4c9a","#535154"],c=0,d=0;d<a.length;d++)c+=a.charCodeAt(d);var e=b[c%b.length];return e}function K(a,b){var c=6e4,d=36e5,e=864e5,f=2592e6,g=94608e7,h=a-b;return 5000>h?"just now":h<c?Math.round(h/1e3)+" seconds ago":h<d?Math.round(h/c)+" minutes ago":h<e?Math.round(h/d)+" hours ago":h<f?Math.round(h/e)+" days ago":h<g?Math.round(h/f)+" months ago":Math.round(h/g)+" years ago"}function L(a){return 1===a?a+" point":a+" points"}function M(b,c){var d=b[c];if(!d||!d.length)return null;d.sort(function(c,a){return c.commentHex===Ta?-Infinity:a.commentHex===Ta?1/0:c.score===a.score?c.creationDate<a.creationDate?-1:1:a.score-c.score});var e=new Date().getTime(),g=j("div");return d.forEach(function(d){var k,l,m=Na[d.commenterHex],p=j("div"),q=j("div"),r=j("div"),s=j("div"),t=j("div"),u=j("div"),v=j("div"),w=j("div"),x=j("button"),y=j("button"),z=j("button"),A=j("button"),B=j("button"),C=j("button"),D=j("button"),E=j("button"),F=M(b,d.commentHex),G=j("div"),H=J(d.commenterHex+"-"+m.name);if(l="undefined"!==m.link&&"https://undefined"!==m.link&&""!==m.link?j("a"):j("div"),p.id="commento-comment-card-"+d.commentHex,u.id="commento-comment-body-"+d.commentHex,v.id="commento-comment-text-"+d.commentHex,r.id="commento-comment-subtitle-"+d.commentHex,s.id="commento-comment-timeago-"+d.commentHex,t.id="commento-comment-score-"+d.commentHex,w.id="commento-comment-options-"+d.commentHex,x.id="commento-comment-edit-"+d.commentHex,y.id="commento-comment-reply-"+d.commentHex,z.id="commento-comment-collapse-"+d.commentHex,A.id="commento-comment-upvote-"+d.commentHex,B.id="commento-comment-downvote-"+d.commentHex,C.id="commento-comment-approve-"+d.commentHex,D.id="commento-comment-remove-"+d.commentHex,E.id="commento-comment-sticky-"+d.commentHex,F&&(F.id="commento-comment-children-"+d.commentHex),G.id="commento-comment-contents-"+d.commentHex,l.id="commento-comment-name-"+d.commentHex,z.title="Collapse children",A.title="Upvote",B.title="Downvote",x.title="Edit",y.title="Reply",C.title="Approve",D.title="Remove",E.title=Ta===d.commentHex?Pa?"Unsticky":"This comment has been stickied":"Sticky",s.title=d.creationDate.toString(),p.style.borderLeft="2px solid "+H,l.innerText=m.name,v.innerHTML=d.html,s.innerHTML=K(e,d.creationDate),t.innerText=L(d.score),"undefined"===m.photo?(k=j("div"),k.style.background=H,"anonymous"===d.commenterHex?(k.innerHTML="?",k.style["font-weight"]="bold",h(k,"avatar")):(k=j("img"),k.setAttribute("data-src",`https://download.remysharp.com/comments/avatars/${m.name}.jpg`),k.src="/images/no-user.svg",k.onerror=()=>{var a=j("div");a.style.background=H,a.innerHTML=m.name[0].toUpperCase(),h(a,"avatar"),k.parentNode.replaceChild(a,k)},h(k,"avatar-img"))):(k=j("img"),o(k,"src","https://cdn.commento.io/api/commenter/photo?commenterHex="+m.commenterHex),h(k,"avatar-img")),h(p,"card"),Pa&&"approved"!==d.state&&h(p,"dark-card"),m.isModerator&&h(l,"moderator"),"flagged"===d.state&&h(l,"flagged"),h(q,"header"),h(l,"name"),h(r,"subtitle"),h(s,"timeago"),h(t,"score"),h(u,"body"),h(w,"options"),$a&&h(w,"options-mobile"),h(x,"option-button"),h(x,"option-edit"),h(y,"option-button"),h(y,"option-reply"),h(z,"option-button"),h(z,"option-collapse"),h(A,"option-button"),h(A,"option-upvote"),h(B,"option-button"),h(B,"option-downvote"),h(C,"option-button"),h(C,"option-approve"),h(D,"option-button"),h(D,"option-remove"),h(E,"option-button"),Ta===d.commentHex?h(E,"option-unsticky"):h(E,"option-sticky"),Ka&&(0<d.direction?h(A,"upvoted"):0>d.direction&&h(B,"downvoted")),n(x,a.editShow,d.commentHex),n(z,a.commentCollapse,d.commentHex),n(C,a.commentApprove,d.commentHex),n(D,a.commentDelete,d.commentHex),n(E,a.commentSticky,d.commentHex),Ka){var I=O(A,B,d.commentHex,d.direction);A=I[0],B=I[1]}else n(A,a.loginBoxShow,null),n(B,a.loginBoxShow,null);n(y,a.replyShow,d.commentHex),"undefined"!==m.link&&"https://undefined"!==m.link&&""!==m.link&&o(l,"href",m.link),f(w,z),f(w,B),f(w,A),d.commenterHex===Za?f(w,x):f(w,y),Pa&&"root"===c&&f(w,E),(Pa||d.commenterHex===Za)&&f(w,D),Pa&&"approved"!==d.state&&f(w,C),Pa||Ta!==d.commentHex||f(w,E),o(w,"style","width: "+32*(w.childNodes.length+1)+"px;");for(var N=0;N<w.childNodes.length;N++)o(w.childNodes[N],"style","right: "+32*N+"px;");if(f(r,t),f(r,s),$a||f(q,w),f(q,k),f(q,l),f(q,r),f(u,v),f(G,u),$a){f(G,w);var P=j("div");h(P,"options-clearfix"),f(G,P)}F&&(h(F,"body"),f(G,F)),f(p,q),f(p,G),f(g,p)}),g}function N(){for(var a=b.getElementsByClassName("commento-name"),c=0;c<a.length;c++)o(a[c],"style","max-width: "+(a[c].getBoundingClientRect().width+20)+"px;")}function O(b,c,d,e){return b=m(b),c=m(c),0<e?(n(b,a.vote,[d,[1,0]]),n(c,a.vote,[d,[1,-1]])):0>e?(n(b,a.vote,[d,[-1,1]]),n(c,a.vote,[d,[-1,0]])):(n(b,a.vote,[d,[0,1]]),n(c,a.vote,[d,[0,-1]])),[b,c]}function P(b){var d=c("commento-textarea-"+b),f=d.value;if(""===f)return void h(d,"red-border");i(d,"red-border");var g={commenterToken:u(),commentHex:b,markdown:f};p("https://commento.io/api/comment/edit",g,function(d){if(!d.success)return void A(d.message);B();Ma[b].markdown=f,Ma[b].html=d.html;var g=c("commento-comment-edit-"+b),j=c("commento-textarea-super-container-"+b);j.innerHTML=Ma[b].html,j.id="commento-comment-text-"+b,delete Va[b],h(g,"option-edit"),i(g,"option-cancel"),g.title="Edit comment",g=m(g),n(g,a.editShow,b);var k="";"unapproved"===d.state?k="Your comment is under moderation.":"flagged"===d.state&&(k="Your comment was flagged as spam and is under moderation."),""!=k&&e(c("commento-textarea-super-container-"+b),I(k))})}function Q(){var a,b={},d=c("commento-comments-area");La.forEach(function(c){a=c.parentHex,a in b||(b[a]=[]),c.creationDate=new Date(c.creationDate),b[a].push(c),Ma[c.commentHex]={html:c.html,markdown:c.markdown}});var e=M(b,"root");e&&f(d,e)}function R(b){return Ka?void a.commentNew(b,u()):void a.loginBoxShow(b)}function S(b){Ra=!0,a.commentNew(b,"anonymous")}function T(a){if(Oa)return void R(a);var b=c("commento-anonymous-checkbox-"+a),d=c("commento-textarea-"+a),e=d.value;return""===e?void h(d,"red-border"):(i(d,"red-border"),b.checked?void S(a):void R(a))}function U(b){c(ga).innerHTML="",Ua={},a.main(b)}function V(){var a=j("div");a.id="commento-login-box-container",f(Ja,a)}function W(b,d,e){p("https://commento.io/api/commenter/login",{email:b,password:d},function(b){if(!b.success)return a.loginBoxClose(),void A(b.message);B();t("commentoCommenterToken",b.commenterToken),v(b.commenter),a.allShow(),k(c("commento-login")),null===e?a.loginBoxClose():a.commentNew(e,b.commenterToken,function(){a.loginBoxClose()})})}function X(a){var b={isLocked:Sa,stickyCommentHex:Ta},c={commenterToken:u(),domain:ea,path:fa,attributes:b};p("https://commento.io/api/page/update",c,function(b){if(!b.success)return void A(b.message);B();r(a)})}function Y(){var a=j("div");a.id="commento-main-area",h(a,"main-area"),o(a,"style","display: none"),f(Ja,a)}function Z(){var b=j("div"),c=j("button");b.id="commento-mod-tools",c.id="commento-mod-tools-lock-button",h(b,"mod-tools"),c.innerHTML=Sa?"Unlock Thread":"Lock Thread",n(c,a.threadLockToggle),o(b,"style","display: none"),f(b,c),f(Ja,b)}function $(){for(var a=d("script"),b=0;b<a.length;b++)a[b].src.match(/\/js\/commento\.js$/)&&(ba=l(a[b],"data-css-override"),da=l(a[b],"data-auto-init"),ga=l(a[b],"data-id-root"),void 0===ga&&(ga="commento"),ca=l(a[b],"data-no-fonts"),ea=l(a[b],"data-domain")||parent.location.host,fa=l(a[b],"data-path")||parent.location.pathname)}function _(){if(window.location.hash)if(window.location.hash.startsWith("#commento-")){var a=c("commento-comment-card-"+window.location.hash.split("-")[1]);if(null===a)return;h(a,"highlighted-card"),a.scrollIntoView(!0)}else window.location.hash.startsWith("#commento")&&Ja.scrollIntoView(!0)}function aa(){_a||(_a=!0,$(),"true"===da||da===void 0?a.main(void 0):"false"!==da&&console.log("[commento] error: invalid value for data-auto-init; allowed values: true, false"))}var ba,ca,da,ea=parent.location.host,fa=parent.location.pathname,ga="commento",ha="commento-main-area",ia="commento-login-box-container",ja="commento-login-box",ka="commento-login-box-email-subtitle",la="commento-login-box-email-input",ma="commento-login-box-password-input",na="commento-login-box-name-input",oa="commento-login-box-website-input",pa="commento-login-box-email-button",qa="commento-login-box-forgot-link-container",ra="commento-login-box-login-link-container",sa="commento-login-box-sso-pretext",ta="commento-login-box-sso-buttton-container",ua="commento-login-box-hr1",va="commento-login-box-oauth-pretext",wa="commento-login-box-oauth-buttons-container",xa="commento-login-box-hr2",ya="commento-logged-container",za="commento-textarea-super-container-",Aa="commento-textarea-",Ba="commento-comment-card-",Ca="commento-comment-text-",Da="commento-comment-edit-",Ea="commento-comment-reply-",Fa="commento-comment-collapse-",Ga="commento-comment-sticky-",Ha="commento-comment-children-",Ia="https://commento.io",Ja=null,Ka=!1,La=[],Ma={},Na={},Oa=!0,Pa=!1,Qa=!1,Ra=!1,Sa=!1,Ta="none",Ua={},Va={},Wa={},Xa="login",Ya=!1,Za=void 0,$a=null;a.logout=function(){t("commentoCommenterToken","anonymous"),Ka=!1,Pa=!1,Za=void 0,U()},a.commentNew=function(b,d,f){var j=c(za+b),k=c(Aa+b),l=c(Ea+b),m=k.value;if(""===m)return void h(k,"red-border");i(k,"red-border");var o={commenterToken:d,domain:ea,path:fa,parentHex:b,markdown:m};p(Ia+"/api/comment/new",o,function(o){if(!o.success)return void A(o.message);B();var p="";"unapproved"===o.state?p="Your comment is under moderation.":"flagged"===o.state&&(p="Your comment was flagged as spam and is under moderation."),""!=p&&e(c(za+b),I(p));var q=Za;(q===void 0||"anonymous"===d)&&(q="anonymous");var s=M({root:[{commentHex:o.commentHex,commenterHex:q,markdown:m,html:o.html,parentHex:"root",score:0,state:"approved",direction:0,creationDate:new Date}]},"root");"root"===b?(k.value="",g(j,s)):(j.replaceWith(s),Ua[b]=!1,h(l,"option-reply"),i(l,"option-cancel"),l.title="Reply to this comment",n(l,a.replyShow,b)),r(f)})},a.commentApprove=function(a){var b={commenterToken:u(),commentHex:a};p(Ia+"/api/comment/approve",b,function(b){if(!b.success)return void A(b.message);B();var d=c(Ba+a),e=c("commento-comment-name-"+a),f=c("commento-comment-approve-"+a);i(d,"dark-card"),i(e,"flagged"),k(f)})},a.commentDelete=function(a){var b={commenterToken:u(),commentHex:a};p(Ia+"/api/comment/delete",b,function(b){if(!b.success)return void A(b.message);B();var d=c(Ba+a);k(d)})},a.vote=function(a){var b=a[0],d=a[1][0],e=a[1][1],f=c("commento-comment-upvote-"+b),g=c("commento-comment-downvote-"+b),j=c("commento-comment-score-"+b),k={commenterToken:u(),commentHex:b,direction:e},l=O(f,g,b,e);f=l[0],g=l[1],i(f,"upvoted"),i(g,"downvoted"),0<e?h(f,"upvoted"):0>e&&h(g,"downvoted"),j.innerText=L(parseInt(j.innerText.replace(/[^\d-.]/g,""))+e-d),p(Ia+"/api/comment/vote",k,function(a){return a.success?void B():(A(a.message),i(f,"upvoted"),i(g,"downvoted"),j.innerText=L(parseInt(j.innerText.replace(/[^\d-.]/g,""))-e+d),void O(f,g,b,d))})},a.editShow=function(b){if(!(b in Va&&Va[b])){var d=c(Ca+b);Va[b]=!0,d.replaceWith(G(b,!0));var e=c(Aa+b);e.innerText=Ma[b].markdown;var f=c(Da+b);i(f,"option-edit"),h(f,"option-cancel"),f.title="Cancel edit",f=m(f),n(f,a.editCollapse,b)}},a.editCollapse=function(b){var d=c(Da+b),e=c(za+b);e.innerHTML=Ma[b].html,e.id=Ca+b,delete Va[b],h(d,"option-edit"),i(d,"option-cancel"),d.title="Edit comment",d=m(d),n(d,a.editShow,b)},a.replyShow=function(b){if(!(b in Ua&&Ua[b])){var d=c(Ca+b);g(d,G(b)),Ua[b]=!0;var e=c(Ea+b);i(e,"option-reply"),h(e,"option-cancel"),e.title="Cancel reply",e=m(e),n(e,a.replyCollapse,b)}},a.replyCollapse=function(b){var d=c(Ea+b),e=c(za+b);e.remove(),delete Ua[b],h(d,"option-reply"),i(d,"option-cancel"),d.title="Reply to this comment",d=m(d),n(d,a.replyShow,b)},a.commentCollapse=function(b){var d=c(Ha+b),e=c(Fa+b);d&&h(d,"hidden"),i(e,"option-collapse"),h(e,"option-uncollapse"),e.title="Expand children",e=m(e),n(e,a.commentUncollapse,b)},a.commentUncollapse=function(b){var d=c(Ha+b),e=c(Fa+b);d&&i(d,"hidden"),i(e,"option-uncollapse"),h(e,"option-collapse"),e.title="Collapse children",e=m(e),n(e,a.commentCollapse,b)},a.commentoAuth=function(b){var d=b.provider,e=b.id,f=window.open("","_blank");q(Ia+"/api/commenter/token/new",function(b){if(!b.success)return void A(b.message);B();t("commentoCommenterToken",b.commenterToken),f.location=Ia+"/api/oauth/"+d+"/redirect?commenterToken="+b.commenterToken;var g=setInterval(function(){f.closed&&(clearInterval(g),w(function(){var d=c(ya);d&&o(d,"style",""),"anonymous"!==u()&&k(c("commento-login")),null===e?a.loginBoxClose():a.commentNew(e,b.commenterToken,function(){a.loginBoxClose()})}))},250)})},a.popupRender=function(b){var d=c(ia),e=j("div"),g=j("div"),i=j("div"),k=j("div"),l=j("hr"),m=j("div"),p=j("div"),q=j("div"),r=j("hr"),s=j("div"),t=j("div"),u=j("div"),v=j("input"),w=j("button"),x=j("div"),y=j("a"),z=j("div"),A=j("a"),B=j("div");e.id=ja,s.id=ka,v.id=la,w.id=pa,x.id=qa,z.id=ra,i.id=ta,g.id=sa,l.id=ua,m.id=va,p.id=wa,r.id=xa,h(d,"login-box-container"),h(e,"login-box"),h(s,"login-box-subtitle"),h(t,"email-container"),h(u,"email"),h(v,"input"),h(w,"email-button"),h(x,"forgot-link-container"),h(y,"forgot-link"),h(z,"login-link-container"),h(A,"login-link"),h(g,"login-box-subtitle"),h(i,"oauth-buttons-container"),h(k,"oauth-buttons"),h(m,"login-box-subtitle"),h(p,"oauth-buttons-container"),h(q,"oauth-buttons"),h(B,"login-box-close"),h(Ja,"root-min-height"),y.innerText="Forgot your password?",A.innerText="Don't have an account? Sign up.",s.innerText="Login with your email address",w.innerText="Continue",m.innerText="Proceed with social login",g.innerText="Proceed with "+parent.location.host+" authentication",n(w,a.passwordAsk,b),n(y,a.forgotPassword,b),n(A,a.popupSwitch,b),n(B,a.loginBoxClose),o(d,"style","display: none; opacity: 0;"),o(v,"name","email"),o(v,"placeholder","Email address"),o(v,"type","text");var C=0;if(["google","twitter","github","gitlab"].forEach(function(c){if(Wa[c]){var d=j("button");h(d,"button"),h(d,c+"-button"),d.innerText=c,n(d,a.commentoAuth,{provider:c,id:b}),f(q,d),C++}}),Wa.sso){var D=j("button");h(D,"button"),h(D,"sso-button"),D.innerText="Single Sign-On",n(D,a.commentoAuth,{provider:"sso",id:b}),f(k,D),f(i,k),f(e,g),f(e,i),(0<C||Wa.commento)&&f(e,l)}0<C?(f(e,m),f(p,q),f(e,p),Ya=!0):Ya=!1,f(u,v),f(u,w),f(t,u),f(x,y),f(z,A),0<C&&Wa.commento&&f(e,r),Wa.commento&&(f(e,s),f(e,t),f(e,x),f(e,z)),f(e,B),Xa="login",d.innerHTML="",f(d,e)},a.forgotPassword=function(){var b=window.open("","_blank");b.location=Ia+"/forgot?commenter=true",a.loginBoxClose()},a.popupSwitch=function(b){var d=c(ka);Ya&&(k(c(wa)),k(c(va)),k(c(ua)),k(c(xa))),Wa.sso&&(k(c(ta)),k(c(sa)),k(c(ua)),k(c(xa))),k(c(ra)),k(c(qa)),d.innerText="Create an account",Xa="signup",a.passwordAsk(b),c(la).focus()},a.login=function(a){var b=c(la),d=c(ma);W(b.value,d.value,a)},a.signup=function(b){var d=c(la),e=c(na),f=c(oa),g=c(ma),h={email:d.value,name:e.value,website:f.value,password:g.value};p(Ia+"/api/commenter/new",h,function(c){if(!c.success)return a.loginBoxClose(),void A(c.message);B();W(d.value,g.value,b)})},a.passwordAsk=function(b){var d=c(ja),e=c(ka);k(c(pa)),k(c(ra)),k(c(qa)),Ya&&0<Wa.length&&(k(c(ua)),k(c(xa)),k(c(va)),k(c(wa)));var g,l,m,p;"signup"===Xa?(g=["name","website","password"],l=[na,oa,ma],m=["text","text","password"],p=["Real Name","Website (Optional)","Password"]):(g=["password"],l=[ma],m=["password"],p=["Password"]),e.innerText="signup"===Xa?"Finish the rest of your profile to complete.":"Enter your password to log in.";for(var q=0;q<g.length;q++){var r=j("div"),s=j("div"),t=j("input");if(t.id=l[q],h(r,"email-container"),h(s,"email"),h(t,"input"),o(t,"name",g[q]),o(t,"type",m[q]),o(t,"placeholder",p[q]),f(s,t),f(r,s),"password"===g[q]){var u=j("button");h(u,"email-button"),u.innerText=Xa,"signup"===Xa?n(u,a.signup,b):n(u,a.login,b),f(s,u)}f(d,r)}"signup"===Xa?c(na).focus():c(ma).focus()},a.threadLockToggle=function(){var a=c("commento-mod-tools-lock-button");Sa=!Sa,a.disabled=!0,X(function(){a.disabled=!1,U()})},a.commentSticky=function(a){if("none"!==Ta){var b=c(Ga+Ta);i(b,"option-unsticky"),h(b,"option-sticky")}Ta=Ta===a?"none":a,X(function(){var b=c(Ga+a);Ta===a?(i(b,"option-sticky"),h(b,"option-unsticky")):(i(b,"option-unsticky"),h(b,"option-sticky"))})},a.loadCssOverride=function(){ba===void 0?a.allShow():x(ba,"window.commento.allShow()")},a.allShow=function(){var a=c(ha),b=c("commento-mod-tools"),d=c(ya);o(a,"style",""),Pa&&o(b,"style",""),d&&o(d,"style","")},a.loginBoxClose=function(){var a=c(ha),b=c(ia);i(a,"blurred"),i(Ja,"root-min-height"),o(b,"style","display: none")},a.loginBoxShow=function(b){var d=c(ha),e=c(ia);a.popupRender(b),h(d,"blurred"),o(e,"style",""),window.location.hash=ia,c(la).focus()},a.main=function(b){if(Ja=c(ga),null===Ja)return void console.log("[commento] error: no root element with ID '"+ga+"' found");_a||$(),null===$a&&($a=450>Ja.getBoundingClientRect().width),h(Ja,"root"),"true"!==ca&&h(Ja,"root-font"),V(),C(),Y();var d=y();x("https://cdn.commento.io"+"/css/commento.css","window.commento.loadCssOverride()"),w(function(){z(function(){Z(),H(function(){Q(),f(Ja,d),_(),a.allShow(),N(),r(b)})})})};var _a=!1,ab=function(){var a=b.readyState;"loading"===a?b.addEventListener("readystatechange",ab):"interactive"===a?aa():"complete"===a&&aa()};ab()})(window.commento,document);