import type * as d3 from "d3";

export type D3Component<E extends Element, P> = <T extends d3.BaseType, D>(
  selection: d3.Selection<E | d3.BaseType, P, T, D>
) => d3.Selection<E | d3.BaseType, P, T, D>;
