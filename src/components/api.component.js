import {} from "@material-ui/core";

import React from "react";
import EnhancedTable from "./EnhancedTable";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "Dessert",
  },
  { id: "calories", numeric: false, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: false, disablePadding: true, label: "Fats" },
  { id: "carbs", numeric: false, disablePadding: true, label: "Carbs" },
  { id: "protein", numeric: false, disablePadding: true, label: "Proteins" },
];
let rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

export default function Folders() {
  return <EnhancedTable title="Returns" rows={rows} headCells={headCells} />;
}
