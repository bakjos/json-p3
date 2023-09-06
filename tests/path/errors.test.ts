import { JSONPathEnvironment } from "../../src/path/environment";
import {
  JSONPathIndexError,
  JSONPathSyntaxError,
  JSONPathTypeError,
  UndefinedFilterFunctionError,
} from "../../src/path/errors";

describe("syntax error", () => {
  const env = new JSONPathEnvironment();
  test("no leading whitespace", () => {
    const query = " $";
    expect(() => env.query(query, {})).toThrow(JSONPathSyntaxError);
    expect(() => env.query(query, {})).toThrow(
      "expected '$', found ' ' (' $':0)",
    );
  });
  test("shorthand index", () => {
    const query = "$.1";
    expect(() => env.query(query, {})).toThrow(JSONPathSyntaxError);
    expect(() => env.query(query, {})).toThrow(
      "unexpected shorthand selector '1' ('$.1':2)",
    );
  });
  test("shorthand symbol", () => {
    const query = "$.&";
    expect(() => env.query(query, {})).toThrow(JSONPathSyntaxError);
    expect(() => env.query(query, {})).toThrow(
      "unexpected shorthand selector '&' ('$.&':2)",
    );
  });
  test("empty bracketed segment", () => {
    const query = "$.foo[]";
    expect(() => env.query(query, {})).toThrow(JSONPathSyntaxError);
    expect(() => env.query(query, {})).toThrow(
      "empty bracketed segment ('$.foo[]':5)",
    );
  });
});

describe("type error", () => {
  const env = new JSONPathEnvironment();
  test("too many params", () => {
    const query = "$[?count(@.a,@.b)==1]";
    expect(() => env.query(query, {})).toThrow(JSONPathTypeError);
    expect(() => env.query(query, {})).toThrow(
      "count() takes 1 argument, 2 given ('$[?count(':3)",
    );
  });
});

describe("index error", () => {
  const env = new JSONPathEnvironment();
  test("index out of range", () => {
    const query = "$.foo[9007199254740992]";
    expect(() => env.query(query, {})).toThrow(JSONPathIndexError);
    expect(() => env.query(query, {})).toThrow(
      "index out of range ('foo[90071':6)",
    );
  });
});

describe("undefined filter function", () => {
  const env = new JSONPathEnvironment();
  test("slice", () => {
    const query = "$[?slice(1,2)]";
    expect(() => env.query(query, {})).toThrow(UndefinedFilterFunctionError);
    expect(() => env.query(query, {})).toThrow(
      "no such function 'slice' ('$[?slice(':3)",
    );
  });
});
