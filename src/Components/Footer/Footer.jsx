import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='lg:flex items-center justify-evenly text-start py-5 mx-5 gap-5'>
                <div>
                    <div className='flex items-center'>
                        <img className='w-10' src={logo} />
                        <h1 className='text-xl font-bold'>BankFy</h1>
                    </div>
                    <p>
                        <span>Phone : </span>
                        <span>+1234567890</span>
                    </p>
                    <p>
                        <span>Email : </span>
                        <span>help@bankyfy.com</span>
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Links</h1>
                    <span className='block'>Home</span>
                    <span className='block'>About Us</span>
                    <span className='block'>Booking</span>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Legal</h1>
                    <span className='block'>Terms Of Use</span>
                    <span className='block'>Privacy Policy</span>
                    <span className='block'>Cookies Policy</span>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Product</h1>
                    <span className='block'>Tales Tour</span>
                    <span className='block'>Live Chat</span>
                    <span className='block'>Reviews</span>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>Newsletter</h1>
                    <div>
                        <span>Stay Up to Date</span>
                        <form>
                            <input className='border w-28 py-3' type="email" placeholder='Your email' />
                            <input className='bg-black px-6 py-3 text-white font-bold' type="submit" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
            <hr className='text-black mx-5 my-5' />
            <span className='text-center font-bold'>Copyright 2024 BankyFy.com All Right Reserved</span>
        </div>
    );
};

export default Footer;