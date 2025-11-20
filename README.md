# ✨ Welcome to Your Spark Template!
You've just launched your brand-new Spark Template Codespace — everything’s fired up and ready for you to explore, build, and create with Spark!

This template is your blank canvas. It comes with a minimal setup to help you get started quickly with Spark development.

🚀 What's Inside?
- A clean, minimal Spark environment
- Pre-configured for local development
- Ready to scale with your ideas
  
🧠 What Can You Do?

Right now, this is just a starting point — the perfect place to begin building and testing your Spark applications.

🧹 Just Exploring?
No problem! If you were just checking things out and don’t need to keep this code:

- Simply delete your Spark.
- Everything will be cleaned up — no traces left behind.

📄 License For Spark Template Resources 

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.

## GitHub Pages Deployment

This repo now ships with an automated GitHub Pages workflow (`.github/workflows/deploy-pages.yml`). To publish the latest build:

1. Commit and push changes to `main`.
2. In the repo’s Settings → Pages, select “GitHub Actions” as the source (first time only).
3. The `Deploy to GitHub Pages` workflow will build the Vite site with the correct base path and push it to the `github-pages` environment.
4. When the workflow finishes, the deployed URL appears in the Environment panel (e.g., `https://serstakealot.github.io/grief-talk/`).

### Custom domain (GoDaddy)

When you’re ready to use your GoDaddy domain:

1. In repo Settings → Pages → Custom domain, enter the domain (e.g., `www.example.com`). GitHub will show the CNAME target.
2. In GoDaddy DNS, create:
	- A `CNAME` record for `www` pointing to `serstakealot.github.io`.
	- (Optional) An `A` record for `@` pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`) if you want apex support.
3. Back in GitHub, wait for DNS to propagate, then click “Verify”.
4. Enable “Enforce HTTPS” once the certificate is issued (can take a few minutes).

After DNS is set, future pushes to `main` will continue to auto-deploy to the custom domain.
