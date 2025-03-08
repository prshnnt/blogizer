from django.db import models
from UserManager.models import User

# Create your models here.
class Contact(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='contacts')
    contacts = models.ManyToManyField(User)