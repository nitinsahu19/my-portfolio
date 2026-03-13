// src/types/gsap-splittext.d.ts

// For SplitText plugin
declare module "gsap/SplitText" {
  export class SplitText {
    constructor(targets: string | string[] | Element | Element[], vars?: any);
    lines: any[];
    words: any[];
    chars: any[];
  }
}

// For ScrollSmoother plugin
declare module "gsap/ScrollSmoother" {
  const ScrollSmoother: any;
  export { ScrollSmoother };
}
