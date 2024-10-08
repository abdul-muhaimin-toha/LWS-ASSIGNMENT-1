import SectionHeading from "../SectionHeading";
import PropertyCard from "../PropertyCard";

function PropertySection() {
  const properties = [
    {
      id: 0,
      imageSrc:
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fHww",
      title: "Modern Design villa",
      rentDetails: {
        currency: "$",
        amount: 3000.0,
        rentType: "monthly",
      },
      areaDetails: {
        bedroomCount: 3,
        bathroomCount: 2,
      },
    },
    {
      id: 1,
      imageSrc:
        "https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Luxury Loft Apartment",
      rentDetails: {
        currency: "€",
        amount: 2500.0,
        rentType: "monthly",
      },
      areaDetails: {
        bedroomCount: 2,
        bathroomCount: 1,
      },
    },
    {
      id: 2,
      imageSrc:
        "https://images.unsplash.com/photo-1527772482340-7895c3f2b3f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Cozy Suburban Home",
      rentDetails: {
        currency: "$",
        amount: 1800.0,
        rentType: "monthly",
      },
      areaDetails: {
        bedroomCount: 4,
        bathroomCount: 3,
      },
    },
    {
      id: 3,
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Beachfront Bungalow",
      rentDetails: {
        currency: "£",
        amount: 3500.0,
        rentType: "weekly",
      },
      areaDetails: {
        bedroomCount: 3,
        bathroomCount: 2,
      },
    },
    {
      id: 4,
      imageSrc:
        "https://images.unsplash.com/photo-1501876725168-00c445821c9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
      title: "City Center Apartment",
      rentDetails: {
        currency: "$",
        amount: 2200.0,
        rentType: "monthly",
      },
      areaDetails: {
        bedroomCount: 1,
        bathroomCount: 1,
      },
    },
    {
      id: 5,
      imageSrc:
        "https://images.unsplash.com/photo-1499955085172-a104c9463ece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fHww",
      title: "Ranch House",
      rentDetails: {
        currency: "AUD",
        amount: 2700.0,
        rentType: "weekly",
      },
      areaDetails: {
        bedroomCount: 5,
        bathroomCount: 4,
      },
    },
  ];
  return (
    <section>
      <div className="container">
        <SectionHeading
          topTitle=" Properties"
          heading="Grab your Dream Property"
          subHeading="There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertySection;
