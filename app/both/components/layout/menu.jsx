import React from 'react';

const LoginButtons = BlazeToReact('_loginButtons');

const activeMenuClass = (path) => {
  if(FlowRouter.current().route.path == path) {
    return 'current-menu-item'
  }
}

class LayoutMenu extends React.Component {
  render() {
    return(
      <div id="k-head" className="container">
        <div className="row">
          <nav className="k-functional-navig">
            <ul className="list-inline pull-right">
              <LoginButtons />
            </ul>
          </nav>

          <div className="col-lg-12">
            <div id="k-site-logo" className="pull-left">
              <h1 className="k-logo">
                <a href="/" title="Home Page">
                  <img src="images/yah_logo.png" alt="Site Logo" className="img-responsive" />
                </a>
              </h1>
              <a id="mobile-nav-switch" href="#drop-down-left"><span className="alter-menu-icon"></span></a>
            </div>

            <nav id="k-menu" className="k-main-navig">
              <ul id="drop-down-left" className="k-dropdown-menu">
                {App.menu().map(function(menu, i){
                  return(
                    <li key={ menu.name } className={ activeMenuClass(menu.href) }>
                      <a href={ menu.href } title={ menu.title }>{ menu.name }</a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default LayoutMenu;
