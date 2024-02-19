import type { ReactElement } from 'react';
import { memo } from 'react';
import { createPortal } from 'react-dom';

import { convertToCss } from './helpers/convertToCss';
import { useCreateStyleContainer } from './hooks/useCreateStyleContainer';
import { dark } from './paletteDark';

export const SidebarPaletteStyleTag = memo(
  function SidebarPaletteStyleTag(): ReactElement | null {
    const palette = convertToCss({ ...dark }, '.rcx-sidebar--main');

    return (
      <>{createPortal(palette, useCreateStyleContainer('sidebar-palette'))}</>
    );
  }
);
