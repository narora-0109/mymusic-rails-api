require "application_responder"

class ApplicationController < ActionController::API

  KAMINARI_RECORDS_PER_PAGE = 1

  self.responder = ApplicationResponder
  respond_to :siren, :json, :html

  attr_accessor :kaminari

  def model_class
    "#{controller_name.classify}".constantize
  end

  def get_per
    begin
      model_per = model_class::KAMINARI_RECORDS_PER_PAGE
    rescue NameError
      model_per=false
    end
    model_per  || self.class::KAMINARI_RECORDS_PER_PAGE || Kaminari.config.default_per_page
  end

  def get_page
    params[:page] ||  1
  end

end
