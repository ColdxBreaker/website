import React from 'react'
import Link from 'next/link';
import classes from './NavigationItems.module.css';
import Resume from '../../../../documents/Resume.pdf';

const NavigationItems = () => {
    return (
        <div className={classes.NavigationItemsCSS}>
            <li><Link href={"/"}><a>Home</a></Link></li>
            <li><Link href={"ProjectsPage"}><a>Projects</a></Link></li>
            <li><Link href={"ExperiencesPage"}><a>Experiences</a></Link></li>
            <li><a href={"https://blog.hiimchrislim.co"}>Blog</a></li>
            <li><a href={Resume}>Resume</a></li>
            <li><Link href={"ContactPage"}><a>Contact</a></Link></li>
        </div>
    );

}

export default NavigationItems;
