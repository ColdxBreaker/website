// <reference types="next" />
// <reference types="next/types/global" />

declare module "*.svg" {
  export const content: string;
  export default content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.pdf" {
  const content: string;
  export default content;
}
