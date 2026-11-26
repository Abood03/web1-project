# Publishing on GitHub

Repository visibility controls who can read the project and its Git history. Website hosting is a separate step handled by a service such as GitHub Pages.

## Review before making the repository public

- Confirm the project's contributors and any course requirements allow public sharing.
- Check the project files and commit history for private content. This repository's older commits include author email addresses and local file paths in former `.idea/` files. Those entries remain part of the history after changes to the current files or your Git email setting. [GitHub guide to commit email addresses](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)
- Confirm that you have permission to redistribute the hotel imagery and logo or replace them with assets you can publish. Several image filenames refer to Hyatt Regency Aqaba Ayla Resort or The Ritz-Carlton. Check each asset's source and license and include any required attribution. Review earlier commits for copies of any assets you replace.
- If you want others to reuse the code under an open-source license, choose one with the project contributors. The repository currently has no project license. Confirm asset permissions separately. [GitHub guide to repository licensing](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

## Change repository visibility

1. Open the repository on GitHub and select **Settings**.
2. In **General**, scroll to **Danger Zone** and select **Change visibility**.
3. Choose **Make public** and confirm the change in GitHub's prompts.

See the current steps and implications in [GitHub's repository visibility guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).

## Host the website separately

The static site is self-contained in `public/`. On GitHub Pages, use an Actions workflow that publishes `public/` as the site artifact. The branch-based source picker offers only the branch root or `docs/`. In this project, `docs/` contains project documentation. [GitHub Pages publishing sources](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
