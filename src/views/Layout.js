const m = require('mithril')

module.exports = {
  view(vnode) {
    return (
      <div>
        <nav>
          <a href="/wines"
            oncreate={m.route.link}>Wines</a>
          <a href="/add"
            oncreate={m.route.link}>Add</a>
        </nav>
        <section>
          {vnode.children}
        </section>
      </div>
    )
  }
}