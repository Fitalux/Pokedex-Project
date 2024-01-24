import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/about_image.jpg";
import { FaBookOpen, FaGithub, FaPen } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="avatar" className="profile-image" />
      <h1 className="profile-text">안녕하세요, 신입 개발자 변우현입니다.</h1>
      <h2 className="profile-text">
        끈기와 집요함으로 성장하며 더 나은 개발자가 되는 것이 목표입니다.
      </h2>
      <h4 className="profile-text">
        이 프로젝트는 redux-tookit를 통하여 제작되었으며, Ki shan의 pedex
        project를 따라한 연습용입니다.
      </h4>
      <div className="profile-links">
        <a href="https://github.com/fitalux">
          <FaGithub />
        </a>
        <a href="https://fitalux-portfolio-vite-2023.netlify.app/">
          <FaBookOpen />
        </a>
        <a href="https://fitalux.github.io/web2023/javascript/index.html">
          <FaPen />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
