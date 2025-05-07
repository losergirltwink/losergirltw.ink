import React from 'react';

interface ErrorPageProps {
  errorMessage?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
    if(!errorMessage) {
        return (
            <h1>Oops! Something went wrong. No Error Message Provided</h1>
        )
    };
    return (
        <h1>Oops! Something went wrong. {errorMessage} </h1>
  );
};

export default ErrorPage;