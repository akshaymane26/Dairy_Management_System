import {useDispatch, useSelector} from 'react-redux';
import {addFarmer, updateFarmer } from '../farmerSlice';
import { useNavigate, useParams } from 'react-router-dom';
import FarmerForm from '../components/FarmerForm';

export default function AddEditFarmer({ isEdit = false, initialData = {} }){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id } = useParams();

    console.log("ID from useParams:", id);
       

    const farmer = useSelector((state) => {
        // console.log("===redux checkin====");
        // console.log(state.farmer.list.find((f) => f._id === id));
        // console.log("=end=");
        const found = state.farmer.list.find((f) => f._id === id)
        return found ? found : initialData; // Return found farmer or initial data 
    })
    //    const farmer = useSelector((state) =>
    //     state.farmer.list.find((f) => f._id === id)
    // );
    console.log("farmer:", farmer); 

    const handleSubmit = async (data) => {
        try {
            if (isEdit) {
                await dispatch(updateFarmer({ id, farmerData: data }));
            } else {
                await dispatch(addFarmer(data));
            }
            navigate("/farmers");
        } catch (error) {
            console.error("Error saving farmer:", error);
        }
    }


return (
        <div>
            <h1>{isEdit ? "Edit Farmer" : "Add Farmer"}</h1>

            {isEdit && !farmer ? (
                <p>Loading...</p> // Optional: show while data is loading
            ) : (
                <FarmerForm
                    defaultValues={isEdit ? farmer : {}}
                    onSubmit={handleSubmit}
                />
            )}
        </div>
);
}