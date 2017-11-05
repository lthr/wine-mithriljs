const m = require('mithril')
const AddWine = require('./views/AddWine')
const WineDetails = require('./views/WineDetails')
const WineList = require('./views/WineList')
const Layout = require('./views/Layout')

m.route(document.body, '/wines', {
  '/wines': {
    render() {
      return (
        <Layout>
          <WineList />
        </Layout>
      )
    }
  },
  '/wines/:id': {
    render(vnode) {
      return (
        <Layout>
          <WineDetails id={vnode.attrs.id} />
        </Layout>
      )
    }
  },
  '/add': {
    render() {
      return (
        <Layout>
          <AddWine />
        </Layout>
      )
    }
  }
})