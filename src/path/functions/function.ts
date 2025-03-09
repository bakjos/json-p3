/**
 * The type of a JSONPath filter function parameter or return value, as
 * described in See section 2.4.1 of RFC 9535.
 */
export enum FunctionExpressionType {
  ValueType = "ValueType",
  LogicalType = "LogicalType",
  NodesType = "NodesType",
}

/**
 * A JSONPath filter function definition.
 */
export interface FilterFunction {
  /**
   * Argument types expected by the filter function.
   */
  argTypes: FunctionExpressionType[];

  /**
   * The type of the value returned by the filter function.
   */
  returnType: FunctionExpressionType;

  /**
   * The optional types (asumed to be at the end) of the filter function.
   */
  optionalTypes?: FunctionExpressionType[];

  /**
   * A function with unknown number and type of arguments.
   */
  call(...args: unknown[]): unknown;
}
