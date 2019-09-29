export const DATE_FORMAT = "dddd, mmmm dS, h:MM:ss TT";

export const SORT_BY_TYPE = {
  AIRPORT_ORIGIN: "ariport_origin",
  AIRPORT_DESTINATION: "ariport_destination",
  TIME: "time"
};

export function sortByFn(flights, sortType) {
  if (flights.length <= 0) return flights;

  switch (sortType) {
    case SORT_BY_TYPE.TIME:
      return flights.sort((a, b) => (a.departure > b.departure ? 1 : -1));
    case SORT_BY_TYPE.AIRPORT_ORIGIN:
      return flights.sort((a, b) =>
        a.origin.value.toUpperCase() > b.origin.value.toUpperCase() ? 1 : -1
      );
    case SORT_BY_TYPE.AIRPORT_DESTINATION:
      return flights.sort((a, b) =>
        a.destination.value.toUpperCase() > b.destination.value.toUpperCase()
          ? 1
          : -1
      );
    default:
      return flights;
  }
}
