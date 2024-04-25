import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import type { Quote } from "../../types";

const filePath = path.join(process.cwd(), "src", "data", "bookmarks.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; message?: string }>
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method Not Allowed" });
  }

  const quote: Quote = req.body;

  try {
    let existingQuotes: Quote[] = [];

    if (fs.existsSync(filePath)) {
      const existingQuotesJson = fs.readFileSync(filePath, "utf-8");
      existingQuotes = JSON.parse(existingQuotesJson);
    }

    const existingQuote = existingQuotes.find((q) => q.id === quote.id);
    if (existingQuote) {
      return res
        .status(400)
        .json({ success: false, message: "Quote already saved" });
    }

    existingQuotes.push(quote);

    fs.writeFileSync(
      filePath,
      JSON.stringify(existingQuotes, null, 2),
      "utf-8"
    );

    return res
      .status(201)
      .json({ success: true, message: "Quote saved successfully" });
  } catch (error) {
    console.error("Error saving quote:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
}
