
const Selected = () => {
    return (
        <div className="flex justify-center items-center gap-10 border border-primary px-8 py-2 rounded-md">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-outline btn-primary">Category</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-outline btn-primary">Price</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>From low to high</a></li>
                    <li><a>From high to low</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Selected;