export const getValueSafely = <T, U>(obj: T, path: string, defaultValue: U = undefined as U): U => {
  try {
    return (
      path.split('.').reduce((acc, part) => {
        return acc?.[part as keyof typeof acc];
      }, obj as any) ?? defaultValue
    );
  } catch {
    return defaultValue;
  }
};
