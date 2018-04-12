# weapp-analysis

微信小程序数据分析 Node.js SDK

### 环境要求
Node.js >= 8.0

### 安装
```
npm install weapp-analysis
```

### 使用
```javascript
async function test () {
  const analysis = new Analysis('你的appid', '你的secret')
  const result = await analysis.getdDailySummaryTrend('20180411', '20180411')
  console.log(result)
}

test() 
```

### 接口文档
[数据 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/api/analysis.html)
