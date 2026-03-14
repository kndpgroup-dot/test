# Bleame Shopify Theme

A modern, conversion-optimized Shopify theme inspired by the Bleame e-commerce store design.

## Features

- **Modern Design**: Purple/pink gradient color scheme with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Conversion Optimized**: Built-in trust badges, testimonials, and social proof elements
- **Customizable**: Easy to customize through Shopify theme editor
- **Fast Loading**: Optimized for performance

## Theme Sections

### Home Page
- Announcement Bar with countdown timer
- Hero section with CTA
- Product badges
- Featured collection
- Testimonials
- Stats banner
- FAQ accordion

### Product Page
- Image gallery with thumbnails
- Product information
- Add to cart functionality
- Product recommendations

### Collection Page
- Product grid
- Filtering options

### Cart Page
- Shopping cart management
- Order summary
- Trust badges

## Installation Instructions

### 1. Package the Theme

First, create a ZIP file of the theme:

```bash
cd /app
zip -r bleame-shopify-theme.zip shopify-theme -x "*.DS_Store" -x "*__MACOSX*"
```

### 2. Upload to Shopify

1. Log in to your Shopify admin panel
2. Go to **Online Store** > **Themes**
3. Click **Add theme** > **Upload zip file**
4. Select the `bleame-shopify-theme.zip` file
5. Click **Upload** and wait for the theme to be installed

### 3. Customize the Theme

1. Click **Customize** on the newly installed theme
2. Use the theme editor to:
   - Add your logo
   - Set your brand colors
   - Upload product images
   - Customize text content
   - Configure sections

### 4. Set Up Products

1. Go to **Products** > **Add product**
2. Create products with:
   - Title
   - Description
   - Price and compare at price
   - Images
   - Inventory

### 5. Create Collections

1. Go to **Products** > **Collections**
2. Create collections to organize your products
3. Link collections to the Featured Collection section on homepage

### 6. Configure Pages

Create these pages for full functionality:
- Reviews page (`/pages/reviews`)
- Help Center page (`/pages/help-center`)

## Theme Customization

### Colors
Navigate to **Theme settings** > **Colors** to customize:
- Primary color (default: #9333ea)
- Secondary color (default: #ec4899)
- Text color
- Background color

### Homepage Sections

Edit homepage sections through the theme editor:
- **Hero Section**: Update title, features, button text, and image
- **Product Badges**: Add/remove badges with custom icons and text
- **Featured Collection**: Select which collection to display
- **Testimonials**: Add customer reviews and photos
- **Stats Banner**: Update statistics and percentages
- **FAQ**: Add/edit frequently asked questions

### Navigation

Configure navigation menus at **Online Store** > **Navigation**:
- Main menu
- Footer menu

## Product Setup Tips

### Product Images
- Upload high-quality images (at least 800x800px)
- Use consistent aspect ratios
- Show product from multiple angles

### Product Variants
- Set up variants for different sizes/colors if needed
- Configure inventory tracking

### Product Descriptions
- Write compelling product descriptions
- Include benefits and features
- Add usage instructions

### Pricing
- Set regular price
- Set "compare at price" for showing discounts
- Discounts will automatically show as badges

## Metafields (Optional)

For enhanced functionality, you can add metafields:

### Product Metafields
- `custom.review_count` (number) - Number of reviews
- `custom.badges` (text) - Additional product badges

## Support

For theme support and customization requests, please contact your developer.

## File Structure

```
shopify-theme/
├── layout/
│   └── theme.liquid          # Main theme layout
├── templates/
│   ├── index.liquid          # Homepage template
│   ├── product.liquid        # Product page template
│   ├── collection.liquid     # Collection page template
│   ├── cart.liquid           # Cart page template
│   └── page.liquid           # Default page template
├── sections/
│   ├── announcement-bar.liquid
│   ├── header.liquid
│   ├── hero.liquid
│   ├── product-badges.liquid
│   ├── featured-collection.liquid
│   ├── testimonials.liquid
│   ├── stats-banner.liquid
│   ├── faq.liquid
│   └── footer.liquid
├── snippets/
│   ├── product-card.liquid   # Product card component
│   ├── product-gallery.liquid
│   ├── star-rating.liquid
│   └── meta-tags.liquid
├── assets/
│   ├── theme.css             # Main stylesheet
│   └── theme.js              # Main JavaScript
├── config/
│   ├── settings_schema.json  # Theme settings configuration
│   └── settings_data.json    # Default settings
└── locales/
    └── en.default.json       # English translations
```

## Requirements

- Shopify store (any plan)
- Products created in your store
- Basic understanding of Shopify admin

## Best Practices

1. **Test Before Publishing**: Preview the theme before making it live
2. **Backup Current Theme**: Always backup your current theme before switching
3. **Optimize Images**: Compress images before uploading for faster loading
4. **Mobile Testing**: Test all pages on mobile devices
5. **Cart Testing**: Test the complete checkout flow

## Version

Version 1.0.0

## License

This theme is custom-built for your store.
