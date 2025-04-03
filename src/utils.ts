export function convertToPeriodStr(start: string, end: string | null) {
  // YYYY-MM-DD 형식
  let period = `${start.slice(0, 4)}.${start.slice(5, 7)} -`;
  if (end) {
    period += ` ${end.slice(0, 4)}.${end.slice(5, 7)}`;
  }
  return period;
}

export function checkIsMobile() {
  const mobileRegex = [
    /Android/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  const agent = window.navigator.userAgent;
  const isMobile = mobileRegex.some((regex) => agent.match(regex));

  return isMobile;
}
