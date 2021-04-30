import { NextApiRequest, NextApiResponse } from "next";
import { getProject } from "../../../content/projects";
import { status, StatusMessages } from "../../../content/status";

const projectHandler = (req: NextApiRequest, res: NextApiResponse<status>) => {
  const { method } = req;
  // const {query: {id}, method} = req;
  let response: status;
  switch (method) {
    case "GET": {
      const project = getProject(req.query.id);
      if (project.length === 0) {
        response = { status: StatusMessages.NOT_FOUND, data: {} };
        res.status(404).json(response);
      } else {
        response = { status: StatusMessages.FOUND, data: project[0] };
        res.status(200).json(response);
      }
      break;
    }
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default projectHandler;
