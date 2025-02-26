from django.shortcuts import render , redirect
from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Profile  , User , Token
from rest_framework import mixins , permissions , generics , parsers 
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .constants import *


def get_user(token:str)-> User|None:
    try:
        return Token.objects.get(authToken=token).user
    except Token.DoesNotExist:
        return None

@csrf_exempt
def login(request:HttpRequest):
    if request.method=="POST":
        response = {}
        try:
            data = json.loads(request.body)
            username:str = data.get('username')
            raw_password:str = data.get('password')
            try:
                user = User.objects.get(username=username)
                if user.password==raw_password:
                    authToken = Token.objects.get(user=user).authToken
                    response[STATUS]=SUCCESS
                    response['authToken']=authToken
                else:
                    response[STATUS]=FAILED
                    response[DETAILS]="Wrong Password!"
            except User.DoesNotExist:
                response[DETAILS]='Invalid! Username'
                response[STATUS]=FAILED
            except Token.DoesNotExist:
                response[STATUS]=FAILED
                response[DETAILS]="Token DoesNotExist"
        except json.JSONDecodeError as err:
            response[DETAILS]=str(err)
            response[STATUS]=FAILED
        except Exception as err:
            response[DETAILS]=str(err)
        return JsonResponse(response)
    else:
        return JsonResponse(
            {
                STATUS:FAILED,
                DETAILS:'Autherisation Failed: Invalid Request'
            },
            status=404
        )