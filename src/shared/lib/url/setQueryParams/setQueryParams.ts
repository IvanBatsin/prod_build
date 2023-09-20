export const getQueryParams = (payload: OptionalRecord<string, string>): string => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined) {
      value && searchParams.set(key, value);
    }
  });
  return `?${searchParams.toString()}`;
};

export const setQueryParams = (payload: OptionalRecord<string, string>): void => {
  window.history.pushState(null, "", getQueryParams(payload));
};
