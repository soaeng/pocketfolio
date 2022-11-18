from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        # The model 4 Serializer
        model = User
        # A tuple of field names to be included in th serialization
        fields = "user_seq"
