const m = require('mithril')

module.exports = {
  isActive(route) {
    return m.route.get() === route ? 'active' : ''
  },
  view(vnode) {
    return (
      <div>
        <nav className="fixed-top">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <a className={'nav-link ' + this.isActive('/wines')} 
                oncreate={m.route.link}
                href="/wines">Wines</a>
            </li>
            <li className="nav-item">
              <a className={'nav-link ' + this.isActive('/add')} 
                oncreate={m.route.link} 
                href="/add">Add</a>
            </li>
          </ul>
        </nav>

        <div className="container-fluid">
          {vnode.children}
        </div>
      </div>
    )
  }
}
