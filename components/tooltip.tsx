import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Icon, Popup } from 'semantic-ui-react';

const style = {
  borderRadius: 8,
  padding: '1em',
  color: 'white',
  border: 'none',
  backgroundColor: '#1c4250'
};

const Tooltip = ({ content, icon, size = "large" }: any) => {
  const isMobile = useMediaQuery({ query: '(max-width: 765px)' });
  return (
    <Popup
      content={content}
      trigger={<Icon name={icon} size={size} />}
      position={isMobile ? 'top left' : 'top center'}
      style={style}
      basic
    />
  );
};

export default Tooltip;
