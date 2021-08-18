# Upgrade Guide

- [Upgrade to Wowy 1.1](#version_1_1)

<a name="version_1_1"></a>
## Upgrade to version 1.1

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
    - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan migrate` to update the database.
    - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
    - Override folder `app`, `bootstrap`, `config`, `platform`, `vendor`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Plugins: deactivate plugin `Ecommerce` then activate it again.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
