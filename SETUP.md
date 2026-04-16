# Setup Instructions for Supabase and Vercel Deployment

## Step 1: Setting Up Supabase
1. Go to the [Supabase website](https://supabase.com/).
2. Create an account or log in if you already have one.
3. Click on the "New Project" button.
4. Fill in the project details:
   - **Project Name**: Your project name (e.g., `work-management-arbitragem`).
   - **Password**: Set a strong password for your database.

5. Click on "Create Project" and wait for the database to be initialized.

## Step 2: Configuring Environment Variables
1. In your Supabase project dashboard, navigate to the "Settings" tab and click on "API".
2. Copy the `SUPABASE_URL` and `SUPABASE_ANON_KEY` from the API settings. 
3. Create a `.env` file in the root of your project if it does not exist already.

4. Add the following lines to your `.env` file:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
   (Make sure to replace `your_supabase_url` and `your_supabase_anon_key` with actual values from your Supabase project)

## Step 3: Deploying to Vercel
1. Go to the [Vercel website](https://vercel.com/).
2. Sign up or log in if you already have an account.
3. Click on the "New Project" button from the dashboard.
4. Import your GitHub repository by connecting it to your Vercel account (ensure you grant required permissions).
5. Select the `work-management-arbitragem` repository from your projects list.
6. When prompted, add the required environment variables: 
   - **SUPABASE_URL**: your Supabase URL 
   - **SUPABASE_ANON_KEY**: your Supabase anon key 

7. Follow the prompts to configure your deployment settings and click on "Deploy". 
8. Once the deployment is complete, Vercel will provide you with a URL for your live application.

## Conclusion
You are now set up with Supabase and your project is deployed on Vercel. If you encounter any issues, refer to the documentation for [Supabase](https://supabase.com/docs) and [Vercel](https://vercel.com/docs).