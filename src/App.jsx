import { useState } from "react";
// const App = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center h-screen bg-blue-950">
//         <h1 className="text-4xl  text-white font-bold p-6 m-10">Webinarr.gg</h1>
//         <h2 className="p-6  mb-10 text-3xl font-bold">Verify your age</h2>
//         <div className="flex flex-col items-center justify-center">
//           <label className="text-lg text-white mb-4">
//             Please enter your birth year
//           </label>
//           <input
//             type="text"
//             placeholder="Your birth year "
//             className="border border-gray-300 rounded-2xl py-2 px-4 mb-4"
//           />
//           <button className="bg-red-300 text-white ml-4 py-2 px-4 rounded-2xl hover:bg-blue-600">
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default App;

// --------------------------------------------------------------------------------

// import { DropDown } from "./components/Sidebar/dropDown";
// import { Sidebar } from "./components/Sidebar/Sidebar";
// import { SidebarToggle } from "./components/Sidebar/SideBarToggle";

// const App =  () => {

//   return (
//     <div>
//       <div className = " flex flex-col items-center justify-center h-screen  bg-blue-950">
//         <h1 className="text-white text-4xl font-bold mb-20"> webinarr.gg</h1>
//         <h2 className="text-4xl m-10" >Verify your age</h2>

//         <div className="flex flex-col grid-cols-12">
//         <label className = "text-lg text-white mb-2 ">
//         Please confirm your birth year. This data will not be stored
//         </label>

//         <input type = "text" placeholder="Your birth year" className="border border-grey-300 outline-none rounded-2xl py-2 px-4 mb-4" />
//         <button className="bg-red-300 hover:bg-blue-200 rounded-2xl  text-white py-2 px-4 ">Continue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App;

// Automatic sidebar close when you open it on mobile devices

// import { Sidebar } from "./components/Sidebar/Sidebar";
// const App =() => {

//   return (
//     // <div> <Sidebar /></div>

// <div className="flex">
//      <div className= " transition-all delay-1000 bg-blue-50 md:w-96 md:bg-green-200  w-0 h-screen ">Sidebar</div>
//      <div className="bg-cyan-300 w-400  h-screen">profile</div>

//     </div>
//   )
// }
// export default App;

// ---------------------------------------------

// export function App() {
//   return (
//     <div>

//       <Sidebar />
//     </div>
//   );
// }

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <MainContent sidebarOpen={sidebarOpen} />
    </div>
  );
}

function SidebarToggle() {
  return (
    <div className="flex items-center justify-center w-0 md:w-10 h-10 bg-red-300 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-white"
      >
        <path d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </div>
  );
}

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  if (!sidebarOpen) {
    return (
      <div
        className="fixed top-0 left-0 bg-slate-400  m-2  hover:bg-pink-200 rounded-full w-10 h-10 flex items-center justify-center   "
        onClick={() => {
          setSidebarOpen(!sidebarOpen);
        }}
      >
        <SidebarToggle />
      </div>
    );
  }
  return (
    <div className="w-0  md:w-96   h-screen bg-red-100">
      <div>
        <div
          className="cursor-pointer  hover:bg-[#414a4c]  m-2 rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        >
          <SidebarToggle />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="w-full">
      <div className="h-72 bg-black"></div>
      <div className="grid grid-cols-11 gap-8 p-8">
        <div className="h-96 rounded-2xl  bg-red-200 col-span-2 -translate-y-24 shadow-lg"></div>
        <div className="h-96 rounded-2xl  bg-green-200 col-span-6 shadow-lg"></div>
        <div className="h-96 rounded-2xl  bg-yellow-200 col-span-3 shadow-lg"></div>
      </div>
    </div>
  );
}

export default App;
