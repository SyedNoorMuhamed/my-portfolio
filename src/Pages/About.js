import React, { useEffect, useState } from "react";
import { Services } from "../Config/Config";
import styled from "styled-components";

function About() {
  const [age, setAge] = useState("");
  const yearOfBirth = "2001";
  const getAge = () => {
    setAge(new Date().getFullYear() - yearOfBirth);
  };
  useEffect(() => {
    getAge();
  });
  return (
    <Wrapper className="about-section">  
      <div className="card-inner">
        <div className="card-wrap">
          <div className="content about">
            <div className="title"  data-aos="fade-up">
              <span className="first-word">About </span>
              Me
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="text-box"  data-aos="fade-up">
                  <p>
                  Dedicated Software Developer with a strong background in
                  Angular and React development. Proficient in translating
                  Figma designs into high-quality code, with expertise in
                  HTML5, CSS3, Sass, Bootstrap, jQuery, and JavaScript (ES6).
                  Demonstrated ability to deliver efficient and user-friendly
                  solutions.
                  </p>
                </div>
              </div>
              <div className="col col-6 border-line-v">
                <div className="info-list"  data-aos="fade-up">
                  <ul>
                    <li>
                      <strong>Age: </strong>
                      {age}
                    </li>
                    <li>
                      <strong>Birthday: </strong>14 Jun 2001
                    </li>
                    <li>
                      <strong>Hometown: </strong>Bhuvanagiri, cuddalore
                    </li>
                    <li>
                      <strong>Gmail: </strong>syednoormuhamed@gmail.com
                    </li>
                    <li>
                      <strong>Residence: </strong>Tamilnadu, India
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div className="content services">
            <div className="title">
              <span className="first-word">My{" "}</span>Services
            </div>
            <div className="row service-items border-line-v" >
            {Services.map((val,ind)=>(
                    <div key={ind} className="col col-6 border-line-h" >
                      <div className="service-item">
                        <div className="icon">
                          <span>
                            {val.icon}
                          </span>
                        </div>
                        <div className="name"><span>{val.name}</span></div>
                        <div className="desc">
                        <div>
                        <p>{val.desc}</p>
                        </div>
                        </div>
                      </div>
                    </div>
            ))}
            </div>
          </div>
          <div className="content hobby">
            <div className="title">
              <span>Hobbies</span>
            </div>
            <div className="row">
              <div className="col col-6 border-line-v">
                <div className="hobby-list">
                  <ul>
                    <li>
                      <strong>Digital Art</strong>
                    </li>
                    <li>
                      <strong>Coding</strong>
                    </li>
                    <li>
                      <strong>Travelling</strong>
                    </li>
                    <li>
                      <strong>Reading</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;

const Wrapper = styled.section`
.content.about .row .col.col-6 {
  width: 100%;
  &::before {
    content: initial;
  }
  .info-list {
    padding-top: 0;

    ul {
      margin: 0;
      padding: 0;
      font-size: 0;
      list-style: none;
      overflow: hidden;

      li {
        line-height: 1.6;
        position: relative;
        text-align: right;
        padding: 0 0 5px 0;
        display: inline-block;
        vertical-align: top;
        width: 50%;
        text-align: left;
        font-size: 0.8rem;
        color: rgb(${({ theme }) => theme.title.secondary});

        &:first-child {
          padding-top: 0;
        }
      }
    }
  }
  
}
.content.hobby .row .col.col-6{
    width: 100%;
    &::before {
      content: initial;
    }
    .hobby-list {
        padding-top: 0;
    
        ul {
          margin: 0;
          padding: 0;
          font-size: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          li {
            line-height: 1.6;
            position: relative;
            padding: 0 5px 0px 5px;
            display: inline-block;
            vertical-align: top;
            flex-grow: 1;
            text-align: left;
            font-size: 0.89rem;
            color: rgb(${({ theme }) => theme.title.secondary});
            &:first-child {
              padding-top: 0;
            }
          }
        }
      }
}
.content .row{
    &::before{
        content: normal;
      }
}
.content.about .row .col.col-6:first-child {
  padding-bottom: 0;
}
.content.about .row .col.col-6:nth-child(2) {
  padding-right: 10px;
  padding-top: 15px;
}
@media (max-width: 1240px) {
  .content.about .row .col.col-6 .info-list ul li {
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
}
.content.services .row .col.col-6 {
  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .name {
      font-weight: 500;
      font-size: 1.06rem;
      color: rgb(${({ theme }) => theme.title.primary});
    }
    .icon {
      position: relative;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      border-radius: 50%;
      justify-content: center;
      background-color: ${({ theme }) => theme.highlight.primary};
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.white};
    }
    .desc {
      p {
        margin: 0;
        padding: 0;
        text-align: center;
      }
    }
  }

}



  @media (min-width: 561px){
    .service-items.border-line-v:after {
        margin: 0 0 0 -1px;
        content: "";
        position: absolute;
        left: 50%;
        top: 0;
        width: 1px;
        height: 100%;
        
        background: radial-gradient(
          ellipse at top,
          #dddddd 0%,
          rgba(255, 255, 255, 0) 70%
        );
      }
  }

`
