import { IoMdSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
    return (
        <>
            <nav className="m-4 flex gap-4 md:gap-8">
                <div className="text-white bg-jet p-2 md:p-4 w-1/5 md:w-2/10 rounded-lg text-center flex items-center justify-center">
                 <a className="font-bit-count text-3xl" href="./">{window.innerWidth > 768 ? "WalletSeer" : "WS"}</a>
                </div>
                <div className="flex gap-2 items-center text-white bg-jet p-2 md:p-4 w-4/5 md:w-8/10 rounded-lg">
                 <div className="relative">
                    <input type="text" name="" id="" className="outline-none border-white border-1 rounded-md indent-2" placeholder="Enter Wallet Address..." />
                    <div className="absolute right-[1px] top-[1px] bg-white text-dim-gray p-1 rounded-r-md"><CiSettings /></div>
                 </div>
                    <button className="bg-dim-gray text-white p-2 md:p-4 rounded-lg"><IoMdSearch /></button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;