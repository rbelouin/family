import { format, formatRange, DateWithPrecision } from "./index";

describe("date-with-precision", () => {
  describe("format", () => {
    [
      {
        givenDate: [2022, 11, 3] as DateWithPrecision,
        givenLanguage: "en-US",
        expectedResult: "12/3/2022",
      },
      {
        givenDate: [2022, 11, 3] as DateWithPrecision,
        givenLanguage: "fr-FR",
        expectedResult: "03/12/2022",
      },
      {
        givenDate: [2022, 11] as DateWithPrecision,
        givenLanguage: "en-US",
        expectedResult: "12/2022",
      },
      {
        givenDate: [2022, 11] as DateWithPrecision,
        givenLanguage: "fr-FR",
        expectedResult: "12/2022",
      },
      {
        givenDate: [2022] as DateWithPrecision,
        givenLanguage: "en-US",
        expectedResult: "2022",
      },
      {
        givenDate: [2022] as DateWithPrecision,
        givenLanguage: "fr-FR",
        expectedResult: "2022",
      },
    ].forEach(({ givenDate, givenLanguage, expectedResult }) => {
      it(`should return ${expectedResult} when ${JSON.stringify(
        givenDate
      )} is given, in ${givenLanguage}`, () => {
        expect(format(givenDate, givenLanguage)).toEqual(expectedResult);
      });
    });
  });

  describe("formatRange", () => {
    [
      {
        givenStart: [1992, 11, 3] as DateWithPrecision,
        givenEnd: [2022, 11, 3] as DateWithPrecision,
        givenLocale: "en-US",
        expectedResult: "12/3/1992 - 12/3/2022",
      },
      {
        givenStart: [1992, 11, 3] as DateWithPrecision,
        givenEnd: [2022, 11, 3] as DateWithPrecision,
        givenLocale: "fr-FR",
        expectedResult: "03/12/1992 - 03/12/2022",
      },
      {
        givenStart: [1992, 11, 3] as DateWithPrecision,
        givenEnd: undefined,
        givenLocale: "en-US",
        expectedResult: "12/3/1992",
      },
      {
        givenStart: [1992, 11, 3] as DateWithPrecision,
        givenEnd: undefined,
        givenLocale: "fr-FR",
        expectedResult: "03/12/1992",
      },
      {
        givenStart: undefined,
        givenEnd: [2022, 11, 3] as DateWithPrecision,
        givenLocale: "en-US",
        expectedResult: undefined,
      },
      {
        givenStart: undefined,
        givenEnd: [2022, 11, 3] as DateWithPrecision,
        givenLocale: "fr-FR",
        expectedResult: undefined,
      },
      {
        givenStart: undefined,
        givenEnd: undefined,
        givenLocale: "en-US",
        expectedResult: undefined,
      },
      {
        givenStart: undefined,
        givenEnd: undefined,
        givenLocale: "fr-FR",
        expectedResult: undefined,
      },
    ].forEach(({ givenStart, givenEnd, givenLocale, expectedResult }) => {
      it(`should return the expected result when start ${
        givenStart ? "is" : "is not"
      } given and end ${
        givenEnd ? "is" : "is not"
      } given, in ${givenLocale}`, () => {
        expect(formatRange(givenStart, givenEnd, givenLocale)).toEqual(
          expectedResult
        );
      });
    });
  });
});
