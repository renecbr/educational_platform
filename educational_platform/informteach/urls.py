from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('Урок1', views.lesson, name='lesson1'),
]