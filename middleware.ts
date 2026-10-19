export default function middleware() {
  const html = `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport"
          content="width=device-width, initial-scale=1">
        <title>Service indisponible</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: "Outfit", sans-serif;
            background: #f8fafc;
            color: #0f172a;
            padding: 24px;
          }
          main {
            max-width: 520px;
            text-align: center;
          }
          .code {
            color: #64748b;
            font-weight: 700;
            letter-spacing: 3px;
          }
          h1 {
            font-size: clamp(26px, 5vw, 36px);
            line-height: 1.2;
            margin: 20px 0;
          }
          p {
            color: #64748b;
            line-height: 1.8;
          }
        </style>
      </head>
      <body>
        <main>
          <div class="code">ERREUR 503</div>
          <h1>Service temporairement indisponible</h1>
          <p>Ce site est actuellement inaccessible.</p>
          <p>
            Nous vous remercions de votre compréhension
            et vous invitons à réessayer ultérieurement.
          </p>
        </main>
      </body>
    </html>
  `;

  return new Response(html, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}
