import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: "Patios and Walkways",
    description: "Our patios and walkways are designed to enhance the beauty and functionality of your outdoor living space. We use high-quality materials and expert craftsmanship to create custom designs that meet your unique needs and preferences. Let us help you create the perfect outdoor oasis.",
    imageClass: 'patios-walkways'
  },
  {
    title: "Driveways and Steps",
    description: "We specialize in creating durable and attractive driveways and steps that enhance the curb appeal of your home or business. Our experienced team uses high-quality materials and expert craftsmanship to create custom designs that meet your specific needs and preferences.",
    imageClass: 'driveways-steps'
  },
  {
    title: "Stone Veneer",
    description: "Our stone veneer is the perfect way to add beauty and texture to your home or business. We use high-quality materials and expert craftsmanship to create custom designs that meet your unique needs and preferences. Let us help you transform your space with our beautiful stone veneer.",
    imageClass: 'stone-veneer'
  },
  {
    title: "Stonewalls",
    description: "Our stonewalls and retaining walls are both beautiful and functional. We use a variety of materials, including natural stone, to create custom designs that meet your specific needs and preferences. Whether you need a retaining wall to prevent erosion or a beautiful stonewall to enhance your landscaping, we've got you covered.",
    imageClass: 'stonewalls'
  },
  {
    title: "Barbecue Grill",
    description: "We design and build custom barbecue grills and outdoor kitchens. Our team uses high-quality materials and expert craftsmanship to create a functional and beautiful outdoor cooking space that fits your needs.",
    imageClass: 'barbecue-grill'
  },
  {
    title: "Stone Veneer",
    description: "Our stone veneer is the perfect way to add beauty and texture to your home or business. We use high-quality materials and expert craftsmanship to create custom designs that meet your unique needs and preferences. Let us help you transform your space with our beautiful stone veneer.",
    imageClass: 'stone-veneer'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <div key={index} className={`project-card ${project.imageClass}`}>
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
