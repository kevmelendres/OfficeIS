# Generated by Django 4.2.2 on 2023-07-16 08:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_project'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='TeamLeader',
            new_name='assignedTeam',
        ),
        migrations.RemoveField(
            model_name='project',
            name='members',
        ),
    ]