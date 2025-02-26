from django.db.models.signals import post_save
from django.dispatch import receiver
import uuid

from .models import Profile , User , Token

@receiver(post_save , sender=User)
def create_profile(sender , instance , created , **kwargs):
    """
    This will be fired when a new User instance is created.
    This is the profile created for each User.
    """
    if created:
        Profile.objects.create(user=instance)
        
@receiver(post_save , sender=User)
def create_token(sender , instance , created , **kwargs):
    """
    This will be fired when a new User instance is created.
    This is the unique token created for each User.
    """
    if created:
        Token.objects.create(user=instance, authToken=uuid.uuid4())

@receiver(post_save , sender=User)
def save_profile(sender , instance , **kwargs):
    """
    This will be fired when there is any changes to User instance .
    This will update profile.
    """
    instance.profile.save()