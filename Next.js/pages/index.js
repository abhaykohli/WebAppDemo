import React from 'react';

export default async function HomePage() {
  const response = await fetch('http://localhost:8080/'); // Replace with actual Go API Gateway URL
  const messageFromGo = await response.text();

  return (
    <div>
      <h1>Welcome from Next.js!</h1>
      <p>{messageFromGo}</p>
      <p>Content from PHP: {process.env.MESSAGE_FROM_PHP}</p>
    </div>
  );
}

export async function getStaticProps() {
  // You can fetch data from PHP here (if needed)
  return {
    props: {
      messageFromPHP: process.env.MESSAGE_FROM_PHP || 'No message from PHP',
    },
  };
}
