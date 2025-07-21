import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFarmers, deleteFarmer } from "../farmerSlice";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

export default function FarmerList() {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.farmer);
// const farmers = useSelector((state) => state.farmer.list);
  const loading = useSelector((state) => state.farmer.loading);
  const error = useSelector((state) => state.farmer.error);
  
  useEffect(() => {
    dispatch(fetchFarmers());
    console.log("Farmers fetched:", list);
    
  }, [dispatch]);

    useEffect(() => {
    console.log("Farmers fetched in component:", list);  // 
  }, [list]);


  const handleDelete = (id) => {
    dispatch(deleteFarmer(id));
  };

    if (loading) return <p>Loading farmers...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Farmers</h2>
      <Button
        component={Link}
        to="/farmers/add"
        variant="contained"
        sx={{ mb: 2 }}
      >
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
          {list?.list?.length > 0 ? (
            list.list.map((farmer) => (
              <TableRow key={farmer._id}>
                <TableCell>{farmer.customerNumber}</TableCell>
                <TableCell>{farmer.name}</TableCell>
                <TableCell>{farmer.mobile}</TableCell>
                <TableCell>{farmer.address}</TableCell>
                <TableCell>
                  <IconButton
                    component={Link}
                    to={`/farmers/edit/${farmer._id}`}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(farmer._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No farmers found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
