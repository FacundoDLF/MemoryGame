(function(e){function t(t){for(var a,n,c=t[0],o=t[1],l=t[2],u=0,v=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&v.push(i[n][0]),i[n]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(v.length)v.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==i[o]&&(a=!1)}a&&(r.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},i={app:0},r=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/MemoryGame/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"049f":function(e,t,s){"use strict";s("6534")},"0727":function(e,t,s){e.exports=s.p+"img/athenianSmokingMonkey.9926ffd2.png"},"0e33":function(e,t,s){e.exports=s.p+"img/sunglassesRobotMonkey.c5f69171.png"},1223:function(e,t,s){e.exports=s.p+"img/reverseCard.b51ffed5.png"},1326:function(e,t,s){e.exports=s.p+"img/smokingSunglassesMonkey.1ce99400.png"},1758:function(e,t,s){"use strict";s("999b")},"291a":function(e,t,s){e.exports=s.p+"img/blueBandanaMonkey.e625bb7f.png"},"2d9e":function(e,t,s){},"30a5":function(e,t,s){e.exports=s.p+"img/smokingRobotMonkey.8828413d.png"},"3bca":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,i=s("2b0e"),r=s("2f62"),n=s("8c4f"),c=s("ade3"),o=s("1223"),l=s.n(o),d=s("ea8e"),u=s.n(d),v=s("0727"),f=s.n(v),p=s("291a"),A=s.n(p),b=s("6671"),m=s.n(b),R=s("9851"),k=s.n(R),h=s("7bfa"),C=s.n(h),y=s("cf0f"),j=s.n(y),g=s("d329"),O=s.n(g),E=s("a453"),I=s.n(E),L=s("b575"),B=s.n(L),D=s("e7b9"),M=s.n(D),x=s("5f27"),H=s.n(x),N=s("c176"),G=s.n(N),S=s("c27b"),P=s.n(S),W=s("30a5"),X=s.n(W),w=s("0e33"),F=s.n(w),V=s("1326"),q=s.n(V),z=(a={},Object(c["a"])(a,l.a,"REVERSECARD"),Object(c["a"])(a,u.a,"CARD_1"),Object(c["a"])(a,f.a,"CARD_2"),Object(c["a"])(a,A.a,"CARD_3"),Object(c["a"])(a,m.a,"CARD_4"),Object(c["a"])(a,k.a,"CARD_5"),Object(c["a"])(a,C.a,"CARD_6"),Object(c["a"])(a,j.a,"CARD_7"),Object(c["a"])(a,O.a,"CARD_8"),Object(c["a"])(a,I.a,"CARD_9"),Object(c["a"])(a,B.a,"CARD_10"),Object(c["a"])(a,M.a,"CARD_11"),Object(c["a"])(a,H.a,"CARD_12"),Object(c["a"])(a,G.a,"CARD_13"),Object(c["a"])(a,P.a,"CARD_14"),Object(c["a"])(a,X.a,"CARD_15"),Object(c["a"])(a,F.a,"CARD_16"),Object(c["a"])(a,q.a,"CARD_17"),a),Y=(s("fb6a"),{choseLevel:function(e){this.cardsInLevel=this.$store.state.cards.slice(0,e),console.log("choseLevel: ",e)}});i["a"].use(r["a"]),i["a"].use(n["a"]);var T=new r["a"].Store({state:{player:"",userPass:"",score:0,showCard:!1,cards:[{id:1,src:z.CARD_1,alt:"Monkey Card",isReversed:!1,isBlock:!1},{id:2,src:z.CARD_2,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:3,src:z.CARD_3,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:4,src:z.CARD_4,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:5,src:z.CARD_1,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:6,src:z.CARD_2,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:7,src:z.CARD_3,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:8,src:z.CARD_4,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:9,src:z.CARD_5,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:10,src:z.CARD_6,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:11,src:z.CARD_7,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:12,src:z.CARD_8,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:13,src:z.CARD_5,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:14,src:z.CARD_6,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:15,src:z.CARD_7,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:16,src:z.CARD_8,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:17,src:z.CARD_9,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:18,src:z.CARD_10,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:19,src:z.CARD_11,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:20,src:z.CARD_12,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:21,src:z.CARD_9,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:22,src:z.CARD_10,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:23,src:z.CARD_11,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:24,src:z.CARD_12,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:25,src:z.CARD_13,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:26,src:z.CARD_14,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:27,src:z.CARD_15,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:28,src:z.CARD_16,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:29,src:z.CARD_13,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:30,src:z.CARD_14,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:31,src:z.CARD_15,alt:"Monkey Card",isReversed:!1,isBlocked:!1},{id:32,src:z.CARD_16,alt:"Monkey Card",isReversed:!1,isBlocked:!1}],getters:Y},mutations:{setPlayer:function(e,t){return e.player=t}}}),U=T,Q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("Header"),s("div",{staticClass:"aside"},[s("div",{staticClass:"main"},[s("router-view")],1)]),s("Footer")],1)},Z=[],K=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"main"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"nav-tab",attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),s("router-link",{staticClass:"nav-tab",attrs:{to:"/Login"}},[e._v("Login")])],1)])])},_=[],J={name:"myHeader"},$=J,ee=(s("a260"),s("2877")),te=Object(ee["a"])($,K,_,!1,null,"37c378fc",null),se=te.exports,ae=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("h1",[e._v("This is a my footer.")])])}],re={name:"myFooter"},ne=re,ce=(s("ee03"),Object(ee["a"])(ne,ae,ie,!1,null,"56b01d31",null)),oe=ce.exports,le={components:{Header:se,Footer:oe},name:"App"},de=le,ue=(s("034f"),Object(ee["a"])(de,Q,Z,!1,null,null,null)),ve=ue.exports,fe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("header",{staticClass:"header",attrs:{id:"header"}},[s("div",{staticClass:"iso-logo",attrs:{id:"iso-logo"}},[s("span",[e._v("Welcome "+e._s(e.player+",")+" to Monkey MemoryGame")])])]),s("section",{staticClass:"main",attrs:{id:"main"}},[s("div",{staticClass:"main-form",attrs:{id:"main-form"}},[s("form",{staticClass:"main-fills",attrs:{id:"main-fills"}},[s("div",{staticClass:"row"},[s("fieldset",{staticClass:"fill-in"},[s("label",{staticClass:"label-form",attrs:{id:"get-name",for:"GET-name"}},[e._v("Player ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.player,expression:"player"}],staticClass:"input-form",attrs:{id:"inputName",value:"player"},domProps:{value:e.player},on:{input:function(t){t.target.composing||(e.player=t.target.value)}}}),s("span",{staticClass:"error-span",attrs:{id:"errorName"}})]),e._m(0),s("button",{staticClass:"submit",attrs:{id:"submit",type:"submit"},on:{click:e.handleStart}},[e._v(" START ")])])])])])])},pe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("fieldset",{staticClass:"fill-in"},[s("label",{staticClass:"label-form",attrs:{id:"get-name",for:"GET-pass"}},[e._v("Password ")]),s("input",{staticClass:"input-form",attrs:{id:"inputPass",type:"password",name:"pass"}}),s("span",{staticClass:"error-span",attrs:{id:"errorPass"}})])}],Ae={name:"Login",props:{msg:String},computed:{player:{get:function(){return this.$store.state.player},set:function(e){return this.$store.commit("setPlayer",e)}}},methods:{handleStart:function(){this.$router.push("/Game")}}},be=Ae,me=(s("049f"),Object(ee["a"])(be,fe,pe,!1,null,"0a5d97e3",null)),Re=me.exports,ke=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},he=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("span",[e._v("Monkey MemoryGame")]),s("div",{staticClass:"Home-Logo"},[s("img",{attrs:{src:"https://i.pinimg.com/originals/97/fd/05/97fd05e0cc5fc8f8204012448bc703ae.jpg",alt:"Monkey Memory Game"}})])])}],Ce={name:"Home",components:{}},ye=Ce,je=(s("5d85"),Object(ee["a"])(ye,ke,he,!1,null,"03a609bc",null)),ge=je.exports,Oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/Game"}},[e._v("Game")]),e._v(" | "),s("router-link",{attrs:{to:"/Profile"}},[e._v("Profile")]),e._v(" | "),s("router-link",{attrs:{to:"/Scores"}},[e._v("Scores")])],1),e._m(0),s("img",{attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhPbDJU0FtzoIKj9OQeo5omGrAbi6aGYdmrQ&usqp=CAU",alt:"Profile Gamer"}}),s("router-view")],1)},Ee=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"profile"},[s("h1",[e._v("This is a PROFILE page")])])}],Ie={},Le=Object(ee["a"])(Ie,Oe,Ee,!1,null,null,null),Be=Le.exports,De=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/Game"}},[e._v("Game")]),e._v(" | "),s("router-link",{attrs:{to:"/Profile"}},[e._v("Profile")]),e._v(" | "),s("router-link",{attrs:{to:"/Scores"}},[e._v("Scores")])],1),e._m(0),s("img",{attrs:{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSExAWFhUXFxcXFRgYGBYXFxcVFhgdGhUWFhUYHyogGBonGxUVIjEhJSorLi4uGB8zODMtNygvLisBCgoKDg0OGhAQGy0lICUtLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLf/AABEIAP8AxgMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMCAQj/xABMEAABAwICBgUFCwsCBgMAAAABAAIDBBESIQUGMUFRcRMiYYGRBzJSobEUI0JygpKTssHR8BYXJDNTYnOiwtLh0+MVNGOz4vFDdIP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQH/xAA0EQACAQIDBQYGAQQDAAAAAAAAAQIDEQQhMRJBUWFxIoGRodHwExQyscHxBSMzQrJikuH/2gAMAwEAAhEDEQA/ANxREQBERAEREAREQBEX4UB+ovIytHwh4hfPuuP02+IUduK1Z7Znui5jXRjbIz5wX62sjOyRp5OC8248ULPgdCL4DxxHivtTWeh4EREAREQBERAEREAREQBEVS0lrW1jiOkZG2+RPWe628N2BU1q8KSTlv0SV2ycKcp6FtXwZANpHiqF+VTXmzellPgPABfk+k57F3QFjQLkkHZ4rBL+Sd7Kn4u3kaFhJPVl+Y8HYQeS+sQ4qp6v6TLYKhzjcsdiF94e0BvdcEdyjp4aqoDnN6B1hcska4ueNvVdsHZn4K+WMaUNmN3JXte3rn7uR+Xabu7JOxatO6aho4nTTPwtaM+/IADeScgFmNd5YZJHYaanDW7nSG7vmNNvWvE6Xje19FXNc6FzjhIJLoi0gsLSc8Ive2dtmajpfJw6+Kkqopm+i84JAN2VrE88KpeKu+22lu4W68fAmqMY6klLrhWyDOYi+5oDf8r60dpCV7xile7m4qKl1drY/OpZDbe0B4/luvqiL43DHG9vxmke0KmcYzi7WfmaouNsi7seuiNygItJN4hdUekBxWONJrcRdzx1yd70O9ZlMM1ftaqwGMZrPpZBfaunh01Arsy26iykF2Z28VeKitexpLXkHsKznVKqDXHNW2eSV7bMie7k1x+xZ8RC87kkuJGz+UCugJtI14G57R7RZS+r3ligke2KqhMLnGweDijuTYXO1vhbtVWqNT62W5MQjb6Ur2sHtv6lxu1YoaS01XP7pcCCIYB72524PldbE3sFlfGtFZKTvyz8s19uqK6kYt5I/oRkgIxA5L0WU0VfPXT+9BhGBpa2Ql0cRu7ES0ZYgG57c8lZdG1ssErY5CwhzgwlgLWkuIAIB2EEhWQxz7O3HWybvv6cO8qeG1s+ZbXSNGRcAeYX01wOwqjab0g/3VIGG+bGNHEhtz6yR3Lz/wCLys8+mdzbe6rqfyEqc3HZuk+NvuSWFbinfUv6KhRa4xg26Z7DweMQ772IVi0FpsTkt6pyuHNN2uG/kdi0UcbCpJRaab4r86Fc8POKuTaIi2FAWbadoI+lLXRtdd5AuNmZ38wtJVE14jwHpB8GRp7iAR68a5/8hFuEWuP3NeDlaTXFE5qzSQupontiaLtzA2AjJwtzB2ru0lRNdGWho35AWuCCHDLsJ9S4NUZB0ckfoSOI+JIBI3u658FYFop04TpWtqimcmqj6mYUbxGZKSY2L2ljSThEsTtmFxyEjciFKaF0gKc4amdoDdnVkDncLtw2B5EhWHTGgIqgWc1p7CMr8QdrT+LKvnU+SP8AUgHsdI9zRyDvuXNlhqkJK8NpJ3XXXjdZ52d1wNaqQqXu7X1M31hqcM8jbXDnH1NjIP8AMurRtQ4WFyOxe+ntUa+OQPd0TnPe8jC74JaxvwgLWwjevit0PPSFgntieCRY4tlgQTxzC9soxUHrw8/tmWqSbutHoX3ViOQsDxJkbizgXbDuzyXD5QNM1lHCJo3R4A9ocQDj62QFngtIvyK79S5Lwj4zh6gVHeVtl9HSdj4z/Ms9KEXPNJ58CmbvMq1F5Rpn2Do2PJ4xsJPgQrDR6xF4u6kg747ewrLNX2++s5+wFX2lC2Tpwjol4BxRdYXskAJoIzlvaLd112RUUe33HC35DfuXbozzGfFHsXZV+Z3hQ+CnByy8EVOS2rWODAR5jWN7rexQ50hI95Y2RoIF7YXGwGXG28KcCqmizeqk7Gn1uH3LDUitbFtNKzInWeBsTwTJI+eQdSwY2NtzhBNwTt3BZ9rRTPY9odIXvdfjlssBdaBrqf0unH7rT4PcfsVE1kifPVMijtjIs25sL5nbu2LZhno+V2WPOBb/ACVVTYGPdO/BcFlzckOLiRe3YrA+UulbO+VhjiOJp6zWF4810jngZDbhbckgbFGat6nV0dzeJ0bmx5FxxYmMDXu2ZdYO3m+SsMGpLXODpWgng573Acmk29i8lTqSkpRhnqnbjnvsuhFyppZy5M4NAQmpn6Vt+jBIY45F73efLbhttzV+dTMIsWDhsC86KibE2zeXDLgANgXWujhsN8OL2tX3/vm95lrVduWW4ouu1FAHxjoWk4XvcTmQG4Q3PfcuO3gu7UymDS5zWgDDYACwzP8AgqJ10qbyy9nRQt+Mbvf7WBWvV2HDH3NHqxH1vKyRgni8tFfpp6miUrYfPVkuiIuqYAq3rjR9JE8Da6N1vjM6zfUXqyLi0nHijJ3t6w7to8LjvVGJg5U2l18MyylLZmmVLUKvxdGb+fGY3fxITdvixx+ar0sn0FIaernp+DhUQ9uHMtHNjnj5K1SKQOaHA3BAI5HYq8HNOOz39zzLMTG0rnoiItZnK3riOrE7g4jxAP8ASqr5Sc2Usna8fOa0j6pVs13H6KX+g9jjyDrH1FVTXcYtHxP9CRo9Tm/cuLio2xSfH0sbqTvTjyb8zr1BmvG4cH+1v+F6+UyPFo2o7Aw+D2qI8nc+cjexjvAkH2hWbXOHHRVLf+m71Z/Yqo5VH1RKf1GH6uD31vf9Uq90oVG1bHvje/6pV7pQtlY9Zo+jj1G8h7F3VJ6neFH6OPVbyHsXdUnqjmowl/Rl0M8/rOY7DyVS0Eb1Ex4WHrP3K2SHqu5H2KparZundxkt4C/9SxVPpv71RfT0ZC63vvXxj0Ywfrfeqxq+3pdLN/dufBtj9ZTms0t9IS/uRtH8rf7iozyaw9JWVEvoxkDm92X1VcsqLf8Ax+/7Jrd1Nz0a20TPig+Of2rqXxGywA4ADwX2u3FbKS4HNbu7hfEjwASdgBJ5DavtROsE1osF7YzhJ4MGcju5oPiozmoRcnuEY7TSKJWO6aqp4j8JzqiTsDziaO5jWhaLo5lo2ne67j8o3t67LO9TAaqpnqbZPf0cfYz4VuTAAtQWPCRbnKT6d+r/AAasS8lEIiLeZAiIgMt8oFG+mkjrIx1oHi/bGTdt+za3xV01Wr2SRhrTdtg+PtjfmB8k3b3L30/o9s0Tg5twWlrxxY7b3jb3His51RrJKGodRSHOMl0J3Pidm5o9vO/BcuT+XqX3L/VvP/q/I2f3Yc/yjXUXlDKHtDmm4IuF6rqJ3MZF6x03SUs7OMb/ABtcexUFz+n0PKN7Wtf3sIJ9bHLUHMuCFmOqkVn1lE7jKy37rr2/qXL/AJGNtmfD19Wa6D7El3kLqBU2nw+kxw7x1vsK0rSceOCRvpRuHi02WParzmKojxbWvwu8cJ9pWzQ5sHK32LNWWzUfT7MtqbmYFoBtpWjtI9RV5pgqi2Do6t7PRlcPWrhShaavE9ZftGnqt5D2LtqTkOajtGHqN5D2LunOzvVKf9JlU12keNU60bzwaVV9T2+8l3pPcfYPsU9p+XBSynsURq03BTx39HEe8l32rPXyhbp+SyGjKBp2pvUVknBxHzbj+kKY8jdF71JIR+snY0drYwCfa7wVO0pUe8yPO2SRx8Tn9q1fyX6P6KkpmkZ4Hyu5yEkDwfbuWzZ+mHFpeFr/AGE3buRfURF1jnhZt5RtNENcxhu+Q9BEBtsSOmcOfVZ3q66drxFGc7OcDY8B8J3cFmurFM6urDVke9RHo6YHY52d392bjz7Fz8VWu9hbs31/xXjn0NVCH+bLvqVocU8LW+i2xPF5zkPjYeKs68aeEMaGjd6zvJ7SV7LXRp/Dgo+PXeUVJ7crhERWkAiIgCoevmrLpWtkh6s0RxQHjbMwk+seCvi8pYg4EHYfxccCqa1L4kea098ydOewykai6ztkZhd1SDhkadscmw5eifxvV8Wda06sysl91UthP8NuxlQ0bjuElh37V2aqa3NeMDwWluT2O/WRHgRtLe3/ANLDQr/A/pz+n/Xk+XB9zNFSntrbiXlZhp0+5dMB+xs7QflDI+y3etKika4BzSCDsIVC8rtEehiqmjrQvF/iuI9QIBWvFQU6fv3rZleHlszzKFrNTdBXzNGxz+lbyk62XeT4LWdC1PSRNdxDXfOF/bdZrrlaWKlq2729E/60d+4vHcrV5P67FCGk5tJb/U31EhcqXapwk92T+3oapLK3Aput9N0ekJDucQ/xzPrU7ShfnlLo7SxSjeC08wbj2pQG7WniB7Fe3eCZ4XXRZ6jeQ9i75TmOSjNFHqN5KRJuVnT7Fuf5PJLMhdepbUuEbXuAH471x6Ul6GjlI+DEWjnbCPWQvvW1+Oogi3Ahx+Tn9yideJv0dsQ2yyNb8kZn2BeVc6ijz+36ZKC7KM50jTGQ09M3a8tHe82v/MV/QuhacMBAFg0NY3k0f5Hgsb1Ho/dGkzIR1KdpdfcHea0et5+Stwoo8LAN+08zn9q6FFbVVclfvf8A4U15ZPmdC8KuobG0ucch4k7gO1eVdXsiF3HPc0bT+OKzvTenZ6uU09LYv2Pf/wDFTt3ku2F6txGKVPsx+ryXN+mr3IqpUnPN6HLrNXy19R7jhNic6h/wYoh8G/G23/K0HV3RTKeJjWNs1rcLBvA3uP7zjme5R+qWrUdNGALm5xPe7zpX+k7g2+wd6tKrwtBrty656tve/wALcidaorbMQiIt5mCIiAIiIAiIgPOSMOFnC4/HgVVNYdVGSnpBcSN82VmUg7H288fiyt6KmrQjUWevHeThUlB5Ge6OZWwusHBw9NthfhiYbtJ7fUozXmtrBTSNPSYHNIfjbG9hB7RYtttuFfdNMja3pDHc4gMiWgkm3XttHNRGl6uB0LmOjDHDgBhI33IyItfauTOLw8tlz3XSzSa+yfBI3Rkqlmo67zLtUKj3TSTUbvPADo7+kDdv82XJ6kdRK4skLNmIXHxmZ28LqBlopKF1PXtuYZ3Pt2MuQ2534m9bwUnpAdFUNnj8yS0jSNlzm4d9796snHOUV/lmuTWb/D/ZOOa6F+1xpRPSFwGbbPHd53qJ8FXdDm7G8vYrRoiqbIzAc2ubdvIjMfjtVdpKUxOfGfguIHLcVVTleDRW1bIteiz1G/jepKHbfvUVow9Ud69tJ1PRxHi7Ict58Paq4u0umYavkQIk6Wqkl3AYR8o39lgoDXKs997IYyf/ANH7B4WU/QWYwudlte78cgqZU0slZKyBuT53GR524GDzb9gH2L2ktqd374+Vy15EVqjrBPA6SOEC8hu52EONz1Wix25m9st61mkrK0sveXFbPGI8+0NAy8VTdC6v+4poWzht5GucCy5BLHYXNDjtcGk2+MVoFRpCEi7ILtBAxeY832lp84lW1qi2n2tnTjd36bub4lajksr+/uV46Iqal1ppCxp2tYS6R/YZNoHIDmrdoXQMcDA0Rta0Zhg2X4vPwj6ue1SlNTMYLNbbid55k5ldC20MFGGc835erfN5mapXcso5IIiLcZwiIgCIiAIiIAiIgCIiA56ylZKx0b23a4WI/wA7j2qpy+TyB7vfKmpfFf8AVGQYCPRcQMTm9hKuiKEqcZO7RKM5RyTK/rRq5HV0bqXCGgNHR2A6hb5luGwLHdBlzmvoJ+rLE49Hfi3aOW/kV/QSzryj6nulcK2mFpm2xgWBcAcnX4hZsTRurrL8W0f4fLoX4epZ2fvl73kFq5WOaOjOTmG4+0fjirDWWktM3bk144EbPxyVFqdKubI3pIHRyiwfwP71vxkrLSVbrY2ZgjMbQewjeuXNOLUrWubnDa0LLovze/7lGaSqulfl5oyHaN571yv0m9zcAZgB22vc95XhPUNiYXvNgPXwA7VVJiFNrU+NO1QDOjJsDm/sYNo5k2ClNSNDOF53i00+zjHCLWHZuPzVVNEMqKx5kFOCwO+GThe8eYywF38hkM7kLXtEUr44x0paZSBjLRZoPotBzsPWttDDOT2X3+n5KK9RRWRz6e1dp6yIRStIDCDG5hLXxuAsHMeMwbLg0RqbFA4PfUTzlpu0SuBaCNhwtAxHndWhF1ZUoSabWhiVSSVkwiIpkAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAresOgmys/UiVo2NyD2fwnbh+74cFQ2QRQOIZUYADYslGYPA7CD3LYFnHlU0c1wbK+ESMDQ1t+q0PLsw54zBItYu6twdl8+fiMLFJyjdcUs11tu7vA10KzvZkc6vZbOoiHb1j6jb2r10ZQw1LxYOqnDdcCJva62Te83PAqB/J/RkcPSBzDNguI8ZeOktkzbnnktR1Io5IaOJkkYY6xJaABhBOQNt9rbc+Ky4XDwqN2bVuSXnn4ovr1pRj+/REho6gEYFw24FgGizGD0WN3c9/ZsUgiLrwhGEdmKsjnNtu7CIimeBERAEREAREQBERAEREAREQBERAEREAREQBVrX6cMo3ZA3IABFwTuuOdlZVStfJOkkp6cfCkbfuOI/Vb4rPipWpPnl77i6gr1EVmTR/RwGbqkske3zRe8TtoPbhPitXhfiaHcQD4hUERY6F54zTO7nTEH1OVm1OrOlpIifOaMDubcvZZZcG1Gco8Uvfmy7EXlBPgycREXSMYREQBERAEREAREQBERAEREAREQBERAEREAReU0rWAuc4NA2kkADmSout1kpYmYzM0t3EEEHkdijOcYK8nY9jFyyirknUzhjS49w3k7gO1Z9Tz9PWSVBN2U7XXO4yWOKx4DIfJUTpjWOprZXNp3OYwnACBiBFs8Lxmy987bexTEVG+KibTtiDC4jpHFzbP3nDsOdrW4Ll4ir8SSWi3cer7tFwfcbYU3Bc2SugqPHQNjO1zXeLiTfxUPqnpf3NOYpThZNmCdjZBk5vZmCrLombBC1hiebC2QBHjdU7WWlNQZC2MMabOzcHOEgyc8YLgXAGV9ouq3NRkpp+/fkSinK8WsmaoizTUzW5sA9z1EjyBYtkkLR2YQOGV9p3q/N0pAcPvrLu80EgE8r7V1KdeE8r2fDeZKlKUOnE7URFcVBERAEREAREQBERAEREAREQBERAFnvlV1plpmNgp3lkj+s54tdrAdjb7CbHNaEv591w0h7qq5Zfg4i1nxG9Vp7wL96qqysi/DwUpZ7iNY9kpbNXVMsjsV447l7jY2LiX9VjLjdmbFSg0c+tkkmEpcGOIIecm5X6m7DY9ihW6SYHR08jQAHjrHZgecyHfBIN+zYr7TGkoi10hkeyQWGEgtz422hcutKUZXz2npvyvnbqjbu5IntR9Fxxsu2ZjnPtfA4ENA3Zb1465ulknbGIiY2tBxYb3cdtnbhaw8V76B0Zo83lpsTXG+0utc7Lhy+q5tWWBkj4WZ3DmSlt7cA4qqn9bebvyz8Cl/Vd+hM6sOtEAQBbds9q8tJU5EtwAWngBkd97L40FTub51SXnh0jXD6ymKkvt1LE338O4q6dPahsu+XLPwuQ2rTuiha06tiYl7HDGdrTf1cFRKV0LY5YKiaQwGwwtAIa4OBD2NcNot4E7VsNTGGEl4zdwP4ss214oIKUNdYdcmwc7IeFiVRRk7/ClflxNCe8hGaTq6Fzfctc90RAdGQSWOaCRYxPybYtIIW6ap6aFbSx1GHCXAh7fRe02cB2ZXHYQsAdWiosWts1gDG5WvbMkDcM7dy0zyO19umpieEjfU1/9K6lCUlZS9+0U14Jx2kaaiItZiCIiAIiIAiIgCIiAIiIAiIgIfW2qMVHO8XvgwgjaMZw4h2jFfuWNHoHABoAsNmYdYdhWva9f8jNyb9dqxuRgIsQDzWWurtHQwi7D6nLpCkgLSXvDQN7r5cnN+5V9sMDcm1kQF75OkGfGwbtXfrDSAxgYnAEi4vfZnvuVx0mpE0jQ5uQIuA54a6x2EgMNlXeMVeTsTmnfJEtovWWanFo9Iw4eDhiHiY7+tdekNdJpg0PrKU4dlmvG3uUSzya1J2Fn0v8Atr2Z5LKw7Oj+l/21Tt4e97ryIdrgSNBrnLCbtqqTvEhXe/yl1ZFhW0jeTHX9YKhW+SOuP7P6b/bX2PI9X8I/ph/poquHjpJEXnqkfNfrVUzfrNLNI4NOAD5kYKjKangkkBfVxvc4gZukc5xOwFxbdS35na/hF9MP9NROnNRZ6IsM4c0OPUex7XNxDPDfCCHWF7W3dishUoydoyz7j1PPcWI0bIxYZ24ZD7/YunVHS/RVsBYLh0jY3W2YXnCc9mV79yj3xYgC4l3PZ80ZLr0GP0qn/jRfXClFZo0TXZZv6Ii3HICIiAIiIAiIgCIiAIiIAiIgK/r3/wAjNyb9dqxt7lrflHqWsoXg7XuYxvPFiPqaVjj3rPV+o6OE+jvOHTRu0c/sV76IgC3AKhaUPVHNae+DIcgubjHbZ7/wXp2Zy01TbapilqVBzQr6p5yMisTVyUoplvpqld8c4VWp6ntUtTVCqaM04E2HKkeWAfoUf/2Gf9uRW6CVVDyvG9Ez+Oz/ALcinQ/ux6oqStJFGAyHILo0IP0qn/jRfXC8WbByC+6GcRSxyO81j2PPJrgT6gu4jdJZM39F8g3zC+ltOKEREAREQBERAEREAREQBERAZN5X9K3qIKcOyja6R/xn5NvyDT85UXpAdhvyUvrQ01FXPKc7yEDsazqt9TQq9LoDMuje5jjmbZgntCySd3c6lOLjBJI+NIOyHNbK6DqgjgPYsRrKarYM4xIOLb37wB9i9aXWPSkbBGzpmsaLNb1iANwGJhIHYs2IoSqpWayDeenkzXJ4FHzRLNnaz6UO3pfD/bXmdYdJndL4H/TWf5Oa3okqljSY5S0qUpapY+dOaRO1kvgf7Ebp3SI2Ml8Hf2L14Kb3oOouD8Dd6aqVc8qswNHGL7Z227bRyLMm6zaUGwTeB/01z1mla+cjpYpHkZNxY7C+2wwgDmlPBSjNSbWRU7N/ss8ewcgvCslaAQXC9jlv8FHe56yUdZwhbwbm7vdu7ivum0IGXsCSdpJJJW40bTeiNy8nuk/dFBC4nrMBjfzjOEHvaGnvVlWaeSGUsM8F8urIOw+a7x6vgtLWqDvFM5VaOzNoIiKZWEREAREQBERAEREAX4V+ogMf0/qXWxF0gaJ23Li6O+O5zJMW3uaXKss0g5pLXC5G1rgQ4dh3g81/QyitM6ApasWnga/cHZtePiyNs5vcVTKktxqhipL6jC36xxAkdC/L95v3J+UsX7F/zm/ctNd5KdHE39++k/wn5p9Hf9b6T/Ch8GRb82ufgjMvyki/Yv8AnN+5fv5RxfsX/Ob9y0v81Oj+M30n/iv381Oj+M30g/tT4LPfm1z8EZp+UUX7F/zm/cn5QxfsX/Ob9y0z81Wj+M30g/tT81ej+M30g/tXvwGPnFz8EZp+UEX7F/zm/cn/AB+L9i/5zfuWl/mr0fxm+kH9q/fzWaP4zfPH9qfAY+cXPwRndNpRj74YiCOJyz5BfcMM1Q7BDG6Q72xtuG/GIybzcQtKovJvQxm+GR49F0hwk9oba/I5ditdLSsiaGRsaxo2NaA0DkAvY0eJGWMyyXiUnULVOppJHTSvY0OYWmJvWOZBBc/IAixyF9u1XxEVySSsjHKTk7sIiL0iEREAREQH/9k=",alt:"Scores List"}}),s("router-view")],1)},Me=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"scoresList"},[s("h1",[e._v("This is a SCORE LIST page")])])}],xe={},He=Object(ee["a"])(xe,De,Me,!1,null,null,null),Ne=He.exports,Ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main-game"},[s("div",{staticClass:"left-nav-bar"},[s("LeftNavBar")],1),s("div",{staticClass:"container"},[s("div",{staticClass:"nav"},[s("router-link",{staticClass:"nav-tab",attrs:{to:"/Game"}},[e._v("Game")]),e._v(" | "),s("router-link",{staticClass:"nav-tab",attrs:{to:"/Profile"}},[e._v("Profile")]),e._v(" | "),s("router-link",{staticClass:"nav-tab",attrs:{to:"/Scores"}},[e._v("Scores")])],1),s("div",[s("CardLayout")],1)]),s("router-view")],1)},Se=[],Pe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.finishGame?s("div",[s("h1",[e._v("CONGRATS!! YOU WIN !!")])]):e._e(),s("div",{staticClass:"deck"},e._l(e.cardsInLevel,(function(t){return s("button",{key:t.id,staticClass:"card",attrs:{disabled:t.isBlocked||e.isGameStopped},on:{click:function(s){return e.showCard(t)}}},[s("img",{staticClass:"temp-card",attrs:{src:t.isReversed?t.src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOKNdUpoBWN860IXpp9GCa1yPzd5C9xFPmnGenDEAAo44uVENo857N3gan_jqPFxq4tc&usqp=CAU",alt:"Monkey MemorycardsInLevel"}})])})),0),e.cardsInLevel?e._e():s("h2",[e._v("Please, choose the difficulty to start the game.")])])},We=[],Xe=s("5530"),we=(s("d3b7"),s("b64b"),s("c740"),{name:"CardLayout",data:function(){return{reversedMatch:null,isGameStopped:!1,cardsInLevel:null,finishGame:!1}},methods:{winGame:function(){var e=this,t=!0;return Object.keys(this.cardsInLevel).some((function(t){if(!e.cardsInLevel[t])return e.finishGame=!1,!1})),t},resetGame:function(){this.cardsInLevel=null,this.reversedMatch=null},blockCouple:function(e,t){var s=this,a=this.cardsInLevel.findIndex((function(e){return e.id===s.reversedMatch.id}));i["a"].set(this.cardsInLevel,t,Object(Xe["a"])(Object(Xe["a"])({},e),{},{isBlocked:!0})),i["a"].set(this.cardsInLevel,a,Object(Xe["a"])(Object(Xe["a"])({},this.reversedMatch),{},{isBlocked:!0})),i["a"].set(this.cardsInLevel,t,Object(Xe["a"])(Object(Xe["a"])({},e),{},{isReversed:!0})),i["a"].set(this.cardsInLevel,a,Object(Xe["a"])(Object(Xe["a"])({},this.reversedMatch),{},{isReversed:!0}))},showAndHide:function(e,t){var s=this,a=this.cardsInLevel.findIndex((function(e){return e.id===s.reversedMatch.id}));this.isGameStopped=!0,setTimeout((function(){i["a"].set(s.cardsInLevel,t,Object(Xe["a"])(Object(Xe["a"])({},e),{},{isReversed:!1})),i["a"].set(s.cardsInLevel,a,Object(Xe["a"])(Object(Xe["a"])({},s.reversedMatch),{},{isReversed:!1})),s.isGameStopped=!1,s.reversedMatch=null}),1e3)},showCard:function(e){var t=this.cardsInLevel.findIndex((function(t){return t.id===e.id}));e.isReversed&&e.id!==this.reversedMatch.id?(this.reversedMatch=null,i["a"].set(this.cardsInLevel,t,Object(Xe["a"])(Object(Xe["a"])({},e),{},{isReversed:!1}))):i["a"].set(this.cardsInLevel,t,Object(Xe["a"])(Object(Xe["a"])({},e),{},{isReversed:!0})),this.reversedMatch?e.src===this.reversedMatch.src?(this.blockCouple(e,t),this.reversedMatch=null):this.showAndHide(e,t):this.reversedMatch=e}}}),Fe=we,Ve=(s("9ed7"),Object(ee["a"])(Fe,Pe,We,!1,null,"f959ab08",null)),qe=Ve.exports,ze=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"leftNavBar"},[s("div",{staticClass:"nav-lvl"},[s("img",{staticClass:"logo",attrs:{src:"https://i.pinimg.com/originals/97/fd/05/97fd05e0cc5fc8f8204012448bc703ae.jpg",alt:"Monkey Memory Game"}}),s("p",{staticClass:"label-lvl"},[e._v("Level:")]),s("button",{staticClass:"btn-lvl",on:{click:function(t){return e.choseLevel(8)}}},[e._v("x4")]),s("button",{staticClass:"btn-lvl",on:{click:function(t){return e.choseLevel(16)}}},[e._v("x8")]),s("button",{staticClass:"btn-lvl",on:{click:function(t){return e.choseLevel(24)}}},[e._v("x12")]),s("button",{staticClass:"btn-lvl",on:{click:function(t){return e.choseLevel(32)}}},[e._v("x16")]),s("button",{staticClass:"btn-rst",on:{click:e.resetGame}},[e._v("Reset")])])])},Ye=[],Te={name:"asideNavBar"},Ue=Te,Qe=(s("99f5"),Object(ee["a"])(Ue,ze,Ye,!1,null,"b2375486",null)),Ze=Qe.exports,Ke={name:"Game",components:{CardLayout:qe,LeftNavBar:Ze}},_e=Ke,Je=(s("1758"),Object(ee["a"])(_e,Ge,Se,!1,null,"7cbc7f5a",null)),$e=Je.exports;i["a"].use(n["a"]);var et=[{path:"/",name:"Home",component:ge},{path:"/Login",name:"Login",component:Re},{path:"/Profile",name:"Profile",component:Be},{path:"/Game",name:"Game",component:$e},{path:"/Scores",name:"Scores",component:Ne}],tt=new n["a"]({mode:"history",base:"/MemoryGame/",routes:et}),st=tt;new i["a"]({render:function(e){return e(ve)},router:st,store:U}).$mount("#app")},"5d85":function(e,t,s){"use strict";s("3bca")},"5f27":function(e,t,s){e.exports=s.p+"img/whiteMarineMonkey.694779c2.png"},"63fc":function(e,t,s){},6534:function(e,t,s){},6671:function(e,t,s){e.exports=s.p+"img/blueMarineMonkey.6edb8c30.png"},"7bfa":function(e,t,s){e.exports=s.p+"img/highEyesMonkey.29acb76d.png"},"85ec":function(e,t,s){},9851:function(e,t,s){e.exports=s.p+"img/coinEyesMonkey.234a71fb.png"},"999b":function(e,t,s){},"99f5":function(e,t,s){"use strict";s("f4ec")},"9ed7":function(e,t,s){"use strict";s("2d9e")},a08b:function(e,t,s){},a260:function(e,t,s){"use strict";s("a08b")},a453:function(e,t,s){e.exports=s.p+"img/karateMonkey.33fdc83a.png"},b575:function(e,t,s){e.exports=s.p+"img/marineHighEyesMonkey.dd7b47a4.png"},c176:function(e,t,s){e.exports=s.p+"img/athenianRobotMonkey.de9585cc.png"},c27b:function(e,t,s){e.exports=s.p+"img/karate3DMonkey.2415efa0.png"},cf0f:function(e,t,s){e.exports=s.p+"img/highHolyMonkey.4536d61e.png"},d329:function(e,t,s){e.exports=s.p+"img/jailSmokingMonkey.d5d9c819.png"},e7b9:function(e,t,s){e.exports=s.p+"img/marineMonkey.03fbc3ef.png"},ea8e:function(e,t,s){e.exports=s.p+"img/aladinMonkey.6cae50f3.png"},ee03:function(e,t,s){"use strict";s("63fc")},f4ec:function(e,t,s){}});
//# sourceMappingURL=app.f0dae8fd.js.map