const omitDeep = (
  input: Record<string, any>,
  excludes: string[],
): Record<string, any> => {
  return Object.entries(input).reduce<Record<string, any>>(
    (nextInput, [key, value]) => {
      const shouldExclude = excludes.includes(key);
      if (shouldExclude) return nextInput;

      if (Array.isArray(value)) {
        const arrValue = value;
        const nextValue = arrValue.map(arrItem => {
          if (typeof arrItem === "object") {
            return omitDeep(arrItem, excludes);
          }
          return arrItem;
        });
        nextInput[key] = nextValue;
        return nextInput;
      } else if (typeof value === "object") {
        nextInput[key] = omitDeep(value, excludes);
        return nextInput;
      }

      nextInput[key] = value;

      return nextInput;
    },
    {},
  );
};

export default omitDeep;
