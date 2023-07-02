type Mods = Record<string, boolean | string | undefined>;

export const classNames = (baseClass: string, mods?: Mods, additionalClasses?: Array<string | undefined>): string => {
  const resultArr = [baseClass];
  additionalClasses && resultArr.push(...additionalClasses.filter(Boolean) as string[]);
  mods && Object.keys(mods).length && resultArr.push(
    ...Object.entries(mods).reduce<string[]>((acc, [cls, value]) => {
      Boolean(value) && acc.push(cls);
      return acc;
    }, [])
  );

  return resultArr.join(" ");
};
