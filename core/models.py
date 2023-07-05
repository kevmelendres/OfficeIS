from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class TeamLeader(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)

    firstName = models.CharField(max_length=100,blank=True)
    lastName = models.CharField(max_length=100,blank=True)
    email = models.CharField(max_length=100,blank=True)

    username = models.CharField(max_length=100,blank=True)
    employeeRole = models.CharField(max_length=100,blank=True)
    
    
    bio = models.TextField(blank=True)
    profileimg = models.ImageField(upload_to='profile_images', default='blankprofile.png')
    location = models.CharField(max_length=100,blank=True)

    def __str__(self):
        return self.user.username
    
class Member(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    id = models.AutoField(primary_key=True)

    firstName = models.CharField(max_length=100,blank=True)
    lastName = models.CharField(max_length=100,blank=True)
    email = models.CharField(max_length=100,blank=True)

    username = models.CharField(max_length=100,blank=True)
    employeeRole = models.CharField(max_length=100,blank=True)
    
    bio = models.TextField(blank=True)
    profileimg = models.ImageField(upload_to='profile_images', default='blankprofile.png')
    location = models.CharField(max_length=100,blank=True)

    assignedTL = models.ForeignKey(TeamLeader, on_delete=models.PROTECT, null=True) 