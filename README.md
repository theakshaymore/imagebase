# ![Imagebase](./ImageBase-Logo.png)

> **Your modern solution for managing and sharing images effortlessly.**

---

## 🌐 Deployed Link

Check out the live app here: [https://imagebase.vercel.app/](https://imagebase.vercel.app/)

---

## 📸 About

Imagebase 🤳📸 is a powerful platform for managing and sharing images. Built with a modern tech stack, it supports secure payments, advanced image organization, and responsive design for seamless usage on any device.

---

## 🔧 Technologies Used

- **Frontend:** React, Next.js, TypeScript, Javascript
- **Backend:** Node.js,
- **Database:** MongoDB
- **Payment Gateway:** Razorpay
- **Other Technologies:** Mailtrap, nodemailers, ImageKit

---

## 🚀 How to run this in your local machine ???

### Prerequisites

- **Node.js** (v18 or higher) installed on your machine.
- **MongoDB instance** running locally or in the cloud (preferably MongoDB Atlas).
- **Razorpay account** for payment processing.
- **ImageKit account** for image management.
- **MailTrap account** for sending emails.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/theakshaymore/imagebase.git
   cd imagebase
   ```
2. npm install

3. Configure environment variables:
   Create a .env file in the root directory and add the following:

Make sure you replace placeholder values (e.g., `your_razorpay_key`) with actual data.

```bash
# MongoDB Configuration
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret

# ImageKit Configuration
NEXT_PUBLIC_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
NEXT_PUBLIC_URL_ENDPOINT=your_imagekit_url_endpoint

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
RAZORPAY_WEBHOOK_SECRET=your_razorpay_webhook_secret

# Mailtrap Configuration
MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=2525
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASS=your_mailtrap_password

```

4. Start the development server:

```bash
npm run dev
```

## THNAK YOU!!!
