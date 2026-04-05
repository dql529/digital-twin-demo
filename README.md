# Twin Atlas

一个围绕“人体数字孪生”重做的纯前端 demo。

这版不再走医疗控制台或卡片拼贴路线，而是把重点收回到产品本体：

- 一个人的 `Body Shell`：身高、体重、围度、体脂、体型
- 一个人的 `Vitals`：血氧、心率、血压、HRV、恢复储备
- 一个人的 `Anatomy`：骨骼、器官、结构层
- 一个人的 `Memory Layer`：长期行为模式和状态阈值

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

## 这版主要改了什么

- 把首页改成了 `full-bleed hero + 人体 Atlas 主视觉`
- 增加了 `Body Shell / Skeleton / Organs / Vitals` 四层切换
- 保留了原来的场景模拟逻辑，但让表达更像产品 demo
- 去掉了大量笨重的控制台式卡片，改成更克制的版式和信息层级

## 后续适合继续做的方向

- 接入真实 3D 人体模型或扫描结果
- 把骨骼和器官层升级成可点选的区域
- 接入 Apple Health、穿戴设备和体脂秤数据
- 把聊天层接到真实 LLM 和用户历史数据
