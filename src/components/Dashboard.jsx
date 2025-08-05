import useStore from "../utils/Store";

const Dashboard = () => {
    const { tokenBalancesInfo } = useStore();
    return (
        <>
        <div className="m-4 flex justify-between gap-3 flex-col md:flex-row font-semibold">
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-4 ">
                <h1 className="font-bit-count text-2xl">Token Balances</h1>
                <div className="flex flex-col gap-3 mt-3">
                    {tokenBalancesInfo.map((token) => (
                        <div key={token.contract_address} className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <img src={token.logo_url} alt="token logo" className="h-auto w-8 rounded-full" />
                                <p>{token.contract_display_name}</p>
                            </div>
                            <p>{token.pretty_quote}</p>
                        </div>
                ))}
                </div>
            </div>
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-2 md:p-4 font-semibold text-xl ">
                 <h1 className="font-bit-count">NFT</h1>
            </div>
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-2 md:p-4 font-semibold text-xl ">
                 <h1 className="font-bit-count">Transactions</h1>
            </div>
        </div>
        </>
    );
}

export default Dashboard;