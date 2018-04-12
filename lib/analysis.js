const rp = require('request-promise')
const url = require('./url')

class Analysis {
  constructor (appid, secret) {
    this.appid = appid
    this.secret = secret
  }

  async getAccessToken () {
    const options = {
      uri: url.ACCESS_TOKEN,
      qs: {
        grant_type: 'client_credential',
        appid: this.appid,
        secret: this.secret
      },
      json: true
    }

    const result = await rp(options)
    return result.access_token
  }

  // 概况趋势（天）
  async getdDailySummaryTrend (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.DAILY_SUMMARY_TREND, param)
    return result
  }

  // 访问趋势（日趋势）
  async getDailyVisitTrend (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.DAILY_VISIT_TREND, param)
    return result
  };

  // 访问趋势（周趋势）
  async getWeeklyVisitTrend (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.WEEKLY_VISIT_TREND, param)
    return result
  }

  // 访问趋势（月趋势）
  async getMonthlyVisitTrend (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.MONTHLY_VISIT_TREND, param)
    return result
  };

  // 访问分布
  async getVisitDistribution (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.VISIT_DISTRIBUTION, param)
    return result
  };

  // 访问留存（日留存）
  async getDailyRetainInfo (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.DAILY_RETAIN_INFO, param)
    return result
  };

  // 访问留存（周留存）
  async getWeeklyRetainInfo (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.WEEKLY_RETAIN_INFO, param)
    return result
  };

  // 访问留存（月留存）
  async getMonthlyRetainInfo (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.MONTHLY_RETAIN_INFO, param)
    return result
  };

  // 访问页面
  async getVisitPage (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.VISIT_PAGE, param)
    return result
  };

  // 用户画像
  async getUserPortrait (beginDate, endDate) {
    const param = {
      'begin_date': beginDate,
      'end_date': endDate
    }
    const result = await this.sendRequest(url.USER_PORTRAIT, param)
    return result
  };

  async sendRequest (uri, param) {
    const requestUri = await this.getRequestUri(uri)
    const result = await rp({
      method: 'POST',
      uri: requestUri,
      body: param,
      json: true
    })
    return result
  }

  async getRequestUri (uri) {
    const token = await this.getAccessToken()
    return `${uri}?access_token=${token}`
  }
};

module.exports = Analysis
