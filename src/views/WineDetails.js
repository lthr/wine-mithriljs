const m = require('mithril')

module.exports = {
  view(vnode) {
    return (
      <div>
        Wine details: {vnode.attrs.id}
      </div>
    )
  }
}
