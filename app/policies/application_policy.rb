class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    # raise Pundit::NotAuthorizedError, "must be logged in" unless user
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
    if @user.user?
      true if record.is_a?(Playlist) && record.user_id == user.id
    elsif @user.admin? || @user.superadmin?
      true
    else
      false
    end
  end

  def update?
    true
    if @user.user?
      true if record.is_a?(Playlist) && record.user_id == user.id
    elsif @user.admin? || @user.superadmin?
      true
    else
      false
    end
  end

  def destroy?
    true
    if @user.user?
      true if record.is_a?(Playlist) && record.user_id == user.id
    elsif @user.admin? || @user.superadmin?
      #Don't delete superadmin
      true unless (record.is_a?(User) && record.id == 1)
    else
      false
    end
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
