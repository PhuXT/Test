create table user_profile(
    id int primary key auto increment,
    username varchar(255) not null,
    password varchar(255) not null,
    fullname varchar(255) not null,
    avatar varchar(255),
    birthday timestamp,
    created_time timestamp
    )

create table friend(
    id int primary key auto increment,
    sender_id int not null references user_profile(id),
    receiver_id int not null references user_profile(id),
    status varchar(255),
    created_time timestamp
    )

create table message(
    id int primary key auto increment,
    sender_id int not null references user_profile(id),
    receiver_id int not null references user_profile(id),
    type varchar(255) not null,
    content text,
    status varchar(255),
    created_time date
    ) 

<!-- Insert to table user_profile -->
insert into user_profile values
(1, 'user01', 'pass01', 'fullName 01', 'linkavatar01', 'dddd-mm-dd', 'dddd-mm-dd' ),
(2, 'user02', 'pass02', 'fullName 02', 'linkavatar02', 'dddd-mm-dd', 'dddd-mm-dd' ),
(3, 'user03', 'pass03', 'fullName 03', 'linkavatar03', 'dddd-mm-dd', 'dddd-mm-dd' ),
(4, 'user04', 'pass04', 'fullName 04', 'linkavatar04', 'dddd-mm-dd', 'dddd-mm-dd' )

<!-- Insert to table friend -->
insert into friend values 
(1, 1, 2, 'pending', 'dddd-mm-dd'),
(2, 1, 3, 'accepted', 'dddd-mm-dd'),
(3, 2, 3, 'pending', 'dddd-mm-dd'),
(4, 2, 4, 'rejected', 'dddd-mm-dd')

<!-- Insert to table message -->
insert into message values 
(1, 1, 2, text, 'noi dung 1', 'sent', 'dddd-mm-dd' ),
(2, 1, 3,  linkVideo, 'noi dung 1', 'pending_read', 'dddd-mm-dd' ),
(3, 1, 4, text, 'noi dung 1', ' read', 'dddd-mm-dd' ),
(4, 4, 2, linkFile, 'noi dung 1', 'pending_read', 'dddd-mm-dd' ),

<!-- Lấy id, username, fullname, avatar: của các user có id =  2, 3. -->
select id, username, fullname, avatar from user where id in (2,3)

<!-- Lấy các bạn bè(gồm thông tin sau: id, username, fullname, avatar) của user có id = 2. -->
select u.id, u.username, u.fullname, u.avatar from user_profile as u join friend on u.id = friend.receive where friend.receiver_id = 2 and  status = 'accepted'  

<!-- Lấy tin nhắn của user có id = 2 với một nào đó bạn bè (ví dụ: id bạn bè = 3). Các trường lấy ra gồm: message_id, sender_id, receiver_id, type, status, content, created_time. -->
select  message_id, sender_id, receiver_id, type, status, content, created_time from message
where (sender_id = 2 and receiver_id = 3) or (sender_id = 3 and receiver_id = 2)

<!-- Lấy tin nhắn cuối cùng(last_message) với tất cả bạn bè của user có id = 2. Các trường lấy ra gồm: friend_id, mesage_id, type, status, content, sender_id, created_time.
 -->

 <!-- Lấy dánh sách 10 user(id, username, avatar, birthday) có số lượng bạn bè nhiều nhất trong hệ thống. -->

