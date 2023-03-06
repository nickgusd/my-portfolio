import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const style = {
  borderRadius: 8,
  padding: '1em',
  color: 'white',
  border: 'none',
  backgroundColor: '#1c4250'
};

const Tooltip = ({ content = 'testing', icon }: any) => (
  <Popup
    content={content}
    trigger={<Icon name={icon} size="large" />}
    position="top center"
    style={style}
    basic
  />
);

export default Tooltip;
