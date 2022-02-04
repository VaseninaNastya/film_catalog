import reducer from "../src/reducers/filmSortReduser";
describe("src/components/AboutTheTeam", () => {
  describe("AboutTheTeam", () => {
    test("should return the initial state", () => {
      expect(reducer(undefined, { type: "test", payload: "test" })).toEqual({
        sortedData: [],
      });
    });

    test("should handle a todo being added to an empty list", () => {
      const previousState: never[] = [];
      expect(
        reducer(previousState, { type: "FILM_SORT", payload: "test" })
      ).toEqual({
        sortedData: "test",
      });
    });
  });
});
