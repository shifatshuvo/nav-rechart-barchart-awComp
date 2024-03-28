import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker rental",
      ],
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker rental",
        "Group fitness classes",
        "Access to swimming pool",
      ],
    },
    {
      id: 3,
      name: "Premium",
      price: 80,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker rental",
        "Group fitness classes",
        "Personal training session (1/month)",
        "Sauna and steam room access",
        "Towel service",
      ],
    },
    {
      id: 4,
      name: "Standard 2",
      price: 55,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker rental",
        "Group fitness classes",
        "Access to swimming pool",
      ],
    }
  ];

  return (
    <div className="m-12">
      <h2 className="text-3xl">Best Prices in the town</h2>
      <div className="md:grid grid-cols-3 md:gap-8 gap-4">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
