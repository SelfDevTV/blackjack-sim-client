"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [simAmount, setSimAmount] = useState("0");
  const [playerAmount, setPlayerAmount] = useState("0");

  const router = useRouter();

  return (
    <main className="w-10/12 m-auto py-12 flex-1">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex gap-2 flex-col text-center">
          <h1 className="text-blue-700 text-3xl">Blackjack Simulator</h1>
          <h2 className="text-gray-600 text-sm">
            Simulate 1000s of Blackjacke Games -{" "}
            <span className="opacity-70 text-blue-700">
              Final Project for Harvard CS50
            </span>
          </h2>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (Number(simAmount) <= 0 || Number(playerAmount) <= 0) return;
            router.push(
              `/result?roundsToSimulate=${simAmount}&numOfPlayers=${playerAmount}`
            );
          }}
          className="mt-8 flex flex-col justify-center w-3/12 bg-orange-50 items-center p-4 rounded-xl gap-2"
        >
          <label
            className="font-bold text-gray-600 text-lg"
            htmlFor="simAmount"
          >
            How many games to simulate:
          </label>
          <input
            className="bg-blue-100 text-gray-600 text-center inline-block px-2 py-1 rounded-lg placeholder:text-center"
            type="number"
            placeholder="Sim Amount.."
            name="simAmount"
            value={simAmount}
            onChange={(e) => setSimAmount(e.target.value)}
          />
          <label
            className="font-bold text-gray-600 text-lg mt-4"
            htmlFor="playerAmount"
          >
            How many players on table:
          </label>
          <input
            className="bg-blue-100 text-gray-600 text-center inline-block px-2 py-1 rounded-lg placeholder:text-center"
            type="number"
            placeholder="Player Amount.."
            name="playerAmount"
            value={playerAmount}
            onChange={(e) => setPlayerAmount(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 text-white font-bold px-4 py-2 rounded-lg mt-6"
          >
            Run Simulation
          </button>
        </form>
      </div>
    </main>
  );
}
