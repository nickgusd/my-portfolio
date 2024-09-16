import React from 'react';
import dynamic from 'next/dynamic';

// const PDFViewer = dynamic(() => import('../components/pdfviewer'), {
//   ssr: false
// });

export default function Resume(): JSX.Element {
  return (
    <div className="res">
      {/* <PDFViewer /> */}
    </div>
  );
}
