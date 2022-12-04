export type DateWithPrecision =
  | [number]
  | [number, number]
  | [number, number, number];

export function format(date: DateWithPrecision, locale: string): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: date.length > 1 ? "numeric" : undefined,
    day: date.length > 2 ? "numeric" : undefined,
  });

  return formatter.format(
    new Date(date[0], date[1] ? date[1] - 1 : 0, date[2] || 1)
  );
}

export function formatRange(
  start: DateWithPrecision | undefined,
  end: DateWithPrecision | undefined,
  locale: string
): string | undefined {
  if (start && end) {
    return `${format(start, locale)} - ${format(end, locale)}`;
  } else if (start) {
    return format(start, locale);
  } else {
    return undefined;
  }
}
