import { useState, useEffect } from 'react';

export default function Responsive({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (isClient) {
    return <div>{children}</div>;
  }
}
