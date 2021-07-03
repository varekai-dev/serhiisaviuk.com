import React from "react";

import Layout from "../../components/Layout";
import ExperienceBlock from "../../components/ExperienceBlock";
import AdditionalInfoBlock from "../../components/AdditionalInfoBlock";
import {
  portfolio,
  realProjects,
  backThen,
  courses,
  skills,
  character,
  likes,
  dislikes,
  wants,
  now,
} from "../../english";
function ResumeEn() {
  return (
    <>
      <Layout>
        <div className="content">
          <ExperienceBlock
            portfolio={portfolio}
            realProjects={realProjects}
            backThen={backThen}
            now={now}
          />
          <AdditionalInfoBlock
            courses={courses}
            skills={skills}
            character={character}
            likes={likes}
            dislikes={dislikes}
            wants={wants}
          />
        </div>
      </Layout>
    </>
  );
}

export default ResumeEn;
