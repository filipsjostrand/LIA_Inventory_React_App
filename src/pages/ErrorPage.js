import React from 'react'
import { Navigate } from 'react-router-dom';

function ErrorPage() {
  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome) {
    return <Navigate to='/Home'/>;
  }

  return (
    <div>
      ERROR! PAGE NOT FOUND
        <button
          onClick={() => {
            setGoToHome(true);
          }}
          >
            {" "}
            Go To the Home Page</button>
    </div>

  )
}

export default ErrorPage;