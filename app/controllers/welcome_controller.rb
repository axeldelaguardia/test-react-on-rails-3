# frozen_string_literal: true

class WelcomeController < ApplicationController
	layout "react"

  def index
		if current_user
			@user_props = { user: current_user }
		end
  end
end
