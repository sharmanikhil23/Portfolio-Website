export interface Socials {
  id: number;
  link: string;
  name: string;
  icon: React.ReactNode;
  value: string;
}

export type SetCurrentSelectedType = React.Dispatch<
  React.SetStateAction<number>
>;

export interface NavBarProps {
  setCurrentSelected: SetCurrentSelectedType;
}

export type catergoriesType = string;

export interface ProjectsDataType {
  image: any;
  heading: string;
  description: string;
  link: string;
  live: string;
  category: string;
  giticon: React.ReactNode;
  liveicon: React.ReactNode;
}

export type SetSelectedProject = React.Dispatch<
  React.SetStateAction<ProjectsDataType>
>;
