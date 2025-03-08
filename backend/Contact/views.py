from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from UserManager.models import Profile  , User , Token
from UserManager.util_functions import get_token , get_user , get_user_by_username
from .models import Contact
from backend.utils import Response

@csrf_exempt
def get_users_list(request:HttpRequest):
    ls = [i.username for i in User.objects.all()]
    return JsonResponse({'user':ls})

@csrf_exempt
def get_contacts_list(request:HttpRequest):
    token = get_token(request)
    if token:
        user = token.user
        ls = [i.username for i in user.contacts.contacts.all()]
        return JsonResponse(
            Response()
            .success()
            .put_detail('Contact List')
            .put_data({'user':ls})
            .response_dict()
            )
    else:
        return JsonResponse(
            Response()
            .failed()
            .put_detail('Invaild Token!')
            .response_dict()
        )

@csrf_exempt
def add_contact(request:HttpRequest,contact_username:str):
    response = Response()
    token = get_token(request)
    if token:
        user = token.user
        contact =  get_user_by_username(contact_username)
        if contact:
            try:
                user.contacts.contacts.add(contact)
                ls = [i.username for i in user.contacts.contacts.all()]
                response.success().put_detail('Updated Contact list').put_data({'user':ls})
            except Exception as err:
                response.failed().put_detail(str(err))
        else:
            response.failed().put_detail('Contact DoesNotExists!')
    else:
        response.failed().put_detail('Invaild Token!')
    return JsonResponse(response.response_dict())


@csrf_exempt
def remove_contact(request:HttpRequest,contact_username:str):
    response = Response()
    token = get_token(request)
    if token:
        user = token.user
        contact =  get_user_by_username(contact_username)
        if contact:
            try:
                user.contacts.contacts.remove(contact)
                ls = [i.username for i in user.contacts.contacts.all()]
                response.success().put_detail('Updated Contact list').put_data({'user':ls})
            except Exception as err:
                response.failed().put_detail(str(err))
        else:
            response.failed().put_detail('Contact DoesNotExists!')
    else:
        response.failed().put_detail('Invaild Token!')
    return JsonResponse(response.response_dict())