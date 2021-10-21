import { Request, Response } from "express"
import { ContentInterface } from "~/interfaces/content";
import { Content } from "../models";
import contentRouter from "./router";

contentRouter.get('/:slug?', async (req: Request, res: Response) => {

    let content: ContentInterface | ContentInterface[];

    if (req.params.slug) {
        content = await Content.findBySlug(req.params.slug);
    } else {
        content = await Content.findAll();
    }

    res.json(content);
});

export default contentRouter;