from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('admin-login', views.adminLogin, name='admin-login'),
    path('signup', views.signup, name='signup'),
    path('admin-panel', views.adminPanel, name='admin-panel'),
    path('logout', views.logoutView, name='logoutView'),





    # <-- API URLS STARTS HERE -->

    path('api/allUserLogins/', views.allUserLogins, name = 'allUserLogins'),

    path('api/allTeamLeaders/', views.allTeamLeaders, name = 'allTeamLeaders'),

    path('api/member/<str:pk>/', views.memberDetails, name = 'memberDetails'),
    path('api/teamleader/<str:pk>/', views.teamLeaderDetails, name = 'teamLeaderDetails'),

    path('api/updateuser/<str:pk>/', views.updateUser, name = 'updateUser'),
    path('api/deleteuser/<str:pk>/', views.deleteUser, name = 'deleteUser'),


    path('api/createuser/', views.createUser, name = 'createUser'),

    path('api/createMember/', views.createMember, name = 'createMember'),
    path('api/createTeamLeader/', views.createTeamLeader, name = 'createTeamLeader'),
]
