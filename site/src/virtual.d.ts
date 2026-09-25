// Virtual modules served by scripts/data-plugin.mjs.
declare module 'virtual:twow-core' {
  import type { CoreData } from './types';
  const core: CoreData;
  export default core;
}

declare module 'virtual:twow-loaders' {
  import type { ClassEntry, InstancesData, MatrixData } from './types';
  export const classLoaders: Record<string, () => Promise<{ default: ClassEntry }>>;
  export const loadInstances: (() => Promise<{ default: InstancesData }>) | null;
  export const loadMatrix: () => Promise<{ default: MatrixData }>;
}
