import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mock_projects_image from "../../../assets/banner.jpg";
import PotionHeader from "../../../Components/Common/PortionHeader";
import ProjectCard from "../../../Components/Common/ProjectCard";
import type { ProductCardProps } from "../../../Types/Common/product-cart.type";
import "./HomeProjects.css";

const HomeProjects = () => {
  const projects = [
    {
      projectName: "Project1",
      productsImage: mock_projects_image,
      tag: ["tag1", "tag2", "tag3"],
    },
    {
      projectName: "Project2",
      productsImage: mock_projects_image,
      tag: ["tag1", "tag2"],
    },
    {
      projectName: "Project3",
      productsImage: mock_projects_image,
      tag: ["tag1"],
    },
    { projectName: "Project4", productsImage: mock_projects_image, tag: [] },
    {
      projectName: "Project5",
      productsImage: mock_projects_image,
      tag: ["tag1", "tag2", "tag3", "tag4", "tag5"],
    },
    {
      projectName: "Project6",
      productsImage: mock_projects_image,
      tag: ["tag1", "tag2"],
    },
  ];

  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-projects">
      <PotionHeader title="Projects" />
      <div className="slider-container">
        <Slider {...settings}>
          {projects.map((project, idx) => {
            const productProps: ProductCardProps = {
              title: project.projectName,
              image: project.productsImage,
              tag: project.tag,
            };
            return <ProjectCard key={idx} {...productProps} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default HomeProjects;
