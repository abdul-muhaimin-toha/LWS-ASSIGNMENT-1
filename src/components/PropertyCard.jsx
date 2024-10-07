import PropertySvg from "./svg-components/PropertySvg";

function PropertyCard({ property }) {
  const { imageSrc, title, rentDetails, areaDetails } = property;
  return (
    <div className="rounded-lg border border-gray-600/10 bg-white p-4">
      <img src={imageSrc} alt={title} className="h-64 w-full" />
      <div className="p-6">
        <h4 className="cursor-pointer text-2xl font-bold">{title}</h4>

        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">
            {`${rentDetails.currency} ${rentDetails.amount}`}
          </span>{" "}
          /{rentDetails.rentType === "monthly" ? "M" : "W"}
        </div>
      </div>
      <div className="flex justify-between border-t border-gray-300 p-4 text-gray-700">
        <div className="flex items-center">
          <PropertySvg type="bed" />
          <p>
            <span className="font-bold text-gray-900">
              {areaDetails.bedroomCount}
            </span>{" "}
            Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          <PropertySvg type="bath" />
          <p>
            <span className="font-bold text-gray-900">
              {areaDetails.bathroomCount}
            </span>{" "}
            Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
