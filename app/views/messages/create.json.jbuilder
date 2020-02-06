json.user_name @message.user.name
json.created_at @message.created_at.datetime.to_s
json.text @message.text
json.image @message.image_url