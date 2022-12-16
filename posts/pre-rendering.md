---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

Next.js 有两种预渲染方式：**静态生成**和**服务器端渲染**。 区别在于它生成页面的**时间**。

- **静态生成**是在**构建时**生成 HTML 的预渲染方法。 然后，预渲染的 HTML 会在每次请求时被**重用**。
- **服务器端渲染**是在**每次请求**时生成 HTML 的预渲染方法。


重要的是，Next.js 允许您为每个页面选择使用哪种预渲染方式。 您可以通过为大多数页面使用静态生成，并对其他页面使用服务器端渲染来创建“混合”Next.js应用。