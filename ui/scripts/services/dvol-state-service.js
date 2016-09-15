/* global define */

define([], function() {
  'use strict';

  return function(DvolMockApiService) {

    this.state = {
      datacenter: {
        vms: DvolMockApiService.vms
      },
      tenants: DvolMockApiService.tenants
    };

    //
    // TODO: flesh out actions
    //

  };

});
