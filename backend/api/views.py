import os
import requests
import openai
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import SpaceData
from .serializers import SpaceDataSerializer

NASA_API_KEY = os.getenv("NASA_API_KEY")
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

openai.api_key = OPENAI_API_KEY

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

    # Call OpenAI API
    # openai_response = openai.chat.completions.create(
    #    model="gpt-3.5-turbo",
    #    messages=[
    #        {"role": "system", "content": "You are a helpful assistant."},
    #        {"role": "user", "content": f"Provide a summary for the following NASA data: {nasa_response['explanation']}"}
    #    ],
    #    max_tokens=50
    #)

    # summary = openai_response.choices[0].message['content'].strip()
    summary = 'temp filler'
    # Add summary to the response
    serializer = SpaceDataSerializer(space_data)
    data = serializer.data
    data["summary"] = summary

    return Response(data)