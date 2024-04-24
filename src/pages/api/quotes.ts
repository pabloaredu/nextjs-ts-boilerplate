import { NextApiRequest, NextApiResponse } from "next";

type Quote = {
  id: number;
  text: string;
};

const sampleData: Quote[] = [
  {
    id: 1,
    text: '"For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons."',
  },
  {
    id: 2,
    text: '"Don\'t Panic."',
  },
  {
    id: 3,
    text: '"Time is an illusion. Lunchtime doubly so."',
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[] | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  res.status(200).json(sampleData);
}
