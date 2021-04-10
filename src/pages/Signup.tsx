import { useState, useRef } from 'react';

export default function Signup() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, messageSet] = useState<any>(null);
  async function handleSignup() {
    const resp = await fetch('http://localhost:3000/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      }),
    });
    const json = await resp.json();
    messageSet(json);
  }
  return (
    <div>
      <h1>Signup new user</h1>
      <p>{JSON.stringify(message)}</p>
      <input type='text' placeholder='email' ref={emailRef} />
      <input type='password' placeholder='password' ref={passRef} />
      <button onClick={handleSignup}>Sign up</button>
    </div>
  );
}
