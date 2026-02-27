import React from 'react';
import "./Style.scss";
import MainBtn from '../MainBtn/MainBtn';
import Project1 from "../../assets/images/home-project3.webp";
import Project2 from "../../assets/images/home-project2.webp";
import { motion } from "framer-motion";
import { Link, NavLink } from 'react-router-dom';

function HomeProject() {
  return (
    <section id="home-projects" className="home-projects container-fluid g-0 ">
      <motion.div
        // initial={{ y: -50, opacity: 0 }}
        // whileInView={{ y: 0, opacity: 1 }}
        // transition={{
        //   duration: 0.9,
        //   ease: "easeOut",
        //   delay: 0.3,
        // }}
        // viewport={{ once: false }}
      >
        <span
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: false }}
        >
          Layihələrimiz
        </span>
        <div className="d-flex justify-content-between pt-3">
          <h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            viewport={{ once: false }}
          >
            Son Layihələrimiz
          </h1>
          <Link to={"layiheler"} className="d-none d-md-block">
            {" "}
            <MainBtn title={"Hamısına bax "} />
          </Link>
        </div>
      </motion.div>
      <div className="projects d-flex flex-column flex-md-row  gap-3 gap-md-5 ">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="col p-0"
        >
          <img src={Project1} alt="" className="project" />
        </motion.div>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className=" col p-0 "
        >
          <img src={Project2} alt="" className="project" />
        </motion.div>
        <Link to={"/layiheler"} className="d-block d-md-none  d-flex ">
          <MainBtn title={"Hamısına bax "} />
        </Link>
      </div>
    </section>
  );
}

export default HomeProject;
