import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ToggleSwitchWrapper, Toggle, ToggleBall, RippleBg } from './ToggleSwitch.style.js';

const propTypes = {
  initial: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  ballColor: PropTypes.string.isRequired,
  ballColorActive: PropTypes.string.isRequired,
  bgToggled: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
};

const ToggleSwitch = (props) => {
  const { initial, onToggle } = props;
  const [toggled, setToggled] = useState(initial)

  const doToggle = () => {
    setToggled(!toggled);
    onToggle();
  }

  return (
    <ToggleSwitchWrapper>
      <Toggle
        data-testid="toggle"
        onClick={() => doToggle()}
        toggled={toggled}
        {...props}
      >
        <ToggleBall
          toggled={toggled}
          {...props}
        />
        <RippleBg
          visible={toggled}
          {...props}
        />
      </Toggle>
    </ToggleSwitchWrapper>
  );
}

ToggleSwitch.propTypes = propTypes;

ToggleSwitch.defaultProps = {
  initial: false,
  width: 40,
  padding: 3,
  ballColor: '#fff',
  ballColorActive: '#f5f5f5',
  bgToggled: '#22e222',
  borderColor: '#ddd',
};

export default ToggleSwitch;