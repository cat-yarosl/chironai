
import os
import requests
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import SpaceData
from .serializers import SpaceDataSerializer

NASA_API_KEY = os.getenv("NASA_API_KEY")

@api_view(["GET"])
def get_nasa_data(request):
    url = f"https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}"
    nasa_response = requests.get(url).json()

    # Save to database
    space_data = SpaceData.objects.create(
        title=nasa_response["title"],
        description=nasa_response["explanation"],
        image_url=nasa_response["url"]
    )

    serializer = SpaceDataSerializer(space_data)
    return Response(serializer.data)