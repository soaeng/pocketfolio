# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Category(models.Model):
    category_seq = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'category'


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
