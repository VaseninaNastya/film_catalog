import React from "react";
import s from "./Sort.module.scss";
import { useDispatch, useSelector } from "react-redux";
import fitler from "../../utils/fitler.utils";
import { RootState } from "../../store";
import { filmSortAction } from "../../actions/filmSortAction";
import sortConstants from "../../constants/sort.constants";

const Sort: React.FunctionComponent = () => {
  const allFetchedFilms = useSelector((state: RootState) => state.getData.data);

  const errorRequest = useSelector((state: RootState) => state.getData.error);

  const wrongRequest = useSelector(
    (state: RootState) => state.getData.data.Response
  );

  const dispatch = useDispatch();

  const disabledSelect = Boolean(
    errorRequest || !allFetchedFilms || wrongRequest === "False"
  );

  const { sort, withoutSorting, year, title, type } = sortConstants;
  const productsForSort = allFetchedFilms.Search;

  type sortetType = ReturnType<typeof allFetchedFilms.Search>;

  const handleSortChoise = function ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) {
    let sorted: sortetType = [];
    productsForSort.map((item: Record<string, unknown>) => sorted.push(item));
    if (value !== "without_sorting") {
      sorted = fitler(sorted, value);
    }

    dispatch(filmSortAction(sorted));
  };

  return (
    <div className={s.sort_container}>
      <span className={s.sort_title}>{sort}</span>
      <select disabled={disabledSelect} onChange={handleSortChoise}>
        <option value={withoutSorting}>{withoutSorting}</option>
        <option value={year}>{year}</option>
        <option value={title}>{title}</option>
        <option value={type}>{type}</option>
      </select>
    </div>
  );
};

export default Sort;
