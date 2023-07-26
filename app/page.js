import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div>
        <div className="head-content">
          <h1 className="head-text">
            Welcome to <br /> WoofnWhiskers
          </h1>
          <p className="tagline">Find a perfect pet for you</p>
          <div className="btns">
            <button className="register-btn btn">Register a pet</button>
            <button className="adopt-btn btn">Adopt a pet</button>
          </div>
        </div>
        <div className="head-image">
          <img src="\assets\head1.png" alt="head" />
        </div>
      </div>
    </>
  );
}
