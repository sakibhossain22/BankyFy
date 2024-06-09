import play from '../../assets/play.png'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import blend from '../../assets/blend.png'
const Banner = () => {
    return (
        <div className='lg:flex items-center my-5 justify-evenly gap-14 mx-5'>
            <div className='lg:w-1/2 relative text-start'>
                <div className="relative invisible lg:visible">
                    <img className="absolute w-72 -top-28 left-1/2 mix-blend-screen" src={blend} alt="" />
                </div>

                <div>
                    <h1 className='lg:text-6xl text-2xl text-black font-extrabold'>Make The Best Financial Decisions</h1>
                    <p className='my-6 text-sm lg:text-base text-gray-500 '>Gain insights and strategies to optimize your finances, ensuring smart investments, savings, and spending for a secure financial future.</p>
                    <div className='flex items-center lg:gap-4'>
                        <button className='bg-black px-6 py-3 rounded text-white '>Get Started</button>
                        <button className='flex rounded items-center gap-3 px-6 py-3'>
                            <img className='w-5 p-1 border-black border rounded-full' src={play} alt="" />
                            <h3>Play Video</h3>
                        </button>
                    </div>
                    <img className='left-0 absolute invisible lg:visible' src={img2} alt="" />
                </div>
            </div>
            <div className='lg:w-1/2 lg:mt-0 mt-5'>
                <img src={img1} alt="" />
            </div>
        </div>
    );
};

export default Banner;