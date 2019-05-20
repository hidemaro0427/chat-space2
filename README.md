# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


comments テーブル

|Column|Type|Options|  
|------|----|-------|   
|user_id|integer|null: false, foreign,key true|  
|group_ip|integer|null: false, foreign,key true|
|image|string|  
|text|text|  
Association
belongs_to :user
belongs_to :group

usersテーブル

|Column|Type|Options|   
|------|----|-----|  
|id|integer|null: fales, unique: true|    
|E-maill|string|null: fales, unique: true|    
|name|string|null: fales|  
Association
has_many :comments
has_many :groups,through: members
has_many :members

groupテーブル

|Column|Type|Options|   
|------|----|-------|  
|groupname|string|null: fales|
Association
has_many :users,through: :members
has_many :comments
has_many :members

membersテーブル

|Column|Type|Options|  
|------|----|-------|  
|user_id|integer|null: false, foreign_key: true|  
|group_id|integer|null: false, foreign_key: true|  
Association  
belongs_to :group  
belongs_to :user  
