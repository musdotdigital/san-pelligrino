import mixpanel from 'mixpanel-browser'

const mixpanelToken = process.env.MIXPANEL_TOKEN || ''

mixpanel.init(mixpanelToken, { debug: false })
