const AddCoffee = () => {
  return (
    <div>
      <h2>Add A Coffee</h2>
      <form>
        <div className="flex">
          <div className="w-1/5">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-black"
            >
              Coffee Name
            </label>
            <div className="flex">
              <input
                type="text"
                name="url"
                id="url"
                placeholder="Coffee Name"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
          <div className="w-1/5">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-black"
            >
              Available Quantity
            </label>
            <div className="flex">
              <input
                type="text"
                name="url"
                id="url"
                placeholder="Available Quantity"
                className="flex py-2 flex-1 border sm:text-sm rounded-r-md focus:ring-inset border-gray-300 px-2 text-black bg-white focus:ring-violet-400"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
