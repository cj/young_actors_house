import moment from 'moment'

App = {
  year: function() {
    return moment().format('YYYY');
  },
  siteName: function() {
    return Meteor.settings.public.siteName.replace('|', "'")
  },
  menu: function() {
    return [
      { name: 'News', title: 'Latest News', href: FlowRouter.path("newsIndex") },
      { name: 'Events', title: 'Upcoming Events', href: FlowRouter.path("eventsIndex") },
      { name: 'Services', title: 'Available Services', href: FlowRouter.path("servicesIndex") },
      { name: 'About', title: 'The Staff', href: FlowRouter.path("aboutIndex") },
      { name: 'Contact Us', title: 'Get in touch', href: FlowRouter.path("contactIndex") },
    ];
  }
}

if(Meteor.isServer && process.env.NODE_ENV === "production") {
  FlowRouter.setDeferScriptLoading(true);
}
