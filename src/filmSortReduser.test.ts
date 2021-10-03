import reducer from './reducers/filmSortReduser';

test('should return the initial state', () => {
  expect(reducer(undefined, {type: "test", payload: "test"})).toEqual(
    {
      sortedData: []
    }
  )
})

test('should handle a todo being added to an empty list', () => {
  const previousState:any = []
  expect(reducer(previousState, {type: "FILM_SORT", payload: "test"})).toEqual(
    {
      sortedData: "test"
    }
  )
})