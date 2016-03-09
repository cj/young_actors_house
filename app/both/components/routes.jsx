import React from 'react';
import {mount} from 'react-mounter';
import Layout from './layout.jsx';

FlowRouter.route("/", {
  action() { mount(Layout); }
});
