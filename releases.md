# Release Notes

- [Wowy 1.8](#version_1_8)
- [Wowy 1.7](#version_1_7)
- [Wowy 1.6](#version_1_6)
- [Wowy 1.5](#version_1_5)
- [Wowy 1.4](#version_1_4)
- [Wowy 1.3](#version_1_3)
- [Wowy 1.2](#version_1_2)
- [Wowy 1.1](#version_1_1)
- [Wowy 1.0](#version_1_0)

<a name="version_1_8"></a>
## Wowy 1.8
### Mar 22, 2022
- Fix order creation.
- Fix order cancellation.
- Fix product name on invoice & reorder.
- Fix shipping address.
- Fix city form.
- Fix language advanced plugin.
- Fix plugin activation.
- Fix menu contains &amp;
- Improve plugin Location.
- Improve editor.
- Refactor code & improve queries.
- Update Laravel framework to 8.83.5.

<a name="version_1_7"></a>
## Wowy 1.7
### Feb 21, 2022
- Add option to change city/state to dropdown. Check docs: [Location](usage-location.md).
- Fix product price on homepage blocks.
- Fix issue with Cloudflare SSL.
- Fix tree category & social links.
- Fix duplicate shortcode in CKEditor.
- Fix saving SEO meta tags.
- Update product import template.
- Improve invoice.
- Improve license.
- Improve permalink.
- Improve dashboard widgets.
- Improve core.
- Prevent Method Not Allowed error when use ajax DELETE/PUT.
- Add schema for post & page.
- Update AWS S3 settings.

<a name="version_1_6"></a>
## Wowy 1.6
### Dec 22, 2021
- Fixed saving meta box data.
- Fixed issue when delete products from flash sales.
- Fixed bulk change product category.
- Fixed currency settings.
- Fixed social login settings.
- Fixed filter by price.
- Added export products to CSV.
- Added missing column Content in product import and improve search in admin panel.
- Added option to update shipping status in order details page.
- Added option to disable order invoice until order confirmed.
- Added option to enable/disable Captcha in registration page.
- Added VAT number & update invoice template.
- Improve search products.
- Improve multi-language.
- Improve editor & media.

<a name="version_1_5"></a>
## Wowy 1.5
### Nov 18, 2021
- Added language switcher in vendor dashboard.
- Added some events (order confirmed, order completed, payment completed, order cancelled…) in source code (for developers).
- Added FAQ to product detail page.
- Show confirmation box when delete user address.
- Fix bullets list style in the editor.
- Fix admin bar setting.
- Fix product categories shortcode.
- Fix Stripe payment gateway in non-decimal currencies.
- Fix UI issue with select2 fields.
- Fix UI checkout page.
- Fix update customer’s avatar.
- Fix update shipping status.
- Fix some small issues when upgrading to Bootstrap 5.
- Improve UI for vendor dashboard.
- Improve reviews: display review images in the admin panel.
- Improve multi-language.
- Improve plugin Language & Language Advanced.
- Improve product categories.
- Improve shortcode.
- Improve search.
- Improve Razorpay.
- Improve plugin Analytics.
- Improve core & UI.
- Improve RTL mode.
- Validate CSV/Excel file before importing products.
- Update to the latest Laravel version 8.72.0.
- Optimize queries performance.

<a name="version_1_4"></a>
## Wowy 1.4
### Oct 19, 2021
- Upgrade admin theme to Bootstrap 5.
- Add system updater. 1-click update to the latest version.
- Add compare icon on header.
- Add BunnyCDN cloud storage.
- Improve PayPal & Razorpay. Display warning if the current currency isn't supported by PayPal / Razorpay.
- Improve invoice template.
- Fix checkout page, apply coupon.
- Fix bug admin email, login backgrounds.
- Fix missing translations.
- Fix bug display wrong days in flash sales.
- Make phone field at the checkout optional.
- Update to the latest Laravel version 8.64.0
- Improve multi-language.
- Improve RTL mode.
- Improve UI & Editors.
- Improve cookie consent (Added minimal style).
- Improve core.
- Optimize queries performance.

<a name="version_1_3"></a>
## Wowy 1.3
### Sep 15, 2021
- Add product review images.
- Add weekly abandoned carts email notifications
- Add minimum order amount for COD.
- Fix get products by category & breadcrumb.
- Fix layout when disabling review.
- Fix theme migration & issue when activating plugin Language.
- Fix admin email.
- Fix cache issue in media.
- Clear data when deleting customer.
- Improve product categories dropdown (allow adding custom image for icon).
- Improve invoice. Add setting to change font family for invoices.
- Improve payment gateways.
- Improve CKEditor.
- Improve theme custom CSS/JS.
- Improve allowed iframe types.
- Handle TokenMismatchException.
- Prevent error when missing watermark image.
- Update to the latest Laravel version 8.60.0
- Improve UI.
- Improve core.
- Optimize queries performance.

<a name="version_1_2"></a>
## Wowy 1.2
### Aug 23, 2021
- Fix social login.
- Fix Contact plugin with the new editor.
- Fix permission issues.
- Fix currency settings.
- Fix checkout recovery.
- Fix display product variant image on checkout or order detail page.
- Fix Mollie payment gateway (handle when customer cancel payment).
- Fix Razorpay (correct amount with shipping fee).
- Add Bulk Import Products from CSV/Excel.
- Add search products by brand.
- Add order delivery notes.
- Add sticky header.
- Add filter products by category in Admin -> Ecommerce -> Products.
- Improve eCommerce reports page.
- Improve discount & create order (make it translatable).
- Improve shortcode. Make it easier to modify added shortcodes.
- Improve editor & clean XSS.
- Update email templates.
- Update to the latest Laravel version 8.55.0
- Improve core.
- Optimize queries performance.

<a name="version_1_1"></a>
## Wowy 1.1
### Jul 27, 2021
- Update CKEditor and TinyMCE to the latest version (version 5).
- Update media: Add a button to download media files from URL.
- Able to add multiple admin emails in Admin -> Settings -> General.
- Big change on blog categories & product categories. Hierarchical tree structured category https://prnt.sc/1g4ht0w.
- Prevent clear cart after logging out.
- Add PayPal & Stripe refund.
- Improve currencies setting. Prevent error when deleting the default currency.
- Improve email templates.
- Ajax update cart.
- Fix missing translations.

<a name="version_1_0"></a>
## Wowy 1.0
### Jul 10, 2021
- Initial release version 1.0
