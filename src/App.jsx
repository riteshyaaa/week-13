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

import { DropDown } from "./components/Sidebar/dropDown";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SidebarToggle } from "./components/Sidebar/SideBarToggle";

// export default App;

// --------------------------------------------------------------------------------

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

export function App() { 
  return (
    <div>
       
      <Sidebar />
    </div>
  );
}