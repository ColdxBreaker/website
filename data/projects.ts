export interface Project {
  name: string;
  repo: string;
  org?: string;
  demo?: string;
  docs?: string;
  startDate: Date;
  endDate: Date | String;
}
// Note: If you have an org, then should you have a repo?

export const projects: Project[] = [
  // {
  //   name: "MapUTM",
  //   repo: "SantiagoOrdonez/MapUTM",
  //   startDate: new Date("2020-01"),
  //   endDate: new Date("2020-04"),
  // },
  {
    name: "2ofClubs",
    org: "2ofClubsApp",
    repo: "2ofClubsApp",
    docs: "https://2ofclubs.app",
    startDate: new Date("2020-04"),
    endDate: new Date("2020-08"),
  },
  {
    name: "UTMCSSC Website",
    org: "utm-cssc",
    repo: "utm-cssc/website",
    docs: "https://cssc.utm.utoronto.ca",
    startDate: new Date("2020-08"),
    endDate: new Date("2021-05"),
  },
  {
    name: "LateX With Friends",
    org: "LaTeXWithFriends",
    repo: "LatexWithFriends",
    docs: "https://github.com/LatexWithFriends/docs",
    startDate: new Date("2021-04"),
    endDate: "Current",
  },
  //   {
  //     name: "Cheddar Resume Builder",
  //     repo: "hiimchrislim/final-project-cheddar",
  //     startDate: new Date("2021-01"),
  //     endDate: new Date("2021-04"),
  //   },
];

//
// export const getProject = (projectID: string | string[]): Project[] => {
//   try {
//     const id = Number(projectID);
//     return projects.filter((project) => {
//       return project.id === id;
//     });
//   } catch {
//     return [];
//   }
// };
