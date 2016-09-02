# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "jekyll-seo-tag"
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.metadata = { "allowed_push_host" => "https://rubygems.org" } if s.respond_to? :metadata=
  s.authors = ["Ben Balter"]
  s.bindir = "exe"
  s.date = "2016-05-31"
  s.email = ["ben.balter@github.com"]
  s.homepage = "https://github.com/benbalter/jekyll-seo-tag"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14"
  s.summary = "A Jekyll plugin to add metadata tags for search engines and social networks to better index and display your site's content."

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>, ["~> 3.1"])
      s.add_development_dependency(%q<bundler>, ["~> 1.10"])
      s.add_development_dependency(%q<rake>, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>, ["~> 3.3"])
      s.add_development_dependency(%q<html-proofer>, ["~> 2.5"])
      s.add_development_dependency(%q<rubocop>, ["~> 0.37"])
    else
      s.add_dependency(%q<jekyll>, ["~> 3.1"])
      s.add_dependency(%q<bundler>, ["~> 1.10"])
      s.add_dependency(%q<rake>, ["~> 10.0"])
      s.add_dependency(%q<rspec>, ["~> 3.3"])
      s.add_dependency(%q<html-proofer>, ["~> 2.5"])
      s.add_dependency(%q<rubocop>, ["~> 0.37"])
    end
  else
    s.add_dependency(%q<jekyll>, ["~> 3.1"])
    s.add_dependency(%q<bundler>, ["~> 1.10"])
    s.add_dependency(%q<rake>, ["~> 10.0"])
    s.add_dependency(%q<rspec>, ["~> 3.3"])
    s.add_dependency(%q<html-proofer>, ["~> 2.5"])
    s.add_dependency(%q<rubocop>, ["~> 0.37"])
  end
end
