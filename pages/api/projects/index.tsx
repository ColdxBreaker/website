import type { NextApiRequest, NextApiResponse } from "next";
import { projects } from "@/data/projects";
import { status, StatusMessages } from "@/data/status";

const projectsHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<status>
) => {
  let projectData = await Promise.all(
    projects.map(async (project) => {
      const raw = await fetch(`https://api.github.com/orgs/${project.org}`, {
        headers: {
          Authorization: `token ${process.env.GHAPI}`,
        },
      });
      const data = await raw.json();
      return data;
    })
  );
  const response: status = { status: StatusMessages.FOUND, data: projectData };
  res.status(200).json(response);
};

export default projectsHandler;
