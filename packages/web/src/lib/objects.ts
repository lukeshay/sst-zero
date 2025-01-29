/**
 * Recursively removes properties with `null` values from an object.
 * @param  obj - The input object (may have nested keys).
 * @returns  A new object with `null` values removed.
 */
export function removeNullValues<T extends Record<string, any>>(obj: T): T {
  // If the input is not an object, return it as-is
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => removeNullValues(item)) as unknown as T;
  }

  // Create a new object to avoid mutating the original
  const result: Record<string, any> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];

      // Recursively remove null values from nested objects or arrays
      if (typeof value === "object" && value !== null) {
        result[key] = removeNullValues(value);
      }
      // Skip properties with null values
      else if (value !== null) {
        result[key] = value;
      }
    }
  }

  return result as T;
}
