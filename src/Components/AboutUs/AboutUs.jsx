import img6 from '../../assets/6.png'
const AboutUs = () => {
    return (
        <div>
            <h5 className='uppercase font-semibold text-sm'>Testimonial</h5>
            <h1 className='text-center font-extrabold text-3xl'>What Our Users <br /> Say About Us ? </h1>
            <div className='flex lg:flex-row flex-col-reverse items-center mx-5 mt-6 justify-center'>
                <div className='lg:w-1/2'>
                    <img className='w-full' src={img6} alt="" />
                </div>
                <div className='lg:w-1/2 text-left' >
                    <h1 className='mb-5 lg:text-4xl text-xl font-bold'>The Best Financial Accounting App Ever !</h1>
                    <p className='text-gray-500'>BankyFy offers fully customizable budget management, real-time financial insights, and smart savings tools. With personalized budgeting, instant notifications, and seamless account integration, managing your money is effortless. Achieve savings goals with automated features and track investments in real time. Enjoy a user-friendly interface, top-tier security, and 24/7 support. Choose BankyFy for smarter financial management.</p>
                    <p className='font-bold mt-5'>Nick Jones</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;