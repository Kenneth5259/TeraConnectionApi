import { Router, Request, Response } from 'express';
import {createNewRaid, getAllRaids, getRaidById} from '../services/raid.service';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    const raids = await getAllRaids();
    res.json(raids);
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const raid = await getRaidById(parseInt(req.params.id));
        res.json(raid);
    } catch (e) {
        res.send(e);
    }
})

router.post('/', async (req: Request, res: Response) => {
    const raid = await createNewRaid(req.body.name, req.body.type, req.body.star);
    res.json(raid);
});

export default router;