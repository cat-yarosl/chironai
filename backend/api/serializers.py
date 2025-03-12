from rest_framework import serializers
from .models import SpaceData

class SpaceDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpaceData
        fields = "__all__"
