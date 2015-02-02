css_path = "public/assets"
sass_path = "assets/stylesheets"
output_style = (environment == :production) ? :compressed : :expanded
sourcemap = !(environment == :production)