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
                    <h1 className="font-bold text-black">Clever Notifications</h1>
                    <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorum praesentium quos expedita eos veritatis nesciunt, natus recusandae ab officia illum numquam sint corporis accusamus debitis. Placeat recusandae dignissimos molestias, eum doloribus cumque. Nemo ipsa mollitia modi debitis. Beatae impedit ratione fugiat earum possimus, optio voluptas consequatur</p>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img src={img4} alt="" />
            </div>
        </div>
    );
};

export default Advantage;