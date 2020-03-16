import React, {AnchorHTMLAttributes} from 'react';

const Link = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <a href={props.href}>
            {props.children}
        </a>
    );
};

export default Link;
