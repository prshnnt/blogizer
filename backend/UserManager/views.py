from django.http.request import HttpRequest
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Profile  , User , Token
from .constants import *
from .util_functions import *
from backend.utils import Response

@csrf_exempt
def profile(request:HttpRequest):
    token = get_token(request)
    response = Response()
    if token:
        user = token.user
        data = {
            'username':user.username,
            'email':user.email,
            'name':user.profile.name,
            'date_of_birth':user.profile.date_of_birth,
            'bio':user.profile.bio
        }
        response.success().put_data(data)
    else:
        response.failed().put_detail('Invaild Token!')
    return JsonResponse(response.response_dict())
        
@csrf_exempt
def signup(request:HttpRequest):
    if request.method=="POST":
        response = Response()
        try:
            data = json.loads(request.body)
            username:str = data.get('username')
            email:str = data.get('email')
            raw_password:str = data.get('password')
            if user_doesnot_exist(username=username,email=email):
                User.objects.create(username=username,email=email,password=raw_password)
                response.success().put_detail("Go to Login Page")

            else:
                response.failed().put_detail("Username Already Exists!")

        except json.JSONDecodeError as err:
            response.failed().put_detail(str(err))
        except Exception as err:
            response.failed().put_detail(str(err))
        return JsonResponse(response.response_dict())
    else:
        return JsonResponse(
            Response().failed().put_detail('Autherisation Failed: Invalid Request').response_dict(),
            status=404
        )
    
@csrf_exempt
def login(request:HttpRequest):
    if request.method=="POST":
        content = Response()
        try:
            data = json.loads(request.body)
            username:str = data.get('username')
            raw_password:str = data.get('password')
            try:
                user = User.objects.get(username=username)
                if user.password==raw_password:
                    # add a logging function in case token does not exist for some user 
                    # then there must be some error with signal function or internal error
                    authToken = Token.objects.get(user=user).authToken
                    content.success().put_detail('Logged In!')
                    response = JsonResponse(content.response_dict())
                    response.set_cookie(
                        key="Bearer",
                        value=authToken,
                        httponly=True,
                        secure=True,
                        samesite="None",
                        max_age=3600
                    )
                    response.status_code = 200
                    return response
                else:
                    content.failed().put_detail("Wrong Password")
    
            except User.DoesNotExist:
                content.failed().put_detail('Invalid! Username')

            except Token.DoesNotExist:
                content.failed().put_detail("Token DoesNotExist")

        except json.JSONDecodeError as err:
            content.failed().put_detail(str(err))
        except Exception as err:
            content.failed().put_detail(str(err))
        return JsonResponse(content.response_dict())
    else:
        return JsonResponse(
            Response().failed().put_detail('Autherisation Failed: Invalid Request').response_dict(),
            status=404
        )

def logout(request:HttpRequest):
    response = JsonResponse(Response().success().put_detail('Logged Out!').response_dict())
    response.delete_cookie('Bearer')
    return response