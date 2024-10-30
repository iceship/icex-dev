import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}
