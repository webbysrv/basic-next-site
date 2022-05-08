import { articles } from "../../../data";

export default function handler(req, res) {
  const articlesList = res.status(200).json(articles);

  return articlesList;
}
