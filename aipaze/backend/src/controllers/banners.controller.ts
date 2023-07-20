import { Request, Response, NextFunction } from "express";
import bannerService from "../services/banner.services";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    console.log(id);
    const banner = await bannerService.getById(id);
    return res.json(banner);
  } catch (err) {
    console.error(`Error while getting banners`, err);
    next(err);
  }
}

export = {
  get,
};
