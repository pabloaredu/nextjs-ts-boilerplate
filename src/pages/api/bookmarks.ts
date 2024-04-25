import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Quote } from "../../types";

const filePath = path.join(process.cwd(), "src", "data", "bookmarks.json");

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
    res.status(200).json(quotes);
  } catch (error) {
    console.error("Error reading quotes file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
