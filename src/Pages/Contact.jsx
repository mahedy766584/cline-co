
const Contact = () => {
    return (
        <div className="mt-16 flex flex-col justify-center items-center">
            <h1 className="text-3xl font-semibold text-primary">Contact Us</h1>
            <div className="grid grid-cols-3 text-base font-medium text-gray-700 gap-8 mt-5">
                <div>
                    <p>
                        Cline Co Headquarters <br />

                        Address: 
                        1234 Innovation Drive
                        City, State, ZIP Code <br />

                        Phone: 
                        (123) 456-7890 <br />

                        Email: 
                        info@clineco.com <br />

                        Business Hours: 
                        Monday - Friday: 9:00 AM - 5:00 PM
                        Saturday & Sunday: Closed
                    </p>
                </div>
                <div>
                    <p>
                        Customer Support <br />

                        Phone:
                        (123) 456-7891 <br />

                        Email:
                        support@clineco.com <br />

                        Hours:
                        Monday - Friday: 8:00 AM - 8:00 PM
                        Saturday: 9:00 AM - 5:00 PM
                        Sunday: Closed
                    </p>
                </div>
                <div>
                    <p>
                        Sales Inquiries <br />

                        Phone:
                        (123) 456-7892 <br />

                        Email:
                        sales@clineco.com <br />

                        Hours:
                        Monday - Friday: 9:00 AM - 6:00 PM
                        Saturday: 10:00 AM - 4:00 PM
                        Sunday: Closed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;