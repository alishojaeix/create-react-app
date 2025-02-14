"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[6203],{876:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var o=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(y,i(i({ref:e},u),{},{components:n})):o.createElement(y,i({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4719:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var o=n(7896),r=n(1461),a=(n(2784),n(876)),i=["components"],s={id:"developing-components-in-isolation",title:"Developing Components in Isolation"},l=void 0,p={unversionedId:"developing-components-in-isolation",id:"developing-components-in-isolation",title:"Developing Components in Isolation",description:"Usually, in an app, you have a lot of UI components, and each of them has many different states.",source:"@site/../docs/developing-components-in-isolation.md",sourceDirName:".",slug:"/developing-components-in-isolation",permalink:"/docs/developing-components-in-isolation",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/developing-components-in-isolation.md",tags:[],version:"current",lastUpdatedBy:"jonniebigodes",lastUpdatedAt:1629230662,formattedLastUpdatedAt:"8/17/2021",frontMatter:{id:"developing-components-in-isolation",title:"Developing Components in Isolation"},sidebar:"docs",previous:{title:"Editor Setup",permalink:"/docs/setting-up-your-editor"},next:{title:"Analyzing Bundle Size",permalink:"/docs/analyzing-the-bundle-size"}},u=[{value:"Getting Started with Storybook",id:"getting-started-with-storybook",children:[],level:2},{value:"Getting Started with Styleguidist",id:"getting-started-with-styleguidist",children:[],level:2}],c={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Usually, in an app, you have a lot of UI components, and each of them has many different states.\nFor an example, a basic button component could have the following states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In a regular state, with a text label."),(0,a.kt)("li",{parentName:"ul"},"In the disabled mode."),(0,a.kt)("li",{parentName:"ul"},"In a loading state.")),(0,a.kt)("p",null,"Usually, it\u2019s hard to see these states without running a sample app or some examples."),(0,a.kt)("p",null,"Create React App doesn\u2019t include any tools for this by default, but you can add ",(0,a.kt)("a",{parentName:"p",href:"https://storybook.js.org"},"Storybook for React")," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/storybooks/storybook"},"source"),") or ",(0,a.kt)("a",{parentName:"p",href:"https://react-styleguidist.js.org/"},"React Styleguidist")," (",(0,a.kt)("a",{parentName:"p",href:"https://github.com/styleguidist/react-styleguidist"},"source"),") to your project. ",(0,a.kt)("strong",{parentName:"p"},"These are third-party tools that let you develop components and see all their states in isolation from your app"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/storybookjs/storybook/next/docs/get-started/storybook-third-party-docs.gif",alt:"Storybook for React Demo"})),(0,a.kt)("p",null,"You can also deploy your Storybook or style guide as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app."),(0,a.kt)("h2",{id:"getting-started-with-storybook"},"Getting Started with Storybook"),(0,a.kt)("p",null,"Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components."),(0,a.kt)("p",null,"Run the following command inside your app\u2019s directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx sb init\n")),(0,a.kt)("p",null,"After that, follow the instructions on the screen."),(0,a.kt)("p",null,"Learn more about React Storybook:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://storybook.js.org/tutorials/"},"Learn Storybook (tutorial)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://storybook.js.org/docs/react/get-started/introduction"},"Documentation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybooks/storybook"},"GitHub Repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/storybooks/storybook/tree/master/addons/storyshots"},"Snapshot Testing UI")," with Storybook + addon/storyshot")),(0,a.kt)("h2",{id:"getting-started-with-styleguidist"},"Getting Started with Styleguidist"),(0,a.kt)("p",null,"Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground."),(0,a.kt)("p",null,"First, install Styleguidist:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save react-styleguidist\n")),(0,a.kt)("p",null,"Alternatively you may use ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add react-styleguidist\n")),(0,a.kt)("p",null,"Then, add these scripts to your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'   "scripts": {\n+    "styleguide": "styleguidist server",\n+    "styleguide:build": "styleguidist build",\n     "start": "react-scripts start",\n')),(0,a.kt)("p",null,"Then, run the following command inside your app\u2019s directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm run styleguide\n")),(0,a.kt)("p",null,"After that, follow the instructions on the screen."),(0,a.kt)("p",null,"Learn more about React Styleguidist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/styleguidist/react-styleguidist"},"GitHub Repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react-styleguidist.js.org/docs/getting-started.html"},"Documentation"))))}d.isMDXComponent=!0}}]);