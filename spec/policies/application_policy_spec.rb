require 'rails_helper'

describe ApplicationPolicy do
  before :all do
    @user = create(:simple_user)
    @admin = create(:admin)
    @superadmin = create(:superadmin)
    # testing only playlist record as all models use the same Policy
    @playlist = create(:playlist)
  end

  subject { ApplicationPolicy.new(user, record) }

  let(:record) { @playlist }

  context 'being a simple user' do
    let(:user) { @user }

    it { should permit_action(:show) }
    it { should permit_action(:index) }
    it { should forbid_action(:create) }
    it { should forbid_action(:update) }
    it { should forbid_action(:destroy) }
  end

  context 'being an admin' do
    let(:user) { @admin }
    it { should permit_action(:show) }
    it { should permit_action(:index) }
    it { should permit_action(:create) }
    it { should permit_action(:update) }
    it { should permit_action(:destroy) }
  end

  context 'being a superadmin' do
    let(:user) { @superadmin }
    it { should permit_action(:show) }
    it { should permit_action(:index) }
    it { should permit_action(:create) }
    it { should permit_action(:update) }
    it { should permit_action(:destroy) }
  end
end
