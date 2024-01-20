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

## Pushing
After implementing all the changes necessary, you will need to push this to your github fork.

1. To add your repository fork, run:

       git remote add origin http://yourGithubURL

2. To stage your updated code, run:

       git add .

    or to stage a specific file:

       git add foldername/filename.js

3. To Commit your push, run:

       git commit -m "WHAT EVER YOU DID"

4. Finally to push to your forked repository, run 

       git push

5. Go to your GitHub fork, it should say 1 commit ahead of...



## Troubleshooting
When running steps in [Setup](#-Setup), there may be an error while installing certain gems. If this is the case, run the following command to update the [Gemfile.lock](/Gemfile.lock), which should fix the problem.

       bundle update

Then retry the steps in [Setup](#-Setup).

## Authors
* [Erik Boesen](https://github.com/ErikBoesen) - Code, art & design
* [Carter Fendley](https://github.com/CarterFendley) - Code

## License
This software is protected under the MIT license. Basically, do whatever you want as long as you give credit where credit is due and don't hold us liable for anything that happens. More information can be found in [`LICENSE`](LICENSE).
