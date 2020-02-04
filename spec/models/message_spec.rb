require 'rails_helper'

RSpec.describe Message, type: :model do
  describe '#create' do
    context 'can save' do

        it "is valid with text in message" do
          message = build(:message, image: nil)
          expect(message).to be_valid
        end

        it "is valid with image in message" do
          message = build(:message, text: nil)
          expect(message).to be_valid
        end

        it "is valid with image in message" do
          expect(build(:message)).to be_valid
        end
    end
    context 'can not save' do

        it "is invalid without image and text in message" do
          message = build(:message, text: nil, image: nil)
          message.valid?
          expect(message.errors[:text]).to include("を入力してください")
        end

        it "is invaild without user_id in message" do
          message = build(:message, user_id: nil)
          message.valid?
          expect(message.errors[:user]).to include("を入力してください")
        end

        it "is invaild without group_id in message" do
          message = build(:message, group_id: nil)
          message.valid?
          expect(message.errors[:group]).to include("を入力してください")
        end

    end

  end 
end
