// Virtual modules served by scripts/data-plugin.mjs.
declare module 'virtual:twow-core' {
  import type { CoreData } from './types';
  const core: CoreData;
  export default core;
}

declare module 'virtual:twow-loaders' {
  import type { ClassEntry, GeneralGuideData, InstancesData, MatrixData } from './types';
  export const classLoaders: Record<string, () => Promise<{ default: ClassEntry }>>;
  export const loadInstances: (() => Promise<{ default: InstancesData }>) | null;
  export const loadMatrix: () => Promise<{ default: MatrixData }>;
  export const guideLoaders: Record<string, () => Promise<{ default: GeneralGuideData }>>;
}

// Served by scripts/icons-plugin.mjs from public/icons/manifest.json.
declare module 'virtual:game-icons' {
  import type { IconIndex } from './lib/icons';
  const icons: IconIndex;
  export default icons;
}
