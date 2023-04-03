module.exports = {
    timeout: 30000,
    retries: 2,
    workers: 2,
    use: {
      headless: true,
      //screenshot: 'only-on-failure',
      screenshot: 'on',
     // video: 'on-first-retry',
     video: 'on',
      screenshotPath: 'Screenshot' // customize the screenshot directory
    },
    cucumberOpts: {
      require: ['features/**/*.js', 'steps/**/*.js'],
      format: ['json:test-results/cucumber_report.json', 'node_modules/cucumber-pretty'],
      strict: true,
      failFast: true,
      timeout: 30000
    }
  };
  