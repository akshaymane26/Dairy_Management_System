import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFarmers, deleteFarmer } from "../farmerSlice";
import { Table, TableHead, TableRow, TableCell, TableBody, IconButton, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function FarmerList() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.farmers);

  useEffect(() => {
    dispatch(fetchFarmers());
  }, [dispatch]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Farmers</h2>
      <Button component={Link} to="/farmers/add" variant="contained" sx={{ mb: 2 }}>
        Add Farmer
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Village</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((farmer) => (
            <TableRow key={farmer._id}>
              <TableCell>{farmer.number}</TableCell>
              <TableCell>{farmer.name}</TableCell>
              <TableCell>{farmer.mobile}</TableCell>
              <TableCell>{farmer.village}</TableCell>
              <TableCell>
                <IconButton component={Link} to={`/farmers/edit/${farmer._id}`}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => dispatch(deleteFarmer(farmer._id))}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
