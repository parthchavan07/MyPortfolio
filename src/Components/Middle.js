import React from 'react';
import { Link } from 'react-router-dom';
import "./DivOne.css";
import IMG_20221001_211008 from "./IMG_20221001_211008.jpg";
import IMG_20221001_211009 from "./IMG_20221001_211009.png";
import IMG_20221001_211010 from "./IMG_20221001_211010.jpg";

export default function ClassComp() {
  return (
    <div className="middle-container">
      <div className="profile">
        <img
          src={IMG_20221001_211008}
          alt="MyPhoto"
          className="my-photo"
          width="200"
        />
        <h2>Hello.</h2>
        <p className="IntroMy">
          An engineering student at D.Y.Patil college of engineering and technology
        </p>
      </div>
      <h3>SKILLS</h3>
      <div className="skill-row">
        <img
          src={IMG_20221001_211009}
          alt="Singing"
          className="SingingPhoto"
          width="500"
        />
        <h3>Singing</h3>
        <p>
          Singing is my hobby which I practice daily. I particularly sing RAP songs. It's around 4 years that I have been practicing RAP songs. I have also done live performance at college gatherings around 4 times.
        </p>
      </div>
      <div className="skill-row">
        <img
          src={IMG_20221001_211010}
          alt="CodingPhoto"
          className="codingPhoto"
          width="400"
        />
        <h3>Coding & Development</h3>
        <p>
          I started coding 4 months ago with the C programming language. Now I have successfully completed C programming as well as Cpp, and currently, I am doing my full-stack development course.
        </p>
      </div>
      <h3>SKILLS</h3>
      <table className="center">
        <tbody>
          <tr>
            <td>
              <table cellSpacing="10">
                <tbody>
                  <tr>
                    <td>React&Node</td>
                    <td>⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>CPP</td>
                    <td>⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>CSS</td>
                    <td>⭐⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table cellSpacing="10">
                <tbody>
                  <tr>
                    <td>html</td>
                    <td>⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td>python</td>
                    <td>⭐</td>
                  </tr>
                  <tr>
                    <td>JS</td>
                    <td>⭐⭐⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <h3>if you want a singing partner</h3>
        <p>Love singing? Let's do a wonderful duet performance.</p>
        <Link to="/Contact">
          <button className="btn">CONTACT ME</button>
        </Link>
      </div>
    </div>
  );
}
