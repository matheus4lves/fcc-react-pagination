import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import Pagination from "./components/Pagination";
import data from "./mock-data.json";
import "./styles/styles.scss";

if (module.hot) {
  module.hot.accept("./Main.js");
}

let PageSize = 10;

function Main() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item, idx) => {
            return (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination className="pagination-bar" currentPage={currentPage} totalCount={data.length} pageSize={PageSize} onPageChange={page => setCurrentPage(page)} />
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
