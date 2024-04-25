import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { Quote } from "../../types";

const filePath = path.join(process.cwd(), "src", "data", "quotes.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Quote[] | { error: string }>
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const jsonData = fs.readFileSync(filePath, "utf8");
    const quotes = JSON.parse(jsonData);

    const term = req.query.q as string | undefined;
    if (term) {
      const regex = new RegExp(term, "i");
      const filteredQuotes = quotes.filter((quote: Quote) =>
        regex.test(quote.text)
      );
      res.status(200).json(filteredQuotes);
    } else {
      res.status(200).json(quotes);
    }
  } catch (error) {
    console.error("Error reading quotes file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
