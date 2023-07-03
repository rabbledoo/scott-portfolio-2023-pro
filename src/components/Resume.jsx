import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "October 2021 - October 2022",
      title: "Full-Stack Engineering Certification",
      place: "Kenzie Academy",
      desc: "Full-Stack Software Engineering project-based curriculum using modern tools such as ReactJS, Python, Django, NodeJS, JavaScript",
    },
    {
      yearRange: "September 2009 - December 2016",
      title: "Bachelor in Economics",
      place: "Michigan State University",
      desc: "Bachelors of Arts in Economics with a Minor in Japanese",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "March 2022 - current",
      title: "Software Engineer",
      place: "SiteRx",
      desc: "Develops, tests and desgins full-stack applications primarily in the JavaScript ecosystem.  ReactJS, NodeJS, Redux, AWS cloud services, SQL/NoSQL, TypeScript",
    },
    {
      yearRange: "January 2022 - February 2022",
      title: "Technology Consultant",
      place: "Humble Health",
      desc: "Provided IT consulting services to a new behavioral health practice.  Helped launch the digital footprint for the new company.",
    },
    {
      yearRange: "October 2021 - December 2021",
      title: "Web Developer",
      place: "Baird Financial",
      desc: "Built the share button feature to their pre-existing landing page.  Used HTML, CSS, JavaScript and 3rd party component libraries.",
    },
  ];

  const skills = [
    {
      name: "JavaScript",
      percent: 95,
    },
    {
      name: "HTML/CSS",
      percent: 60,
    },
    {
      name: "ReactJS",
      percent: 80,
    },
    {
      name: "NodeJS",
      percent: 95,
    },
    {
      name: "SQL/NoSQL",
      percent: 80,
    },
    {
      name: "AWS",
      percent: 70,
    },
    {
      name: "Debugging",
      percent: 90,
    },
    {
      name: "TypeScript",
      percent: 70,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
