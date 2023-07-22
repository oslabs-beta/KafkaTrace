// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Request, Response, NextFunction } from 'express';

export default function handler(req: Request, res: Response) {
  res.status(200).json({ name: 'John Doe' })
}
