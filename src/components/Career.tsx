import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Trainee</h4>
                <h5>Metadologie</h5>
              </div>
              <h1>Feb 2024 - Jun 2024</h1>
            </div>
            <p>
              As a Frontend Developer Intern at Metadologie, I developed and
              maintained a Next.js-based HRMS, managed and enhanced the
              AI-powered financial management tool CloudFO, and built a chatbot
              using Socket.io. I utilized Figma for UI design, creating
              wireframes and prototypes, and was proficient in React.js,
              Next.js, HTML, CSS, JavaScript, TypeScript, Git, GitHub, Firebase,
              and agile practices. Recognized as a good performer, I
              consistently delivered high-quality work, demonstrated strong
              problem-solving and teamwork skills, and was subsequently promoted
              to Frontend Developer Trainee.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Software Engineer</h4>
                <h5>Dataabsolute Technologies</h5>
              </div>
              <h1>Aug 2024 - Mar 2025</h1>
            </div>
            <p>
              At Dataabsolute Technologies, I contributed as an Associate
              Software Engineer, focusing on developing full-stack web
              applications. My role involved building RESTful APIs and
              integrating MongoDB for seamless data management. I also
              implemented JWT authentication, enhancing security measures.
              Working in Agile teams allowed me to refine my coding practices
              while delivering high-quality software solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer </h4>
                <h5>WE RNS IT Solutions Pvt. Ltd.</h5>
              </div>
              <h1>Apr 2025 - Present</h1>
            </div>
            <p>
              At WE RNS IT Solutions Pvt. Ltd., I worked on developing and
              optimizing full-stack web applications across platforms like
              Edvice and Brainbucks. My role involved building responsive UIs
              with Next.js, TypeScript, Tailwind CSS, Redux Toolkit, and React
              Query, while also enhancing features, fixing bugs, and improving
              overall user experience. On the backend, I created APIs,
              implemented role-based functionality, and contributed to core
              modules using standard development patterns like MVC and layered
              architecture. I collaborated closely with cross-functional teams
              for smooth deployments and also mentored students through MERN
              Stack training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
