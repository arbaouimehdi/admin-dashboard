source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# Rails
gem 'rails', '~> 5.1.4'

# Files attachments
gem 'carrierwave'

# Authentication
gem 'devise'

# Transpile app-like JavaScript
gem 'webpacker', :git => 'https://github.com/rails/webpacker.git'

gem 'mysql2', '>= 0.3.18', '< 0.5'
# Use Puma as the app server

gem 'puma', '~> 3.7'
# Use SCSS for stylesheets

gem 'sass-rails', '~> 5.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Test
group :test do
  gem 'cucumber-rails', require: false
  gem 'shoulda-matchers', require: false
end

# Test & Development
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.15.0'
  gem 'rspec-rails', '~> 3.6'
  gem 'rspec-html-matchers'
  gem 'database_cleaner', "~> 1.6", ">= 1.6.1"
  gem 'guard-rspec', "~> 4.7", ">= 4.7.3", require: false
  gem 'awesome_print', "~> 1.8", require: "ap"
  gem 'factory_girl_rails'
end

# Development
group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Better errors handler
  gem 'better_errors', '~> 2.1.0'
  gem 'binding_of_caller', '~> 0.7.2'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]