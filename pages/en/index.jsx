import React from 'react';

import Layout from '../../components/Layout';
import ExperienceBlock from '../../components/ExperienceBlock';
import AdditionalInfoBlock from '../../components/AdditionalInfoBlock';
import { portfolio, realProjects, backThen, courses, skills, character, likes, dislikes, wants, now } from '../../languages/english';
function ResumeEn() {
	return (
		<>
			<Layout>
				<div className="content">
					<ExperienceBlock portfolio={portfolio} realProjects={realProjects} backThen={backThen} now={now} language="en" />
					<AdditionalInfoBlock courses={courses} skills={skills} character={character} likes={likes} dislikes={dislikes} wants={wants} language="en" />
				</div>
			</Layout>
		</>
	);
}

export default ResumeEn;
