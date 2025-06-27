# 如何让Vue支持namespace

## 背景

* 使用`React`为什么可以直接使用`Input`, 而`Vue`为什么需要`ElInput`页面上使用`<el-input />` 对于初学者都有这个问题
* 为什么`React`可以使用`Form.Item`, 而`Vue`需要`ElFormItem`?

有什么方式可以让Vue没有上面烦恼吗？可以巧用`new Proxy`对对象转换处理得到组件, 给出`el.ts`简单示例文件, 代码如下，导出2个组件，一个是`tsx`格式，一个是`vue`格式，通过`defineAsyncComponent`动态导入组件

### `el.ts` 示例

```ts
import type Hello from "./hello";
import type HelloWorld from "./hello-world.vue";

type El = {
  Hello: typeof Hello;
  HelloWorld: typeof HelloWorld;
}

export default new Proxy<El>({} as El, {
  get(target, prop) {
    if (prop === "Hello") {
      return defineAsyncComponent(() => import("./hello"));
    }
    if (prop === "HelloWorld") {
      return defineAsyncComponent(() => import("./hello-world.vue"));
    }
  },
});

```

### `app.vue` 示例

```vue
<script lang="ts" setup>
import El from './El';
</script>
<template>
  <El.Hello name="52css" />
  <El.HelloWorld name="52css" />
</template>
```

这样组件可以按模块划分，目前最流行的是`element-plus`, 简单封装一下，就可以让Vue支持namespace

- [x] 代码 + TS
- [x] 文档
- [ ] 发布

## 安装

```bash
pnpm install @52css/el
```

## 使用

```vue
<script lang="ts" setup>
import El from '@52css/el';
</script>
<template>
  <El.Button type="primary">Primary</El.Button>
</template>
```

## 组件

**我不生产组件，只是ElementPlus的搬运工，所有全组件都支持**

- [x] ElAffix
- [x] ElAlert
- [x] ElAnchor
- [x] ElAnchorLink
- [x] ElAside
- [x] ElAutoResizer
- [x] ElAutocomplete
- [x] ElAvatar
- [x] ElBacktop
- [x] ElBadge
- [x] ElBreadcrumb
- [x] ElBreadcrumbItem
- [x] ElButton
- [x] ElButtonGroup
- [x] ElCalendar
- [x] ElCard
- [x] ElCarousel
- [x] ElCarouselItem
- [x] ElCascader
- [x] ElCascaderPanel
- [x] ElCheckTag
- [x] ElCheckbox
- [x] ElCheckboxButton
- [x] ElCheckboxGroup
- [x] ElCol
- [x] ElCollapse
- [x] ElCollapseItem
- [x] ElCollapseTransition
- [x] ElCollection
- [x] ElCollectionItem
- [x] ElColorPicker
- [x] ElConfigProvider
- [x] ElContainer
- [x] ElCountdown
- [x] ElDatePicker
- [x] ElDescriptions
- [x] ElDescriptionsItem
- [x] ElDialog
- [x] ElDivider
- [x] ElDrawer
- [x] ElDropdown
- [x] ElDropdownItem
- [x] ElDropdownMenu
- [x] ElEmpty
- [x] ElFooter
- [x] ElForm
- [x] ElFormItem
- [x] ElHeader
- [x] ElIcon
- [x] ElImage
- [x] ElImageViewer
- [x] ElInfiniteScroll
- [x] ElInput
- [x] ElInputNumber
- [x] ElInputTag
- [x] ElLink
- [x] ElLoading
- [x] ElLoadingDirective
- [x] ElLoadingService
- [x] ElMain
- [x] ElMention
- [x] ElMenu
- [x] ElMenuItem
- [x] ElMenuItemGroup
- [x] ElMessage
- [x] ElMessageBox
- [x] ElNotification
- [x] ElOption
- [x] ElOptionGroup
- [x] ElOverlay
- [x] ElPageHeader
- [x] ElPagination
- [x] ElPopconfirm
- [x] ElPopover
- [x] ElPopoverDirective
- [x] ElPopper
- [x] ElPopperArrow
- [x] ElPopperContent
- [x] ElPopperTrigger
- [x] ElProgress
- [x] ElRadio
- [x] ElRadioButton
- [x] ElRadioGroup
- [x] ElRate
- [x] ElResult
- [x] ElRow
- [x] ElScrollbar
- [x] ElSegmented
- [x] ElSelect
- [x] ElSelectV2
- [x] ElSkeleton
- [x] ElSkeletonItem
- [x] ElSlider
- [x] ElSpace
- [x] ElSplitter
- [x] ElSplitterPanel
- [x] ElStatistic
- [x] ElStep
- [x] ElSteps
- [x] ElSubMenu
- [x] ElSwitch
- [x] ElTabPane
- [x] ElTable
- [x] ElTableColumn
- [x] ElTableV2
- [x] ElTabs
- [x] ElTag
- [x] ElText
- [x] ElTimePicker
- [x] ElTimeSelect
- [x] ElTimeline
- [x] ElTimelineItem
- [x] ElTooltip
- [x] ElTour
- [x] ElTourStep
- [x] ElTransfer
- [x] ElTree
- [x] ElTreeSelect
- [x] ElTreeV2
- [x] ElUpload
- [x] ElWatermark