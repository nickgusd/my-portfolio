// @ts-nocheck
import React, { useEffect, useRef } from 'react';

export default function HomePage() {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: '/files/NG_Resume_12.25.22.pdf'
        },
        viewer.current
      )
        .then((instance) => {
          const { docViewer } = instance;
          docViewer.getDocument('/files/NG_Resume_12.25.22.pdf');
        })
        .catch((err) => console.log(err));
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}
