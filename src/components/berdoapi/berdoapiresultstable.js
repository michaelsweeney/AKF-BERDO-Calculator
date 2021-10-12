import { useEffect, useState } from "react";
import { conn } from "../../store/connect";

import { makeStyles } from "@material-ui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { queryBuildingData } from "./queries";

const useStyles = makeStyles({
  td: {
    // whiteSpace: "nowrap",
  },
  row: {
    // whiteSpace: "nowrap",
  },
  table: {
    // whiteSpace: "nowrap",
  },
});
const BerdoApiResultsTable = (props) => {
  const classes = useStyles();

  const handleSelectBuilding = (e) => {
    let callbackFunction = props.actions.setLoadedBuildingQueryInfo;
    queryBuildingData(e, callbackFunction);
  };

  let { inputQueryResults } = props.berdoapi;
  return (
    <div>
      <Table>
        <TableHead>
          <TableCell>Property Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Tax Parcel</TableCell>
        </TableHead>
        <TableBody>
          {inputQueryResults.map((e, i) => {
            return (
              <TableRow
                hover
                onClick={() => handleSelectBuilding(e)}
                key={i}
                className={classes.row}
              >
                <TableCell className={classes.td}>
                  {e["Property Name"]}
                </TableCell>
                <TableCell className={classes.td}>{e["Address"]}</TableCell>
                <TableCell className={classes.td}>{e["Tax Parcel"]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    berdoapi: { ...store.building.berdoapi },
  };
};

export default conn(mapStateToProps)(BerdoApiResultsTable);
