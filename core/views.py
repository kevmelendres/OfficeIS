from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User, auth
from django.contrib import messages
from django.contrib.auth.hashers import make_password


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *

# Create your views here.

def index(request):
    return render(request,'index.html')

def adminLogin(request):
    return render(request,'admin-login.html')

def adminPanel(request):
    
    if request.method == 'POST':

        if 'register-employee' in request.POST:
            username = request.POST['username']
            email = request.POST['email']
            password1= request.POST['password1']
            password2 = request.POST['password2']



    return render(request,'admin-panel.html')


def login(request):
    return render(request,'login.html')

def signup(request):

    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password1= request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:
            user = User.objects.create_user(username = username,email=email,password=password1)
            user.save()
            user_model = User.objects.get(username = username)

            new_profile = Member.objects.create(user=user_model,id=user_model.id,username = user_model.username)
            new_profile.save()

        return render(request,'signup.html')


        
    else:
        return render(request,'signup.html')
    




# api views starting here

@api_view(['POST'])
def createUser(request):
    serializerUser = UserSerializer(data=request.data)

    if serializerUser.is_valid():
        
        username = serializerUser.validated_data['username']
        password = serializerUser.validated_data['password']
        email = serializerUser.validated_data['email']

        user = User.objects.create_user(username, email, password)
        user.first_name = serializerUser.validated_data['first_name']
        user.last_name = serializerUser.validated_data['last_name']
        user.save()

 
        
    
    return Response(serializerUser.data)

@api_view(['GET'])
def userList(request):
    users = Member.objects.all()
    serializer = UserListViewerSerializer(users,many=True)
    return Response(serializer.data)


@api_view(['GET'])
def userDetails(request,pk):
    user = Member.objects.get(id=pk)
    serializer = UserSerializer(user,many=False)
    return Response(serializer.data)

#has error
@api_view(['POST'])
def updateUser(request,pk):
    user = Member.objects.get(id=pk)
    serializer = UserSerializer(instance=user, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def createTeamLeader(request):

    serializer = TeamLeaderSerializer(data=request.data)


    if serializer.is_valid():

        username = serializer.validated_data['username']
        email = serializer.validated_data['email']
        employeeRole = serializer.validated_data['employeeRole']

        newAddedUser = User.objects.get(username = username)

        teamleader = TeamLeader.objects.create(user=newAddedUser,firstName=newAddedUser.first_name,lastName = newAddedUser.last_name, email=email,username=username, employeeRole = employeeRole)
        teamleader.save()

    return Response(serializer.data)

@api_view(['POST'])
def createMember(request):

    serializer = MemberSerializer(data=request.data)

    if serializer.is_valid():

        username = serializer.validated_data['username']
        email = serializer.validated_data['email']
        employeeRole = serializer.validated_data['employeeRole']
        teamLeader = serializer.validated_data['assignedTL']


        newAddedUser = User.objects.get(username = username)    
        teamLeader = TeamLeader.objects.get(username=teamLeader)

        member = Member.objects.create(user=newAddedUser, email=email,username=username,employeeRole=employeeRole,firstName=newAddedUser.first_name,lastName = newAddedUser.last_name,assignedTL = teamLeader)
        member.save()

    return Response(serializer.data)

@api_view(['DELETE'])
def deleteUser(request,pk):
    user = Member.objects.get(id=pk)
    user.delete()




@api_view(['GET'])
def allUserLogins(request):
    user = User.objects.all()
    serializer = UserSerializer(user,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def allTeamLeaders(request):
    teamLeaders = TeamLeader.objects.all()
    serializer = TeamLeaderSerializer(teamLeaders,many=True)
    return Response(serializer.data)
