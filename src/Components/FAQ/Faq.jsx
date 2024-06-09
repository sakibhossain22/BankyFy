
const Faq = () => {

    return (
        <div className="mx-5 my-5">
            <p className="text-left text-red-500 font-semibold">FAQ</p>
            <h1 className="text-left font-extrabold text-3xl">Frequently Asked <br /> Questions</h1>
            <div className="lg:flex md:flex items-center justify-between mt-5 gap-5 text-left">
                <div className="text-white bg-red-500 p-4 rounded">
                    <h1 className="font-bold text-2xl mb-4">How secure is BankyFy?</h1>
                    <p>BankyFy uses top-tier encryption and biometric authentication to ensure your financial data is always safe and secure.</p>
                </div>
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4">Can I link multiple bank accounts?</h1>
                    <p className="text-gray-600">Yes, BankyFy seamlessly integrates with multiple bank accounts for comprehensive financial management in one place.</p>
                </div>
            </div>
            <div className="lg:flex md:flex items-center justify-between mt-5 gap-5 text-left">
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4">How do I set savings goals?</h1>
                    <p className="text-gray-600">Easily set and track savings goals within the app, with progress updates and automated saving options.</p>
                </div>
                <div className="text-white bg-red-500 p-4 rounded">
                    <h1 className="font-bold text-2xl mb-4">What support does BankyFy offer?</h1>
                    <p>BankyFy provides 24/7 customer support and a comprehensive help center for all your queries and needs.</p>
                </div>

            </div>
            <div className="lg:flex md:flex items-center justify-between mt-5 gap-5 text-left">
                <div className="text-white bg-red-500 p-4 rounded">
                    <h1 className="font-bold text-2xl mb-4">Does BankyFy offer investment tracking?</h1>
                    <p>Yes, BankyFy provides real-time tracking of your investments, including stocks, bonds, and mutual funds.</p>
                </div>
                <div className="p-4">
                    <h1 className="font-bold text-2xl mb-4">Can I customize my budget categories?</h1>
                    <p className="text-gray-600">Absolutely, BankyFy allows you to fully customize budget categories to fit your unique spending habits and preferences.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;