'use strict';

import {Router} from 'express';
import * as controller from './category.controller';

var router = new Router();

router.get('/', controller.show);
router.post('/', controller.create);
router.put('/', controller.change);
router.delete('/', controller.destroy);


module.exports = router;
