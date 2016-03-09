import React from 'react';
import LayoutMenu from './layout/menu.jsx'

class Layout extends React.Component {
  componentDidMount() {
    CHEF.load();
  }

  isHome() {
    return FlowRouter.current().route.path == '/'
  }

  render() {
    const {content} = this.props;

    return(
      <div role="document">
        <span className="visible-xs"></span><span className="visible-sm"></span><span className="visible-md"></span><span className="visible-lg"></span>

        <LayoutMenu />

        <div id="k-body">
          <div className="container">
            {/* { this.isHome() && <App.tmpl.layout.slider />  } */}

            { content }
          </div>
        </div>

        <div id="k-subfooter">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="copy-text text-inverse">
                  &copy; { App.year() } { App.siteName() }. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Layout;
