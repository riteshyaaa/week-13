// export function Sidebar() {
//   return (
//     <div className="flex  flex-cols items-center justify-center h-screen bg-blue-400   ">
//       <div className="bg-blue-200   rounded-3xl underline hover:decoration-pink-500 hover:bg-cyan-900 p-2 hover:p-4 transition-all duration-1000 ">
//         <h1 className="text-white text-4xl font-bold ">webinarr.gg</h1>
//       </div>
//     </div>
//   );
// }

import { LightMode } from "../LightMode";
import { DropDown } from "./dropDown";
export function Sidebar() {
  return (
    <div className="flex">
      <div className="bg-blue-50 md:w-96   dark:bg-gray-900 dark:text-white flex md:bg-green-200 w-0 h-screen transition-all delay-150 duration-600">
        <DropDown />
        Sidebar
      </div>
      <div className="p-4 flex justify-between bg-cyan-300 dark:bg-[#FFF8F0] dark:text-gray-900 text-2xl w-full h-screen  ">
        main content
        <div className="dark:text-gray-900 p-2">
          <button
            onClick={() => {
              const themes = document
                .querySelector("html")
                .classList.toggle("dark");
              console.log(themes);
            }}
          >
            <LightMode />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
