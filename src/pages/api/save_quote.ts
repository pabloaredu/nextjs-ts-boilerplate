import { NextApiRequest, NextApiResponse } from "next";

type Quote = {
  id: number;
  text: string;
};

type SaveQuoteResponse = {
  success: boolean;
  message?: string;
};

let savedQuotes: Quote[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SaveQuoteResponse>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const quote: Quote = req.body;

  const existingQuote = savedQuotes.find((q) => q.id === quote.id);
  if (existingQuote) {
    return res
      .status(400)
      .json({ success: false, message: "Quote already saved" });
  }

  savedQuotes.push(quote);
  return res
    .status(201)
    .json({ success: true, message: "Quote saved successfully" });
}
