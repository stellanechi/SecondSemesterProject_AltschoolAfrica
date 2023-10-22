import { Link } from "react-router-dom";

const FeaturedCourseCard = ({ data }) => {
  const { imageURL, title, totalReviews, totalRating, price, author, link } =
    data;

  return (
    <Link target="_blank" to={link}>
      <figure className="flex hover:bg-blue-100 bg-slate-50 items-center p-2 rounded-xl gap-2">
        <img
          className="h-24 rounded-lg aspect-square object-cover"
          src={imageURL}
          alt={title}
        />
        <figcaption className="flex gap-2 w-full flex-col">
          <h4 className="font-bold text-sm">{title} </h4>
          <data className="font-medium text-xs">
            <span></span>
            <span>{totalRating}</span>
            <span>({totalReviews})</span>
          </data>

          <section className="flex items-center w-full justify-between gap-2 mt-auto">
            <p className="font-normal text-xs">by {author}</p>
            <data className="text-base font-bold xl:pr-5">${price}</data>
          </section>
        </figcaption>
      </figure>
    </Link>
  );
};

export default FeaturedCourseCard;
