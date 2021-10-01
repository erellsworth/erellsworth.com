import { Request, Response } from "express"
import { ContentInterface } from "~/interfaces/content";
import { Content } from "../models";
import contentRouter from "./router";

contentRouter.get('/content', async (req: Request, res: Response) => {
    const content: ContentInterface[] = await Content.findAll();

    res.json(content);
});

export default contentRouter;