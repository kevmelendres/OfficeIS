from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User

class TeamLeaderSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamLeader
        fields = '__all__'

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = '__all__'

class UserListViewerSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

