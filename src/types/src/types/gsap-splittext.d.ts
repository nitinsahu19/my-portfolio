declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(targets: string | string[] | Element | Element[], vars?: any);
    lines: any[];
    words: any[];
    chars: any[];
  }
}

declare module "gsap-trial/ScrollSmoother" {
  const ScrollSmoother: any;
  export { ScrollSmoother };
}
