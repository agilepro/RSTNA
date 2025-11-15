# Santa Cruz Baroque Festival Website

This repository is for maintaining the website for the non-profit organization that produces the Santa Cruz Baroque Festival every year.


## Design Goals

There are three key design goals:

* __Ease of maintenance__.  As the organization moves forward, there will be a constant need to update the site.  This will typically be done by one person, but there should be the ability to collaborate as necessary.  Most importantly change versions should be tracked, and old versions always available in the future if needed.  

* __Consistency of Site__.  To present a professional appearance the pages should have style guidelines strictly enforced to assure that all pages have a consistent look.  This means that page authors will have low control of individual page styles.  Markdown offers the right capabilities.

* __Free and available__.  Being a non-profit organization running on a shoe string, we want to leverage open source and free utilities to the extent possible.

### Choice of Gatsby

Gatsby is an open source framework freely available for use.  It stores the site as source files that can be managed in GitHub.  It generates a static site that can be hosted on any web server without needing any special capabilities of the server.  These points:

* __Collaboration__: Managing of source through GitHub means that any number of people can be given access to GitHub, and can work on the site simultaneously.  
* __Versioning__: All versions from the  are preserved in history, and can be recalled.  Anything accidentally deleted in the tip revision can be easily recovered from history.
* __Offline__: GitHub allows developers to "pull" a local copy for working without needing to work online.
* __Static Site__: The final website is also simply a bunch of files that can be installed simply by putting the files on the server.
* __Markdown__: Gatsby will automatically convert markdown files to web files.  The author then specifies the text in markdown which is very simple to do, and does not have to write HTML which is complex and cumbersome.
* __Stylesheets__: there is no restriction on the styling of the pages.  Stylesheets and graphics are used in the same way as any web page.  Gatsby does not force any particular style on the site.
* __React__: Gatsby is based on the powerful React platform, and thus if we wish we can make use of special React components.  For example, the "donate" button is one of those components.

Converting the site to Gatsby took about 20 hours of time, and the completed new site is a complete reformat of all pages.  That is why all the pages use a consistent font face and size throughout.

Pages are simple, with bullet lists used for places where a list of items is desired.  These is no styling of individual pages, so there is no need to manually work to keep the pages looking the same.

### Other Options

There are popular web site builders which advertise the ability to create sites quickly and easily and they focus on how long it takes from start to site running.  What they don't discuss in detail is how this site is maintained in the long run.

GitHub is based on very mature capabilities for running open source projects.  Every change by every developer is recorded and can be reviewed at any time.  You can easily ask "what changed between these two versions" in history.

Popular web building sites lack the ability to inspect and review versions.  If they have versioning at all, it is generally oriented toward making releases, and lacks review capabilities.

Many popular web site builders allows for customization of individual pages.  The problem with allowing a page to stylized differently from others is that it then becomes a large task to keep them looking the same.  It is better to have "enforced" consistency but disallowing heavy customization of individual pages.

Getting a web site up and running quickly hides the longer range issues that appear later.

Also many such site are hosted and charge for the hosting.


<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
   Gatsby Bootstrap 5 starter
</h1>


Minimal bootstrap 5 and Gatsby configuration with SCSS support. 

Demo here : https://gatsbystarterbootstrap5.gatsbyjs.io/



## ✏️ How to develop locally

1. Install [Node](https://nodejs.org/en/download/prebuilt-installer/current)

1. Install Gatsby.

```shell
npm install -g gatsby-cli
```

1. Pull a copy of this Repository to a folder named `baroque`

1. Navigate into your new site's directory and start it up.

    ```shell
    cd baroque
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter-bootstrap-5` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

