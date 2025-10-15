'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h2>Что-то пошло не так!</h2>
        <button onClick={() => reset()}>Попробовать снова</button>
      </body>
    </html>
  )
}
