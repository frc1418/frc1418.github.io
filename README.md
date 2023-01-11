# Team 1418 Website
This repository contains the content that is served on [1418.team](https://1418.team).

This website uses the Jekyll templating system and is hosted as a GitHub page out of this repository.

## Dependencies
* Ruby
* `bundler` and [`jekyll`](https://jekyllrb.com):

      gem install bundler jekyll

    or locally:

      gem install bundler jekyll --user

## Setup
1. While in cloned folder, run:

       bundle install

2. Then, to start Jekyll, run:

       bundle exec jekyll serve --livereload

3. Navigate to `localhost:4000` to view the output of the site.

## Troubleshooting
When running steps in [Setup](#-Setup), there may be an error while installing certain gems. If this is the case, run the following command to update the [Gemfile.lock](/Gemfile.lock), which should fix the problem.

       bundle update

Then retry the steps in [Setup](#-Setup).

## Authors
* [Erik Boesen](https://github.com/ErikBoesen) - Code, art & design
* [Carter Fendley](https://github.com/CarterFendley) - Code

## License
This software is protected under the MIT license. Basically, do whatever you want as long as you give credit where credit is due and don't hold us liable for anything that happens. More information can be found in [`LICENSE`](LICENSE).
