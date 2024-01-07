import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <div className="container mx-auto mt-12">
           <div className='md:bg-[#f99f1c] rounded-xl flex flex-col lg:flex-row justify-center items-center gap-5 mx-5 xl:mx-0'>
                <div className="space-y-5 p-4 md:p-0 lg:p-2 xl:p-0">
                    <h1 className="text-black md:text-[#ffefe7]  text-5xl font-bold">
                        Deliver Food To Your <br /> Door Step|
                    </h1>
                    <p  className="text-black md:text-[#ffefe7] text-lg font-light">Authentic Food|,Quick Service,Fast Delivery</p>
                </div>
                <img src={banner} alt="Banner.png" className="bg-[#fd9460] md:bg-[#f99f1c] rounded-2xl md:rounded-none" />
           </div>
        </div>
    );
};

export default Banner;