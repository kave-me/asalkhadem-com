/**
 * This function takes any number of arguments and returns a string of concatenated class names.
 * It filters out any falsy values (such as undefined, null, false, 0, and empty strings) before joining them together.
 * This makes it easy to conditionally add class names to an element without worrying about extra spaces or undefined values.
 *
 * Example usage:
 *
 * const isActive = true;
 * const className = classNames("button", isActive && "active");
 * // className === "button active"
 *
 * @param {...string} args - The class names to concatenate.
 * @returns {string} - The concatenated class names.
 */
export function classNames(...args: any[]): string {
  return args.filter(Boolean).join(" ");
}
