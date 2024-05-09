# NC News Front End

This project was completed as part of the Northcoders Software Development Bootcamp in May 2024. It provides a front end interface for a news website based on a back-end API developed in a previous project phase (see: https://github.com/mikkydean/backend-project-nc-news).

NC News supports the following features:

* View a list of all articles
* View an individual article
* View a list of comments associated with an article
* Vote on an article
* Post a new comment to an existing article
* Delete own comments 
* View a separate page for each topic
* Sort articles by date, votes or comments

## Deployed version

The deployed version of NC News is available at: https://adean-nc-news.netlify.app/

Please note: The back end used for the hosted version spins down with inactivity. It may require a short while to spin up again when first launched.

## Local setup

Minimum required software version:

* Node: **21.7.1**

To work with this project locally,  proceed as follows:

1. Go to: https://github.com/mikkydean/nc-news
2. Choose 'Code' and copy the URL to your clipboard
3. In Terminal, type `git clone` and paste the link
4. Open the project in your code editor (e.g. Visual Studio Code)
5. Run `npm install` to install dependencies
6. Run `npm run dev` to launch the site in your browser