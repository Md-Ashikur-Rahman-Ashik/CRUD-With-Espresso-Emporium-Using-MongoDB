const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl gap-4 p-4">
      <figure className="w-1/2">
        <img src={photo} className="rounded-xl" alt="Movie" />
      </figure>
      <div className="flex justify-between w-full">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
