/* global define */

define([], function() {
  'use strict';

  return function() {

    var __mockVms = [
      {
        id: 1,
        name: 'Virtual machine 1',
        description: 'A virtual machine with id 1'
      },
      {
        id: 2,
        name: 'Virtual machine 2',
        description: 'A virtual machine with id 2'
      },
      {
        id: 3,
        name: 'Virtual machine 3',
        description: 'A virtual machine with id 3'
      }
    ];

    var __mockDatastores = [
      {
        id: 1,
        name: 'Datastore 1',
        description: 'a datastore with id 1'
      }
    ];
    var __mockPrivileges = [
      {
        datastore: 1,
        permissions: {
          read: true,
          create: false,
          write: true
        }
      }
    ];

    var __mockTenants = [
      {
        id: 1,
        name: 'Tenant 1',
        description: 'A tenant with id 1',
        vms: __mockVms,
        privileges: __mockPrivileges
      },
      {
        id: 2,
        name: 'Tenant 2',
        description: 'A tenant with id 2',
        vms: __mockVms,
        privileges: __mockPrivileges
      },
      {
        id: 3,
        name: 'Tenant 3',
        description: 'A tenant with id 3',
        vms: __mockVms,
        privileges: __mockPrivileges
      }
    ];

    this.tenants = __mockTenants;
    this.vms = __mockVms;
    this.privileges = __mockPrivileges;
    this.datastores = __mockDatastores;

  };

});
