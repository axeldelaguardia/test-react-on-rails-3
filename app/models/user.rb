class User < ApplicationRecord
	has_many :wleds
	has_secure_password
	validates :email, presence: true, uniqueness: true
end
