import { COLORS } from "@/constants/constants";

const cardData = [
  {
    title: "Add Your Favorite Cars",
    description: "Create your personal garage and share your passion.",
  },
  {
    title: "Rate & Comment",
    description: "Give your opinion, rate cars, and join the conversation.",
  },
  {
    title: "View Top Rated Cars",
    description: "See the best-rated cars of the week, month, and year.",
  },
];

const Cards = () => {
  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl ${COLORS.cardBackground} ${COLORS.shadow}`}
        >
          <h4
            className={`text-xl font-semibold mb-2 ${COLORS.featureText}`}
          >
            {card.title}
          </h4>
          <p className={COLORS.cardText}>{card.description}</p>
        </div>
      ))}
    </>
  );
};

export default Cards;
