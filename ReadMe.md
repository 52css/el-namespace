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
pnpm install @52css/el-namespace
```

## 使用

```vue
<script lang="ts" setup>
import El from '@52css/el-namespace';
</script>
<template>
  <El.Button type="primary">Primary</El.Button>
</template>
```