# Be sure to restart your server when you modify this file.

# Add new mime types for use in respond_to blocks:
# Mime::Type.register "text/richtext", :rtf
Mime::Type.register 'application/vnd.siren+json', :siren

ActionController::Renderers.add :siren do |resource, options|
  self.content_type ||= Mime[:siren]
  resource.to_siren
end