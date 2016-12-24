export default [
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '/home',
    name: 'home-page',
    component: require('components/HomeView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
