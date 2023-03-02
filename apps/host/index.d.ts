/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'plp/ProductsPage' {
  export * from '@plp/pages/index.tsx';
}
declare module 'plp/ProductList' {
  export * from '@plp/components/ProductList';
}

declare module 'plp/ProductCard' {
  export * from '@plp/components/ProductCard';
}
