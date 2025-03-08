from django.db.models.signals import post_save
from django.dispatch import receiver
from UserManager.models import User
from .models import Contact
@receiver(post_save, sender=User)
def create_contact(sender, instance, created, **kwargs):
    if created:
        Contact.objects.create(user=instance) 