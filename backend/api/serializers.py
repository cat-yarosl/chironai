from rest_framework import serializers
from .models import SpaceData

class SpaceDataSerializer(serializers.ModelSerializer):
    summary = serializers.SerializerMethodField()

    class Meta:
        model = SpaceData
        fields = ['id', 'title', 'description', 'image_url', 'summary']

    def get_summary(self, obj):
        return getattr(obj, 'summary', None)