export const adminNewOrderTemplate = ({
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
    <title>Нове замовлення</title>
    <style>
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        background-color: #f9fafb;
        margin: 0;
        padding: 30px;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        overflow: hidden;
      }
      .header {
        background: linear-gradient(135deg, #111827, #1f2937);
        color: #ffffff;
        text-align: center;
        padding: 24px;
        font-size: 20px;
        font-weight: 600;
      }
      .content {
        padding: 24px;
        color: #111827;
        line-height: 1.6;
      }
      .details {
        background-color: #f3f4f6;
        border-radius: 8px;
        padding: 16px;
        margin-top: 16px;
      }
      .details p {
        margin: 8px 0;
      }
      .label {
        font-weight: 600;
        color: #374151;
      }
      .footer {
        text-align: center;
        color: #6b7280;
        font-size: 14px;
        padding: 16px;
        border-top: 1px solid #e5e7eb;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">Нове замовлення</div>
      <div class="content">
        <p>Вітаю 👋</p>
        <p>На сайті щойно надійшло нове замовлення від клієнта:</p>
        <div class="details">
          <p><span class="label">Ім’я:</span> ${name}</p>
          <p><span class="label">Email:</span> ${email}</p>
          <p><span class="label">Месенджер:</span> ${messanger}</p>
          <p><span class="label">Повідомлення:</span></p>
          <p style="background: #fff; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb;">${message}</p>
        </div>
        <p>Перевірте деталі у вашій панелі адміністратора або зв’яжіться з клієнтом напряму.</p>
      </div>
      <div class="footer">
        📩 Це автоматичне повідомлення. Не відповідайте на нього.
      </div>
    </div>
  </body>
</html>
`;
