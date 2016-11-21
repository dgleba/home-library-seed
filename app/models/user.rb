class User < ApplicationRecord
  def self.from_token_payload(payload)
    User.find_by(auth0_id_string: payload['sub'])
  end
end
