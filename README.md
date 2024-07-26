# Quantelect Landing Page  
  
Welcome to the official repository for Quantelect's landing page. Quantelect is an early-stage AI startup exploring the possibilities of AI technology. This repository contains the source code for our landing page, including HTML, CSS, JavaScript, and Netlify Functions for form submission handling.  
  
## Table of Contents  
- [Overview](#overview)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Installation](#installation)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
  
## Overview  
Quantelect is a proud member of the Microsoft Startup Founders Hub. Our landing page provides information about our journey, updates, and a contact form for inquiries and collaborations.  
  
## Features  
- Clean and professional design  
- Responsive layout for various devices  
- Smooth scrolling for internal links  
- Contact form with validation and email functionality  
  
## Getting Started  
To get a local copy up and running, follow these simple steps.  
  
### Prerequisites  
- A Netlify account for deployment  
- Node.js installed on your local machine  
  
### Installation  
1. **Clone the repository:**  
    ```sh  
    git clone https://github.com/Quantelect/quantelect-landing-page.git  
    cd quantelect-landing-page  
    ```  
  
2. **Install dependencies:**  
    ```sh  
    npm install  
    ```  
  
3. **Set up environment variables:**  
    - Create a `.env` file in the root directory and add your ProtonMail credentials:  
    ```sh  
    PROTONMAIL_USER=your-email@protonmail.com  
    PROTONMAIL_PASS=your-email-password  
    ```  
  
### Deployment  
This project can be easily deployed using Netlify.  
  
1. **Push the code to GitHub:**  
    ```sh  
    git add .  
    git commit -m "Initial commit"  
    git push origin main  
    ```  
  
2. **Deploy on Netlify:**  
    - Log in to your Netlify account.  
    - Click on "New site from Git".  
    - Connect your GitHub account and select the `quantelect-landing-page` repository.  
    - Follow the prompts to deploy your site.  
  
3. **Set up environment variables on Netlify:**  
    - Go to your site's settings on Netlify.  
    - Navigate to "Build & Deploy" > "Environment".  
    - Add the `PROTONMAIL_USER` and `PROTONMAIL_PASS` environment variables.  
  
### Configuring Email with Cloudflare and ProtonMail  
1. **Set up your domain on Cloudflare:**  
    - Add your domain to Cloudflare and update your DNS settings to point to Netlify.  
  
2. **Set up email forwarding on Cloudflare:**  
    - Add an MX record to route emails to your ProtonMail account.  
    - Set up email forwarding rules to forward emails from your custom domain to your ProtonMail address.  
  
## Contributing  
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.  
  
1. Fork the Project.  
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).  
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).  
4. Push to the Branch (`git push origin feature/AmazingFeature`).  
5. Open a Pull Request.  
  
## License  
Distributed under the MIT License. See `LICENSE` for more information.  
  
---  
  
Thank you for visiting our repository. If you have any questions or suggestions, feel free to open an issue or contact us at [info@quantelect.com](mailto:info@quantelect.com).  
