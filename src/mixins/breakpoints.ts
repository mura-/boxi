// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

export type BreakpointsValues<CSSProperty extends string | number> = {
  xs?: CSSProperty;
  sm?: CSSProperty;
  md?: CSSProperty;
  lg?: CSSProperty;
  xl?: CSSProperty;
};

const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: (['xs', 'sm', 'md', 'lg', 'xl'] as unknown) as (keyof typeof values)[],
  up: (key: keyof typeof values) => `@media (min-width:${values[key]}px)`,
};

export const createMediaQuery = ({
  name,
  value,
  key,
}: {
  name: string;
  value: string;
  key: keyof typeof values;
}): string => {
  return `
    @media (min-width: ${values[key]}px) {
      ${name}: ${value};
    }
  `;
};

export const restyle = <CSSProperty extends string | number>({
  name,
  breakpoints,
}: {
  name: string;
  breakpoints: BreakpointsValues<CSSProperty> | string | number;
}): string => {
  if (typeof breakpoints === 'string' || typeof breakpoints === 'number') return `${name}: ${breakpoints}`;
  return defaultBreakpoints.keys
    .filter((k) => !!breakpoints[k])
    .map((k) => createMediaQuery({ name, key: k, value: breakpoints[k].toString() }))
    .join('\n');
};
