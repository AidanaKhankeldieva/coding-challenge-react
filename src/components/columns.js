import { format } from "date-fns";
import { ColumnFilter } from "./ColumnFilter";
export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    Footer: "Id",
    // Filter: ColumnFilter,
    disableFilters: true,
    sticky: "left",
  },
  {
    Header: "First_Name",
    accessor: "first_name",
    Footer: "First_Name",
    // Filter: ColumnFilter,
    sticky: "left",
  },
  {
    Header: "Last_Name",
    accessor: "last_name",
    Footer: "Last_Name",
    sticky: "left",
    // Filter: ColumnFilter,
  },
  {
    Header: "Email Address",
    accessor: "email",
    Footer: "Email Address",
    // Filter: ColumnFilter,
  },
  {
    Header: "Company Name",
    accessor: "company_name",
    Footer: "Company Name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Role",
    accessor: "role",
    Footer: "Role",
    // Filter: ColumnFilter,
  },
  {
    Header: "Avatar",
    accessor: "avatar",
    Footer: "Avatar",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "State",
    accessor: "state",
    Footer: "State",
    // Filter: ColumnFilter,
  },
  {
    Header: "City",
    accessor: "city",
    Footer: "City",
    // Filter: ColumnFilter,
  },
  // data formating for ISO UTF to make it more readable and remove string stype
  {
    Header: "Enrollment Date",
    accessor: "date_of_enrollement",
    Footer: "Enrollment Date",
    // Filter: ColumnFilter,
    // Cell: ({ value }) => {
    //   return format(new Date(value), "dd/MM/yyyy");
    // },
  },
  {
    Header: "Number",
    accessor: "age",
    Footer: "Number",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    // Filter: ColumnFilter,
  },
  {
    Header: "Color",
    Footer: "Color",
    accessor: "fav_color",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Payment Type",
    Footer: "Payment Type",
    accessor: "payment_info",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "Deposit",
    Footer: "Deposit",
    accessor: "deposit",
    // Filter: ColumnFilter,
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
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
      {
        Header: "State",
        accessor: "state",
        Footer: "State",
      },
      {
        Header: "City",
        accessor: "city",
        Footer: "City",
      },
    ],
  },
];
