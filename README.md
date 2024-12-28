# React + Vite

This project provides a minimal setup to get React working with Vite, enabling fast development with Hot Module Replacement (HMR) and some ESLint rules.

## Getting Started

Follow the steps below to run and build the project:

### 1. Install Dependencies
Run the following command to install the necessary dependencies:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to S3
```bash
aws s3 sync dist/ s3://<your-bucket-name> --delete
```

