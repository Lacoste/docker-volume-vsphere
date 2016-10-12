# Copyright 2016 VMware, Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

##
## Implements the interface for side car based implementation
## of a KV store for vmdks.
##

import auth
import unittest
import uuid

class AuthTest(unittest.TestCase):
    """ Test authorization """

    # def test_authorize_create(self):
    #     result = auth.authorize(vm_id, 'datastore1', 'create', {})
    #     if result:
    #         self.assertIsNotNone(result)


if __name__ == '__main__':
    unittest.main()
