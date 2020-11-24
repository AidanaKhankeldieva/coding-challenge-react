import React from "react";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FilteringTable";
import { PaginationTable } from "./components/PaginationTable";
import { SortingTable } from "./components/SortingTable";
import { StickyTable } from "./components/StickyTable";
function App() {
  return (
    <div className='App'>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      <StickyTable />
    </div>
  );
}

export default App;
