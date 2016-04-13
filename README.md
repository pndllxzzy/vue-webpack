# vue-webpack

vue + webpack + webpack-dev-server

#####环境
  node  v4.4.2
  
  
#####安装&启动
```bash
# 安装依赖模块
npm install

# 启动服务
npm run dev
或者用webpack-dev-server方式启动
npm run webpack-dev-server

# 发布代码
npm run build

```

### 目录结构
<pre>
.
├── README.md           
├── dist                     // 项目build目录
├── server.js                // 开发的服务配置
├── webpack-dev-conf.js      // 开发的Webpack 配置文件
├── webpack-prod-conf.js     // 生产的Webpack 配置文件
├── webpack-base-conf.js     // 基本的Webpack 配置文件
├── package.json             // 项目配置文件
├── src                      // 生产目录
│   ├── data                 // 数据文件
│   ├── components           // 各种组件
│   ├── views                // 各种页面
│   ├── router.js            // 路由配置
│   └── app.js               // Webpack 预编译入口
│   └── index.html           // 项目入口文件
.
</pre>
