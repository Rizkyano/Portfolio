const projectCard = ({ title, description, imageUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default projectCard;
