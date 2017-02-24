'use strict';

import {Router} from 'express';
import * as controller from './board.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/:pageNumber', controller.list);
router.get('/detail/:boardID', controller.show);
router.post('/', controller.create);
router.put('/', auth.isAuthenticated(), controller.change);
router.delete('/', auth.isAuthenticated(), controller.destroy);


module.exports = router;
