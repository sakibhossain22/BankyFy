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
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sequi impedit corrupti modi possimus atque est veniam quae expedita itaque aut exercitationem, libero ipsum nihil quibusdam totam magnam autem deleniti nam eaque? Distinctio sapiente pariatur adipisci eius error! Libero consequuntur beatae incidunt cumque modi quos. Suscipit ex exercitationem nihil maiores.</p>
                    <p className='font-bold mt-5'>Nick Jones</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;