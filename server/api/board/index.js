'use strict';

import {Router} from 'express';
import * as controller from './board.controller';
import * as favorite_controller from './favorite.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/:pageNumber', auth.isAuthenticated(), controller.list);
router.get('/detail/:boardID', auth.isAuthenticated(), controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/', auth.isAuthenticated(), controller.change);
router.delete('/', auth.isAuthenticated(), controller.destroy);

router.put('/favorite/create/:boardID',auth.isAuthenticated(),favorite_controller.create);

router.post("/push", auth.isAuthenticated(), controller.push);


module.exports = router;
