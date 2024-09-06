import React from "react";

const Leaderboard = () => {
  return (
    <div className="bg-[#E7F0FE] h-screen w-screen relative">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="absolute left-10 top-10">
          <img src="/assets/vector.svg" alt="icon" className="w-10 h-10" />
        </div>
        <div className="absolute right-10 top-10">
          <img src="/assets/vector-2.svg" alt="svg-icon" className="w-10 h-10" />
        </div>
        <div className="absolute w-full text-center top-8">
          <h1 className="text-[4rem] font-semibold text-[#2C2C2C]">Leaderboard</h1>
        </div>
        <div className="absolute w-full flex justify-center top-40">
          <div className="flex space-x-16 bg-white p-4 rounded-lg shadow-md">
            <div className="text-[#2C2C2C] text-[1.5rem] font-medium">Organisation</div>
            <div className="text-[#2C2C2C] text-[1.5rem] font-medium">Department</div>
          </div>
        </div>
        <div className="absolute left-20 bottom-20 flex items-end space-x-4">
          <div className="relative w-[160px]">
            <div className="w-[100%] h-[280px] bg-[#3B5987] rounded-t-3xl border-2 border-white"></div>
            <img src="/assets/ellipse-5.png" alt="Jackson" className="absolute -top-20 left-10 w-[80px] h-[80px] rounded-full border-4 border-[#999999]" />
            <div className="absolute left-0 top-[50%] text-center w-full text-white font-medium text-[1.1rem]">
              Jackson
              <div className="text-[1.5rem]">1847 pts</div>
            </div>
          </div>
          <div className="relative w-[160px]">
            <div className="w-[100%] h-[400px] bg-[#3B5987] rounded-t-3xl border-2 border-white"></div>
            <img src="/assets/ellipse-4.png" alt="Eider" className="absolute -top-24 left-8 w-[100px] h-[100px] rounded-full border-4 border-[#FFAA00]" />
            <div className="absolute left-0 top-[50%] text-center w-full text-white font-medium text-[1.1rem]">
              Eider
              <div className="text-[1.5rem]">2430 pts</div>
            </div>
            <div className="absolute left-20 top-[-170px]">
              <div className="w-[76px] h-[60px] relative">
                <div className="w-[63px] h-[45px] bg-[#FFAA00] absolute left-[6.75px] top-[15.75px]"></div>
                <div className="w-[18px] h-[18px] bg-[#FFAA00] rounded-full absolute top-0 left-[29.25px]"></div>
                <div className="w-[13.5px] h-[13.5px] bg-[#BE9502] rounded-full absolute left-[31.5px] top-[33.75px]"></div>
                <div className="w-[11.25px] h-[11.25px] bg-[#FFAA00] rounded-full absolute top-[18px] left-[65.25px]"></div>
                <div className="w-[11.25px] h-[11.25px] bg-[#FFAA00] rounded-full absolute top-[18px] left-[0px]"></div>
                <div className="w-[6.75px] h-[6.75px] bg-[#BE9502] rounded-full absolute top-[40.5px] left-[18px]"></div>
                <div className="w-[6.75px] h-[6.75px] bg-[#BE9502] rounded-full absolute top-[40.5px] left-[51.75px]"></div>
              </div>
            </div>
          </div>
          <div className="relative w-[160px]">
            <div className="w-[100%] h-[280px] bg-[#3B5987] rounded-t-3xl border-2 border-white"></div>
            <img src="/assets/ellipse-6.png" alt="Emma Aria" className="absolute -top-20 left-10 w-[80px] h-[80px] rounded-full border-4 border-[#BA4615]" />
            <div className="absolute left-0 top-[50%] text-center w-full text-white font-medium text-[1.1rem]">
              Emma Aria
              <div className="text-[1.5rem]">1674 pts</div>
            </div>
          </div>
        </div>
        <div className="absolute right-10 top-48 w-[500px] bg-[#3B5987] rounded-3xl border-2 border-white">
          {[
            { place: 4, name: "Sebastian", score: 1124, rankChange: "up" },
            { place: 5, name: "Jason", score: 875, rankChange: "down" },
            { place: 6, name: "Natalie", score: 774, rankChange: "up" },
            { place: 7, name: "Serenity", score: 723, rankChange: "down" },
            { place: 8, name: "Hannah", score: 559, rankChange: "up" },
          ].map((player, index) => (
            <div className="flex items-center justify-between px-4 py-4 relative" key={index}>
              <div className="flex items-center">
                <div className="relative w-[75px] h-[75px] rounded-full border-4 border-white flex items-center justify-center">
                  <div className="text-white font-bold text-2xl">#{player.place}</div>
                </div>
                <div className="ml-4 text-white font-medium text-lg">{player.name}</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-white font-bold text-lg">{player.score} pts</div>
                <img
                  src={player.rankChange === "up" ? "/assets/polygon-5.svg" : "/assets/polygon-4.svg"}
                  alt="Rank Change"
                  className="w-4 h-4 mt-2"
                />
              </div>
              {index < 4 && (
                <div className="absolute left-0 right-0 bottom-0 h-[1.5px] bg-white opacity-66"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="absolute left-0 top-0 p-2">
          <img src="/assets/vector.svg" alt="icon" className="w-8 h-8" />
        </div>
        <div className="absolute right-0 top-0 p-2">
          <img src="/assets/vector-2.svg" alt="svg-icon" className="w-8 h-8" />
        </div>
        <div className="absolute w-full text-center top-12">
          <h1 className="text-[2.5rem] font-semibold text-[#2C2C2C]">Leaderboard</h1>
        </div>
        <div className="absolute w-full flex justify-between top-28 left-0 right-0 px-4">
          <div className="relative w-[120px]">
            <div className="w-[100%] h-[200px] bg-[#3B5987] rounded-t-3xl border-2 border-white"></div>
            <img src="/assets/ellipse-5.png" alt="Jackson" className="absolute -top-12 left-6 w-[60px] h-[60px] rounded-full border-4 border-[#999999]" />
            <div className="absolute left-0 top-[50%] text-center w-full text-white font-medium text-[0.9rem]">
              Jackson
              <div className="text-[1rem]">1847 pts</div>
            </div>
          </div>
          <div className="relative w-[120px]">
            <div className="w-[100%] h-[300px] bg-[#3B5987] rounded-t-3xl border-2 border-white"></div>
            <img src="/assets/ellipse-4.png" alt="Eider" className="absolute -top-16 left-6 w-[70px] h-[70px] rounded-full border-4 border-[#FFAA00]" />
            <div className="absolute left-0 top-[50%] text-center w-full text-white font-medium text-[0.9rem]">
              Eider
              <div className="text-[1rem]">2430 pts</div>
            </div>
            <div className="absolute left-6 top-[-130px]">
              <div className="w-[60px] h-[50px] relative">
                <div className="w-[52px] h-[37px] bg-[#FFAA00] absolute left-[5.5px] top-[12.75px]"></div>
                <div className="w-[15px] h-[15px] bg-[#FFAA00] rounded-full absolute top-0 left-[23px]"></div>
                <div className="w-[11px] h-[11px] bg-[#BE9502] rounded-full absolute left-[24px] top-[27.75px]"></div>
                <div className="w-[10px] h-[10px] bg-[#FFAA00] rounded-full absolute top-[13px] left-[46.25px]"></div>
                <div className="w-[10px] h-[10px] bg-[#FFAA00] rounded-full absolute top-[13px] left-[0px]"></div>
                <div className="w-[6px] h-[6px] bg-[#BE9502] rounded-full absolute top-[27px] left-[13px]"></div>
                <div className="w-[6px] h-[6px] bg-[#BE9502] rounded-full absolute top-[27px] left-[33px]"></div>
              </div>
            </div>
          </div>
          <div className="relative w-[120px]">
            <div className="w-[100%] h-[200px] bg-[#3B5987] rounded-t-3xl border-2 border-white"></div>
            <img src="/assets/ellipse-6.png" alt="Emma Aria" className="absolute -top-12 left-6 w-[60px] h-[60px] rounded-full border-4 border-[#BA4615]" />
            <div className="absolute left-0 top-[50%] text-center w-full text-white font-medium text-[0.9rem]">
              Emma Aria
              <div className="text-[1rem]">1674 pts</div>
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 right-0 bg-[#3B5987] rounded-3xl border-2 border-white p-2">
          {[
            { place: 4, name: "Sebastian", score: 1124, rankChange: "up" },
            { place: 5, name: "Jason", score: 875, rankChange: "down" },
            { place: 6, name: "Natalie", score: 774, rankChange: "up" },
            { place: 7, name: "Serenity", score: 723, rankChange: "down" },
            { place: 8, name: "Hannah", score: 559, rankChange: "up" },
          ].map((player, index) => (
            <div className="flex items-center justify-between px-2 py-2 relative" key={index}>
              <div className="flex items-center">
                <div className="relative w-[50px] h-[50px] rounded-full border-4 border-white flex items-center justify-center">
                  <div className="text-white font-bold text-xl">#{player.place}</div>
                </div>
                <div className="ml-2 text-white font-medium text-sm">{player.name}</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-white font-bold text-sm">{player.score} pts</div>
                <img
                  src={player.rankChange === "up" ? "/assets/polygon-5.svg" : "/assets/polygon-4.svg"}
                  alt="Rank Change"
                  className="w-3 h-3 mt-1"
                />
              </div>
              {index < 4 && (
                <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-white opacity-66"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
