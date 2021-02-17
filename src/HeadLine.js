import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function HeadLine({ name }) {
    return <H1 className={"headline"}>{name}'s Shopping List</H1>
}

HeadLine.propTypes = {
    name: PropTypes.string
}

const H1 = styled.h1`
    font-family: sans-serif;
    color: indigo;
`