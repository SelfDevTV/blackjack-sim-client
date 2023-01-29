import Link from "next/link";

const fetchSimulation = async (simAmount: string, playerAmount: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BLACK_JACK_API}?roundsToSimulate=${simAmount}&numOfPlayers=${playerAmount}`
  );
  return res.json();
};

export default async function Result({ searchParams }: any) {
  const data = await fetchSimulation(
    searchParams.roundsToSimulate,
    searchParams.numOfPlayers
  );

  console.log("data is: ", data);

  if (!data || !data.players || data.players.length === 0) {
    return (
      <main className="w-10/12 m-auto py-12 flex-1">
        <h1 className="text-4xl text-blue-700 mb-4 font-bold">No Data yet</h1>
        <Link
          href="/"
          className="px-2 py-1 border-2 rounded-lg animate-pulse  border-blue-700"
        >
          {" "}
          Create a Simulation{" "}
        </Link>
      </main>
    );
  }
  return (
    <main className="w-10/12 m-auto py-12 flex-1">
      <div className="flex flex-col">
        <div className="grid gap-2">
          <h1 className="text-2xl text-blue-700">Statistics for Simulation</h1>
          <h2 className="text-xl text-gray-700 opacity-70 mb-2">
            Ran with {searchParams.roundsToSimulate} simulations and{" "}
            {searchParams.numOfPlayers} players
          </h2>
        </div>
        <table className="table-auto w-full text-left shadow-md rounded-lg">
          <thead>
            <tr className="bg-indigo-500 text-white">
              {Object.keys(data.players[0]).map((key) => {
                return (
                  <>
                    <th className="px-4 py-2">{key}</th>
                  </>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.players.map((player: any, i: number) => {
              return (
                <>
                  <tr className={`${i % 2 == 0 ? "bg-white" : "bg-gray-100"}`}>
                    {Object.keys(player).map((key) => {
                      return (
                        <>
                          <td className="border px-4 py-2">{player[key]}</td>
                        </>
                      );
                    })}
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="mt-4">
          <h2 className="text-2xl text-gray-700 opacity-70">Dealer Stats:</h2>
          <ul>
            <li>Blackjack Count: {data.dealerStats[0].blackjack}</li>
            <li>Lost Count: {data.dealerStats[0].looses}</li>
            <li>Tie Count: {data.dealerStats[0].ties}</li>
            <li>Win Count: {data.dealerStats[0].wins}</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-gray-700 opacity-70">
            More Statistics:
          </h2>
          <ul>
            <li>Player Count: {data.playerCount}</li>
            <li>
              Rounds Simulated Per Player: {data.roundsSimulatedPerPlayer}
            </li>
            <li>Rounds Simulated Total: {data.roundsSimulatedTotal}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
