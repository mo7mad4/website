import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IProps {
    to: string,
    children: ReactNode,
    className?: ""
}

const Style = styled.span`
    display: contents;
    color: inherit;
    text-decoration: none;

    >*{
        display: contents;
        color: inherit;
        text-decoration: none;
    }
`
const CustomLink = ({ to, children, className = "" }: IProps) => {
    return to?
    <Style className={className}>
        <Link to={to}>{children}</Link>
    </Style>
    :
    <Style className={className}>
        {children}
    </Style>
}

export default CustomLink