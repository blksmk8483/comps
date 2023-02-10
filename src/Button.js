import PropTypes from 'prop-types';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded
}) {
    // if (primary && secondary) {
    //     throw new Error('only one of the primary and secondary should be provided')
    // }

    return <button>{children}</button>
}

Button.propTypes = {
    checkVariatonValue: ({ primary, secondary, warning, success, danger }) => {
        const count = Number(!!primary)
        + Number(!!secondary)
        + Number(!!warning)
        + Number(!!success)
        + Number(!!danger)
    
        if (count > 1) {
            return new Error('Only one of primary, secondary, warning, success, danger can be true')
        }
    },
};

export default Button;