export namespace WasiCliBaseEnvironment {
  /**
   * Get the POSIX-style environment variables.
   * 
   * Each environment variable is provided as a pair of string variable names
   * and string value.
   * 
   * Morally, these are a value import, but until value imports are available
   * in the component model, this import function should return the same
   * values each time it is called.
   */
  export function getEnvironment(): [string, string][];
  /**
   * Get the POSIX-style arguments to the program.
   */
  export function getArguments(): string[];
}
