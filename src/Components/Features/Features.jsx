import img3 from '../../assets/3.png'
const Features = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse mx-5 items-center my-20 justify-evenly gap-5'>
            <div className='lg:w-1/2'>
                <img className='w-full' src={img3} alt="" />
            </div>
            <div className='lg:w-1/2 text-left'>
                <div className='mb-5'>
                    <h1 className='text-red-500 uppercase'>Features</h1>
                    <h1 className='text-black font-bold text-3xl'>BankyFy Premium</h1>
                </div>
                <div>
                    <div className='mt-3'>
                        <h1 className='font-bold mb-2 text-black'>Budgeting Interviews</h1>
                        <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error harum fugit voluptates quo optio minima vero nobis velit perspiciatis omnis! Doloribus, consequuntur. Sapiente quam culpa doloremque natus nulla, modi quis.</p>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold mb-2 text-black'>Budgeting Interviews</h1>
                        <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error harum fugit voluptates quo optio minima vero nobis velit perspiciatis omnis! Doloribus, consequuntur. Sapiente quam culpa doloremque natus nulla, modi quis.</p>
                    </div>
                    <div className='mt-3'>
                        <h1 className='font-bold mb-2 text-black'>Budgeting Interviews</h1>
                        <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error harum fugit voluptates quo optio minima vero nobis velit perspiciatis omnis! Doloribus, consequuntur. Sapiente quam culpa doloremque natus nulla, modi quis.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Features;