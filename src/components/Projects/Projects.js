import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import VacationApp from "../../Assets/Projects/VacationApp.png"
import ToDoListApplication from "../../Assets/Projects/ToDoListApplication.png"
import SocketIoNotification from "../../Assets/Projects/SocketIoNotification.png"
import HrApplication from "../../Assets/Projects/HrApplication.png"
import NewsApplication from "../../Assets/Projects/NewsApplication.png"
import IlamajApplication from "../../Assets/Projects/ilamaj.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <p style={{ color: "white" }}>
         Note: When opening a project, the initial load may take a few seconds due to server cold start.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


<Col md={4} className="project-card">
            <ProjectCard
              imgPath={IlamajApplication}
              isBlog={false}
              title="CROCHET APPLICATION"
              description="Ilamaj is a product catalog and ordering platform built for a handmade crochet brand. Customers can browse products and place orders instantly via WhatsApp with a single click. The app also includes a secure admin dashboard where the owner can add, edit, and delete products."
              ghLink="https://github.com/anthonyYo03/crochet_ilamage_frontend.git"
              ghLinkBackend="https://github.com/anthonyYo03/crochet_ilamage_backend.git" 
              demoLink="https://crochet-ilamage-frontend.vercel.app/"
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={NewsApplication}
              isBlog={false}
              title="NEWS APPLICATION"
              description="Developed a News Application with role-based authentication and authorization for Readers, Journalists, and Admins. Unauthenticated users can browse news content, while Readers can interact through likes, comments, and sharing. Journalists can additionally create and publish articles, and Admins have full user management capabilities with CRUD operations."
              ghLink="https://github.com/anthonyYo03/news_App_FRONTEND.git"
              ghLinkBackend="https://github.com/anthonyYo03/news_App_BACKEND.git" 
              demoLink="https://antonewsapplication.netlify.app/"
            />
          </Col>



         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HrApplication}
              isBlog={false}
              title="HR APPLICATION"
              description="A full-stack HR management application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring role-based access for two types of users: HR and Employees. The application includes functionalities such as JWT authentication, OTP verification, password reset, real-time notifications with Socket.IO, pagination, and other management features.
Employees can submit requests and report issues, while HR can review and update their status. HR users can also post announcements and assign tasks to employees, and employees can update the status of their assigned tasks."
              ghLink="https://github.com/anthonyYo03/HR_APP_FRONTEND.git"
              ghLinkBackend="https://github.com/anthonyYo03/HR_APP_BACKEND.git"
              demoLink="https://hr-app-frontend.vercel.app/"
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoListApplication}
              isBlog={false}
              title="TO-DO LIST APPLICATION"
              description="A full-stack application where users can securely log in and log out. Users can reset their password via an email link if they forget it. The app allows users to create, read, update, and delete tasks. A doughnut chart displays the total number of tasks by status (pending, in-progress, and completed). When a task becomes overdue, a real-time notification is sent to the user. Tech Stack: React.js, Node.js, Express.js, MongoDB, JWT Authentication, Socket.IO"
              ghLink="https://github.com/anthonyYo03/todolist-frontend.git"
              ghLinkBackend="https://github.com/anthonyYo03/todolist-backend.git"
              demoLink="https://todolist-frontend-teal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VacationApp}
              isBlog={false}
              title="VACATION VEHICLES APPLICATION"
              description="A full-stack application that showcases different types of vehicles, including boats, cars, and planes. Users can view detailed information about each vehicle. The app also includes a contact form where users can submit their information (first name, last name, email address, gender, and message). This project demonstrates a basic full-stack setup. Tech Stack: Angular, Node.js, Express.js, MongoDB"
              ghLink="https://github.com/anthonyYo03/VacAppClient.git"
              ghLinkBackend="https://github.com/anthonyYo03/VacAppServer.git"
              demoLink="https://vac-app-client.vercel.app/vacation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SocketIoNotification}
              isBlog={false}
              title="Notification + Socket.IO"
              description="An application built with React and Node.js that sends desktop notifications every 5 seconds. Using Socket.IO, the backend triggers real-time events that cause notifications to appear instantly on the frontend. This project demonstrates real-time communication between the client and server. Tech Stack: React.js, Node.js, Express.js, Socket.IO"
              ghLink="https://github.com/anthonyYo03/SocketIO-Notification-ClientSide.git"
              ghLinkBackend="https://github.com/anthonyYo03/SocketIO-Notification-ServerSide.git"
              demoLink="https://socket-io-notification-client-side.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;