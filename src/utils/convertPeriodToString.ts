export function convertPeriodToString(start: string, end: string | null) {
  // YYYY-MM-DD 형식
  let period = `${start.slice(0, 4)}.${start.slice(5, 7)} -`;
  if (end) {
    period += ` ${end.slice(0, 4)}.${end.slice(5, 7)}`;
  }
  return period;
}
