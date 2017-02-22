'use strict';

import {Router} from 'express';
import * as controller from './category.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/', auth.isAuthenticated(), controller.change);
router.delete('/', auth.isAuthenticated(), controller.destroy);


module.exports = router;
