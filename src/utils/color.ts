import { Color } from '../kiwi/schema';

export const fractionRgbaToIntRgba = (c: Color) => {
  return {
    r: c.r * 255,
    g: c.g * 255,
    b: c.b * 255,
    a: c.a,
  };
};

export const IntRgbaToFractionRgba = (c: Color) => {
  return {
    r: c.r / 255,
    g: c.g / 255,
    b: c.b / 255,
    a: c.a,
  };
};
