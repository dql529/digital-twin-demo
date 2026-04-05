# 逸疗

一个围绕“人体数字孪生”重做的纯前端 demo，当前方向已经收成更明确的医疗科技入口。

这版的核心结构是：

- `Body Shell`：先把一具可信的成年人身体立起来
- `Vitals`：把血氧、心率、HRV、恢复储备贴回同一具身体
- `Anatomy`：骨骼、器官和结构热点负责解释内部层
- `Explainability`：最终用 findings、趋势和建议把变化讲清楚

## 文件结构

- `index.html`：页面结构
- `styles.css`：整页视觉和交互样式
- `app.js`：状态推演、层切换、聊天和模拟逻辑
- `assets/`：后续如果需要接入图片、模型或扫描资源，可以放这里

## 如何运行

```bash
cd /Users/dql/Documents/Playground/digital-twin-demo
python3 -m http.server 8080
```

然后访问 `http://localhost:8080`

## GitHub Pages 发布

这个项目是纯静态站，适合直接发布到 GitHub Pages。

推荐仓库名：

`digital-twin-demo`

Pages 地址会是：

`https://dql529.github.io/digital-twin-demo/`

仓库里的设置路径：

`Settings -> Pages -> Build and deployment -> Deploy from a branch`

发布配置：

- 分支：`main`
- 目录：`/ (root)`

项目里已经包含 `.nojekyll`，可以直接作为静态站部署。

## 当前版本

- 首页改成了 `poster hero + 临床人体主视觉`
- 品牌统一成 `逸疗`
- 首屏现在以人体主视觉为核心，病例状态、layer 切换和说明围绕它展开
- 第二屏继续负责 `Imaging Review / Report Summary / Clinical Note`
- 保留了原来的场景模拟逻辑，但整体表达更像医疗科技产品 demo

## 后续适合继续做的方向

- 替换成更高质量的静态 3D 渲染图或真实 3D 人体模型
- 把骨骼和器官层升级成可点选的区域
- 接入 Apple Health、穿戴设备和体脂秤数据
- 把聊天层接到真实 LLM 和用户历史数据
