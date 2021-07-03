import React from "react";
import Image from "next/image";
import Link from "next/link";

function AdditionalInfoBlock({
  courses,
  skills,
  character,
  likes,
  dislikes,
  wants,
}) {
  return (
    <div className="additional">
      <div className="languages">
        <h3>Languages</h3>
        <ul>
          <li>
            <Link href="/en">
              <a>
                <div className="flag">
                  <Image src="/img/usa.png" width="16" height="16" alt="usa" />{" "}
                </div>
                English
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ua">
              <a>
                <div className="flag">
                  <Image src="/img/ua.png" width="16" height="16" alt="usa" />
                </div>
                Ukrainian
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="block">
        <h3>Skills</h3>
        <ul className="block__wrapper">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="block">
        <h3>CHARACTER</h3>
        <ul className="block__wrapper">
          {character.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="block">
        <h3>LIKES😃</h3>
        <ul className="block__wrapper">
          {likes.map((item) => (
            <li key={item}>{item} </li>
          ))}
        </ul>
      </div>
      <div className="block">
        <h3>dislikes 😞</h3>
        <ul className="block__wrapper">
          {dislikes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="block">
        <h3>wants 🥺</h3>
        <ul className="block__wrapper">
          {wants.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="courses">
        <h3>courses</h3>
        <ul className="block__wrapper">
          {courses.map((item) => (
            <div className="course" key={item.id}>
              <div className="course__top">
                {" "}
                <span>{item.name}</span>
                <a href={item.website}>Link</a>
              </div>
              <div className="work__technologies">
                {item.labels.map((label) => (
                  <span className="work__technology" key={label}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdditionalInfoBlock;
