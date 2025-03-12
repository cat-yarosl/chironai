from django.urls import path
from .views import get_nasa_data

urlpatterns = [
    path("nasa/", get_nasa_data, name="nasa_data"),
]
