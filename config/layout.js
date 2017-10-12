// Default Helmet props
export default Object.freeze({
  htmlAttributes: { lang: 'en' },
  title: '',
  defaultTitle: 'Study Effective',
  titleTemplate: '%s - Study Effective',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'shortcut icon', href: '/favicon.ico' }
    // {rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'}
  ],
  script: [],
  style: []
})
