import { conn } from "../../../store/connect";

import * as d3 from "d3";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useRef, useEffect } from "react";

const TabularPlot = (props) => {
  return (
    <div>
      <Table>
        <TableBody>
          <TableRow>
            {["a", "b", "c", "d", "e", "f"].map((e) => (
              <TableCell>{e}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            {["a", "b", "c", "d", "e", "f"].map((e) => (
              <TableCell>{e}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    building: { ...state.building },
    window: { ...state.window },
  };
};

export default conn(mapStateToProps)(TabularPlot);
