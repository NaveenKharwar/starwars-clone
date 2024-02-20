export const breakpoints = {
  sm: 500,
  md: 960,
  MidTab: 700,
  lg: 1200,
};

export const mediaQueries = (size) => {
  return (styles) => `
    @media only screen and (min-width: ${breakpoints[size]}px) {
      ${styles}
    }
  `;
};
