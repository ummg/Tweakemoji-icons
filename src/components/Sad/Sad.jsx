import React from 'react';
import PropTypes from 'prop-types';

const Sad = props => (
    <svg 
        xmlns="http://www.w3.org/2000/svg"
        width={props.size * 0.50}
        height={props.size}  
        viewBox="0 0 36 36
        ">
        <path
            fill={props.colour}
            d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
        ></path>
        <path
            fill="#664500"
            d="M22 27c0 2.763-1.791 3-4 3-2.21 0-4-.237-4-3 0-2.761 1.79-6 4-6 2.209 0 4 3.239 4 6zm8-12a.987.987 0 01-.371-.072c-5.229-2.091-7.372-5.241-7.461-5.374a1 1 0 011.662-1.113c.019.027 1.93 2.785 6.541 4.629A1 1 0 0130 15zM6 15a1.001 1.001 0 01-.372-1.929c4.612-1.844 6.523-4.602 6.542-4.629a1.002 1.002 0 011.387-.27.998.998 0 01.275 1.383c-.089.133-2.232 3.283-7.46 5.374A1.015 1.015 0 016 15z"
        ></path>
        <path
            fill="#5DADEC"
            d="M24 16h4v19l-4-.046V16zM8 35l4-.046V16H8v19z"
        ></path>
        <path
            fill="#664500"
            d="M14.999 18c-.15 0-.303-.034-.446-.105-3.512-1.756-7.07-.018-7.105 0a1 1 0 11-.895-1.789c.182-.09 4.498-2.197 8.895 0A1 1 0 0114.999 18zm14 0c-.15 0-.303-.034-.446-.105-3.513-1.756-7.07-.018-7.105 0a1 1 0 11-.895-1.789c.182-.09 4.501-2.196 8.895 0A1 1 0 0128.999 18z"
        ></path>
        <ellipse cx="18" cy="34" fill="#5DADEC" rx="18" ry="2"></ellipse>
        <ellipse cx="18" cy="27" fill="#E75A70" rx="3" ry="2"></ellipse>
    </svg>
);

Sad.propTypes = {
    size: PropTypes.number,
    colour: PropTypes.string
}

Sad.defaultProps = {
    size: 100,
    colour: '#FFCC4D'
}
export default Sad;
