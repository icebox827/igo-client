import React from "react";
import { Link, Text } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

MenuItem.propTypes = {
  children: PropTypes.func,
  isLast: PropTypes.func,
  to: PropTypes.string,
};

export default MenuItem;