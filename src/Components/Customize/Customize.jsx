import img5 from '../../assets/5.png'
const Customize = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse my-5 items-center mx-5 justify-center'>
            <div className='lg:w-1/2'>
                <img className='w-full' src={img5} alt="" />
            </div>
            <div className='lg:w-1/2 text-left' >
                <h1 className='mb-5 text-xl font-bold'>Fully Customizable</h1>
                <p className='text-gray-500'>BankyFy offers fully customizable budget management, real-time financial insights, and smart savings tools. With personalized budgeting, instant notifications, and seamless account integration, managing your money is effortless. Achieve savings goals with automated features and track investments in real time. Enjoy a user-friendly interface, top-tier security, and 24/7 support. Choose BankyFy for smarter financial management.</p>
            </div>
        </div>
    );
};

export default Customize;