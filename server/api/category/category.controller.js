'use strict';

import Category from './category.model';
function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}



export function show(req, res, next){
  return Category.find({}).exec()
    .then(category => {
      res.status(200).json(category);
    })
    .catch(handleError(res));
}

export function create(req, res, next){
  var category = new Category();
  if(req.body.categoryJob){
    category.categoryJob=req.body.categoryJob;
  }else if(req.body.categoryTitle){
      category.categoryTitle=req.body.categoryTitle;
  }else{
    category.categoryName=req.body.categoryName;
  }
  category.save()
  .then (() => {
    res.status(200).json({
      success:"success"
    })
    .catch(() =>{
      handleError(res);
    })
  });

}

export function change(req, res, next){

}

export function destroy(req, res, next){
  if(req.body.categoryJob){
    Category.remove({categoryJob:req.body.categoryJob})
      .then(() => {
        res.status(200).json({
          success:"success"
        });
      })
      .catch(handleError(res));
  }else if(req.body.categoryTitle){
    Category.remove({categoryTitle:req.body.categoryTitle})
      .then(() => {
        res.status(200).json({
          success:"success"
        });
      })
      .catch(handleError(res));
  }else{
    Category.remove({categoryName:req.body.categoryName})
      .then(() => {
        res.status(200).json({
          success:"success"
        });
      })
      .catch(handleError(res));
  }
}
