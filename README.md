# Team 1418 Website
This repository contains the content that is served on [1418.team](http://1418.team).

This website uses the Jekyll templating system and is hosted as a GitHub page.

TODO: Add more stuff here.

## Dependencies
* [Jekyll](https://jekyllrb.com)
* bundler

## Setup
1. While in cloned folder, run:

    bundle install

2. To start Jekyll, run:

    bundle exec jekyll serve

3. Navigate to `localhost:4000` to view the output of the site.

## Generating menus

The menu is created in `_includes/nav.html` by grabbing information from
`_data/menu.yml`. In order to make menu generation easier we have a script
called `build-menu.sh`. In order for your page to be recognized by the script,
follow the steps bellow.

### Files

Only files in the `pages/` directory will be indexed.

The top of your file will look something like this:
```
---
layout: default
title: The Team
stylesheets:
- team
---
{% comment %}
title: The Team
weight: 2
{% endcomment %}
<article>
```

The script looks for the `{% comment %}` section. The `title:` is what will be
on the menu (this is a mandatory variable).

The `weight:` will tell the scriptin what order to put your page in the menu
(this is a mandatory variable). Currently only numbers 0-10 will get indexed.

The `url:` variable is an optionalvariable for files that will change the `href`
of the menu option. The only reason `url:` should be used is if you wish add a
menu option for a page outside of the `pages/` directory.

### Directories

Only directories inside of the `pages/` directory will be index.

Since directories cannot have comments attached to them, the script looks for a
`info.yml` file in the directory. The `info.yml` file should look like this:

```
{% comment %}
title: More
weight: 10
url: pages/more/contact.html
{% endcomment %}
```

The `title:` works the same as it did in a file.

It is important to note that the `info.yml`'s `weight:` variable refers to the
order in which the directory will be rendered. The directory will also have its
own weight order. So any page within the directory will be rendered, when the
directory is hovered over in the menu bar, according to its weight. This
sub-directory weight system also currently runs from 0-10.

The `url: ` variable is a must with directories. This will change the `href` of
the directory's menu link. It should be set to the page you wish someone to be
send to when they click on the directory's menu link instead of a page in the
directory. If this is not set the user will be sent to the directory and default
indexing of the directory will occur



## Authors
TODO

## License
TODO

## A ton of other stuff
TODO
