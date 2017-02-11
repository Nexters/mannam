'use strict';

import {Router} from 'express';
import * as controller from './board.controller';

var router = new Router();

router.get('/:pageNumber', controller.list);
router.get('/board/:boardID', controller.show);
router.post('/', controller.create);
router.put('/', controller.change);
router.delete('/', controller.destroy);


module.exports = router;
