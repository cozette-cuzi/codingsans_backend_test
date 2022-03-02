import { Request, Response } from 'express';
import config from 'config';
import { getBrreweries } from '../services/BreweryService';

export async function getBrreweriesHandler(req: Request, res: Response) {
  const urlParams = req.query.query ? req.query : null;
  let breweriesURL = config.get<string>('breweriesURL');
  if (req.query.query) {
    breweriesURL += '/search';
  }

  try {
    const breweries = await getBrreweries(breweriesURL, urlParams);
    return res.send(breweries);
  } catch (err) {
    return res.status(400).send({ message: 'Could not fetch data' });
  }
}
