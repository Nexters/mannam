'use strict';

import User from './user.model';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

export function create(req, res, next) {
  let userId = req.body.email;
  let userDeviceOS = req.body.OS
  let userDeviceUUID = req.body.UUID;

  let device = {
    UUID : userDeviceUUID,
    OS : userDeviceOS
  }

  return User.findOne({email : userId}).exec()
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      user.device = device;
      return user.save()
        .then(() => {
          res.status(200).json({
            statusText : "Success"
          });
        })
        .catch(handleError(res));
    })
    .catch(err => next(err));
}
