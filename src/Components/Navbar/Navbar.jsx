import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu text-left menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <a className="hover:text-red-500 font-semibold" href="/">Home</a>
                            <a className="hover:text-red-500 font-semibold" href="/">About Us</a>
                            <a className="hover:text-red-500 font-semibold" href="/">Pricing</a>
                            <a className="hover:text-red-500 font-semibold" href="/">Features</a>
                        </ul>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='w-10' src={logo} />
                        <h1 className='text-xl font-bold'>BankFy</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex items-center gap-5 menu-horizontal px-1">
                        <a className="hover:text-red-500 font-semibold" href="/">Home</a>
                        <a className="hover:text-red-500 font-semibold" href="/">About Us</a>
                        <a className="hover:text-red-500 font-semibold" href="/">Pricing</a>
                        <a className="hover:text-red-500 font-semibold" href="/">Features</a>
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="text-white bg-black px-8 py-3 rounded">Download</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;