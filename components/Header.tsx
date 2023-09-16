"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UserCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";
import { useBoardStore } from "@/store/BoardStore";
import fetchSuggestion from "@/lib/fetchSuggestion";
import { Bot } from "lucide-react";

function Header() {
  const [board, searchString, setSearchString] = useBoardStore((state) => [
    state.board,
    state.searchString,
    state.setSearchString,
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [suggestion, setsuggestion] = useState<string>("");

  useEffect(() => {
    if (board.columns.size === 0) return;
    setLoading(true);

    const fetchSuggestionFunc = async () => {
      const suggestion = await fetchSuggestion(board);
      setsuggestion(suggestion);
      setLoading(false);
    };
    fetchSuggestionFunc();
  }, [board]);

  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055D1] rounded-md filter blur-3xl opacity-50 -z-50"></div>
        <div className="flex-box">
          {/* logo */}
          <Image
            src="/logo.png"
            alt="logo"
            width={300}
            height={100}
            className="w-44 md:w-56 object-contain pb-10 md:pb-0"
          />
          {/* <h1>ProjectAI Teammate</h1> */}
        </div>
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          {/* search box */}
          <form className="flex items-center space-s-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial ">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button hidden>Submit</button>
          </form>

          {/* avatar */}
          <Avatar name="Bright Coder" round size="50" color="#0055D1" />

          {/* <h1>hi</h1> */}
        </div>
      </div>
      <div className="flex items-center justify-center px-5 py-2 md:py-5 ">
        <p className="flex items-center text-sm font-litht p-5 pr-5 shodow-xl rounded-sl w-fit bg-white italic max-w-3xl text-[#0055D1] ">
          <Bot
            className={`inline-block H-10 w-10 text-[#0055D1] mr-1 ${
              loading && "animate-spin"
            }`}
          />
          {suggestion && !loading
            ? suggestion
            : "GPT is summarising your tasks for the day..."}
            {/* {suggestion && !loading
            && suggestion
             } */}
        </p>
      </div>
    </header>
  );
}

export default Header;
