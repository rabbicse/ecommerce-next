import { Request, Response, NextFunction } from "express";
import categoriesService from "../services/categories.services";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await categoriesService.getAll());
  } catch (err) {
    // console.error(`Error while getting categories`, err.message);
    next(err);
  }
}

export = {
  get,
};
