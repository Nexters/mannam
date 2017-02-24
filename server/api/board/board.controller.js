'use strict';
import FCM from 'fcm-push';

import Board from './board.model';
import User from '../user/user.model';
import Config from "../../config/push.js";

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).json({
      statusText : "Fail"
    });
  };
}


export function show(req, res, next){

  let boardID = String(req.params.boardID);

  Board.findOne({boardID})
  .then((board) => {
    res.status(200).json(board);
  })
  .catch(handleError(res));

}

export function list(req, res, next){

  let pageNumber = req.params.pageNumber;

  Board.find().sort({"boardCreateTime" : -1}).skip((pageNumber -1) * 4).limit(4)
  .then((board) => {
    res.status(200).json(board);
  })
  .catch(handleError(res));

}

export function create(req, res, next){

  let newBoard = new Board(req.body);

  newBoard.save()
    .then(() => {
      res.status(200).json({
        statusText : "Success",
      });
    })
    .catch(handleError(res));
}

export function change(req, res, next){
  res.json({
    statusText : "Success"
  });
}

export function destroy(req, res, next){

  let boardID = req.body.boardID;

  Board.remove({boardID})
  .then((board) => {
    res.status(200).json({
      statusText : "Success",
    });
  })
  .catch(handleError(res));

}

export function push(req, res, next){

  let categoryList = req.body.categoryList;
  let title = req.body.title;
  let body = req.body.body;

  User.find({category : categoryList})
    .then((response) => {

      response.forEach((elem, index) => {
        pushOne(elem.device.OS, elem.device.UUID, title, body);
        res.json(Config[elem.device.OS]);
      });

    })
    .catch(handleError(res));
}

function pushOne(OS, UUID, title, body){
  const serverKey = Config[OS];
  const fcm = new FCM(serverKey);

const message = {

	to : UUID,
	collapse_key : "your_collapse_key",
	data : {
		your_custom_data_key : "your_custom_data_value"
	},
	notification : {
		title,
    body
	}
};

fcm.send(message)
	.then((response) => {
		console.log("Successfully sent with response : " , response);
	})
	.catch((err) => {
		console.log("Something has gone wrong!");
		console.error(err);
	});

}
