
import Board from './board.model';

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).json({
      statusText : "Fail"
    });
  };
}

export function create(req, res, next){
  let boardID = String(req.params.boardID);
  console.log(boardID);
  console.log(req.body.favorite);
  Board.findOne({boardID : boardID})
  .then((user) => {
    user.boardIsFavorite.push(req.body.favorite);
    user.save()
      .then(() => {
        res.status(200).json({
          statusText : "Success",
        });
      })
      .catch(handleError(res));
  })
  .catch(handleError(res));
}
