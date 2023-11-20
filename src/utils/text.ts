export const camalCaseToSentenceCase = (value: string) => {
  const split = value.replace(/([A-Z])/g, ' $1').toLowerCase();
  return split[0].toUpperCase() + split.slice(1);
};
