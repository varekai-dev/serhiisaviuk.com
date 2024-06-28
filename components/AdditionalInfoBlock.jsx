import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function AdditionalInfoBlock({
    courses,
    skills,
    character,
    likes,
    dislikes,
    wants,
    language,
}) {
    return (
        <div className="additional">
            <div className="languages">
                <h3>{language === 'en' ? 'Languages' : 'Мови'}</h3>

                <ul>
                    <li>
                        <Link href="/en">
                            <div className="flag">
                                <Image
                                    src="/img/usa.png"
                                    width="16"
                                    height="16"
                                    alt="usa"
                                />{' '}
                            </div>
                            {language === 'en' ? 'English' : 'Англійська'}
                        </Link>
                    </li>
                    <li>
                        <Link href="/ua">
                            <div className="flag">
                                <Image
                                    src="/img/ua.png"
                                    width="16"
                                    height="16"
                                    alt="usa"
                                />
                            </div>
                            {language === 'en' ? 'Ukrainian' : 'Українська'}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="block">
                <h3> {language === 'en' ? 'Skills' : 'Навики'}</h3>
                <ul className="block__wrapper">
                    {skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>

            <div className="block">
                <h3> {language === 'en' ? 'CHARACTER' : 'ХАРАКТЕР'}</h3>

                <ul className="block__wrapper">
                    {character.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="block">
                <h3> {language === 'en' ? 'LIKES' : 'ПОДОБАЄТЬСЯ'}😃</h3>
                <ul className="block__wrapper">
                    {likes.map(item => (
                        <li key={item}>{item} </li>
                    ))}
                </ul>
            </div>
            <div className="block">
                <h3> {language === 'en' ? 'dislikes' : 'НЕ ПОДОБАЄТЬСЯ'} 😞</h3>
                <ul className="block__wrapper">
                    {dislikes.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="block">
                <h3>{language === 'en' ? 'wants' : 'бажання'} 🥺</h3>
                <ul className="block__wrapper">
                    {wants.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="courses">
                <h3>{language === 'en' ? 'courses' : 'курси'} </h3>
                <ul className="block__wrapper">
                    {courses.map(item => (
                        <div className="course" key={item.id}>
                            <div className="course__top">
                                {' '}
                                <span>{item.name}</span>
                                <a
                                    className="print-hide"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href={item.website}
                                >
                                    {language === 'en' ? 'Link' : 'Перейти'}
                                </a>
                            </div>
                            <div className="work__technologies">
                                {item.labels.map(label => (
                                    <span
                                        className="work__technology"
                                        key={label}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </ul>
            </div>

            <div>
                {language === 'en' ? (
                    <>
                        <strong>Bachelor&apos;s degree</strong> in
                        <strong> finance</strong> at
                        <a href="https://int.krok.edu.ua/en/" rel="external">
                            <strong>KROK, Kyiv</strong>
                        </a>
                    </>
                ) : (
                    <>
                        <div>
                            <strong>Бакалавр</strong> у{' '}
                            <strong>фінансах</strong> в
                            <a href="https://int.krok.edu.ua/" rel="external">
                                <strong>КРОК, Київ</strong>
                            </a>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default AdditionalInfoBlock
