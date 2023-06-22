from django.urls import path
from . import views

urlpatterns = [
    path('',views.login, name='login'),
    path('signup', views.signup, name='signup'),












    # api url patterns starts here
    path('api/user-list/', views.userlist, name = 'user-list'),

]