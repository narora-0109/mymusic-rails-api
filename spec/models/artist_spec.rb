# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  country    :string(255)
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Artist, :type => :model do
  #pending "add some examples to (or delete) #{__FILE__}"
end
