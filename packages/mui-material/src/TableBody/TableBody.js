import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import Tablelvl2Context from '../Table/Tablelvl2Context';
import useThemeProps from '../styles/useThemeProps';
import styled from '../styles/styled';
import { getTableBodyUtilityClass } from './tableBodyClasses';

const useUtilityClasses = (ownerState) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
  };

  return composeClasses(slots, getTableBodyUtilityClass, classes);
};

const TableBodyRoot = styled('tbody', {
  name: 'MuiTableBody',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
})({
  display: 'table-row-group',
});

const tablelvl2 = {
  variant: 'body',
};

const defaultComponent = 'tbody';

const TableBody = React.forwardRef(function TableBody(inProps, ref) {
  const props = useThemeProps({ props: inProps, name: 'MuiTableBody' });
  const { className, component = defaultComponent, ...other } = props;

  const ownerState = {
    ...props,
    component,
  };

  const classes = useUtilityClasses(ownerState);

  return (
    <Tablelvl2Context.Provider value={tablelvl2}>
      <TableBodyRoot
        className={clsx(classes.root, className)}
        as={component}
        ref={ref}
        role={component === defaultComponent ? null : 'rowgroup'}
        ownerState={ownerState}
        {...other}
      />
    </Tablelvl2Context.Provider>
  );
});

TableBody.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally `TableRow`.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: PropTypes.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default TableBody;
