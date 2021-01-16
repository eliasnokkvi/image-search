import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    gutter: number;

    breakpoints: {
      mobile: number;
      desktop: number;
    };

    palette: {
      fontPrimary: string;
      fontSecondary: string;
    };
  }
}
