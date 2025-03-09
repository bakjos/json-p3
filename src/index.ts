export const version = "__VERSION__";

export * as jsonpath from "./path";
export {
  DEFAULT_ENVIRONMENT,
  FunctionExpressionType,
  JSONPathQuery,
  JSONPathEnvironment,
  JSONPathError,
  JSONPathIndexError,
  JSONPathLexerError,
  JSONPathNode,
  JSONPathNodeList,
  JSONPathSyntaxError,
  JSONPathTypeError,
  JSONPathRecursionLimitError,
  JSONPathSegment,
  UndefinedFilterFunctionError,
  ChildSegment,
  DescendantSegment,
  Parser,
  TokenStream,
  Token,
  TokenKind,
  Nothing,
  lazyQuery,
  query,
  compile,
} from "./path";

export {
  FilterSelector,
  IndexSelector,
  JSONPathSelector,
  NameSelector,
  SliceSelector,
  WildcardSelector,
} from "./path/selectors";
export {
  KeySelector,
  KeysSelector,
  KeysFilterSelector,
} from "./path/extra/selectors";

export * as expression from "./path/expression";
export { CurrentKey } from "./path/extra/expression";

export type { JSONPathEnvironmentOptions, FilterFunction } from "./path";

export * as jsonpointer from "./pointer";
export {
  JSONPointer,
  RelativeJSONPointer,
  resolve,
  UNDEFINED,
} from "./pointer";

export * as jsonpatch from "./patch";
export {
  JSONPatch,
  JSONPatchError,
  JSONPatchTestFailure,
  apply,
} from "./patch";
export type { OpObject } from "./patch";

export type { JSONValue } from "./types";
