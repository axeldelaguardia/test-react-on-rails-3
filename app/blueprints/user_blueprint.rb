class UserBlueprint < Blueprinter::Base
  field :image_name do |user, options|
    unless options[:signed_img_url] && options[:signed_img_url]["expiration"] < Time.now
      options[:signed_img_url] = {
        img: S3.object("#{user.image_name}-#{user.id}").presigned_url(:get, expires_in: 3600),
        expiration: Time.now + 3600
      }
    end
    options[:signed_img_url][:img]
  end

  field :user do
    "user logged in"
  end

  field :wleds do |user|
    user.wleds.pluck(:ip)
  end

  fields :name, :email, :timezone, :background_path
end