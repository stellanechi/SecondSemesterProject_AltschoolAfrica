import courses from "../assets/data/courses";
import CourseCard from "../components/CourseCard";
import FeaturedCourseCard from "../components/FeaturedCourseCard";

const featuredCardData = [
  // {
  //   imageURL: "",
  //   title: "",
  //   totalRating: 0, // from zero to 5 with possibly 1 decimal place
  //   totalReviews: 0,
  //   author: "",
  //   price: 0,
  // },
  {
    imageURL:
      "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062008.jpg?size=626&ext=jpg&uid=R121613487&ga=GA1.1.1156971998.1697637385&semt=ais",
    title: "Engineering",
    totalRating: 4.9, // from zero to 5 with possibly 1 decimal place
    totalReviews: 3620,
    author: "Alt School of Engineering",
    price: 0,
    link: "https://engineering.altschoolafrica.com/",
  },
  {
    imageURL:
      "https://img.freepik.com/premium-photo/happy-casual-photo-editors-using-graphics-tablet_13339-132578.jpg?size=626&ext=jpg&uid=R121613487&ga=GA1.1.1156971998.1697637385&semt=ais",
    title: "Product",
    totalRating: 4.2, // from zero to 5 with possibly 1 decimal place
    totalReviews: 3032,
    author: "Alt School of Product",
    price: 0,
    link: "https://product.altschoolafrica.com/",
  },
  {
    imageURL:
      "https://img.freepik.com/free-photo/black-businessman-using-computer-laptop_53876-14801.jpg?size=626&ext=jpg&uid=R121613487&ga=GA1.1.1156971998.1697637385&semt=ais",
    title: "Data",
    totalRating: 4.5, // from zero to 5 with possibly 1 decimal place
    totalReviews: 1403,
    author: "Alt School of Data",
    price: 0,
    link: "https://data.altschoolafrica.com/",
  },
];

const DashboardPage = () => {
  return (
    <main className="w-full max-w-[69rem] mx-auto">
      <h1 className="app-title">Featured Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 mb-8 gap-7">
        {featuredCardData.map((object, index) => {
          return <FeaturedCourseCard key={index} data={object} />;
        })}
      </div>

      <h2 className="app-title">All courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 mb-8 gap-7">
        {courses.map((course, index) => {
          return <CourseCard key={index} {...course} />;
        })}
      </div>
    </main>
  );
};

export default DashboardPage;
