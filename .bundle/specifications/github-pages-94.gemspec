# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "github-pages"
  s.version = "94"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["GitHub, Inc."]
  s.date = "2016-09-01"
  s.description = "Bootstrap the GitHub Pages Jekyll environment locally."
  s.email = "support@github.com"
  s.executables = ["github-pages"]
  s.files = ["bin/github-pages"]
  s.homepage = "https://github.com/github/pages-gem"
  s.licenses = ["MIT"]
  s.post_install_message = "---------------------------------------------------\nThank you for installing github-pages!\nGitHub Pages recently upgraded to Jekyll 3.0, which\nincludes some breaking changes. More information:\nhttps://github.com/blog/2100-github-pages-jekyll-3\n---------------------------------------------------\n"
  s.require_paths = ["lib"]
  s.required_ruby_version = Gem::Requirement.new(">= 2.0.0")
  s.rubygems_version = "2.0.14"
  s.summary = "Track GitHub Pages dependencies."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>, ["= 3.2.1"])
      s.add_runtime_dependency(%q<jekyll-sass-converter>, ["= 1.3.0"])
      s.add_runtime_dependency(%q<minima>, ["= 1.0.1"])
      s.add_runtime_dependency(%q<kramdown>, ["= 1.11.1"])
      s.add_runtime_dependency(%q<liquid>, ["= 3.0.6"])
      s.add_runtime_dependency(%q<rouge>, ["= 1.11.1"])
      s.add_runtime_dependency(%q<github-pages-health-check>, ["= 1.2.0"])
      s.add_runtime_dependency(%q<jemoji>, ["= 0.7.0"])
      s.add_runtime_dependency(%q<jekyll-mentions>, ["= 1.2.0"])
      s.add_runtime_dependency(%q<jekyll-redirect-from>, ["= 0.11.0"])
      s.add_runtime_dependency(%q<jekyll-sitemap>, ["= 0.10.0"])
      s.add_runtime_dependency(%q<jekyll-feed>, ["= 0.5.1"])
      s.add_runtime_dependency(%q<jekyll-gist>, ["= 1.4.0"])
      s.add_runtime_dependency(%q<jekyll-paginate>, ["= 1.1.0"])
      s.add_runtime_dependency(%q<jekyll-coffeescript>, ["= 1.0.1"])
      s.add_runtime_dependency(%q<jekyll-seo-tag>, ["= 2.0.0"])
      s.add_runtime_dependency(%q<jekyll-github-metadata>, ["= 2.0.2"])
      s.add_runtime_dependency(%q<listen>, ["= 3.0.6"])
      s.add_runtime_dependency(%q<activesupport>, ["= 4.2.7"])
      s.add_runtime_dependency(%q<mercenary>, ["~> 0.3"])
      s.add_runtime_dependency(%q<terminal-table>, ["~> 1.4"])
      s.add_development_dependency(%q<rspec>, ["~> 3.3"])
      s.add_development_dependency(%q<rubocop>, ["~> 0.35"])
      s.add_development_dependency(%q<pry>, ["~> 0.10"])
      s.add_development_dependency(%q<jekyll_test_plugin_malicious>, ["~> 0.2"])
    else
      s.add_dependency(%q<jekyll>, ["= 3.2.1"])
      s.add_dependency(%q<jekyll-sass-converter>, ["= 1.3.0"])
      s.add_dependency(%q<minima>, ["= 1.0.1"])
      s.add_dependency(%q<kramdown>, ["= 1.11.1"])
      s.add_dependency(%q<liquid>, ["= 3.0.6"])
      s.add_dependency(%q<rouge>, ["= 1.11.1"])
      s.add_dependency(%q<github-pages-health-check>, ["= 1.2.0"])
      s.add_dependency(%q<jemoji>, ["= 0.7.0"])
      s.add_dependency(%q<jekyll-mentions>, ["= 1.2.0"])
      s.add_dependency(%q<jekyll-redirect-from>, ["= 0.11.0"])
      s.add_dependency(%q<jekyll-sitemap>, ["= 0.10.0"])
      s.add_dependency(%q<jekyll-feed>, ["= 0.5.1"])
      s.add_dependency(%q<jekyll-gist>, ["= 1.4.0"])
      s.add_dependency(%q<jekyll-paginate>, ["= 1.1.0"])
      s.add_dependency(%q<jekyll-coffeescript>, ["= 1.0.1"])
      s.add_dependency(%q<jekyll-seo-tag>, ["= 2.0.0"])
      s.add_dependency(%q<jekyll-github-metadata>, ["= 2.0.2"])
      s.add_dependency(%q<listen>, ["= 3.0.6"])
      s.add_dependency(%q<activesupport>, ["= 4.2.7"])
      s.add_dependency(%q<mercenary>, ["~> 0.3"])
      s.add_dependency(%q<terminal-table>, ["~> 1.4"])
      s.add_dependency(%q<rspec>, ["~> 3.3"])
      s.add_dependency(%q<rubocop>, ["~> 0.35"])
      s.add_dependency(%q<pry>, ["~> 0.10"])
      s.add_dependency(%q<jekyll_test_plugin_malicious>, ["~> 0.2"])
    end
  else
    s.add_dependency(%q<jekyll>, ["= 3.2.1"])
    s.add_dependency(%q<jekyll-sass-converter>, ["= 1.3.0"])
    s.add_dependency(%q<minima>, ["= 1.0.1"])
    s.add_dependency(%q<kramdown>, ["= 1.11.1"])
    s.add_dependency(%q<liquid>, ["= 3.0.6"])
    s.add_dependency(%q<rouge>, ["= 1.11.1"])
    s.add_dependency(%q<github-pages-health-check>, ["= 1.2.0"])
    s.add_dependency(%q<jemoji>, ["= 0.7.0"])
    s.add_dependency(%q<jekyll-mentions>, ["= 1.2.0"])
    s.add_dependency(%q<jekyll-redirect-from>, ["= 0.11.0"])
    s.add_dependency(%q<jekyll-sitemap>, ["= 0.10.0"])
    s.add_dependency(%q<jekyll-feed>, ["= 0.5.1"])
    s.add_dependency(%q<jekyll-gist>, ["= 1.4.0"])
    s.add_dependency(%q<jekyll-paginate>, ["= 1.1.0"])
    s.add_dependency(%q<jekyll-coffeescript>, ["= 1.0.1"])
    s.add_dependency(%q<jekyll-seo-tag>, ["= 2.0.0"])
    s.add_dependency(%q<jekyll-github-metadata>, ["= 2.0.2"])
    s.add_dependency(%q<listen>, ["= 3.0.6"])
    s.add_dependency(%q<activesupport>, ["= 4.2.7"])
    s.add_dependency(%q<mercenary>, ["~> 0.3"])
    s.add_dependency(%q<terminal-table>, ["~> 1.4"])
    s.add_dependency(%q<rspec>, ["~> 3.3"])
    s.add_dependency(%q<rubocop>, ["~> 0.35"])
    s.add_dependency(%q<pry>, ["~> 0.10"])
    s.add_dependency(%q<jekyll_test_plugin_malicious>, ["~> 0.2"])
  end
end
