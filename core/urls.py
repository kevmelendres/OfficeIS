from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('admin-login', views.adminLogin, name='admin-login'),
    path('signup', views.signup, name='signup'),
    path('admin-panel', views.adminPanel, name='admin-panel'),



    # <-- API URLS STARTS HERE -->
    path('api/userlist/', views.userList, name = 'userList'),
    path('api/allUserLogins/', views.allUserLogins, name = 'allUserLogins'),
    path('api/userListViewer/', views.userListViewer, name = 'allUserLogins'),
    path('api/user/<str:pk>/', views.userDetails, name = 'userDetails'),
    path('api/createteamleader/', views.createTeamLeader, name = 'createTeamLeader'),
    path('api/createmember/', views.createTeamLeader, name = 'createMember'),
    path('api/createuser/', views.createUser, name = 'createUser'),
    path('api/updateuser/<str:pk>/', views.updateUser, name = 'updateUser'),
    path('api/deleteuser/<str:pk>/', views.deleteUser, name = 'deleteUser'),

]
