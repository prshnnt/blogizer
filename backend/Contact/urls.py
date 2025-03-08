from django.urls import path
from . import views 
urlpatterns = [
    path('get_user_list',view=views.get_users_list),
    path('list',view=views.get_contacts_list),
    path('add/<str:contact_username>',view=views.add_contact),
    path('remove/<str:contact_username>',view=views.remove_contact),
    
]
