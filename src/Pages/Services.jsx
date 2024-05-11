import { useQuery } from "@tanstack/react-query";
import ServicesCarts from "./ServicesCarts";
import { useState } from "react";
import { capitalizedWords } from "./capitalizedWordscapitalizedWords";
import UseAxios from "../Hooks/UseAxios";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";


const Services = () => {

    const axios = UseAxios()

    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [page, setPage] = useState(1);

    // const limit = 10;
    const limit = 9;

    //video time 39m day-3 part-3;

    const getServices = async () => {
        const resServices = await axios.get(`/services?sortField=price&sortOrder=${price}&category=${category}&page=${page}&limit=${limit}`)
        return resServices
    }

    //?sortField=price&sortOrder=${price}&category=${category}


    const { data, isLoading, isFetching, isError } = useQuery({
        queryKey: ['services', price, category, page],
        queryFn: getServices,
    })

    // console.log(data?.data?.result)

    // if (isLoading) {
    //     return <div className="h-[85vh] flex justify-center items-center"><span className="loading loading-spinner text-secondary"></span></div>
    // }

    const categories = [
        'Surface Cleaner',
        'Metal Care',
        'Air Care',
        'Floor Care'
    ]


    const totalPage = Math.ceil(data?.data?.total / limit);
    // const totalPage = data?.data?.total / limit;
    console.log(totalPage)

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }
    }

    console.log(page)


    return (
        <div className="flex flex-col justify-center items-center py-8 relative">
            <div className="absolute right-0 h-10 top-0 mt-5">
                {/* <Selected/> */}
            </div>

            <div className="absolute right-0 gap-10 top-0 flex">

                <div className="from-control">
                    <label className="label">
                        <span className="label-text">Categories</span>
                    </label>
                    <select className="input input-bordered"
                        // onChange={(e) => setCategory(e.target.value)}>
                        onChange={e => setCategory(e.target.value)}>

                        <option disabled selected>
                            Chose One
                        </option>
                        {
                            // categories?.map((item) => (<option key={item} value={item}>
                            //     {capitalizedWords(item)}
                            // </option>))
                            categories.map((item) => <option key={item} value={item}>
                                {capitalizedWords(item)}
                            </option>)
                        }
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">
                            Price
                        </span>
                    </label>

                    <select className="input input-bordered"
                        onChange={(e) => setPrice(e.target.value)}
                    >

                        <option disabled selected>
                            Chose One
                        </option>
                        <option value="asc">
                            From low to high
                        </option>
                        <option value="desc">
                            From high to low
                        </option>
                    </select>
                </div>

            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-16">
                {isLoading ? <div className="h-[85vh] flex justify-center items-center"><span className="loading loading-spinner text-secondary"></span></div> :
                    data?.data?.result?.map((services, idx) => <ServicesCarts key={idx} services={services} />)
                }
            </div>

            {
                isLoading ? <div className="h-[85vh] flex justify-center items-center"><span className="loading loading-spinner text-secondary"></span></div> :
                    <div className="join mt-4 border border-success">
                        <button onClick={handlePrevious} className="join-item btn btn-md"><IoIosArrowRoundBack></IoIosArrowRoundBack></button>
                        {
                            Array(totalPage)
                                .fill(0)
                                .map((item, index) => {

                                    const pageNumber = index + 1;

                                    return (
                                        <button key={pageNumber}
                                            onClick={() => setPage(pageNumber)}
                                            className={`${pageNumber === page ? "join-item btn btn-md btn-success text-white" : "join-item btn btn-md"}`}>
                                            {pageNumber}
                                        </button>
                                    )
                                })
                        }
                        <button onClick={handleNext} className="join-item btn btn-md"><IoIosArrowRoundForward></IoIosArrowRoundForward></button>
                    </div>
            }
            {/* <div className="join mt-4 border border-success">
                <button onClick={handlePrevious} className="join-item btn btn-md"><IoIosArrowRoundBack></IoIosArrowRoundBack></button>
                {
                    Array(totalPage)
                        .fill(0)
                        .map((item, index) => {

                            const pageNumber = index + 1;

                            return (
                                <button key={pageNumber}
                                    onClick={() => setPage(pageNumber)}
                                    className={`${pageNumber === page ? "join-item btn btn-md btn-success text-white" : "join-item btn btn-md"}`}>
                                    {pageNumber}
                                </button>
                            )
                        })
                }
                <button onClick={handleNext} className="join-item btn btn-md"><IoIosArrowRoundForward></IoIosArrowRoundForward></button>
            </div> */}

            {/* more example for chain array [...().fill().map()] */}
            {/* <div className="join mt-4">
                <button onClick={handlePrevious} className="join-item btn btn-md"><IoIosArrowRoundBack></IoIosArrowRoundBack></button>
                {
                    [...Array(totalPage).fill(0)].map((item, index) => (
                        <button key={index}
                            onClick={() => setPage(index)}
                            className="join-item btn btn-md">
                            {index}
                        </button>
                    ))
                }
                <button onClick={handleNext} className="join-item btn btn-md"><IoIosArrowRoundForward></IoIosArrowRoundForward></button>
            </div> */}
        </div>
    );
};

export default Services;