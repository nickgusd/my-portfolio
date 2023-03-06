import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const style = {
  borderRadius: 8,
  padding: '1em',
  backgroundColor: '#1c4250',
  color: 'white',
  border: 'none'
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
