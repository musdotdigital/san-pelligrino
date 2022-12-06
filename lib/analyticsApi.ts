import mixpanel from 'mixpanel-browser'
;('4772b3c7d9ab0d1ea056aa1ac3eda91e')

const mixpanelToken = process.env.MIXPANEL_TOKEN || ''

mixpanel.init(mixpanelToken, { debug: false })
