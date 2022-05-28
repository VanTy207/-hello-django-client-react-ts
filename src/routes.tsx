import React from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import FilterQiestion from './modules/filter_question/filter_question';
import ListQuestionComponent from './modules/list_question/list_question';
import SortQuestion from "./modules/sort_question/sort_question";

const AppRouter = ({ ...prop }) => {
  return (
    <Routes>
      <Route path="/" element={<ListQuestionComponent />} />
      <Route path="/filter-question" element={<FilterQiestion />} />
      <Route path="/sort-question" element={<SortQuestion />} />
    </Routes>
  );
}
export default AppRouter