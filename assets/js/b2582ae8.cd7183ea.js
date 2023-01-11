"use strict";(self.webpackChunk_semaphore_protocol_website=self.webpackChunk_semaphore_protocol_website||[]).push([[353],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4846:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905));const i={id:"introduction",title:"What Is Semaphore?",sidebar_position:1},o=void 0,s={unversionedId:"introduction",id:"version-V1/introduction",title:"What Is Semaphore?",description:"Overview",source:"@site/versioned_docs/version-V1/what-is-semaphore.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/V1/introduction",draft:!1,editUrl:"https://github.com/semaphore-protocol/website/edit/main/versioned_docs/version-V1/what-is-semaphore.md",tags:[],version:"V1",sidebarPosition:1,frontMatter:{id:"introduction",title:"What Is Semaphore?",sidebar_position:1},sidebar:"version-V1/mySidebar",next:{title:"How it works",permalink:"/docs/V1/howitworks"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Basic features",id:"basic-features",level:2},{value:"External nullifiers",id:"external-nullifiers",level:3},{value:"About the code",id:"about-the-code",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore"},"Semaphore")," is a zero-knowledge gadget\nwhich allows Ethereum users to prove their membership of a set which they had\npreviously joined without revealing their original identity. At the same time,\nit allows users to signal their endorsement of an arbitrary string. It is\ndesigned to be a simple and generic privacy layer for Ethereum dApps. Use cases\ninclude private voting, whistleblowing, mixers, and anonymous authentication.\nFinally, it provides a simple built-in mechanism to prevent double-signalling\nor double-spending."),(0,a.kt)("p",null,"This gadget comprises of smart contracts and\n",(0,a.kt)("a",{parentName:"p",href:"https://z.cash/technology/zksnarks/"},"zero-knowledge")," components which work in\ntandem. The Semaphore smart contract handles state, permissions, and proof\nverification on-chain. The zero-knowledge components work off-chain to allow\nthe user to generate proofs, which allow the smart contract to update its state\nif these proofs are valid."),(0,a.kt)("p",null,"For a formal description of Semaphore and its underlying cryptographic\nmechanisms, also see this document\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/appliedzkp/semaphore/tree/master/spec"},"here"),"."),(0,a.kt)("p",null,"Semaphore is designed for smart contract and dApp developers, not end users.\nDevelopers should abstract its features away in order to provide user-friendly\nprivacy."),(0,a.kt)("p",null,"Try a simple demo ",(0,a.kt)("a",{parentName:"p",href:"https://weijiekoh.github.io/semaphore-ui/"},"here")," or read a\nhigh-level description of Semaphore\n",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/coinmonks/to-mixers-and-beyond-presenting-semaphore-a-privacy-gadget-built-on-ethereum-4c8b00857c9b"},"here"),"."),(0,a.kt)("h2",{id:"basic-features"},"Basic features"),(0,a.kt)("p",null,"In sum, Semaphore provides the ability to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Register an identity in a smart contract, and then:")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Broadcast a signal:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Anonymously prove that their identity is in the set of registered\nidentities, and at the same time:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Publicly store an arbitrary string in the contract, if and only if that\nstring is unique to the user and the contract\u2019s current external\nnullifier, which is a unique value akin to a topic. This means that\ndouble-signalling the same message under the same external nullifier is\nnot possible."))))),(0,a.kt)("h3",{id:"external-nullifiers"},"External nullifiers"),(0,a.kt)("p",null,"Think of an external nullifier as a voting booth where each user may only cast\none vote. If they try to cast a second vote a the same booth, that vote is\ninvalid."),(0,a.kt)("p",null,"An external nullifier is any 29-byte value. Semaphore always starts with one\nexternal nullifier, which is set upon contract deployment. The owner of the\nSemaphore contract may add more external nullifiers, deactivate, or reactivate\nexisting ones."),(0,a.kt)("p",null,"The first time a particular user broadcasts a signal to an active external\nnullifier ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", and if the user's proof of membership of the set of registered\nusers is valid, the transaction will succeed. The second time she does so to\nthe same ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),", however, her transaction will fail."),(0,a.kt)("p",null,"Additionally, all signals broadcast transactions to a deactivated external\nnullifier will fail."),(0,a.kt)("p",null,"Each client application must use the above features of Semaphore in a unique\nway to achieve its privacy goals. A mixer, for instance, would use one external\nnullifier as such:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"External nullifier"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The hash of the recipient's address, relayer's address, and the relayer's fee"),(0,a.kt)("td",{parentName:"tr",align:null},"The mixer contract's address")))),(0,a.kt)("p",null,"This allows anonymous withdrawals of funds (via a transaction relayer, who is\nrewarded with a fee), and prevents double-spending as there is only one\nexternal nullifier."),(0,a.kt)("p",null,"An anonymous voting app would be configured differently:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Signal"),(0,a.kt)("th",{parentName:"tr",align:null},"External nullifier"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"The hash of the respondent's answer"),(0,a.kt)("td",{parentName:"tr",align:null},"The hash of the question")))),(0,a.kt)("p",null,"This allows any user to vote with an arbitary response (e.g. yes, no, or maybe)\nto any question. The user, however, can only vote once per question."),(0,a.kt)("h2",{id:"about-the-code"},"About the code"),(0,a.kt)("p",null,"This repository contains the code for Semaphore's contracts written in\nSoliidty, and zk-SNARK circuits written in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iden3/circom"},"circom"),". It also contains Typescript code to\nexecute tests."),(0,a.kt)("p",null,"The code has been audited by ABDK Consulting. Their suggested security and\nefficiency fixes have been applied."),(0,a.kt)("p",null,"A multi-party computation to produce the zk-SNARK proving and verification keys\nfor Semaphore will begin in the near future."))}c.isMDXComponent=!0}}]);