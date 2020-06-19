const AV = require('./utils/av-live-query-core-min');
const adapter = require('./utils/platform-adapters-weapp');

AV.setAdapters(adapter);
AV.init({
  appId: 'SjkW9KlWxczs145IslyARNkx-gzGzoHsz',
  appKey: '6LRqM72XtX1iTer3lUXudRbj',
  serverURLs: 'https://api.potatofans.top',
});

//app.js
App({});
