This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
my-app
├─ app
│  ├─ (routes)
│  │  ├─ about
│  │  │  └─ page.tsx
│  │  ├─ cart
│  │  │  └─ page.tsx
│  │  ├─ comingSoon
│  │  │  └─ page.tsx
│  │  ├─ contact
│  │  │  └─ page.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ privacyPolicy
│  │  │  └─ page.tsx
│  │  ├─ products
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ profile
│  │  │  └─ page.tsx
│  │  ├─ register
│  │  │  └─ page.tsx
│  │  └─ testimonial
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ common
│  │  │  └─ CustomContainer.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  └─ Navbar.tsx
│  │  ├─ providers
│  │  │  └─ LayoutProvider.tsx
│  │  ├─ sections
│  │  │  ├─ about
│  │  │  │  └─ AboutSection.tsx
│  │  │  ├─ about2
│  │  │  │  └─ AboutSection.tsx
│  │  │  ├─ account
│  │  │  │  ├─ LoginSection.tsx
│  │  │  │  └─ RegisterSection.tsx
│  │  │  ├─ cartPage
│  │  │  │  ├─ CartPage.tsx
│  │  │  │  └─ skelton
│  │  │  │     └─ CartItemSkeleton.tsx
│  │  │  ├─ comingSoon
│  │  │  │  └─ ComingSoon.tsx
│  │  │  ├─ contact
│  │  │  │  └─ ContactSection.tsx
│  │  │  ├─ contactPage
│  │  │  │  └─ ContactPage.tsx
│  │  │  ├─ faqs
│  │  │  │  └─ FaqSection.tsx
│  │  │  ├─ hero
│  │  │  │  ├─ hero.module.css
│  │  │  │  └─ Hero.tsx
│  │  │  ├─ PrivactPolicy
│  │  │  │  └─ PrivacyPage.tsx
│  │  │  ├─ products
│  │  │  │  ├─ modal
│  │  │  │  │  └─ ProductsSectionModal.tsx
│  │  │  │  ├─ ProductsSection.tsx
│  │  │  │  └─ skelton
│  │  │  │     └─ ProductsSectionSkeleton.tsx
│  │  │  ├─ productsPage
│  │  │  │  └─ Products.tsx
│  │  │  ├─ profilePage
│  │  │  │  └─ ProfilePage.tsx
│  │  │  └─ testimonials
│  │  │     └─ TestimonialsSection.tsx
│  │  └─ ui
│  │     ├─ bredCrumb
│  │     │  └─ BreadCrumb.tsx
│  │     ├─ faq
│  │     │  └─ FaqCard.tsx
│  │     ├─ image effect
│  │     │  └─ ZoomImage.tsx
│  │     ├─ products
│  │     │  └─ ProductCard.tsx
│  │     ├─ productsPage
│  │     │  ├─ button.tsx
│  │     │  ├─ dialog.tsx
│  │     │  ├─ ProductCartButton.tsx
│  │     │  ├─ ProductPageCards.tsx
│  │     │  ├─ RelatedProducts.tsx
│  │     │  └─ skilton
│  │     │     └─ ProductCardSkeleton.tsx
│  │     └─ scrollToTop
│  │        └─ ScrollToTopButton.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ pages
│     └─ HomePage.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animation
│  │  ├─ Loading Dots In Yellow.json
│  │  └─ Trail loading.json
│  ├─ favicon.png
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ image
│  │  ├─ 009furniture-banner-04.jpg
│  │  ├─ 009furniture-banner-10.jpg
│  │  ├─ 009furniture-slideshow-01.jpg
│  │  ├─ 009furniture-slideshow-03.jpg
│  │  ├─ 1 (1).jpg
│  │  ├─ 1 (2).jpg
│  │  ├─ 1.jpg
│  │  ├─ 2.jpg
│  │  ├─ 3.jpg
│  │  ├─ 388_005_81b968c004.jpg
│  │  ├─ 5.jpg
│  │  ├─ about-one-1-1.jpg
│  │  ├─ about-one-1-2.jpg
│  │  ├─ about-one-design-make-img-1.jpg
│  │  ├─ about.jpeg
│  │  ├─ about.rar
│  │  ├─ awards-one-img-1.jpg
│  │  ├─ awards-one-img-2.jpg
│  │  ├─ banner-1.jpg
│  │  ├─ banner-2.jpg
│  │  ├─ banner-3.jpg
│  │  ├─ banner-4.jpg
│  │  ├─ blog-1-1.jpg
│  │  ├─ blog-1-2.jpg
│  │  ├─ blog-1-3.jpg
│  │  ├─ blog-details-client-img.jpg
│  │  ├─ blog-single-01.jpg
│  │  ├─ blog_header.png
│  │  ├─ breadcrumb.jpeg
│  │  ├─ coming-soon-page-bg.jpg
│  │  ├─ comment-1-1.jpg
│  │  ├─ contact.jpeg
│  │  ├─ error.jpg
│  │  ├─ faq.svg
│  │  ├─ furniture-gallery_01.jpg
│  │  ├─ furniture-gallery_02.jpg
│  │  ├─ furniture-gallery_03.jpg
│  │  ├─ furniture-gallery_04.jpg
│  │  ├─ furniture-gallery_05.jpg
│  │  ├─ google.png
│  │  ├─ latest-project-02.jpg
│  │  ├─ latest-project-04.jpg
│  │  ├─ latest-project-05.jpg
│  │  ├─ latest-project-06.jpg
│  │  ├─ living-room-with-blue-sofa-gold-coffee-table.jpg
│  │  ├─ logo-png.png
│  │  ├─ logo.jpeg
│  │  ├─ logo.png
│  │  ├─ logo2.png
│  │  ├─ lp-1-1.jpg
│  │  ├─ lp-1-2.jpg
│  │  ├─ lp-1-3.jpg
│  │  ├─ Oops! 404 Error with a broken robot-rafiki.svg
│  │  ├─ post-3-1.jpg
│  │  ├─ pro-09.jpg
│  │  ├─ pro-10.jpg
│  │  ├─ pro-11.jpg
│  │  ├─ pro-13.jpg
│  │  ├─ pro-15.jpg
│  │  ├─ pro-16.jpg
│  │  ├─ products1.jpeg
│  │  ├─ products2.jpeg
│  │  ├─ products3.jpeg
│  │  ├─ products4.jpeg
│  │  ├─ projects-1-1.jpg
│  │  ├─ projects-1-2.jpg
│  │  ├─ projects-1-3.jpg
│  │  ├─ projects-1-4.jpg
│  │  ├─ serve2.png
│  │  ├─ service-list-01.jpg
│  │  ├─ service-list-05.jpg
│  │  ├─ service-list-06.jpg
│  │  ├─ team-1-1.jpg
│  │  ├─ team-1-2.jpg
│  │  ├─ team-1-3.jpg
│  │  ├─ team-1-4.jpg
│  │  ├─ team-1-5.jpg
│  │  ├─ team-1-6.jpg
│  │  ├─ team1.jpg
│  │  ├─ team2.jpg
│  │  ├─ team3.jpg
│  │  ├─ team4.jpg
│  │  ├─ team5.jpg
│  │  ├─ team6.jpg
│  │  ├─ testimonial-2-1.jpg
│  │  ├─ testimonial-2-2.jpg
│  │  ├─ testimonial-2-3.jpg
│  │  ├─ testimonial-2-4.jpg
│  │  ├─ testimonial-2-5.jpg
│  │  ├─ testimonial-2-6.jpg
│  │  └─ undraw_blogging_re_kl0d.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ tsconfig.json
└─ types
   └─ isotope-layout.d.ts

```

```
my-app
├─ app
│  ├─ (routes)
│  │  ├─ about
│  │  │  └─ page.tsx
│  │  ├─ cart
│  │  │  ├─ CartClient.tsx
│  │  │  └─ page.tsx
│  │  ├─ contact
│  │  │  └─ page.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ privacyPolicy
│  │  │  └─ page.tsx
│  │  ├─ products
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ profile
│  │  │  └─ page.tsx
│  │  ├─ register
│  │  │  └─ page.tsx
│  │  └─ testimonial
│  │     └─ page.tsx
│  ├─ coming-soon
│  │  └─ page.tsx
│  ├─ components
│  │  ├─ common
│  │  │  └─ CustomContainer.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  └─ Navbar.tsx
│  │  ├─ providers
│  │  │  └─ LayoutProvider.tsx
│  │  ├─ sections
│  │  │  ├─ about
│  │  │  │  └─ AboutSection.tsx
│  │  │  ├─ about2
│  │  │  │  └─ AboutSection.tsx
│  │  │  ├─ account
│  │  │  │  ├─ LoginSection.tsx
│  │  │  │  └─ RegisterSection.tsx
│  │  │  ├─ cartPage
│  │  │  │  ├─ CartPage.tsx
│  │  │  │  └─ skelton
│  │  │  │     └─ CartItemSkeleton.tsx
│  │  │  ├─ comingSoon
│  │  │  │  └─ ComingSoon.tsx
│  │  │  ├─ contact
│  │  │  │  └─ ContactSection.tsx
│  │  │  ├─ contactPage
│  │  │  │  └─ ContactPage.tsx
│  │  │  ├─ faqs
│  │  │  │  └─ FaqSection.tsx
│  │  │  ├─ hero
│  │  │  │  ├─ hero.module.css
│  │  │  │  └─ Hero.tsx
│  │  │  ├─ PrivactPolicy
│  │  │  │  └─ PrivacyPage.tsx
│  │  │  ├─ products
│  │  │  │  ├─ modal
│  │  │  │  │  └─ ProductsSectionModal.tsx
│  │  │  │  ├─ ProductsSection.tsx
│  │  │  │  └─ skelton
│  │  │  │     └─ ProductsSectionSkeleton.tsx
│  │  │  ├─ productsPage
│  │  │  │  └─ Products.tsx
│  │  │  ├─ profilePage
│  │  │  │  └─ ProfilePage.tsx
│  │  │  └─ testimonials
│  │  │     └─ TestimonialsSection.tsx
│  │  └─ ui
│  │     ├─ bredCrumb
│  │     │  └─ BreadCrumb.tsx
│  │     ├─ faq
│  │     │  └─ FaqCard.tsx
│  │     ├─ image effect
│  │     │  └─ ZoomImage.tsx
│  │     ├─ products
│  │     │  └─ ProductCard.tsx
│  │     ├─ productsPage
│  │     │  ├─ button.tsx
│  │     │  ├─ dialog.tsx
│  │     │  ├─ ProductCartButton.tsx
│  │     │  ├─ ProductPageCards.tsx
│  │     │  ├─ RelatedProducts.tsx
│  │     │  └─ skilton
│  │     │     └─ ProductCardSkeleton.tsx
│  │     └─ scrollToTop
│  │        └─ ScrollToTopButton.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ pages
│     └─ HomePage.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animation
│  │  ├─ Loading Dots In Yellow.json
│  │  └─ Trail loading.json
│  ├─ favicon.png
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ image
│  │  ├─ 009furniture-banner-04.jpg
│  │  ├─ 009furniture-banner-10.jpg
│  │  ├─ 009furniture-slideshow-01.jpg
│  │  ├─ 009furniture-slideshow-03.jpg
│  │  ├─ 1 (1).jpg
│  │  ├─ 1 (2).jpg
│  │  ├─ 1.jpg
│  │  ├─ 2.jpg
│  │  ├─ 3.jpg
│  │  ├─ 388_005_81b968c004.jpg
│  │  ├─ 5.jpg
│  │  ├─ about-one-1-1.jpg
│  │  ├─ about-one-1-2.jpg
│  │  ├─ about-one-design-make-img-1.jpg
│  │  ├─ about.jpeg
│  │  ├─ about.rar
│  │  ├─ awards-one-img-1.jpg
│  │  ├─ awards-one-img-2.jpg
│  │  ├─ banner-1.jpg
│  │  ├─ banner-2.jpg
│  │  ├─ banner-3.jpg
│  │  ├─ banner-4.jpg
│  │  ├─ blog-1-1.jpg
│  │  ├─ blog-1-2.jpg
│  │  ├─ blog-1-3.jpg
│  │  ├─ blog-details-client-img.jpg
│  │  ├─ blog-single-01.jpg
│  │  ├─ blog_header.png
│  │  ├─ breadcrumb.jpeg
│  │  ├─ coming-soon-page-bg.jpg
│  │  ├─ comment-1-1.jpg
│  │  ├─ contact.jpeg
│  │  ├─ error.jpg
│  │  ├─ faq.svg
│  │  ├─ furniture-gallery_01.jpg
│  │  ├─ furniture-gallery_02.jpg
│  │  ├─ furniture-gallery_03.jpg
│  │  ├─ furniture-gallery_04.jpg
│  │  ├─ furniture-gallery_05.jpg
│  │  ├─ google.png
│  │  ├─ latest-project-02.jpg
│  │  ├─ latest-project-04.jpg
│  │  ├─ latest-project-05.jpg
│  │  ├─ latest-project-06.jpg
│  │  ├─ living-room-with-blue-sofa-gold-coffee-table.jpg
│  │  ├─ logo-png.png
│  │  ├─ logo.jpeg
│  │  ├─ logo.png
│  │  ├─ lp-1-1.jpg
│  │  ├─ lp-1-2.jpg
│  │  ├─ lp-1-3.jpg
│  │  ├─ Oops! 404 Error with a broken robot-rafiki.svg
│  │  ├─ post-3-1.jpg
│  │  ├─ pro-09.jpg
│  │  ├─ pro-10.jpg
│  │  ├─ pro-11.jpg
│  │  ├─ pro-13.jpg
│  │  ├─ pro-15.jpg
│  │  ├─ pro-16.jpg
│  │  ├─ products1.jpeg
│  │  ├─ products2.jpeg
│  │  ├─ products3.jpeg
│  │  ├─ products4.jpeg
│  │  ├─ projects-1-1.jpg
│  │  ├─ projects-1-2.jpg
│  │  ├─ projects-1-3.jpg
│  │  ├─ projects-1-4.jpg
│  │  ├─ serve2.png
│  │  ├─ service-list-01.jpg
│  │  ├─ service-list-05.jpg
│  │  ├─ service-list-06.jpg
│  │  ├─ team-1-1.jpg
│  │  ├─ team-1-2.jpg
│  │  ├─ team-1-3.jpg
│  │  ├─ team-1-4.jpg
│  │  ├─ team-1-5.jpg
│  │  ├─ team-1-6.jpg
│  │  ├─ team1.jpg
│  │  ├─ team2.jpg
│  │  ├─ team3.jpg
│  │  ├─ team4.jpg
│  │  ├─ team5.jpg
│  │  ├─ team6.jpg
│  │  ├─ testimonial-2-1.jpg
│  │  ├─ testimonial-2-2.jpg
│  │  ├─ testimonial-2-3.jpg
│  │  ├─ testimonial-2-4.jpg
│  │  ├─ testimonial-2-5.jpg
│  │  ├─ testimonial-2-6.jpg
│  │  └─ undraw_blogging_re_kl0d.svg
│  ├─ logo2.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ structure.txt
├─ tsconfig.json
└─ types
   └─ isotope-layout.d.ts

```

```
my-app
├─ app
│  ├─ (pageAlone)
│  │  ├─ coming-soon
│  │  │  └─ page.tsx
│  │  └─ layout.tsx
│  ├─ (routes)
│  │  ├─ about
│  │  │  └─ page.tsx
│  │  ├─ cart
│  │  │  ├─ CartClient.tsx
│  │  │  └─ page.tsx
│  │  ├─ contact
│  │  │  └─ page.tsx
│  │  ├─ login
│  │  │  └─ page.tsx
│  │  ├─ privacyPolicy
│  │  │  └─ page.tsx
│  │  ├─ products
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]
│  │  │     └─ page.tsx
│  │  ├─ profile
│  │  │  └─ page.tsx
│  │  ├─ register
│  │  │  └─ page.tsx
│  │  └─ testimonial
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ common
│  │  │  └─ CustomContainer.tsx
│  │  ├─ layout
│  │  │  ├─ Footer.tsx
│  │  │  └─ Navbar.tsx
│  │  ├─ providers
│  │  │  └─ LayoutProvider.tsx
│  │  ├─ sections
│  │  │  ├─ about
│  │  │  │  └─ AboutSection.tsx
│  │  │  ├─ about2
│  │  │  │  └─ AboutSection.tsx
│  │  │  ├─ account
│  │  │  │  ├─ LoginSection.tsx
│  │  │  │  └─ RegisterSection.tsx
│  │  │  ├─ cartPage
│  │  │  │  ├─ CartPage.tsx
│  │  │  │  └─ skelton
│  │  │  │     └─ CartItemSkeleton.tsx
│  │  │  ├─ comingSoon
│  │  │  │  └─ ComingSoon.tsx
│  │  │  ├─ contact
│  │  │  │  └─ ContactSection.tsx
│  │  │  ├─ contactPage
│  │  │  │  └─ ContactPage.tsx
│  │  │  ├─ faqs
│  │  │  │  └─ FaqSection.tsx
│  │  │  ├─ hero
│  │  │  │  ├─ hero.module.css
│  │  │  │  └─ Hero.tsx
│  │  │  ├─ PrivactPolicy
│  │  │  │  └─ PrivacyPage.tsx
│  │  │  ├─ products
│  │  │  │  ├─ modal
│  │  │  │  │  └─ ProductsSectionModal.tsx
│  │  │  │  ├─ ProductsSection.tsx
│  │  │  │  └─ skelton
│  │  │  │     └─ ProductsSectionSkeleton.tsx
│  │  │  ├─ productsPage
│  │  │  │  └─ Products.tsx
│  │  │  ├─ profilePage
│  │  │  │  └─ ProfilePage.tsx
│  │  │  └─ testimonials
│  │  │     └─ TestimonialsSection.tsx
│  │  └─ ui
│  │     ├─ bredCrumb
│  │     │  └─ BreadCrumb.tsx
│  │     ├─ faq
│  │     │  └─ FaqCard.tsx
│  │     ├─ image effect
│  │     │  └─ ZoomImage.tsx
│  │     ├─ products
│  │     │  └─ ProductCard.tsx
│  │     ├─ productsPage
│  │     │  ├─ button.tsx
│  │     │  ├─ dialog.tsx
│  │     │  ├─ ProductCartButton.tsx
│  │     │  ├─ ProductPageCards.tsx
│  │     │  ├─ RelatedProducts.tsx
│  │     │  └─ skilton
│  │     │     └─ ProductCardSkeleton.tsx
│  │     └─ scrollToTop
│  │        └─ ScrollToTopButton.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ pages
│     └─ HomePage.tsx
├─ components.json
├─ lib
│  └─ utils.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ animation
│  │  ├─ Loading Dots In Yellow.json
│  │  └─ Trail loading.json
│  ├─ favicon.png
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ image
│  │  ├─ 009furniture-banner-04.jpg
│  │  ├─ 009furniture-banner-10.jpg
│  │  ├─ 009furniture-slideshow-01.jpg
│  │  ├─ 009furniture-slideshow-03.jpg
│  │  ├─ 1 (1).jpg
│  │  ├─ 1 (2).jpg
│  │  ├─ 1.jpg
│  │  ├─ 2.jpg
│  │  ├─ 3.jpg
│  │  ├─ 388_005_81b968c004.jpg
│  │  ├─ 5.jpg
│  │  ├─ about-one-1-1.jpg
│  │  ├─ about-one-1-2.jpg
│  │  ├─ about-one-design-make-img-1.jpg
│  │  ├─ about.jpeg
│  │  ├─ about.rar
│  │  ├─ awards-one-img-1.jpg
│  │  ├─ awards-one-img-2.jpg
│  │  ├─ banner-1.jpg
│  │  ├─ banner-2.jpg
│  │  ├─ banner-3.jpg
│  │  ├─ banner-4.jpg
│  │  ├─ blog-1-1.jpg
│  │  ├─ blog-1-2.jpg
│  │  ├─ blog-1-3.jpg
│  │  ├─ blog-details-client-img.jpg
│  │  ├─ blog-single-01.jpg
│  │  ├─ blog_header.png
│  │  ├─ breadcrumb.jpeg
│  │  ├─ coming-soon-page-bg.jpg
│  │  ├─ comment-1-1.jpg
│  │  ├─ contact.jpeg
│  │  ├─ error.jpg
│  │  ├─ faq.svg
│  │  ├─ furniture-gallery_01.jpg
│  │  ├─ furniture-gallery_02.jpg
│  │  ├─ furniture-gallery_03.jpg
│  │  ├─ furniture-gallery_04.jpg
│  │  ├─ furniture-gallery_05.jpg
│  │  ├─ google.png
│  │  ├─ latest-project-02.jpg
│  │  ├─ latest-project-04.jpg
│  │  ├─ latest-project-05.jpg
│  │  ├─ latest-project-06.jpg
│  │  ├─ living-room-with-blue-sofa-gold-coffee-table.jpg
│  │  ├─ logo-png.png
│  │  ├─ logo.jpeg
│  │  ├─ logo.png
│  │  ├─ lp-1-1.jpg
│  │  ├─ lp-1-2.jpg
│  │  ├─ lp-1-3.jpg
│  │  ├─ Oops! 404 Error with a broken robot-rafiki.svg
│  │  ├─ post-3-1.jpg
│  │  ├─ pro-09.jpg
│  │  ├─ pro-10.jpg
│  │  ├─ pro-11.jpg
│  │  ├─ pro-13.jpg
│  │  ├─ pro-15.jpg
│  │  ├─ pro-16.jpg
│  │  ├─ products1.jpeg
│  │  ├─ products2.jpeg
│  │  ├─ products3.jpeg
│  │  ├─ products4.jpeg
│  │  ├─ projects-1-1.jpg
│  │  ├─ projects-1-2.jpg
│  │  ├─ projects-1-3.jpg
│  │  ├─ projects-1-4.jpg
│  │  ├─ serve2.png
│  │  ├─ service-list-01.jpg
│  │  ├─ service-list-05.jpg
│  │  ├─ service-list-06.jpg
│  │  ├─ team-1-1.jpg
│  │  ├─ team-1-2.jpg
│  │  ├─ team-1-3.jpg
│  │  ├─ team-1-4.jpg
│  │  ├─ team-1-5.jpg
│  │  ├─ team-1-6.jpg
│  │  ├─ team1.jpg
│  │  ├─ team2.jpg
│  │  ├─ team3.jpg
│  │  ├─ team4.jpg
│  │  ├─ team5.jpg
│  │  ├─ team6.jpg
│  │  ├─ testimonial-2-1.jpg
│  │  ├─ testimonial-2-2.jpg
│  │  ├─ testimonial-2-3.jpg
│  │  ├─ testimonial-2-4.jpg
│  │  ├─ testimonial-2-5.jpg
│  │  ├─ testimonial-2-6.jpg
│  │  └─ undraw_blogging_re_kl0d.svg
│  ├─ logo2.png
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
├─ README.md
├─ structure.txt
├─ tsconfig.json
└─ types
   └─ isotope-layout.d.ts

```