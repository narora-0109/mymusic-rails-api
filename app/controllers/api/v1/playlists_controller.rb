class Api::V1::PlaylistsController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(title user_id track_id).map(&:to_sym)


  # has_scope gem.Control resources to return based on role of current user.
  # You can possibly  extend this permissions with Pundit policies inside the block
  # Here we return only playlists of current user if user has role of simple user, all playlists if current user is superadmin or admin
  has_scope :by_user,default: nil, allow_blank: true do |controller, scope|
    if (controller.current_user.admin? || controller.current_user.superadmin?)
      scope.all
    else
      scope.where(:user_id => controller.current_user.id)
    end
  end
end
