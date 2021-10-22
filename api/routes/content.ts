import { Request, Response } from "express"
import { ContentInterface, ContentQuery } from "~/interfaces/content";
import { contentResults } from "~/interfaces/misc";
import { Content } from "../models";
import contentRouter from "./router";

contentRouter.get('/:slug?', async (req: Request, res: Response) => {

    let content: ContentInterface | contentResults;

    if (req.params.slug) {
        content = await Content.findBySlug(req.params.slug);
    } else {

        const query = Object.assign({
            type: 'post',
            limit: 6,
        }, req.query as unknown as ContentQuery);

        content = await Content.findAll(query);
    }

    res.json(content);
});

export default contentRouter;