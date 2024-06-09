import { BiBell } from 'react-icons/bi';
import img4 from '../../assets/4.png'
const Advantage = () => {
    return (
        <div className='flex flex-col lg:flex-row mx-5 items-center justify-center gap-4'>
            <div className='lg:w-1/2 text-left' >
                <div className='mb-5'>
                    <h1 className='text-red-500 uppercase'>Advantages</h1>
                    <h1 className='text-black font-bold lg:text-3xl text-2xl'>Why Choose BankyFy ?</h1>
                </div>
                <div>
                    <h1 className="font-bold flex items-center gap-2 mb-2 text-black">
                        <BiBell className='bg-orange-500 text-white text-2xl rounded-full p-1'></BiBell>
                        <span>Clever Notifications</span>
                    </h1>
                    <p className="text-gray-500">BankyFy is more than just a financial app; it's your personal financial advisor, committed to helping you achieve your financial goals with ease and confidence. Choose BankyFy for a smarter, more efficient way to manage your money.</p>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Advantage;