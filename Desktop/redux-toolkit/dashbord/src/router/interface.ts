import { ReactElement, ReactNodeArray } from "react";
export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

export interface CustomProps {
  path: string;
  label: string;
  element?: ReactElement | ReactNodeArray;
  index?: boolean | undefined;
  children?: CustomProps[];
  caseSensitive?: boolean;
  meta?: MetaProps;
}



