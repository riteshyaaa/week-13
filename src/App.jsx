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

const App =  () => {


  return (
    <div>
      <div className = " flex flex-col items-center justify-center h-screen  bg-blue-950">
        <h1 className="text-white text-4xl font-bold mb-20"> webinarr.gg</h1>
        <h2 className="text-4xl m-10" >Verify your age</h2>
       
        <div className="flex flex-col grid-cols-12">
        <label className = "text-lg text-white mb-2 ">
        Please confirm your birth year. This data will not be stored 
        </label>

        <input type = "text" placeholder="Your birth year" className="border border-grey-300  rounded-2xl py-2 px-4 mb-4" /> 
        <button className="bg-red-300 hover:bg-blue-200 rounded-2xl  text-white py-2 px-4 ">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default App;
