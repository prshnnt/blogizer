from django.db import models
import uuid

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20,unique=True,blank=False,null=False)
    password = models.CharField(max_length=20,blank=False,null=False)
    email = models.EmailField(unique=True)

class Token(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    authToken =  models.UUIDField(default=uuid.uuid4)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50,blank=True,default='')
    date_of_birth = models.DateField(null=True)
    # change this function in case u encounter pfp file with same file name then users might exploit this behavior.
    image = models.ImageField(
        upload_to='user/pfp/',
        default='/user/pfp/default.jpg' ,
        blank=True
         )
    bio = models.TextField(blank=True)