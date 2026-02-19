import React from 'react';
import "./Style.scss";
import MainBtn from '../MainBtn/MainBtn';
import Project1 from "../../assets/images/home-project3.webp";
import Project2 from "../../assets/images/home-project2.webp";

function HomeProject() {
  return (
    <section id="home-projects" className="home-projects container-fluid g-0 ">
      <div className="head-side">
        <span>Layihələrimiz</span>
        <div className="d-flex justify-content-between pt-3">
          <h1>Son Layihələrimiz</h1>
          <div className="d-none d-md-block">
            {" "}
            <MainBtn title={"Hamısına bax "} />
          </div>
        </div>
      </div>
        <div className="projects d-flex flex-column flex-md-row  gap-3 gap-md-5 ">
          <div className="col p-0">
            <img src={Project1} alt="" className='project' />
          </div>
          <div className=" col p-0 ">
            <img src={Project2} alt="" className='project'/>
          </div>
          <div className="d-block d-md-none  d-flex ">
            <MainBtn title={"Hamısına bax "} /> 
          </div>
      </div>
    </section>
  );
}

export default HomeProject;
