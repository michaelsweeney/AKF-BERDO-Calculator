import { useEffect, useState } from "react";
import { conn } from "../../store/connect";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { queryBuildingData } from "./queries";

const BerdoApiResultsTable = (props) => {
  const handleSelectBuilding = (e) => {
    let callbackFunction = props.actions.setLoadedBuildingQueryInfo;

    // send to async query function
    queryBuildingData(e, callbackFunction);
    props.actions.setIsLoadModalOpen(false);
    // handle synchronous & ui updates
  };

  let { inputQueryResults } = props.berdoapi;
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Property Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Tax Parcel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inputQueryResults.map((e, i) => {
            return (
              <TableRow hover onClick={() => handleSelectBuilding(e)} key={i}>
                <TableCell>{e["Property Name"]}</TableCell>
                <TableCell>{e["Address"]}</TableCell>
                <TableCell>{e["Tax Parcel"]}</TableCell>
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
