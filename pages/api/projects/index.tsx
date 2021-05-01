import type { NextApiRequest, NextApiResponse } from "next";
import { projects } from "@/content/projects";
import { status, StatusMessages } from "@/content/status";

const projectsHandler = (req: NextApiRequest, res: NextApiResponse<status>) => {
  const response: status = { status: StatusMessages.FOUND, data: projects };
  res.status(200).json(response);
};

export default projectsHandler;
