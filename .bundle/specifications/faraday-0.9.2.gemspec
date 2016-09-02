# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = "faraday"
  s.version = "0.9.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.authors = ["Rick Olson"]
  s.date = "2015-10-05"
  s.email = "technoweenie@gmail.com"
  s.homepage = "https://github.com/lostisland/faraday"
  s.licenses = ["MIT"]
  s.require_paths = ["lib"]
  s.rubygems_version = "2.0.14"
  s.summary = "HTTP/REST API client library."

  if s.respond_to? :specification_version then
    s.specification_version = 3

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<multipart-post>, ["< 3", ">= 1.2"])
    else
      s.add_dependency(%q<multipart-post>, ["< 3", ">= 1.2"])
    end
  else
    s.add_dependency(%q<multipart-post>, ["< 3", ">= 1.2"])
  end
end
