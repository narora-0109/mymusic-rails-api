# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Playlist, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
end
