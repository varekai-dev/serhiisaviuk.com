import React from 'react';
import ShowMore from './ShowMore';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';

function ExperienceBlock({ portfolio, realProjects, backThen, now, language }) {
	return (
		<div className="experience">
			<h3>{language === 'en' ? 'Last works' : 'Останні роботи'} </h3>
			<h6>{language === 'en' ? 'Production' : 'В релізі'} </h6>

			{realProjects.map((project) => (
				<div key={project.id} className="work">
					<div className="work__name">
						<strong>{project.name}</strong>
						<span>NDA</span>
					</div>
					<p className="work__description">{project.description}</p>
					<ShowMore>
						<div className="work__technologies">
							{project.technologies.map((technology) => (
								<span className="work__technology" key={technology}>
									{technology}
								</span>
							))}
						</div>
						<h5>{language === 'en' ? 'Scope of work:' : 'Обсяг робіт'} </h5>

						<ul className="work__list">{project.scope && project.scope.map((item) => <li key={item}>{item}</li>)}</ul>
					</ShowMore>
				</div>
			))}
			<h6>{language === 'en' ? 'Pet projects' : 'Pet проекти'} </h6>
			{portfolio.map((project) => (
				<div key={project.id} className="work">
					{project.apiko && (
						<div className="apiko-logo">
							<Image src="/img/apiko.png" height="20" width="20" alt="logo" />
						</div>
					)}
					<div className="work__name">
						<strong>{project.name}</strong>
						<a href={project.website}>{language === 'en' ? 'Link' : 'Перейти'} 👈</a>
					</div>
					<p className="work__description">{project.description}</p>
					<ShowMore>
						<div className="work__technologies">
							{project.technologies.map((technology) => (
								<span className="work__technology" key={technology}>
									{technology}
								</span>
							))}
						</div>
						{project.scope && (
							<>
								<h5>{language === 'en' ? 'Scope of work:' : 'Обсяг робіт'} </h5>
								<ul className="work__list">
									{project.scope.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</>
						)}
					</ShowMore>
				</div>
			))}
			<h3>{language === 'en' ? 'Experience' : 'Досвід роботи'} </h3>
			<h6>{language === 'en' ? 'Now' : 'Зараз'} </h6>

			{
				<div className="work ">
					<div className="work__time">{now.time}</div>
					<div className="work__place">{now.place}</div>
					<div className="work__description">
						<ul>
							{now.scope.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				</div>
			}
			<h6>{language === 'en' ? 'Back then' : 'Раніше'} </h6>
			{backThen.map((item) => (
				<div className="work back" key={item.id}>
					<div className="work__time">{item.time}</div>
					<div className="work__place">{item.place}</div>
					<div className="work__description">{item.scope}</div>
				</div>
			))}
			<h6>{language === 'en' ? 'WAY BACK THEN' : 'Значно раніше'} </h6>
			<div className="work back">
				<div className="work__time">September 2011 – 8 August 2016</div>

				<div className="work__description">
					<ThemeSwitch text={language === 'en' ? 'Dark times' : 'Темні часи'} />
					🕵🏼. {language === 'en' ? 'Worked on different jobs, nothing really to mention.' : 'Працював на різних роботах. Нема що згадати'}
				</div>
			</div>
		</div>
	);
}

export default ExperienceBlock;
