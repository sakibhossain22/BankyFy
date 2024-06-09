import img7 from '../../assets/7.png'

const Download = () => {
    return (
        <div className='bg-black my-10 flex lg:flex-row flex-col-reverse items-center lg:py-0 py-2 justify-between mx-5'>
            <div className='text-left lg:w-1/2 px-8'>
                <h1 className='lg:text-4xl text-2xl mb-4 text-white font-bold '>Ready To Get Started ? </h1>
                <p className='text-gray-300 lg:text-base text-sm mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sapiente atque quas <br />ipsam voluptatem voluptatibus?</p>
                <button className='bg-white px-6 lg:w-48 mb-4 lg:mb-0 w-full py-3 font-bold rounded'>Download App</button>
            </div>
            <div>
                <img className='lg:h-96 ' src={img7} alt="" />
            </div>
        </div>
    );
};

export default Download;