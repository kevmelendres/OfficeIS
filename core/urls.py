from django.urls import path
from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('admin-login', views.adminLogin, name='admin-login'),
    path('signup', views.signup, name='signup'),












    # api url patterns starts here
    path('api/user-list/', views.userlist, name = 'user-list'),

]