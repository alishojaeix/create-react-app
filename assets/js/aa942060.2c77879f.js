"use strict";(self.webpackChunkcra_docs=self.webpackChunkcra_docs||[]).push([[6995],{876:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return g}});var t=r(2784);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),g=a,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6514:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var t=r(7896),a=r(1461),l=(r(2784),r(876)),o=["components"],i={id:"loading-graphql-files",title:"Loading .graphql Files",sidebar_label:"Loading .graphql Files"},p=void 0,s={unversionedId:"loading-graphql-files",id:"loading-graphql-files",title:"Loading .graphql Files",description:"To load .gql and .graphql files, first install the graphql and graphql.macro packages by running:",source:"@site/../docs/loading-graphql-files.md",sourceDirName:".",slug:"/loading-graphql-files",permalink:"/docs/loading-graphql-files",editUrl:"https://github.com/facebook/create-react-app/edit/main/docusaurus/website/../docs/loading-graphql-files.md",tags:[],version:"current",lastUpdatedBy:"Luke Karrys",lastUpdatedAt:1649882318,formattedLastUpdatedAt:"4/13/2022",frontMatter:{id:"loading-graphql-files",title:"Loading .graphql Files",sidebar_label:"Loading .graphql Files"},sidebar:"docs",previous:{title:"Adding Images, Fonts, and Files",permalink:"/docs/adding-images-fonts-and-files"},next:{title:"Using the Public Folder",permalink:"/docs/using-the-public-folder"}},c=[],u={toc:c};function d(e){var n=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To load ",(0,l.kt)("inlineCode",{parentName:"p"},".gql")," and ",(0,l.kt)("inlineCode",{parentName:"p"},".graphql")," files, first install the ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql"},(0,l.kt)("inlineCode",{parentName:"a"},"graphql"))," and ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/graphql.macro"},(0,l.kt)("inlineCode",{parentName:"a"},"graphql.macro"))," packages by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save graphql graphql.macro\n")),(0,l.kt)("p",null,"Alternatively you may use ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add graphql graphql.macro\n")),(0,l.kt)("p",null,"Then, whenever you want to load ",(0,l.kt)("inlineCode",{parentName:"p"},".gql")," or ",(0,l.kt)("inlineCode",{parentName:"p"},".graphql")," files, import the ",(0,l.kt)("inlineCode",{parentName:"p"},"loader")," from the macro package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { loader } from 'graphql.macro';\n\nconst query = loader('./foo.graphql');\n")),(0,l.kt)("p",null,"And your results get automatically inlined! This means that if the file above, ",(0,l.kt)("inlineCode",{parentName:"p"},"foo.graphql"),", contains the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query {\n  hello {\n    world\n  }\n}\n")),(0,l.kt)("p",null,"The previous example turns into:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"const query = {\n  'kind': 'Document',\n  'definitions': [{\n    ...\n  }],\n  'loc': {\n    ...\n    'source': {\n      'body': '\\\\\\\\n  query {\\\\\\\\n    hello {\\\\\\\\n      world\\\\\\\\n    }\\\\\\\\n  }\\\\\\\\n',\n      'name': 'GraphQL request',\n      ...\n    }\n  }\n};\n")),(0,l.kt)("p",null,"You can also use the ",(0,l.kt)("inlineCode",{parentName:"p"},"gql")," template tag the same way you would use the non-macro version from ",(0,l.kt)("inlineCode",{parentName:"p"},"graphql-tag")," package with the added benefit of inlined parsing results."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { gql } from 'graphql.macro';\n\nconst query = gql`\n  query User {\n    user(id: 5) {\n      lastName\n      ...UserEntry1\n    }\n  }\n`;\n")))}d.isMDXComponent=!0}}]);