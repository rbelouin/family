import type * as d3 from "d3";

export type D3Component<P extends {}, E extends Element = HTMLDivElement> = (
  props: P
) => d3.Selection<E, P, null, undefined>;
