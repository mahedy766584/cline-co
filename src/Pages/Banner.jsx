import Avatar from "./Avatar";

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="flex-1 space-y-7">
                    <h1 className="text-6xl font-bold">Quality Cleaning <br />
                        <span className="text-primary">for Your Home</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary text-white">Booking a Cleaning</button>
                        <button className="btn btn-outline btn-primary">Read More</button>
                    </div>
                    <hr />
                    <div>
                        <Avatar />
                    </div>
                </div>
                <div className="flex-1 h-[650px] items-center flex justify-center">
                    <img className="rounded-md shadow-md" src="https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;