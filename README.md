# weapp-analysis

微信小程序数据分析 Node.js SDK

### 环境要求
Node.js >= 8.0

### 安装
```
npm install weapp-analysis --save
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
```javascript
// 概况趋势（天）
const dailySummaryTrend = await analysis.getdDailySummaryTrend(beginDate, endDate)

// 访问趋势（日趋势）
const dailyVisitTrend = await analysis.getDailyVisitTrend(beginDate, endDate)

// 访问趋势（周趋势）
const weeklyVisitTrend = await analysis.getWeeklyVisitTrend(beginDate, endDate)

// 访问趋势（月趋势）
const monthlyVisitTrend = await analysis.getMonthlyVisitTrend(beginDate, endDate)

// 访问分布
const visitDistribution = await analysis.getVisitDistribution(beginDate, endDate)

// 访问留存（日留存）
const dailyRetainInfo = await analysis.getDailyRetainInfo(beginDate, endDate)

// 访问留存（周留存）
const weeklyRetainInfo = await analysis.getWeeklyRetainInfo(beginDate, endDate)

// 访问留存（月留存）
const monthlyRetainInfo = await analysis.getMonthlyRetainInfo(beginDate, endDate)

// 访问页面 
const visitPage = await analysis.getVisitPage(beginDate, endDate)

// 用户画像 
const userPortrait = await analysis.getUserPortrait(beginDate, endDate)

```
### 详细接口文档
[数据 · 小程序](https://developers.weixin.qq.com/miniprogram/dev/api/analysis.html)
