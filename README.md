# flapper-news

An app that runs AngularJS on front end with Ruby on Rails on back end with a reddit-like interface for posting and voting on links. App includes:

- Angular single page architecture
- User authentication with Devise
- bootstrap

## System dependencies

Ruby version 2, Rails Version 4.1.1, PostgreSQL, Bootstrap, email account

## Deployment to your Local Machine

    Install Rails 4.0 and Ruby 2.0
    $ git clone https://github.com/jwncoexists/flapper-news.git <your-folder>
    $ cd <your-folder>
    create your repository on github
    $ git remote set-url origin https://github.com/<new repository>

    $ bundle install
    $ rake db:create
    $ rake db:migrate
    $ rake bower:install


## Running in Development Mode
    rails s
    navigate browser to localhost:3000


## Running the test suites

    rake test rspec spec
