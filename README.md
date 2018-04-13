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

  // 概况趋势（天）
  const dailySummaryTrend = await analysis.getdDailySummaryTrend('20180411', '20180411')
  console.log(dailySummaryTrend)
}

test() 
```

### 接口列表

+ 概况趋势（天）analysis.getdDailySummaryTrend

+ 访问趋势（日趋势）analysis.getDailyVisitTrend

+ 访问趋势（周趋势）analysis.getWeeklyVisitTrend

+ 访问趋势（月趋势）analysis.getMonthlyVisitTrend

+ 访问分布 analysis.getVisitDistribution

+ 访问留存（日留存）analysis.getDailyRetainInfo

+ 访问留存（周留存）analysis.getWeeklyRetainInfo

+ 访问留存（月留存）analysis.getMonthlyRetainInfo

+ 访问页面 analysis.getVisitPage

+ 用户画像 analysis.getUserPortrait


### 详细接口文档
[数据 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/api/analysis.html)
