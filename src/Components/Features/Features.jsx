import { BiStar, BiWorld } from 'react-icons/bi';
import img3 from '../../assets/3.png'
import { BsTriangle } from 'react-icons/bs';
const Features = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse mx-5 items-center my-20 justify-evenly gap-5'>
            <div className='lg:w-1/2'>
                <img className='w-full' src={img3} alt="" />
            </div>
            <div className='lg:w-1/2 text-left'>
                <div className='mb-5'>
                    <h1 className='text-red-500 uppercase'>Features</h1>
                    <h1 className='text-black font-bold text-3xl'>Budget Tracking and Management</h1>
                </div>
                <div>
                    <div className='mt-3'>
                        <h1 className='font-bold flex items-center gap-2 mb-2 text-black'>
                            <BiStar className='text-orange-500 text-xl'></BiStar>
                            <span>Budgeting Interviews</span>
                        </h1>
                        <p className='text-gray-600'>Automatically categorize expenses (e.g., groceries, rent, utilities) to provide a clear overview of spending habits.Set up custom budgets for different categories and receive alerts when nearing the limits.</p>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold flex items-center gap-2 mb-2 text-black'>
                            <BiWorld className='text-orange-500 text-xl'></BiWorld>
                            <span>Real-time Transaction Monitoring</span>
                        </h1>
                        <p className='text-gray-600'>Notify users of transactions as they occur, enhancing security and awareness of their spending.Seamlessly integrate with multiple bank accounts to consolidate and display all transactions in one place.</p>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold flex items-center gap-2 mb-2 text-black'>
                            <BsTriangle className='text-orange-500 text-xl'></BsTriangle>
                            <span>Savings and Investment Tools</span>
                        </h1>
                        <p className='text-gray-600'>Enable users to set and track savings goals, showing progress and suggesting ways to save more.Provide tools to track investment portfolios, including real-time updates on stocks, bonds, and other assets.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;