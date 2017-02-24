'use strict';

import Board from './board.model';

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

  let newBoard = new Board();

  newBoard.writeUser = req.body.user.name;
  newBoard.categoryList = req.body.user.category;

  newBoard.boardTitle = req.body.boardTitle;
  newBoard.boardContent = req.body.boardContent;


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

  let boardID = req.body.boardiD;

  Board.remove({boardID})
  .then((board) => {
    res.status(200).json({
      statusText : "Success",
    });
  })
  .catch(handleError(res));

}
