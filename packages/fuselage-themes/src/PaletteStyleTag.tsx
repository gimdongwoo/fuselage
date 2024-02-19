import { memo } from 'react';
import { createPortal } from 'react-dom';

import { codeBlock } from './codeBlockStyles';
import { convertToCss } from './helpers/convertToCss';
import { useCreateStyleContainer } from './hooks/useCreateStyleContainer';
// import { useThemeMode } from './hooks/useThemeMode';
import { dark } from './paletteDark';
import { highContrast } from './paletteHighContrast';
import { light } from './paletteLight';
import type { Themes } from './types/themes';

const themes = {
  light,
  dark,
  'high-contrast': highContrast,
};

export const PaletteStyleTag = memo(function PaletteStyleTag({
  theme = 'light',
  prefix,
  selector,
}: {
  theme: Themes;
  prefix?: string;
  selector?: string;
}) {
  const palette = convertToCss(themes[theme], prefix, selector);

  console.log(prefix);
  return (
    <>
      {createPortal(
        theme === 'dark' ? palette + codeBlock : palette,
        useCreateStyleContainer('main-palette')
      )}
    </>
  );
});
