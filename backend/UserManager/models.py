from django.db import models
import uuid

# Create your models here.

class User(models.Model):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=20,unique=True,blank=False,null=False)
    password = models.CharField(max_length=20,blank=False,null=False)

class Token(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    authToken =  models.UUIDField(default=uuid.uuid4)

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50,blank=True,null=True)
    email = models.EmailField(unique=True,blank=True)
    date_of_birth = models.DateField(null=True)
    image = models.ImageField(
        upload_to='user/pfp/',
        default='/user/pfp/default.jpg' ,
        blank=True
         )
    bio = models.TextField(blank=True)
    def get_username(self):
        return self.user.username