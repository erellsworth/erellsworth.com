import { Request, Response } from "express"
import { getMastadonFeed } from "../utils/mastadon";
import { successResponse } from "../utils/responses";
import externalRouter from "./router";

externalRouter.get('/ext/mastadon', async (req: Request, res: Response) => {
    const feed = await getMastadonFeed();
    successResponse(res, feed);
});

export default externalRouter;