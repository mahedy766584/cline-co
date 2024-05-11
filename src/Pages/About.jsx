/* eslint-disable react/no-unescaped-entities */

const About = () => {
    return (
        <div className="lg:flex justify-between gap-8 items-center mt-20">
            <div className="flex-1">
                <p className="text-3xl font-semibold"> About <span className="text-primary text-3xl font-semibold">Cline-Co</span> <br />
                    <span className="text-base">
                        Welcome to Cline Co, where innovation meets excellence. Founded in [year], we are a leading [industry/sector] company dedicated to delivering high-quality [products/services] to our valued customers. <br />

                        At Cline Co, we pride ourselves on our commitment to innovation, quality, and customer satisfaction. Our team of highly skilled professionals works tirelessly to design and produce [describe products/services], leveraging the latest technologies and industry best practices. <br />

                        Our mission is to [mission statement, e.g., "provide innovative solutions that empower our customers to achieve their goals"]. We believe in fostering long-term relationships with our clients, built on trust, transparency, and mutual respect. <br /></span></p>
            </div>
            <div className="flex-1">
                <div className="flex-1  items-center flex justify-center">
                    <img className="rounded-md shadow-md" src="https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;