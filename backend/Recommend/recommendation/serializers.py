from rest_framework import serializers
from .models import User, Room, Portfolio, Tag


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        # The model 4 Serializer
        model = User
        # A tuple of field names to be included in th serialization
        fields = "user_seq"


class RoomSerializer(serializers.ModelSerializer):

    class Meta:
        model = Room
        fields = ("room_seq", "user_seq")


class PortfolioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Portfolio
        fields = ("port_seq", "room_seq", "user_seq")


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = "__all__"
