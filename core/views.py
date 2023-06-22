from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .models import Profile

# Create your views here.

def login(request):
    return render(request,'login.html')

def signup(request):

    if request.method == 'POST':
        username = request.POST['name']
        email = request.POST['email']
        password1= request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:

            user = User.objects.create_user(username = username,email=email,password=password1)
            user.save()

            user_model = User.objects.get(username=username)
            new_profile = Profile.objects.create(user=user_model,id_user=user_model.id,username = user_model.username)
            new_profile.save()

        return render(request,'signup.html')


        
    else:
        return render(request,'signup.html')
    




# api views starting here

@api_view(['GET'])
def userlist(request):
    users = Profile.objects.all()
    serializer = ProfileSerializer(users,many=True)
    return Response(serializer.data)
    