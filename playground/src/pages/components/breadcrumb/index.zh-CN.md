---
category: Components
group: 导航
title: Breadcrumb
subtitle: 面包屑
description: 显示当前页面在系统层级结构中的位置，并能向上返回。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*I5a2Tpqs3y0AAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Tr90QKrE_LcAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
---

<DocHeading></DocHeading>

## 何时使用 {#when-to-use}

## 示例 {#examples}

<demo-group>
  <demo src="./demo/basic.vue">基础用法</demo>
  <demo src="./demo/with-icon.vue">带有图标的</demo>
  <demo src="./demo/with-params.vue">带有参数的</demo>
  <demo src="./demo/separator.vue">分隔符</demo>
  <demo src="./demo/overlay.vue">带下拉菜单的的面包屑</demo>
  <demo src="./demo/separator-component.vue">独立的分隔符</demo>
  <demo src="./demo/debug-routes.vue">Debug Routes</demo>
  <demo src="./demo/style-class.vue">自定义语义结构的样式和类</demo>
</demo-group>

## API

### 属性 {#property}

通用属性参考：[通用属性](/docs/vue/common-props)

#### Breadcrumb

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| prefixCls | - | string | - | - |
| params | 路由的参数 | T | - | - |
| separator | 分隔符自定义 | VueNode | `/` | - |
| rootClass | - | string | - | - |
| items | 路由栈信息 | ItemType[] | - | 5.3.0 |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | BreadcrumbClassNamesType&lt;T&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | BreadcrumbStylesType&lt;T&gt; | - | - |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route: ItemType, params: T, routes: ItemType[], paths: string[]) =&gt; any | - | - |
| titleRender | - | (params: &#123; item: ItemType, index: number &#125;) =&gt; any | - | - |
| menuLabelRender | - | (params: &#123; item: ItemType, index: number, menu: MenuItem &#125;) =&gt; any | - | - |
| menuExtraRender | - | (params: &#123; item: ItemType, index: number, menu: MenuItem &#125;) =&gt; any | - | - |

#### BreadcrumbItem

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| separator | 分隔符自定义 | VueNode | `/` | - |
| key | - | Key | - | - |
| prefixCls | - | string | - | - |
| href | - | string | - | - |
| menu | - | Omit&lt;MenuType, 'items'&gt; & &#123;     items?: MenuItem[]   &#125; | - | - |
| dropdownProps | - | DropdownProps | - | - |
| onClick | - | (event: MouseEvent) =&gt; void | - | - |
| class | - | string | - | - |
| style | - | CSSProperties | - | - |

### 事件 {#events}

| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| clickItem | - | (item: ItemType, event: MouseEvent) =&gt; void | - |

### 插槽 {#slots}

| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| itemRender | 自定义链接函数，和 react-router 配置使用 | (route: ItemType, params: AnyObject, routes: ItemType[], paths: string[]) =&gt; any | - |
| titleRender | - | (params: &#123; item: ItemType, index: number &#125;) =&gt; any | - |
| separator | 分隔符自定义 | () =&gt; any | - |
| menuLabelRender | - | (params: &#123; item: ItemType, index: number, menu: MenuItem &#125;) =&gt; any | - |
| menuExtraRender | - | (params: &#123; item: ItemType, index: number, menu: MenuItem &#125;) =&gt; any | - |
