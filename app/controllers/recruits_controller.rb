class RecruitsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def as_json(options = {})
    super(options)
  end
  
  def index
    respond_with Recruit.all
  end

  def create
    respond_with Recruit.create(recruit_params)
  end

  def destroy
  end

  private
  def recruit_params
    params.require(:recruit).permit(:title, :email, :content)
  end
end
