import useStore from "../utils/Store";

const Dashboard = () => {
    const { tokenBalancesInfo } = useStore();
    return (
        <>
        <div className="m-4 flex justify-between gap-3 flex-col md:flex-row">
            <div className="text-white bg-jet md:w-3/10 rounded-lg p-2 md:p-4 font-semibold text-xl ">
                <h1 className="font-bit-count">Token Balances</h1>
                {tokenBalancesInfo.map((token) => (
                    <div key={token.address}>
                        <p>{token.symbol}</p>
                        <p>{token.balance}</p>
                    </div>
                ))}
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