import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import UseAxios from "../Hooks/UseAxios"
import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Authentication/AuthProvider";


const ServicesBooking = () => {

    // const servicesLoaded = useLoaderData();
    // console.log(servicesLoaded)
    // console.log(servicesLoaded.result?.features)

    const { user } = useContext(AuthContext)
    const axios = UseAxios()
    const { id } = useParams()

    const [customerName, changeCustomerName] = useState(user?.name)
    const [email, changeEmail] = useState(user?.email)
    const [date, changeDate] = useState('')
    const [timeSet, changeTimeSet] = useState('')
    const [address, changeAddress] = useState('')

    const { data: service, isLoading } = useQuery({
        queryKey: ["service"],
        queryFn: async () => {
            const res = await axios.get(`/services/${id}`)
            return res;
        }
    })

    console.log(service)
    // console.log(service?.data?.result.features)

    const features = service?.data?.result.features;
    console.log(features)

    // const bookingData = { name, email, date, timeSet, address };

    // const handleServiceBooking = (e) => {
    //     e.preventDefault();
    //     console.log(bookingData)
    // }

    //use mutation uses example
    const { mutate } = useMutation({
        mutationKey: ["booking"],
        mutationFn: (bookingData) => {
            return axios.post('/user/create-booking', bookingData)
        }
    })

    if (isLoading) {
        return <div className="h-[85vh] flex justify-center items-center"><span className="loading loading-spinner text-secondary"></span></div>
    }

    return (
        <div>
            <div className="hero min-h-[85vh] mt-12">
                <div className="hero-content items-start">
                    <div className="text-center lg:text-left flex-1">
                        <h1 className="text-3xl font-bold">{service?.data?.result?.name}</h1>
                        <p className="py-6">{service?.data?.result?.description}</p>
                        <div>

                            {
                                features?.map((item, idx) => (<p key={idx}><span className="font-bold">{item?.name}:</span>  {item?.description}</p>))
                            }
                        </div>
                        <div className="mt-12">
                            <p className="text-3xl font-bold">Price: {service?.data?.result?.price}$</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 flex-1">
                        <form className="card-body"
                        // onSubmit={handleServiceBooking}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text" placeholder="name" className="input input-bordered" required
                                    onBlur={(e) => changeCustomerName(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required
                                    onBlur={(e) => changeEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" placeholder="date" className="input input-bordered" required
                                    onBlur={(e) => changeDate(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Time Set</span>
                                </label>
                                <input type="text" placeholder="time set" className="input input-bordered" required
                                    onBlur={(e) => changeTimeSet(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea type="text" placeholder="address" className="input input-bordered" required
                                    onBlur={(e) => changeAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button type="button" onClick={() => mutate({
                                    customerName,
                                    email,
                                    date,
                                    address,
                                    timeSet,
                                    service: service?.data?.result?.name,
                                    price: service?.data?.result?.price,
                                })} className="btn btn-success text-white">Booking Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesBooking;