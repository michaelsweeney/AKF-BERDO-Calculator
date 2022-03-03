import { conn } from "../../store/connect";
import { Paper } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { queryBuildingDataFromCsv } from "./csvqueries";

const useStyles = makeStyles({
  root: {},
  select: {
    cursor: "pointer",
  },
});
const BerdoApiResultsTable = (props) => {
  const classes = useStyles();
  const handleSelectBuilding = (e) => {
    let callbackFunction = (p) => {
      props.actions.setLoadedBuildingQueryInfo(p);
      props.actions.compileBuildingOutputs();
    };

    let berdo_dataset_year = props.berdoapi.berdo_dataset_year;

    queryBuildingDataFromCsv(e, callbackFunction, berdo_dataset_year);

    props.actions.setIsLoadModalOpen(false);

    // todo: create table & results summary
    props.actions.setIsLoadedSummaryModalOpen(true);
  };

  let { inputQueryResults } = props.berdoapi;
  return (
    <Paper style={{ maxHeight: "500px", overflow: "auto" }}>
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
              <TableRow
                className={classes.select}
                hover
                onClick={() => handleSelectBuilding(e)}
                key={i}
              >
                <TableCell>{e["Property Name"]}</TableCell>
                <TableCell>{e["Address"]}</TableCell>
                <TableCell>{e["Tax Parcel"]}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

const mapStateToProps = (store) => {
  return {
    berdoapi: { ...store.building.berdoapi },
  };
};

export default conn(mapStateToProps)(BerdoApiResultsTable);
