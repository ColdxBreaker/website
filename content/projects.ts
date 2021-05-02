export interface Project {
  id: number;
  name: string;
  desc: string;
  startDate: Date;
  endDate: Date | String;
  repo: string;
  url?: string;
  photo?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "MapUTM",
    desc: "Navigating students to classes with ease!",
    repo: "https://github.com/SantiagoOrdonez/MapUTM/",
    url: "https://maputm.tk",
    startDate: new Date("2020-01"),
    endDate: new Date("2020-04"),
  },
  {
    id: 2,
    name: "2ofClubs",
    desc: "Finding the perfect club for you!",
    repo: "https://github.com/2ofClubsApp",
    url: "https://2ofclubs.app",
    startDate: new Date("2020-04"),
    endDate: new Date("2020-08"),
  },
  {
    id: 3,
    name: "Cheddar Resume Builder",
    desc: "Building the perfect resume!",
    repo: "https://github.com/UTMCSC301/final-project-cheddar",
    startDate: new Date("2021-01"),
    endDate: new Date("2021-04"),
  },
  {
    id: 4,
    name: "Latex With Friends",
    desc: "Practice Latex & Compete With Friends",
    repo: "https://github.com/LatexWithFriends",
    startDate: new Date("2021-04"),
    endDate: "Current",
  },
];

export const getProject = (projectID: string | string[]): Project[] => {
  try {
    const id = Number(projectID);
    return projects.filter((project) => {
      return project.id === id;
    });
  } catch {
    return [];
  }
};
