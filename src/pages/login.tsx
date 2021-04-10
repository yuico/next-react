import { useState } from 'react';
import { useRef } from 'react';

export default function login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, messageSet] = useState<any>(null);

  async function handleLogin() {
    const resp = await fetch('http://localhost:3000/api/login', {
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
      <p>{JSON.stringify(message)}</p>
      <input type='text' placeholder='email' ref={emailRef} />
      <br />
      <input type='password' placeholder='password' ref={passRef} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
