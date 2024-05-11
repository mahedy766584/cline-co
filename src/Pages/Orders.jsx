import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import UseAxios from "../Hooks/UseAxios";
import auth from "../Authentication/firebase.config.init";
import toast from "react-hot-toast";

const Orders = () => {

    const axios = UseAxios();

    const queryClient = useQueryClient();


    const { data: order } = useQuery({
        queryKey: ["order"],
        queryFn: async () => {
            // const email = auth.currentUser.email
            const res = await axios.get(`/user/bookings`)
            return res;
        }
    })



    //for example by using use mutation 
    const { mutate } = useMutation({
        mutationKey: ["order "],
        mutationFn: (id) => {
            return axios.delete(`/user/create-booking/${id}`)
        },
        onSuccess: () => {
            toast.success('Done')
            queryClient.invalidateQueries({ queryKey: "order" })
        }
    })


    console.log(order)

    return (
        <div>
            <h1>Order</h1>

            {/* <button onClick={() => mutate(item._id)}>delete</button> */}
        </div>
    );
};

export default Orders;