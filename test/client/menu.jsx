import {describe, it} from 'mocha';
import {expect} from 'chai';

describe("menu", function() {
  it("the correct menu items", function() {
    var menu_list  = App.menu(),
        menu_types = ['name', 'title', 'href'],
        menu       = { names: [], titles: [], hrefs: [] };

    _.each(menu_list, function(m) {
      _.each(menu_types, function(type) {
        menu[type + 's'].push(m[type]);
      });
    });

    $("#drop-down-left > li > a").each(function(i, self) {
      var $menu = $(self),
          current_menu = {
            name: $menu.html().replace(/<.*/, ''),
            title: $menu.attr('title'),
            href: $menu.attr('href')
          };

      _.each(menu_types, function(type) {
        expect(menu[type + 's']).to.include(current_menu[type]);
      });
    });
  });
});
