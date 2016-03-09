import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import Layout from './layout.jsx';

FlowRouter.route("/", {
  action() { mount(Layout); }
});
