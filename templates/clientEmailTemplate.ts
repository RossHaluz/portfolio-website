export const clientEmailTemplate = ({
  name,
  email,
  messanger,
  message,
}: {
  name: string;
  email: string;
  messanger: string;
  message: string;
}) => `
<!DOCTYPE html>
<html lang="uk">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Дякуємо за ваше звернення</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 0;
      }
      .container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        overflow: hidden;
      }
      .header {
        background-color: #0f172a;
        color: #ffffff;
        padding: 24px;
        text-align: center;
      }
      .header h1 {
        margin: 0;
        font-size: 22px;
      }
      .content {
        padding: 32px 24px;
        color: #1e293b;
        line-height: 1.6;
      }
      .content p {
        margin-bottom: 16px;
        font-size: 16px;
      }
      .details {
        background-color: #f1f5f9;
        border-radius: 8px;
        padding: 16px;
        margin-top: 24px;
        font-size: 15px;
      }
      .details strong {
        display: inline-block;
        width: 120px;
        color: #0f172a;
      }
      .footer {
        text-align: center;
        padding: 20px;
        background-color: #f8fafc;
        color: #64748b;
        font-size: 14px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Дякуємо за ваше звернення!</h1>
      </div>

      <div class="content">
        <p>Привіт, <strong>${name || "Клієнте"}</strong>!</p>
        <p>
          Дякуємо, що залишили заявку. Найближчим часом я зв’яжусь з вами, щоб обговорити всі деталі.
        </p>

        <div class="details">
          <p><strong>Ім’я:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Месенджер:</strong> ${messanger}</p>
          <p><strong>Повідомлення:</strong> ${message}</p>
        </div>

        <p style="margin-top: 24px;">
          Якщо ви зробили це випадково або хочете уточнити дані, просто відповідайте на цей лист.
        </p>
      </div>

      <div class="footer">
        З найкращими побажаннями,<br />
        <strong>Ростислав</strong><br />
        Розробка сайтів та веб-додатків
      </div>
    </div>
  </body>
</html>
`;
