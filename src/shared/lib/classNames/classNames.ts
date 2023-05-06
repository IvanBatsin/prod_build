type Mods = Record<string, boolean | string>;

export const classNames = (baseClass: string, mods?: Mods, additionalClasses?: string[]): string => {
  const resultArr = [baseClass];
  additionalClasses && resultArr.push(...additionalClasses);
  mods && Object.keys(mods).length && resultArr.push(
    ...Object.entries(mods).reduce((acc, [cls, value]) => {
      Boolean(value) && acc.push(cls);
      return acc;
    }, [] as string[])
  );

  return resultArr.join(' ');
}