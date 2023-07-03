import React from "react";

const Services = () => {
  // services details
  const services = [
    {
      name: "App Design & Development",
      desc: "Develops user-interfaces, business logic, API/server side architecture, data storage and integration with 3rd party services. Leverages tools such as ReactJS, NodeJS, Express, and AWS cloud services.",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Consulting Services",
      desc: "Technology and business consulting services such as project management such as Kanban/Agile, database design, architecture, application development, DevOps, and go-to-market strategy",
      icon: "fas fa-chart-area",
    },
    {
      name: "UI/UX Design",
      desc: "Creates user-centered interfaces that are visually appealing, intuitive and have enhanced user experience. Wireframing, prototyping and testing to ensure design aligns with user needs and business goals.",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Content Creation",
      desc: "Develops compelling, relevant content that resonates with the target audience, aligns with brand messaging and encourages engagement and sharing. Focuses on delivering valuable, entertainment, and inspiring content, while leveraging visual elements to capture attention and drive conversions.",
      icon: "fas fa-bullhorn",
    },
    {
      name: "Project Management",
      desc: "Provides technical and business management services for full software development life cycle for IT and web based businesses.",
      icon: "fas fa-palette",
    },
    {
      name: "Business and Life Coaching",
      desc: "Offers coaching for businesses, individuals, and organizations.  I coach to help people achieve their goals, develop systems and improve their situations.",
      icon: "fas fa-desktop",
    },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">What I Do?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
