import { format } from "date-fns";
// import { GlobalFilter } from "./GlobalFilter";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    // Filter: GlobalFilter,
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "First_Name",
    accessor: "first_name",
    Footer: "First_Name",
    // Filter: GlobalFilter,
    sticky: "left",
  },
  {
    Header: "Last_Name",
    accessor: "last_name",
    Footer: "Last_Name",
    sticky: "left",
    // Filter: GlobalFilter,
  },
  {
    Header: "Email Address",
    accessor: "email",
    Footer: "Email Address",
    // Filter: GlobalFilter,
  },
  {
    Header: "Job Title",
    accessor: "job_title",
    Footer: "Job Title",
    // Filter: GlobalFilter,
  },
  {
    Header: "Color",
    accessor: "section",
    Footer: "Color",
    // Filter: GlobalFilter,
  },
];

// grouping
export const GROUPED_COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First_Name",
        accessor: "first_name",
        Footer: "First_Name",
      },
      {
        Header: "Last_Name",
        accessor: "last_name",
        Footer: "Last_Name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email Address",
        accessor: "email",
        Footer: "Email Address",
      },
    ],
  },
];
