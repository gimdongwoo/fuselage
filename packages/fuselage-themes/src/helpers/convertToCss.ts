export const convertToCss = (
  values: Record<string, string>,
  prefix = '--rcx-color-',
  selector = ':root'
) =>
  `${selector} {\n${Object.entries(values)
    .map(([name, color]) => `${prefix}-${name}: ${color};`)
    .join('\n')}\n}`;
