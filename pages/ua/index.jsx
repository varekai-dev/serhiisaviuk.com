import React from 'react';

import Layout from '../../components/Layout';
import ExperienceBlock from '../../components/ExperienceBlock';
import AdditionalInfoBlock from '../../components/AdditionalInfoBlock';
import { portfolio, realProjects, backThen, courses, skills, character, likes, dislikes, wants, now } from '../../languages/ukrainian';
function ResumeEn() {
	return (
		<>
			<Layout>
				<div className="content">
					<ExperienceBlock portfolio={portfolio} realProjects={realProjects} backThen={backThen} now={now} language="ua" />
					<AdditionalInfoBlock courses={courses} skills={skills} character={character} likes={likes} dislikes={dislikes} wants={wants} language="ua" />
				</div>
			</Layout>
		</>
	);
}

export default ResumeEn;
