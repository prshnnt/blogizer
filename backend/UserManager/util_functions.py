from .models import Profile  , User , Token
from django.http.request import HttpRequest

def get_user(token:str)-> User|None:
    try:
        return Token.objects.get(authToken=token).user
    except Token.DoesNotExist:
        return None
def get_user_by_username(username:str)-> User|None:
    try:
        return User.objects.get(username=username)
    except User.DoesNotExist:
        return None
def user_doesnot_exist(username:str,email:str)-> bool:
    try:
        if User.objects.filter(username=username,email=email).first().username==username:
            return False
        else:
            return True
    except:
        return True
    
def get_token(request:HttpRequest):
    token =  request.headers.get('Bearer',None)
    try:
        return Token.objects.get(authToken=token)
    except Token.DoesNotExist:
        return None
    except UnicodeError:
        return None
    except:
        return None