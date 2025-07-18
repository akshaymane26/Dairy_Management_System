import {useDispatch} from 'react-redux';
import {addFarmer, updateFarmer } from '../farmerSlice';
import { useNavigate, useParams } from 'react-router-dom';
import FarmerForm from '../components/FarmerForm';

export default function AddEditFarmer({ isEdit = false, initialData = {} }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id } = useParams();

    const handleSubmit = async (data) => {
        try {
            if (isEdit) {
                await dispatch(updateFarmer({ id, farmerData: data }));
            } else {
                await dispatch(addfarmer(data));
            }
            navigate("/farmers");
        } catch (error) {
            console.error("Error saving farmer:", error);
        }
    }

    return (
        <div>
            <h1>{isEdit ? "Edit Farmer" : "Add Farmer"}</h1>
            <FarmerForm 
                defaultValues={initialData} 
                onSubmit={handleSubmit} 
            />
        </div>
    );
}