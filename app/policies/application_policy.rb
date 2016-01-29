class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def class_name
    @record.is_a?(Class) ? @record.name : @record.class.name
  end

  def index?
     true
  end

  def show?
    true
  end

  def create?
    #@user.admin? || @user.superadmin?
    true
  end

  def update?
    #@user.admin? || @user.superadmin?
    true
  end

  def destroy?
    #@user.admin? || @user.superadmin?
    true
  end

  def scope
    Pundit.policy_scope!(user, record.class)
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end
    def resolve
      scope.all
    end
  end
end






