
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|string|null: false,unique: true|
|email|string|null: false,unique: true|
|password|string|null: false,unique: true|

### Association
- has_many :posts
- has_many :groups, through: :groups_users
- has_many :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false,unique: true|

### Association
- has_many :posts
- has_many :users, through: :groups_users
- has_many :groups_users

## postsテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belong_to :user
- belong_to :group

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user