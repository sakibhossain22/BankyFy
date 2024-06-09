import img5 from '../../assets/5.png'
const Customize = () => {
    return (
        <div className='flex lg:flex-row flex-col-reverse my-5 items-center mx-5 justify-center'>
            <div className='lg:w-1/2'>
                <img className='w-full' src={img5} alt="" />
            </div>
            <div className='lg:w-1/2 text-left' >
                <h1 className='mb-5 text-xl font-bold'>Fully Customizable</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi impedit corrupti modi possimus atque est veniam quae expedita itaque aut exercitationem, libero ipsum nihil quibusdam totam magnam autem deleniti nam eaque? Distinctio sapiente pariatur adipisci eius error! Libero consequuntur beatae incidunt cumque modi quos. Suscipit ex exercitationem nihil maiores.</p>
            </div>
        </div>
    );
};

export default Customize;