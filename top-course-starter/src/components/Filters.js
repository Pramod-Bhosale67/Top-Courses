
function Filters({filterData, category, setCategory}){

    const filterHandler = (title) => {
        setCategory(title);
    }


    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">

        {/* I can create this & call the Filters in Apps.js 5 times with props value since we want 5 buttons
            <button>{value}</button> 
        */}

{/* But to avid these 5 times calling we created the button with the help of map funct which adds the
    function to each data of filter */}

        {/* map mainly works for each elem in array. Hence here for each elem
        in the dataFilter we are creating the button */}

            {filterData.map((data) => {
               return (<button key={data.id} onClick={() => filterHandler(data.title)}
                 className={`text-lg px-2 py-1 rounded-md font-medium 
                text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
                ${category === data.title ? "bg-opacity-60 border-white":"bg-opacity-40 border-transparent" }
                `}> 
               
               {data.title} 
               
               </button>)
            })}
        </div>
    );
}

export default Filters;