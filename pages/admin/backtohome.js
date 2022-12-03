import { useRouter } from 'next/router';
import React from 'react';

function backtohome() {
  const router = useRouter();

  const handleClick = () => {
    setTimeout(() => {
      // window.location.reload();
      router.push('/');
    }, 1000);
  };
  return (
    <div>
      <button onClick={handleClick}>Go to home page</button>
    </div>
  );
}

export default backtohome;
