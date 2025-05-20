# Resume Pros Kenya

A professional, modern website for Resume Pros Kenya, a career assistance business based in Kenya. The website showcases their services, client testimonials, and provides easy contact options for potential clients.

## Features

- **Modern UI**: Clean, professional design with responsive layout for all devices
- **Service Showcase**: Detailed information about career assistance services
- **Client Testimonials**: Real client success stories with star ratings
- **WhatsApp Integration**: Direct ordering via WhatsApp with pre-filled messages
- **Contact Form**: Google Forms integration for client inquiries
- **Social Media Links**: Connect with Resume Pros Kenya on various platforms
- **SEO Ready**: Optimized for search engines with proper meta tags

## Technologies Used

- **Frontend Framework**: React.js with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom components
- **Routing**: Wouter for lightweight page navigation
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Font Awesome for social media and UI icons
- **Animation**: Custom CSS animations for enhanced user experience

## Pages

1. **Home**: Landing page with hero section, key value points, and previews of services and testimonials
2. **Services**: Listing of available services with pricing and details
3. **Service Details**: In-depth information about each service
4. **Client Reviews**: Client testimonials with ratings
5. **About Us**: Company information and history
6. **Contact Us**: Contact form and direct communication options
7. **404 Not Found**: Custom error page for better user experience

## Project Structure

The project follows a modern React application structure:

```
resumeproskenya/
├── client/
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   │   ├── home/         # Home page specific components
│   │   │   ├── layout/       # Layout components (Header, Footer)
│   │   │   ├── services/     # Service related components
│   │   │   ├── reviews/      # Testimonial components
│   │   │   ├── shared/       # Shared UI components
│   │   │   └── ui/           # Base UI components
│   │   ├── lib/              # Utility functions and data
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom React hooks
│   │   ├── App.tsx           # Main application component
│   │   ├── index.css         # Global styles
│   │   └── main.tsx          # Application entry point
│   └── index.html            # HTML template
```

## Deployment Instructions (Vercel)

### Prerequisites

- Node.js (v16 or higher)
- A Vercel account (https://vercel.com)

### Steps to Deploy

1. **Create a GitHub Repository**:
   - Push your project to a GitHub repository

2. **Connect to Vercel**:
   - Log in to your Vercel account
   - Click "New Project"
   - Import your GitHub repository
   - Select the "React" framework preset

3. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Set Environment Variables** (if needed):
   - Add any environment variables your project might need

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application

6. **Custom Domain** (Optional):
   - In your project dashboard, go to "Settings" > "Domains"
   - Add your custom domain and follow verification instructions

### Maintenance

- Updates can be deployed by pushing changes to your repository's main branch
- Vercel automatically rebuilds and deploys your application on code changes

## Contact

For business inquiries, please contact:
- **Email**: ResumeProsKenya@gmail.com
- **WhatsApp**: +254 706874794
- **Location**: Ruaraka, Nairobi, Kenya

---

&copy; 2023 Resume Pros Kenya. All rights reserved.