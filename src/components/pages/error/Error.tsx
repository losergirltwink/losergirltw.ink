import React from 'react';
import './Error.css';

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
    if(!errorMessage) {
        return (
          <div className='error-page'>
            <header>
              <h2>Oops! Something went wrong. No Error Message Provided</h2>
            </header>
            <p className='snarky-remark'>yell at the developer not me; im just a robot</p>
            <a className='snarky-remark' href="https://github.com/losergirltwink/losergirltw.ink/issues">click here to yell at developer</a>
          </div>
        )
    };
    return (
      <div className='error-page'>
        <h2>Oops! Something went wrong.</h2>
        <p className='error-message'>{errorMessage}</p>
      </div>
  );
};

export default ErrorPage;