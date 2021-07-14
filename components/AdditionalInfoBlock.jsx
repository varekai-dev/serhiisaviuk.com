import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function AdditionalInfoBlock({ courses, skills, character, likes, dislikes, wants, language }) {
	return (
		<div className="additional">
			<div className="languages">
				<h3>{language === 'en' ? 'Languages' : 'Мови'}</h3>

				<ul>
					<li>
						<Link href="/en">
							<a>
								<div className="flag">
									<Image src="/img/usa.png" width="16" height="16" alt="usa" />{' '}
								</div>
								{language === 'en' ? 'English' : 'Англійська'}
							</a>
						</Link>
					</li>
					<li>
						<Link href="/ua">
							<a>
								<div className="flag">
									<Image src="/img/ua.png" width="16" height="16" alt="usa" />
								</div>
								{language === 'en' ? 'Ukrainian' : 'Українська'}
							</a>
						</Link>
					</li>
				</ul>
			</div>
			<div className="block">
				<h3> {language === 'en' ? 'Skills' : 'Навики'}</h3>
				<ul className="block__wrapper">
					{skills.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
			</div>

			<div className="block">
				<h3> {language === 'en' ? 'CHARACTER' : 'ХАРАКТЕР'}</h3>

				<ul className="block__wrapper">
					{character.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>

			<div className="block">
				<h3> {language === 'en' ? 'LIKES' : 'ПОДОБАЄТЬСЯ'}😃</h3>
				<ul className="block__wrapper">
					{likes.map((item) => (
						<li key={item}>{item} </li>
					))}
				</ul>
			</div>
			<div className="block">
				<h3> {language === 'en' ? 'dislikes' : 'НЕ ПОДОБАЄТЬСЯ'} 😞</h3>
				<ul className="block__wrapper">
					{dislikes.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
			<div className="block">
				<h3>{language === 'en' ? 'wants' : 'бажання'} 🥺</h3>
				<ul className="block__wrapper">
					{wants.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</div>
			<div className="courses">
				<h3>{language === 'en' ? 'courses' : 'курси'} </h3>
				<ul className="block__wrapper">
					{courses.map((item) => (
						<div className="course" key={item.id}>
							<div className="course__top">
								{' '}
								<span>{item.name}</span>
								<a rel="noopener noreferrer" target="_blank" href={item.website}>
									{language === 'en' ? 'Link' : 'Перейти'}
								</a>
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
