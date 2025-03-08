from django.urls import path
from . import views 
urlpatterns = [
    path('login',view=views.login),
    path('signup',view=views.signup),
    path('profile',view=views.profile)
]
