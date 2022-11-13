# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Alert(models.Model):
    alert_seq = models.BigAutoField(primary_key=True)
    text = models.CharField(max_length=255)
    url = models.CharField(max_length=255, blank=True, null=True)
    is_confirmed = models.CharField(max_length=1)
    created = models.DateTimeField()
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')

    class Meta:
        managed = False
        db_table = 'alert'


class Arrange(models.Model):
    arrange_seq = models.BigAutoField(primary_key=True)
    room_seq = models.ForeignKey('Room', models.DO_NOTHING, db_column='room_seq')
    item_seq = models.ForeignKey('Item', models.DO_NOTHING, db_column='item_seq')
    location_x = models.DecimalField(max_digits=15, decimal_places=8)
    location_y = models.DecimalField(max_digits=15, decimal_places=8)
    location_z = models.DecimalField(max_digits=15, decimal_places=8)
    rotation = models.DecimalField(max_digits=15, decimal_places=8)
    port_seq = models.ForeignKey('Portfolio', models.DO_NOTHING, db_column='port_seq', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'arrange'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Board(models.Model):
    board_seq = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=100)
    content = models.TextField()
    thumbnail = models.CharField(max_length=255, blank=True, null=True)
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')
    board_category_seq = models.ForeignKey('BoardCategory', models.DO_NOTHING, db_column='board_category_seq', blank=True, null=True)
    created = models.DateTimeField()
    updated = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'board'


class BoardCategory(models.Model):
    board_category_seq = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'board_category'


class BoardComment(models.Model):
    comment_seq = models.BigAutoField(primary_key=True)
    content = models.CharField(max_length=1000)
    is_public = models.CharField(max_length=1)
    created = models.DateTimeField()
    board_seq = models.ForeignKey(Board, models.DO_NOTHING, db_column='board_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'board_comment'


class BoardHit(models.Model):
    board_hit_seq = models.BigAutoField(primary_key=True)
    board_seq = models.ForeignKey(Board, models.DO_NOTHING, db_column='board_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq', blank=True, null=True)
    hit_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'board_hit'
        unique_together = (('board_seq', 'user_seq', 'hit_date'),)


class BoardLike(models.Model):
    board_like_seq = models.BigAutoField(primary_key=True)
    board_seq = models.ForeignKey(Board, models.DO_NOTHING, db_column='board_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')

    class Meta:
        managed = False
        db_table = 'board_like'
        unique_together = (('board_seq', 'user_seq'),)


class Category(models.Model):
    category_seq = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'category'


class CommentLike(models.Model):
    comment_like_seq = models.BigAutoField(primary_key=True)
    comment_seq = models.ForeignKey(BoardComment, models.DO_NOTHING, db_column='comment_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')

    class Meta:
        managed = False
        db_table = 'comment_like'
        unique_together = (('comment_seq', 'user_seq'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Follow(models.Model):
    follow_seq = models.BigAutoField(primary_key=True)
    user_from = models.ForeignKey('User', models.DO_NOTHING, db_column='user_from')
    user_to = models.ForeignKey('User', models.DO_NOTHING, db_column='user_to')

    class Meta:
        managed = False
        db_table = 'follow'
        unique_together = (('user_from', 'user_to'),)


class Guestbook(models.Model):
    guestbook_seq = models.BigAutoField(primary_key=True)
    content = models.CharField(max_length=1000)
    is_public = models.CharField(max_length=1)
    created = models.DateTimeField()
    room_seq = models.ForeignKey('Room', models.DO_NOTHING, db_column='room_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'guestbook'


class GuestbookComment(models.Model):
    comment_seq = models.BigAutoField(primary_key=True)
    content = models.CharField(max_length=1000)
    is_public = models.CharField(max_length=1)
    created = models.DateTimeField()
    guestbook_seq = models.ForeignKey(Guestbook, models.DO_NOTHING, db_column='guestbook_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'guestbook_comment'


class Item(models.Model):
    item_seq = models.BigAutoField(primary_key=True)
    name_eng = models.CharField(max_length=30)
    name_kor = models.CharField(max_length=20)
    asset = models.CharField(unique=True, max_length=255)
    image = models.CharField(unique=True, max_length=255)
    item_category_seq = models.ForeignKey('ItemCategory', models.DO_NOTHING, db_column='item_category_seq', blank=True, null=True)
    name = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'item'


class ItemCategory(models.Model):
    item_category_seq = models.BigAutoField(primary_key=True)
    name_kor = models.CharField(max_length=20)
    name_eng = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'item_category'


class Oauth(models.Model):
    oauth_seq = models.BigAutoField(primary_key=True)
    key = models.CharField(unique=True, max_length=127)
    from_field = models.CharField(db_column='from', max_length=30)  # Field renamed because it was a Python reserved word.
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')

    class Meta:
        managed = False
        db_table = 'oauth'
        unique_together = (('user_seq', 'from_field'),)


class Portfolio(models.Model):
    port_seq = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=50, blank=True, null=True)
    summary = models.CharField(max_length=2000, blank=True, null=True)
    thumbnail = models.CharField(max_length=255, blank=True, null=True)
    thumbnail_name = models.CharField(max_length=50, blank=True, null=True)
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')
    created = models.DateTimeField()
    updated = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'portfolio'


class PortfolioUrl(models.Model):
    port_url_seq = models.BigAutoField(primary_key=True)
    port_seq = models.ForeignKey(Portfolio, models.DO_NOTHING, db_column='port_seq')
    url = models.CharField(max_length=255)
    name = models.CharField(max_length=50, blank=True, null=True)
    type = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'portfolio_url'


class Room(models.Model):
    room_seq = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=20)
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')
    theme = models.CharField(max_length=20)
    thumbnail = models.CharField(max_length=255, blank=True, null=True)
    is_main = models.CharField(max_length=1)
    privacy = models.CharField(max_length=1)
    created = models.DateTimeField()
    updated = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'room'


class RoomCategory(models.Model):
    room_category_seq = models.BigAutoField(primary_key=True)
    room_seq = models.ForeignKey(Room, models.DO_NOTHING, db_column='room_seq')
    category_seq = models.ForeignKey(Category, models.DO_NOTHING, db_column='category_seq')

    class Meta:
        managed = False
        db_table = 'room_category'
        unique_together = (('room_seq', 'category_seq'),)


class RoomHit(models.Model):
    room_hit_seq = models.BigAutoField(primary_key=True)
    room_seq = models.ForeignKey(Room, models.DO_NOTHING, db_column='room_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq', blank=True, null=True)
    hit_date = models.DateField()

    class Meta:
        managed = False
        db_table = 'room_hit'
        unique_together = (('room_seq', 'user_seq', 'hit_date'),)


class RoomHover(models.Model):
    room_hover_seq = models.BigAutoField(primary_key=True)
    room_seq = models.ForeignKey(Room, models.DO_NOTHING, db_column='room_seq')
    url = models.CharField(max_length=255)

    class Meta:
        managed = False
        db_table = 'room_hover'
        unique_together = (('room_seq', 'url'),)


class RoomLike(models.Model):
    room_like_seq = models.BigAutoField(primary_key=True)
    room_seq = models.ForeignKey(Room, models.DO_NOTHING, db_column='room_seq')
    user_seq = models.ForeignKey('User', models.DO_NOTHING, db_column='user_seq')

    class Meta:
        managed = False
        db_table = 'room_like'
        unique_together = (('room_seq', 'user_seq'),)


class Tag(models.Model):
    tag_seq = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=20)
    port_seq = models.ForeignKey(Portfolio, models.DO_NOTHING, db_column='port_seq')

    class Meta:
        managed = False
        db_table = 'tag'


class User(models.Model):
    user_seq = models.BigAutoField(primary_key=True)
    email = models.CharField(unique=True, max_length=50)
    name = models.CharField(max_length=12)
    profile_pic = models.CharField(max_length=255, blank=True, null=True)
    birth = models.DateField(blank=True, null=True)
    describe = models.CharField(max_length=200, blank=True, null=True)
    blog_url = models.CharField(max_length=1000, blank=True, null=True)
    created = models.DateTimeField()
    token = models.CharField(max_length=1000, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'
