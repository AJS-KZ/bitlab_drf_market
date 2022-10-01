from rest_framework import serializers

from accounts.models import CustomUser


class CustomUserAllFieldsSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = '__all__'
