"use strict";(self.webpackChunkaloong_docs=self.webpackChunkaloong_docs||[]).push([[8524],{21779:(a,n,t)=>{t.d(n,{A:()=>r});t(96540);var e=t(51410),s=t(56347),i=t(40797);const c={mainContent:"mainContent_gdfG",apiTabs:"apiTabs_STzz",apiTab:"apiTab_RSl8",active:"active_emSj"};var o=t(74848);const l=[{url:"https://raw.githubusercontent.com/aloong-planet/fastapi-backend/main/docs/swagger.yaml",name:"FastAPI Backend",path:"fastapi"},{url:"https://raw.githubusercontent.com/aloong-planet/llm-streaming-service/main/docs/api-docs.json",name:"LLM Streaming Service",path:"llm"}];function r(a){let{currentPath:n,children:t}=a;const r=(0,s.W6)(),{siteConfig:m}=(0,i.A)(),p=m.baseUrl;return(0,o.jsx)(e.A,{title:"API Documentation",description:"API Documentation for Aloong Planet services",children:(0,o.jsxs)("main",{className:c.mainContent,children:[(0,o.jsx)("div",{className:c.apiTabs,children:l.map((a=>(0,o.jsx)("button",{className:`${c.apiTab} ${a.path===n?c.active:""}`,onClick:()=>r.push(`${p}api-docs/${a.path}`),children:a.name},a.path)))}),t]})})}},96655:(a,n,t)=>{t.r(n),t.d(n,{default:()=>c});t(96540);var e=t(58539),s=t(21779),i=t(74848);function c(){return(0,i.jsx)(s.A,{currentPath:"llm",children:(0,i.jsx)(e.A,{url:"https://raw.githubusercontent.com/aloong-planet/llm-streaming-service/main/docs/api-docs.json"})})}}}]);