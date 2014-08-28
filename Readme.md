# Laravel Gulpfile
A simple Gulpfile for use alongside Laravel to handle file processing for SCSS, images and Javascript.

## Usage
Node.js must be installed as a prerequisite.
Add Gulpfile.js and package.json to the root directory of a new or existing Laravel project and execute `npm install` to install dependencies. 

The gulpfile contains the task `create_paths` which adds the paths defined in the `paths` object to the directory structure. This command can be run separately and should be executed initially when a Laravel project is created. The added file structure can be seen below:
```
├── app/
│   ├── assets/
│       ├── images/
│       ├── js/
│       ├── scss
│           ├── modules/   // Mixins / functions
│           ├── partials/  // SCSS modules to be imported in main.scss
│           ├── vendor/    // Third party SCSS libraries
│           ├── main.scss  // Contains imports from the directories shown above.
├── public/
    ├── css/
      ├── main.css/      // The processed css file
          ├── images/
              ├── js/
```

Running `gulp` will process the scss file, images and Javascript files and setup watcher tasks to rerun these tasks as files are changed and saved.

## Features
  - SCSS -> CSS processing
  - CSS minification
  - gulp-autoprefixer to handle vendor prefixes

## Todo
  - Add image processing
  - Add Javascript processing
