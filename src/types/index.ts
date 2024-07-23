export interface IMenu {
  id: number;
  title: string;
  link?: string;
  hasSub?: boolean;
  subItems?: {
    id: number;
    title: string;
    link: string;
  }[];
}

export interface ICategory {
  id: number;
  title: string;
}
