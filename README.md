# ML Portfolio Website

A modern, minimalistic portfolio template for Machine Learning Engineers and Data Scientists. Built with **Next.js 15**, **TailwindCSS 4**, and **MDX** — fully containerized with Docker.

## Quick Start

> **Prerequisites**: Only [Docker](https://docs.docker.com/get-docker/) and Docker Compose are required. No Node.js installation needed on the host.

### Development (with hot reload)

```bash
docker compose up dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
docker compose up prod --build
```

Open [http://localhost](http://localhost) (port 80).

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Landing page
│   ├── projects/           # Projects listing + detail pages
│   ├── case-studies/       # Case studies listing + detail pages
│   ├── skills/             # Tech stack page
│   ├── blog/               # Blog listing + post pages
│   ├── resume/             # Resume / CV page
│   └── contact/            # Contact form page
├── components/             # Reusable UI components
│   ├── layout/             # Navbar, Footer
│   ├── ui/                 # Cards, Tags, Timeline, etc.
│   └── mdx/                # MDX rendering components
├── content/                # MDX content files
│   ├── projects/           # Project write-ups
│   ├── case-studies/       # Case study write-ups
│   └── blog/               # Blog posts
├── data/
│   └── siteConfig.ts       # ⬅️ Central configuration (edit this!)
└── lib/                    # Utilities (MDX parsing, GitHub API)
```

## Customization

### 1. Edit Site Configuration

All personal information is in `src/data/siteConfig.ts`:

- Name, title, description
- Social links (GitHub, LinkedIn, email)
- Skills and technologies
- Work experience and education
- Publications

### 2. Add Content

Create `.mdx` files in the `src/content/` directories:

**Projects** (`src/content/projects/my-project.mdx`):
```yaml
---
title: "My ML Project"
description: "Brief description"
date: "2024-01-01"
tags: ["PyTorch", "NLP"]
github: "https://github.com/..."
---
Your MDX content here...
```

**Blog Posts** (`src/content/blog/my-post.mdx`):
```yaml
---
title: "My Blog Post"
description: "Brief description"
date: "2024-01-01"
tags: ["Machine Learning"]
readingTime: "5 min read"
---
Your MDX content here...
```

### 3. Add Your Resume PDF

Place your CV at `public/resume.pdf`.

## Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

| Variable | Description | Required |
|----------|-------------|----------|
| `GITHUB_USERNAME` | Your GitHub username for repo widget | Yes |
| `GITHUB_TOKEN` | GitHub PAT for higher API rate limits | No |
| `NEXT_PUBLIC_SITE_URL` | Production URL for SEO | No |

## AWS Deployment

The Docker image is production-ready for cloud deployment:

### AWS ECS / Fargate

1. Push to ECR:
   ```bash
   aws ecr get-login-password | docker login --username AWS --password-stdin <account>.dkr.ecr.<region>.amazonaws.com
   docker build -t ml-portfolio .
   docker tag ml-portfolio:latest <account>.dkr.ecr.<region>.amazonaws.com/ml-portfolio:latest
   docker push <account>.dkr.ecr.<region>.amazonaws.com/ml-portfolio:latest
   ```

2. Create ECS task definition pointing to ECR image
3. Configure environment variables in the task definition
4. Set up an ALB for HTTPS termination

### AWS EC2

```bash
# On EC2 instance
docker pull <your-ecr-url>/ml-portfolio:latest
docker run -d -p 80:3000 --env-file .env ml-portfolio
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS 4
- **Content**: MDX with `next-mdx-remote`
- **Language**: TypeScript
- **Containerization**: Docker (multi-stage build)
- **Icons**: React Icons (Feather)

## License

MIT
