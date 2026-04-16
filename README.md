# Work Management Arbitragem

## Setup Instructions for Supabase
1. Create a new project on [Supabase](https://supabase.io/).
2. Configure the database and authentication settings as needed.
3. Obtain the Supabase URL and public API key.

## Environment Variables
Make sure to set the following environment variables in your `.env` file:

```bash
SUPABASE_URL=<your-supabase-url>
SUPABASE_PUBLIC_ANON_KEY=<your-public-api-key>
```

## Deployment Steps
1. Build the application using the command:
   ```bash
   npm run build
   ```
2. Deploy to your preferred hosting service following their specific instructions.

3. Ensure that the `.env` file is present in the deployment environment with all necessary variables set.