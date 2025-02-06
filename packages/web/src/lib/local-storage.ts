import { type BaseSchema, type InferOutput, ValiError, parse } from "valibot";

/**
 * Options for creating a validated storage object.
 */
interface CreateValidatedStorageOptions<
  T extends BaseSchema<any, any, any>,
  U extends InferOutput<T> | undefined,
> {
  key: string; // The key under which the data is stored in localStorage
  schema: T; // The Valibot schema to validate the data
  defaultValue: U; // Default value to return if the item is invalid or doesn't exist
}

/**
 * Creates a validated storage object for a given key and Valibot schema.
 * @param options - The options for creating the storage object.
 * @returns  An object with `getItem`, `setItem`, and `removeItem` methods.
 */
export function createValidatedStorage<
  T extends BaseSchema<any, any, any>,
  U extends InferOutput<T> | undefined,
>({ key, schema, defaultValue }: CreateValidatedStorageOptions<T, U>) {
  return {
    /**
     * Retrieves and validates the item from localStorage.
     * @returns  The validated state, or the default value if the item is invalid or doesn't exist.
     */
    getItem: (): U extends undefined
      ? InferOutput<T> | undefined
      : InferOutput<T> => {
      const item = localStorage.getItem(key); // Get the item from localStorage
      if (!item) return defaultValue as any;

      try {
        const parsed = JSON.parse(item); // Parse the JSON string
        const validated = parse(schema, parsed); // Validate using Valibot
        return validated; // Return the validated state
      } catch (e) {
        if (e instanceof ValiError) {
          console.warn("Invalid state detected, removing the item");
          localStorage.removeItem(key); // Remove the invalid item
        }
        return defaultValue as any;
      }
    },

    /**
     * Saves the item to localStorage after validating it.
     * @param value - The state to save.
     */
    setItem: (value: InferOutput<T>): void => {
      try {
        const validated = parse(schema, value); // Validate using Valibot
        localStorage.setItem(key, JSON.stringify(validated)); // Save the validated state
      } catch (e) {
        if (e instanceof ValiError) {
          console.warn("Invalid state detected, not saving the item");
        } else {
          throw e; // Re-throw unexpected errors
        }
      }
    },

    /**
     * Removes the item from localStorage.
     */
    removeItem: (): void => {
      localStorage.removeItem(key); // Remove the item
    },
  };
}
